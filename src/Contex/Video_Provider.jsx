import React, { useEffect, useState } from "react";


export const Context=React.createContext();

export const app_provider = ({children})=>{
    const [data,setData]= useState([]);

    fetch('https://api.example.com/protected-route', {  method: 'GET',
        headers: {
          'Authorization': 'Bearer YOUR_JWT_TOKEN' // this is how you set JWT token
        }
    })
    .then(response => response.json())
    .then(data => setData(data.data))
    .catch(error => console.error('Error:', error))

    return(

        <context.Provider>
            {children};
        </context.Provider>
    )
}

// export default context;