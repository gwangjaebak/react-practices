import React from 'react'

const Clock01 = () => {
    const date = new Date();
<<<<<<< HEAD

    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    let session = 'AM';
    if(hours > 12) {
        session = 'PM';
=======
    
    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);    // 뒷부분부터 2개 잘라서 사용
    const seconds = ('0' + date.getSeconds()).slice(-2);

    let session = 'AM';
    if(hours > 12) {      
        session = 'PM';    // String이 붙어버리기 때문에 const에서 var대신 사용하는 let로 변경해줘야 한다.
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
    }
    hours = ('0' + hours).slice(-2);

    return (
<<<<<<< HEAD
        <div>{hours}:{minutes}:{seconds} {session}</div>
    )
}

export default Clock01
=======
       // <div>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
       <div>{hours}:{minutes}:{seconds} {session}</div>
    );
}

export default Clock01;
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
