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
      title: "Toyota Camry LE 2021",
      description: "Fuel-efficient sedan with spacious interior",
      price: 42,
      location: "New York, NY",
      status: "available",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 2,
      title: "Toyota Camry SE 2022",
      description: "Sporty trim with advanced safety features",
      price: 47,
      location: "Los Angeles, CA",
      status: "sold",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 3,
      title: "Toyota Camry XLE 2023",
      description: "Luxury model with leather seats and sunroof",
      price: 51,
      location: "Chicago, IL",
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 4,
      title: "Toyota Camry TRD 2024",
      description: "Performance-focused with sport suspension",
      price: 55,
      location: "Houston, TX",
      status: "reserved",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 5,
      title: "Toyota Camry Hybrid 2025",
      description: "Eco-friendly hybrid with top-notch economy",
      price: 49,
      location: "Miami, FL",
      status: "in-transit",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
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