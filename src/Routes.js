import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Projects, Resume, About} from './components'

class Routes extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/resume' component={Resume} />
            </Switch>
        )
    }
}

export default Routes