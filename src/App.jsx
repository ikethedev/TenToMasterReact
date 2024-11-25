import { useState, useEffect} from 'react'
import MainPage from '../Pages/MainPage'
import SubjectTrackerPage from '../Pages/SubjectTrackerPage'

import LoginPage from '../Pages/LoginPage'
import SignUpPage from '../Pages/SignUpPage'
import './App.css'

// Make a router to determine what page needs to be made 
// 



function App() {
  const [count, setCount] = useState(0)
  const [pageToShow, setPageToShow] = useState("login")
  // const [user, setUser] = useEffect({})
  const [user, setUser] = useState(false)
  const [tracker, setTracker] = useState(true)
  console.log("I rerendered")
  useEffect(() => {
    console.log("I was infected")
  })

  function toggleUser(){
    setUser(!user)
  }

  function toggleTracker(){
    setTracker(!tracker)
  }

  function login(e){
    e.preventDefault()
    toggleUser()
  }

  function showSignUp(){
   setPageToShow("sign up")
  }

  function showLogin(){
    setPageToShow("login")
  }

  function showTrackerPage(){
    setPageToShow("tracker page")
    console.log(pageToShow)
  }

  return (
    <>
    {!user ? ( 
        pageToShow === "login" ? (
          <LoginPage user={user} login={login} signUp={showSignUp} />
        ) : (
          <SignUpPage user={user} login={showLogin} toggleUser={toggleUser} />
        )
      ) : null} 
      {user && !tracker && <MainPage user={user} showTrackerPage={showTrackerPage} toggleUser={toggleUser} showLogin={showLogin} toggle={toggleUser} toggleTracker={toggleTracker}/>} 
      {user && tracker && <SubjectTrackerPage toggleTracker={toggleTracker} />}
      {pageToShow === "subject tracker" ? <SubjectTrackerPage /> : null}
    </>
  )
}

export default App
