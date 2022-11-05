import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  HStack,
  VStack,
  Tab,
  TabPanel,
  Tabs,
  TabList,
  Icon,
  TabPanels,
} from "@chakra-ui/react";

import { MdOutlineQuestionAnswer } from "react-icons/md";
const medicalFeatures = [
  {
    id: 1,
    title: "In what situation?",
    text: "It can be done as soon as a pregnancy can be seen in an ultrasound. In South Australia, a medical abortion is performed up to 9 weeks of pregnancy.",
  },
  {
    id: 2,
    title: "How does it work?",
    text: "The abortion will occur by using two medications, mifepristone and misoprostol to cause the pregnancy to miscarry. The abortion usually happens at home and support is required",
  },
  {
    id: 3,
    title: "Is it safe?",
    text: "Yes, medical abortion has been safely used by millions of pregnant people world-wide with approximately 95 to 98% experiencing a successful abortion. Severe complications are rare",
  },
  {
    id: 4,
    title: "Is it painful?",
    text: "Pain can vary from mild period type pain to severe cramping and pain. May be painful for 2 to 3 hours or more after taking the medication. For most people the pain can be managed by pain relieving medication.",
  },
  {
    id: 5,
    title: "Do I need to go to a hospital?",
    text: "Yes, you can expect to be at a health facility for about two hours for an initial visit where you will be assessed and then take the first medication. The second medication is administered at home 24-48 hours later.",
  },
  {
    id: 6,
    title: "Will there be a lot of bleeding?",
    text: "After taking the second medication tablet at home, you may experience bleeding one to four hours later heavier than a period. After two to six hours the bleeding usually settles to the level of your normal period",
  },
];

const surgicalFeatures = [
  {
    id: 1,
    title: "In what situation?",
    text: "For a pregnancy of more than 7 weeks. In South Australia, a surgical abortion is performed for up to 22 weeks and 6 days.",
  },
  {
    id: 2,
    title: "How does it work?",
    text: "Involves inserting a tube into the uterus to remove the contents. Abortion process lasts one to two days. The operation procedure is completed within 10–15 minutes.",
  },

  {
    id: 3,
    title: "Is it safe?",
    text: "Yes, surgical abortion is a common type of surgery in Australia. It is a very safe procedure when performed by a trained medical professional. However, all surgery carries some risk.",
  },
  {
    id: 4,
    title: "Is it painful?",
    text: " Pain medication, light sedation and anaesthesia are required for the procedure and you may experience mild pain when the uterus contracts. Cramping and pain may occur after the operation and can continue for a few days, similar to a normal period pain.",
  },
  {
    id: 5,
    title: "Do I need to go to a hospital?",
    text: "Yes, you can expect to be having two clinic visits and be at the health facility for up to five hours on the day of operation procedure.",
  },
  {
    id: 6,
    title: "Will there be a lot of bleeding?",
    text: "Bleeding can vary from little or no bleeding to moderate bleeding immediately after the procedure. Bleeding can continue for two to three weeks.",
  },
];

export default function GridListWithHeading() {
  return (
    <Box p={4} mt={{ sm: 6, md: 8, lg: 10 }}>
      <Stack
        Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        mb={{ sm: 12, md: 16, lg: 16 }}
      >
        <Heading
          fontSize={"3xl"}
          lineHeight={"130%"}
        >
          Abortion key information
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          In South Australia there are two methods available, medication
          abortion and surgical abortion. Both methods are safe and effective.
        </Text>
      </Stack>
      <Tabs isFitted variant="soft-rounded" colorScheme="gray">
        <TabList mb="1em">
          <Tab fontSize={"xl"} color={"#FF5677"}>
            Medical Abortion
          </Tab>
          <Tab fontSize={"xl"} color={"#FF5677"} mt={2}>
            Surgical Abortion
          </Tab>
        </TabList>
        <TabPanels mb={6}>
          <TabPanel>
            <Container maxW={"6xl"} mt={10}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {medicalFeatures.map((medicalFeature) => (
                  <HStack key={medicalFeature.id} align={"top"}>
                    <Box px={2}>
                      <Icon as={MdOutlineQuestionAnswer} color={"#FF5677"} />
                    </Box>
                    <VStack align={"start"}>
                      <Text fontWeight={600}>{medicalFeature.title}</Text>
                      <Text color={"gray.600"}>{medicalFeature.text}</Text>
                    </VStack>
                  </HStack>
                ))}
              </SimpleGrid>
            </Container>
          </TabPanel>
          <TabPanel>
            <Container maxW={"6xl"} mt={10}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {surgicalFeatures.map((surgicalFeature) => (
                  <HStack key={surgicalFeature.id} align={"top"}>
                    <Box px={2}>
                      <Icon as={MdOutlineQuestionAnswer} color={"#FF5677"} />
                    </Box>
                    <VStack align={"start"}>
                      <Text fontWeight={600}>{surgicalFeature.title}</Text>
                      <Text color={"gray.600"}>{surgicalFeature.text}</Text>
                    </VStack>
                  </HStack>
                ))}
              </SimpleGrid>
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
