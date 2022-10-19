import React from 'react'
import './Video.css'
import video from './html.mp4'

const Video = () => {
  return (
    <div>
    <h1>How to Import an Video</h1>
    <div className="video"> 
    <video height="200px" width="400px" controls>
    <source src={video}/>
    </video>
    </div>
    </div>
  )
}

export default Video