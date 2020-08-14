import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Projects, Skills} from './components'

class Routes extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/projects' component={Projects}/>
                <Route path='/skills' component={Skills} />
            </Switch>
        )
    }
}

export default Routes