import { Outlet } from "react-router-dom";
import { Center, Flex } from "@chakra-ui/react";
import Back from "../components/Back";
function App() {
  return (
    <Center>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="15"
      >
        <h1>Github Finder</h1>
        <Outlet />
      </Flex>
    </Center>
  );
}

export default App;
