import {
  Box,
  VStack,
  Icon,
  Text,
  Button,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

import { FiInfo, FiMap, FiShare2 } from "react-icons/fi";

const styles = {
  mainColor: "#FF5677",
  grey: "gray.100",
};

const Feature = ({ heading, text, icon, button }) => {
  return (
    <GridItem>
      {icon}
      <chakra.h3 fontSize="xl" fontWeight="600" mb={3}>
        {heading}
      </chakra.h3>
      <chakra.p color={"gray.500"}>{text}</chakra.p>
      {button}
    </GridItem>
  );
};

export default function MainPageBody() {
  return (
    <Box as={Container} maxW="7xl" mt={{ sm: 8, md: 10, lg: 14 }} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={3}
      >
        <GridItem colSpan={4}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="400">
              Everything you need to know about&nbsp;
              <Text as={"span"} color={styles.mainColor}>
                abortion
              </Text>
              &nbsp;in SA
            </chakra.h2>
          </VStack>
        </GridItem>
      </Grid>
      <Divider
        mt={10}
        mb={16}
        borderColor={useColorModeValue("gray.300", "gray.200")}
      />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          icon={
            <Icon as={FiInfo} w={10} h={10} color={styles.mainColor} mb={4} />
          }
          heading={"Get information about abortion"}
          text={
            "Abortion is a safe and legal way to end a pregnancy. This will help you understand your abortion options and navigate the best care pathway."
          }
          button={
            <Button
              href={`/info`}
              my={6}
              as={"a"}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={"#187498"}
              _hover={{
                bg: styles.mainColor,
              }}
            >
              Learn more
            </Button>
          }
        />
        <Feature
          icon={
            <Icon as={FiMap} w={10} h={10} color={styles.mainColor} mb={4} />
          }
          heading={"Where can I get an abortion"}
          text={
            "This tool will help you find a health service in South Australia that provides the type of abortion that suits your situation best as well as the cost for the procedure."
          }
          button={
            <Button
              my={6}
              as={"a"}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={"#187498"}
              href={`/facilities`}
              _hover={{
                bg: styles.mainColor,
              }}
            >
              Learn more
            </Button>
          }
        />
        <Feature
          icon={
            <Icon as={FiShare2} w={10} h={10} color={styles.mainColor} mb={4} />
          }
          heading={"I want to share my experience"}
          text={
            "If you have had an abortion in SA, you can share your experience and write a testimonial to help other people decide where would be the best facility for them."
          }
          button={
            <Button
              my={6}
              as={"a"}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={"#187498"}
              href={"/facilities"}
              _hover={{
                bg: styles.mainColor,
              }}
            >
              Learn more
            </Button>
          }
        />
      </Grid>
    </Box>
  );
}
