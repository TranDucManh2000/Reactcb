import React from 'react'
import Usereff from './Usereff'
import { memo } from 'react'


const Memoreact = () => {
    // memo chống render
    // va memo chi render khi du lieu trong no dc nhac toi thay doi
    console.log('render')
    return (
        <div>
        </div>
    )
}

export default memo(Memoreact)
