import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./links";
// import PageLayout from "../layout";
import React, { Suspense } from "react";
import Loader from "../components/AppLoader/loader";

const Home = React.lazy(() => import("../pages"));
const Projects = React.lazy(() => import("../pages/Projects"));

const RouteCmp = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.projects} element={<Projects />} />
      </Routes>
    </Suspense>
  );
};

export default RouteCmp;
