import React from 'react'

const Clock02 = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();    // 뒷부분부터 2개 잘라서 사용
    const seconds = date.getSeconds();

    return (
       // <div>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
       <div>
           {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
           { ' : ' }
           {('0' + minutes).slice(-2)}
           { ' : ' }
           {('0' + seconds).slice(-2)}
           { ' ' }
           {hours > 12 ? 'PM' : 'AM'}
        </div>
    );
    // React는 개행을 무시한다. 엔터나 띄어쓰기해도 붙어버림 따라서 표현식({ ' ' })으로 공백을 강제로 삽입해준다.
}

export default Clock02;