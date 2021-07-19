import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProduct(props) {
  return (
    <Svg
      width={189}
      height={192}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.7}
        d="M162.003 63.007a75.33 75.33 0 00-17.225-18.372c-10.031-7.502-21.74-12.526-33.926-15.149-35.64-7.704-46.985 34.171-59.17 37.837-12.186 3.665-32.252.308-37.737 23.768-3.451 14.753-3.112 30.714 4.16 44.232 6.677 12.385 18.551 20.389 30.521 26.954 13.454 7.363 27.766 14.854 43.475 14.901 16.112.079 29.516-10.119 43.932-15.911 9.08-3.649 17.398-7.741 24.063-15.197a55.492 55.492 0 002.3-2.75c9.291-11.807 13.675-26.712 12.917-41.686-.674-13.431-5.588-27.118-13.31-38.627z"
        fill="#CCE6FD"
      />
      <Path
        d="M154.139 38.823v-.197a2.808 2.808 0 00-.171-.394l-.171-.197a3.238 3.238 0 00-.268-.296.748.748 0 00-.22-.173l-.219-.197L79.668.276a2.42 2.42 0 00-2.245 0L7.955 37.32l-.22.197a1.22 1.22 0 00-.195.172c-.087.088-.16.188-.22.296l-.146.197c-.06.127-.11.26-.147.395v.197c-.036.22-.036.445 0 .665l4.539 80.027c.033.463.186.909.443 1.294s.609.695 1.02.9l73.422 37.093a2.23 2.23 0 001.025.246c.35.01.695-.075 1-.246h.123l69.2-37.093c.387-.212.705-.531.917-.92a2.34 2.34 0 00.279-1.274l-4.563-80.027a2.13 2.13 0 00-.293-.616zM43.969 23.715l67.932 34.308L82.474 73.82 14.518 39.49 43.97 23.715zM78.57 5.279l67.932 34.333-29.428 15.774-67.956-34.333L78.57 5.28zM11.86 43.531L80.18 78.036l4.22 74.481-68.321-34.505-4.221-74.481zm141.987 74.481L89.38 152.517l-4.222-74.481 29.867-15.996.829 14.492c.041.64.311 1.244.76 1.698a2.597 2.597 0 001.68.767 2.274 2.274 0 001.774-.674 2.319 2.319 0 00.666-1.79l-.976-17.031 29.867-16.02 4.221 74.53z"
        fill="#407BFF"
      />
    </Svg>
  );
}

export default SvgProduct;
