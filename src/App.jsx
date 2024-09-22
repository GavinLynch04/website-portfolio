import { TypeAnimation } from 'react-type-animation';
import './App.css'

function App() {

  return (
    <>
        <TypeAnimation
            sequence={[
                'Gavin Lynch',
                1000,
            ]}
            wrapper="span"
            className="name"
            speed={50}
        />


    </>
  )
}

export default App
