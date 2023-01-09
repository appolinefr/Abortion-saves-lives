import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

import AbortionIsHealthcare from "../../../images/abortionIsHealthcare.jpg";

export default function AboutSite() {
  return (
    <Container maxW={"5xl"} pb={{ base: 6, md: 8, lg: 12 }} pt={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} justifyContent={"center"}>
          <Text
            textTransform={"uppercase"}
            color={"white"}
            fontWeight={600}
            fontSize={"sm"}
            bg={"#187498"}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About this app
          </Text>
          <Heading size={"lg"}>
            Abortions are legal and safe in Australia
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            We are living in a country where reproductive rights are not in
            immediate danger. Nevertheless, there are large inequalities when it
            comes to accessing abortion and some people have to travel far, wait
            too long or pay too much for this basic human right. This
            application will allow you to read the experience of other users
            about abortion and will help you decide where you can get a
            judgment-free and supportive abortion.
          </Text>
        </Stack>
        <Flex justifyContent={"center"}>
          <Image
            alt={"Abortion is healthcare march"}
            src={AbortionIsHealthcare}
            objectFit={"cover"}
            width={607}
            aspect-ratio={607 / 404}
            height={404}

          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
