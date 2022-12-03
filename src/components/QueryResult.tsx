import React from "react";

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * error or its children when data is ready
 */
interface QueryResultProps {
  error: any;
  data: any;
  children: any;
}

const QueryResult: React.FC<QueryResultProps> = ({ error, data, children }) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;
