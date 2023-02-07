import { RepoProps } from "../src/Types/repo";

import styled from "./Repo.module.css";

import { StarIcon, TriangleUpIcon } from "@chakra-ui/icons";

export const Repo = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) => {
  return (
    <div className={styled.repo}>
      <h3>{name}</h3>
      <p>Language most used:{language}</p>
      <div className={styled.stats}>
        <div>
          <span>
            <StarIcon /> {stargazers_count}
          </span>
        </div>
        <div>
          <span>
            <TriangleUpIcon /> {forks_count}
          </span>
        </div>
      </div>
      <a href={html_url} target="_blank" className={styled.repo_btn}>
        <span>Code</span>
      </a>
    </div>
  );
};
