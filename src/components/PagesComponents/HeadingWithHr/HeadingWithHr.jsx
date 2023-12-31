import './HeadingWithHr.css'

const HeadingWithHr = (props) => {
  return (
    <div className="heading-fullbox">
    <div className="heading-box">
    <h2 > {props.heading} </h2>
    <div className='heading-hr-line' />
    <div className="section-text">
    {props.text}
    </div>
    </div>    
    </div>
  )
}

export default HeadingWithHr