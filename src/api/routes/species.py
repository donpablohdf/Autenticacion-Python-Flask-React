from flask import Flask, request, jsonify, url_for, Blueprint
from requests import get
from api.models import db, Species

r_species = Blueprint('r_species', __name__)

@r_species.route('/species', methods=['POST', 'GET'])
def handle_sections():
    sections = Species.get_all()
    if sections:
        all_sections = [section.serialize() for section in sections]
        return jsonify(all_sections), 200
    return jsonify({"message":"Error al recuperar Species"}), 400