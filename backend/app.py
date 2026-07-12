from flask import Flask, request,render_template
import sqlite3

app = Flask(__name__)

def get_connection():
    conn = sqlite3.connect("assetflow.db")
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/")
def home():
    return "AssetFlow Backend Running"

@app.route("/login", methods=["POST"])
def login():
    email = request.form["email"]
    password = request.form["password"]

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM Users WHERE Email=? AND Password=?",
        (email, password)
    )

    user = cursor.fetchone()
    conn.close()

    if user:
        return render_template("dashboard_b.html")
    else:
        return "Invalid Email or Password"
    
@app.route("/signup", methods=["POST"])
def signup():

    email = request.form["email"]
    password = request.form["password"]

    conn = get_connection() #open database
    cursor = conn.cursor()#to write 

    cursor.execute(
        "INSERT INTO Users (Email, Password) VALUES (?, ?)",
        (email, password)  #adding a new user
    )

    conn.commit()#storing the value
    conn.close()

    return "Registration Successful"

if __name__ == "__main__":
    app.run(debug=True)