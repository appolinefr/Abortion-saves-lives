import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import Appoline from "../../images/aboutPic.jpeg";
export default function AboutAuthor() {
  return (
    <Container maxW={"5xl"} pb={12} pt={{ base: 6, md: 8, lg: 12 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex justifyContent={"center"}>
          <Image
            alt={"feature image"}
            src={Appoline}
            objectFit={"cover"}
            width={607}
            aspect-ratio={607 / 404}
            height={404}
            borderRadius={"md"}
          />
        </Flex>
        <Stack spacing={4} justifyContent={"center"}>
          <Text
            textTransform={"uppercase"}
            color={"white"}
            fontWeight={600}
            fontSize={"sm"}
            bg={"#A7D2CB"}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            My story
          </Text>
          <Heading size={"lg"}>Abortion saved my life</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            I had an abortion in 2017. As a white, privileged and cis women
            living in a country where abortions are safe, legal and almost free,
            I was very lucky. Not all woman are. There is still a lot of stigma
            and shame around abortion even in countries where they are legal. I
            wanted to create a safe space where people can discuss abortions and
            share their experience to help others decide where they can get the
            best abortion for them.
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
