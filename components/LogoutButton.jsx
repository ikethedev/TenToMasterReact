
export default function LogoutBtn(props){
    function logOut(){
        alert("You are being logged out")
        props.logOut()
        props.toggle()
    }
    console.log(props)
    return(
        <button onClick={logOut}>Log Out</button>
    )
}