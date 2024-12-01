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


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(port=8000)
