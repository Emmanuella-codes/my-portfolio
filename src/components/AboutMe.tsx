import { Box, Button, Collapse, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const AboutMe = () => {
  const [loadMore, setLoadMore] = useState(false);

  const handleLoadMore = () => setLoadMore(!loadMore);

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
              About me
            </Text>
          </Heading>
        </Flex>
        <Box w="83%" mt="20px" fontFamily={"Rubik"}>
          <Text>
            Hello! I'm a Frontend Developer and I love to build web
            applications.
          </Text>
          <Text mt="5px">
            I make use of{" "}
            <span
              style={{
                borderBottom: "1px solid #60D6F6",
                paddingInlineStart: "2px",
                paddingInlineEnd: "2px",
              }}
            >
              React
            </span>{" "}
            and{" "}
            <span
              style={{
                borderBottom: "1px solid #42D392",
                paddingInlineStart: "2px",
                paddingInlineEnd: "2px",
              }}
            >
              Vue
            </span>{" "}
            to create websites that are not only visually appealing but also
            engaging and interactive. I love learning, creating and pushing my
            boundaries with new technologies. I also know my way around Git and
            Github.
          </Text>
          <Text mt={4}>
            Like everyone who discovered a new skill in 2020, i decided to
            invest more time into software development. I have basic knowledge
            of Node and Express.
          </Text>
          <Text mt={4}>
            When I'm not immersed in code, you can find me exploring new recipes
            in the kitchen, getting lost in a good novel, jotting down my latest
            creative ideas in a short story or playing video games.
          </Text>
          <Box>
            <Collapse in={loadMore}>
              <Text mt={4}>
                One of my favorite things about being a developer is the
                constant learning and growth that comes with the job. There's
                always something new to discover, whether it's a new library, a
                new programming language, or a new way of thinking about
                problem-solving.
              </Text>
              <Text mt={4}>
                I'm excited about the possibilities that technology brings, and
                I'm dedicated to using my skills as a developer to make a
                positive impact in the world.
              </Text>
            </Collapse>
          </Box>
          <Box mt={5}>
            <Button
              width="80%"
              maxW="110px"
              m="0 auto"
              display="flex"
              onClick={handleLoadMore}
              alignItems={"center"}
              justifyContent={"center"}
            >
              Show {loadMore ? "Less" : "More"}
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default AboutMe;
