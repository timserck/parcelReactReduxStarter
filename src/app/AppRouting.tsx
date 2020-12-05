
import React, { Fragment, PureComponent} from 'react'
import {HomePage} from '../app/pages/index'
import flatten from 'flat'
import { IntlProvider } from 'react-intl'
import { messages } from '../locale/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useParams
} from "react-router-dom";
import { connect } from 'react-redux'
type Props = {

    lang:string
   
}

type State = {
    
}

class AppRouting extends PureComponent<Props, State> {

    componentDidUpdate(prevProps) {
        if (prevProps.lang !== this.props.lang) {
          console.log('pokemons state has changed.')
        }
      }

    render () {
        return (
        <IntlProvider
        defaultLocale = "fr"
        locale={this.props.lang}
        messages={flatten(messages[this.props.lang])}
        >
                <Router>
                    <Switch>
                        <Route exact path={`/${this.props.lang}/`}  render={() => <HomePage currentPage="HOME_PAGE"/> }/>
                    </Switch>
                </Router>
        </IntlProvider>
        )
    }
}

function mapStateToProps(state) {
    return {
        lang: state.account.trad.lang
    }
  }
  

export default connect(
    mapStateToProps,
    null   
  )(AppRouting)