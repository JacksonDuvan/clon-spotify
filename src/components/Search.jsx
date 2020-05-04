import React from 'react'

import { connect } from 'react-redux'
import * as dataActions from '../actions/dataActions'
import '../assets/styles/componets/Search.css'


class Search extends React.Component {

    handleChange = e =>{
        if(e.target.value === ""){
            this.props.flag(false)
        }else{
            this.props.flag(true)
            this.props.searchAlbums(e.target.value)
        }
    }
 
    render(){
        return(
            <div className="search">
                <input type="text" onChange={this.handleChange} placeholder="Busca artistas..." autoFocus/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    dataReducer: state.dataReducer
})

export default connect(mapStateToProps, dataActions)(Search)