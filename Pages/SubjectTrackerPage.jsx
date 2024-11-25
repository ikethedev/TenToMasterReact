import SubjectTopbar from "../components/SubjectTopbar"
import SubjectWeeklyAverage from "../components/SubjectWeeklyAverage"
import SubjectReviewTrackers from "../components/SubjectReviewTrackers"
import SubjectReviewModal from "../components/SubjectReviewModal"
import SubjectSettingsModal from "../components/SubjectSettingsModal"
import { useState } from "react"

export default function SubjectTrackerPage(props){
    const [settingsModal, setSettingsModal] = useState(false)
    const [addModal, setAddModal] = useState(false)
    function toggleSettingsModal(){
        setSettingsModal(!settingsModal)
    }

    function toggleAddModal(){
        console.log("Hello")
        console.log(addModal)
        setAddModal(!addModal)
        console.log(addModal)
    }


    function toggleTrackerHomePage(){
        props.toggleTracker()
    }

    return(
        <>
            <SubjectTopbar toggleTrackerHomePage={toggleTrackerHomePage} settingsModal={toggleSettingsModal} addModal={toggleAddModal}/> 
            <SubjectWeeklyAverage /> 
            <SubjectReviewTrackers /> 
            {settingsModal && <SubjectSettingsModal />}
            {addModal && <SubjectReviewModal />}
            {/* <SubjectReviewModal /> */}
        </>
    )
}