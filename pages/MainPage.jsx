import MainTracker from "../components/mainTracker"
import MainTopbar from "../components/mainTopbar"
import MainModalOpener from "../components/MainModalOpener"
import MainCreateTrackerModal from "../components/MainCreateTrackerModal"

export default function MainPage() {
    return(
        <>
            <MainTopbar />
            <MainTracker /> 
            <MainModalOpener />
        </>
    )

}