from flask import jsonify, Blueprint, request
from requests import get
from api.models import db, Favorites

r_favorites = Blueprint('r_favorites', __name__)
# recordar registrar r_favorites en app.py


@r_favorites.route('/favorites', methods=['POST', 'GET'])
def handle_sections():
    data = request.get_json()
    users_id = Favorites.get_public_id(data['public_id'])
    # print(users_id)
    # return users_id.favs, 200
    if users_id:
        return jsonify({"message": "ok"}, users_id.favs), 200
    else:
        return jsonify({"message": "error"}), 400
