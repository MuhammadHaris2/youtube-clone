import React  from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Video from './Video'

const App=()=>{
    return(
        <div className="app">
            <Header/>
            <div className="app_sv">
            <SideBar/>
            <Video/>
            </div>
        </div>
    )
}
export default App;