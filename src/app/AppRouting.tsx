
import React, { Fragment} from 'react'
import {HomePage} from '../app/pages/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useParams
} from "react-router-dom";
import { connect } from 'react-redux'
type Props = {}


export function AppRouting (props: Props) {
    return (
    <Fragment>
        <Router>
            <Switch>
                <Route exact path="/"  render={() => <HomePage currentPage="HomePage"/> }/>
            </Switch>
        </Router>
    </Fragment>
    )
}

export default connect(
    null,
    null   
  )(AppRouting)