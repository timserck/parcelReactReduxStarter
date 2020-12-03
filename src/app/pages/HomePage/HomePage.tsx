import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import {Counter} from '../../components/index'
import './HomePage.scss'

type Props = {
    currentPage: string
}
type State = {

}
class HomePage extends PureComponent<Props, State> {

    render () {
        return (
            <div className={`page homepage`}>
                <FormattedMessage id="HOME_PAGE.TITLE" />
                <Counter/>
            </div>
        )
    }


}

export default HomePage;