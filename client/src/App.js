import "./App.css";
import React from "react";
import Login from "./components/Login/Login";
import { Home } from "./pages/Home";
import AuthProvider, { RequireAuth } from "./utils/authProvider";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App dark:bg-gray-900 dark:text-white flex flex-col">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
