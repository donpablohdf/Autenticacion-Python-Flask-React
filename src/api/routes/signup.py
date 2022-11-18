from flask import request, jsonify, Blueprint
from requests import get
from api.models import db, Users
import uuid
from werkzeug.security import generate_password_hash

r_signup = Blueprint('r_signup', __name__)


@r_signup.route('/signup', methods=['POST'])
def signup_user():
    data = request.get_json()
    # print(data)
    hashed_password = generate_password_hash(
        str(data['password']), method='SHA256')
    # print(hashed_password)
    public_id = str(uuid.uuid4())
    # print(public_id)
    new_user = Users(
        public_id=public_id, username=data['username'], password=hashed_password)
    # print(new_user)
    # if Users.get_by_username(data['username']):
    #     return jsonify({'message': 'Error: Username exists!'})
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'ok'}), 200
