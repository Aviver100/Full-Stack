import React, { ReactNode } from 'react'

interface mainBoxProps{
    // children: ReactNode,
    color: 'red'
}

function handleClick{
    mainBox.style.backgroundColor = 
}

const Boxes = () => {
    return (
        <>
            {/* <div className='mainBox box' >main</div> */}
            <div className='mainBox box' ></div>
            <div onClick={handleClick} style={{backgroundColor:mainBox.color}} className='redBox box' ></div>
            <div className='greenBox box' />
            <div className='blueBox box' />
            <div className='yellowBox box' />
        </>
    )
}

export default Boxes