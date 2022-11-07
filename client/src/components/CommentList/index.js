import React from "react";

import { Center, Box, Stack, Text, Heading } from "@chakra-ui/react";

const CommentList = ({ reviews = [] }) => {
  if (!reviews.length) {
    return (
      <Center py={6} my={{ base: 20, md: 20, lg: 20, xl: 20 }}>
        <Heading my={{ base: 6, md: 10, lg: 20, xl: 20 }}>
          No Comments Yet
        </Heading>
      </Center>
    );
  }
  return (
    <Center py={6} mb={6}>
      <Box
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
            {reviews.createdAt}
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
            {reviews.reviewText}
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
            {reviews.reviewAuthor}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default CommentList;
