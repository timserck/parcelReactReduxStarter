import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import {Counter, MenuLang} from '../../components/index'
import './HomePage.scss'
import { withRouter } from 'react-router-dom';



type Props = {
    currentPage: string
}
type State = {

}
class HomePage extends PureComponent<Props, State> {



    render () {
        return (
            <div className={`page homepage`}>
                <MenuLang/>
                <FormattedMessage id="HOME_PAGE.TITLE" />
                <Counter/> 
            </div>
        )
    }


}



export default withRouter(HomePage);