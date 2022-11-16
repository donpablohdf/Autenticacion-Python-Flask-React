import os
from flask_admin import Admin
from .models import db, Users, Films ,FilmsDetail, People, PeopleDetail, Planets, PlanetsDetail, Sections, Species, SpeciesDetail, Starships, StarshipsDetail, Vehicles, VechiclesDetail
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='Star Wars Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(Users, db.session))
    # admin.add_view(ModelView(Sections, db.session))
    # admin.add_view(ModelView(Films, db.session))
    # admin.add_view(ModelView(FilmsDetail, db.session))
    # admin.add_view(ModelView(People, db.session))
    # admin.add_view(ModelView(PeopleDetail, db.session))
    # admin.add_view(ModelView(Planets, db.session))
    # admin.add_view(ModelView(PlanetsDetail, db.session))
    # admin.add_view(ModelView(Species, db.session))
    # admin.add_view(ModelView(SpeciesDetail, db.session))
    # admin.add_view(ModelView(Starships, db.session))
    # admin.add_view(ModelView(StarshipsDetail, db.session))
    # admin.add_view(ModelView(Vehicles, db.session))
    # admin.add_view(ModelView(VechiclesDetail, db.session))