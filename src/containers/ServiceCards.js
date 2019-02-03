import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import { getServiceCards } from '../selectors'
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class ServiceCards extends React.Component{
  render(){
    return(
        <div>
        {this.props.serviceCards ? 
        <div>
          <div>
       
            {this.props.serviceCards.map((post) =>
              <div key={post.id}>
                {post.name}
                <Link to={`/about/${post.createdAt}`}>{post.name}</Link>
              </div>
            )}
            </div>      
          {
            this.props.serviceCards.length==0 ? <p> no records found </p>:null
          }
        <p>{this.props.serviceCards.length}</p>
        {console.log(this.props.serviceCards)}
      </div> 
      : null }


      </div>

    )
  }
}

const mapStateToProps = state => ({
  serviceCards: getServiceCards(state)
})


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceCards)

