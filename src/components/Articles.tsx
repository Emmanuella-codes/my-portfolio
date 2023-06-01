import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type ArticleType = {
  title: string;
  description: string;
  link: string;
};

const ArticleContent: ArticleType[] = [
  {
    title:
      "The Struggle to Land Your First Tech Job: Embracing Resilience and Life Beyond Applications",
    description: `"Embarking on the journey to land your first tech job can be both exhilarating and daunting."`,
    link: "https://emmanuella456.hashnode.dev/the-struggle-to-land-your-first-tech-job-embracing-resilience-and-life-beyond-applications#heading-the-battle-of-applications-and-rejections",
  },
  {
    title: "Taking risks / having a clear roadmap in tech - Dev Retro 2022",
    description: `"At the beginning of 2022, I was struggling with JavaScript
    and was convinced I wasn't smart enough to figure it out;
    giving up wasn't an option, so I chose a different strategy."`,
    link: "https://emmanuella456.hashnode.dev/taking-risks-having-a-clear-roadmap-in-tech-dev-retro-2022",
  },
  {
    title: "Dealing with Imposter Syndrome",
    description: `"Imposter syndrome is a psychological pattern in which a
    person has constant internalized doubts about their abilities
    and worries that they will be discovered as a 'fraud.'"`,
    link: "https://emmanuella456.hashnode.dev/dealing-with-imposter-syndrome",
  },
  {
    title: "Difference between Tailwind CSS and Chakra-UI",
    description: `"Tailwind CSS and Chakra UI are both CSS frameworks that are
    designed to make it easier to style and build responsive
    layouts for web applications."`,
    link: "https://emmanuella456.hashnode.dev/difference-between-tailwind-css-and-chakra-ui",
  },
];

const ArticlesCard = ({ article }: { article: ArticleType }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <Flex
        flexDir="column"
        alignItems="center"
        maxW={{ md: "50vw" }}
        my="auto"
        mx={{ base: "10px" }}
        fontSize="xl"
      >
        <Flex flexDir="column" mt="9" w="83%">
          <Flex flexDir="column" fontFamily="Rubik">
            <Box
              border="1px solid"
              boxShadow="md"
              my="6"
              p="7"
              borderRadius="10px"
            >
              <a href={article.link}>
                <Text>
                  <span
                    style={{
                      borderBottom: "1px solid #3c6e71",
                      paddingInlineStart: "2px",
                      paddingInlineEnd: "2px",
                    }}
                  >
                    {article.title}
                  </span>
                </Text>
                <Text fontSize="16px" mt="2">
                  {article.description}
                </Text>
              </a>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export const ArticleList = () => {
  return (
    <>
      {ArticleContent.map((article) => (
        <ArticlesCard key={article.title} article={article} />
      ))}
    </>
  );
};

export default ArticlesCard;
