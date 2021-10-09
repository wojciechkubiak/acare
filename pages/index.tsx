import React from "react";
import Layout from "../components/Layout";
import { useSession, getSession } from "next-auth/client";

type Props = {};

const Blog: React.FC<Props> = (props) => {
  const [session] = useSession();

  if (!session) {
    return (
      <Layout>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </Layout>
    );
  }
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
