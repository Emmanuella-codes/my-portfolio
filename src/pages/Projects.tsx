import { Flex } from "@chakra-ui/react";
import ProjectCmp from "../components/ProjectCmp";

const Projects = () => {
  return (
    <>
      <Flex
        flexDir="column"
        alignItems="center"
        w={{ md: "50vw" }}
        mx={{ base: "auto" }}
        mt="6"
      >
        <ProjectCmp />
      </Flex>
    </>
  );
};

export default Projects;
