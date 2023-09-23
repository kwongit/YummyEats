from app.models import db, environment, SCHEMA, #!User
from sqlalchemy.sql import text


def seed_reviews():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()



''' 2 reviews for each restaurant'''




def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()




'''
kevin - restaurants.py
kenny/danny - menu_items.py
zak - reviews.py

1. Panda Express

2. Popeyes
3. Buffalo Wild Wings

4. Applebee's
5. Denny's

6. McDonald's
7. Burger King
8. Shake Shack

9. Starbucks
10. Dunkin'

11. Round Table Pizza
12. Pizza Hut

13. Taco Bell
14. Chipotle

15. Panera
'''
