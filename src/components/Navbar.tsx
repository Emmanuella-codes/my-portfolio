import {
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

/* interface INavbar {
  pageTitle?: string;
  hasInnerPage?: boolean;
  setMobileDisplay?: () => void;
} */

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box px={4}>
      <Flex justifyContent={"flex-end"} mt={"2"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Box className="nav-button">
              <Link href="/" _hover={{ textDecor: "none" }}>
                <Text as={"span"} position={"relative"}>
                  About me
                </Text>
              </Link>
            </Box>
            <Box className="nav-button">
              <Link href="/projects" _hover={{ textDecor: "none" }}>
                <Text as={"span"} position={"relative"}>
                  Projects
                </Text>
              </Link>
            </Box>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Box className="nav-button">
              <Link href="/" _hover={{ textDecor: "none" }}>
                <Text as={"span"} position={"relative"}>
                  About me
                </Text>
              </Link>
            </Box>
            <Box className="nav-button">
              <Link href="/projects" _hover={{ textDecor: "none" }}>
                <Text as={"span"} position={"relative"}>
                  Projects
                </Text>
              </Link>
            </Box>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
