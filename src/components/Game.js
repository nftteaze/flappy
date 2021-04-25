import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fly} from '../redux/actions/bird'

import Bird from './Bird';
import Pipe from './Pipe';
import Foreground from './Foreground';

import BgImg from '../images/bg.png';

const Game = ({fly}) => {

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.keyCode === 32) {
                fly();
            }
        }
        document.addEventListener('keypress', handleKeyPress);
    },)

    const gameStyle = {
        position: 'relative',
        width: 288,
        height: 512,
        background: `url(${BgImg})`,
        overflow: 'hidden'
    }

    return (
        <div style = {gameStyle}>
            <Bird />
            <Foreground/>
            <Pipe/>
        </div>
    )
}

const mapStateToProps = () => ({
    
})

const mapDispatchToProps = {fly}

export default connect(mapStateToProps, mapDispatchToProps)(Game);