from lib2to3.pytree import Base
from flask import Flask, render_template, request, jsonify, flash
import psycopg2
import psycopg2.extras
import time

app = Flask(__name__)
app.secret_key = 'random string'
def get_db_connection():
    conn = psycopg2.connect(host='localhost', database='dss', user='postgres', password='Mert_201')
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    return conn, cur

global active_username
global active_group
def set_globals(username, group):
    global active_username, active_group
    active_username = username
    active_group = group

def get_globals():
    global active_username, active_group
    return active_username, active_group

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
        conn, cur = get_db_connection()
        cur.execute('SELECT * FROM "USER" WHERE username=%s', [username])
        query = cur.fetchone()
        cur.close()
        conn.close()
        if query is None or len(query) == 0:
            return render_template('login.html', message="Hatalı kullanıcı adı!")    
        else: 
            db_passwd = query['Password']
            if db_passwd != password:
                return render_template('login.html', message="Hatalı şifre!")
            else:
                group = query['grouptype']
                set_globals(username, group)
                if(group == "admin"):
                    return render_template('admin.html', username=username)
                elif(group == "academician"):
                    return render_template('academician.html', username=username) 
                else:
                    return render_template('student.html', username=username)  

@app.route('/Logout',  methods=['GET'])  
def Logout():    
    if(request.method == "GET"):
        set_globals("", "")
        return render_template('login.html', message="Başarıyla çıkış yaptınız!")

@app.route("/get_all_depcodes",methods=["POST","GET"])
def get_all_depcodes():
    if request.method == 'POST':
        conn, cur = get_db_connection()
        cur.execute('SELECT * FROM "DEPARTMENT"')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('api_depcodes_form.html', depcodes=query)})

@app.route("/get_all_lectures",methods=["POST","GET"])
def get_all_lectures():
    if request.method == 'POST':
        conn, cur = get_db_connection()
        cur.execute('SELECT * FROM "LECTURE" AS L, "USER" AS U WHERE L.lecturer=U.username')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('api_lectures_table.html', lectures=query)})

@app.route("/get_all_students",methods=["POST","GET"])
def get_all_students():
    if request.method == 'POST':
        conn, cur = get_db_connection()
        cur.execute('SELECT * FROM "STUDENT" AS S, "USER" AS U WHERE S.s_username=U.username')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('api_students_table.html', students=query)})

@app.route("/get_all_academicians",methods=["POST","GET"])
def get_all_academicians():
    if request.method == 'POST':
        conn, cur = get_db_connection()
        cur.execute('SELECT * FROM "ACADEMICIAN" AS A, "USER" AS U WHERE A.a_username=U.username')
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('api_academicians_table.html', academicians=query)})

@app.route("/get_academicians_with_depcode",methods=["POST","GET"])
def get_academicians_with_depcode():
    if request.method == 'POST':
        depcode = request.form.get("depcode")
        conn, cur = get_db_connection()
        cur.execute('SELECT * FROM "ACADEMICIAN" as A, "USER" as U WHERE A.a_depcode=%s AND A.a_username=U.username', [depcode])
        query = cur.fetchall()
        cur.close()
        conn.close()
        return jsonify({'htmlresponse': render_template('api_academicians_form.html', academicians=query)})

@app.route("/create_lecture",methods=["POST","GET"])
def create_lecture():
    if request.method == 'POST':
        depcode = request.form.get("dep-codes")
        lecturecode = request.form.get("lecturecode")
        lecturer = request.form.get("academician-names")
        quota = request.form.get("quota")
        quota = int(quota)
        try:
            credit = request.form.get("credit")
            credit = int(credit)
            conn, cur = get_db_connection()
            cur.execute('INSERT INTO "LECTURE" (LectureCode, L_DepCode, Lecturer, Credit, Quota) VALUES (%s, %s, %s, %s, %s)', (lecturecode, depcode, lecturer, credit, quota))
            conn.commit()
            cur.close()
            conn.close()
        except BaseException as e:
            flash('Ders oluşturulamadı! --> ' + str(e))
        else:
            flash('Ders başarıyla oluşturuldu!')
        finally:
            active_username, active_group = get_globals()
            if(active_group == "admin"):
                    return render_template('admin.html', username=active_username)
            elif(active_group == "academician"):
                return render_template('academician.html', username=active_username) 
            else:
                return render_template('student.html', username=active_username)

if __name__ == '__main__':
    app.run()