from flask import Flask, request, jsonify, url_for, Blueprint
from requests import get
from api.models import db, Starships

r_starships = Blueprint('r_starships', __name__)

@r_starships.route('/starships', methods=['POST', 'GET'])
def handle_sections():
    sections = Starships.get_all()
    if sections:
        all_sections = [section.serialize() for section in sections]
        return jsonify(all_sections), 200
    return jsonify({"message":"Error al recuperar Starships"}), 400