from flask import Flask, request, jsonify, url_for, Blueprint
from requests import get
from api.models import db, Planets

r_planets = Blueprint('r_planets', __name__)

@r_planets.route('/planets', methods=['POST', 'GET'])
def handle_sections():
    sections = Planets.get_all()
    if sections:
        all_sections = [section.serialize() for section in sections]
        return jsonify(all_sections), 200
    return jsonify({"message":"Error al recuperar Planets"}), 400