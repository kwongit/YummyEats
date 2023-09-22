from app.models import db, environment, SCHEMA
from app.models.menu_item import MenuItem
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_menu_items():

    #restaurant 1
    menu_item_1 = MenuItem(
        restaurantId=1,
        name="Plate",
        price=13.90,
        description="Any 1 Side & 2 Entrees",
        imageUrl="https://d1ralsognjng37.cloudfront.net/dcda53c9-15f7-4219-9aa1-1060308b36a1.jpeg"
    )
    menu_item_2 = MenuItem(
        restaurantId=1,
        name="Bigger Plate",
        price=15.75,
        description="Any 1 Side & 3 Entrees",
        imageUrl="https://d1ralsognjng37.cloudfront.net/ab511aba-3f1d-4653-8799-f6d814159acc.jpeg"
    )
    menu_item_3 = MenuItem(
        restaurantId=1,
        name="The Original Orange Chicken",
        price=10.90,
        imageUrl="https://d1ralsognjng37.cloudfront.net/3e3e2a21-28ae-4b10-9ab2-12315c0eafd1.jpeg"
    )
    menu_item_4 = MenuItem(
        restaurantId=1,
        name="Chow Mein",
        price=5.75,
        imageUrl="https://d1ralsognjng37.cloudfront.net/afbc49f5-3eec-4585-bb54-44e951f86c82.jpeg"
    )
    menu_item_5 = MenuItem(
        restaurantId=1,
        name="Cream Cheese Rangoon",
        price=2.50,
        imageUrl="https://d1ralsognjng37.cloudfront.net/b6a266a8-622f-4fae-8d5d-ae849921e21d.jpeg"
    )
    menu_item_6 = MenuItem(
        restaurantId=1,
        name="Orange Chicken Panda Cub Meal",
        price=10.90,
        description="White Rice, Super Greens, Orange Chicken, Fruit Side & Bottled Water or Kid's Juice",
        imageUrl="https://d1ralsognjng37.cloudfront.net/ed31d4f8-7d48-4d42-9d4e-372ba4c39cc6.jpeg"
    )

    # db.session.add(demo)
    # db.session.add(marnie)
    # db.session.add(bobbie)
    # db.session.commit()

    #restaurant 2
    menu_item_7 = MenuItem(
        restaurantId=2,
        name="Spicy Chicken Sandwich Combo",
        price=13.49,
        description="Combo includes a choice of regular signature side and a drink.",
        imageUrl="	https://d1ralsognjng37.cloudfront.net/6e061c4b-207b-4d4c-83c7-73de2bb37974.jpeg"
    )
    menu_item_8 = MenuItem(
        restaurantId=2,
        name="5pc Handcrafted Tender Dinner",
        price=14.59,
        description="Includes a choice of regular signature side and a biscuit.",
        imageUrl="https://d1ralsognjng37.cloudfront.net/e8402fa9-5967-40aa-93ab-baa9ec79d83e"
    )
    menu_item_9 = MenuItem(
        restaurantId=2,
        name="The Original Orange Chicken",
        price=10.90,
        imageUrl="https://d1ralsognjng37.cloudfront.net/3e3e2a21-28ae-4b10-9ab2-12315c0eafd1.jpeg"
    )
    menu_item_10 = MenuItem(
        restaurantId=2,
        name="Chow Mein",
        price=5.75,
        imageUrl="https://d1ralsognjng37.cloudfront.net/afbc49f5-3eec-4585-bb54-44e951f86c82.jpeg"
    )
    menu_item_11 = MenuItem(
        restaurantId=2,
        name="Cream Cheese Rangoon",
        price=2.50,
        imageUrl="https://d1ralsognjng37.cloudfront.net/b6a266a8-622f-4fae-8d5d-ae849921e21d.jpeg"
    )
    menu_item_12 = MenuItem(
        restaurantId=2,
        name="Orange Chicken Panda Cub Meal",
        price=10.90,
        description="White Rice, Super Greens, Orange Chicken, Fruit Side & Bottled Water or Kid's Juice",
        imageUrl="https://d1ralsognjng37.cloudfront.net/ed31d4f8-7d48-4d42-9d4e-372ba4c39cc6.jpeg"
    )

    # db.session.add(demo)
    # db.session.add(marnie)
    # db.session.add(bobbie)
    # db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.menu_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM menu_items"))

    db.session.commit()
