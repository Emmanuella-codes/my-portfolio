import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Skills from "./Skills";
import { ProjectList } from "./ProjectCard";

const ProjectCmp = () => {
  return (
    <>
      <Flex
        flexDir="column"
        fontSize="xl"
        /* justifyContent="center" */
        alignItems={{ base: "center" }}
        maxW={{ base: "80vw" }}
        
      >
        <Flex alignSelf="flex-start" mx={{ base: "3", md: "8" }}>
          <Heading as="h2" size="xl">
            Projects
          </Heading>
        </Flex>
        <Box display="flex" flexDir="column" mt="20px" gap={7}>
          <ProjectList />
        </Box>
        <Flex flexDir="column" maxW={{ md: "80%" }}>
          <Skills />
          <Box mt="9" mb="16" textAlign={"center"}>
            <Text>
              Please visit{" "}
              <a
                href="https://docs.google.com/document/d/15KUENCaIGUR141eXsyb4E51LlXftiqR5Jsusfo2F8Mc/edit#heading=h.ymi089liagec"
                target="_blank"
                rel="noreferrer"
              >
                <span style={{ color: "#64b0b5" }}>here</span>
              </a>{" "}
              for my full Curriculum Vitae
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ProjectCmp;
