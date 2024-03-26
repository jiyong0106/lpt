import React from "react";
import classNames from "classnames";
import st from "./test1.module.scss";

interface Props {
  tag: string;
  color: 'orange' | 'pink' | 'blue' | 'green';
}

const cn = classNames.bind(st);

const Test1 = ({ tag,color }:Props) => {
  
  return (
    <div className={cn(tag,color)}>
      <span>{tag}</span>
    </div>
  );
};

export default Test1;
