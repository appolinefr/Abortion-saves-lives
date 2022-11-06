import {
  Box,
  Heading,
  Container,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

const styles = {
  color: "#FF5677",
};

export default function FacilityPageHero() {
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
            fontSize={{ base: "3xl", sm: "3xl", md: "4xl" }}
            lineHeight={"130%"}
          >
            Where to get an&nbsp;
            <Text as={"span"} color={styles.color}>
              abortion
            </Text>
          </Heading>
        </Stack>
      </Container>
    </>
  );
}
