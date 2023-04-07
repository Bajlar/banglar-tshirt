import React, { useContext } from 'react';
import { MonetContext } from '../Grandpa/Grandpa';

const Sister = () => {
  const [money] = useContext(MonetContext);
  return (
    <div>
      <h2>Sister</h2>
      <p>grandpa money: {money}</p>
    </div>
  );
};

export default Sister;