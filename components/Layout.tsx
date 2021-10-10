import React, { ReactNode, useContext } from "react";
import LoadingContext from "../context/LoadingContext";
import Loading from "./Loading";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const loadingCtx = useContext(LoadingContext);

  return (
    <div>
      {/* <Header /> */}
      <div className="layout">{props.children}</div>
      {loadingCtx.isLoading && <Loading />}
      <style jsx global>{`
        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          padding: 0;
          font-size: 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          background: rgba(0, 0, 0, 0.05);
        }

        input,
        textarea {
          font-size: 16px;
        }

        button {
          cursor: pointer;
        }
      `}</style>
      <style jsx>{`
        .layout {
          padding: 0 2rem;
        }
      `}</style>
    </div>
  );
};

export default Layout;
