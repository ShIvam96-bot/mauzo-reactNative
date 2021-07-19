import Svg, { Path } from "react-native-svg";
import React from "react"

function SvgVector(props) {
  return (
    <Svg
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.333 7.833h10.142l-4.658 4.659L7 13.665 13.667 7 7 .333 5.825 1.508l4.65 4.659H.333v1.666z"
        fill="#0080F6"
      />
    </Svg>
  );
}

export default SvgVector;
