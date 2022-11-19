from flask import Flask, request, jsonify, Blueprint
from requests import get
from api.models import db, Users
from flask_jwt_extended import jwt_required, get_jwt_identity, current_user

from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

r_private = Blueprint('r_private', __name__)


@r_private.route('/private', methods=['POST', 'GET'])
@jwt_required()
def handle_sections():
    token = request.headers['Authorization'].split(" ")[1]
    print(token)
    # print(current_user)

    current_user_id = get_jwt_identity()
    #user = Users.filter.get(current_user_id)
    return jsonify({"username": "deberia"}), 200
    # return jsonify({"username": user.username, "public_id": user.public_id}), 200
