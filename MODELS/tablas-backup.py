# coding: utf-8
from sqlalchemy import Boolean, Column, Integer, String, Text, text
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Films(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), unique=False, nullable=True)
    producer = db.Column(db.String(255), unique=False, nullable=True)
    title = db.Column(db.String(255), unique=False, nullable=True)
    episode_id = db.Column(db.String(255), unique=False, nullable=True)
    director = db.Column(db.String(255), unique=False, nullable=True)
    opening_crawl = Column(Text)
    characters = Column(Text)
    planets = Column(Text)
    starships = Column(Text)
    vehicles = Column(Text)
    species = Column(Text)

    def __repr__(self):
        return f'<Films {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class FilmsDetail(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), unique=False, nullable=True)
    producer = db.Column(db.String(255), unique=False, nullable=True)
    title = db.Column(db.String(255), unique=False, nullable=True)
    episode_id = db.Column(db.String(255), unique=False, nullable=True)
    director = db.Column(db.String(255), unique=False, nullable=True)
    opening_crawl = Column(Text)
    characters = Column(Text)
    planets = Column(Text)
    starships = Column(Text)
    vehicles = Column(Text)
    species = Column(Text)


class People(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)


class PeopleDetail(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), unique=False, nullable=True)
    height = db.Column(db.String(255), unique=False, nullable=True)
    mass = db.Column(db.String(255), unique=False, nullable=True)
    hair_color = db.Column(db.String(255), unique=False, nullable=True)
    skin_color = db.Column(db.String(255), unique=False, nullable=True)
    eye_color = db.Column(db.String(255), unique=False, nullable=True)
    birth_year = db.Column(db.String(255), unique=False, nullable=True)
    gender = db.Column(db.String(255), unique=False, nullable=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    homeworld = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)


class Planets(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)


class PlanetsDetail(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), unique=False, nullable=True)
    diameter = db.Column(db.String(255), unique=False, nullable=True)
    rotation_period = db.Column(db.String(255), unique=False, nullable=True)
    orbital_period = db.Column(db.String(255), unique=False, nullable=True)
    gravity = db.Column(db.String(255), unique=False, nullable=True)
    population = db.Column(db.String(255), unique=False, nullable=True)
    climate = db.Column(db.String(255), unique=False, nullable=True)
    terrain = db.Column(db.String(255), unique=False, nullable=True)
    surface_water = db.Column(db.String(255), unique=False, nullable=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)


class Sections(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    section = db.Column(db.String(255), unique=False, nullable=True)


class Species(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)


class SpeciesDetail(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), unique=False, nullable=True)
    classification = db.Column(db.String(255), unique=False, nullable=True)
    designation = db.Column(db.String(255), unique=False, nullable=True)
    average_height = db.Column(db.String(255), unique=False, nullable=True)
    average_lifespan = db.Column(db.String(255), unique=False, nullable=True)
    hair_colors = db.Column(db.String(255), unique=False, nullable=True)
    skin_colors = db.Column(db.String(255), unique=False, nullable=True)
    eye_colors = db.Column(db.String(255), unique=False, nullable=True)
    language = db.Column(db.String(255), unique=False, nullable=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    homeworld = db.Column(db.String(255), unique=False, nullable=True)
    people = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)


class Starships(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)


class StarshipsDetail(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), unique=False, nullable=True)
    model = db.Column(db.String(255), unique=False, nullable=True)
    starship_class = db.Column(db.String(255), unique=False, nullable=True)
    manufacturer = db.Column(db.String(255), unique=False, nullable=True)
    cost_in_credits = db.Column(db.String(255), unique=False, nullable=True)
    length = db.Column(db.String(255), unique=False, nullable=True)
    crew = db.Column(db.String(255), unique=False, nullable=True)
    passengers = db.Column(db.String(255), unique=False, nullable=True)
    max_atmosphering_speed = db.Column(db.String(255), unique=False, nullable=True)
    hyperdrive_rating = db.Column(db.String(255), unique=False, nullable=True)
    mglt = db.Column(db.String(255), unique=False, nullable=True)
    cargo_capacity = db.Column(db.String(255), unique=False, nullable=True)
    consumables = db.Column(db.String(255), unique=False, nullable=True)
    pilots = db.Column(db.String(255), unique=False, nullable=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)

class Vehicle(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)

class VechiclesDetail(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), unique=False, nullable=True)
    model = db.Column(db.String(255), unique=False, nullable=True)
    vehicle_class = db.Column(db.String(255), unique=False, nullable=True)
    manufacturer = db.Column(db.String(255), unique=False, nullable=True)
    cost_in_credits = db.Column(db.String(255), unique=False, nullable=True)
    length = db.Column(db.String(255), unique=False, nullable=True)
    crew = db.Column(db.String(255), unique=False, nullable=True)
    passengers = db.Column(db.String(255), unique=False, nullable=True)
    max_atmosphering_speed = db.Column(db.String(255), unique=False, nullable=True)
    cargo_capacity = db.Column(db.String(255), unique=False, nullable=True)
    consumables = db.Column(db.String(255), unique=False, nullable=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    films = db.Column(db.String(255), unique=False, nullable=True)
    pilots = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)