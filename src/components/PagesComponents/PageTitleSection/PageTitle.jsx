import './PageTitle.css'

const PageTitle = (props) => {
  return (
    <div className='Page-Title'>
    <div className="page-title-background" > </div>

    <div className="page-title-contant-container">

    <div className="page-title-contant">
            <div className="page-title">
            <h3>{props.pagetitle}</h3>
            </div>
            <div className="page-title-path">
                <h5 className='page-title-path-defalut'> HOME</h5>
                <h4>/</h4> 
                <h5 className='page-title-page-path'>{props.pagetitle}</h5> 
            </div>
            
        </div>
    </div>
   
    
    
    </div>
    
  )
}

export default PageTitle