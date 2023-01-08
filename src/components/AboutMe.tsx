import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const AboutMe = () => {
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
            About me
          </Heading>
        </Flex>
        <Box w="83%" mt="20px">
          <Text>I build applications that reside on the web.</Text>
          <Text mt="5px">
            I'm a Frontend Developer with a focus on creating amazing web
            applications. I use front-end tools like the React library and the
            Vue framework to quickly and easily create appealing website layouts
            and applications.
          </Text>
          <Text mt="5px">
            I currently work as a Frontend Developer intern at{" "}
            <span
              style={{ padding: "1px 4px", borderBottom: "2px solid #7DC670" }}
            >
              <a href="https://app.unboxd.gifts">Unboxd</a>
            </span>{" "}
            my current work focuses on creating accessible features and fixing
            bugs.
          </Text>
          <Text mt="5px">
            When I'm not learning or coding, you may find me visiting friends
            and family, cooking, reading novels written in an African setting,
            or writing short stories.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default AboutMe;
