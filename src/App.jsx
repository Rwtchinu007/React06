import React from "react";

const App = () => {
  function submitHandler(e){
    e.preventDefault();
    console.log("Form submitted");
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-500">
      <form onSubmit={(e) =>{submitHandler(e)}} className="flex flex-col gap-2 ">
        <input
          type="text"
          className="px-5 py-3 bg-gray-600 rounded-2xl"
          placeholder="Enter your meow"
        />
        <button className="text-md rounded-xl">Submit</button>
      </form>
    </div>
  );
};

export default App;
