// BaseRoute.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutInit from '../components/LayoutInit';
import LayoutInit2 from '../components/LayoutInit2';
import Home from '../pages/home/Home';
import Reserve from '../pages/reserve/Reserve';
import Menu from '../pages/menu/Menu';
import Facility from '../pages/facility/Facility';
import Profile from '../pages/profile/Profile';
import Category from '../pages/menu/category/Category';
import DetailMenu from '../pages/menu/detail/DetailMenu';
import Login from '../pages/login/Login';
import HomeWithUserId from '../components/HomeWithUserId';

const BaseRoute = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // Simpan informasi pengguna yang login di sini

  const routes = [
    { path: 'home', element: <Home /> },
    { path: 'reserve', element: <Reserve /> },
    { path: 'menu', element: <Menu /> },
    { path: 'facility', element: <Facility /> },
    { path: 'menu/category/:slug', element: <Category /> },
    { path: 'menu/category/:slug/:name', element: <DetailMenu /> },
    { path: 'profile', element: <Profile /> },
    { path: 'login', element: <Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} /> }, // Pastikan setLoggedIn dan setCurrentUser dilewatkan sebagai prop
  ];

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Route for Home with user ID */}
        {loggedIn && (
          <Route
            path="/home/:id"
            element={<HomeWithUserId />}
          />
        )}
        {/* Route for Main page */}
        <Route
          path="/"
          element={
            loggedIn ? (
              <LayoutInit>
                <HomeWithUserId currentUser={currentUser} />
              </LayoutInit>
            ) : (
              <LayoutInit2>
                <Home />
              </LayoutInit2>
            )
          }
        />
        {/* Routes for other paths */}
        {routes.map((route) => (
          <Route
            key={route.path}
            path={`/${route.path}`}
            element={
              loggedIn ? (
                <LayoutInit>
                  {route.element}
                </LayoutInit>
              ) : (
                <LayoutInit2>
                  {route.element}
                </LayoutInit2>
              )
            }
          />
        ))}
      </Routes>
    </React.Suspense>
  );
};

export default BaseRoute;
