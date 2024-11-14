export default function SubjectReviewModal() {
    return (
       <>
        <header className="modal_header">
        <svg
          id="icon"
          className="exit__icon icon"
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
        <h3>New Progress</h3>
        <button id="save">Save</button>
      </header>
      <form action="">
      <label>Subject</label>
      <input type="text" placeholder="Description" id="description" />
      <label>Rating: 0 out of 10</label>
      <div className="slider__container">
        <input
          type="range"
          min="0"
          max="10"
          value="5"
          className="slider"
          id="rating-slider"
        />
        <div className="slider-handle ten"></div>
        <div clasName="slider-handle twenty"></div>
        <div className="slider-handle thirty"></div>
        <div className="slider-handle forty"></div>
        <div className="slider-handle fifty"></div>
        <div className="slider-handle sixty"></div>
        <div className="slider-handle seventy"></div>
        <div className="slider-handle eighty"></div>
        <div className="slider-handle ninty"></div>
      </div>
      <label for="comment">Comment (optional)</label>
      <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
    </form>
       </>
      );
}
