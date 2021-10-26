import React, { useContext } from "react";
import Layout from "../components/Layout";

type Props = {};

const Blog: React.FC<Props> = () => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
      </div>
      <style jsx>{`
        .bowl {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .bowl:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .bowl + .bowl {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;
