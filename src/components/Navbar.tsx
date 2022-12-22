import { Box, Container, Flex, Link } from "@chakra-ui/react";

/* interface INavbar {
  pageTitle?: string;
  hasInnerPage?: boolean;
  setMobileDisplay?: () => void;
} */

const Navbar = () => {
  return (
    <Container>
      <Flex
        flexDir="row"
        height="40px"
        alignItems="center"
        justifyContent="flex-end"
        /* maxW="50vw" */
        gap="10"
      >
        <Box>
          <Link href="/">About me</Link>
        </Box>
        <Box>
          <Link href="/projects">Projects</Link>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
