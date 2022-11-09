import React from "react";
import { useQuery } from "@apollo/client";
import {Center} from "@chakra-ui/react";

import FacilityPageHero from "../../components/FacilitiesPageComponents/FacilitiesPageHero";
import FacilitiesList from "../../components/FacilitiesPageComponents/FacilitiesList";

import { QUERY_FACILITIES} from "../../utils/queries";

export default function Where() {
    const { loading, data } = useQuery(QUERY_FACILITIES);
    const facilities = data?.facilities || [];

  return (
    <main>
      <FacilityPageHero />
      {loading ? (
        <Center fontSize={"2xl"}>Loading...</Center>
      ) : (
        <FacilitiesList facilities={facilities} />
      )}
    </main>
  );
}
