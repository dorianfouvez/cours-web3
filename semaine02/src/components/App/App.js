import React, { useState } from 'react'
import Display from '../Display/Display'
import Button from 'components/Button/Button'

const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    const changeCount = (delta) => setCounter(counter + delta)
  
    return (
      <div>
        <Display counter={counter}/>
        <Button
          onClick={changeCount}
          text='plus'
          delta='+1'
        />
        <Button
          onClick={changeCount}
          text='zero'
          delta='-1'
        />     
        <Button
          onClick={changeCount}
          text='minus'
          delta={-counter}
        />           
      </div>
    )
}

export default App