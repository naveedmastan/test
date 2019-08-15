import React from "react";
import {
  SingleBlockProvider,
  SingleBlockConsumer
} from "../context/singleBlock";
import { singleBlock } from "../constants/singleBlock";
import { Display } from "../helpers/Display";
export default function Block() {
  return (
    <SingleBlockProvider value={singleBlock}>
      <h2>Single Block</h2>
      <SingleConsumer />
    </SingleBlockProvider>
  );
}

const SingleConsumer = () => (
  <SingleBlockConsumer>
    {context => <Display value={context} />}
  </SingleBlockConsumer>
);
