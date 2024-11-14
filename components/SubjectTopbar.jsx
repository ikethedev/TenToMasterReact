export default function SubjectTopbar(){
    return(
        <header class="container main_header">
            <div class="subject_tracker_container">
                <img
                class="back__icon icon"
                src="../images/assets/subjecttracker/backarrow.svg"
                alt="navigate back to the homepages"
                />
                <div class="flex subject">
                <h1>English</h1>
                <div class="flex options_container">
                    <img class="add__icon icon" src="../images/assets/general/add.svg" alt="" />
                    <img
                    class="settings__icon icon"
                    src="../images/assets/subjecttracker/setting.svg"
                    alt=""
                    />
                </div>
                </div>
            </div>
        </header>
    )
}