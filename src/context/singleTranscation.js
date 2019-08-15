import React from "react";

const SingleTransaction = React.createContext({});

export const SingleTransactionProvider = SingleTransaction.Provider;
export const SingleTransactionConsumer = SingleTransaction.Consumer;
export default SingleTransaction;
