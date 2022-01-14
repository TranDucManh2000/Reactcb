import React, { memo } from 'react'

const Conten = ({handclick}) => {
    console.log('bi render')
    return (
        <div>
            <button onClick={handclick}>Clik</button>
        </div>
    )
}

export default memo(Conten) 
