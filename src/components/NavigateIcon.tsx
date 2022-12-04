import React from "react";

interface Props {
  url: string;
}

export const NavigateIcon: React.FC<Props> = ({ url }) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="navigate icon">
          <i></i>
        </div>
      </a>
    </div>
  );
};
