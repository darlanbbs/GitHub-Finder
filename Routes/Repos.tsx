import { RepoProps } from "../src/Types/repo";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "./Repos.module.css";
import { Repo } from "../components/Repo";
import { Center } from "@chakra-ui/react";
import Back from "../components/Back";

const Repos = () => {
  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
  const { username } = useParams();

  useEffect(() => {
    const loadrepos = async function (username: string) {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();
      console.log(data);
      let orderedRepos = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      );

      orderedRepos = orderedRepos.slice(0, 5);

      setRepos(orderedRepos);
    };
    if (username) {
      loadrepos(username);
    }
    console.log(repos);
  }, []);

  return (
    <div>
      <Center>
        <div className={styled.repos}>
          <Back />
          <h2>
            Explore the most rated repositories made by:{" "}
            <strong>{username}</strong>
          </h2>
          {repos && repos.length === 0 && <p>Dont have repositoriees.</p>}
          {repos && repos.length > 0 && (
            <div className={styled.repos_container}>
              {repos.map((repo: RepoProps) => (
                <Repo key={repo.name} {...repo} />
              ))}
            </div>
          )}
        </div>
      </Center>
    </div>
  );
};

export default Repos;
