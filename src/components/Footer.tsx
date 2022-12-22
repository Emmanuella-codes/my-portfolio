import { Box, Text, Flex, Link, Icon } from "@chakra-ui/react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Box>
      <Text>Contact me online</Text>
      <Flex flexDir="row" justifyContent="space-between">
        <Link href="https://twitter.com/Emma_codess" isExternal>
          <Icon as={AiOutlineTwitter} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/emmanuella-chukwu-a05b54204/"
          isExternal
        >
          <Icon as={FaLinkedinIn} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
