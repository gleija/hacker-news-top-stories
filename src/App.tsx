import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";
import styled from "styled-components";
import QueryResult from "./components/QueryResult";
import { Waypoint } from "react-waypoint";

const STORIES = gql`
  query Stories($cursor: Int!) {
    stories(cursor: $cursor) {
      author {
        by
        id
        title
        url
      }
    }
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const { error, data, fetchMore, networkStatus } = useQuery(STORIES, {
    variables: { cursor: 0 },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <div
      style={{
        backgroundColor: "#fafafa",
      }}
    >
      <div style={{ maxWidth: 400, margin: "auto", padding: 10 }}>
        <QueryResult error={error} data={data}>
          {data?.stories?.map((track: any, index: any) => (
            <React.Fragment key={index}>
              <p>{track.author.by}</p>
              {index === data?.stories?.length - 1 && (
                <Waypoint
                  onEnter={() =>
                    fetchMore({
                      variables: {
                        cursor: data?.stories?.length - 1,
                      },
                      updateQuery: (pv, { fetchMoreResult }) => {
                        if (!fetchMoreResult) {
                          return pv;
                        }
                        return {
                          stories: [...pv.stories, ...fetchMoreResult.stories],
                        };
                      },
                    })
                  }
                />
              )}
            </React.Fragment>
          ))}
          {networkStatus === 3 && (
            <SpinnerContainer>
              <LoadingSpinner
                data-testid="spinner"
                size="large"
                theme="grayscale"
              />
            </SpinnerContainer>
          )}
        </QueryResult>
      </div>
    </div>
  );
}

export default App;

const SpinnerContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});
