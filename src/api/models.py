from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# recordar registrar la tabla en app.py


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(100), unique=True, nullable=False)
    name = db.Column(db.String(255), unique=False, nullable=False)
    username = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    firstname = db.Column(db.String(255), unique=False, nullable=True)
    lastname = db.Column(db.String(255), unique=False, nullable=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    rol = db.Column(db.Integer, unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<Users {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "public_id": self.public_id,
            "name": self.name,
            "username": self.username,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
        }

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get(id)

    @classmethod
    def get_by_username(cls, username):
        print(cls.query.get(username))
        return cls.query.get(username)


class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    favs = db.Column(db.text, unique=False, nullable=True)
    user_public_id = db.Column(db.String(255, unique=True, nullable=False))

    def __repr__(self):
        return f'<Favorites {self.id}>'

    def serialize(self):
        return self.favs

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get(id)


class Sections(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    section = db.Column(db.String(255), unique=False, nullable=True)

    def __repr__(self):
        return f'<Sections {self.id}>'

    def serialize(self):
        return self.section

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get(id)


class Films(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), unique=False, nullable=True)
    producer = db.Column(db.String(255), unique=False, nullable=True)
    title = db.Column(db.String(255), unique=False, nullable=True)
    episode_id = db.Column(db.String(255), unique=False, nullable=True)
    director = db.Column(db.String(255), unique=False, nullable=True)
    opening_crawl = db.Column(db.Text, unique=False, nullable=True)
    characters = db.Column(db.Text, unique=False, nullable=True)
    planets = db.Column(db.Text, unique=False, nullable=True)
    starships = db.Column(db.Text, unique=False, nullable=True)
    vehicles = db.Column(db.Text, unique=False, nullable=True)
    species = db.Column(db.Text, unique=False, nullable=True)

    def __repr__(self):
        return f'<Films {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "description": self.description,
            "producer": self.producer,
            "title": self.title,
            "episode_id": self.episode_id,
            "director": self.director,
            "opening_crawl": self.opening_crawl,
            "characters": [self.director],
            "planets": [self.planets],
            "starships": [self.starships],
            "vehicles": [self.vehicles],
            "species": [self.species],

        }

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get(id)


class People(db.Model):

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

    def __repr__(self):
        return f'<People {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "description": self.description,
            "height": self.height,
            "mass": self.mass,
            "hair_color": self.hair_color,
            "skin_color": self.skin_color,
            "eye_color": self.eye_color,
            "birth_year": self.birth_year,
            "gender": self.gender,
            "name": self.name,
            "homeworld": self.homeworld,
            "url": self.url,

        }

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get(id)


class Planets(db.Model):

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

    def __repr__(self):
        return f'<Planets {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "description": self.description,
            "diameter": self.diameter,
            "rotation_period": self.rotation_period,
            "orbital_period": self.orbital_period,
            "gravity": self.gravity,
            "population": self.population,
            "climate": self.climate,
            "terrain": self.terrain,
            "surface_water": self.surface_water,
            "name": self.name,
            "url": self.url,

        }

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get(id)


class Species(db.Model):

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

    def __repr__(self):
        return f'<Species {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "description": self.description,
            "classification": self.classification,
            "designation": self.designation,
            "average_height": self.average_height,
            "average_lifespan": self.average_lifespan,
            "hair_colors": self.hair_colors,
            "skin_colors": self.skin_colors,
            "eye_colors": self.eye_colors,
            "language": self.language,
            "name": self.name,
            "homeworld": self.homeworld,
            "people": [self.people],
            "url": self.url,

        }

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get(id)


class Starships(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), unique=False, nullable=True)
    model = db.Column(db.String(255), unique=False, nullable=True)
    starship_class = db.Column(db.String(255), unique=False, nullable=True)
    manufacturer = db.Column(db.String(255), unique=False, nullable=True)
    cost_in_credits = db.Column(db.String(255), unique=False, nullable=True)
    length = db.Column(db.String(255), unique=False, nullable=True)
    crew = db.Column(db.String(255), unique=False, nullable=True)
    passengers = db.Column(db.String(255), unique=False, nullable=True)
    max_atmosphering_speed = db.Column(
        db.String(255), unique=False, nullable=True)
    hyperdrive_rating = db.Column(db.String(255), unique=False, nullable=True)
    mglt = db.Column(db.String(255), unique=False, nullable=True)
    cargo_capacity = db.Column(db.String(255), unique=False, nullable=True)
    consumables = db.Column(db.String(255), unique=False, nullable=True)
    pilots = db.Column(db.String(255), unique=False, nullable=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)

    def __repr__(self):
        return f'<Starships {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "description": self.description,
            "model": self.model,
            "starship_class": self.starship_class,
            "manufacturer": self.manufacturer,
            "cost_in_credits": self.cost_in_credits,
            "length": self.length,
            "crew": self.crew,
            "passengers": self.passengers,
            "max_atmosphering_speed": self.max_atmosphering_speed,
            "hyperdrive_rating": self.hyperdrive_rating,
            "mglt": self.mglt,
            "cargo_capacity": self.cargo_capacity,
            "consumables": self.consumables,
            "pilots": [self.pilots],
            "name": self.name,
            "url": self.url,

        }

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get(id)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)

    def __repr__(self):
        return f'<Vehicles {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "url": self.url,

        }

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get(id)


class Vehicles(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), unique=False, nullable=True)
    model = db.Column(db.String(255), unique=False, nullable=True)
    vehicle_class = db.Column(db.String(255), unique=False, nullable=True)
    manufacturer = db.Column(db.String(255), unique=False, nullable=True)
    cost_in_credits = db.Column(db.String(255), unique=False, nullable=True)
    length = db.Column(db.String(255), unique=False, nullable=True)
    crew = db.Column(db.String(255), unique=False, nullable=True)
    passengers = db.Column(db.String(255), unique=False, nullable=True)
    max_atmosphering_speed = db.Column(
        db.String(255), unique=False, nullable=True)
    cargo_capacity = db.Column(db.String(255), unique=False, nullable=True)
    consumables = db.Column(db.String(255), unique=False, nullable=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    films = db.Column(db.String(255), unique=False, nullable=True)
    pilots = db.Column(db.String(255), unique=False, nullable=True)
    url = db.Column(db.String(255), unique=False, nullable=True)

    def __repr__(self):
        return f'<Vehicles {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "description": self.description,
            "model": self.model,
            "vehicle_class": self.vehicle_class,
            "manufacturer": self.manufacturer,
            "cost_in_credits": self.cost_in_credits,
            "length": self.length,
            "crew": self.crew,
            "passengers": self.passengers,
            "max_atmosphering_speed": self.max_atmosphering_speed,
            "cargo_capacity": self.cargo_capacity,
            "consumables": self.consumables,
            "films": [self.films],
            "pilots": [self.pilots],
            "name": self.name,
            "url": self.url,

        }

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get(id)
