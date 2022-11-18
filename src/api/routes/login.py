import os
from flask import Flask, request, jsonify, make_response, Blueprint
from api.models import Users
import datetime
import jwt
from werkzeug.security import check_password_hash
from flask_jwt_extended import create_access_token

r_login = Blueprint('r_login', __name__)


@r_login.route('/login', methods=['POST', 'GET'])
def login_user():
    data = request.get_json()

    SECRET = os.getenv('FLASK_APP_KEY')  # variable ENV
    # print(SECRET)
    # print(data['username'])
    # print(data['password'])

    if not data:
        return make_response('could not verify', 401, {'WWW.Authentication': 'Basic realm: "login required"'})

    user = Users.query.filter_by(username=str(data['username'])).first()
    # print(user)
    if check_password_hash(user.password, data['password']):
        token = jwt.encode({'public_id': user.public_id, 'exp': datetime.datetime.utcnow(
        ) + datetime.timedelta(minutes=30)}, SECRET)
        create_access_token(token)
        return jsonify({"message": "ok"}), 200
    # return jsonify({'message': "data: " + str(data)})
    return make_response('Fallo al verificar usuario',  401, {'WWW.Authentication': 'Basic realm: "login required"'})
