from flask import Flask, request, jsonify, url_for, Blueprint
from requests import get
from api.models import db, Users

r_users = Blueprint('r_users', __name__)

@r_users.route('/users', methods=['POST', 'GET'])
def handle_sections():
    sections = Users.get_all()
    if sections:
        all_sections = [section.serialize() for section in sections]
        return jsonify(all_sections), 200
    return jsonify({"message":"Error al recuperar Users"}), 400