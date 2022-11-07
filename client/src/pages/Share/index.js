import React from "react";
import { useQuery } from "@apollo/client";

import { Center } from "@chakra-ui/react";

import CommentHero from "../../components/CommentHero";
import CommentsList from "../../components/CommentList";
import CommentForm from "../../components/CommentForm";

import { QUERY_COMMENTS } from "../../utils/queries";

export default function Share() {
  const { loading, data } = useQuery(QUERY_COMMENTS);
  const comments = data?.comments || [];

  return (
    <main>
      <CommentHero />
      <CommentForm />
      {loading ? (
        <Center fontSize={"2xl"}>Loading...</Center>
      ) : (
        <CommentsList comments={comments} />
      )}
    </main>
  );
}
