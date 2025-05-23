import { use, useState } from "react";

function ConditionarRender() {
  const [x] = useState(true);

  const [name] = useState("Joao");

  return (
    <div>
      <h1>Isso sera exibido?</h1>
      {x && <p>se x for true, sim</p>}
      {name === "Joao" ? (
        <div>
          <p> o nome é jao</p>
        </div>
      ) : (
        <div>
          <p>nome nao encontrado </p>
        </div>
      )}
    </div>
  );
}

export default ConditionarRender;
