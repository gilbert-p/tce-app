/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "css.gg/icons-scss/icons.scss";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import tce_landing_page from "tce-components/LandingPage.js";
import CompanyPage from "tce-components/CompanyPage.js";
import NewsletterPage from "tce-components/NewsletterPage.js";
import CareersPage from "tce-components/CareersPage.js";
import ContactPage from "tce-components/ContactPage.js";
import ApplyPage from "tce-components/ApplyPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/tce" component={tce_landing_page} />
      <Route path="/company" component={CompanyPage}></Route>
      <Route path="/newsletter" component={NewsletterPage}></Route>
      <Route path="/careers" component={CareersPage}></Route>
      <Route path="/contact" component={ContactPage}></Route>
      <Route path="/apply" component={ApplyPage}></Route>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Redirect from="/" to="/tce" />
      <Redirect from="/admin" to="/admin/tables" />
      <Redirect from="/login" to="/auth/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
