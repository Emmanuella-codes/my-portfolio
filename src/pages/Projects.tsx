import { Flex } from "@chakra-ui/react";
import ProjectCmp from "../components/ProjectCmp";

const Projects = () => {
  return (
    <>
      <Flex
        flexDir="column"
        alignItems="center"
        maxW={{ md: "50vw" }}
        m={{ md: "0 auto" }}
        mt={{ base: "30px" }}
      >
        <ProjectCmp />
      </Flex>
    </>
  );
};

export default Projects;
