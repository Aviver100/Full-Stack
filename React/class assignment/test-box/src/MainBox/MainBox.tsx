import React, { ReactNode } from 'react'

interface MainBoxProps{
    color:string;
}

const MainBox = ({color}:MainBoxProps) => {
    return (
        <>
            <div className='mainBox' style={{backgroundColor:color}}></div>
        </>
    )
}

export default MainBox