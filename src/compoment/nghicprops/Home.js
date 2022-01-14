import React from 'react'
import Pros from './Pros';

const Home = () => {
    var cc = 'cl';
    const alo = function(){
        console.log('cc')
    };
    <Pros cc={cc} alo={alo()}/>
    return (
        <div>
           
        </div>
    );
}

export default Home
