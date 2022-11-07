import React from "react";

import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  Button,
  SimpleGrid,
  Container,
  Heading,
} from "@chakra-ui/react";

const CommentsList = ({ comments }) => {
  if (!comments.length) {
    return <Heading>No facilities Yet</Heading>;
  }

  return (
    <Container maxW={"6xl"}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} maxW={"6xl"}>
        {comments.map((facility) => (
          <Center key={facility._id} py={2}>
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
                  {facility.name}
                </Text>
                <Stack direction={"column"} align={"center"} justify={"center"}>
                  <Text mb={2}>{facility.address}</Text>
                  <Text fontWeight={800}>{facility.phone}</Text>
                </Stack>
              </Stack>
              <Box px={6} pb={10} pt={2}>
                <List spacing={3}>
                  <ListItem>

                    Medical abortion: {facility.medicalAbortion}
                  </ListItem>
                  <ListItem>
                    Surgical abortion: {facility.surgicalAbortion}
                  </ListItem>
                  <ListItem>
                    Cost of procedure: {facility.cost}
                  </ListItem>
                </List>
                  <Button
                    mt={10}
                    w={"full"}
                    bg={"#FF5677"}
                    color={"white"}
                    rounded={"xl"}
                    _hover={{
                      bg: "#A7D2CB",
                    }}
                  >
                    View reviews
                  </Button>
              </Box>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default CommentsList;
