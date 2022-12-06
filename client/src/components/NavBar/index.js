import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import LoginModal from "../Login";

import Auth from "../../utils/auth";

const styles = {
  color: "#FF5677",
};

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Box>
      <Flex
        minH={"60px"}
        py={{ base: 4 }}
        px={{ base: 6 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            color={styles.color}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            fontSize={{ sm: "xl", md: "xl", lg: "2xl" }}
            fontWeight={300}
            mr={1}
          >
            Abortion
          </Text>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={styles.color}
            fontSize={{ sm: "xl", md: "xl", lg: "2xl" }}
            fontWeight={500}
            mr={1}
          >
            Saves
          </Text>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            fontSize={{ sm: "xl", md: "xl", lg: "2xl" }}
            fontWeight={300}
          >
            Lives
          </Text>
        </Flex>
        <Flex>
          <Flex display={{ base: "none", md: "flex" }} mr={6}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
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
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
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

  return (
    <Stack direction={"row"} spacing={2}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"lg"}
                fontWeight={500}
                color={styles.color}
                _hover={{
                  textDecoration: "none",
                  color:"gray.600",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={500} color={styles.color}>
          {label}
        </Text>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
