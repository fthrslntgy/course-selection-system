from flask import Flask, render_template, request, jsonify
import psycopg2

app = Flask(__name__)
def get_db_connection():
    conn = psycopg2.connect(host='localhost', database='dss', user='postgres', password='fatih1')
    return conn
global active_username
global active_group

def set_globals(username, group):
    global active_username, active_group
    active_username = username
    active_group = group

@app.route('/')  
def home():    
    if(request.method == "GET"):
        set_globals("", "")
        return render_template('login.html')  

@app.route('/Login', methods=['GET', 'POST'])  
def Login():        
    if(request.method == "POST"):
        username = request.form.get("username")
        password = request.form.get("password")
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT "Password" FROM "USER" WHERE username=\'' + username + '\';')
        query = cur.fetchall()
        cur.close()
        conn.close()
        if len(query) == 0:
            return render_template('login.html', message="Hatalı kullanıcı adı!")    
        else: 
            db_passwd = query[0][0]
            if db_passwd != password:
                return render_template('login.html', message="Hatalı şifre!")
            else:
                conn = get_db_connection()
                cur = conn.cursor()
                cur.execute('SELECT GroupType FROM "USER" WHERE username=\'' + username + '\';')
                query = cur.fetchall()
                cur.close()
                conn.close()
                group = query[0][0]
                set_globals(username, group)
                if(active_group == "admin"):
                    return render_template('admin.html', username=username)
                elif(active_group == "academician"):
                    return render_template('academician.html', username=username) 
                else:
                    return render_template('student.html', username=username)  

@app.route('/Logout',  methods=['GET'])  
def Logout():    
    if(request.method == "GET"):
        active_username = ""
        active_group = ""
        return render_template('login.html', message="Başarıyla çıkış yaptınız!")

@app.route("/get_user_info",methods=["POST","GET"])
def get_user_info():
    if request.method == 'GET':
        print(active_username)
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT Username, Fname, Minit, Lname, Birthdate, "Address", PhoneNumber FROM "USER" WHERE username=\'' + active_username + '\';')
        query = cur.fetchall()
        cur.close()
        conn.close()
        print(query)
        return jsonify({'htmlresponse': render_template('response.html', info=query)})

@app.route("/get_all_notifications",methods=["POST","GET"])
def get_all_notifications():
    if request.method == 'POST':
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT "Date", "Title", "Message" FROM "NOTIFICATION" WHERE N_Username=\'' + active_username + '\';')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('response.html', notifications=query)})

@app.route("/get_unread_notifications",methods=["POST","GET"])
def get_unread_notifications():
    if request.method == 'POST':
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT "Date", "Title", "Message" FROM "NOTIFICATION" WHERE Receipts=FALSE AND N_Username=\'' + active_username + '\';')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('response.html', notifications=query)})

@app.route("/get_all_depcodes",methods=["POST","GET"])
def get_all_depcodes():
    if request.method == 'POST':
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT DepCode FROM "DEPARTMENT";')
        depcodes = cur.fetchall()
        cur.close()
        conn.close()
        print(depcodes)
        return jsonify({'htmlresponse': render_template('depcodes.html', depcodes=depcodes)})

@app.route("/get_credit_limit_by_depcode",methods=["POST","GET"])
def get_credit_limit_by_depcode():
    if request.method == 'POST':
        depcode = request.form.get("depcode")
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT CreditLimit FROM "DEPARTMENT" WHERE DepCode=\'' + depcode + '\';')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('response.html', limit=query)})

@app.route("/get_all_academicians",methods=["POST","GET"])
def get_all_academicians():
    if request.method == 'POST':
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT A_Username, A_DepCode FROM "ACADEMICIAN";')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('response.html', academicians=query)})

@app.route("/get_academician_by_depcode",methods=["POST","GET"])
def get_academician_by_depcode():
    if request.method == 'POST':
        depcode = request.form.get("depcode")
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT A_Username, A_DepCode FROM "ACADEMICIAN" WHERE A_DepCode=\'' + depcode + '\';')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('response.html', academicians=query)})

@app.route("/get_all_students",methods=["POST","GET"])
def get_all_students():
    if request.method == 'POST':
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT S_Username, S_DepCode, Advicer, StudentNumber, "S_Degree", Grade FROM "STUDENT";')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('response.html', students=query)})

@app.route("/get_student_info",methods=["POST","GET"])
def get_student_info():
    if request.method == 'POST':
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT S_Username, S_DepCode, Advicer, StudentNumber, "S_Degree", Grade FROM "STUDENT" WHERE S_Username=\'' + active_username + '\';')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('response.html', info=query)})

@app.route("/get_all_lectures",methods=["POST","GET"])
def get_all_lectures():
    if request.method == 'POST':
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT LectureCode, L_DepCode, Lecturer FROM "LECTURE";')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('response.html', lectures=query)})

@app.route("/get_lecture_by_lecturer",methods=["POST","GET"])
def get_lecture_by_lecturer():
    if request.method == 'POST':
        lecturer = request.form.get("lecturer")
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT LectureCode, L_DepCode, Lecturer FROM "LECTURE" WHERE Lecturer=\'' + lecturer + '\';')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('response.html', lectures=query)})

@app.route("/get_studentlecture_by_student",methods=["POST","GET"])
def get_studentlecture_by_student():
    if request.method == 'POST':
        student = request.form.get("student")
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT SL_Depcode, SL_LectureCode, validApproved, Lecturer FROM "STUDENT_LECTURES" WHERE SL_Username=\'' + student + '\';')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('response.html', studentlectures=query)})

@app.route("/get_studentlecture_by_lecture",methods=["POST","GET"])
def get_studentlecture_by_lecture():
    if request.method == 'POST':
        depcode = request.form.get("depcode")
        lecturecode = request.form.get("lecturecode")
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT SL_Username, validApproved, Lecturer FROM "STUDENT_LECTURES" WHERE SL_Depcode=\'' + depcode + '\' and SL_LectureCode=\'' + lecturecode + '\';')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('response.html', studentlectures=query)})

if __name__ == '__main__':
    app.run()