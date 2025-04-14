# 🧬 Prostate Cancer Detection using Machine Learning

![Python](https://img.shields.io/badge/Python-3.10-blue)
![Scikit-learn](https://img.shields.io/badge/ML-Scikit--learn-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

A machine learning-based diagnostic system for detecting **Prostate Cancer** from clinical data. This project uses supervised learning models to classify cancer presence and provides performance metrics to compare different algorithms.

---

## 🚀 Live Project Links

🔗 **Portfolio**: [https://ahmadyasin.vercel.app/](https://ahmadyasin.vercel.app/)  
🔗 **LinkedIn**: [www.linkedin.com/in/mian-ahmad-yasin](https://www.linkedin.com/in/mian-ahmad-yasin)

---

## 📌 Overview

This project aims to assist in early diagnosis of **Prostate Cancer** by training machine learning models on real-world medical data. It allows for the exploration of various classifiers and evaluation of their accuracy and reliability in predicting cancer.

---

## 🧠 Features

- 🩺 Predicts cancer presence based on key clinical indicators  
- 🔍 Implements multiple ML models: Logistic Regression, Random Forest, KNN, SVM  
- 📊 Includes preprocessing, encoding, outlier removal, and feature scaling  
- 📈 Detailed evaluation with accuracy, precision, recall, F1-score & ROC-AUC  
- 📉 Visualization of feature correlation, confusion matrix & ROC curves

---

## 📚 Dataset

- **Source**: [UCI Machine Learning Repository](https://archive.ics.uci.edu/)
- **Attributes may include**:
  - PSA (Prostate-Specific Antigen)
  - Age
  - Prostate Volume
  - Gleason Score
  - Digital Rectal Exam Findings
- **Target**: Presence (`1`) or Absence (`0`) of Prostate Cancer

---

## 🛠️ Tech Stack

- **Language**: Python
- **Libraries**: Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, XGBoost (optional)
- **Notebook**: Jupyter Notebook
- **Environment**: Local / Anaconda / VS Code

---

## 📈 Evaluation Metrics
✔️ Accuracy

📉 Precision, Recall, and F1 Score

📊 Confusion Matrix

🔄 Cross-Validation

📐 ROC Curve and AUC

---

## 🖼️ Screenshots

![densenet201_performance](https://github.com/user-attachments/assets/23dfc7f4-7a4c-42b5-a695-ffdc45e48e33)
![efficientnet_b3_performance](https://github.com/user-attachments/assets/8b2bd894-863e-4588-b033-60398f4c8895)
![ensemble_confusion_matrix](https://github.com/user-attachments/assets/07af7bf9-3cef-4522-811a-b54a90932b1f)
![ensemble_roc_curve](https://github.com/user-attachments/assets/ab210ab3-0efb-49d2-999f-d8db0209d4ff)
![model_comparison](https://github.com/user-attachments/assets/b97f1a12-99ea-48c4-8170-e54a61355bd7)
![resnet50_performance](https://github.com/user-attachments/assets/16090ef5-fb76-488a-b5f4-9b3b75a21ce0)
![convnext_small_performance](https://github.com/user-attachments/assets/98686bcd-4db7-4ece-b8b9-35e4354a1d07)

---

## 🔮 Future Enhancements
🧠 Add deep learning models (e.g., MLP, CNNs for imaging data)

📲 Build a Flask or Streamlit web app interface

📈 Hyperparameter tuning (GridSearchCV / RandomizedSearchCV)

🧾 Add model explainability with SHAP or LIME

📂 Allow CSV upload for batch predictions

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repository and submit a pull request.

---

## 📬 Contact
Ahmad Yasin
📧 Email: AhmadYasin.info@gmail.com
🌐 Portfolio: https://ahmadyasin.vercel.app/
🔗 LinkedIn: www.linkedin.com/in/mian-ahmad-yasin

---

## ⭐ Support
If you found this project helpful, please consider giving it a ⭐ star.
It helps others discover the project and keeps me motivated!

---

## ⚙️ How to Run the Project

```bash
# Step 1: Clone the Repository
git clone https://github.com/your-username/Prostate-Cancer-Detection.git
cd Prostate-Cancer-Detection

# Step 2: Create a Virtual Environment (Optional but Recommended)
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Step 3: Install Dependencies
pip install -r requirements.txt

# Step 4: Run the Notebook
jupyter notebook Prostate_Cancer_Detection.ipynb
