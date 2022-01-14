import React from 'react'
import Procon from './Procon'

const Pros = ({cc,alo}) => {
    console.log({cc})
    return (
        <div>
            tong : {alo}
            hello p1 : {cc}
            <Procon cc2={cc}/>
        </div>
    )
}

export default Pros
