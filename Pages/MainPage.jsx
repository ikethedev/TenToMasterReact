import MainTopbar from "../components/MainTopbar";
import MainTracker from "../components/MainTracker";
import MainModalOpener from "../components/MainModalOpener";
import MainCreateTrackerModal from "../components/MainCreateTrackerModal"
import { useState } from "react";
import LogoutBtn from "../components/LogoutButton";


export default function MainPage(props){
    console.log(props)
    const [modal, setModal] = useState(false)
    const [trackers, setTrackers] = useState([])
    const [showTracker, setShowTracker] = useState(false)
    const [id, setId] = useState(1)
    console.log(trackers)
    function toggleModal(){
        setModal(!modal)
    }

    function addTracker(subject){
        setTrackers([...trackers, { id: Math.random().toString(36).substring(2, 15) , subject: subject }])
        
        console.log(trackers)
        setModal(!modal)
    }

    function getIndex(e){
        console.log(trackers)
       trackers.findIndex(item => {
            if(item.subject === subject){
                console.log(item)
            }
        })
    
    }

    function handleRemoveItem(e){
        const subject = e.currentTarget.closest("article")
        const indexToRemove = trackers.findIndex((item, index) => item.id === subject.id)
        const item = trackers.filter(item => item.id === subject.id)
        if(indexToRemove !== -1){
            trackers.splice(indexToRemove, 1)
            if(trackers.length !== 0){
                console.log("hello")
                document.querySelector("#tracker__container").removeChild(subject)
            }
        }
      
    }

    function goToTracker(){
        props.toggleTracker()
    }

    
    return (
        <>
            <MainTopbar />
            <main id="tracker__container"> 
                {trackers.map((tracker, index) => (
                    <MainTracker key={index} id={tracker.id} goToTracker={goToTracker} subject={tracker.subject} toggleUser={props.toggleUser} remove={handleRemoveItem} user={props.user} showTrackerPage={props.showTrackerPage}/>
                ))}
             </main>
            <MainModalOpener toggleModal={toggleModal} />
            {modal && <MainCreateTrackerModal toggleModal={toggleModal} addTracker={addTracker}/>}
            <LogoutBtn logOut={props.showLogin} toggle={props.toggleUser}/>
        </>
    )
}