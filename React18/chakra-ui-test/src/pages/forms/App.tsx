import { Box, Button, useColorMode, Heading, Center, Link } from "@chakra-ui/react";
import { NavBar } from "../../components/navbar";
import { Analytics } from "@vercel/analytics/react";
import Buttons from "./components/buttons";

// Boxes are the most abstract, they render divs
function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box minW={"620px"}>
        <Box marginTop={5}>
          <Center>
            <Heading>
              <Link href="/">Chakra UI Forms</Link>
            </Heading>
          </Center>

          <Button top={"-40px"} ml={5} onClick={toggleColorMode}>
            Toggle: {colorMode === "light" ? "dark" : "light"}
          </Button>
        </Box>

        <NavBar colorMode={colorMode} selected="Forms" />

        <Buttons colorMode={colorMode} />
      </Box>
      <Analytics />
    </>
  );
}

export default App;
