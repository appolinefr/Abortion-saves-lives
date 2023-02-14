import { Box, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import { InfoIcon, ExternalLinkIcon } from "@chakra-ui/icons";

export default function InfoLinks() {
  const text = useColorModeValue("gray.600", "gray.400");
  return (
    <Box textAlign="center" py={6} px={6} mb={4}>
      <InfoIcon boxSize={"50px"} color={"#187498"} />
      <Heading size="md" mt={6} mb={2}>
        Please follow the below links for more information
      </Heading>
      <Link
        href="https://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/conditions/abortions"
        isExternal
        color={text}
      >
        Government of South Australia, SA Health <ExternalLinkIcon mx="2px" />
      </Link>
    </Box>
  );
}
