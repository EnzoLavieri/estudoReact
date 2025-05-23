import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Toyota", "Nissan", "Mitsubish", "Mazda"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Enzo", age: 21 },
    { id: 2, name: "Gabi", age: 25 },
    { id: 3, name: "Diogo", age: 26 },
    { id: 4, name: "Pasquini", age: 24 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 2);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
    console.log(randomNumber);
  };

  return (
    <div>
      <ul>
        {list.map((list, i) => (
          <li key={i}>{list}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random</button>
    </div>
  );
};

export default ListRender;
