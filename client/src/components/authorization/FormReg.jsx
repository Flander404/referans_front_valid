import './form.css'
import closeBut from './../../assets/images/close.png'
import React from 'react';
import Input from '../input/Input';
import { useState } from "react";
import {  NavLink } from 'react-router-dom';
import { registration } from '../action/user';


const FormReg=()=>{
    
    
    
    const[fName,setfName]=useState('')
    const[sName,setsName]=useState('')
    const[tName,settName]=useState('')
    const[tel,setTel]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[secretWord,setSecret_word]=useState('')
    const[referalCode,setRef_code]=useState('')
    return(
        
        
        <div className="form" >
            <div className= "form_content active" >
                <div className="form_container">
                
                    <NavLink to='/'>
                        <div className='close_button' >
                            <img src={closeBut} alt="text" />
                        </div>
                    </NavLink>
                
                    <p className='title_form'>Регистрация</p>
                    <p className='title_form_descr'>Данные должны соответствовать реальным данным, указанным в паспорте. После введения данных, обязательно проверьте их правильность. Редактирование персональных данных возможно только через менеджера. Ручное редактирование невозможно.</p>
                    <div className="content_form">
                        <div className='title_input' >

                            <ul>
                                <li>Имя</li>
                               <Input value={fName} setValue={setfName} type='fName'/>
                                
                            </ul>
                            <ul>
                                <li>Фамилия</li>
                               <Input value={sName} setValue={setsName} type='sName'/>
                                
                            </ul>
                            <ul>
                                <li>Отчество</li>
                               <Input value={tName} setValue={settName} type='tName'/>
                                
                            </ul>


                            <ul>
                                <li>Телефон</li>
                               <Input value={tel} setValue={setTel} type='tel'/>
                                
                            </ul>
        
                            <ul>
                                <li>E-mail</li>
                                <Input value={email} setValue={setEmail} type='email'/>
                            </ul>
        
                            <ul>
                                <li>Пароль</li>
                                <Input value={password} setValue={setPassword} type='password'/>
                            </ul>
                            <ul>
                                <li>Секретное слово</li>
                               <Input value={secretWord} setValue={setSecret_word} type='secretWord'/>
                                
                            </ul>
                            <ul>
                                <li>Рефераль<br/>ный код</li>
                               <Input value={referalCode} setValue={setRef_code} type='referalCode'/>
                                
                            </ul>
                            
                        </div>
                    
                    </div>
                    
                    <div className="loginButton_form" onClick={()=>registration(tel,email,password,secretWord,referalCode)} >
                        <p>Зарегистрироваться</p>
                    </div>
                    
                    <div className='descr_form'>
                        <p>Нажимая на кнопку 'Зарегистрироваться', Вы даете свое согласие на обработку персональных данных в соответствии с <a href='#!'>Политикой в отношении обработки персональных данных</a></p>
                    </div>
                
                    <div className='descr_form'>
                        <p>Уже зарегистрированы?<a href='#!'>  Войти</a></p>
                    </div>

                </div>
            </div>
        </div>  
    )
}
export default FormReg;








