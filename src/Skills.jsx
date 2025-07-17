import React from 'react'
import Ballpit from './assets/Backgrounds/Ballpit/Ballpit.jsx'
const Skills = () => {
  return (
    <div style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
  <Ballpit
    count={100}
    gravity={0.7}
    friction={0.8}
    wallBounce={0.95}
    followCursor={false}
  />
</div>
  )
}

export default Skills;