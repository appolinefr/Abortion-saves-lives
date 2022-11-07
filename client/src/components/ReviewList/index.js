import React from "react";

import { Center, Box, Stack, Text, Heading } from "@chakra-ui/react";

const ReviewList = ({ reviews = [] }) => {
  if (!reviews.length) {
    return (
      <Center py={6} my={{ base: 10, md: 10, lg: 10, xl: 10 }}>
        <Heading>
          No Reviews Yet
        </Heading>
      </Center>
    );
  }
  return (
    <>
      {reviews.map((review) => (
        <Box
          key={review._id}
          maxW={"330px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack textAlign={"center"} p={6} align={"center"}>
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={"#A7D2CB"}
              p={2}
              px={3}
              color={"white"}
              rounded={"full"}
            >
              {review.createdAt}
            </Text>
          </Stack>
          <Box px={6} py={10}>
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={"#A7D2CB"}
              p={2}
              px={3}
              color={"white"}
              rounded={"full"}
            >
              {review.reviewText}
            </Text>
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={"#A7D2CB"}
              p={2}
              px={3}
              color={"white"}
              rounded={"full"}
            >
              {review.reviewAuthor}
            </Text>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ReviewList;
