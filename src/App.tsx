import React, { useState } from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
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
    <div>
      <div>
        <QueryResult error={error} data={data}>
          {data?.stories?.map((story: any, index: any) => (
            <React.Fragment key={index}>
              <p>{story.author.title}</p>
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
                          __typename: "Story",
                          stories: [...pv.stories, ...fetchMoreResult.stories],
                        };
                      },
                    })
                  }
                />
              )}
            </React.Fragment>
          ))}
          {networkStatus === 3 && <div>Loading...</div>}
        </QueryResult>
      </div>
    </div>
  );
}

export default App;
