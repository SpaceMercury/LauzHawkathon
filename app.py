from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Define a simple Python function
def my_function(param):
    return f"Hello, {param}!"

# Define an HTTP route that calls the Python function
@app.route('/call_function', methods=['GET'])
def call_function():
    # Get a query parameter from the URL
    param = request.args.get('param', default='World', type=str)
    # Call your function
    result = my_function(param)
    # Return the result as a JSON response
    return jsonify({'result': result})

from flask import send_file
import matplotlib.pyplot as plt
import io
import random
import pandas as pd


@app.route('/predict', methods=['POST'])
def run_function():
    input_value = request.form['inputValue']
    model_option = request.form['dropdownValue']

    print(model_option)
    ## make sure input

    model_function_ex(int(input_value), model_option)

    rendered_html = render_template('result.html', value=input_value)
    return rendered_html

import pickle
def model_function_ex(months, model_option):
    # Example of a Python function that you want to run

    # Base dataframe
    base_df = pd.read_csv('/Users/polfuentes/randomProjects/LauzHawkathon/clean_data/BRISTOR_Zegoland_all_%.csv')

    # Load the model
    model = 0
    with open('/Users/polfuentes/randomProjects/LauzHawkathon/models/xgBoostUnivariate.pkl', 'rb') as file:
        model = pickle.load(file)

    start_date = '2024-06-01'
    # Generate new dates
    new_dates = pd.date_range(start=start_date, periods=months, freq='MS')
    # Create an empty dataframe with the new dates
    new_df = pd.DataFrame({'ds': new_dates})

    ##Predict
    forecast = model.predict(new_df)

    base_df = base_df[['Date', 'Value']]
    base_df.rename(columns={'Date': 'ds', 'Value': 'yhat'}, inplace=True)
    final_df = pd.concat([base_df, forecast])

    final_df['ds'] = pd.to_datetime(final_df['ds'])

    # Save the final dataframe to a CSV file
    final_df.to_csv('/Users/polfuentes/randomProjects/LauzHawkathon/static/data/output.csv', index=False)

    return


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(port=8000)
