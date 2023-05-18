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
      <p>
        <b>useCallback:</b> caches the function instance itself.<br />
        <b>useMemo:</b> invokes the function and caches its result.
      </p>
    </div>
  )
}

export default Main