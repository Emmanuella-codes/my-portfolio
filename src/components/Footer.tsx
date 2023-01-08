import { Box, Text, Flex, Link, Icon } from "@chakra-ui/react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";
/* import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"; */

const Footer = () => {
  /* useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "linear",
      delay: 400,
    });
  }, []); */
  return (
    <Box
      border={{ base: "1px solid #3c6e71", md: "none" }}
      p={{ base: "4", md: "0" }}
      /* data-aos="slide-up" */
    >
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
        <Link
          href="https://www.linkedin.com/in/emmanuella-chukwu-a05b54204/"
          isExternal
        >
          <Icon as={RiGithubFill} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
