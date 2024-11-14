import { useState } from 'react'
import MainTopbar from '../components/mainTopbar'
import MainTracker from '../components/mainTracker'
import MainTrackerAddModal from '../components/MainTrackerAddModal'
import SubjectTopbar from '../components/SubjectTopbar'
import SubjectWeeklyAverage from '../components/SubjectWeeklyAverage'
import SubjectReviewTrackers from '../components/SubjectReviewTrackers'
import SubjectReviewModal from '../components/SubjectReviewModal'
import MainCreateTrackerModal from '../components/MainCreateTrackerModal'
import SubjectSettingsTrackerModal from '../components/SubjectSettingsTrackerModal'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SubjectSettingsTrackerModal />
    {/* <MainCreateTrackerModal /> */}
    {/* <SubjectReviewModal /> */}
    {/* <SubjectTopbar />
    <SubjectWeeklyAverage />
    <SubjectReviewTrackers /> */}
    {/* <MainTopbar />
    <MainTracker /> 
    <MainTrackerAddModal /> */}
    </>
  )
}

export default App
