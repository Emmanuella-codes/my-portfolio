import { useColorMode } from "@chakra-ui/react";

const ChakraUI = () => {
  const { colorMode } = useColorMode();
  const color = colorMode === "light" ? "black" : "white";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="38px"
      height="38px"
      fill={color}
    >
      <path d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z M17.279,36.159l7.126-10.265	C24.52,25.727,24.401,25.5,24.2,25.5h-9.34c-0.224,0-0.335-0.271-0.175-0.428l14.2-13.974c0.053-0.052,0.114-0.074,0.173-0.074	c0.168,0,0.321,0.18,0.225,0.367l-5.03,9.745c-0.086,0.166,0.035,0.365,0.222,0.365h8.882c0.228,0,0.337,0.28,0.169,0.434	l-15.873,14.55c-0.052,0.048-0.111,0.069-0.167,0.069C17.307,36.554,17.149,36.345,17.279,36.159z" />
    </svg>
  );
};

export default ChakraUI;
