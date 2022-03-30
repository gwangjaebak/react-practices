import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import './assets/Form.css';

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
<<<<<<< HEAD
    const [validEmail, setValidEmail] = useState(false);
    const [gender, setGender] = useState('female');
    const [birthYear, setBirthYear] = useState('1984');
    const [description, setDescription] = useState('');
    const [agreeProv, setAgreeProv] = useState('no');
=======
    
    const [validEmail, setValidEmail] = useState(false);
    const [gender, setGender] = useState('female');
    const [birthYear, setBirthYear] = useState('1984');
    const [description, setDescription] = useState("");
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb

    const onChangeInputName = function(e) {
        // setName(e.target.value);
        // 10자 제한
<<<<<<< HEAD
        setName(e.target.value.substr(0, 10));
    }

    const onChangeInputEmail = function(e) {
        setEmail(e.target.value);
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        setValidEmail(re.test(e.target.value));
    }

    const onChangeInputGender = function(e) {
        setGender(e.target.value);
    }

    const onChangeAgreeProv = function(e) {
        const status = e.target.value === 'no' ? 'yes' : 'no';

        // API 호출
        const url = `/prov/agree?status=${status}`;
        console.log(url);
        if(true) {
            setAgreeProv(status);
        }
=======
        setName(e.target.value.substr(0,10));
    }

    const onChangeInputEmail = function(e) {
        setEmail(e.target.value.substr(0,20));

        const re =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        setValidEmail(re.test(e.target.value));
    }

    const onchangeInputGender = function(e) {
        console.log(e.target.value);
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
    }

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
<<<<<<< HEAD
            <input 
                id="name"
                name="name"
                type="text"
                value={ name }
                onChange={onChangeInputName}/>

            <label htmlFor="email">이메일</label>
            <input
                id="email"
                name="email"
                type="text"
                onChange={onChangeInputEmail}/>
            {
                email === '' ? 
                    null: 
                    validEmail ? 
                        <FontAwesomeIcon icon={faCheckCircle} style={{marginLeft:5, fontSize: 16, color: 'blue'}}/> :
                        <FontAwesomeIcon icon={faTimesCircle} style={{marginLeft:5, fontSize: 16, color: 'red'}}/>
            }
=======
            <input
                id="name" 
                name="name" 
                type="text" 
                value={name}
                onChange={onChangeInputName} />

            <label htmlFor="email">이메일</label>
            <input 
                id="email"
                name="email" 
                type="text"
                value={email}
                onChange={onChangeInputEmail} />
                {
                    email === '' ?
                        null:
                        validEmail ?
                            <FontAwesomeIcon icon={faCheckCircle} style={{fontSize: 16, color: 'blue'}}/> :
                            <FontAwesomeIcon icon={faTimesCircle} style={{fontSize: 16, color: 'red'}}/>
                }
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb

            <label htmlFor="password">패스워드</label>
            <input 
                id="password" 
                name="password" 
                type="password" 
<<<<<<< HEAD
                value={password}
                onChange={e => setPassword(e.target.value)} />

            <fieldset>
                <legend>성별</legend>
                <label>여</label>
                <input
                    type="radio"
                    name="gender"
                    value={"female"}
                    checked={gender === 'female'} 
                    onChange={onChangeInputGender}/>
                <label>남</label>
                <input
                    type="radio"
                    name="gender"
                    value={"male"}
                    checked={gender === 'male'}
                    onChange={onChangeInputGender}/>
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select
                id="birthYear"
                value={birthYear}
                onChange={e => setBirthYear(e.target.value)}>
=======
                value={ password }
                onChange={e => setPassword(e.target.value)}/>

            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" value={ "female" } checked={gender === 'female'} onChange={onchangeInputGender}/>
                <label>남</label> <input type="radio" name="gender" value={ "male" } checked={gender === 'male'} onChange={onchangeInputGender} />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" value={birthYear} >
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
                <option value='1984'>1984년</option>
                <option value='1985'>1985년</option>
                <option value='1986'>1986년</option>
                <option value='1987'>1987년</option>
                <option value='1988'>1988년</option>
                <option value='1989'>1989년</option>
                <option value='1990'>1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
<<<<<<< HEAD
            <textarea value={description} onChange={e=>setDescription(e.target.value)}/>

            <fieldset>
                <legend>약관동의</legend>
                <input
                    id="agree-prov"
                    type="checkbox"
                    name="agreeProv"
                    value= {agreeProv}
                    checked={agreeProv === 'yes'}
                    onChange={onChangeAgreeProv}/>
=======
            <textarea value={description}/>

            <fieldset>
                <legend>약관동의</legend>
                <input id="agree-prov" type="checkbox" name="agreeProv" value= { "yes" } defaultChecked={ false } />
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}