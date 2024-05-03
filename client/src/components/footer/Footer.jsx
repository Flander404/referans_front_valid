import './../footer/footer.css'

//шапка
const Footer= ()=>{
    
    //лого + ссылки + бегущая строка
    return(
        <footer className='footer'>
            <div className="container">
            
                {/* <span>Политика конфиденциальности</span>
                <span>Оферта </span>
                <span>Полезные материалы</span>
                <span>2024 © nextcryptoinvest.com</span>
                <span>Вход для администратора</span> */}

                 <ul>
                    <li>Политика конфиденциальности</li>
                    <li>Оферта</li>
                    <li>Полезные материалы</li>
                    <li>2024 © nextcryptoinvest.com</li>
                    <li>Вход для администратора</li>
                    

                </ul> 
            </div>
            

        </footer>
    )


}
export default Footer;