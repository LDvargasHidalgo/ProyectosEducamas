from flask import Flask
from flask_cors import CORS
import json
from src.lib.utils import object_to_json


def create_app(repositories):
    app = Flask(__name__)
    CORS(app)

    @app.route("/", methods=["GET"])
    def show_menu():
        product = repositories["product"].get_all()
        return object_to_json(product)

    @app.route("/products/<id>", methods=["GET"])
    def show_menu_by_id(id):
        product = repositories["product"].get_by_id(id)
        return object_to_json(product)

    return app
