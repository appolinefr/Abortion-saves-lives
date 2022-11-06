import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const FacilitiesList = ({ facilities = [] }) => {
  if (!facilities.length) {
    return <h3>No facilities Yet</h3>;
  }

  return facilities.map((facility) => (
    <Center key={facility._id} py={6} mb={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={("gray.800", "white")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={"#A7D2CB"}
            p={2}
            px={3}
            color={"white"}
            rounded={"full"}
          >
            {facility.name}
          </Text>
          <Stack direction={"column"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"}>{facility.address}</Text>
            <Text fontSize={"6xl"} fontWeight={800}>
              {facility.phone}
            </Text>
          </Stack>
        </Stack>
        <Box bg={("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="#A7D2CB" />
              {facility.medicalAbortion}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="#A7D2CB" />
              {facility.surgicalAbortion}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="#A7D2CB" />
              {facility.cost}
            </ListItem>
          </List>
          <Link to={`/where/${facility._id}`}>
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
              View comments
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  ));
};

export default FacilitiesList;
