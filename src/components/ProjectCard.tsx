import { Box, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import BreakfastPic from "../assets/Screenshots/breakfast-pic.png";
import ManagePic from "../assets/Screenshots/manage-pic.png";
import PortfolioPic from "../assets/Screenshots/portfolio-pic.png";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  cardPicture: string;
};

const projects: Project[] = [
  {
    title: "Breakfast Idea App",
    description:
      "A breakfast idea app that can be used to search recipes. Users can sign in to generate random recipes, save and delete them.",
    technologies: ["NEXTJS", "CHAKRA UI", "FIREBASE"],
    githubLink: "https://github.com/Emmanuella-codes/breakfast-idea-app",
    cardPicture: BreakfastPic,
  },
  {
    title: "Manage Landing Page",
    description:
      "A landing page on Frontend Mentor challange. Built with Vue and Tailwind CSS.",
    technologies: ["VUEJS", "TAILWIND CSS"],
    githubLink: "https://github.com/Emmanuella-codes/manage-landing-page",
    cardPicture: ManagePic,
  },
  {
    title: "Portfolio Website",
    description: "My Portfolio website, built with React and Chakra-UI.",
    technologies: ["REACT", "CHAKRA-UI"],
    githubLink: "https://github.com/Emmanuella-codes/my-portfolio",
    cardPicture: PortfolioPic,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Container maxW={{ base: "sm", md: "xl" }}>
      <Flex
        flexDir="column"
        justifyContent="space-between"
        gap={7}
        border="1px solid #3c6e71"
        p={3}
      >
        <Box>
          <Link href={project.githubLink}>{project.title}</Link>
        </Box>
        <Flex flexDir={{ base: "column", md: "row" }} gap={5}>
          <Box w={{ md: "50%" }}>
            <Image src={project.cardPicture} alt="web screenshot" w="100%" />
          </Box>
          <Box w={{ base: "100%", md: "60%" }}>
            <Text>{project.description}</Text>
            <Flex gap="4" justifyContent="flex-end" mt="5">
              {project.technologies.map((tech) => (
                <Box
                  key={tech}
                  border="1px solid #3c6e71"
                  p="2"
                  flexWrap="wrap"
                >
                  <Text fontSize={{ base: "sm", md: "lg" }}>{tech}</Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export const ProjectList = () => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </>
  );
};

export default ProjectCard;
