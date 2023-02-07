import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Back = () => {
  return (
    <div className="containerButton">
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
};

export default Back;
