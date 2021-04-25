import React from 'react'

import TopPipeImg from '../images/pipe-top.png'
import BottomPipeImg from '../images/pipe-bottom.png'

const Pipe = ({x, topHeight}) => {

    const topPipeStyle = {
        position: 'absolute',
        top: 0,
        left: 150,
        width: 52,
        height: 100,
        background: `url(${TopPipeImg})`,
        backgroundPosition: 'bottom',
        transition: 'left 300ms'
    }

    const bottomPipeStyle = {
        position: 'absolute',
        top: 100 + 100,
        left: 150,
        width: 52,
        height: 512 - 100 - 100 - 100,
        background: `url(${BottomPipeImg})`,
        transition: 'left 300ms'
    }

    return (
        <div style = {{position: 'relative'}}>
            <div style={topPipeStyle}/>
            <div style={bottomPipeStyle}/>
        </div>
    )
}

export default Pipe