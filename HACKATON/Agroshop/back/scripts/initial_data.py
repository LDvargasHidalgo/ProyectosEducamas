import sys

sys.path.insert(0, "")

from src.domain.info import Info, InfoRepository

from src.domain.product import Product, ProductRepository

database_path = "data/database.db"


info_repository = InfoRepository(database_path)

product_repository=ProductRepository(database_path)


product_repository.save(Product(id="01",name="Patatas alavesas", price="4.50", quantity="5",desc="Patatas al mayoreo",Vendor="Pedro M",IdVendor="123456",Observ="Envio gratis con la compra de 100 kgs",img="https://www.mercatarrels.cat/wp-content/uploads/pere-tugas-patata.jpg"))

product_repository.save(Product(id="02",name="Limones ecológicos", price="1.50", quantity="5",desc="Recogidos al momento de la entrega",Vendor="Pedro M",IdVendor="123456",Observ="Envio gratis con la compra de 80 kgs",img="https://www.mercatarrels.cat/wp-content/uploads/llimona.jpg"))

product_repository.save(Product(id="03",name="Manzana reineta", price="1.50", quantity="5",desc="Muy ricas, algo pequenas",Vendor="Pedro M",IdVendor="123456",Observ="Envio gratis con la compra de 80 kgs",img="https://www.mercatarrels.cat/wp-content/uploads/bio-golarde-poma-story.jpg"))

product_repository.save(Product(id="04",name="Naranjas de Valencia", price="2.50", quantity="10",desc="Maduradas en el arbol",Vendor="Pedro M",IdVendor="123456",Observ="Envío cercanías de Valencia gratis",img="https://www.mercatarrels.cat/wp-content/uploads/TORONJA.jpg")) 

product_repository.save(Product(id="05",name="Nueces Castilla", price="10", quantity="10",desc="Venta de nueces de variedad Castilla",Vendor="Pedro M",IdVendor="123456",Observ="Bajo pedido de 20 kgs o más",img="https://www.mercatarrels.cat/wp-content/uploads/Nous-EL-SOLER-2kg.jpg"))  

product_repository.save(Product(id="06",name="Aceitunas", price="10", quantity="10",desc=" Venta de aceituna de diversas variedades",Vendor="Pedro M",IdVendor="123456",Observ="Se puede elegir tipo de envasado",img="https://www.mercatarrels.cat/wp-content/uploads/ca-rosset-Olives-confitades.jpg"))




