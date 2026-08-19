# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import random

from models import create_customer, count_reservations, create_reservation

app = Flask(__name__)
CORS(app)

# -------------------------
# POST /api/reservations
# -------------------------
@app.post("/api/reservations")
def reservations():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    guests = data.get("guests")
    time_slot = data.get("timeSlot")

    # Basic validation
    if not name or len(name) < 2:
        return jsonify({"message": "Name must be at least 2 characters."}), 400

    if "@" not in email:
        return jsonify({"message": "Invalid email."}), 400

    if guests < 1 or guests > 10:
        return jsonify({"message": "Guests must be between 1 and 10."}), 400

    if not time_slot:
        return jsonify({"message": "Time slot required."}), 400

    # Check availability
    current_count = count_reservations(time_slot)
    if current_count >= 30:
        return jsonify({"message": "All tables are full for this time slot."}), 400

    # Create customer
    customer_id = create_customer(name, email, phone, False)

    # Assign random table
    table_number = random.randint(1, 30)

    # Create reservation
    reservation_id = create_reservation(customer_id, time_slot, table_number)

    return jsonify({
        "message": "Reservation confirmed!",
        "tableNumber": table_number,
        "reservationId": reservation_id
    }), 200


# -------------------------
# POST /api/newsletter
# -------------------------
@app.post("/api/newsletter")
def newsletter():
    data = request.json
    email = data.get("email")

    if "@" not in email:
        return jsonify({"message": "Invalid email."}), 400

    customer_id = create_customer("Newsletter User", email, None, True)

    return jsonify({"message": "Signed up!", "customerId": customer_id}), 200


# -------------------------
# GET /api/menu (optional)
# -------------------------
@app.get("/api/menu")
def menu():
    return jsonify({
        "starters": ["Soup", "Salad"],
        "mains": ["Steak", "Pasta"],
        "desserts": ["Cake", "Ice Cream"]
    })


# -------------------------
# GET /api/gallery (optional)
# -------------------------
@app.get("/api/gallery")
def gallery():
    return jsonify([
        {"src": "placeholder1"},
        {"src": "placeholder2"}
    ])


if __name__ == "__main__":
    app.run(debug=True)
