from app.models import db, environment, SCHEMA
from app.models.menu_item import MenuItem
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_menu_items():

    #restaurant 1 (Panda Express)
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

    panda_express_items = [menu_item_1, menu_item_2, menu_item_3, menu_item_4, menu_item_5, menu_item_6]
    add_panda_items = [db.session.add(panda_express_item) for panda_express_item in panda_express_items]
    db.session.commit()

    #restaurant 2 (Popeyes)
    menu_item_7 = MenuItem(
        restaurantId=2,
        name="Classic Chicken Sandwich Combo",
        price=13.49,
        description="Combo includes a choice of regular signature side and a drink.",
        imageUrl="https://cdn.sanity.io/images/czqk28jt/prod_plk_us/040d6013f38b1d2958d5ea83cb807bd22365669a-2000x1333.png"
    )
    menu_item_8 = MenuItem(
        restaurantId=2,
        name="5pc Handcrafted Tender Dinner",
        price=14.59,
        description="Includes a choice of regular signature side and a biscuit.",
        imageUrl="https://cdn.sanity.io/images/czqk28jt/prod_plk_us/9d42577fe9866b48cd458d8e3b935b5276af85ff-2000x1333.png"
    )
    menu_item_9 = MenuItem(
        restaurantId=2,
        name="Quarter Pound Popcorn Shrimp Combo",
        price=13.79,
        description="Includes a choice of regular signature side, a biscuit and a drink. *Weight based on pre-cooked shrimp weight."
        imageUrl="https://cdn.sanity.io/images/czqk28jt/prod_plk_us/e3c9701e8f79342a66026736cd07481e4d16d0ee-2000x1333.png"
    )
    menu_item_10 = MenuItem(
        restaurantId=2,
        name="3pc Chicken Dinner",
        price=12.99,
        description="Includes a choice of regular signature side and a biscuit."
        imageUrl="https://cdn.sanity.io/images/czqk28jt/prod_plk_us/dbf3ed316da22492677b6bd2285db51b288dc466-2000x1333.png"
    )
    menu_item_11 = MenuItem(
        restaurantId=2,
        name="Cajun Fries",
        price=4.09,
        imageUrl="https://cdn.sanity.io/images/czqk28jt/prod_plk_us/994ad0a5d3fc01e6ee56138e95c60593f42e9354-2000x1333.png"
    )
    menu_item_12 = MenuItem(
        restaurantId=2,
        name="Biscuits",
        price=1.25,
        imageUrl="https://cdn.sanity.io/images/czqk28jt/prod_plk_us/e39f13d5b571c8feaa3761c6aee3e358d9b751d3-2000x1333.png"
    )

    popeyes_items = [menu_item_7, menu_item_8, menu_item_9, menu_item_10, menu_item_11, menu_item_12]
    add_popeyes_items = [db.session.add(popeyes_item) for popeyes_item in popeyes_items]
    db.session.commit()


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
