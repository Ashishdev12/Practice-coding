import React, { useState } from "react";

const TodoList = () => {
  const [name, setName] = useState("");
  const [master, setMaster] = useState([]);
  const [final, setFinal] = useState([]);

  const handleAdd = () => {
    if (master.indexOf(name) >= 0) {
      return;
    }
    setMaster((prev) => {
      return [...prev, name];
    });
    setName("");
  };

  const handleClick = (value) => {
    setFinal((prev) => {
      return [...prev, value];
    });
  };

  const handleDelete = (value) => {
    const master = [...final];
    const mPlayer = master.filter((item) => item !== value);
    setFinal(mPlayer);
  };
  
  return (
    <div>
      <input
        type="text" name="master"
        placeholder="Enter Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      {/* master-player */}
      <h1>Master Player</h1>
      {master.length > 0 ? (
        <ul>
          {master.map((item, index) => {
            return (
              <li key={index} value={index}>
                <span>{item}</span>
                <button onClick={() => handleClick(item)}>Add</button>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </li>
            );
          })}
        </ul>
      ) : (
        "No Players Added"
      )}

      {/* Final-player */}
      <h1>Final Players</h1>
      {final.length > 0 ? (
        <ul>
          {final.map((item, index) => {
            return (
              <li key={index} value={index}>
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        "No Players"
      )}
    </div>
  );
};

export default TodoList;
