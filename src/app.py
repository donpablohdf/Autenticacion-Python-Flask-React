"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from dotenv import load_dotenv
from api.utils import APIException, generate_sitemap

from api.models import db
# Add separate routes in routes directory
from api.routes.sections import *
from api.routes.films import *
from api.routes.people import *
from api.routes.planets import *
from api.routes.species import *
from api.routes.starships import *
from api.routes.vehicles import *
from api.routes.users import *
from api.routes.vehicles import *
from api.routes.login import *

from api.admin import setup_admin
from api.commands import setup_commands


ENV = os.getenv("FLASK_DEBUG")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

api = Blueprint('api', __name__)
# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Add separate routes in routes directory
app.register_blueprint(r_sections, url_prefix="/api")
app.register_blueprint(r_films, url_prefix="/api")
app.register_blueprint(r_people, url_prefix="/api")
app.register_blueprint(r_planets, url_prefix="/api")
app.register_blueprint(r_species, url_prefix="/api")
app.register_blueprint(r_starships, url_prefix="/api")
app.register_blueprint(r_users, url_prefix="/api")
app.register_blueprint(r_vehicles, url_prefix="/api")
# app.register_blueprint(r_login, url_prefix="/api")
# app.register_blueprint(r_films, url_prefix="/api")
# app.register_blueprint(r_films, url_prefix="/api")



# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV=="development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    load_dotenv()
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
