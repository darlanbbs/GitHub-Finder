import { userTypes } from "../src/Types/types";
import styled from "./Card.module.css";
import { ViewIcon, ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Card = ({
  login,
  avatar_url,
  location,
  followers,
  following,
  html_url,
  message,
}: userTypes) => {
  return (
    <>
      {login ? (
        <div className={styled.container}>
          <a href={html_url} target="_blank">
            <img className={styled.image} src={avatar_url}></img>
          </a>
          <h3>{login}</h3>
          <div className={styled.followers}>
            <p>
              Followers: <strong>{followers}</strong>
            </p>
            <p>
              Following: <strong>{following}</strong>
            </p>
          </div>
          {location && (
            <p className={styled.align}>
              <StarIcon /> {location}
            </p>
          )}
          <div className={styled.buttons}>
            <button>
              <Link to={`/repos/${login}`} className={styled.align}>
                <ViewIcon /> See more
              </Link>
            </button>
            <button>
              <a
                href={`${html_url}?tab=repositories`}
                target="_blank"
                className={styled.align}
              >
                <ExternalLinkIcon /> Repositories
              </a>
            </button>
          </div>
        </div>
      ) : (
        <p className={styled.error}>{`User ${message} 😞`}</p>
      )}
    </>
  );
};

export default Card;
