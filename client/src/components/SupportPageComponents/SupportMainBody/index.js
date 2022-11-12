import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  Button,
  Container,
  SimpleGrid,
  Flex,
  Image,
} from "@chakra-ui/react";
import { BsFillHeartFill } from "react-icons/bs";
import AbortionMarch from "../../../images/abortionIsLegal.jpg";

export default function BasicStatistics() {
  return (
    <>
      <Container maxW={"5xl"} pb={{ base: 6, md: 8, lg: 8 }} pt={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} justifyContent={"center"}>
            <Text
              textTransform={"uppercase"}
              color={"white"}
              fontWeight={600}
              bg={"#187498"}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
              size={"lg"}
            >
              Protect human rights
            </Text>
            <Heading size={"lg"}>Help us keep abortion safe</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Find out where your lawmakers stand on abortion rights. Do you
              know where your local, state, and federal legislators stand on
              abortion rights? Call or email them to find out—and urge them to
              act now to protect abortion rights and access in law.
            </Text>
          </Stack>
          <Flex justifyContent={"center"}>
            <Image
              alt={"Protect abortion march"}
              src={AbortionMarch}
              objectFit={"cover"}
              width={607}
              aspect-ratio={607 / 404}
              height={404}
              borderRadius={"md"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Container maxW={"5xl"} pb={4} pt={{ base: 6, md: 8, lg: 12 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex justifyContent={"center"}>
            <Stack
              direction={{ base: "column", md: "row" }}
              textAlign="center"
              justify="center"
              spacing={{ base: 4, lg: 10 }}
              py={10}
            >
              <Box
                mb={4}
                shadow="base"
                borderWidth="1px"
                alignSelf={{ base: "center", lg: "flex-start" }}
                width={400}
                // aspect-ratio={400 / 304}
                objectFit={"cover"}
                height={304}
                borderRadius={"md"}
                bg={"gray.50"}
                borderColor={"#187498"}
              >
                <VStack py={10} borderBottomRadius={"xl"} spacing={10} my={6}>
                  <Heading fontWeight="500" fontSize="3xl">
                    Make a donation
                  </Heading>
                  <BsFillHeartFill color="#FF5677" size={"30px"} />
                  <Button
                    bg="#187498"
                    variant="outline"
                    color={"white"}
                    _hover={{
                      color: "#187498",
                      bg: "white",
                      borderColor: "#187498",
                    }}
                  >
                    Donate
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </Flex>
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
              We need you
            </Text>
            <Heading size={"lg"}>
              Your time and donation are important to us
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Abortion is mostly free in South Australia but accessing abortion
              is still a postcode lottery for women across regional areas. We
              need your donations to support them with costs to cover travel,
              accommodation and time off work.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
