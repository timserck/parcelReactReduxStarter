import React, {PureComponent} from 'react';
import { withRouter } from 'react-router'
import {connect} from 'react-redux';
import withTranslations from '../../hoc/WithTranslations/WithTranslation'
type State = {
  
}

type Props = {
  handleSetTrad: (string) => void,
  currentLang:  string
  history: any
}


class MenuLang extends PureComponent<Props, State> {

//  changeLang = (lang) => {
//     this.props.handleSetTrad('en')
//     this.props.history.push(`/${lang}/`)
//   }


  render() {

    return (
      <div> 
        <h1> MenuLang </h1>
        <p>{this.props.currentLang}</p>
        <button onClick={() =>{this.props.handleSetTrad('en')}}> eng </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentLang: state.counter.index,
  }
}



export default connect(mapStateToProps, null)(withTranslations(withRouter(MenuLang)));