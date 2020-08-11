import React from "react";
import { ResponsiveRow, Row } from "../../layout";
import { Heading } from "../../texts";

const CloudNativeWay: React.FC = () => {
  return (
    <>
      <Heading textAlign="center">Do it the cloud-native way</Heading>
      <ResponsiveRow>
        <img
          src="/svg/cloud-native-way.svg"
          alt="chaos bird doing experiments"
        />
        <div>
          <Row>
            <div>1</div>
            <div>2</div>
          </Row>
          <Row>
            <div>3</div>
            <div>4</div>
          </Row>
        </div>
      </ResponsiveRow>
    </>
  );
};

export { CloudNativeWay };
