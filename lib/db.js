// lib/db.js
let instance = null;

class InMemoryDB {
  constructor() {
    if (!instance) {
      this.listings = this.initializeData();
      this.users = [
      {
        id: 1,
        email: "caradmin@gmail.com",
        password: "admin123", // In real app, use hashed passwords
        role: "admin"
      },
      {
        id: 2,
        email: "waseem@gmail.com",
        password: "waseem123", // In real app, use hashed passwords
        role: "user"
      }
    ];
      instance = this;
    }
    return instance;
  }

  initializeData() {
    return [
        {
        id: 1,
        title: "Toyota Camry 2021",
        description: "Reliable sedan with great mileage",
        price: 45,
        location: "New York",
        status: "pending",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
        {
        id: 2,
        title: "Toyota Camry 2022",
        description: "Reliable sedan with great mileage",
        price: 45,
        location: "New York",
        status: "pending",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
        {
        id: 3,
        title: "Toyota Camry 2023",
        description: "Reliable sedan with great mileage",
        price: 45,
        location: "New York",
        status: "pending",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
        {
        id: 4,
        title: "Toyota Camry 2024",
        description: "Reliable sedan with great mileage",
        price: 45,
        location: "New York",
        status: "pending",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
        {
        id: 5,
        title: "Toyota Camry 2025",
        description: "Reliable sedan with great mileage",
        price: 45,
        location: "New York",
        status: "pending",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
    ];
  }

  findListingById(id) {
    return this.listings.find(l => l.id === parseInt(id));
  }

  getAllListings() {
    return this.listings;
  }

  updateListing(id, updates) {
    const index = this.listings.findIndex(l => l.id === parseInt(id));
    if (index === -1) return null;
    
    this.listings[index] = {
      ...this.listings[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    return this.listings[index];
  }
}

const db = new InMemoryDB();
export default db;