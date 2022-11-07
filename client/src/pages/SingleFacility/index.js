import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import {
  Center,
  Box,
  Stack,
  Text,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";

import CommentList from "../../components/CommentList";
import CommentForm from "../../components/CommentForm";
import FacilityPageHero from "../../components/FacilitiesPageHero";

import { QUERY_SINGLE_FACILITY } from "../../utils/queries";


const SingleFacility = () => {
  // Use `useParams()` to retrieve value of the route parameter `:facilityId`
  const { facilityId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_FACILITY, {
    // pass URL parameter
    variables: { facilityId: facilityId },
  });

  const facility = data?.facility || {};

  if (loading) {
    return <Center fontSize={"2xl"}>Loading...</Center>;
  }

  return (
    <>
      <FacilityPageHero />
      <Container maxW={"6xl"} mt={10}>
        <Center py={2}>
          <Box
            maxW={"350px"}
            w={"full"}
            boxShadow={"xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Stack textAlign={"center"} p={6} align={"center"} bg={"gray.100"}>
              <Text
                fontSize={"lg"}
                fontWeight={500}
                bg={"#A7D2CB"}
                p={2}
                px={3}
                mb={4}
                color={"white"}
                rounded={"full"}
              >
                {facility.name}
              </Text>
              <Stack direction={"column"} align={"center"} justify={"center"}>
                <Text mb={2}>{facility.address}</Text>
                <Text fontWeight={800}>{facility.phone}</Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Container maxW={"6xl"}>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            maxW={"6xl"}
          >
            <CommentForm facilityId={facility._id}/>
              <CommentList comments={facility.comments} />
          </SimpleGrid>
        </Container>
      </Container>
    </>
  );
};

export default SingleFacility;
