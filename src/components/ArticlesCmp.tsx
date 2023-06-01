import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ArticleList } from "./Articles";

const ArticlesCmp = () => {
  return (
    <Flex
      flexDir="column"
      fontSize="xl"
      /* justifyContent="center" */
      alignItems={{ base: "center" }}
      maxW={{ base: "80vw" }}
    >
      <Flex alignSelf="flex-start" mx={{ base: "3", md: "9%" }}>
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
            Articles
          </Text>
        </Heading>
      </Flex>
      <Box display="flex" flexDir="column" mt="20px" gap={7}>
        <ArticleList />
      </Box>
    </Flex>
  );
};

export default ArticlesCmp;
