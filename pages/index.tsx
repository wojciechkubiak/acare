import React, { useContext } from "react";
import Layout from "../components/Layout";
import AuthContext from "../context/AuthContext";

type Props = {};

const Blog: React.FC<Props> = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {authCtx.isAuth && (
        <div className="page">
          <h1>Public Feed</h1>
        </div>
      )}
    </>
  );
};

export default Blog;
