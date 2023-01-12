import { Box, Flex, Text, Heading, Icon, Link } from "@chakra-ui/react";
import {
  SiReact,
  SiNextDotJs,
  SiNuxtDotJs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { RiVuejsFill, RiGithubFill } from "react-icons/ri";
import { DiGit } from "react-icons/di";

const ProjectCmp = () => {
  return (
    <>
      <Flex
        flexDir="column"
        fontSize="xl"
        alignItems="center"
        maxW={{ md: "50vw" }}
        m={{ md: "0 auto" }}
      >
        <Flex
          flexDir="column"
          alignSelf="flex-start" /* ml={{ base: "43px", md: "56px" }} */
          m="auto"
          w="83%"
        >
          <Heading as="h2" size="xl">
            Projects
          </Heading>
        </Flex>
        <Box display="flex" flexDir="column" w="83%" mt="20px" gap="4">
          <Flex
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-between"
            gap="7"
            border="1px solid #3c6e71"
            p="3"
          >
            <Box>
              <Link href="https://github.com/Emmanuella-codes/movie-recommendation-website">
                Movie App
              </Link>
            </Box>
            <Box>
              <Text>
                A movie recommendation built with Nuxtjs and SCSS. It displays
                latest movies, the details and casts.
              </Text>
              <Flex gap="4" justifyContent="flex-end" mt="2">
                <Box border="1px solid #3c6e71" p="2">
                  <Text>NUXTJS</Text>
                </Box>
                <Box border="1px solid #3c6e71" p="2">
                  <Text>SCSS</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-between"
            gap="7"
            border="1px solid #3c6e71"
            p="3"
          >
            <Box>
              <Link href="https://github.com/Emmanuella-codes/manage-landing-page">
                Manage Landing Page
              </Link>
            </Box>
            <Box>
              <Text>
                A landing page on{" "}
                <Link href="https://www.frontendmentor.io/">
                  Frontend Mentor
                </Link>{" "}
                challange. Built with Vue and Tailwind CSS.
              </Text>
              <Flex gap="4" justifyContent="flex-end" mt="2">
                <Box border="1px solid #3c6e71" p="2">
                  <Text>VUEJS</Text>
                </Box>
                <Box border="1px solid #3c6e71" p="2">
                  <Text>TAILWIND CSS</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-between"
            gap="7"
            border="1px solid #3c6e71"
            p="3"
          >
            <Box>
              <Link href="https://github.com/Emmanuella-codes/my-portfolio">
                Portfolio Website
              </Link>
            </Box>
            <Box>
              <Text>My Portfolio website, built with React and Chakra-UI.</Text>
              <Flex gap="4" justifyContent="flex-end" mt="2">
                <Box border="1px solid #3c6e71" p="2">
                  <Text>REACT</Text>
                </Box>
                <Box border="1px solid #3c6e71" p="2">
                  <Text>CHAKRA-UI</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex flexDir="column" alignSelf="flex-start" m="auto" w="83%">
          <Box mt="7">
            <Heading as="h2" size="xl">
              Skills
            </Heading>
          </Box>
          <Box
            display="flex"
            flexDir="column"
            gap="6"
            mt="4"
            fontSize={{ base: "16px" }}
          >
            <Box display="flex" flexDir="row" gap={{ base: "4", md: "10" }}>
              <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <Icon as={SiReact} w="38px" h="38px" />
                <Text>React</Text>
              </Box>
              <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <Icon as={RiVuejsFill} w="38px" h="38px" />
                <Text>Vue</Text>
              </Box>
              <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <Icon as={SiNextDotJs} w="38px" h="38px" />
                <Text>Next</Text>
              </Box>
              <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <Icon as={SiNuxtDotJs} w="38px" h="38px" />
                <Text>Nuxt</Text>
              </Box>
              <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <Icon as={SiJavascript} w="38px" h="38px" />
                <Text>JS</Text>
              </Box>
            </Box>
            <Box display="flex" flexDir="row" gap={{ base: "4", md: "10" }}>
              <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <Icon as={SiTypescript} w="38px" h="38px" />
                <Text>TS</Text>
              </Box>
              <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <Icon as={SiTailwindcss} w="38px" h="38px" />
                <Text>Tailwind</Text>
              </Box>
              <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <Icon as={SiBootstrap} w="38px" h="38px" />
                <Text>Bootstrap</Text>
              </Box>
              <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <Icon as={DiGit} w="38px" h="38px" />
                <Text>Git</Text>
              </Box>
              <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <Icon as={RiGithubFill} w="38px" h="38px" />
                <Text>Github</Text>
              </Box>
            </Box>
          </Box>
          <Box mt="9" mb="16">
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
