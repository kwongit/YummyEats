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
        price=1,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://d1ralsognjng37.cloudfront.net/2c9841a7-c2e5-4202-bcb4-dc7cff46c668.jpeg"
        )
    popeyes = Restaurant(
        owner_id=3,
        address="1426 Fillmore St",
        city="San Francisco",
        state="California",
        name="Popeyes",
        type="American",
        price=1,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/be16a0f71c93fefbb3b7fe44556170a1/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        )
    buffalo_wild_wings = Restaurant(
        owner_id=2,
        address="90-92 Charter Oak Avenue #21",
        city="San Francisco",
        state="California",
        name="Buffalo Wild Wings",
        type="Wings",
        price=2,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/ae9e7b157908ed4f654e187b7eec3e82/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    applebees = Restaurant(
        owner_id=3,
        address="2770 Taylor St",
        city="San Francisco",
        state="California",
        name="Applebee's",
        type="American",
        price=2,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/e89b16893e36f765fde687ad3d3a88cd/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    dennys = Restaurant(
        owner_id=2,
        address="10 Airport Blvd",
        city="San Francisco",
        state="California",
        name="Denny's",
        type="American",
        price=2,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/8f524140c4b2817d78a3c29d77497cea/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    mcdonalds = Restaurant(
        owner_id=3,
        address="1100 Fillmore St",
        city="San Francisco",
        state="California",
        name="McDonald's",
        type="American",
        price=1,
        open_hours="6am",
        close_hours="3am",
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/54554a83f0a2de9ac27c7ddc7d2ab616/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    burger_king = Restaurant(
        owner_id=2,
        address="1690 Valencia Street",
        city="San Francisco",
        state="California",
        name="Burger King",
        type="American",
        price=1,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/782c426f0b99cf130156387f63d940ee/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    shake_shack = Restaurant(
        owner_id=3,
        address="845 Market Street",
        city="San Francisco",
        state="California",
        name="Shake Shack",
        type="American",
        price=1,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/66e0f9d70b3fb76cbec9ec5203d4cfea/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    starbucks = Restaurant(
        owner_id=2,
        address="1390 Market Street",
        city="San Francisco",
        state="California",
        name="Starbucks",
        type="Cafe",
        price=1,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/cc2c3b81f1e02e1dcbffa7e0c9fdd2a1/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    dunkin = Restaurant(
        owner_id=3,
        address="180 S. Airport Blvd",
        city="San Francisco",
        state="California",
        name="Dunkin'",
        type="Cafe",
        price=1,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/df2de7977509b3697cd12d679c8571c2/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    round_table = Restaurant(
        owner_id=2,
        address="801 Van Ness Ave",
        city="San Francisco",
        state="California",
        name="Round Table Pizza",
        type="Pizza",
        price=1,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://d1ralsognjng37.cloudfront.net/040383f7-d215-4457-aaf0-eaffcc0b911d.jpeg"
        )
    pizza_hut = Restaurant(
        owner_id=3,
        address="553 El Camino Real",
        city="San Francisco",
        state="California",
        name="Pizza Hut",
        type="Pizza",
        price=1,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/b0fc9bc24d1656626221131e1aefe4fb/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    taco_bell = Restaurant(
        owner_id=2,
        address="710 Third Street",
        city="San Francisco",
        state="California",
        name="Taco Bell",
        type="Mexican",
        price=1,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/2fe4e1a8e9ee737e5e43d1310484bd94/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        )
    chipotle = Restaurant(
        owner_id=3,
        address="121 4th St # 135",
        city="San Francisco",
        state="California",
        name="Chipotle",
        type="Mexican",
        price=1,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/b5ff39e46a5e8acddfc40298cbe9ea23/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    panera = Restaurant(
        owner_id=2,
        address="307 Gellert Blvd ",
        city="San Francisco",
        state="California",
        name="Panera",
        type="Breakfast and Brunch",
        price=1,
        open_hours=11,
        open_minutes=30,
        close_hours=8,
        close_minutes=0,
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/5068731aed89cc0b39e6231f5ccb9bc2/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
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
