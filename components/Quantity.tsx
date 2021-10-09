import React from "react";

export type QuantityProps = {
  id: number;
  quantity: number;
  unit: string;
  createdAt: Date;
};

const Quantity: React.FC<{ quantity: QuantityProps }> = ({ quantity }) => {
  return (
    <div key={quantity.id}>
      <h1>{`${quantity.quantity} ${quantity.unit}`}</h1>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Quantity;
