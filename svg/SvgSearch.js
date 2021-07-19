import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSearch(props) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.75 16.25a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM14.375 14.375l4.375 4.375"
        stroke="#0080F6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgSearch;