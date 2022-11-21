from flask import Flask, request, jsonify, url_for, Blueprint
from requests import get
from api.models import db, Favorites

r_favorites = Blueprint('r_favorites', __name__)
# recordar registrar r_favorites en app.py


@r_favorites.route('/favorites', methods=['POST', 'GET'])
def handle_sections():
    users_id = Favorites.get_by_id()
    if users_id:
        return jsonify(users_id), 200
    return jsonify({"message": "Error al recuperar Favorites"}), 400
