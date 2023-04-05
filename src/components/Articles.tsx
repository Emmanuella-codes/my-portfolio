import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Articles = () => {
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
          <Flex flexDir="column" alignSelf="flex-start">
            <Heading as="h2" size="xl">
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
                Articles
              </Text>
            </Heading>
          </Flex>
          <Flex flexDir="column" fontFamily="Rubik">
            <Box
              border="1px solid"
              boxShadow="md"
              my="6"
              p="7"
              borderRadius="10px"
            >
              <a href="https://emmanuella456.hashnode.dev/taking-risks-having-a-clear-roadmap-in-tech-dev-retro-2022">
                <Text>
                  <span
                    style={{
                      borderBottom: "1px solid #3c6e71",
                      paddingInlineStart: "2px",
                      paddingInlineEnd: "2px",
                    }}
                  >
                    Taking risks / having a clear roadmap in tech - Dev Retro
                    2022
                  </span>
                </Text>
                <Text fontSize="16px" mt="2">
                  "At the beginning of 2022, I was struggling with JavaScript
                  and was convinced I wasn't smart enough to figure it out;
                  giving up wasn't an option, so I chose a different strategy."
                </Text>
              </a>
            </Box>
            <Box
              border="1px solid"
              boxShadow="md"
              my="6"
              p="7"
              borderRadius="10px"
            >
              <a href="https://emmanuella456.hashnode.dev/dealing-with-imposter-syndrome">
                <Text>
                  <span
                    style={{
                      borderBottom: "1px solid #3c6e71",
                      paddingInlineStart: "2px",
                      paddingInlineEnd: "2px",
                    }}
                  >
                    Dealing with Imposter Syndrome
                  </span>
                </Text>
                <Text fontSize="16px" mt="2">
                  "Imposter syndrome is a psychological pattern in which a
                  person has constant internalized doubts about their abilities
                  and worries that they will be discovered as a 'fraud.'"
                </Text>
              </a>
            </Box>
            <Box
              border="1px solid"
              boxShadow="md"
              my="6"
              p="7"
              borderRadius="10px"
            >
              <a href="https://emmanuella456.hashnode.dev/difference-between-tailwind-css-and-chakra-ui">
                <Text>
                  <span
                    style={{
                      borderBottom: "1px solid #3c6e71",
                      paddingInlineStart: "2px",
                      paddingInlineEnd: "2px",
                    }}
                  >
                    Difference between Tailwind CSS and Chakra-UI
                  </span>
                </Text>
                <Text fontSize="16px" mt="2">
                  "Tailwind CSS and Chakra UI are both CSS frameworks that are
                  designed to make it easier to style and build responsive
                  layouts for web applications."
                </Text>
              </a>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Articles;
