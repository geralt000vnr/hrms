import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingEffect({ no = 2, name }) {
  switch (name) {
    case "tasksTable":
      return LongBlocks(no);
    case "projectTable":
      return LongAndThinBlocks(no);

    default:
      return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton count={no} />;
        </SkeletonTheme>
      );
  }
}

const LongBlocks = (no) => {
  return (
    <div>
      <SkeletonTheme
        baseColor="#202020"
        highlightColor="#444"
        borderRadius={12}
      >
        <p>
          <Skeleton count={no} height={200} style={{ marginBottom: "15px" }} />
        </p>
      </SkeletonTheme>
    </div>
  );
};

const LongAndThinBlocks = (no) => {
  return (
    <div>
      <SkeletonTheme baseColor="#202020" highlightColor="#444" borderRadius={1}>
        <p>
          <Skeleton count={no} height={50} style={{ marginBottom: "5px" }} />
        </p>
      </SkeletonTheme>
    </div>
  );
};
