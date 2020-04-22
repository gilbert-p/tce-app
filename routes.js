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
import Index from "argon_components/Index.js";
import Profile from "argon_components/components/Profile.js";
import Maps from "argon_components/components/Maps.js";
import Register from "argon_components/components/Register.js";
import Login from "argon_components/components/Login.js";
import Logout from "argon_components/components/Logout";
import Applicants from "argon_components/components/Applicants.js";
import JobListings from "argon_components/components/JobListings.js";
import Icons from "argon_components/components/Icons.js";

var routes = [
  {
    path: "/applicants",
    name: "Applicants",
    icon: "ni ni-bullet-list-67 text-red",
    component: Applicants,
    layout: "/admin",
  },
  {
    path: "/joblistings",
    name: "Job Listings",
    icon: "ni ni-bullet-list-67 text-red",
    component: JobListings,
    layout: "/admin",
  },
  {
    path: "/login",
    component: Login,
    layout: "/auth",
  },
];
export default routes;
