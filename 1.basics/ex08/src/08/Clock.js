
import React from 'react'

const Clock = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();    // 뒷부분부터 2개 잘라서 사용
    const seconds = date.getSeconds();

    const html =
        "<span>" +
        ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2) +
        ' : ' +
        ('0' + minutes).slice(-2) +
        ' : ' +
        ('0' + seconds).slice(-2) +
        ' ' +
        (hours > 12 ? 'PM' : 'AM') +
        "</span>";

    return (
        /**
         *  comment01: 컴포넌트 내부이기 때문에 자바스크립트 구문이 가능하다.
         */
        <div
            /**
             *  comment02: 여기서도 다중행 주석이 가능하지만 비추! 
             */
            className='clock'
            title='시계'>
           {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
           { ' : ' }

            {/**
             *  comment03: 표현식이 실행되는 블록 내부에 다중행 주석을 넣는 이 주석을 추천한다.
             */}

           {('0' + minutes).slice(-2)}
           { ' : ' }

            {/**
             *  JSX는 HTML이 아니다!! 따라서 <!-- --> 주석은 사용할 수 없다.
             */}

           {('0' + seconds).slice(-2)}
           { ' ' }

           // comment04: JSX 안에서 이 주석을 사용하면 그대로 출력된다.
           {hours > 12 ? 'PM' : 'AM'}
        </div>
    );
    // React는 개행을 무시한다. 엔터나 띄어쓰기해도 붙어버림 따라서 표현식({ ' ' })으로 공백을 강제로 삽입해준다.
}

export default Clock;