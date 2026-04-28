import React from 'react'

function Postcard(props) {
   const {title, description} = props;
    const [clicked, setClicked] = React.useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition  flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 ">{title}</h2>
      <p className="text-gray-600 ">
        <span className="font-medium">Description:</span>{description}
      </p>
      <button className={`${clicked ? "bg-special-red2" : "bg-gray-01"} text-white p-2 rounded-md`} onClick={() => setClicked(true)} >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
       </button>
    </div>
  )
}

export default Postcard