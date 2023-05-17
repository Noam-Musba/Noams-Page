import React from 'react'
import About from './About'
import Skills from './Skills'
import LikeDislike from './LikeDislike'

function Main() {
  return (
    <div style={{flex: '4', paddingLeft: "100px",}}>
      <About />
      <Skills />
      <LikeDislike />
    </div>
  )
}

export default Main