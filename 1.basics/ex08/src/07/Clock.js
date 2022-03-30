<<<<<<< HEAD
=======

>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
import React from 'react'

const Clock = () => {
    const date = new Date();
    const hours = date.getHours();
<<<<<<< HEAD
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const html =
        "<span>" + 
        ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2) + 
        " : " +
        ('0' + minutes).slice(-2) +
        " : " +
        ('0' + seconds).slice(-2) +
        " " +
=======
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
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
        (hours > 12 ? 'PM' : 'AM') +
        "</span>";

    return (
<<<<<<< HEAD
        //
        //
        // HTML 태그를 동적으로 생성하여 JSX element 의 특정 속성(dangerouslySetInnerHTML)
        // 으로 렌더링하는 작업은 금지하고 있지만,
        // XSS(Cross-Site Scripting) 보호기능을 끄고 사용할 수 있다.
        //
        <div dangerouslySetInnerHTML={{__html: html}}/>
    )
}

export default Clock
=======
        /**
         *  HTML 태그를 동적으로 생성하여 JSX element의 특정 속성(dangerouslySetInnerHTML)
         *  으로 렌더링하는 작업은 금지하고 있지만, 
         *  XSS(Cross-Site Scripting) 보호기능을 끄고 사용할 수 있다.
         */
       // <div>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
       <div dangerouslySetInnerHTML={{__html: html}}/>      // HTML에선 자가닫기가 불가능한 명령어라 불가인데 여기서는 됨
    );
    // React는 개행을 무시한다. 엔터나 띄어쓰기해도 붙어버림 따라서 표현식({ ' ' })으로 공백을 강제로 삽입해준다.
}

export default Clock;
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
