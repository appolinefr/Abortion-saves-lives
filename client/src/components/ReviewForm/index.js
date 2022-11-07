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

import { ADD_REVIEW } from "../../utils/mutations";

// import Auth from '../../utils/auth';

const ReviewForm = ({ facilityId }) => {
  const [reviewText, setReviewText] = useState();

  const [addReview, { error }] = useMutation(ADD_REVIEW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addReview({
        variables: {
          facilityId,
          reviewText,
          //   commentAuthor: Auth.getProfile().data.username,
        },
      });
console.log(data)
      setReviewText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "reviewText" && value.length <= 280) {
      setReviewText(value);
    }
  };

  return (
    <>
      <Text>
        {error ? "Error!" : ""}
        {error && <Text as="span">{error.message}</Text>}
      </Text>
      <Box
        borderRadius="lg"
        bg={"gray.100"}
        p={8}
        //   color={useColorModeValue("gray.700", "whiteAlpha.900")}
        shadow="base"
        w={{ base: "md", md: "lg", lg: "xl" }}
      >
        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel textAlign={"center"} mb={4}>
              Your review
            </FormLabel>
            <Textarea
              bg="white"
              name="message"
              value={reviewText}
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
            Add review
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default ReviewForm;
