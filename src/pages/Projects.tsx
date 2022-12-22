import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <>
      <Flex flexDir="column" alignItems="center" gap="6" h="full" w="full">
        <Box>
          <Heading as="h2" size="xl">
            Projects
          </Heading>
        </Box>
        <Box w="600px">
          <Text fontSize="xl">
            Below are a few projects i've worked on and lessons learnt while
            building.
          </Text>
          <Text fontSize="xl">
            Todo app built entirely with the vue frame work
          </Text>
          <Text fontSize="xl">
            I currently work as a Frontend Developer intern at{" "}
            <span style={{ backgroundColor: "#7DC670", padding: "1px 4px" }}>
              <a href="https://app.unboxd.gifts">Unboxd</a>
            </span>{" "}
            (a website for gifting where users can create and share wishlists
            with their loved ones), my current work focuses on creating
            accessible features and fixing bugs.
          </Text>
          <Text fontSize="xl">
            When I'm not learning or coding, you may find me visiting friends
            and family, cooking, reading novels written in an African setting,
            or writing short stories.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Projects;
