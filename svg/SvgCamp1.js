import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCamp1(props) {
  return (
    <Svg
      width={18}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14 6.167v1.667h3.334V6.167H14zm-1.666 5.508c.8.592 1.841 1.375 2.666 1.992.334-.442.667-.892 1-1.333-.825-.617-1.866-1.4-2.666-2-.334.45-.667.9-1 1.341zM16 1.667c-.333-.442-.666-.892-1-1.334-.825.617-1.866 1.4-2.666 2 .333.442.666.892 1 1.334.8-.6 1.841-1.375 2.666-2zM2.334 4.5c-.917 0-1.667.75-1.667 1.667v1.667c0 .916.75 1.666 1.667 1.666h.833v3.334h1.667V9.5h.833L9.834 12V2L5.667 4.5H2.334zm4.191 1.425l1.642-.983v4.117l-1.642-.984-.4-.241H2.334V6.167h3.791l.4-.242zM11.917 7a3.733 3.733 0 00-1.25-2.792v5.575A3.702 3.702 0 0011.917 7z"
        fill="#666"
      />
    </Svg>
  );
}

export default SvgCamp1;