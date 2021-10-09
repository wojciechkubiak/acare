import React from "react";
import Router from "next/router";

export type BowlProps = {
  id: number;
  owner: string;
  bowlId: number;
  bowlName: string;
};

const Post: React.FC<{ bowl: BowlProps }> = ({ bowl }) => {
  return (
    <div>
      <h3
        onClick={() =>
          Router.push("/quantities/[id]", `/quantities/${bowl.bowlId}`)
        }
      >
        {bowl.bowlName}
      </h3>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
