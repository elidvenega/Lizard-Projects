import React from 'react'






  const Footer = () => {
  return (
    <div>
      <footer style={footer}>
        <div>
         
       <a href="http://www.instagram.com" rel="noopener noreferrer" target="_blank"><i style={button} className="fab fa-instagram"></i></a>
       <a href="http://www.wikipedia.com" rel="noopener noreferrer" target="_blank"><i style={button} className="fab fa-wikipedia-w"></i></a>
       <a href="http://www.youtube.com" rel="noopener noreferrer" target="_blank"><i style={button} className="fab fa-youtube"></i></a>
       <a href="http://www.youtube.com" rel="noopener noreferrer" target="_blank"><i style={button} className="fab fa-twitter"></i></a>
      </div>
      </footer>
    </div>
  )
} 


const footer = {
  backgroundColor: '#42a5f5',
  height: '150px',
  marginTop: '50px',
  textAlign: 'center'
}

const button = {
  marginTop: '30px',
  fontSize: '70px',
  color: '#fff',
  padding: '15px'
  
 
}

export default Footer;