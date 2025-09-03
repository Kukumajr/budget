import '/src/styles/Login/Login.css';

const Login = () => {
    return (
        <div className='login-block'>
            <h3 className='text-center text-xl'>Вход</h3>
            <div className='login-inputs-wrapper'>
                <div className='input-wrapper'>
                    <label htmlFor ='email'>Почта</label>
                    <input className='input' type='text' id="email" name='email'/>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor = 'password'>Пароль</label>
                    <input className='input' autoComplete="off" type = 'password' id="password" name='password'/>
                </div>
            </div>
            <div className='login-remember-wrapper'>
                <div className='checkbox-wrapper'>
                    <input type = 'checkbox' id="remember" name='remember'/>
                    <label htmlFor = 'remember'>Запомнить</label>
                </div>
                <a href='#'>Забыли пароль?</a>
            </div>
            <div className='login-other-wrapper'>
                <button>Войти</button>
                <div className='login-register-wrapper'>
                    <p>Нет аккаунта?</p>
                    <a href='#'>Зарегистрироваться</a>
                </div>
            </div>
            <a href='#' className='text-right width-100'>Я только посмотреть...</a>
        </div>
    )
}
export default Login