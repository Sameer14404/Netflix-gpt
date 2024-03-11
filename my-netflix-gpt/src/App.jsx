
import { Provider } from 'react-redux'
import './App.css'
import Body from './Components/Body'
import appStore from './Utils/Redux-tool-kit/appStore'

function App() {


  return (
    <>
    <Provider store={appStore}>
    <Body/>

    </Provider>
 
    </>
  )
}

export default App
