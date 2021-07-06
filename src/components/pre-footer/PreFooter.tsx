import React from "react";
import { PreFooterBottom } from "./PreFooterBottom";
import { PreFooterMid } from "./PreFooterMid";
import { PreFooterTop } from "./PreFooterTop";

const PreFooter: React.FC = () => {
  return (
    <>
      <PreFooterTop />
      <PreFooterMid />
      <PreFooterBottom />
    </>
  );
};
export { PreFooter };
