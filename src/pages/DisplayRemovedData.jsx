import React from 'react'

function DisplayRemovedData(data) {
  return (
   <div>
      <h2>Book has been Removed from the library</h2>
    <p>ID: {data.id}</p>
     <p>Title: {data.title}</p>
     <p>Author: {data.authorname}</p>
      <p>Price: {data.title}</p>

    </div>
  );
}

export default DisplayRemovedData
