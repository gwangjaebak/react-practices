<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb

const App = function() {
    return (
        <div>
            <h2>App01</h2>
<<<<<<< HEAD
            <p>JSX Tutorials - 특징1: HTML과 차이점</p>
            {/*
               1. 속성은 Camel Case 
            */}
            <input type='text' maxLength='10' />
            {/*
               2. Element는 꼭 닫는다.
               오류) <br>, <hr>, <input type='text'>, <img src=''>
            */}
            <br/>
            <hr/>
            <img src=''/>
            {/*
               3. 속성 이름은 DOM API 기반이다.(HTML Tag 기반 x)
=======
            <p>JSX Tutorials - 특징1: HTML과의 차이점</p>
            {/*
                1. 속성은 Camel Case
            */}
            <input type='text' maxLength='10' />
            {/*
                2. Element는 꼭 닫는다.
                오류나는 경우) <br>, <hr>, <input type='text'>, <img src=''>
            */}
            <br/>
            <hr/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' width='200px'/>
            {/* 
                3. 속성 이름은 DOM API 기반이다.(HTML Tag 기반 x)
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
                    <div id='box' class='box'>...</div>
                    document.getElementById('box').className = 'box';
            */}
            <div id='box' className='box'>
<<<<<<< HEAD
                box 입니다.
=======
                box 입니다.    
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
            </div>
        </div>
    );
}

export default App;