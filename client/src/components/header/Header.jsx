import './header.css'

import {Link, NavLink} from 'react-router-dom'

import iconLogo from './../../assets/images/logo.png'
import {useSelector,useDispatch} from "react-redux";
import {logout} from './../../reducers/userReducer'






//шапка
const Header= ()=>{
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    //лого + ссылки + бегущая строка
    return(
        //хедер
        <header className='header'> 
            {/* помещение всего хедера в контейнер */}
            <div className='container'>
                {/* первая строка в хедере лого + войти/зарегистрироваться */}
                <div className="header_row">
                    {/* логотип */}
                    {isAuth &&
                        <NavLink to='acc'>
                        <div className="header_logo">
                            <img src={iconLogo} alt='logo'/>
                        </div>
                        </NavLink>

                    }
                    {!isAuth &&
                        
                        <div className="header_logo">
                            <img src={iconLogo} alt='logo'/>
                        </div>
                        

                    }
                    
                    {/* вход/регистрация */}
                    <nav className="header_nav">
                        <ul>
                            {/* вешаем он клик рендера формы регистрации на надпись Вход */}
                             {!isAuth &&<Link to ='login'>Вход</Link> }

                            {/* вешаем он клик рендера формы регистрации на надпись Регистрация */}
                            {!isAuth &&<Link to='registration'>Регистрация</Link>}

                            {isAuth && <div onClick={()=>dispatch(logout())}>Выход</div>}

                            
                            
                        </ul>
                    </nav>                   
                </div>

                {/* бегущая строка */}
                <div className="header_row">
                    <div className='running_line'>
                            <div></div>
                            <marquee scrollamount="5">
                                <span>BTC/USD $52,176.00 (+16%)</span>   
                                <span>BTC/RUB ₽4,820,626.66 (+16%)</span>  
                                <span>USDT/RUB ₽92.50 (+16%)</span>
                                <span>ETH/USD $2,900.06 (+16%)</span>
                                <span>ETH/RUB ₽268,622.13 (+16%)</span>
                            </marquee> 
                            <div></div>

                            
                    </div>
                </div>

                
            </div>
        </header>
    )
}

export default Header;