from flask import Flask, request, jsonify, url_for, Blueprint
from requests import get
from api.models import db, Sections

r_sections = Blueprint('r_sections', __name__)

@r_sections.route('/sections', methods=['POST', 'GET'])
def handle_sections():
    sections = Sections.get_all()
    if sections:
        all_sections = [section.serialize() for section in sections]
        return jsonify(all_sections), 200
    return jsonify({"message":"Error al recuperar Sections"}), 400