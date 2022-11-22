import os
from flask import Flask, request, jsonify, make_response, Blueprint
from api.models import Users
import datetime
from datetime import timedelta
import jwt
import redis
from werkzeug.security import check_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token

r_login = Blueprint('r_login', __name__)

ACCESS_EXPIRES = timedelta(hours=1)
jwt_redis_blocklist = redis.StrictRedis(
    host="localhost", port=6379, db=0, decode_responses=True
)


@r_login.route('/login', methods=['POST', 'GET'])
def login_user():
    data = request.get_json()
    SECRET = os.getenv('FLASK_APP_KEY')  # variable ENV
    # print(data, SECRET, data['username'], data['password'])

    if not data:
        return make_response('could not verify', 401, {'WWW.Authentication': 'Basic realm: "login required"'})

    user = Users.query.filter_by(username=str(data['username'])).first()
    if user:
        # print(user)
        if check_password_hash(user.password, data['password']):
            token = jwt.encode({'public_id': user.public_id, 'exp': datetime.datetime.utcnow(
            ) + ACCESS_EXPIRES}, SECRET)
            access_token = create_access_token(token)
            # print(creado)
            # return create_access_token(token), 200
            return jsonify({"token": 'ok', "user_public_id": user.public_id}), 200
            # return make_response({"message": "ok"}), 200
        return make_response('Fallo al verificar usuario',  401, {'WWW.Authentication': 'Basic realm: "login required"'})
    return make_response('Fallo al verificar usuario',  401, {'WWW.Authentication': 'Basic realm: "login required"'})
