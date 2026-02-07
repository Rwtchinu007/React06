import React from "react";
import { useState } from "react";
const App = () => {
  const [name, setName] = useState("");
  const [allUser, setAllUser] = useState([]);
  function submitHandler(e) {
    e.preventDefault();
    console.log(name);

  }
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-500">
      <form
        onSubmit={(e) => {
          submitHandler(e);
          let oldUser = [...allUser];
          oldUser.push(name);
          setAllUser(oldUser);
          setName("");
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          className="px-5 py-3 bg-gray-600 rounded-2xl"
          placeholder="Enter your meow"
          value={name}
          required
          onChange={(e) => {
            // console.log(e.target.value);
            setName(e.target.value);
          }}
        />
        <button className="text-md rounded-xl">Submit</button>
      </form>
      {
        allUser.map((user, index) => {
          return <h1 key={index}>{user}</h1>
        })
      }
    </div>
  );
};

export default App;
