export default function SignUpPage(props){
    function generateHomePage(){
        props.toggleUser()
    }
    
    return (
        <>
        <header>
        <h1>Sign Up</h1>
    </header>
    <main>
        <form action="">
            <input type="name" name="name" placeholder="Name" class="form__login" required/>
            <input type="email" name="email" placeholder="Your email" class="form__login" required/>
            <input type="password" name="password" placeholder="Password" class="form__login" required/>
            <button onClick={generateHomePage} class="primary-btn">Create Account <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.6967C10.4645 0.403807 9.98959 0.403807 9.6967 0.6967C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM-6.55671e-08 6.75L15 6.75L15 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" fill="white"/>
                </svg>
                </button>
        </form>
    </main>
    <footer>
        <p>Already have an account? <a href="#" class="links" onClick={props.login}>Login</a></p>
    </footer>
        </>
    )
}