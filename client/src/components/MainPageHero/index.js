import {
  Box,
  Heading,
  Container,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import SignupModal from "../Signup";

const styles = {
  color: "#FF5677",
};

export default function MainPageHero() {
  return (
    <>
      <Container
        maxW={"10xl"}
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 14, md: 20 }}
        >
          <Heading
            fontWeight={300}
            fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
            lineHeight={"110%"}
          >
            A place where you can feel safe to talk about abortion
          </Heading>
          <Stack
            direction={"row"}
            spacing={8}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <SignupModal />
            <Button
              width={160}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={styles.color}
              href={"#"}
              _hover={{
                bg: "#A7D2CB",
              }}
            >
              Support us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
