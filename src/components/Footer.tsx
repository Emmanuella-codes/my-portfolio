import { Box, Text, Flex, Link, Icon } from "@chakra-ui/react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Box
      border={{ base: "1px dashed #3c6e71", md: "none" }}
      p={{ base: "4", md: "3" }}
      borderRadius={"lg"}
      fontFamily={"Rubik"}
      /* data-aos="slide-up" */
    >
      <Text fontSize="lg" textAlign={"center"}>
        Contact me online
      </Text>
      <Flex flexDir="row" justifyContent="space-between" mt={3}>
        <Link href="https://twitter.com/Emma_codess" isExternal>
          <Icon as={AiOutlineTwitter} boxSize={5} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/emmanuella-chukwu-frontend-developer/"
          isExternal
        >
          <Icon as={FaLinkedinIn} boxSize={5} />
        </Link>
        <Link href="https://github.com/Emmanuella-codes" isExternal>
          <Icon as={RiGithubFill} boxSize={5} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
