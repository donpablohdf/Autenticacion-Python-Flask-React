from flask import Flask, request, jsonify, url_for, Blueprint
from requests import get
from api.models import db, Vechicles

r_vehicles = Blueprint('r_vehicles', __name__)

@r_vehicles.route('/vehicles', methods=['POST', 'GET'])
def handle_sections():
    sections = Vechicles.get_all()
    if sections:
        all_sections = [section.serialize() for section in sections]
        return jsonify(all_sections), 200
    return jsonify({"message":"Error al recuperar Vechicles"}), 400