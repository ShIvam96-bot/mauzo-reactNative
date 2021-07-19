import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLowerbar(props) {
  return (
    <Svg
      width={120}
      height={3}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path stroke="#0080F6" strokeWidth={3} d="M0 1.5h120" />
    </Svg>
  );
}

export default SvgLowerbar;
