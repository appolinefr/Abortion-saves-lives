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
} from "@chakra-ui/react";

import { FiInfo, FiMap, FiShare2 } from "react-icons/fi";

const styles = {
  mainColor: "#FF5677",
  secGreenColor: "#A7D2CB",
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
    <Box as={Container} maxW="7xl" mt={14} p={4}>
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
      <Divider mt={12} mb={12} />
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
            "Abortion is a safe and legal way to end a pregnancy. This will help you understand your abortion optionsand navigate the best care pathway."
          }
          button={
            <Button
              href={`/info`}
              my={6}
              as={"a"}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={styles.mainColor}
              _hover={{
                bg: styles.secGreenColor,
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
            "How do I find an abortion clinic or hospital? This tool will help you find the relevant and nearest health service in South Australia."
          }
          button={
            <Button
              my={6}
              as={"a"}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={styles.mainColor}
              href={`/facilities`}
              _hover={{
                bg: styles.secGreenColor,
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
          text={"Short text describing one of you features/service"}
          button={
            <Button
              my={6}
              as={"a"}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={styles.mainColor}
              href={"/share"}
              _hover={{
                bg: styles.secGreenColor,
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
