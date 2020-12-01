import React, { FunctionComponent } from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import Player from './Player'
import PlayerForm from './PlayerForm'
import PlayerHistory from './PlayerHistory'

const DxIntl: FunctionComponent<RouteComponentProps<{}>> = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/p/new`} component={PlayerForm} />
    <Route path={`${match.url}/p/:nickname/edit`} component={PlayerForm} />
    <Route path={`${match.url}/p/:nickname/history/:hash?`} component={PlayerHistory} />
    <Route path={`${match.url}/p/:nickname`} component={Player} exact={true} />
  </Switch>
)
export default DxIntl
