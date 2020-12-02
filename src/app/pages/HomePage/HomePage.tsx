import React, { PureComponent } from 'react'
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
                <h1>{this.props.currentPage}</h1>
                <Counter/>
            </div>
        )
    }


}

export default HomePage;