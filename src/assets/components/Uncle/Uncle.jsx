import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MonetContext } from '../Grandpa/Grandpa';

const Uncle = () => {
  const [money, setMoney] = useContext(MonetContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p><small>grandpa money: {money}</small></p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
      <section className="flex">
        <Cousin>Nabil</Cousin>
        <Cousin>Nabila</Cousin>
      </section>
    </div>
  );
};

export default Uncle;