import sqlite3
import json

class Product:
    def __init__(self, id, name, price,quantity,desc,Vendor,IdVendor,Observ,img):
        self.id = id
        self.name = name
        self.price = price
        self.quantity=quantity
        self.desc=desc
        self.Vendor=Vendor
        self.IdVendor=IdVendor
        self.Observ=Observ
        self.img=img

    def to_dict(self):
        return {"id": self.id, "name": self.name, "price": self.price, "quantity":self.quantity, "desc":self.desc,
        "Vendor":self.Vendor,"IdVendor":self.IdVendor,"Observ":self.Observ, "img":self.img}


class ProductRepository:
    def __init__(self, database_path):
        self.database_path = database_path
        self.init_tables()

    def create_conn(self):
        conn = sqlite3.connect(self.database_path)
        conn.row_factory = sqlite3.Row
        return conn

    def init_tables(self):
        sql = """
            CREATE table if not exists products (
                id varchar,
                name varchar,
                price varchar,
                quantity varchar,
                desc varchar,
                Vendor varchar,
                IdVendor varchar,
                Observ varchar,
                img varchar
            )
        """

        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)
        conn.commit()

    def get_all(self):
        sql = """SELECT * FROM products ORDER BY id"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)
        data = cursor.fetchall()
        dict_products = []
        for item in data:
            product = Product(
                id=item["id"], name=item["name"], price=item["price"],quantity=item["quantity"], desc=item["desc"], 
                Vendor=item["Vendor"],IdVendor=item["IdVendor"],Observ=item["Observ"],img=item["img"])
            dict_products.append(product)
        return dict_products

 # ---------------------------------------------------

    def get_by_id(self, id):
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute("""SELECT * FROM products WHERE id =?""", (id,))
        data = cursor.fetchone()
        product = Product(**data)
        return product

    def get_by_date(self, date):
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute("""SELECT * FROM menus WHERE date =?""", (date,))
        data = cursor.fetchone()
        print('DATA!!!',data)
        if data!=None:
            menu_class = Menu(
                id=data["id"], date=data["date"], desc=json.loads(data["desc"]))
            return menu_class
        else:
            return "", 500

    def save(self, product):
        
        sql = """INSERT INTO products (id,name, price,quantity,desc,Vendor,IdVendor,Observ,img) VALUES (
            :id, :name, :price, :quantity, :desc, :Vendor, :IdVendor, :Observ, :img) """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql,{
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "quantity":product.quantity,
            "desc":product.desc,
            "Vendor":product.Vendor,
            "IdVendor":product.IdVendor,
            "Observ":product.Observ,
            "img":product.img
        })
        conn.commit()
