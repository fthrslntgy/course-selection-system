from flask import Flask, render_template, request, flash
import psycopg2

app = Flask(__name__)
def get_db_connection():
    conn = psycopg2.connect(host='localhost', database='dss', user='postgres', password='fatih1')
    return conn
active_username = ""

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
            return render_template('login.html', message=1)    
        else: 
            db_passwd = query[0][0]
            if db_passwd == password:
                return render_template('login.html', message=2)
            else:
                active_username = username
                return render_template('login.html', message=0)    

if __name__ == '__main__':
    app.run()