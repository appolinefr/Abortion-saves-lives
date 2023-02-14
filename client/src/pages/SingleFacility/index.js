import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import {
  Center,
  Box,
  Stack,
  Text,
  Container,
  Heading,
  useDisclosure,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

import { ThreeDots } from "react-loader-spinner";

import ReviewList from "../../components/FacilitiesReviewComponents/ReviewList";
import ReviewForm from "../../components/FacilitiesReviewComponents/ReviewForm";
import Auth from "../../utils/auth";
import myBody from "../../images/myBody.jpg";

import { QUERY_SINGLE_FACILITY } from "../../utils/queries";

const SingleFacility = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("gray.700", "gray.200");

  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: false });
  const { facilityId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_FACILITY, {
    variables: { facilityId: facilityId },
  });

  const facility = data?.facility || {};

  if (loading) {
    return (
      <Center>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color={"#FF5677"}
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </Center>
    );
  }

  if (!Auth.loggedIn()) {
    return (
      <>
        <Container maxW={"full"} bg={bg} color={color}>
          <Stack as={Box} textAlign={"center"} py={{ base: 14, md: 20 }}>
            <Heading
              fontWeight={300}
              fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
              lineHeight={"130%"}
            >
              Share your&nbsp;
              <Text as="span" color={"#FF5677"}>
                abortion&nbsp;
              </Text>
              at
            </Heading>
            <Heading
              fontWeight={300}
              fontSize={{ sm: "xl", md: "2xl", lg: "3xl" }}
              lineHeight={"130%"}
            >
              {facility.name}
            </Heading>
          </Stack>
        </Container>
        <Container
          as={Box}
          boxShadow={"lg"}
          maxW={"800px"}
          direction={"column"}
          width={"full"}
          rounded={"xl"}
          p={10}
          bg={"#177498"}
          my={{ sm: 12, md: 20, lg: 24, xl: 28 }}
        >
          <Heading
            fontWeight={300}
            fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
            lineHeight={"130%"}
            my={20}
            textAlign={"center"}
            color={"white"}
          >
            You need to be logged in to see the testimonials
          </Heading>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="#FF5677">
            <ModalHeader my={4} fontSize="2xl" color={"white"}>
              Be respectful
            </ModalHeader>
            <ModalCloseButton />
            <Image src={myBody}></Image>
            <ModalBody pb={6} bg="white">
              While posting testimonials on this page, please be respectful.
              <br /> Any instances of sexism, racism, homophobia or transphobia
              will not be tolerated on Abortion saves lives.
              <Text mt={4} fontWeight={600}>
                Comments attacking bodily autonomy will be removed.
              </Text>
            </ModalBody>
            <ModalFooter bg="white">Thank you</ModalFooter>
          </ModalContent>
        </Modal>
        <Container maxW={"full"} bg={"gray.50"} color={"gray.700"}>
          <Stack as={Box} textAlign={"center"} py={{ base: 14, md: 20 }}>
            <Heading
              fontWeight={300}
              fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
              lineHeight={"130%"}
            >
              Share your&nbsp;
              <Text as="span" color={"#FF5677"}>
                abortion&nbsp;
              </Text>
              at
            </Heading>
            <Heading
              fontWeight={300}
              fontSize={{ sm: "xl", md: "2xl", lg: "3xl" }}
              lineHeight={"130%"}
            >
              {facility.name}
            </Heading>
          </Stack>
        </Container>
        <Container
          maxW={"6xl"}
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
        >
          <ReviewList reviews={facility.reviews} />
        </Container>
        <Container>
          <Stack>
            <ReviewForm facilityId={facility._id} />
          </Stack>
        </Container>
      </>
    );
  }
};

export default SingleFacility;
