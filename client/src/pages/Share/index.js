import React from "react";

import CommentHero from "../../components/CommentHero";
import CommentsList from "../../components/CommentList";
import CommentForm from "../../components/CommentForm";

export default function Share() {
  return (
    <main>
      <CommentHero />
      {/* <CommentsList/> */}
      <CommentForm/>
    </main>
  );
}
