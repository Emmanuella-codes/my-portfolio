import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./links";
// import PageLayout from "../layout";
import { Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

const AboutMe = React.lazy(() => import("../pages/AboutMe"));
const Projects = React.lazy(() => import("../pages/Projects"));

const RouteCmp = () => {
  return (
    <Suspense
      fallback={
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      }
    >
      <Routes>
        <Route path={ROUTES.aboutMe} element={<AboutMe />} />
        <Route path={ROUTES.projects} element={<Projects />} />
      </Routes>
    </Suspense>
  );
};

export default RouteCmp;
