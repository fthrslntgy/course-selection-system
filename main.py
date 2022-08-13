from flask import Flask, render_template, request, flash
from sqlalchemy.dialects.postgresql import UUID
from flask_sqlalchemy import SQLAlchemy
import uuid

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:fatih1@localhost/dss'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = 'secret string'
db = SQLAlchemy(app)

class User(db.Model):

    __tablename__ = 'User'
    Username = db.Column(db.String(10), primary_key=True, nullable=False)
    Password = db.Column(db.String(10), nullable=False)
    Fname = db.Column(db.String(15), nullable=False)
    Minit = db.Column(db.String(15), nullable=True)
    Lname = db.Column(db.String(15), nullable=False)
    Birthdate = db.Column(db.DateTime, nullable=True)
    Address = db.Column(db.String(200), nullable=True)
    PhoneNumber = db.Column(db.String(15), unique=True, nullable=True)
    GroupType = db.Column(db.String(15), nullable=False)
    FirstLogin = db.Column(db.Boolean, nullable=False)

    def __init__(self, Username, Password, Fname, Minit, Lname, Birthdate, Address, PhoneNumber, GroupType, FirstLogin):
        self.Username = Username
        self.Password = Password
        self.Fname = Fname       
        self.Minit = Minit       
        self.Lname = Lname
        self.Birthdate = Birthdate
        self.Address = Address
        self.PhoneNumber = PhoneNumber
        self.GroupType = GroupType
        self.FirstLogin = FirstLogin

class Notification(db.Model):

    __tablename__ = 'Notification'
    N_Username = db.Column(db.String(10), primary_key=True, nullable=False)
    NotificationID = db.Column(UUID(as_uuid=True), primary_key=True, unique=True, nullable=False)
    Date = db.Column(db.DateTime, nullable=False)
    Title = db.Column(db.String(20), nullable=False)
    Message = db.Column(db.String(200), nullable=False)
    Receipts = db.Column(db.Boolean, nullable=False)

    def __init__(self, N_Username, Date, Title, Message, Receipts):
        self.N_Username = N_Username
        self.Date = Date       
        self.Title = Title       
        self.Message = Message
        self.Receipts = Receipts

class Admin(db.Model):

    __tablename__ = 'Admin'
    AD_Username = db.Column(db.String(10), primary_key=True, nullable=False)
    AccessLevel = db.Column(db.Integer, nullable=False)

    def __init__(self, AD_Username, AccessLevel):
        self.AD_Username = AD_Username
        self.AccessLevel = AccessLevel

class Department(db.Model):

    __tablename__ = 'Department'
    Depcode = db.Column(db.String(3), primary_key=True, nullable=False)
    Head = db.Column(db.String(10), unique=True, nullable=False)
    CreditLimit = db.Column(db.Integer, nullable=False)

    def __init__(self, Depcode, Head, CreditLimit):
        self.Depcode = Depcode
        self.Head = Head
        self.CreditLimit = CreditLimit

class Academician(db.Model):

    __tablename__ = 'Academician'
    A_Username = db.Column(db.String(10), primary_key=True, nullable=False)
    A_DepCode = db.Column(db.String(3), nullable=False)
    A_Degree = db.Column(db.String(10), nullable=False)

    def __init__(self, A_Username, A_DepCode, A_Degree):
        self.A_Username = A_Username
        self.A_DepCode = A_DepCode
        self.A_Degree = A_Degree

class Student(db.Model):

    __tablename__ = 'Student'
    S_Username = db.Column(db.String(10), primary_key=True, nullable=False)
    S_DepCode = db.Column(db.String(3), nullable=False)
    Advicer = db.Column(db.String(10), nullable=False)
    StudentNumber = db.Column(db.Integer, unique=True, nullable=False)
    S_Degree = db.Column(db.String(10), nullable=False)
    Grade = db.Column(db.Integer, nullable=False)

    def __init__(self, S_Username, S_DepCode, Advicer, StudentNumber, S_Degree, Grade):
        self.S_Username = S_Username
        self.S_DepCode = S_DepCode
        self.Advicer = Advicer
        self.StudentNumber = StudentNumber
        self.S_Degree = S_Degree
        self.Grade = Grade

class Lecture(db.Model):

    __tablename__ = 'Lecture'
    LectureCode = db.Column(db.Integer, primary_key=True, nullable=False)
    L_DepCode = db.Column(db.String(3), primary_key=True, nullable=False)
    Lecturer = db.Column(db.String(10), nullable=False)
    Assistant = db.Column(db.String(10), unique=True, nullable=True)
    Credit = db.Column(db.Integer, nullable=False)
    Quota = db.Column(db.Integer, nullable=False)

    def __init__(self, LectureCode, L_DepCode, Lecturer, Assistant, Credit, Quota):
        self.LectureCode = LectureCode
        self.L_DepCode = L_DepCode
        self.Lecturer = Lecturer
        self.Assistant = Assistant
        self.Credit = Credit
        self.Quota = Quota

class Student_Lectures(db.Model):

    __tablename__ = 'Student_Lectures'
    SL_Username = db.Column(db.String(10), primary_key=True, nullable=False)
    SL_Depcode = db.Column(db.String(3), primary_key=True, nullable=False)
    SL_LectureCode = db.Column(db.Integer, primary_key=True, nullable=False)
    Approved = db.Column(db.String(10), nullable=False)

    def __init__(self, SL_Username, SL_Depcode, SL_LectureCode, Approved):
        self.SL_Username = SL_Username
        self.SL_Depcode = SL_Depcode
        self.SL_LectureCode = SL_LectureCode
        self.Approved = Approved

@app.route('/')  
def Login():    
    if(request.method == "GET"):
        return render_template('login.html')  

if __name__ == '__main__':
    db.create_all()
    app.run()