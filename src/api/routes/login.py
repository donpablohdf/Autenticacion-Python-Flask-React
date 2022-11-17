from flask import Flask, request, jsonify, url_for, Blueprint
from requests import get
from api.models import db, Users

r_login = Blueprint('r_login', __name__)

@r_login.route('/login', methods=['POST'])
def handle_sections():
    sections = Users.get_all()
    if sections:
        all_sections = [section.serialize() for section in sections]
        return jsonify(all_sections), 200
    return jsonify({"message":"Error al recuperar Films"}), 400