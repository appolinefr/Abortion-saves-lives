import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import {
  Box,
  Text,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { ADD_COMMENT } from "../../utils/mutations";

// import Auth from '../../utils/auth';

const CommentForm = ({ facilityId }) => {
  const [commentBody, setCommentBody] = useState("");

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addComment({
        variables: {
          facilityId,
          commentBody,
          //   commentAuthor: Auth.getProfile().data.username,
        },
      });

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
    <>
      <Text>
        {error ? "Error!" : ""}
        {error && <Text as="span">{error.message}</Text>}
      </Text>
      <Box
        //   bg={useColorModeValue("white", "gray.700")}
        borderRadius="lg"
        p={8}
        //   color={useColorModeValue("gray.700", "whiteAlpha.900")}
        shadow="base"
        w={{ base: "md", md: "lg", lg: "xl" }}
      >
        <VStack spacing={5}>
          <FormControl isRequired onSubmit={handleFormSubmit}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={commentBody}
              onChange={handleChange}
              placeholder="Your Message"
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
            type="submit"
          >
            Add comment
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default CommentForm;
