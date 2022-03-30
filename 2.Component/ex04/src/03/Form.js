import React from 'react';
import './assets/Form.css';

export default function Form() {
    const onSubmit = function(e) {
        e.preventDefault();

<<<<<<< HEAD
        // validation이 딱히 필요가 없으면...
=======
        // validation이 딱히 필요가 없으면....
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
        console.log(e.target.email.value, ':', e.target.password.value);

        // ajax 통신
    }

    return (
<<<<<<< HEAD
        <form
            id="loginForm"
            name="loginForm"
            method="post"
            onSubmit={onSubmit} 
            action="/do/not/post">

            <label htmlFor="email">이메일</label>
            <input
                id="email"
                name="email"
=======
        <form 
            id="loginForm" 
            name="loginForm" 
            method="post" 
            onSubmit={onSubmit}
            action="/do/not/post">
                
            <label htmlFor="email">이메일</label>
            <input 
                id="email"
                name="email" 
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
                type="text" />

            <label htmlFor="password">패스워드</label>
            <input 
                id="password" 
                name="password" 
                type="password" />

            <input type="submit" value="가입" />
        </form>
    );
}