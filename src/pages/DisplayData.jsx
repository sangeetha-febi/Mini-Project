import React from 'react'

function DisplayData(data) {
  return (
   <div>
      <h2>Newly Added Books Details </h2>
    <p>ID: {data.id}</p>
     <p>Title: {data.title}</p>
     <p>Author: {data.authorname}</p>
      <p>Price: {data.title}</p>

    </div>
  );
}

export default DisplayData
