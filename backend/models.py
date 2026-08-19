# backend/models.py
from database import get_db_connection

def create_customer(name, email, phone, newsletter):
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO customers (name, email, phone, newsletter_signup)
        VALUES (%s, %s, %s, %s)
        RETURNING customer_id;
    """, (name, email, phone, newsletter))

    customer_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()
    return customer_id


def count_reservations(time_slot):
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT COUNT(*) FROM reservations WHERE time_slot = %s;
    """, (time_slot,))

    count = cur.fetchone()[0]
    cur.close()
    conn.close()
    return count


def create_reservation(customer_id, time_slot, table_number):
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO reservations (customer_id, time_slot, table_number)
        VALUES (%s, %s, %s)
        RETURNING reservation_id;
    """, (customer_id, time_slot, table_number))

    reservation_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()
    return reservation_id