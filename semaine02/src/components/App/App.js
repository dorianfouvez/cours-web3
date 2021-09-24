import React, { useState } from 'react'
import Display from '../Display/Display'
import Button from 'components/Button/Button'

const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    const changeCount = (delta) => {
        localStorage.setItem('counter', JSON.stringify(counter + delta));
        return setCounter(counter + delta);
    }
  
    return (
      <div>
        <Display counter={counter}/>
        <Button
          changeCount={changeCount}
          text='plus'
          delta={1}
        />
        <Button
          changeCount={changeCount}
          text='zero'
          delta={-counter}
        />     
        <Button
          changeCount={changeCount}
          text='minus'
          delta={-1}
        />           
      </div>
    )
}

export default App