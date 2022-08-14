from flask import Flask, render_template, request, flash
import psycopg2

app = Flask(__name__)
def get_db_connection():
    conn = psycopg2.connect(host='localhost', database='dss', user='postgres', password='Mert_201')
    return conn
active_username = ""
active_group = ""

@app.route('/')  
def home():    
    if(request.method == "GET"):
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
                active_username = username
                conn = get_db_connection()
                cur = conn.cursor()
                cur.execute('SELECT GroupType FROM "USER" WHERE username=\'' + username + '\';')
                query = cur.fetchall()
                cur.close()
                conn.close()
                group = query[0][0]
                active_group = group
                if(active_group == "admin"):
                    return render_template('admin.html', username=active_username)
                elif(active_group == "academician"):
                    return render_template('academician.html', username=active_username) 
                else:
                    return render_template('student.html', username=active_username)  

@app.route('/Logout',  methods=['GET'])  
def Logout():    
    if(request.method == "GET"):
        active_username = ""
        active_group = ""
        return render_template('login.html', message="Başarıyla çıkış yaptınız!")

if __name__ == '__main__':
    app.run()