import os
from flask import Flask, request, jsonify, make_response, Blueprint
from api.models import Favorites
#from api.routes.login import jwt_redis_blocklist, ACCESS_EXPIRES
from datetime import timedelta
import jwt
from flask_jwt_extended import get_jwt
from flask_jwt_extended import jwt_required
from sqlalchemy import update
from api.models import db

r_logout = Blueprint('r_logout', __name__)


@r_logout.route('/logout', methods=['POST', 'GET'])
# @jwt_required()
def logout_user():
    # jti = get_jwt()["jti"]
    # print(jti)
    #token_in_redis = jwt_redis_blocklist.get(jti)
    data = request.get_json()
    # print(data)
    #jwt_redis_blocklist.set(jti, "", ex=ACCESS_EXPIRES)
    stmt = (update(Favorites)
            .where(Favorites.user_public_id == data['public_id'])
            .values(favs=data['favs'])
            )
    db.session.execute(stmt)
    db.session.commit()

    return jsonify({"msg": "Hurra! Access token revoked"})
    return True
    # db.session.add(user)
    # db.session.commit()

    # if not data:
    #     return make_response('could not verify', 401, {'WWW.Authentication': 'Basic realm: "logout required"'})

    # user = Users.query.filter_by(username=str(data['username'])).first()
    # if user:
    #     # print(user)
    #     if check_password_hash(user.password, data['password']):
    #         token = jwt.encode({'public_id': user.public_id, 'exp': datetime.datetime.utcnow(
    #         ) + datetime.timedelta(minutes=20)}, SECRET)
    #         access_token = create_access_token(token)
    #         # print(creado)
    #         # return create_access_token(token), 200
    #         return jsonify({"token": access_token, "user_public_id": user.public_id}), 200
    #         # return make_response({"message": "ok"}), 200
    #     return make_response('Fallo al verificar usuario',  401, {'WWW.Authentication': 'Basic realm: "logout required"'})
    # return make_response('Fallo al verificar usuario',  401, {'WWW.Authentication': 'Basic realm: "logout required"'})
