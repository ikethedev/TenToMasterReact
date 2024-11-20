export default function LoginPage(props){
    console.log(props)
    function forgotPassword(){
        alert("User sent password reset to email")
    }

    return (
        <>
            <header>
                <h1>Log In</h1>
            </header>
            <main>
                <form action="">
                    <input  type="email" name="email" placeholder="Your email" className="form__login" />
                    <input  type="password" name="password" placeholder="Password" className="form__login" />
                    <button onClick={props.login} className="primary-btn">Continue <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.6967C10.4645 0.403807 9.98959 0.403807 9.6967 0.6967C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM-6.55671e-08 6.75L15 6.75L15 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" fill="white"/>
                            </svg>
                    </button>
                </form>
            </main>
            <footer>
                <a href="#" className="links footer__password" onClick={forgotPassword}>Forgot password</a>
                <p>No account yet? <a href="#" className="links" onClick={props.signUp}>Sign up</a></p>
            </footer>
        </>
    )
}