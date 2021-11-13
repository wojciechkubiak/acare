import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import Bowl, { BowlProps } from "../../components/Bowl";
// import { useSession, getSession } from "next-auth/client";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const bowls = await prisma.bowl.findMany({
    where: {
      bowlUserId: String(params?.id) || "",
    },
  });
  return {
    props: { bowls },
  };
};

type Props = {
  bowls: BowlProps[];
};

const Bowls: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Bowls</h1>
        <main>
          {props.bowls?.map((bowl) => (
            <div key={bowl.id} className="bowl">
              <Bowl bowl={bowl} />
            </div>
          ))}
        </main>
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

export default Bowls;
