from flask import Flask, request, jsonify, Blueprint
from requests import get
from api.models import db, Users
from flask_jwt_extended import jwt_required, get_jwt_identity

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

r_private = Blueprint('r_private', __name__)


@r_private.route('/private', methods=['GET'])
@jwt_required()
def handle_sections():
    current_user_id = None
    current_user_id = get_jwt_identity()
    print(current_user_id)
    #user = Users.filter.get(current_user_id)
    return jsonify({"username": "deberia"}), 200
    # return jsonify({"username": user.username, "public_id": user.public_id}), 200
