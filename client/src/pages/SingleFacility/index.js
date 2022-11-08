import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Center, Box, Stack, Text, Container, Heading } from "@chakra-ui/react";

import ReviewList from "../../components/ReviewList";
import ReviewForm from "../../components/ReviewForm";

import { QUERY_SINGLE_FACILITY } from "../../utils/queries";

const SingleFacility = () => {
  const { facilityId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_FACILITY, {
    variables: { facilityId: facilityId },
  });

  const facility = data?.facility || {};

  if (loading) {
    return <Center fontSize={"2xl"}>Loading...</Center>;
  }

  return (
    <>
      <Container maxW={"10xl"} bg={"gray.50"} color={"gray.700"} mb={"6"}>
        <Stack as={Box} textAlign={"center"} py={{ base: 14, md: 20 }}>
          <Heading
            fontWeight={300}
            fontSize={{ base: "3xl", sm: "3xl", md: "4xl" }}
            lineHeight={"130%"}
          >
            {facility.name}
          </Heading>
          <Text>{facility.address}</Text>
          <Text>{facility.phone}</Text>
        </Stack>
      </Container>
      <Container maxW={"6xl"} columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <ReviewList reviews={facility.reviews} />
      </Container>
      <Container>
        <Stack>
          <ReviewForm facilityId={facility._id} />
        </Stack>
      </Container>
    </>
  );
};

export default SingleFacility;
