import React from "react"
import UserCard from "./UserCard";

function Exercise(props) {
    console.log(props);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
          name="Satu"
          email="MasdwijGibus@gmail.com"
          street="Tanggul Mas 1"
          city="Jakarta"
          />
          <UserCard 
          name="Dua"
          email="AnkaStanta1@gmail.com"
          street="Tanggul Mas 2"
          city="Semarang"/>
          <UserCard 
          name="Tiga"
          email="NoName@gmail.com"
          street="Tanggul Mas 3"
          city="Kudus"/>
        </div>
      </div>
    </>
  );
}

export default Exercise