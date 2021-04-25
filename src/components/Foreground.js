import React from 'react'

import FgImage from '../images/fg.png'

const Foreground = () => {

    const foregroundStyle = {
        position: 'absolute',
        bottom: 0,
        width: 288,
        height: 108,
        background: `url(${FgImage})`
    }

    return (
        <div style={foregroundStyle}/>
    )
}

export default Foreground