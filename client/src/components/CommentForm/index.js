import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import {
  Box,
  Text,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  VStack,
  Center
} from "@chakra-ui/react";

import { ADD_COMMENT } from "../../utils/mutations";

// import Auth from '../../utils/auth';

const CommentForm = () => {
  const [commentBody, setCommentBody] = useState();

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addComment({
        variables: {
          commentBody,
          //   commentAuthor: Auth.getProfile().data.username,
        },
      });
      console.log(data);
      setCommentBody("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentBody" && value.length <= 280) {
      setCommentBody(value);
    }
  };

  return (
    <Center mt={10}>
      <Box
        borderRadius="lg"
        bg={"gray.100"}
        p={8}
        //   color={useColorModeValue("gray.700", "whiteAlpha.900")}
        shadow="base"
        w={{ base: "md", md: "lg", lg: "xl" }}
      >
        <Text>
          {error ? "Error!" : ""}
          {error && <Text as="span">{error.message}</Text>}
        </Text>
        <VStack spacing={5}>
          <FormControl>
            <FormLabel textAlign={"center"} mb={4}>
              Share your story
            </FormLabel>
            <Textarea
              bg="white"
              name="commentBody"
              value={commentBody}
              onChange={handleChange}
              rows={6}
              focusBorderColor="#FF5677"
            />
          </FormControl>
          <Button
            bg="#FF5677"
            color="white"
            _hover={{
              bg: "#A7D2CB",
            }}
            type="click"
            onClick={handleFormSubmit}
          >
            Share
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default CommentForm;
