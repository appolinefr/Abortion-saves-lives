import {
  Heading,
  Text,
  Stack,
  Container,
  SimpleGrid,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import AbortionMarch from "../../../images/abortionIsLegal.jpg";
import Donate from "../../../images/donate.jpg";

import DonateModal from "../SupportModal";

export default function SupportMainBody() {
  const text = useColorModeValue("gray.600", "gray.400");
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
            <Text color={text} fontSize={"lg"}>
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
            <Image
              alt={"Protect abortion march"}
              src={Donate}
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
            <Text color={text} fontSize={"lg"}>
              Abortion is mostly free in South Australia but accessing abortion
              is still a postcode lottery for women across regional areas. We
              need your donations to support them with costs to cover travel,
              accommodation and time off work.
            </Text>
            <DonateModal />
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
