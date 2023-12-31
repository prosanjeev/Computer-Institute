import './IconBox.css'

function IconBox(props) {
  return (
   
    <div className="icon-box-1">
        <img className='iconbox-img' src= {props.url}   alt="icon" />
        <hr className="iconbox-hr"></hr>
        <h1 className="iconbox-t-pading iconbox-title">{props.name}</h1>
        <p className="iconbox-t-pading iconbox-text"> {props.text} </p>
        <button className="iconbox-btn"> READ MORE.. </button>
    </div>
    
  )
}

export default IconBox