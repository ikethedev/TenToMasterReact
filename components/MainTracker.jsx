export default function MainTracker(){
  return(
    <section>
        <article>
            <div className="icon__container">
                <div className="background"></div>
                <img className="icon" src="./images/assets/homepage/nodata.svg" alt="no data for entry"/>
            </div>
            <div className="subect_review">
                <h3 className="subject__name">English</h3>
                <p> No Data</p>
                <hr/>
                <div className="delete__button"> 
                <img className="icon" src="./images/assets/general/exit.svg" alt="delete"/>
                </div>
            </div>
        </article>
    </section>
  )
}
