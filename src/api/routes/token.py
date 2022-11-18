from flask import Flask, request, jsonify, url_for, Blueprint
from requests import get
from api.models import db, Users
from flask_jwt_extended import create_access_token
# Crea una ruta para autenticar a los usuarios y devolver el token JWT.
# La función create_access_token() se utiliza para generar el JWT.

r_token = Blueprint('r_token', __name__)


@r_token.route("/token", methods=["POST"])
def create_token():
    data = request.get_json()
    print(data)
    # username = request.json.get("username", None)
    # password = request.json.get("password", None)
    # # Consulta la base de datos por el nombre de usuario y la contraseña
    # user = Users.filter.query(username=username, password=password).first()
    # if user is None:
    #     # el usuario no se encontró en la base de datos
    #     return jsonify({"msg": "Bad username or password"}), 401

    # crea un nuevo token con el id de usuario dentro
    # access_token = create_access_token(identity=user.public_id)
    # return jsonify({"token": access_token, "public_id": user.public_id})
    return jsonify({"va a token": "sus muertos"})
