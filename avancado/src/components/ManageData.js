import { useState } from "react";

const ManageData = () => {
  var data = 10;
  var [number, setNumber] = useState(10);

  return (
    <div>
      <div>
        <p>Valor: {data}</p>
        <button onClick={() => (data = 15)}>Mudar var</button>
      </div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(25)}>Mudar var</button>
    </div>
  );
};

export default ManageData;
