import {
  Box,
  Heading,
  Container,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import SignupModal from "../../Signup";

const styles = {
  mainColor: "#FF5677",
  secGreenColor: "#A7D2CB",
  grey: "gray.100",
};

export default function MainPageHero() {
  return (
    <>
      <Container
        maxW={"10xl"}
        bg={useColorModeValue("gray.50", "gray.700")}
        color={useColorModeValue("gray.800", "gray.200")}
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
              as={"a"}
              width={160}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={styles.mainColor}
              href={"/support"}
              _hover={{
                bg: "#187498",
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
