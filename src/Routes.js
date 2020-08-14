import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home, Skills} from './components'

class Routes extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/skills' component={Skills} />
            </Switch>
        )
    }
}

export default Routes