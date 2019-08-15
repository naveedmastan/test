import React from "react";
import {
  SingleTransactionProvider,
  SingleTransactionConsumer
} from "../context/singleTranscation";
import { singleTxn } from "../constants/singleTxn";
import { Display } from "../helpers/Display";
export default function Transaction() {
  return (
    <SingleTransactionProvider value={singleTxn}>
      <h2>Single Transaction</h2>
      <SingleConsumer />
    </SingleTransactionProvider>
  );
}

const SingleConsumer = () => (
  <SingleTransactionConsumer>
    {context => <Display value={context} />}
  </SingleTransactionConsumer>
);
