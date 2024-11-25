export default function MainTracker(props){
  function handleClick(){
    props.goToTracker()
    
  }

  return(

        <article onClick={handleClick} id={props.id}>
            <div className="icon__container">
                <div className="background"></div>
                <img className="icon" src="./images/assets/homepage/nodata.svg" alt="no data for entry"/>
            </div>
            <div className="subject__review">
                <h3 className="subject__name">{props.subject}</h3>
                <p> No Data</p>
                <hr/>
                <div className="delete__button"> 
                <img className="icon" src="./images/assets/general/exit.svg" alt="delete" onClick={props.remove}/>
                </div>
            </div>
        </article>
  )
}
