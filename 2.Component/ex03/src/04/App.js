import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    const imgRef = useRef(null);

    const onKeyPressInput = e => {
        if(e.key == 'Enter') {
            console.log(e.target.value);
        }
    }

<<<<<<< HEAD
    const onFocusInput = e => console.log('focused');
=======
    const onFoucsInput = e => console.log('focused');
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
    const onBlurInput = e => console.log('blur');

    const onMouseOverImage = e => console.log('mouseover', `x=${e.clientX}, y=${e.clientY}`);
    const onMouseOutImage = e => console.log('mouseout', `x=${e.clientX}, y=${e.clientY}`);
    const onMouseMoveImage = e => {
        const offsetTop = imgRef.current.offsetTop;
        const offsetLeft = imgRef.current.offsetLeft;
<<<<<<< HEAD
        console.log('mousemove', `x=${e.clientX-offsetLeft}, y=${e.clientY-offsetTop}`);
=======
        console.log('mousemove', `x=${e.clientX - offsetLeft}, y=${e.clientY - offsetTop}`);
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
    }
    const onMouseDownImage = e => console.log('mousedown', `x=${e.clientX}, y=${e.clientY}`);
    const onMouseUpImage = e => console.log('mouseup', `x=${e.clientX}, y=${e.clientY}`);
    const onClickImage = e => console.log('click', `x=${e.clientX}, y=${e.clientY}`);
<<<<<<< HEAD
    const onDoubleClickImage = e => console.log('dblclick', `x=${e.clientX}, y=${e.clientY}`);
=======
    const onDoubleClickImage = e => console.log('dbclick', `x=${e.clientX}, y=${e.clientY}`);
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb

    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
<<<<<<< HEAD
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
=======
                onFocus = {onFoucsInput}
                onBlur = {onBlurInput}
                />
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
                <br/>
                <br/>
            <img
                ref={ imgRef }
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
<<<<<<< HEAD
                src={ logo } 
                onMouseOver={ onMouseOverImage }
                onMouseOut={ onMouseOutImage }
                onMouseMove={ onMouseMoveImage } 
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage } />
=======
                src={ logo }

                onMouseOver={ onMouseOverImage } 
                onMouseOut={ onMouseOutImage }
                onMouseMove={ onMouseMoveImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={onMouseUpImage}
                onClick={onClickImage}
                onDoubleClick={onDoubleClickImage} />
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
        </Fragment>
    );
}