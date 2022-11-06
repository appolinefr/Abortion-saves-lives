import React from "react";
import { useQuery } from "@apollo/client";

import FacilityPageHero from "../../components/FacilitiesPageHero";
import FacilitiesList from "../../components/FacilitiesList";

import { QUERY_FACILITIES} from "../../utils/queries";

export default function Where() {
    const { loading, data } = useQuery(QUERY_FACILITIES);
    const facilities = data?.facilities || [];

  return (
    <main>
      <FacilityPageHero />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <FacilitiesList facilities={facilities} />
      )}
    </main>
  );
}
