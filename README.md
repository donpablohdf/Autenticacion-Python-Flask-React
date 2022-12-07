### Styles

You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Back-End Manual Installation

It is recomended to install the backend first, make sure you have Python 3.10, virtualenv or pipenv and a database engine (Posgresql 14 recomended)

1. Install the python packages: `$ pip install -r requirements.txt` and `$ pip install flask-jwt-extended` and `$ pip install requests`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL .env variable with one of the possible values, make sure yo replace the valudes with your database information

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. In SQL directory exits a dump for POSTGRESQL, rename the extensión to sql before import to your database

5. Run the application: `$ pipenv run start`

### Install and configure postgresql in UBUNTU or Gitpod

1.- Install posgresql server `$ sudo apt install postgresql postgresql-contrib`
2.- Create the user for postgresql  `$ createuser --interactive` ask for name and more (ej. youruser)
3.- Create the database `$ createdb yourdatabase`
4.- Add the user to postgresql (the same of 3. ) `$ sudo adduser youruser` ask for password, this is your user/password for connect to DB
5.- Use SQL/dump_for_postgresql.sql for fill your database with shell or other program

### Front-End Manual Installation

- Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

## Publish your website

This boilerplate it's 100% integrated with Herkou, [follow this tutorial](https://start.4geeksacademy.com/backend/deploy-heroku-posgres) and just by pushing your changes to the heroku repository will deploy the website afterwards.
