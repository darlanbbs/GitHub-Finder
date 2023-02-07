//styles
import { Flex, Button, ButtonGroup, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { useState } from "react";

type Props = {
  getUser: (username: string | number) => Promise<void>;
};

const Search = ({ getUser }: Props) => {
  const [value, setValue] = useState<string | number>("");
  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <form
        onClick={(e) => {
          setValue("");
          e.preventDefault();
        }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap="25"
        >
          <h2>Search an account</h2>
          <Flex>
            <input value={value} type="text" onChange={handleInput} />
            <ButtonGroup>
              <button
                onClick={() => {
                  getUser(value);
                }}
              >
                <SearchIcon />
              </button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </form>
    </div>
  );
};

export default Search;
