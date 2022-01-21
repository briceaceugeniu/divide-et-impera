import React from "react";

type RenderTasksTreeProps = {
  tasks: JSX.Element[];
};

const RenderTasksTree = ({ tasks }: RenderTasksTreeProps) => {
  return <div>{tasks}</div>;
};

export default RenderTasksTree;
