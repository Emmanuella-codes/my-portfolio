import { Box, Flex, Text, Image } from "@chakra-ui/react";
import AvatarImg from "../assets/Avatar.svg";

const PageLayout = () => {
  return (
    <>
      <Box
        maxW={{ md: "50vw" }}
        m={{ md: "0 auto" }}
        overflow={"hidden"}
        w="100%"
        display="flex"
        flexDir="column"
        fontFamily={"Rubik"}
      >
        <SidebarContent />
      </Box>
    </>
  );
};

const SidebarContent = () => {
  return (
    <Box
      bg="#EDF0F2"
      maxW={{ md: "50vw" }}
      pos={{ md: "fixed" }}
      h={{ md: "full" }}
      w={{ md: "full" }}
    >
      <Flex flexDir="column" alignItems="center">
        <Image w="50%" src={AvatarImg} />
        <Box display="flex" flexDir="column" alignItems="center" p="5">
          <Text fontSize="2xl" color="#000" fontWeight="700">
            [EMMANUELLA CHUKWU]
          </Text>
          <Text fontSize="xl" color="#000">
            Frontend Developer
          </Text>
        </Box>
        <Box
          as="button"
          bg="#000"
          px="20px"
          py="10px"
          borderRadius="10px"
          mb="35px"
        >
          <Text color="#FFF">
            <a href="mailto:ellafchukwu@gmail.com">Email me</a>
          </Text>
        </Box>
        <Box
          pos="absolute"
          bottom="0"
          mb="2"
          display={{ base: "none", md: "block" }}
          color="#1a202c"
        >
          <Text>Built with ❤️ by Emmanuella ✨</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default PageLayout;
