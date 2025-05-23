const Challenge = () => {
  let x = 12;
  let y = 20;
  let soma = x + y;
  return (
    <div>
      <h1>X: {x}</h1>
      <h1>+</h1>
      <h1>Y: {y}</h1>
      <button onClick={() => console.log(soma)}>Resultado</button>
      <h2>
        A soma de {x} e {y} é {soma}
      </h2>
    </div>
  );
};

export default Challenge;
