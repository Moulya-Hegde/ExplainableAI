from flask import Flask, jsonify,request,json,send_file
import pandas as pd
from trainedModel import model,X,importance_df
from PIL import Image
import base64
from summary import getsummary
from db import initdb
from dboper import updateuserdb,updatestatsdb
from flask_cors import CORS
client = initdb()
db = client["LoanApproval"]
app = Flask(__name__)
CORS(app)
@app.route('/getapproval', methods=['POST'])
def get_approval():
    data = request.get_json()
    new_data = pd.DataFrame([{
    'person_age': data['age'],
    'person_gender': data['gender'],  # 1 = Female, 0 = Male (based on your encoding)
    'person_education': data['edu'],  # use the correct numeric encoding for 'Graduate'
    'person_income': data['inc'],
    'person_emp_exp': data['emp'],
    'person_home_ownership': data['pho'],  # e.g., 2 = RENT
    'loan_amnt': data['amt'],
    'loan_intent': data['intent'],  # e.g., 3 = PERSONAL
    'loan_int_rate': data['rate'],
    'loan_percent_income': data['percinc'],
    'cb_person_cred_hist_length': data['cpc'],
    'credit_score': data['credit'],
    'previous_loan_defaults_on_file': data['prev']  # e.g., 0 = N, 1 = Y
    }])
    new_data = new_data[X.columns]
    
    # Predict using the trained model
    new_prediction = model.predict(new_data)[0]
    new_prediction_prob = model.predict_proba(new_data)[0][1]

    # Output result
    #print("\n--- New Data Prediction ---")
    #print(f"Predicted Probability of Approval: {new_prediction_prob:.2f}")
    #print("Loan Prediction:", "Loan Approved" if new_prediction == 1 else "Loan Denied")
    
    
    #ENTIRE SUMMARY GEMINI STUFF
    
    impd = importance_df
    out = json.loads(json.dumps(list(impd.T.to_dict().values())))
    jsondict = json.dumps(out)
    res = "Loan Prediction:", "Loan Approved" if new_prediction == 1 else "Loan Denied"
    parts = getsummary(jsondict,new_data.to_string(),res,data,new_prediction_prob,new_prediction,db)
    
    # END OF GEMINI STUFF
 
    
    updatestatsdb(new_prediction,data,db)

    return jsonify(parts)



        

@app.route('/getimp', methods=['GET'])
def get_imp():
    impd = importance_df
    out = json.loads(json.dumps(list(impd.T.to_dict().values())))
    jsondict = json.dumps(out)
    json_object = json.loads(jsondict)
    return jsonify(json_object)


@app.route('/getimage1', methods=['GET'])
def get_images1():
    return send_file('images/coef.png',as_attachment=True)

@app.route('/getimage2', methods=['GET'])
def get_images2():
    return send_file('images/confusion.png',as_attachment=True)

@app.route('/getimage3', methods=['GET'])
def get_images3():
    return send_file('images/dimension.png',as_attachment=True)

@app.route('/getimage4', methods=['GET'])
def get_images4():
    return send_file('images/dist.png',as_attachment=True)
   
@app.route('/getimage5', methods=['GET'])
def get_images5():
    return send_file('images/partial.png',as_attachment=True)

@app.route('/getuserdata', methods=['GET'])
def getusers():
    col = db["users"]
    x = list(col.find({}))
    ls = []
    for doc in x:
        ls.append(doc)
    return jsonify(ls)

@app.route('/getstats', methods=['GET'])
def getstats():
    col = db["stats"]
    x = list(col.find({}))
    ls = []
    for doc in x:
        ls.append(doc)
    return jsonify(ls)

if __name__ == '__main__':
    app.run(debug=True)