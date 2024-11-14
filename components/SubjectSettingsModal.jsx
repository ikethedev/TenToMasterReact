export default function SubjectSettingsTrackerModal(){
    return(
        <>
        <section className="modal_overlay hidden"></section>
        <section id="settings__modal" className="hidden">
        <header className="modal_header">
            <svg
            id="exit__icon"
            className="icon"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            </svg>
            <h3>Edit Tracker</h3>
            <button id="save__icon">Save</button>
        </header>
        <form action="">
            <label for="subject">Name</label>
            <input type="text" placeholder="English" name="subject" id="subject__change"/>
            <span id="delete__container" class="delete__container flex"
            ><img
                id="delete__icon"
                className="icon"
                src="../images/assets/subjecttracker/delete.svg"
                alt=""
            />
            Delete Tracker
            </span>
        </form>
        </section>
        </>
    )
}