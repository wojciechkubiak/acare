import React from "react";
import { GetServerSideProps } from "next";
import safeJsonStringify from "safe-json-stringify";
import Layout from "../../components/Layout";
import Quantity, { QuantityProps } from "../../components/Quantity";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await prisma.bowlQuantity.findMany({
    where: {
      quantityId: String(params?.id) || "",
    },
  });
  let quantities = JSON.parse(safeJsonStringify(data));
  return {
    props: { quantities },
  };
};

type Props = {
  quantities: QuantityProps[];
};

const Quantities: React.FC<Props> = (props) => {
  return (
    <div>
      {props.quantities?.map((quantity) => (
        <div key={quantity.id} className="bowl">
          <Quantity quantity={quantity} />
        </div>
      ))}
    </div>
  );
};

export default Quantities;
