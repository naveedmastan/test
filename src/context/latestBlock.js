import React from "react";

const LatestBlock = React.createContext({});

export const LatestBlockProvider = LatestBlock.Provider;
export const LatestBlockConsumer = LatestBlock.Consumer;
export default LatestBlock;
