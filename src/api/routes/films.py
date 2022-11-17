from flask import Flask, request, jsonify, url_for, Blueprint
from requests import get
from api.models import db, Films

r_films = Blueprint('r_films', __name__)

@r_films.route('/films', methods=['POST', 'GET'])
def handle_sections():
    sections = Films.get_all()
    if sections:
        all_sections = [section.serialize() for section in sections]
        return jsonify(all_sections), 200
    return jsonify({"message":"Error al recuperar Films"}), 400