import React from 'react'
import Display from '../Display/Display'
import Button from 'components/Button/Button'
import useLocalStorage from 'hooks/userLocalStorage';

const App = () => {
    const [ counter, setCounter ] = useLocalStorage('counter', 0);
  
    const changeCount = (delta) => {
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