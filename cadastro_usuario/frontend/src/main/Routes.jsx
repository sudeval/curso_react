import React from 'react'
import { Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        {/* exatc devido os outros tb iniciarem com barra */}
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>