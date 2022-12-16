# Data-Entry-Editor  <br />
# To run backend  <br />
Open Command Prompt  <br />
Navigate to project folder in Command Prompt  <br />
Activate virtual environment using following command: .\jupitor_env\Scripts\activate  <br />
Pip install -r requirements.txt  <br />
(For the following command ensure you have mysql installed in your system.)  <br />
Create a database called Jupitor in your mysql server.  <br />
Change the username and password in settings.py in the project folder according to your mysql server username and password.  <br />
In the command prompt, type: python manage.py makemigrations  <br />
Then type: python manage.py migrate  <br />
Finally to run the server: python manage.py runserver  <br />

# To run frontend <br /> 
Ensure that you have Nodejs and npm installed in your system. <br />
Open command prompt:  <br />
Navigate to project folder in Command Prompt  <br />
type the command: npm install  <br />
Finally to run frontend, type  : npm start  <br />

