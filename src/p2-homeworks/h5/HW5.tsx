import React from 'react'
import Header from './Header'
import {HashRouter} from 'react-router-dom';
import {NewRoutes} from './NewRoutes';

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <NewRoutes/>
            </HashRouter>
        </div>
    )
}

export default HW5
