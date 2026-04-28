import React from "react"
import Postcard from "./Postcard";

function Exercise(props) {
    console.log(props);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-5 lg:grid-cols-5 gap-6 max-w-5x3 mx-auto">
          
        </div>
      </div>
    </>
  );
}

export default Exercise