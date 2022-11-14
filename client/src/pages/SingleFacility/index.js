import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Center, Box, Stack, Text, Container, Heading } from "@chakra-ui/react";
import {WarningTwoIcon} from "@chakra-ui/icons"
import ReviewList from "../../components/FacilitiesReviewComponents/ReviewList";
import ReviewForm from "../../components/FacilitiesReviewComponents/ReviewForm";

import { QUERY_SINGLE_FACILITY } from "../../utils/queries";

import Auth from "../../utils/auth";

const SingleFacility = () => {
  const { facilityId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_FACILITY, {
    variables: { facilityId: facilityId },
  });

  const facility = data?.facility || {};

  if (loading) {
    return <Center fontSize={"2xl"}>Loading...</Center>;
  }

  if (!Auth.loggedIn()) {
    return (
      <>
        <Container maxW={"10xl"} bg={"gray.50"} color={"gray.700"} mb={"6"}>
          <Stack as={Box} textAlign={"center"} py={{ base: 14, md: 20 }}>
            <Heading
              fontWeight={300}
              fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
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
              fontSize={{ base: "3xl", sm: "3xl", md: "4xl" }}
              lineHeight={"130%"}
            ></Heading>
            <Text fontSize={"2xl"}>{facility.name} </Text>
          </Stack>
        </Container>
        <Container>
          <Box
            boxShadow={"lg"}
            maxW={"800px"}
            direction={"column"}
            width={"full"}
            rounded={"xl"}
            p={10}
            bg={"gray.50"}
            my={10}
          >
            <Stack>
              <Heading
                fontWeight={300}
                fontSize={{ base: "3xl", sm: "3xl", md: "4xl" }}
                lineHeight={"130%"}
                my={20}
                textAlign={"center"}
              >
                <WarningTwoIcon color={"#FF5677"} />
                You need to be logged in to see the testimonials
                <WarningTwoIcon color={"#FF5677"} />
              </Heading>
            </Stack>
          </Box>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container maxW={"10xl"} bg={"gray.50"} color={"gray.700"} mb={"6"}>
          <Stack as={Box} textAlign={"center"} py={{ base: 14, md: 20 }}>
            <Heading
              fontWeight={300}
              fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
              lineHeight={"130%"}
            >
              Share your&nbsp;
              <Text as="span" color={"#FF5677"}>
                abortion&nbsp;
              </Text>
              at {facility.name}
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
