from flask import Flask, request, jsonify, url_for, Blueprint
from requests import get
from api.models import db, People

r_people = Blueprint('r_people', __name__)

@r_people.route('/people', methods=['POST', 'GET'])
def handle_sections():
    sections = People.get_all()
    if sections:
        all_sections = [section.serialize() for section in sections]
        return jsonify(all_sections), 200
    return jsonify({"message":"Error al recuperar People"}), 400