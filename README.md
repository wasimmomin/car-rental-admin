Got it. Here's a simplified, more natural-looking `README.md` that feels like it was written by a developer who worked on the project, without any fancy symbols or overly polished structure.

---

````markdown
# Car Rental Admin Panel - Next.js App

This is a simple admin panel for managing car rental listings, built using Next.js. It includes features like admin login, dashboard,  editing car listings, and approving or rejecting cars.

Data is stored in memory using a basic JS class (no external database or backend). This project is meant for demo or prototyping purposes.

## Features

- Admin and user login
- Dashboard with listing overview
- Edit existing car
- Approve or reject car listings
- View all listings (approved, pending, rejected)

## How to Run

1. Clone the repo

```bash
git clone https://github.com/wasimmomin/car-rental-admin.git
cd car-rental-admin
````

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Default Users

There are two users hardcoded for testing.

**Admin**

* Email: [caradmin@gmail.com](mailto:caradmin@gmail.com)
* Password: admin123

**User**

* Email: [waseem@gmail.com](mailto:waseem@gmail.com)
* Password: waseem123

## Data

All data is stored in memory. You can find the initial setup in `lib/db.js`.

There are no external APIs or database connections used in this app.

## Project Structure

* `pages/` - all the routes (login, dashboard, cars, etc.)
* `lib/db.js` - fake in-memory database
* `components/` - reusable UI components

## Notes

* Data will reset when the server restarts
* This app is for learning/demo purposes only

```

---

Let me know if you'd like to include example screenshots or a demo video link later.
```
