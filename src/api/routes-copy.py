"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from requests import get
from api.models import db, Films, People, Planets, Sections, Species, Starships, Starships, Vechicles, Users
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/sections', methods=['POST', 'GET'])
def handle_sections():
    sections = Sections.get_all()
    if sections:
        all_sections = [section.serialize() for section in sections]
        return jsonify(all_sections), 200
    return jsonify({"message":"Error al recuperar Sections"}), 400

@api.route('/films', methods=['POST', 'GET'])
def handle_films():
    tb_data = Films.get_all()
    if tb_data:
        all_data = [section.serialize() for section in tb_data]
        return jsonify(all_data), 200
    return jsonify({"message":"Error al recuperar Films"}), 400

@api.route('/people', methods=['POST', 'GET'])
def handle_people():
    tb_data = People.get_all()
    if tb_data:
        all_data = [section.serialize() for section in tb_data]
        return jsonify(all_data), 200
    return jsonify({"message":"Error al recuperar People"}), 400

@api.route('/planets', methods=['POST', 'GET'])
def handle_planets():
    tb_data = Planets.get_all()
    if tb_data:
        all_data = [section.serialize() for section in tb_data]
        return jsonify(all_data), 200
    return jsonify({"message":"Error al recuperar Planets"}), 400

@api.route('/species', methods=['POST', 'GET'])
def handle_species():
    tb_data = Species.get_all()
    if tb_data:
        all_data = [section.serialize() for section in tb_data]
        return jsonify(all_data), 200
    return jsonify({"message":"Error al recuperar Species"}), 400

@api.route('/starships', methods=['POST', 'GET'])
def handle_starships():
    tb_data = Starships.get_all()
    if tb_data:
        all_data = [section.serialize() for section in tb_data]
        return jsonify(all_data), 200
    return jsonify({"message":"Error al recuperar Starships"}), 400

@api.route('/vehicles', methods=['POST', 'GET'])
def handle_vehicles():
    tb_data = Vechicles.get_all()
    if tb_data:
        all_data = [section.serialize() for section in tb_data]
        return jsonify(all_data), 200
    return jsonify({"message":"Error al recuperar Vechicles"}), 400

@api.route('/users', methods=['POST', 'GET'])
def handle_users():
    tb_data = Users.get_all()
    if tb_data:
        all_data = [section.serialize() for section in tb_data]
        return jsonify(all_data), 200
    return jsonify({"message":"Error al recuperar Vechicles"}), 400


# @api.route('/pruebas', methods=['GET'])
# def handle_pruebas():
#     sections = Sections.get_all()
#     if sections:
#         all_sections = [section.serialize() for section in sections]
#         return jsonify(all_sections), 200
#     return False, 400
