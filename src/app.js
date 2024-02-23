import "./app.css"
import NavBar from "./NavBar/navbar"
import { Outlet} from 'react-router-dom';

const App = ()=>{
    return(
        <div className="App">
            <NavBar />
            <div className="Content">   
                <Outlet/>
            </div>
        </div>
    )
}

export default App;