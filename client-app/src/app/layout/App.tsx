import React from "react";
import { Container } from "semantic-ui-react";
import Navbar from "./Navbar";
import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetail from "../../features/activities/details/ActivityDetail";
import TestErrors from "../../features/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <Navbar />
      <Container
        fluid={location.pathname === "/"}
        style={
          location.pathname !== "/" ? { marginTop: "7em" } : { marginTop: "0" }
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<ActivityDashboard />} />
          <Route path="/activities/:id" element={<ActivityDetail />} />
          <Route
            key={location.key}
            path="/createActivity"
            element={<ActivityForm />}
          />
          <Route
            key={location.key}
            path="/manage/:id"
            element={<ActivityForm />}
          />
          <Route key={location.key} path="/errors" element={<TestErrors />} />
          <Route path="/server-error" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default observer(App);
