import React from 'react'

const Clock01 = () => {
    const date = new Date();
    
    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);    // 뒷부분부터 2개 잘라서 사용
    const seconds = ('0' + date.getSeconds()).slice(-2);

    let session = 'AM';
    if(hours > 12) {      
        session = 'PM';    // String이 붙어버리기 때문에 const에서 var대신 사용하는 let로 변경해줘야 한다.
    }
    hours = ('0' + hours).slice(-2);

    return (
       // <div>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
       <div>{hours}:{minutes}:{seconds} {session}</div>
    );
}

export default Clock01;