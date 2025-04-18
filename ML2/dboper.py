def updateuserdb(dict1,db):
    col = db["users"]
    x = col.insert_one(dict1)

def updatestatsdb(new_prediction,data,db):
    col = db["stats"]
    x = list(col.find({}))
    if x:
        print("Prev data found")
        ls = list(col.find({"_id":"loanstats"}))
        tot = ls[0]["total"]
        tot = tot +1
        
        if new_prediction==1:
            appr = ls[0]["approved"]
            appr = appr+1
        else:
            rej = ls[0]["rejected"]
            rej = rej+1
        
        avgc = ls[0]["averagecredit"]
        avgc = avgc+data["credit"]
        avgc = avgc/tot
        
        avgi = ls[0]["averageinterest"]
        avgi = avgi + data["rate"]
        avgi = avgi/tot
        
        if new_prediction==1:
                query_filter = {'_id' : 'loanstats'}
                update_operation = { '$set' : 
                    {"total": tot, "approved": appr, "averagecredit": avgc, "averageinterest":avgi}
                }
                result = col.update_one(query_filter, update_operation)
        else:
                query_filter = {'_id' : 'loanstats'}
                update_operation = { '$set' : 
                    {"total": tot, "rejected": rej, "averagecredit": avgc, "averageinterest":avgi}
                }
                result = col.update_one(query_filter, update_operation)
    else:
        print("New")
        dict2 = {"_id": "loanstats",'total':1, 'approved': 1 if new_prediction == 1 else 0, "rejected":  0 if new_prediction == 1 else 1, "averagecredit": data["credit"], "averageinterest": data["rate"], "default": 2.3}
        col = db["stats"]
        x = col.insert_one(dict2)