import React from 'react'
import Skills from './Skills'

const bodyStyles = {
  height: '1000px',
  backgroundColor: 'lightgrey'
}

function Body() {
  return (
    <div style={bodyStyles}>
      <Skills />
    </div>
  )
}

export default Body