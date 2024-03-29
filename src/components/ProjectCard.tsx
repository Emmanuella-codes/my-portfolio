import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import BreakfastPic from "../assets/Screenshots/breakfast-pic.png";
import ManagePic from "../assets/Screenshots/manage-pic.png";
import PortfolioPic from "../assets/Screenshots/portfolio-pic.png";
import PlannerPic from "../assets/Screenshots/planner-pic.png";
import QuotePic from "../assets/Screenshots/quote-pic.png";
import AgeCalcPic from "../assets/Screenshots/age-calc-pic.png";
import LotusPic from "../assets/Screenshots/lotus-bliss-pic.png";
import DictionaryPic from "../assets/Screenshots/dictionary-app-pic.png";
import MoniepointPic from "../assets/Screenshots/moniepoint-pic.png";
import "./styles/index.css";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  cardPicture: string;
  websiteLink?: string;
};

const projects: Project[] = [
  {
    title: "Darcy's Insurance",
    description:
      "Frontend Translation Test, a landing page recreation of a Dribbble design.",
    technologies: ["REACT", "TAILWIND CSS"],
    githubLink:
      "https://github.com/Emmanuella-codes/moniepoint-frontend-translation-test",
    cardPicture: MoniepointPic,
    websiteLink: "https://moniepoint-ftt.netlify.app/",
  },
  {
    title: "Dictionary App",
    description:
      "A Frontend Mentor challenge, powered by an API integration, the app retrieves and displays accurate and up-to-date information about searched words.",
    technologies: ["VUEJS", "TAILWIND CSS", "AXIOS"],
    githubLink: "https://github.com/Emmanuella-codes/dictionary-app",
    cardPicture: DictionaryPic,
    websiteLink: "https://dictionary-app-fem.vercel.app/",
  },
  {
    title: "Lotus Bliss Landing Page",
    description:
      "A basic landing page designed and built by me using Canva and Vue.js.",
    technologies: ["VUEJS", "TAILWIND CSS", "VUE SPLIDE", "AOS"],
    githubLink: "https://github.com/Emmanuella-codes/lotus-bliss-landing-page",
    cardPicture: LotusPic,
    websiteLink: "https://lotus-bliss.vercel.app/",
  },
  {
    title: "Quote Generator",
    description:
      "A fun/basic quote generator built with HTML, CSS and Typescript.",
    technologies: ["STACKBLITZ", "HTML5", "CSS3", "TYPESCRIPT"],
    githubLink: "https://github.com/Emmanuella-codes/quote-generator",
    cardPicture: QuotePic,
    websiteLink: "https://typescript-screev.stackblitz.io/",
  },
  {
    title: "Planner App",
    description:
      "A Todo/planner app, built with React, Redux and Redux-persist used to perform CRUD operations.",
    technologies: ["TS", "REACT", "REDUX", "CHAKRA UI", "CSS"],
    githubLink: "https://github.com/Emmanuella-codes/planner-app",
    cardPicture: PlannerPic,
    websiteLink: "https://online-planner.netlify.app/",
  },
  {
    title: "Breakfast Idea App",
    description:
      "A breakfast idea app that can be used to search recipes. Users can sign in to generate random recipes, save and delete them.",
    technologies: ["TS", "NEXTJS", "CHAKRA UI", "FIREBASE"],
    githubLink: "https://github.com/Emmanuella-codes/breakfast-idea-app",
    cardPicture: BreakfastPic,
    websiteLink: "https://breakfast-app.netlify.app/",
  },
  {
    title: "Age Calculator",
    description:
      "A Frontend Mentor challange, built with Vue and Tailwind CSS used to calculate the user's age in years, months and days.",
    technologies: ["VUEJS", "TAILWIND CSS"],
    githubLink: "https://github.com/Emmanuella-codes/Age-Calculator-App",
    websiteLink: "https://fe-age-calc.netlify.app/",
    cardPicture: AgeCalcPic,
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
    technologies: ["TS", "REACT", "CHAKRA-UI"],
    githubLink: "https://github.com/Emmanuella-codes/my-portfolio",
    cardPicture: PortfolioPic,
    websiteLink: "https://ellachukwu-portfolio.netlify.app/",
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
        fontFamily={"Rubik"}
      >
        <Box>
          <Heading w={"fit-content"} className="github-btn" fontSize={"lg"}>
            <span
              style={{
                paddingInlineStart: "2px",
                paddingInlineEnd: "2px",
              }}
            >
              {project.title}
            </span>{" "}
          </Heading>
          {project.websiteLink ? (
            <Flex gap="5">
              <Box>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  fontSize={"md"}
                  className="website-btn"
                  style={{ textDecoration: "none" }}
                >
                  Github Link
                </Link>
              </Box>
              <Box>
                <Link
                  href={project.websiteLink}
                  target="_blank"
                  fontSize={"md"}
                  className="website-btn"
                  style={{ textDecoration: "none" }}
                >
                  Website Link
                </Link>
              </Box>
            </Flex>
          ) : (
            <Box>
              <Link
                href={project.githubLink}
                fontSize={"md"}
                className="website-btn"
                style={{ textDecoration: "none" }}
              >
                Github Link
              </Link>
            </Box>
          )}
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
                  display={"flex"}
                  alignItems="center"
                  flexDirection={"column"}
                  justifyContent="center"
                >
                  <Text fontSize={"12px"}>{tech}</Text>
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
