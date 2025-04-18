import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.inspection import PartialDependenceDisplay


def genplots(model, X_train, y_train, y_pred_prob, conf_matrix , importance_df):
    # 1. 🔍 Feature Importance Bar Chart
    plt.figure(figsize=(10, 6))
    sns.barplot(
        x="Importance", 
        y="Feature", 
        data=importance_df, 
        palette="coolwarm"
    )
    plt.title("🔍 Logistic Regression Feature Importance")
    plt.xlabel("Coefficient Value")
    plt.ylabel("Feature")
    plt.axvline(0, color="gray", linestyle="--")
    plt.tight_layout()
    plt.savefig('images/coef.png', bbox_inches='tight')

    # 2. 🔮 Predicted Probability Distribution
    plt.figure(figsize=(8, 5))
    sns.histplot(y_pred_prob, bins=20, kde=True, color='skyblue')
    plt.title("🔮 Distribution of Predicted Probabilities")
    plt.xlabel("Probability of Loan Approval")
    plt.ylabel("Frequency")
    plt.tight_layout()
    plt.savefig('images/dist.png', bbox_inches='tight')

    # 3. 🧾 Confusion Matrix Heatmap
    plt.figure(figsize=(6, 5))
    sns.heatmap(
        conf_matrix, 
        annot=True, 
        fmt="d", 
        cmap="Blues", 
        xticklabels=["Denied", "Approved"], 
        yticklabels=["Denied", "Approved"]
    )
    plt.title("🧾 Confusion Matrix")
    plt.xlabel("Predicted")
    plt.ylabel("Actual")
    plt.tight_layout()
    plt.savefig('images/confusion.png', bbox_inches='tight')

    # 4. 📊 Coefficient Direction Plot
    plt.figure(figsize=(10, 6))
    importance_df['Direction'] = importance_df['Importance'].apply(lambda x: 'Positive' if x > 0 else 'Negative')
    sns.barplot(
        data=importance_df, 
        x="Importance", 
        y="Feature", 
        hue="Direction", 
        dodge=False, 
        palette={"Positive": "green", "Negative": "red"}
    )
    plt.title("📊 Positive vs. Negative Influence on Loan Approval")
    plt.axvline(0, color='black', linewidth=0.8)
    plt.tight_layout()
    plt.savefig('images/dimension.png', bbox_inches='tight')

    # 5. 📈 Partial Dependence Plots (Manual)
    # You can customize features here
    PartialDependenceDisplay.from_estimator(
        model, 
        X_train, 
        features=['person_income', 'loan_percent_income'],  # Replace with top features if needed
        kind='average',
    )
    plt.suptitle("📈 Partial Dependence Plots")
    plt.tight_layout()
    plt.savefig('images/partial.png', bbox_inches='tight')