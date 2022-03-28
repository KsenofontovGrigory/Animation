import './index.css';
import { useState } from "react";
import wwq from './invoker-tornado-5382-1deb751487b75d8fb06287a108f4227d8fc1e0d789470e6b2f841cd8edefbbe7.jpeg'
import DeleteButton from "./deleteButton";

function App() {
    const [moveFirst, setMoveFirst] = useState('stay1')
    const [moveSecond, setMoveSecond] = useState('stay2')
    const [moveThird, setMoveThird] = useState('stay3')
    const [textFirst, setTextFirst] = useState('text1')
    const [imageFirst, setImageFirst] = useState('image1')
    const [square1, setSquare1] = useState('square-1')
    const [square2, setSquare2] = useState('square-2')
    const [square3, setSquare3] = useState('square-3')
    const [square4, setSquare4] = useState('square-4')
    const [square5, setSquare5] = useState('square-5')
    const [square6, setSquare6] = useState('square-6')
    const [square7, setSquare7] = useState('square-7')
    const [border, setBorder] = useState('button-border-none')
    const [colorBox, setColorBox] = useState('box-animate1')
    const [disabledButton, setDisabledButton] = useState(false)

    const moveDiv1 = () => {
        if (moveFirst === 'stay1' || moveFirst === 'move-left1') {
            setMoveFirst('move-right1')
            setTextFirst('text1right')
            setImageFirst('image1right')
        } else {
            setMoveFirst('move-left1')
            setTextFirst('text1left')
            setImageFirst('image1left')
        }
    }
    const moveDiv2 = () => {moveSecond === 'stay2' || moveSecond === 'move-left2'
        ?
        (setMoveSecond('move-right2'))
        :
        (setMoveSecond('move-left2'))
    }
    const moveDiv3 = () => {moveThird === 'stay3' || moveThird === 'move-left3'
        ?
        (setMoveThird('move-right3'))
        :
        (setMoveThird('move-left3'))
    }
    const addSquare = () => {
        setDisabledButton(true)
        setSquare1('square-visible-1')
        setSquare2('square-visible-2')
        setSquare3('square-visible-3')
        setSquare4('square-visible-4')
        setSquare5('square-visible-5')
        setSquare6('square-visible-6')
        setSquare7('square-visible-7')
        const squareDisplayNone = () => {
            setDisabledButton(false)
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
        let posX = event.screenX -30;
        let posY = event.screenY -130;
        setTransform(`translate(${posX}, ${posY})`)
    }

    const elem = document.querySelector(".box-animate1");

    let positionY = 0;
    let positionX = 0;
    let x = false
    let y = false

    function myAnimation() {
            elem.style.top = positionY + "px";
            elem.style.left = positionX + "px";
            if(positionY === 360) {
                y = true
            }
            if(positionY === 0) {
                y = false
            }
            if(positionX === 700) {
                x = true
            }
            if(positionX === 0) {
                x = false
            }
            if(!x && !y) {
                positionY = positionY + 2;
                positionX = positionX + 2;
                setColorBox('box-animate1')
                requestAnimationFrame(myAnimation);
            }
            if(!x && y) {
                positionY = positionY - 2;
                positionX = positionX + 2;
                setColorBox('box-animate2')
                requestAnimationFrame(myAnimation);
            }
            if(x && y) {
                positionY = positionY - 2;
                positionX = positionX - 2;
                setColorBox('box-animate3')
                requestAnimationFrame(myAnimation);
            }
            if(x && !y) {
                positionY = positionY + 2;
                positionX = positionX - 2;
                setColorBox('box-animate4')
                requestAnimationFrame(myAnimation);
            }
    }
    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    const [inputValue3, setInputValue3] = useState('')
    const [checkListArray, setCheckListArray] = useState([])
    const addToCheckList = () => {
        checkListArray.push({
            inputValue1: inputValue1,
            inputValue2: inputValue2,
            inputValue3: inputValue3,
            id: Date.now()
        })
        console.log(checkListArray)
    }
    const changeInput1 = (e) => {
        setInputValue1(e.target.value)
    }
    const changeInput2 = (e) => {
        setInputValue2(e.target.value)
    }
    const changeInput3 = (e) => {
        setInputValue3(e.target.value)
    }

    return (
      <div>
          <div className="back-move">
              <div>CheckList</div>
              <div>
                  <input onChange={(e) => changeInput1(e)} placeholder="Add to checklist" type='text'/>
                  <input onChange={(e) => changeInput2(e)} placeholder="Add to checklist" type='text'/>
                  <input onChange={(e) => changeInput3(e)} placeholder="Add to checklist" type='text'/>
                  <button onClick={addToCheckList}>Add +</button>
              </div>
              <div>
                  {checkListArray.map((item) => {
                      return (
                          <div className='previewCheckList'>
                              <div>{item.inputValue1}</div>
                              <DeleteButton
                                  checkListArray={checkListArray}
                                  id={item.id}
                                  setCheckListArray={setCheckListArray}
                              />
                          </div>
                      )
                  })}
              </div>
          </div>
          <div className="back-move">
              <div onClick={moveDiv1} className={moveFirst}>
                  <div>wwq</div>
                  <div className='block-info'>
                      <div className={textFirst}>
                          Выпускает стремительный торнадо, который поднимает в воздух врагов на своём пути, а
                          затем обрушивает их на землю. Дальность действия торнадо зависит от уровня Wex. Длительность
                          полёта врагов зависит от уровня Quas. От падения противники получают как базовый урон, так и
                          дополнительный, который зависит от уровня Wex.
                      </div>
                      <img className={imageFirst} alt='tornado' src={wwq} />
                  </div>
              </div>
              <div onClick={moveDiv2} className={moveSecond}>
                  <div>eew</div>
              </div>
              <div onClick={moveDiv3} className={moveThird}>
                  <div>qwe</div>
              </div>
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
          <div className="wrapper">
              <div onClick={() => requestAnimationFrame(myAnimation)} className={colorBox}>BBK</div>
          </div>
          <div>
              <div onMouseMove={(event) => light(event)} className='image'>
                  <svg x="0px" y="0px" width="100%" height="100vh" >
                      <mask id='mask'>
                          <rect width="100%" height="100%" x="0" y="0" fill="white" opacity="0.9"/>
                          <g transform={transform}>
                              <circle cx="30" cy="30" r="40"/>
                          </g>
                      </mask>
                      <rect x="0" y="0" mask="url(#mask)" width="100%" height="100vh"/>
                  </svg>
              </div>
          </div>
      </div>
  );
}

export default App;
