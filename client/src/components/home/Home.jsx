import './home.css'


//баннер
function Body (){
    //лого + ссылки + бегущая строка
    return(
        <div>
            
            <div className='container'>
                <div className='promo'>
                    <div className="container_promo">
                        <div className='titlePromo'>
                            <div className="titlePromo_text">
                                <span className='blue_titlePromo'>Инвестируйте</span>
                                <span className='black_titlePromo'> в USDT<br/>с доходностью до 30% в год </span>
                            </div>   
                        </div>

                        <div className="main_promo">
                            <div className='infoPromo'>
                                <div className='text_info_block'>
                                    <p className='timePromo'>USDT 17:39 GMT+5</p>
                                    <p className='coursePromo'>103 USDT</p>
                                    <p className='profitPromo'>+4,19% сегодня</p>
                                    <div className='loginButton'>
                                        <p>Зарегистрироваться</p>
                                    </div>  
                                </div>
                            </div> 

                            <div className="table_promo">
                                <div className='container_table'>
                                    <div className='liderStats'>
                                        <p className='title-table'>ТОП-инвесторы</p>
                                        <table cellPadding={10}  className='table'>
                                            <tbody>
                                            <tr className='blue-row-table'>
                                                <td></td>
                                                <td>Инвестор</td>
                                                <td>Капитализация, USDT</td>
                                                <td>Связь в Телеграм</td>
                                            </tr>
                                            <tr className='black-row-table'>
                                                <td>1</td>
                                                <td>Кузнецов Константин</td>
                                                <td>86,293,237</td>
                                                <td className='td_blue'>@konstant123</td>
                                            </tr>
                                            <tr className='black-row-table'>
                                                <td>1</td>
                                                <td>Кузнецов Константин</td>
                                                <td>86,293,237</td>
                                                <td className='td_blue'>@konstant123</td>
                                            </tr>
                                            <tr className='black-row-table'>
                                                <td>1</td>
                                                <td>Кузнецов Константин</td>
                                                <td>86,293,237</td>
                                                <td className='td_blue'>@konstant123</td>
                                            </tr>
                                            <tr className='black-row-table'>
                                                <td>1</td>
                                                <td>Кузнецов Константин</td>
                                                <td>86,293,237</td>
                                                <td className='td_blue'>@konstant123</td>
                                            </tr>
                                            <tr className='black-row-table'>
                                                <td>1</td>
                                                <td>Кузнецов Константин</td>
                                                <td>86,293,237</td>
                                                <td className='td_blue'>@konstant123</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>  
                            </div>
                        </div>                 
                    </div>     
                </div>

                <div className="description_parent">
                    <div className='description_block'>
                        <div className="description_bottom1">
                            <p>Добро пожаловать на официальный сайт нашего криптовалютного хедж-фонда. Мы являемся ведущими экспертами в области инвестиций в криптовалюты и цифровые активы, предлагая нашим клиентам уникальные возможности для увеличения их капитала в быстро развивающемся мире цифровой экономики.</p>
                        </div>
                        <div className="description_bottom2">
                            <p className='blue_word'>### <span className='blackDescr'>Почему стоит доверять нам?</span></p>
                        </div>
                        <div className="description_bottom3">
                            <p>Профессионализм и опыт. Наша команда состоит из высококвалифицированных специалистов с глубокими знаниями рынка криптовалют. Мы постоянно анализируем рынок, чтобы
                                предоставлять нашим клиентам самые актуальные и эффективные инвестиционные решения. </p>
                            <p>Индивидуальный подход. Мы понимаем, что каждый инвестор имеет свои цели и предпочтения. Поэтому мы предлагаем индивидуальные инвестиционные стратегии, которые 
                                соответствуют вашим финансовым целям и уровню риска. </p>
                            <p>Прозрачность и безопасность. Мы строго соблюдаем все законодательные и регуляторные требования, обеспечивая высокий уровень прозрачности и безопасности для наших клиентов.
                                Ваши инвестиции защищены современными технологиями безопасности.</p>
                        </div>

                        <div className="description_bottom2">
                            <p className='blue_word'>### <span className='blackDescr'>Наш подход к инвестированию</span></p>
                        </div>
                        <div className="description_bottom3">
                            <p>долгосрочном потенциале и стабильности. Наш портфель включает в себя как базовые криптовалюты с проверенной историей, так и перспективные новые проекты, которые проходят
                            строгий отбор на основе анализа рисков и потенциальной доходности.</p>
                        </div>

                        <div className="description_bottom2">
                            <p className='blue_word'>### <span className='blackDescr'>Присоединяйтесь к нам</span></p>
                        </div>

                        <div className="description_bottom3">
                            <p>Если вы ищете возможность увеличить свой капитал, эксплуатируя возможности криптовалютного рынка, наш хедж-фонд предлагает надежную платформу для достижения ваших инвестиционных целей. С нами вы можете быть уверены, что ваш капитал работает на вас, открывая доступ к новым финансовым возможностям в мире цифровых активов. </p>
                            <p>Для получения дополнительной информации о наших услугах и как начать сотрудничество, пожалуйста, свяжитесь с нами. Мы готовы ответить на любые ваши вопросы и помочь вам сделать первый шаг к успешным инвестициям в криптовалюту. </p>        
                        </div>
                    </div>
                </div>           
            </div>
        </div>
       
    )
}

export default Body;