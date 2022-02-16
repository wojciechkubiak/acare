import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout/Layout";
import Bowl, { IBowlProps } from "../../components/Bowl/Bowl";
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
  bowls: IBowlProps[];
};

const Bowls: React.FC<Props> = (props) => {
  return (
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
  );
};

export default Bowls;
