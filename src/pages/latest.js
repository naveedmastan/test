import React from "react";

import {
  LatestBlockProvider,
  LatestBlockConsumer
} from "../context/latestBlock";
import { latest } from "../constants/latest";
import { Display } from "../helpers/Display";
export default function Latest() {
  return (
    <LatestBlockProvider value={latest}>
      <h2>Latest Block</h2>
      <SingleConsumer />
    </LatestBlockProvider>
  );
}

const SingleConsumer = () => (
  <LatestBlockConsumer>
    {context => <Display value={context} />}
  </LatestBlockConsumer>
);
