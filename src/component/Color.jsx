import React, {useState} from 'react'
import './Color.css';

const Color = () => {

    const [click, setColor] = useState('white')
    // const [clicks, setColor] = const [state, setstate] = useState(initialState)
    

    const ColorRed = () =>{
            setColor('red');

    }
    const ColorBlue = () =>{
        setColor('blue');
        
    }
    const ColorPurple = () =>{
        setColor('purple');
        
    }
    const ColoerPink = () =>{
        setColor('pink');
    }
    return (
        <div className="ChangeColor" style={{backgroundColor : `${click}`, width: '100%', height: '100%'}}>
            <button onClick={ColorRed} style={{backgroundColor: "red"}} className="ChangeRed">Red Color</button>
            <button onClick={ColorBlue} style={{backgroundColor: "blue"}} className="Changeblue">Blue Color</button>
            <button onClick={ColorPurple} style={{backgroundColor: "purple"}} className="Changepurple">Purple Color</button>
            <button onClick={ColoerPink} style={{backgroundColor: "pink"}} className="Changepink">Pink Color</button>
        </div>
    )
}

export default Color;



