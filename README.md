# Room Finder

[Live Demo](https://room-finder-9bfv.vercel.app/)

## Overview
Room Finder is a comprehensive room rental platform designed to simplify the process of finding and listing rental accommodations. Users can search, filter, and manage property listings with ease through an intuitive and responsive interface.

## Features
- **User-Friendly Interface**: Simplified navigation for searching and filtering rental properties.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Property Management**: Allows users to list and manage rental properties.
- **Authentication**: Secure user login and registration functionality.
- **Real-Time Data Updates**: Seamless property updates using integrated APIs.

## Technologies Used

### Frontend
- **React.js**: Built with reusable and dynamic components for a scalable UI.
- **React Router**: Enables dynamic routing for seamless navigation.
- **CSS Modules**: Ensures modular and maintainable styling.

### Backend
- **Express.js**: Handles server-side operations and API endpoints.
- **Node.js**: Provides a scalable runtime environment for backend logic.

### Deployment
- **Vercel**: Live hosting and continuous deployment for a high-performance application.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/iasiddiqui/Room_Finder.git
   cd Room_Finder
   ```

2. **Install Dependencies**:
   - Frontend:
     ```bash
     cd client
     yarn install
     ```
   - Backend:
     ```bash
     cd server
     yarn install
     ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the backend directory and add the required configurations:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     ```

4. **Start the Application**:
   - Frontend:
     ```bash
     cd client
     npm run dev
     ```
   - Backend:
     ```bash
     cd server
     npm start
     ```

5. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`.

## Folder Structure
```
 Room finder/
    ├── client/
    │   ├── index.html
    │   ├── package.json
    │   ├── vercel.json
    │   ├── vite.config.js
    │   ├── vite.config.js.timestamp-1737787872276.mjs
    │   ├── yarn.lock
    │   ├── .gitignore
    │   ├── public/
    │   └── src/
    │       ├── App.css
    │       ├── App.jsx
    │       ├── index.css
    │       ├── main.jsx
    │       ├── components/
    │       │   ├── AddLocation/
    │       │   │   └── AddLocation.jsx
    │       │   ├── AddPropertyModal/
    │       │   │   └── AddPropertyModal.jsx
    │       │   ├── BasicDetails/
    │       │   │   └── BasicDetails.jsx
    │       │   ├── BookingModal/
    │       │   │   └── BookingModal.jsx
    │       │   ├── Companies/
    │       │   │   ├── Companies.css
    │       │   │   └── Companies.jsx
    │       │   ├── Contact/
    │       │   │   ├── Contact.css
    │       │   │   └── Contact.jsx
    │       │   ├── Facilities/
    │       │   │   └── Facilities.jsx
    │       │   ├── Footer/
    │       │   │   ├── Footer.css
    │       │   │   └── Footer.jsx
    │       │   ├── GeoCoderMarker/
    │       │   │   └── GeoCoderMarker.jsx
    │       │   ├── GetStarted/
    │       │   │   ├── GetStarted.css
    │       │   │   └── GetStarted.jsx
    │       │   ├── Header/
    │       │   │   ├── Header.css
    │       │   │   └── Header.jsx
    │       │   ├── Heart/
    │       │   │   └── Heart.jsx
    │       │   ├── Hero/
    │       │   │   ├── Hero.css
    │       │   │   └── Hero.jsx
    │       │   ├── Layout/
    │       │   │   └── Layout.jsx
    │       │   ├── Map/
    │       │   │   └── Map.jsx
    │       │   ├── ProfileMenu/
    │       │   │   └── ProfileMenu.jsx
    │       │   ├── PropertyCard/
    │       │   │   ├── PropertyCard.css
    │       │   │   └── PropertyCard.jsx
    │       │   ├── Residencies/
    │       │   │   ├── Residencies.css
    │       │   │   └── Residencies.jsx
    │       │   ├── SearchBar/
    │       │   │   └── SearchBar.jsx
    │       │   ├── UploadImage/
    │       │   │   ├── UploadImage.css
    │       │   │   └── UploadImage.jsx
    │       │   └── Value/
    │       │       ├── Value.css
    │       │       └── Value.jsx
    │       ├── context/
    │       │   └── UserDetailContext.js
    │       ├── hooks/
    │       │   ├── useAuthCheck.jsx
    │       │   ├── useBookings.jsx
    │       │   ├── useCountries.jsx
    │       │   ├── useFavourites.jsx
    │       │   ├── useHeaderColor.jsx
    │       │   └── useProperties.jsx
    │       ├── pages/
    │       │   ├── Website.jsx
    │       │   ├── Bookings/
    │       │   │   └── Bookings.jsx
    │       │   ├── Favourites/
    │       │   │   └── Favourites.jsx
    │       │   ├── Properties/
    │       │   │   ├── Properties.css
    │       │   │   └── Properties.jsx
    │       │   └── Property/
    │       │       ├── Property.css
    │       │       └── Property.jsx
    │       └── utils/
    │           ├── accordion.jsx
    │           ├── api.js
    │           ├── common.js
    │           └── slider.json
    └── server/
    |   ├── index.js
    |   ├── package.json
    |   ├── vercel.json
    |    ├── yarn.lock
    |   ├── .env.example
    |    ├── .gitignore
    |    ├── config/
    |    │   ├── auth0Config.js
    |    │   └── prismaConfig.js
    |    ├── controllers/
    |    │   ├── resdCntrl.js
    |    │   └── userCntrl.js
    |    ├── data/
    |    │   └── Residency.json
    |    ├── prisma/
    |    │   └── schema.prisma
    |    └── routes/
    |        ├── residencyRoute.js
    |        └── userRoute.js
    └── README.md
```

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.
