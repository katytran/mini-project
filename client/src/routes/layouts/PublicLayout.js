import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AlertMsg from "./AlertMsg";
import PublicNavbar from "../../components/PublicNavbar";
import PrivateRoute from '../PrivateRoute'

import HomePage from "../../pages/HomePage";
import ProfilePage from "../../pages/ProfilePage";
import AuthPage from "../../pages/AuthPage";
import NotFoundPage from "../../pages/NotFoundPage";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container fluid style={{ padding: 0 }}>
        <AlertMsg />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/auth" component={AuthPage} />
          <PrivateRoute path="/:id" component={ProfilePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
