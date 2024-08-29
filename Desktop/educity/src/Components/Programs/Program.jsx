import React from 'react'
import './Program.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

const Program = () => {
  return (
    <div className='programs'> 
               <div className="program">
                <img src={img1} alt="" />
               </div>
               <div className="program">
                <img src={img2} alt="" />
               </div>
               <div className="program">
                <img src={img3} alt="" />
               </div>
    </div>
  )
}

export default Program
