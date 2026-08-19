# backend/database.py
import psycopg2
import os

def get_db_connection():
    return psycopg2.connect(
        host="localhost",
        database="cafe_fausse",
        user="postgres",
        password="bucket81",
        port=5432
    )