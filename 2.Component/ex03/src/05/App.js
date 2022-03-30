import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {

    const outterRef = useRef(null);
    const innerRef = useRef(null);

    return (
        <div
            ref={outterRef}
            className={'App'}
<<<<<<< HEAD
            onScroll={e => console.log(outterRef.current.clientHeight, ':', outterRef.current.scrollTop, ':', innerRef.current.clientHeight) }>
            <div
                ref={innerRef}>
                <ul>
                {
                    Array.from({length: 100}, (_, i) => i+1).map(e => 
                        <li key={e}>
                            {`아이템 ${e} 입니다.`}
                        </li>)
                }
=======
            onScroll={function(e){
              console.log(outterRef.current.clientHeight, ":", outterRef.current.scrollTop, ":", innerRef.current.clientHeight)
            }}>
            <div
                ref={ innerRef }>
                <ul>
                  { 
                    Array.from({length: 100}, (_, i) => i+1).map(e => 
                      <li key={e}>
                        { `아이템 ${e} 입니다.` }
                      </li>)
                  }
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
                </ul>
            </div>
        </div>
    );
}