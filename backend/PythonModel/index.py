import sys
import json
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.preprocessing import LabelEncoder

def predict_disease(input_symptom):
    # Load the dataset
    df = pd.read_csv("D:\\disease_predictor\\backend\\PythonModel\\dataset.csv", encoding="latin-1")

    # Initialize label encoder and encode the target variable
    label_encoder = LabelEncoder()
    df['disease_encoded'] = label_encoder.fit_transform(df['disease'])

    # Tokenize symptoms
    vectorizer = CountVectorizer(lowercase=True)
    X = vectorizer.fit_transform(df['symptoms'])
    y = df['disease_encoded']

    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Fit the linear regression model
    model = LinearRegression()
    model.fit(X_train, y_train)

    # Preprocess the input symptom using the trained CountVectorizer
    X_input = vectorizer.transform([input_symptom])

    # Predict the disease based on the input symptom
    predicted_disease_code = model.predict(X_input)
    predicted_disease = label_encoder.inverse_transform([int(predicted_disease_code[0])])

    # Construct the result dictionary
    result = {"predicted_disease_code": predicted_disease_code[0], "predicted_disease": predicted_disease[0]}
    return result

if __name__ == "__main__":
    # Read input_symptom from command-line argument
    input_symptom = sys.argv[1] 
    try:
     results = predict_disease(input_symptom)
     print(json.dumps(results))
    except Exception as e:
     # Handle any exceptions that occur during execution
     print(f"Error occurred: {e}")