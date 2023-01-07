from flask import Flask as Fl, request as rq, render_template as ui

# Create a Flask instance
app = Fl(__name__)


# route and function for index page
# @app.route('/',methods=['GET'])
@app.route('/')
def index():
  # p = rq.args.get('prompt');
  return ui('index.html')


if __name__ == '__main__':
    app.run(debug=True)
    
