import { RiGithubFill, RiVuejsFill } from "react-icons/ri";
import {
  SiBootstrap,
  SiJavascript,
  SiNextDotJs,
  SiNuxtDotJs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ChakraUI from "../assets/logos/ChakraUI";
import { DiGit } from "react-icons/di";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";

const skillsData = [
  {
    icon: SiReact,
    name: "React",
  },
  {
    icon: RiVuejsFill,
    name: "Vue",
  },
  {
    icon: SiNextDotJs,
    name: "Next",
  },
  {
    icon: SiNuxtDotJs,
    name: "Nuxt",
  },
  {
    icon: SiJavascript,
    name: "JS",
  },
  {
    icon: ChakraUI,
    name: "Chakra UI",
  },
  {
    icon: SiTypescript,
    name: "TS",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
  },
  {
    icon: SiBootstrap,
    name: "Bootstrap",
  },
  {
    icon: DiGit,
    name: "Git",
  },
  {
    icon: RiGithubFill,
    name: "Github",
  },
];

const Skills = () => {
  return (
    <Flex flexDir={"column"}>
      <Box mt="7" >
        <Heading as="h2" size="xl">
          Skills
        </Heading>
      </Box>
      <Box
        display="flex"
        flexDir="row"
        flexWrap={"wrap"}
        gap="6"
        mt="4"
        fontSize={{ base: "sm" }}
      >
        {skillsData.map((skill, index) => (
          <Box key={index} display="flex" flexDir="column" alignItems="center">
            <Icon as={skill.icon} w="38px" h="38px" />
            <Text>{skill.name}</Text>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default Skills;
