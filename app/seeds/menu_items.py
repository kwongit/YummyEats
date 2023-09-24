from app.models import db, environment, SCHEMA
from app.models.menu_item import MenuItem
from sqlalchemy.sql import text


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
        description="Includes a choice of regular signature side, a biscuit and a drink. *Weight based on pre-cooked shrimp weight.",
        imageUrl="https://cdn.sanity.io/images/czqk28jt/prod_plk_us/e3c9701e8f79342a66026736cd07481e4d16d0ee-2000x1333.png"
    )
    menu_item_10 = MenuItem(
        restaurantId=2,
        name="3pc Chicken Dinner",
        price=12.99,
        description="Includes a choice of regular signature side and a biscuit.",
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
        description="HAND-BREADED CHICKEN BREAST / PICKLES / MAYO / CHALLAH BUN / MAKE IT WILD™: ADD A WILD SAUCE® DRIZZLE FOR NO CHARGE",
        imageUrl="https://images.ctfassets.net/l5fkpck1mwg3/3dDZkQlNl4a1eq4F354TjD/45f8cb1d66005498c9292f04e8b94b03/Classic_Chicken_Sandwich___Fries.png"
    )
    menu_item_16 = MenuItem(
        restaurantId=3,
        name="Regular Cheddar Cheese Curds",
        price=8.99,
        description="WISCONSIN WHITE CHEDDAR CHEESE CURDS / BATTERED / SOUTHWESTERN RANCH",
        imageUrl="https://images.ctfassets.net/l5fkpck1mwg3/7siCPjhi1xIYot0rzf02MB/2acf31879c0574a6f4cafb3db19158fd/Appetizers_Cheddar_Cheese_Curds.png"
    )
    menu_item_17 = MenuItem(
        restaurantId=3,
        name="Regular French Fries",
        price=4.79,
        description="NATURAL-CUT FRIES / SEA SALT / COARSE PEPPER.",
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
        description="All the classic apps you love – Boneless Wings, Spinach & Artichoke Dip, Chicken Quesadilla, and Mozzarella Sticks.",
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/2018-08-16_21_23_41_Classic_appetizer_combo_%28Chips_with_spinach-artichoke_dip%2C_mozzarella_sticks%2C_honey-bbq_buffalo_wings_and_chicken_quesadilla%29_at_the_Applebee%27s_in_Fair_Lakes%2C_Fairfax_County%2C_Virginia.jpg/1200px-thumbnail.jpg"
    )
    menu_item_22 = MenuItem(
        restaurantId=4,
        name="Crispy Chicken Tender Salad",
        calories=1200,
        price=24.49,
        description="A hearty salad with crispy chicken tenders on a bed of fresh greens topped with a blend of Cheddar cheeses and tomatoes. Served with honey Dijon mustard dressing on the side. Served with a golden brown signature breadstick brushed with buttery garlic and parsley.",
        imageUrl="https://easychickenrecipes.com/wp-content/uploads/2020/08/applebees-oriental-chicken-salad-copycat-1-of-7.jpg"
    )
    menu_item_23 = MenuItem(
        restaurantId=4,
        name="Kids Grilled Chicken Alfredo",
        calories=670,
        price=10.69,
        description="Oodles of noodles covered with a creamy Alfredo sauce, then tossed with diced chicken and sprinkled with shredded Parmesan cheese. Comes with a choice of side and drink.",
        imageUrl="https://media.olivegarden.com/en_us/images/product/Kids-Meals-Fett-Alf-gv-590x365.jpg"
    )
    menu_item_24 = MenuItem(
        restaurantId=4,
        name="Triple Chocolate Meltdown",
        calories=850,
        price=14.99,
        description="Warm, rich, fudge-filled chocolate cake is drizzled with hot fudge. Served with vanilla ice cream.",
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
        description="100 percent beef patty topped with American cheese. Pair it with any side you want—whatever, whenever.",
        imageUrl="https://www.dennys.ca/wp-content/uploads/2019/10/Kids_Burger_with_Milk_.jpg"
    )
    menu_item_28 = MenuItem(
        restaurantId=5,
        name="Slice of French Toast",
        calories=320,
        price=6.33,
        description="Sprinkled with powdered sugar.",
        imageUrl="https://dennys.id/wp-content/uploads/2019/04/slams-french-toast-slam.jpg"
    )
    menu_item_29 = MenuItem(
        restaurantId=5,
        name="Flamin' 5-Pepper Burger",
        calories=1490,
        price=22.76,
        description="Aged white cheddar cheese, bacon, jalapenos, 5-pepper sauce, mayo, lettuce, tomato, red onions and pickles on a brioche bun.",
        imageUrl="https://orders.dennysenlinea.com/img/productos/1576/1609369602.jpeg"
    )
    menu_item_30 = MenuItem(
        restaurantId=5,
        name="Lava Cookie Skillet",
        calories=820,
        price=10.80,
        description="Warm chocolate chip cookie filled with molten chocolate and topped with premium vanilla ice cream and salted caramel.",
        imageUrl="https://www.dennys.ca/wp-content/uploads/2019/10/Skookie_Skillet_Lava_Cake_Feb21Core_CC_WEB-scaled.jpg"
    )

    dennys_items = [menu_item_25, menu_item_26, menu_item_27, menu_item_28, menu_item_29, menu_item_30]
    add_dennys_items = [db.session.add(dennys_item) for dennys_item in dennys_items]
    db.session.commit()

    #restaurant 6 (McDonald's)
    menu_item_31 = MenuItem(
        restaurantId=6,
        name="Medium French Fries",
        calories=320,
        price=4.99,
        imageUrl="https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc4NTAxNTc0MzM3NjYx/mcdonalds-fries-ftr.jpg"
    )
    menu_item_32 = MenuItem(
        restaurantId=6,
        name="10 pc. Chicken McNuggets",
        calories=410,
        price=6.59,
        imageUrl="https://www.calorieking.com/food-images/us/673b47e3-eb1b-48fb-b83c-1b3199a68290.jpg"
    )
    menu_item_33 = MenuItem(
        restaurantId=6,
        name="Double Cheeseburger",
        calories=450,
        price=4.79,
        imageUrl="https://gray-wsaz-prod.cdn.arcpublishing.com/resizer/I08Nl9BPUMmtejh3AQe8P-Ou8gw=/1920x1080/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/KNUQX6QUOVAWRKXE6ZR4WMY2XI.jpg"
    )
    menu_item_34 = MenuItem(
        restaurantId=6,
        name="Big Mac Meal",
        calories=1150,
        price=13.79,
        imageUrl="https://www.franchisechatter.com/wp-content/uploads/2015/01/McDonalds-Big-Mac-Meal.jpg"
    )
    menu_item_35 = MenuItem(
        restaurantId=6,
        name="OREO McFlurry",
        calories=480,
        price=5.79,
        imageUrl="https://lifestyleofafoodie.com/wp-content/uploads/2022/07/Mcdonalds-Oreo-mc-flurry-9-of-12.jpg"
    )
    menu_item_36 = MenuItem(
        restaurantId=6,
        name="Hot Fudge Sundae",
        calories=330,
        price=5.19,
        imageUrl="https://media.timeout.com/images/105701367/750/562/image.jpg"
    )

    mcdonalds_items = [menu_item_31, menu_item_32, menu_item_33, menu_item_34, menu_item_35, menu_item_36]
    add_mcdonalds_items = [db.session.add(mcdonalds_item) for mcdonalds_item in mcdonalds_items]
    db.session.commit()

    # restaurant #7 (Burger King)
    menu_item_37 = MenuItem(
        restaurantId = 7,
        name = "Whopper",
        price = 7.99,
        description = "A ¼ lb* of flame-grilled beef with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed bun. *Weight based on pre-cooked patty.",
        imageUrl = "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/84743a96a55cb36ef603c512d5b97c9141c40a33-1333x1333.png?w=900&q=80&fit=max&auto=format"
    )
    menu_item_38 = MenuItem(
        restaurantId = 7,
        name = "Original Chicken Sandwich",
        price = 6.49,
        description = "Lightly breaded chicken topped with crisp lettuce and creamy mayonnaise on a sesame seed bun.",
        imageUrl = "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/fc7c2a73e7a9bf14f3e3401bedcc090c4f421c67-1333x1333.png?w=650&q=80&fit=max&auto=format"
    )
    menu_item_39 = MenuItem(
        restaurantId = 7,
        name = "Chicken Fries",
        price = 6.99,
        description = "Breaded, crispy white meat chicken perfect for dipping in any of our delicious dipping sauces.",
        imageUrl = "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/698bc3ee26f2bc6d6b3573c2c0006ffbf5a7ce7b-1333x1333.png?w=650&q=80&fit=max&auto=format"
    )
    menu_item_40 = MenuItem(
        restaurantId = 7,
        name = "Big King",
        price = 5.99,
        description = "Two flame-grilled beef patties topped with crisp lettuce, sliced white onion, crunchy pickles, melty American cheese and our signature stacker sauce on a toasted sesame seed bun.",
        imageUrl = "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/d06846598b47ff0ae865299a30b2826993567e9c-1333x1333.png?w=650&q=80&fit=max&auto=format"
    )
    menu_item_41 = MenuItem(
        restaurantId = 7,
        name = "Onion Rings",
        price = 3.49,
        description = "Golden brown, hot, and crispy.",
        imageUrl = "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/2f1f1c87c082b18cee83d286921162a24dc869bd-1333x1333.png?w=650&q=80&fit=max&auto=format"
    )
    menu_item_42 = MenuItem(
        restaurantId = 7,
        name = "Classic Oreo Shake",
        price = 5.99,
        description = "Creamy, vanilla soft serve mixed with OREO® cookie pieces and vanilla sauce. OREO® is a registered trademark of Mondelēz International group. Used under license.",
        imageUrl = "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/37078b3ec851acc9d27a8024cfeedb7c1ce23b46-1333x1333.png?w=650&q=80&fit=max&auto=format"
    )

    bk_items = [menu_item_37, menu_item_38, menu_item_39, menu_item_40, menu_item_41, menu_item_42]
    add_bk_items = [db.session.add(bk_item) for bk_item in bk_items]
    db.session.commit()

  # restaurant #8 (Shake Shack)
    menu_item_43 = MenuItem(
        restaurantId = 8,
        name = "ShackBurger",
        calories = 500,
        price = 8.29,
        description = "Angus beef cheeseburger with lettuce, tomato, and ShackSauce on a toasted potato bun (contains sesame, eggs, milk, soy, wheat, and gluten)",
        imageUrl = "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Burgers_ShackBurger_1500x920_lg1663589553.jpeg"
    )
    menu_item_44 = MenuItem(
        restaurantId = 8,
        name = "Golden State Double",
        calories = 560,
        price = 10.69,
        description = "Richards Grassfed Beef double cheddar cheeseburger topped with pickles and smoked garlic aioli (contains sesame, milk, wheat, egg, and gluten)",
        imageUrl = "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Burgers_GoldenStateDouble_1500x920_lg1663590761.jpeg"
    )
    menu_item_45 = MenuItem(
        restaurantId = 8,
        name = "Hot Chicken",
        calories = 570,
        price = 10.79,
        description = "Crispy, white-meat chicken breast spiced with our own hot pepper blend, topped with pickles and Shack-made cherry pepper slaw.",
        imageUrl = "https://d2luv1saso99wi.cloudfront.net/Kiosk_Menu_product_photo_1500x920_v_copy_lg1693581369.jpeg"
    )
    menu_item_46 = MenuItem(
        restaurantId = 8,
        name = "Avocado Bacon Burger",
        calories = 610,
        price = 10.09,
        description = "Angus beef cheeseburger topped with freshly sliced avocado, applewood-smoked bacon, and ShackSauce on a toasted potato bun (contains sesame, eggs, milk, soy, wheat, and gluten)",
        imageUrl = "https://d2luv1saso99wi.cloudfront.net/2023-06_SHA_Avocado-Bacon_Digital-Menu_1500x920_Burger_lg1689678265.jpeg"
    )
    menu_item_47 = MenuItem(
        restaurantId = 8,
        name = "Bacon Cheese Fries",
        calories = 840,
        price = 7.49,
        description = "Crispy crinkle cuts topped with our cheese sauce and applewood-smoked bacon (contains soy and milk)",
        imageUrl = "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_CrinkleCutFries_BaconCheeseFries_1500x920_lg1663591959.jpeg"
    )
    menu_item_48 = MenuItem(
        restaurantId = 8,
        name = "Fifty/Fifty",
        size = "Medium",
        calories = 80,
        price = 4.59,
        description = "Half lemonade, half organic iced tea",
        imageUrl = "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Drinks_Small5050_1500x920_lg1685630885.jpeg"
    )

    shakeshack_items = [menu_item_43, menu_item_44, menu_item_45, menu_item_46, menu_item_47, menu_item_48]
    add_shakeshack_items = [db.session.add(shakeshack_item) for shakeshack_item in shakeshack_items]
    db.session.commit()

    # restaurant #9 (Starbucks)
    menu_item_49 = MenuItem(
        restaurantId = 9,
        name = "Iced Matcha Tea Latte",
        size = "Grande",
        calories = 200,
        price = 5.55,
        description = "Smooth and creamy matcha sweetened just right and served with milk over ice. Green has never tasted so good.",
        imageUrl = "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20181127_IcedMatchaGreenTeaLatte.jpg?impolicy=1by1_wide_topcrop_630"
    )
    menu_item_50 = MenuItem(
        restaurantId = 9,
        name = "Pumpkin Spice Latte",
        name = "Grande",
        price = 6.45,
        calories = 210,
        description = "Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Enjoy it topped with whipped cream and real pumpkin-pie spices.",
        imageUrl = "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220411_PumpkinSpiceLatte.jpg?impolicy=1by1_wide_topcrop_630"
    )
    menu_item_51 = MenuItem(
        restaurantId = 9,
        name = "Crispy Grilled Cheese on Sourdough",
        price = 8.15,
        calories = 520,
        description = "A blend of white Cheddar and mozzarella cheeses on sourdough bread, topped with a Parmesan butter spread. - VEGETARIAN - HIGH-PROTEIN",
        imageUrl = "https://globalassets.starbucks.com/digitalassets/products/food/SBX20220207_GrilledCheeseOnSourdough_US.jpg?impolicy=1by1_medium_630"
    )
    menu_item_52 = MenuItem(
        restaurantId = 9,
        name = "Turkey, Provolone & Pesto on Ciabatta",
        price = 8.75,
        calories = 520,
        description = "Thick-sliced turkey breast, melted provolone cheese, dry-roasted red peppers and basil pesto on a ciabatta roll. -HIGH-PROTEIN",
        imageUrl = "https://globalassets.starbucks.com/digitalassets/products/food/SBX20221006_TurkeyProvolonePestoOnCiabatta.jpg?impolicy=1by1_medium_630"
    )
    menu_item_53 = MenuItem(
        restaurantId = 9,
        name = "Avocado Spread",
        price = 1.65,
        calories = 90,
        description = "Avocadoes mixed with lime, sea salt, garlic and a touch of spice—specially packaged to maintain freshness without the use of heat, additives or preservatives.",
        imageUrl = "https://globalassets.starbucks.com/assets/3d32d9ac0991482596873baa3f649211.jpg?impolicy=1by1_medium_630"
    )
    menu_item_54 = MenuItem(
        restaurantId = 9,
        name = "Owl Cake Pop",
        price = 3.95,
        calories = 160,
        description = "Vanilla cake mixed with buttercream, dipped in purple chocolaty icing and decorated with an owl-face design. -VEGETARIAN",
        imageUrl = "https://globalassets.starbucks.com/digitalassets/products/food/SBX20220329_OwlCakePop.jpg?impolicy=1by1_medium_630"
    )

    starbucks_items = [menu_item_49, menu_item_50, menu_item_51, menu_item_52, menu_item_53, menu_item_54]
    add_starbucks_items = [db.session.add(starbucks_item) for starbucks_item in starbucks_items]
    db.session.commit()

    # restaurant #10 (Dunkin')
    menu_item_55 = MenuItem(
        restaurantId = 10,
        name = "Bacon Egg and Cheese",
        price = 6.61,
        description = "Go the extra mile by bringing bacon to your Dunkin' Breakfast Sandwich. Bacon with egg and cheese, can you say, 'Yum!'",
        imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe-GXjudrDujhe0o8eqgK7o4DRDCoYHk-mNTGrnP4YLjSr1Ye7XpWpH0OWq0UdoYmRsUQ&usqp=CAU"
    )
    menu_item_56 = MenuItem(
        restaurantId = 10,
        name = "Maple Sugar Bacon Breakfast Sandwich",
        price = 7.11,
        description = "Maple sugar caramelized bacon, white cheddar cheese and egg on a buttery croissant.",
        imageUrl = "https://miro.medium.com/v2/resize:fit:1024/1*aveFRFggV77rbVI60km1oQ.jpeg"
    )
    menu_item_57 = MenuItem(
        restaurantId = 10,
        name = "Hash Browns",
        price = 2.11,
        description = "Our hash browns are lightly seasoned, crispy bites of gooDDness. Pair them with your breakfast sandwich and your morning pit stop gets even more tasty. Perfectly paired with our freshly brewed Hot or Iced Coffee.",
        imageUrl = "https://s3.amazonaws.com/cms.ipressroom.com/285/files/20192/5c9e35272cfac2490fdc7852_LP-promo-x1-hashbrowns-620x506_201903291509/LP-promo-x1-hashbrowns-620x506_201903291509_ea8de74d-b3c4-45ac-b389-570905f54ba4-prv.jpg"
    )
    menu_item_58 = MenuItem(
        restaurantId = 10,
        name = "Maple Sugar Snackin' Bacon",
        price = 3.98,
        description = "8 snack-sized strips of Maple Sugar Bacon",
        imageUrl = "https://s3.amazonaws.com/cms.ipressroom.com/285/files/20201/5e5585372cfac21b16bed14a_DNK01046_SnackingBacon_lib_RGB/DNK01046_SnackingBacon_lib_RGB_82f4bb3d-f1d2-4087-9db6-89374a79da56-prv.jpg"
    )
    menu_item_59 = MenuItem(
        restaurantId = 10,
        name = "Classic Donut",
        price = 2.48,
        description = "Treat yourself or share the joy by bringing people together with a dozen donuts made in these delicious varieties*: Glazed, Chocolate Frosted, Strawberry Frosted, Old Fashioned, Boston Kreme, Glazed Chocolate Cake and Jelly. *Limited Edition and Custom Photo Donuts may contain artificial dyes.",
        imageUrl = "https://www.boston.com/wp-content/uploads/2015/09/4_edit.jpg"
    )
    menu_item_60 = MenuItem(
        restaurantId = 10,
        name = "Latte",
        price = 5.86,
        description = "Made with warm, frothy milk and blended with our rich espresso, our Latte is the perfect balance of creamy and smooth to get you goin'.",
        imageUrl = "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/570x570/hot-latte.png"
    )

    dunkin_items = [menu_item_55, menu_item_56, menu_item_57, menu_item_58, menu_item_59, menu_item_60]
    add_dunkin_items = [db.session.add(dunkin_item) for dunkin_item in dunkin_items]
    db.session.commit()

    # restaurant #11 (Round Table Pizza)
    menu_item_61 = MenuItem(
        restaurantId = 11,
        name = "Montague's All Meat Marvel Pizza",
        size = "Large",
        price = 34.99,
        description = "Italian sausage, pepperoni, salami, linguiça on zesty red sauce.",
        imageUrl = "https://ordering.roundtablepizza.com/Site/Images/Customers/RT_MontagueAllMeatMarvel.jpg"
    )
    menu_item_62 = MenuItem(
        restaurantId = 11,
        name = "King Arthur's Supreme Pizza",
        size = "Large",
        price = 34.99,
        description = "Pepperoni, Italian sausage, salami, linguiça, mushrooms, green peppers, yellow onions, black olives on zesty red sauce (anchovies on request).",
        imageUrl = "https://ordering.roundtablepizza.com/Site/Images/Customers/RTP_thumbnails_pizza_king_arthur.jpg"
    )
    menu_item_63 = MenuItem(
        restaurantId = 11,
        name = "Double Play Pepperoni",
        size = "Large",
        price = 34.99,
        description = "Two Kinds of Pepperoni, All Kinds of Flavor! Classic pepperoni, and new Mini Pepperoni on zesty red sauce.",
        imageUrl = "https://ordering.roundtablepizza.com/Site/Images/Customers/DoublePep.jpg"
    )
    menu_item_64 = MenuItem(
        restaurantId = 11,
        name = "Wombo Combo Pizza",
        size = "Large",
        price = 34.99,
        description = "Primo pepperoni, Italian sausage, linguiça, bacon, mushrooms, tomatoes, artichoke hearts, green onions on zesty red sauce. THAT AIN'T FALCO!",
        imageUrl = "https://i.pinimg.com/1200x/c7/ec/da/c7ecda84ec00aa1fe7f0cc196dae9754.jpg"
    )
    menu_item_65 = MenuItem(
        restaurantId = 11,
        name = "King Chocolate Chip Cookie",
        price = 14.99,
        description = "The ultimate 8 inch chocolate chip cookie, freshly baked and hot from the oven.",
        imageUrl = "https://ordering.roundtablepizza.com/Site/Images/Customers/RTP_ChocChipParty.jpg"
    )
    menu_item_66 = MenuItem(
        restaurantId = 11,
        name = "Maui Zaui with Ham",
        size = "Large",
        price = 34.99,
        description = "The Original Polynesian Pizza. Ham, crisp bacon, juicy pineapple, tomatoes, red & green onions on Polynesian sauce.",
        imageUrl = "https://ordering.roundtablepizza.com/Site/Images/Customers/RTP_thumbnails_pizza_maui_zaui.jpg"
    )

    roundtable_items = [menu_item_61, menu_item_62, menu_item_63, menu_item_64, menu_item_65, menu_item_66]
    add_roundtable_items = [db.session.add(roundtable_item) for roundtable_item in roundtable_items]
    db.session.commit()

    # restaurant 12 (Pizza Hut)
    menu_item_67 = MenuItem(
        restaurantId = 12,
        name = '14" Supreme Pizza',
        size = "Large",
        price = 27.11,
        description = "This loaded pizza is the perfect choice for family dinner or a lunch with your crew. Includes pepperoni, seasoned pork, beef, mushrooms, green bell peppers and onions.",
        imageUrl = "https://pbs.twimg.com/media/DZ4qKgKX0AEUf28.jpg"
    )
    menu_item_68 = MenuItem(
        restaurantId = 12,
        name = '14" Pepperoni Lover\'s Pizza',
        size = "Large",
        price = 27.11,
        description = "The classic 1-topping pepperoni pizza you crave, loaded up with 50% more pepperoni.",
        imageUrl = "https://www.pizzahut.com/c/assets/img/pepperoni-pizza_875x300.jpg"
    )
    menu_item_69 = MenuItem(
        restaurantId = 12,
        name = "The Big New Yorker",
        price = 17.99,
        description = 'An iconic 16" New York-inspired pizza with 6 XL, foldable slices. Sweet marinara, classic and crispy cupped pepperoni, and parmesan oregano seasoning.',
        imageUrl = "https://www.tasteofhome.com/wp-content/uploads/2023/01/The-Big-New-Yorker-Courtesy-Pizza-Hut-DH-TOH-Resize.jpg"
    )
    menu_item_70 = MenuItem(
        restaurantId = 12,
        name = "Meat Lovers",
        price = 8.39,
        description = "A Melt loaded with pepperoni, ham, Italian sausage, beef, bacon and cheese. Served with marinara for dipping. Comes with one dipping sauce; no substitutions.",
        imageUrl = "https://assets3.thrillist.com/v1/image/3114993/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
    )
    menu_item_71 = MenuItem(
        restaurantId = 12,
        name = "Oven-Baked Cheesy Alfredo Pasta",
        price = 13.19,
        description = "A cheese lover's dream featuring our new creamy Alfredo sauce, cheese, shredded Parmesan, and Parmesan-oregano seasoning. Includes 5 breadsticks.",
        imageUrl = "https://assets3.thrillist.com/v1/image/3097712/1454x970/crop;webp=auto;jpeg_quality=60.jpg"
    )
    menu_item_72 = MenuItem(
        restaurantId = 12,
        name = "2 Liter Pepsi",
        price = 4.79,
        description = "2 Liter Pepsi",
        imageUrl = "https://api.pizzahut.io/v1/content/en-ca/ca-1/images/drink/drink.pepsi.b71560da143bf3da099dcc1d9017ef01.1.jpg"
    )

    pizzahut_items = [menu_item_67, menu_item_68, menu_item_69, menu_item_70, menu_item_71, menu_item_72]
    add_pizzahut_items = [db.session.add(pizzahut_item) for pizzahut_item in pizzahut_items]
    db.session.commit()

    # restaurant #13 (Taco Bell)
    menu_item_73 = MenuItem(
        restaurantId = 13,
        name = "Soft Taco Supreme®",
        price = 2.99,
        calories = 210,
        description = "A warm flour tortilla filled with seasoned beef, cool sour cream, crispy lettuce, shredded cheddar cheese and ripe tomatoes.",
        imageUrl = "https://www.tacobell.com/images/22111_soft_taco_supreme_269x269.jpg"
    )
    menu_item_74 = MenuItem(
        restaurantId = 13,
        name = "Nacho Cheese Doritos® Locos Tacos",
        price = 3.65,
        calories = 170,
        description = "A crunchy taco shell made from Nacho Cheese Doritos® is filled with seasoned beef, crispy lettuce, and pico de gallo.",
        imageUrl = "https://www.tacobell.com/images/22172_nacho_cheese_doritos_locos_tacos_269x269.jpg"
    )
    menu_item_75 = MenuItem(
        restaurantId = 13,
        name = "Doritos® Cheesy Gordita Crunch - Nacho Cheese",
        price = 5.69,
        calories = 500,
        description = "A Nacho Cheese Doritos® Locos Tacos wrapped up in a soft piece of flatbread with Seasoned Beef, Spicy Ranch Sauce, Lettuce, Cheddar Cheese, and a Three Cheese Blend.",
        imageUrl = "https://www.tacobell.com/images/24067_doritos_cheesy_gordita_crunch_269x269.jpg"
    )
    menu_item_76 = MenuItem(
        restaurantId = 13,
        name = "Chalupa Supreme®",
        price = 6.09,
        calories = 360,
        description = "",
        imageUrl = "https://www.tacobell.com/images/22850_chalupa_supreme_269x269.jpg"
    )
    menu_item_77 = MenuItem(
        restaurantId = 13,
        name = "MTN DEW® Baja Blast®",
        size = "Medium",
        price = 3.53,
        calories = 420,
        description = "MTN DEW® Baja Blast®",
        imageUrl = "https://www.tacobell.com/images/1027_mountain_dew_baja_blast_269x269.jpg"
    )
    menu_item_78 = MenuItem(
        restaurantId = 13,
        name = "Crunchwrap Supreme",
        price = 5.99,
        calories = 540,
        description = "A flour tortilla layered with seasoned beef, warm nacho cheese sauce, a crispy tostada shell, crispy lettuce, ripe tomatoes and topped with cool sour cream all wrapped in our signature crunchwrap fold and grilled to go.",
        imageUrl = "https://www.tacobell.com/images/22362_crunchwrap_supreme_269x269.jpg"
    )

    tacobell_items = [menu_item_73, menu_item_74, menu_item_75, menu_item_76, menu_item_77, menu_item_78]
    add_tacobell_items = [db.session.add(tacobell_item) for tacobell_item in tacobell_items]
    db.session.commit()

    # restaurant #14 (Chipotle)
    menu_item_79 = MenuItem(
        restaurantId = 14,
        name = "Carne Asada Burrito Bowl",
        price = 13.80,
        calories = 250,
        description = "Freshly grilled carne asada served in a delicious bowl with rice, black beans, and topped with guac, tomatillo-red chili salsa, and sour cream",
        imageUrl = "https://mma.prnewswire.com/media/1278857/Chipotle_CARNE_ASADA_PR_LR_v202.jpg?w=2700"
    )
    menu_item_80 = MenuItem(
        restaurantId = 14,
        name = "Steak Burrito Bowl",
        price = 16.05,
        calories = 150,
        description = "Freshly grilled steak served in a delicious bowl with rice, black beans, and topped with guac, tomatillo-red chili salsa, cheese, and corn",
        imageUrl = "https://handletheheat.com/wp-content/uploads/2014/07/Steak-Burrito-Bowl-01.jpg"
    )
    menu_item_81 = MenuItem(
        restaurantId = 14,
        name = "Carnitas Burrito",
        price = 14.65,
        calories = 210,
        description = "Freshly grilled carnitas wrapped in a warm flour tortilla with rice, black beans, and topped with guac, tomatillo-red chili salsa, cheese, and corn",
        imageUrl = "https://topsecretrecipes.com/images/product/chipotle-barbacoa-burrito-copycat-recipe_1.jpg"
    )
    menu_item_82 = MenuItem(
        restaurantId = 14,
        name = "Chicken Burrito",
        price = 13.80,
        calories = 180,
        description = "Freshly grilled chicken wrapped in a warm flour tortilla with rice, black beans, and topped with guac, tomatillo-red chili salsa, and cheese",
        imageUrl = "https://mma.prnewswire.com/media/1225941/HERO_Tony_Hawk_Burrito.jpg?w=2700"
    )
    menu_item_83 = MenuItem(
        restaurantId = 14,
        name = "Quesadilla",
        price = 16.75,
        calories = 150,
        description = "Cheese in a Flour Tortilla with steak and three included sides of black beans, fresh tomato salsa, and sour cream.",
        imageUrl = "https://mma.prnewswire.com/media/1452414/Chipotle_Mexican_Grill_Quesadilla_Plate.jpg?w=2700"
    )
    menu_item_84 = MenuItem(
        restaurantId = 14,
        name = "Chips & Queso Blanco",
        price = 6.65,
        description = "Tortilla chips with queso blanco",
        imageUrl = "https://mma.prnewswire.com/media/1095507/Chipotle_Queso_Blanco.jpg?w=2700"
    )

    chipotle_items = [menu_item_79, menu_item_80, menu_item_81, menu_item_82, menu_item_83, menu_item_84]
    add_chipotle_items = [db.session.add(chipotle_item) for chipotle_item in chipotle_items]
    db.session.commit()

  # restaurant #15 (Panera)
    menu_item_85 = MenuItem(
        restaurantId = 15,
        name = "Smokehouse BBQ Chicken Sandwich",
        price = 9.59,
        calories = 760,
        description = "Whole (760 Cal.), Half (380 Cal.) Smoked, pulled chicken raised without antibiotics, BBQ sauce, red onions, aged white cheddar, and frizzled onions on Classic White Miche. Allergens: Contains Wheat, Milk",
        imageUrl = "https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/smokehouse-bbq-sandwich-whole.jpg.transform/rect-grid-image/image.20230923.jpg"
    )
    menu_item_86 = MenuItem(
        restaurantId = 15,
        name = "The Spicy Take Chicken Sandwich",
        price = 17.19,
        calories = 570,
        description = "570 Cal. Seasoned and seared chicken raised without antibiotics, spicy Buffalo sauce, crispy pickle chips, and garlic aioli on a brioche roll. Allergens: Contains Wheat, Milk, Egg. May contain Sesame",
        imageUrl = "https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/buffalo-bird-sandwich-whole.jpg.transform/rect-grid-image/image.20230923.jpg"
    )
    menu_item_87 = MenuItem(
        restaurantId = 15,
        name = "Mac & Cheese",
        size = "Bread Bowl",
        price = 9.79,
        calories = 1150,
        description = "Bread Bowl (1150 Cal.), Small (480 Cal.), Large (960 Cal.), Group (1930 Cal.) Tender shell pasta in a blend of rich cheeses including our tangy aged white cheddar cheese sauce. Allergens: Contains Wheat, Milk, Egg",
        imageUrl = "https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/mac-and-cheese-breadbowl.jpg.transform/rect-grid-image/image.20230923.jpg"
    )
    menu_item_88 = MenuItem(
        restaurantId = 15,
        name = "Broccoli Cheddar Mac & Cheese",
        size = "Bread Bowl",
        price = 12.29,
        calories = 1040,
        description = "Bread Bowl (1040 Cal.), Small (370 Cal.), Large (740 Cal.), Group (1480 Cal.) Shell pasta in a blend of creamy cheese sauce and tangy white cheddar, simmered with seasoned broccoli and carrots. Allergens: Contains Wheat, Milk, Egg",
        imageUrl = "https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/broccoli-cheddar-mac-and-cheese-breadbowl.jpg.transform/rect-grid-image/image.20230923.jpg"
    )
    menu_item_89 = MenuItem(
        restaurantId = 15,
        name = "Chipotle Chicken & Bacon Flatbread Pizza",
        price = 14.79,
        calories = 1030,
        description = "1030 Cal. Smoked, pulled chicken raised without antibiotics, chopped Applewood-smoked bacon, vine ripened tomatoes and our fontina and mozzarella blend with garlic cream sauce on our flatbread. Allergens: Contains Wheat, Milk, Egg",
        imageUrl = "https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/chipotle-chicken-and-bacon-flatbread-sandwich.jpg.transform/rect-grid-image/image.20230923.jpg"
    )
    menu_item_90 = MenuItem(
        restaurantId = 15,
        name = "Classic Grilled Cheese Sandwich & Creamy Tomato Soup",
        price = 11.09,
        calories = 680,
        description = "A half portion of our Classic Grilled Cheese Sandwich served with a cup of Creamy Tomato Soup.",
        imageUrl = "https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/grilled-cheese-and-tomato-soup-duet.jpg.transform/rect-grid-image/image.20230923.jpg"
    )

    panera_items = [menu_item_85, menu_item_86, menu_item_87, menu_item_88, menu_item_89, menu_item_90]
    add_panera_items = [db.session.add(panera_item) for panera_item in panera_items]
    db.session.commit()


def undo_menu_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.menu_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM menu_items"))

    db.session.commit()
