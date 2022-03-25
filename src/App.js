import './index.css';
import { useState } from "react";

function App() {
    const [move, setMove] = useState('stay')
    const [square1, setSquare1] = useState('square-1')
    const [square2, setSquare2] = useState('square-2')
    const [square3, setSquare3] = useState('square-3')
    const [square4, setSquare4] = useState('square-3')
    const [square5, setSquare5] = useState('square-3')
    const [square6, setSquare6] = useState('square-3')
    const [square7, setSquare7] = useState('square-3')
    const [border, setBorder] = useState('button-border-none')
    const [disabledButton, setDisabldeButton] = useState(false)
    const moveDiv = () => {move === 'stay' || move === 'move-left'
        ?
        (setMove('move-right'))
        :
        (setMove('move-left'))
    }
    const addSquare = () => {
        setDisabldeButton(true)
        setSquare1('square-visible-1')
        setSquare2('square-visible-2')
        setSquare3('square-visible-3')
        setSquare4('square-visible-4')
        setSquare5('square-visible-5')
        setSquare6('square-visible-6')
        setSquare7('square-visible-7')
        const squareDisplayNone = () => {
            setDisabldeButton(false)
            setSquare1('square-1')
            setSquare2('square-2')
            setSquare3('square-3')
            setSquare4('square-4')
            setSquare5('square-5')
            setSquare6('square-6')
            setSquare7('square-7')
        }
        setTimeout(squareDisplayNone, 1000)
    }
    const showBorder = () => {
        setBorder('button-border')
        const borderNone = () => {
            setBorder('button-border-none')
        }
        setTimeout(borderNone, 200)
    }
    const squareOver1 = () => {
        setSquare1('square-visible-1')
        const squareOut1 = () => {
            setSquare1('square-1')
        }
        setTimeout(squareOut1, 1000)
    }
    const squareOver2 = () => {
        setSquare2('square-visible-2')
        const squareOut2 = () => {
            setSquare2('square-2')
        }
        setTimeout(squareOut2, 1000)
    }
    const squareOver3 = () => {
        setSquare3('square-visible-3')
        const squareOut3 = () => {
            setSquare3('square-3')
        }
        setTimeout(squareOut3, 1000)
    }
    const squareOver4 = () => {
        setSquare4('square-visible-4')
        const squareOut4 = () => {
            setSquare4('square-4')
        }
        setTimeout(squareOut4, 1000)
    }
    const squareOver5 = () => {
        setSquare5('square-visible-5')
        const squareOut5 = () => {
            setSquare5('square-5')
        }
        setTimeout(squareOut5, 1000)
    }
    const squareOver6 = () => {
        setSquare6('square-visible-6')
        const squareOut6 = () => {
            setSquare6('square-6')
        }
        setTimeout(squareOut6, 1000)
    }
    const squareOver7 = () => {
        setSquare7('square-visible-7')
        const squareOut7 = () => {
            setSquare7('square-7')
        }
        setTimeout(squareOut7, 1000)
    }


    const [transform, setTransform] = useState("translate(0, 0)")
    const light = (event) => {
        console.log(1)
        let posX = event.screenX -30;
        let posY = event.screenY -435;
        setTransform(`translate(${posX}, ${posY})`)
    }

    return (
      <div>
          <div onClick={moveDiv} className={move}>
              wwq
              <div className='meteor'>eew</div>
          </div>
          <div className='block-button'>
              <button disabled={disabledButton} onClick={addSquare} className='button'>
                  <div onMouseOver={squareOver1} className={square1}>S</div>
                  <div onMouseOver={squareOver2} className={square2}>Q</div>
                  <div onMouseOver={squareOver3} className={square3}>U</div>
                  <div onMouseOver={squareOver4} className={square4}>A</div>
                  <div onMouseOver={squareOver5} className={square5}>R</div>
                  <div onMouseOver={squareOver6} className={square6}>E</div>
                  <div onMouseOver={squareOver7} className={square7}>S</div>
                  Show squares
              </button>
          </div>
          <div className='block-button'>
              <div className={border}></div>
              <button onClick={showBorder} className='button'>
                  Show border
              </button>
          </div>
          <div>
              <div onMouseMove={(event) => light(event)} className='image'>
                  <svg x="0px" y="0px" width="100%" height="500px" >
                      <mask id='mask'>
                          <rect width="100%" height="100%" x="0" y="0" fill="white" opacity="1"/>
                          <g transform={transform}>
                              <circle cx="30" cy="30" r="40"/>
                          </g>
                      </mask>
                      <rect x="0" y="0" mask="url(#mask)" width="100%" height="500"/>
                  </svg>
              </div>
          </div>
      </div>
  );
}

export default App;
