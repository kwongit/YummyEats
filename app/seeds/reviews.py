from app.models import db, environment, SCHEMA, Review
from sqlalchemy.sql import text


def seed_reviews():
    review1 = Review(
        restaurant_id =1,
        user_id=1,
        review= "this is the place",
        stars=4
        )
    review2 = Review(
        restaurant_id =1,
        user_id=3,
        review= "the food here is so good",
        stars=5
        )
    review3 = Review(
        restaurant_id =2,
        user_id=1,
        review= "it's just always delicious!",
        stars=3
        )
    review4 = Review(
        restaurant_id =2,
        user_id=2,
        review= "Good food and good drinks",
        stars=4
        )
    review5 = Review(
        restaurant_id =3,
        user_id=1,
        review= "Super delicious! Thank you! :)",
        stars=5
        )
    review6 = Review(
        restaurant_id =3,
        user_id=3,
        review= "faaaaaantastic",
        stars=3
        )
    review7 = Review(
        restaurant_id =4,
        user_id=1,
        review= "incrível",
        stars=4
        )
    review8 = Review(
        restaurant_id =4,
        user_id=2,
        review= "Food is fresh and hot. Food is always good :)",
        stars=5
        )
    review9 = Review(
        restaurant_id =5,
        user_id=1,
        review= "Casual food at reasonable price as always!",
        stars=3
        )
    review10 = Review(
        restaurant_id =5,
        user_id=3,
        review= "Lightning service and delivery. Very impressive and delicious. Great and kind delivery person. Will order again.",
        stars=4
        )
    review11 = Review(
        restaurant_id =6,
        user_id=1,
        review= "listened to all my special requests. thank you",
        stars=5
        )
    review12 = Review(
        restaurant_id =6,
        user_id=2,
        review= "Good fast food",
        stars=3
        )
    review13 = Review(
        restaurant_id =7,
        user_id=1,
        review= "Great taste and good portions",
        stars=4
        )
    review14 = Review(
        restaurant_id =7,
        user_id=3,
        review= "They always get my order right! Very great location! Thank you!! :)",
        stars=5
        )
    review15 = Review(
        restaurant_id =8,
        user_id=1,
        review= "Reliably tasty every time.",
        stars=3
        )
    review16 = Review(
        restaurant_id =8,
        user_id=2,
        review= "so good we like it",
        stars=4
        )
    review17 = Review(
        restaurant_id =9,
        user_id=1,
        review= "Super fast delivery",
        stars=5
        )
    review18 = Review(
        restaurant_id =9,
        user_id=3,
        review= "Very good",
        stars=3
        )
    review19 = Review(
        restaurant_id =10,
        user_id=1,
        review= "The best!!",
        stars=4
        )
    review20 = Review(
        restaurant_id =10,
        user_id=2,
        review= "Thank you !",
        stars=5
        )
    review21 = Review(
        restaurant_id =11,
        user_id=1,
        review= "Love it as always",
        stars=3
        )
    review22 = Review(
        restaurant_id =11,
        user_id=3,
        review= "It’s was great. Good wAs still warm",
        stars=4
        )
    review23 = Review(
        restaurant_id =12,
        user_id=1,
        review= "always fresh and amazing!!",
        stars=5
        )
    review24 = Review(
        restaurant_id =12,
        user_id=2,
        review= "Fresh and Delicious",
        stars=3
        )
    review25 = Review(
        restaurant_id =13,
        user_id=1,
        review= "really tasty food",
        stars=4
        )
    review26 = Review(
        restaurant_id =13,
        user_id=3,
        review= "Amazing",
        stars=5
        )
    review27 = Review(
        restaurant_id =14,
        user_id=1,
        review= "the food here is so good",
        stars=3
        )
    review28 = Review(
        restaurant_id =14,
        user_id=2,
        review= "the food here is so good",
        stars=4
        )
    review29 = Review(
        restaurant_id =15,
        user_id=1,
        review= "The food is so amazing I'm most definitely going to order again",
        stars=5
        )
    review30 = Review(
        restaurant_id =15,
        user_id=3,
        review= "Awesome",
        stars=3
        )

    reviews = [review1,review2,review3,review4,review5,review6,review7,
               review8,review9,review10,review11,review12,review13,review14,
               review15,review16,review17,review18,review19,review20,review21,
               review22,review23,review24,review25,review26,review27,
               review28,review29,review30]
    add_review = [db.session.add(review) for review in reviews ]
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
