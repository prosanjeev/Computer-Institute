import './IconBoxes.css'
import IconBox from './components/IconBox';


function IconBoxes() {

  let iconBoxes = [
    {id:1, name:"SOFTWARE DEVELOPMENT", text:"Software Development at M-TECH: Innovate and build cutting-edge solutions. Our skilled developers use the latest technologies, ensuring robust and scalable software tailored to your needs.", 
    
    url:"https://source.unsplash.com/300x300/?software"},

    {id:1, name:"DYNAMIC WEBSITE DEVELOPMENT", text:"Dynamic Website Development at M-TECH: Craft interactive and responsive websites. Our team combines creativity and functionality, delivering dynamic web solutions for an engaging user experience.", 
    
    url:"https://source.unsplash.com/300x300/?website"},

    {id:1, name:"WEB APPLICATION", text:"Web Application Development by M-TECH: Elevate user experiences with our innovative web apps. We leverage cutting-edge technologies to build scalable, secure, and feature-rich applications tailored to your needs.", 
    
    url:"https://source.unsplash.com/300x300/?web"},

    {id:1, name:"MOBILE APPS DEVELOPMENT", text:"Mobile Apps Development by M-TECH: Transform your ideas into powerful mobile applications. Our experts create intuitive, high-performance apps for iOS and Android, ensuring a seamless user experience.", 
    
    url:"https://source.unsplash.com/300x300/?playstore"},

    {id:1, name:"SEARCH ENGINE OPTIMIZATION", text:"Boost your online visibility with M-TECH's Search Engine Optimization (SEO) services. Our strategies enhance your website's ranking, drive organic traffic, and elevate your digital presence, maximizing business success.", 
    
    url:"https://source.unsplash.com/300x300/?seo"},

    {id:1, name:"CONTENT WRITING", text:"Elevate your brand's narrative with M-TECH's exceptional content writing services. Our skilled writers craft engaging, SEO-optimized content tailored to your audience, ensuring impactful communication and effective storytelling.", 
    
    url:"https://source.unsplash.com/300x300/?writing"},

    {id:1, name:"ACADEMIC PROJECTS", text:"M-TECH delivers cutting-edge academic projects, seamlessly integrating innovative solutions and technologies. Empower your educational journey with our expertise, fostering excellence in research and development.", 
    
    url:"https://source.unsplash.com/300x300/?academic"},

    {id:1, name:"TRAINING", text:"At M-TECH, our comprehensive training programs empower individuals with practical skills and knowledge. We cultivate talent, fostering growth and expertise to thrive in today's dynamic technological landscape.", 
    
    url:"https://source.unsplash.com/300x300/?class"},

    {id:1, name:"CONSULTING", text:"Our consulting services at M-TECH provide strategic guidance to businesses, ensuring optimal technology utilization. We offer tailored solutions for challenges, driving success through informed decision-making.", 
    
    url:"https://source.unsplash.com/300x300/?consulting"},

  ]
  

  return (
    <div className="iconbox-list">

      {
        iconBoxes.map((iconbox)=>{
          return(
            
            <IconBox name={iconbox.name} text={iconbox.text} url={iconbox.url} key={iconbox.id}/>
            

          )
        } )
        
      }
          
    </div>
  )
}

export default IconBoxes