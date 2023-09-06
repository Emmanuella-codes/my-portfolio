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
        <Flex alignSelf="flex-start" mx={{ base: "3", md: "10%" }}>
          <Heading as="h2" size="xl" fontFamily={"Kanit"} fontWeight={600}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.500",
                zIndex: -1,
              }}
            >
              Projects
            </Text>
          </Heading>
        </Flex>
        <Box display="flex" flexDir="column" mt="20px" gap={7}>
          <ProjectList />
        </Box>
        <Flex flexDir="column" maxW={{ md: "80%" }}>
          <Skills />
          <Box mt="9" mb="16" textAlign={"center"} fontFamily={"Rubik"}>
            <Text>
              Please visit{" "}
              <a
                href="https://docs.google.com/document/d/1ScrxTB9stv1LDp1y5UD8M99GHzD-2uyKjB7MVyftI6Q/edit?usp=sharing"
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
