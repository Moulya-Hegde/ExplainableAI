import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, confusion_matrix
from vis import genplots

# Load the dataset
file_path = 'loan_data.csv'
data = pd.read_csv(file_path)

# Preview the dataset
#print("Dataset Preview:")
#print(data.head())

# Step 1: Preprocess the data
# Convert categorical columns to numerical using Label Encoding
label_encoder = LabelEncoder()

categorical_columns = [
    'person_gender', 'person_education', 'person_home_ownership',
    'loan_intent', 'previous_loan_defaults_on_file'
]

for col in categorical_columns:
    data[col] = label_encoder.fit_transform(data[col])

# Step 2: Define the features (X) and target (y)
X = data.drop(columns=['loan_status'])  # Features
y = data['loan_status']  # Target

# Step 3: Split the data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Step 4: Train the Logistic Regression model
model = LogisticRegression(max_iter=1000, random_state=42)
model.fit(X_train, y_train)

# Step 5: Make predictions
y_pred = model.predict(X_test)
y_pred_prob = model.predict_proba(X_test)[:, 1]  # Probabilities for class 1

# Step 6: Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
conf_matrix = confusion_matrix(y_test, y_pred)

#print(f"\nModel Accuracy: {accuracy * 100:.2f}%")
#print("Confusion Matrix:")
#print(conf_matrix)

# Step 7: Prediction with probabilities
loan_predictions = ['Loan Approved' if prob >= 0.5 else 'Loan Denied' for prob in y_pred_prob]

print("\nSample Predictions with Probabilities:")
#for i in range(10):
    #print(f"Predicted Probability: {y_pred_prob[i]:.2f}, Prediction: {loan_predictions[i]}")

# Step 8: Feature Importance
coefficients = model.coef_[0]  # Extract coefficients
feature_names = X.columns

importance_df = pd.DataFrame({
    "Feature": feature_names,
    "Importance": coefficients
}).sort_values(by="Importance", key=np.abs, ascending=False)

#print("\nFeature Importance based on Logistic Regression Coefficients:")
#print(importance_df)

genplots(model, X_train, y_train, y_pred_prob, conf_matrix , importance_df)