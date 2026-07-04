from flask import Flask, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///align.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    age = db.Column(db.Integer)
    injuries = db.Column(db.Text)
    session_type = db.Column(db.String(50))
    experience_level = db.Column(db.String(50))
    date = db.Column(db.String(20))
    time = db.Column(db.String(10))

    def __repr__(self):
        return f"<Booking {self.first_name} {self.last_name}>"

with app.app_context():
    db.create_all()


@app.route("/")
def home():
    return {"message": "Align backend running"}

@app.route("/bookings", methods=["POST"])
def create_booking():

    data = request.get_json()

    required_fields = {
        "firstName": "First name",
        "lastName": "Last name",
        "email": "Email",
        "time": "Time"
    }

    for field, label in required_fields.items():
        if not data.get(field):
            return {"message": f"{label} is required."}, 400

    if int(data.get("age", 0)) < 18:
        return {"message": "You must be at least 18 years old to book."}, 400

    existing_booking = Booking.query.filter_by(
        date=data["selectedDate"],
        time=data["time"]
    ).first()

    if existing_booking:
        return{
            "message": "This time slot is already booked."
        }, 409

    booking = Booking(
        first_name=data["firstName"],
        last_name=data["lastName"],
        email=data["email"],
        age=data["age"],
        injuries=data["injuries"],
        session_type=data["sessionType"],
        experience_level=data["experienceLevel"],
        date=data["selectedDate"],
        time=data["time"]
    )

    db.session.add(booking)
    db.session.commit()

    return {
        "message": "Booking created successfully"
    }, 201

@app.route("/bookings", methods=["GET"])
def get_bookings():
    bookings = Booking.query.all()

    return[
        {
            "id": booking.id,
            "date": booking.date,
            "time": booking.time,
            "firstName": booking.first_name,
            "lastName": booking.last_name,
        }
        for booking in bookings 
    ]


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5019, debug=True)