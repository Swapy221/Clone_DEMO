import React, { useContext } from 'react';
import { Context } from '../Contex/Video_Provider';

function Home() {
    const Context1 = useContext(Context);
    console.log(Context1);
    return (
        <div>
        <h1>HELLO</h1> 
        </div>
    );
}

export default Home;
