import React, { useContext } from "react";
import Layout from "../components/Layout";
import AuthContext from "../context/AuthContext";

type Props = {};

const Blog: React.FC<Props> = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      {authCtx.isAuth && (
        <div className="page">
          <h1>Public Feed</h1>
        </div>
      )}
    </Layout>
  );
};

export default Blog;
