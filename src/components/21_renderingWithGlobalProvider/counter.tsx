import React, { useState } from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  const { count } = useSelector((store: any) => store.counter);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};
