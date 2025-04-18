# **Explainable AI for Loan Approval System**

## 📖 **Overview**

Welcome to **Explainable AI**! This project aims to build an intelligent and **explainable loan approval system** that provides insights into the decision-making process. The goal is to help financial analysts and institutions understand the reasons behind loan approval or rejection, making AI-based decisions more transparent and accessible.

The system combines machine learning (ML) models with **explainability techniques** to not only predict loan approvals but also explain the reasons behind these decisions. This ensures that financial decisions are not black-boxed and that the process can be easily understood by users, making it easier to trust the system.

---

## 🚀 **Key Features**

- **AI-Powered Loan Approval**: A machine learning model predicts whether a loan should be approved based on various applicant features like age, income, credit score, etc.
- **Explanations**: Each loan approval decision comes with a detailed explanation showing the factors influencing the decision.
- **Transparency**: By leveraging explainable AI techniques like  Model-Agnostic, users can understand how the model arrived at its decision.
- **User Dashboard**: A fully interactive dashboard displaying various metrics like loan approval rates, applicant trends, and more.
- **Real-time Insights**: Get real-time updates and predictions with a beautiful and responsive UI.

---

## 🛠 **Tech Stack**

**Frontend**:
- **React** with **Vite** for fast and modern web development.
- **Tailwind CSS** for a responsive and elegant design.
- **Framer Motion** for beautiful and smooth animations.

**Backend**:
- **Flask** for serving machine learning models and handling API requests.
- **Firebase** for authentication

- **Python** for machine learning and data processing.
- **GeminiAI and Logistic Regression** for generating predictions and explanations.

- **Framer Motion** for UI animations.

---

## 🌱 **Getting Started**

To get this project running on your local machine, follow the steps below:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/ExplainableAI.git
cd ExplainableAI
```

### 2. Set Up Backend


## Backend Environment Setup

1. **Create a Virtual Environment** (optional but recommended):

   ```bash
   python3 -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
   ```

2. **Install Dependencies**:
    Navigate to directory
    ```
    cd ML2
    ```
    
   ```bash
   pip install -r requirements.txt
   ```

Set up the `.env` file to store environment variables (like API keys and database configurations):

```bash
touch .env
```

Example of `.env` file:

```ini
API_KEY=your-api-key
```

Run the Flask server:

```bash
flask run
```

The backend will now be running at `http://localhost:5000`.

### 3. Frontend Setup

Install frontend dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The frontend will now be running at `http://localhost:3000`.

---

## 📊 Features and Components

### Loan Approval Page

- A form where users input data like income, credit score, loan amount, etc.
- On form submission, the system predicts loan approval and provides a detailed explanation using explainable AI techniques.

### Dashboard

Displays key metrics like:

- Total applications
- Approval rates
- Average credit score
- Rejection reasons

Data visualizations include pie charts and bar graphs.

### History Page

- Shows past loan approval decisions with explanations.
- Allows users to explore past trends and approval reasons in detail.

### 🔒 Authentication & Authorization

- **Sign Up / Log In**: Users need to sign up and log in to access the loan approval prediction and dashboard features.
- **Authentication**: Utilizes Firebase for handling authentication and secure login (email verification, token-based authentication).

---

## 🧑‍💻 Contributing

Contributions are welcome! To contribute to the project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

---


## 👨‍💻 Contact

Have questions or suggestions? Feel free to reach out to:

- **Email**: moulyahegde2004@gmail.com
- **GitHub**: Moulya-Hegde

