import pymongo
from faker import Faker
import random
import string
import datetime
import csv

# Replace these variables with your MongoDB connection details
mongodb_uri = "mongodb+srv://admin:rEuCgzm74vZ6Flsa@codeperfect-cluster.ko689nq.mongodb.net/?retryWrites=true&w=majority"  # Replace with your MongoDB URI
database_name = "healthquest"  # Replace with your database name

# Initialize Faker and MongoDB client
fake = Faker()

def generate_random_password():
    # Generate a random password with at least one uppercase letter, one lowercase letter, one digit, and one special character
    uppercase_letter = random.choice(string.ascii_uppercase)
    lowercase_letter = random.choice(string.ascii_lowercase)
    digit = random.choice(string.digits)
    special_character = random.choice(string.punctuation)
    
    password = ''.join(random.choices(string.ascii_letters + string.digits + string.punctuation, k=8))
    return password

usernames = []
users = []
def generate_random_user():
    username = ""
    while True:
        username = fake.user_name()
        if username not in usernames:
            # If the username is not a duplicate, add it to the list and return the user
            usernames.append(username)
            break
    user = {
        "_id": username,  # Generate a random legitimate username
        "password": generate_random_password(),
        "profilePicUrl": "https://ionicframework.com/docs/img/demos/avatar.svg",
        "dob": fake.date_time_this_decade().strftime('%c'),  # Format the date of birth
        "weight": random.uniform(50, 100),  # Generate a random weight between 50 and 100
        "height": random.randint(150, 200),  # Generate a random height between 150 and 200
        "friends": ["testuser","andreas"],  # Generate random friends
        "challenges": [],
        "creatures": [
            {
            "name": "Tom",
            "category": "hydration",
            "health": 100
            },
            {
            "name": "Sandy",
            "category": "food",
            "health": 100
            },
            {
            "name": "Andi",
            "category": "sleep",
            "health": 100
            },
            {
            "name": "Stevan",
            "category": "steps",
            "health": 100
            }
        ],
        "points": 0,
        "_class": "com.codeperfect.healthquest.models.User"
    }

    users.append(user)
    return username


usersnames = []
numbers = []



# Specify the path to your CSV file
csv_file_path = "AdvertData.csv"

ads = []
# Open the CSV file in read mode
with open(csv_file_path, mode='r', newline='') as file:
    # Create a CSV reader
    reader = csv.reader(file)
    
    # Skip the header row
    next(reader)
    prev = 0
    username = generate_random_user()
    # Iterate over the rows and print the data
    for row in reader: 

        ID, timestamp, Status, AdId, UserID = row
        if UserID != prev:
            username = generate_random_user()
        prev = UserID 
        ad = {
            "adId": AdId,
            "username": username,
            "timestamp" : timestamp,
            "status" : Status,
        }
        ads.append(ad)

print("starting to add to the database")
# Connect to MongoDB
try:
    client = pymongo.MongoClient(mongodb_uri)
    db = client[database_name]
    collectionUsers = db["user"]
    collectionAds = db["ad"]
    # Insert data into the collection
    inserted_ids = collectionUsers.insert_many(users)
    inserted_ids = collectionAds.insert_many(ads)

except pymongo.errors.ConnectionFailure as e:
    print(f"Failed to connect to MongoDB: {e}")
finally:
    client.close()

print("done")