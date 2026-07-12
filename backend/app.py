from flask import Flask, request,render_template
import sqlite3
from database import get_connection

app = Flask(__name__)

@app.route("/")
def home():
     return render_template("login.html")

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

    return "Registration succesful pls go back for login"

@app.route("/add_asset", methods=["POST"])
def add_asset():

    asset = request.form["assetName"]
    category = request.form["assetCategory"]
    status = request.form["assetStatus"]
    allocated = request.form["allocatedTo"]

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO Assets
        (AssetName,Category,Status,AllocatedTo)
        VALUES(?,?,?,?)
    """,(asset,category,status,allocated))

    conn.commit()
    conn.close()

    return "Asset Added Successfully"

@app.route("/assets")
def assets():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM Assets")

    assets = cursor.fetchall()

    conn.close()

    return render_template("asset.html", assets=assets)
@app.route("/add_department", methods=["POST"])
def add_department():

    name=request.form["deptName"]
    parent=request.form["deptParent"]
    head=request.form["deptHead"]
    status=request.form["deptStatus"]

    conn=get_connection()
    cursor=conn.cursor()

    cursor.execute("""
    INSERT INTO Departments
    (DepartmentName,ParentDepartment,DepartmentHead,Status)
    VALUES(?,?,?,?)
    """,(name,parent,head,status))

    conn.commit()
    conn.close()

    return "Department Added Successfully"

@app.route("/add_category", methods=["POST"])
def add_category():

    name=request.form["catName"]
    warranty=request.form["catWarranty"]
    description=request.form["catDescription"]
    status=request.form["catStatus"]

    conn=get_connection()
    cursor=conn.cursor()

    cursor.execute("""
    INSERT INTO Categories
    (CategoryName,Warranty,Description,Status)
    VALUES(?,?,?,?)
    """,(name,warranty,description,status))

    conn.commit()
    conn.close()

    return "Category Added Successfully"
@app.route("/add_employee", methods=["POST"])
def add_employee():

    name=request.form["empName"]
    email=request.form["empEmail"]
    department=request.form["empDepartment"]
    role=request.form["empRole"]
    status=request.form["empStatus"]

    conn=get_connection()
    cursor=conn.cursor()

    cursor.execute("""
    INSERT INTO Employees
    (Name,Email,Department,Role,Status)
    VALUES(?,?,?,?,?)
    """,(name,email,department,role,status))

    conn.commit()
    conn.close()

    return "Employee Added Successfully"

if __name__ == "__main__":
    app.run(debug=True)