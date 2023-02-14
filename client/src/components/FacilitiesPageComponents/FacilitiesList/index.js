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
  SimpleGrid,
  Container,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { HiCurrencyDollar } from "react-icons/hi";

const styles = {
  mainColor: "#FF5677",
  secGreenColor: "#A7D2CB",
  secBlueColor: "#187498",
  grey: "gray.100",
};

const FacilitiesList = ({ facilities }) => {
  const bg = useColorModeValue(styles.grey, "whiteAlpha.100");
  const stackBg = useColorModeValue("white", "whiteAlpha.100");

  if (!facilities.length) {
    return <Heading>No facilities Yet</Heading>;
  }

  return (
    <Container maxW={"6xl"}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} maxW={"6xl"}>
        {facilities.map((facility) => (
          <Center key={facility._id} py={2} my={4}>
            <Box
              maxW={"350px"}
              w={"full"}
              boxShadow={"xl"}
              rounded={"md"}
              overflow={"hidden"}
              h={"100%"}
              bg={bg}
            >
              <Stack textAlign={"center"} p={6} align={"center"}>
                <Text
                  fontSize={"lg"}
                  fontWeight={500}
                  bg={styles.secBlueColor}
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
              <Box px={6} pb={10} pt={4} bg={stackBg}>
                <List spacing={3}>
                  <ListItem>
                    {facility.medicalAbortion === "Yes" ? (
                      <>
                        <ListIcon as={CheckIcon} color={styles.secGreenColor} />
                      </>
                    ) : (
                      <>
                        <ListIcon as={SmallCloseIcon} color="red" />
                      </>
                    )}
                    Medical abortion: {facility.medicalAbortion}
                  </ListItem>
                  <ListItem>
                    {facility.surgicalAbortion === "Yes" ? (
                      <>
                        <ListIcon as={CheckIcon} color={styles.secGreenColor} />
                      </>
                    ) : (
                      <>
                        <ListIcon as={SmallCloseIcon} color="red" />
                      </>
                    )}
                    Surgical abortion: {facility.surgicalAbortion}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiCurrencyDollar} />
                    Cost of procedure: {facility.cost}
                  </ListItem>
                </List>
                <Link to={`/facilities/${facility._id}`}>
                  <Button
                    mt={10}
                    w={"full"}
                    bg={styles.mainColor}
                    color={"white"}
                    rounded={"xl"}
                    _hover={{
                      bg: "gray.300",
                      color: "black",
                    }}
                  >
                    View testimonials
                  </Button>
                </Link>
              </Box>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default FacilitiesList;
