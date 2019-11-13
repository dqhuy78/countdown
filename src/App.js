import React from 'react';

import Noel from './components/Noel';
import NewYear from './components/NewYear';
import LunarNewYear from './components/LunarNewYear';

const App = () => {

    return (
        <div className="App">
            <Noel />
            <NewYear />
            <LunarNewYear />
        </div>
    );
}

export default App;
