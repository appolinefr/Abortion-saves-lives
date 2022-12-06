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

export default function AboutHero() {
  return (
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
          lineHeight={"130%"}
        >
          <Text as={"span"} color={styles.color}>
            Abortion&nbsp;
          </Text>
          is healthcare.&nbsp;
          <Text as={"span"} color={styles.color}>
            Abortion&nbsp;
          </Text>
          is freedom.&nbsp;
          <Text as={"span"} color={styles.color}>
            Abortion&nbsp;
          </Text>
          is bodily autonomy.
        </Heading>
      </Stack>
    </Container>
  );
}
