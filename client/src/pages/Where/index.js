import React from "react";
import { useQuery } from "@apollo/client";
import {Center} from "@chakra-ui/react";
import { ThreeDots } from "react-loader-spinner";

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
        <Center>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color={"#FF5677"}
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </Center>
      ) : (
        <FacilitiesList facilities={facilities} />
      )}
    </main>
  );
}
