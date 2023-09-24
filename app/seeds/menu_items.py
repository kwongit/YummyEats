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

    #restaurant 3 (Buffalo Wild Wings)
    menu_item_13 = MenuItem(
        restaurantId=3,
        name="20 Boneless Wings",
        price=35.99,
        description="JUICY ALL-WHITE CHICKEN, LIGHTLY BREADED AND PERFECTLY CRISPY. Free dip and veggies with every wings purchase",
        imageUrl="https://images.ctfassets.net/l5fkpck1mwg3/5DA4sJgrFHwbVHnwxUj3Pc/30ae054bb01167b577eb5732fb38a9ff/Boneless_20_count_Asian_Zing_Lemon_Pepper.png"
    )
    menu_item_14 = MenuItem(
        restaurantId=3,
        name="10 Traditional Wings",
        price=23.49,
        description="AWARD-WINNING & AUTHENTIC BUFFALO, NEW YORK-STYLE WINGS. Free dip and veggies with every wings purchase",
        imageUrl="https://images.ctfassets.net/l5fkpck1mwg3/1jM82VxqkC6RAPvpeVBKWT/13885bee6e1462794a43b8044b32d02d/Traditional_10_count_Medium.png"
    )
    menu_item_15 = MenuItem(
        restaurantId=3,
        name="Classic Chicken Sandwich",
        price=6.99,
        description="HAND-BREADED CHICKEN BREAST / PICKLES / MAYO / CHALLAH BUN / MAKE IT WILD™: ADD A WILD SAUCE® DRIZZLE FOR NO CHARGE"
        imageUrl="https://images.ctfassets.net/l5fkpck1mwg3/3dDZkQlNl4a1eq4F354TjD/45f8cb1d66005498c9292f04e8b94b03/Classic_Chicken_Sandwich___Fries.png"
    )
    menu_item_16 = MenuItem(
        restaurantId=3,
        name="Regular Cheddar Cheese Curds",
        price=8.99,
        description="WISCONSIN WHITE CHEDDAR CHEESE CURDS / BATTERED / SOUTHWESTERN RANCH"
        imageUrl="https://images.ctfassets.net/l5fkpck1mwg3/7siCPjhi1xIYot0rzf02MB/2acf31879c0574a6f4cafb3db19158fd/Appetizers_Cheddar_Cheese_Curds.png"
    )
    menu_item_17 = MenuItem(
        restaurantId=3,
        name="Regular French Fries",
        price=4.79,
        description="NATURAL-CUT FRIES / SEA SALT / COARSE PEPPER."
        imageUrl="https://images.ctfassets.net/l5fkpck1mwg3/5Ih3U85mGJXFzfQrfe9yP4/334041e07865621f88f687c6a5291463/Appetizers_French_Fries.png"
    )
    menu_item_18 = MenuItem(
        restaurantId=3,
        name="Bottled Soda",
        price=3.49,
        imageUrl="https://images.ctfassets.net/l5fkpck1mwg3/LxPOEY6zNe1y0ho4CA4fr/9a27b3ed62ea167fe817c4b412d2b0c8/BWW_Pepsi_Mug-Root-Beer-Bottle_SILO_4000x3000.png"
    )

    bww_items = [menu_item_13, menu_item_14, menu_item_15, menu_item_16, menu_item_17, menu_item_18]
    add_bww_items = [db.session.add(bww_item) for bww_item in bww_items]
    db.session.commit()

    #restaurant 4 (Applebee's)
    menu_item_19 = MenuItem(
        restaurantId=4,
        name="Bourbon Street Chicken & Shrimp",
        calories=790,
        price=29.19,
        description="Let the good times roll with Cajun-seasoned chicken and blackened shrimp in buttery garlic and parsley, served sizzling on a cast iron platter with sautéed mushrooms and onions. Served with your choice of side.",
        imageUrl="https://applebeescanada.com/wp-content/uploads/2020/12/bourbon-st-chicken-shrimp-mashed-potatoes-applebees-canada.jpg"
    )
    menu_item_20 = MenuItem(
        restaurantId=4,
        name="Double-Glazed Baby Back Ribs",
        calories=1440,
        price=38.29,
        description="Full Rack. Slow-cooked to fall off the bone tenderness. Slathered with your choice of sauce. Shown with signature coleslaw and classic fries.",
        imageUrl="https://i.pinimg.com/1200x/14/ce/f0/14cef00c0a52ef34f380a3b5fe573a9a.jpg"
    )
    menu_item_21 = MenuItem(
        restaurantId=4,
        name="The Classic Combo",
        calories=2230,
        price=27.29,
        description="All the classic apps you love – Boneless Wings, Spinach & Artichoke Dip, Chicken Quesadilla, and Mozzarella Sticks."
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/2018-08-16_21_23_41_Classic_appetizer_combo_%28Chips_with_spinach-artichoke_dip%2C_mozzarella_sticks%2C_honey-bbq_buffalo_wings_and_chicken_quesadilla%29_at_the_Applebee%27s_in_Fair_Lakes%2C_Fairfax_County%2C_Virginia.jpg/1200px-thumbnail.jpg"
    )
    menu_item_22 = MenuItem(
        restaurantId=4,
        name="Crispy Chicken Tender Salad",
        calories=1200,
        price=24.49,
        description="A hearty salad with crispy chicken tenders on a bed of fresh greens topped with a blend of Cheddar cheeses and tomatoes. Served with honey Dijon mustard dressing on the side. Served with a golden brown signature breadstick brushed with buttery garlic and parsley."
        imageUrl="https://easychickenrecipes.com/wp-content/uploads/2020/08/applebees-oriental-chicken-salad-copycat-1-of-7.jpg"
    )
    menu_item_23 = MenuItem(
        restaurantId=4,
        name="Kids Grilled Chicken Alfredo",
        calories=670
        price=10.69,
        description="Oodles of noodles covered with a creamy Alfredo sauce, then tossed with diced chicken and sprinkled with shredded Parmesan cheese. Comes with a choice of side and drink."
        imageUrl="https://media.olivegarden.com/en_us/images/product/Kids-Meals-Fett-Alf-gv-590x365.jpg"
    )
    menu_item_24 = MenuItem(
        restaurantId=4,
        name="Triple Chocolate Meltdown",
        calories=850,
        price=14.99,
        description="Warm, rich, fudge-filled chocolate cake is drizzled with hot fudge. Served with vanilla ice cream."
        imageUrl="https://www.restaurantmagazine.com/wp-content/uploads/2019/11/FREE-Triple-Chocolate-Meltdown-Is-On-the-Menu-at-Select-Applebees-in-Texas-on-Black-Friday.jpg"
    )

    applebees_items = [menu_item_19, menu_item_20, menu_item_21, menu_item_22, menu_item_23, menu_item_24]
    add_applebees_items = [db.session.add(applebees_item) for applebees_item in applebees_items]
    db.session.commit()

    #restaurant 5 (Denny's)
    menu_item_25 = MenuItem(
        restaurantId=5,
        name="Build Your Own Grand Slam",
        calories=1980,
        price=22.76,
        description="Pick any four items and make it your own.",
        imageUrl="https://www.dennys.ca/wp-content/uploads/2019/10/build-your-own-grand-slam_thumb-l.jpg"
    )
    menu_item_26 = MenuItem(
        restaurantId=5,
        name="Hash Browns",
        calories=250,
        price=6.64,
        description="Side of hash browns",
        imageUrl="https://www.dennys.id/wp-content/uploads/2019/04/sides-hash-brown.jpg"
    )
    menu_item_27 = MenuItem(
        restaurantId=5,
        name="Jr. Cheeseburger",
        calories=870,
        price=6.74,
        description="100 percent beef patty topped with American cheese. Pair it with any side you want—whatever, whenever."
        imageUrl="https://www.dennys.ca/wp-content/uploads/2019/10/Kids_Burger_with_Milk_.jpg"
    )
    menu_item_28 = MenuItem(
        restaurantId=5,
        name="Slice of French Toast",
        calories=320,
        price=6.33,
        description="Sprinkled with powdered sugar."
        imageUrl="https://dennys.id/wp-content/uploads/2019/04/slams-french-toast-slam.jpg"
    )
    menu_item_29 = MenuItem(
        restaurantId=5,
        name="Flamin' 5-Pepper Burger",
        calories=1490
        price=22.76,
        description="Aged white cheddar cheese, bacon, jalapenos, 5-pepper sauce, mayo, lettuce, tomato, red onions and pickles on a brioche bun."
        imageUrl="https://orders.dennysenlinea.com/img/productos/1576/1609369602.jpeg"
    )
    menu_item_30 = MenuItem(
        restaurantId=5,
        name="Lava Cookie Skillet",
        calories=820,
        price=10.80,
        description="Warm chocolate chip cookie filled with molten chocolate and topped with premium vanilla ice cream and salted caramel."
        imageUrl="https://www.dennys.ca/wp-content/uploads/2019/10/Skookie_Skillet_Lava_Cake_Feb21Core_CC_WEB-scaled.jpg"
    )

    dennys_items = [menu_item_25, menu_item_26, menu_item_27, menu_item_28, menu_item_29, menu_item_30]
    add_dennys_items = [db.session.add(dennys_item) for dennys_item in dennys_items]
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
