import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Waypoint } from "react-waypoint";
import "./App.css";
import {
  StoriesQuery,
  StoriesQueryVariables,
  Story,
} from "./generated-types/graphql";
import {
  CardContainer,
  CardContent,
  CardBody,
  CardTitle,
  CardFooter,
  AuthorImage,
  AuthorAndStory,
  AuthorName,
} from "./styled-components";

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
  const { error, data, fetchMore, networkStatus } = useQuery<
    StoriesQuery,
    StoriesQueryVariables
  >(STORIES, {
    variables: { cursor: 0 },
    notifyOnNetworkStatusChange: true,
  });

  if (!data || !data.stories || data.stories?.length === 0) {
    return <p>Nothing to show ...</p>;
  }

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  return (
    <div>
      {data?.stories?.map((story: Story, index: number) => (
        <React.Fragment key={index}>
          <CardContainer>
            <CardContent>
              <CardBody>
                <CardTitle>{story.author.title}</CardTitle>
                <CardFooter>
                  <AuthorAndStory>
                    <AuthorImage />
                    <AuthorName>{story.author.by}</AuthorName>
                  </AuthorAndStory>
                  <div>
                    <a
                      href={`https://www.google.com/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="navigate icon">
                        <i></i>
                      </div>
                    </a>
                  </div>
                </CardFooter>
              </CardBody>
            </CardContent>
          </CardContainer>
          {index === (data?.stories || "").length - 1 && (
            <Waypoint
              onEnter={() =>
                fetchMore({
                  variables: {
                    cursor: data?.stories?.length,
                  },
                  updateQuery: (pv, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                      return pv;
                    }
                    return {
                      __typename: "Query",
                      stories: [
                        ...(pv.stories as []),
                        ...(fetchMoreResult.stories as []),
                      ],
                    };
                  },
                })
              }
            />
          )}
        </React.Fragment>
      ))}
      {networkStatus === 3 && <div>Loading...</div>}
    </div>
  );
}

export default App;
