export default function MainCreateTrackerModal() {
  return (
    <>
      <section className="modal_overlay hidden"></section>
      <section id="add__modal" className="hidden">
        <header class="modal_header">
          <svg
            id="exit__icon"
            clasName="icon"
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
          <h3>New Tracker</h3>
          <button id="create">Create</button>
        </header>
        <form action="" className="tracker">
          <label for="subject">Name</label>
          <input
            id="tracker__subject"
            className="tracker__subject"
            type="text"
            placeholder="Which subject would you like to track"
            name="subject"
          />
        </form>
      </section>
    </>
  );
}
