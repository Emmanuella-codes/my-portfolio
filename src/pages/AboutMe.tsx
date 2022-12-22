import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <>
      <Flex
        flexDir="column"
        alignItems="center"
        gap="6"
        maxW={{ md: "50vw" }}
        m={{ md: "0 auto" }}
        mt={{ base: "30px" }}
      >
        <Box>
          <Heading as="h2" size="xl">
            About me
          </Heading>
        </Box>
        <Box w="83%">
          <Text fontSize={{ base: "17px", md: "xl" }}>
            I build applications that reside on the web.
          </Text>
          <Text fontSize={{ base: "17px", md: "xl" }} mt="5px">
            I'm a Frontend Developer with a focus on creating amazing web
            applications. I use front-end tools like the React library and the
            Vue framework to quickly and easily create appealing website layouts
            and applications.
          </Text>
          <Text fontSize={{ base: "17px", md: "xl" }} mt="5px">
            I currently work as a Frontend Developer intern at{" "}
            <span style={{ backgroundColor: "#7DC670", padding: "1px 4px" }}>
              <a href="https://app.unboxd.gifts">Unboxd</a>
            </span>{" "}
            my current work focuses on creating accessible features and fixing
            bugs.
          </Text>
          <Text fontSize={{ base: "17px", md: "xl" }} mt="5px">
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
