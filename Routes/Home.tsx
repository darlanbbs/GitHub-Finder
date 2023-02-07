//types
import { userTypes } from "../src/Types/types";

//imports

import { useState } from "react";

//pages
import Search from "./../components/Search";
import Card from "../components/Card";

//styles
import { Box, Flex } from "@chakra-ui/react";

const Home = () => {
  const [user, setUser] = useState<userTypes | null>(null);

  const getUser = async (userName: any) => {
    const urlApi = `https://api.github.com/users/${userName}`;

    const res = await fetch(urlApi);

    const data = await res.json();

    const {
      login,
      avatar_url,
      location,
      following,
      followers,
      html_url,
      message,
    } = data;

    const userType: userTypes = {
      login,
      avatar_url,
      location,
      following,
      followers,
      html_url,
      message,
    };
    setUser(userType);
  };
  return (
    <Box>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="15"
      >
        <Search getUser={getUser} />
        <Card {...user} />
      </Flex>
    </Box>
  );
};

export default Home;
