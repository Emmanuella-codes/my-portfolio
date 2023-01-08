import { Box, Flex, Heading, Text } from "@chakra-ui/react";
// import React, { useEffect } from "react";

const Articles = () => {
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
          <Flex
            flexDir="column"
            alignSelf="flex-start" /* data-aos="slide-down" */
          >
            <Heading as="h2" size="xl">
              Articles
            </Heading>
          </Flex>
          <Flex flexDir="column">
            <Box
              /* data-aos="slide-up" */
              /* data-aos-anchor-placement="center" */
              border="1px solid"
              boxShadow="md"
              my="6"
              p="7"
              borderRadius="10px"
              className="aos-init animate"
            >
              <Text>
                <a href="https://emmanuella456.hashnode.dev/taking-risks-having-a-clear-roadmap-in-tech-dev-retro-2022">
                  Taking risks / having a clear roadmap in tech - Dev Retro 2022
                </a>
              </Text>
              <Text fontSize="16px" mt="2">
                "At the beginning of 2022, I was struggling with JavaScript and
                was convinced I wasn't smart enough to figure it out; giving up
                wasn't an option, so I chose a different strategy."
              </Text>
            </Box>
            <Box
              /* data-aos="slide-up" */
              /* data-aos-anchor-placement="top" */
              border="1px solid"
              boxShadow="md"
              my="6"
              p="7"
              borderRadius="10px"
              className="aos-init animate"
            >
              <Text>
                <a href="https://emmanuella456.hashnode.dev/dealing-with-imposter-syndrome">
                  Dealing with Imposter Syndrome
                </a>
              </Text>
              <Text fontSize="16px" mt="2">
                "Imposter syndrome is a psychological pattern in which a person
                has constant internalized doubts about their abilities and
                worries that they will be discovered as a 'fraud.'"
              </Text>
            </Box>
            <Box
              /* data-aos="slide-up" */
              data-aos-anchor-placement="top"
              border="1px solid"
              boxShadow="md"
              my="6"
              p="7"
              borderRadius="10px"
              className="aos-init animate"
            >
              <Text>
                <a href="https://emmanuella456.hashnode.dev/difference-between-tailwind-css-and-chakra-ui">
                  Difference between Tailwind CSS and Chakra-UI
                </a>
              </Text>
              <Text fontSize="16px" mt="2">
                "Tailwind CSS and Chakra UI are both CSS frameworks that are
                designed to make it easier to style and build responsive layouts
                for web applications."
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Articles;
