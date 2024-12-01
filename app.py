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


@app.route('/predict', methods=['POST'])
def run_function():
    input_value = request.form['inputValue']
    model_option = request.form['dropdownValue']

    print(model_option)
    ## make sure input

    model_function_ex(input_value, model_option)

    rendered_html = render_template('result.html', value=input_value)
    return rendered_html

def model_function_ex(months, model_option):
    # Example of a Python function that you want to run
    return "Hello, function was successfully run!"


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(port=8000)
