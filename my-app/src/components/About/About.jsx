import React from 'react'
import './About.css'


const About = () => {
  return (
    <div className='full'>

        <div className='firstpart'>
            <img className='vector' src='Fruit.png' alt="" />
            <img className='vector2' src='Fruit.png' alt="" />
            <img className='vector3' src='Fruit.png' alt="" />

        </div>


        <div className='rectangle'>
            <div>
                <p className='name'>Fruit.ai</p>
                <p className='txt'>Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, 
                    our AI-driven chatbot is here to assist. We provide personalized fruit 
                    recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.</p>
            </div>

            <div className='grp'>
                <div className='button'>
                    
                </div>
                <div className='beforebtn'>
                        <a href="" className="btn">ABOUT</a>
                </div>
            </div>


        </div>
      
    </div>
  )
}

export default About
