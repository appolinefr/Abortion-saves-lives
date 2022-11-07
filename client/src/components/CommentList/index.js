import React from "react";

import {
  Box,
  Center,
  Text,
  Stack,
  SimpleGrid,
  Container,
  Heading,
} from "@chakra-ui/react";

const CommentsList = ({ comments }) => {
  if (!comments) {
    return <Heading>No comments yet</Heading>;
  }

  return (
    <Container maxW={"6xl"}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} maxW={"6xl"}>
        {comments.map((comment) => (
          <Center key={comment._id} py={2}>
            <Box
              maxW={"350px"}
              w={"full"}
              boxShadow={"xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Stack
                textAlign={"center"}
                p={6}
                align={"center"}
                bg={"gray.100"}
              >
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
                  {comment.commentBody}
                </Text>
              </Stack>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default CommentsList;
