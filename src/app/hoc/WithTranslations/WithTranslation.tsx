import React, { Fragment, PureComponent, ComponentType } from 'react'
import { Dispatch } from 'redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import {setTrad} from '../../../store/actions/account/trad'
import { RootState } from '../../../store/reducers'

type Props = {
  match: {
    path: string
  }
  lang: string

}

const withTranslations = (Component: ComponentType) => {
  class WithTranslations extends PureComponent<RouteComponentProps & Props, {}> {


    render () {
      return (
        <Fragment>
          <Component {...this.props} />
        </Fragment>
      )
    }
  }

  const mapStateToProps = (state: RootState) => ({
    lang: state.account.trad.lang
  })

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleSetTrad: (payload:string) => dispatch(setTrad(payload))
  })

  return connect<RootState, Dispatch, Props>(mapStateToProps, mapDispatchToProps)(withRouter(WithTranslations))
}

export default withTranslations