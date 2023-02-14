import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Link,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  useColorMode,
} from "@chakra-ui/react";

import { BsSun, BsMoon } from "react-icons/bs";
import { HamburgerIcon } from "@chakra-ui/icons";

import LoginModal from "../Login";
import Auth from "../../utils/auth";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Box>
      <Flex
        minH={"80px"}
        py={{ base: 4 }}
        px={{ base: 4 }}
        borderBottom={1}
        backgroundColor={useColorModeValue("white", "#1A202C")}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "start" }}>
          <Heading
            color={useColorModeValue("gray.800", "gray.200")}
            as={Link}
            href={"/"}
            _hover={{ cursor: "pointer", textDecoration: "none" }}
          >
            <Text as={"span"} fontSize={"2xl"} fontWeight={300} mr={1}>
              Abortion
            </Text>
            <Text
              as={"span"}
              color={"#FF5677"}
              fontSize={"2xl"}
              fontWeight={500}
              mr={1}
            >
              Saves
            </Text>
            <Text as={"span"} fontSize={"2xl"} fontWeight={300}>
              Lives
            </Text>
          </Heading>
        </Flex>
        <Flex>
          <Flex display={{ base: "none", md: "flex" }} align={"center"} mr={4}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onOpen}
            ref={btnRef}
            icon={<HamburgerIcon w={6} h={6} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            _hover={{
              textDecoration: "none",
            }}
          />
        </Flex>
        <Flex display={{ base: "none", md: "flex" }}>
          {Auth.loggedIn() ? (
            <>
              <Button
                onClick={logout}
                as={"a"}
                fontSize={{ base: "sm", sm: "sm", md: "lg", lg: "lg" }}
                fontWeight={600}
                color={"white"}
                bg={"#187498"}
                _hover={{
                  bg: "#A7D2CB",
                }}
              >
                Log out
              </Button>
            </>
          ) : (
            <>
              <LoginModal />
            </>
          )}
        </Flex>
        <Flex display={{ base: "flex", md: "flex" }}>
          <IconButton
            ml={{ base: 0, md: 2 }}
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <BsMoon /> : <BsSun w={6} h={6} />}
            // color={dark}
            variant={"ghost"}
            _hover={{
              textDecoration: "none",
              // color: pink,
            }}
            // _active={{ color: pink }}
          />
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay filter={"blur 5px"} />
        <DrawerContent
          backgroundColor={useColorModeValue("gray.50", "gray.700")}
        >
          <DrawerCloseButton onClick={onClose} />
          <DrawerBody>
            <MobileNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const NAV_ITEMS = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Where",
    href: "/facilities",
  },
  {
    label: "Info",
    href: "/info",
  },
  {
    label: "Support",
    href: "/support",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const DesktopNav = () => {
  const styles = useColorModeValue("#FF5677", "gray.200");
  const hover = useColorModeValue("gray.800", "#FF5677");

  return (
    <Stack direction={"row"} spacing={1}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"lg"}
            fontWeight={500}
            color={styles}
            _hover={{
              textDecoration: "none",
              color: hover,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Stack p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Flex direction={"column"} align={"center"} py={4}>
        {Auth.loggedIn() ? (
          <>
            <Button
              onClick={logout}
              as={"a"}
              fontSize={{ base: "sm", sm: "sm", md: "lg", lg: "lg" }}
              fontWeight={600}
              color={"white"}
              bg={"#187498"}
              _hover={{
                bg: "#A7D2CB",
              }}
            >
              Log out
            </Button>
          </>
        ) : (
          <>
            <LoginModal />
          </>
        )}
      </Flex>
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  const styles = useColorModeValue("#FF5677", "gray.200");
  const hover = useColorModeValue("gray.800", "#FF5677");
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        direction={"column"}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        color={styles}
        _hover={{
          textDecoration: "none",
          color: hover,
        }}
      >
        <Text fontWeight={500} color={""}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
