import { connect } from 'react-redux'
import { setServiceSearch } from '../actions'
import React from 'react'
class ServiceCardSearch extends React.Component{
  constructor(){
    super();
    this.setFilter = this.setFilter.bind(this);
  }
  state={
    selected:[]
  }
  setFilter(e){
    let sel =  this.state.selected.indexOf(e);
    let  prevSelected = this.state.selected;
    if(sel<0){     
      prevSelected.push(e);
    }  
    else{
      prevSelected.splice(sel, 1);
    }
    this.setState({selected:prevSelected})
    console.log(prevSelected);
    this.props.setFilter(this.state.selected);

  }
 render(){
   return(
      <div>
        <p>Search</p> 
        <input type="textbox" onChange={(e) => this.props.setFilter(e.target.value)}/> 
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: (e) => {
    dispatch(setServiceSearch(e))
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceCardSearch)
