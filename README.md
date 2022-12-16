# Data-Entry-Editor
# To run backend
Open Command Prompt
Navigate to project folder in Command Prompt
Activate virtual environment using following command: .\jupitor_env\Scripts\activate
Pip install -r requirements.txt
(For the following command ensure you have mysql installed in your system.)
Create a database called Jupitor in your mysql server.
Change the username and password in settings.py in the project folder according to your mysql server username and password. 
In the command prompt, type: python manage.py makemigrations
Then type: python manage.py migrate
Finally to run the server: python manage.py runserver

# To run frontend
Ensure that you have Nodejs and npm installed in your system.
Open command prompt:
Navigate to project folder in Command Prompt
type the command: npm install
Finally to run frontend, type  : npm start

