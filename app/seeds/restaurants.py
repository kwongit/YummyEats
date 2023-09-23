from app.models import db, Restaurant, environment, SCHEMA
from sqlalchemy.sql import text


def seed_restaurants():
    panda_express = Restaurant(
        owner_id=2,
        address="865 Market Street",
        city="San Francisco",
        state="California",
        name="Panda Express",
        type="Asian",
        price="$",
        open_hours="11am",
        close_hours="8pm",
        )
    popeyes = Restaurant(
        owner_id=3,
        address="1426 Fillmore St",
        city="San Francisco",
        state="California",
        name="Popeyes",
        type="American",
        price="$",
        open_hours="11am",
        close_hours="10pm",
        )
    buffalo_wild_wings = Restaurant(
        owner_id=2,
        address="90-92 Charter Oak Avenue #21",
        city="San Francisco",
        state="California",
        name="Buffalo Wild Wings",
        type="Wings",
        price="$$",
        open_hours="11am",
        close_hours="11pm",
        )
    applebees = Restaurant(
        owner_id=3,
        address="2770 Taylor St",
        city="San Francisco",
        state="California",
        name="Applebee's",
        type="American",
        price="$$",
        open_hours="11am",
        close_hours="1am",
        )
    dennys = Restaurant(
        owner_id=2,
        address="10 Airport Blvd",
        city="San Francisco",
        state="California",
        name="Denny's",
        type="American",
        price="$$",
        open_hours="11am",
        close_hours="1am",
        )
    mcdonalds = Restaurant(
        owner_id=3,
        address="1100 Fillmore St",
        city="San Francisco",
        state="California",
        name="McDonald's",
        type="American",
        price="$",
        open_hours="6am",
        close_hours="3am",
        )
    burger_king = Restaurant(
        owner_id=2,
        address="1690 Valencia Street",
        city="San Francisco",
        state="California",
        name="Burger King",
        type="American",
        price="$",
        open_hours="6am",
        close_hours="10pm",
        )
    shake_shack = Restaurant(
        owner_id=3,
        address="845 Market Street",
        city="San Francisco",
        state="California",
        name="Shake Shack",
        type="American",
        price="$",
        open_hours="11am",
        close_hours="8pm",
        )
    starbucks = Restaurant(
        owner_id=2,
        address="1390 Market Street",
        city="San Francisco",
        state="California",
        name="Starbucks",
        type="Cafe",
        price="$",
        open_hours="11am",
        close_hours="10pm",
        )
    dunkin = Restaurant(
        owner_id=3,
        address="180 S. Airport Blvd",
        city="San Francisco",
        state="California",
        name="Dunkin'",
        type="Cafe",
        price="$",
        open_hours="6am",
        close_hours="10pm",
        )
    round_table = Restaurant(
        owner_id=2,
        address="801 Van Ness Ave",
        city="San Francisco",
        state="California",
        name="Round Table Pizza",
        type="Pizza",
        price="$",
        open_hours="11am",
        close_hours="11pm",
        )
    pizza_hut = Restaurant(
        owner_id=3,
        address="553 El Camino Real",
        city="San Francisco",
        state="California",
        name="Pizza Hut",
        type="Pizza",
        price="$",
        open_hours="11am",
        close_hours="11pm",
        )
    taco_bell = Restaurant(
        owner_id=2,
        address="710 Third Street",
        city="San Francisco",
        state="California",
        name="Taco Bell",
        type="Mexican",
        price="$",
        open_hours="11am",
        close_hours="11pm",
        )
    chipotle = Restaurant(
        owner_id=3,
        address="121 4th St # 135",
        city="San Francisco",
        state="California",
        name="Chipotle",
        type="Mexican",
        price="$",
        open_hours="11am",
        close_hours="9pm",
        )
    panera = Restaurant(
        owner_id=2,
        address="307 Gellert Blvd ",
        city="San Francisco",
        state="California",
        name="Panera",
        type="Breakfast and Brunch",
        price="$",
        open_hours="7am",
        close_hours="9pm",
        )


    restaurants = [panda_express, popeyes, buffalo_wild_wings, applebees, dennys, mcdonalds, burger_king, shake_shack, starbucks, dunkin, round_table, pizza_hut, taco_bell, chipotle, panera]
    add_restaurant = [db.session.add(restaurant) for restaurant in restaurants]
    db.session.commit()


def undo_restaurants():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.restaurants RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM restaurants"))

    db.session.commit()
