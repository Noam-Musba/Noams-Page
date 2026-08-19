import React from 'react'
import About from './About'
import Skills from './Skills'
import LikeDislike from './LikeDislike'
import Quiz from './Quiz'

function Main() {
  return (
    <div style={{flex: '4', paddingLeft: "100px",}}>
      <About />
      <Skills />
      <LikeDislike />
      <Quiz />
    </div>
  )
}

/**
 * <p>
        <b>useCallback:</b> caches the function instance itself.<br />
        <b>useMemo:</b> invokes the function and caches its result.
      </p>
 */

export default Main