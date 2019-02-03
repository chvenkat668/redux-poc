import { connect } from 'react-redux'
import { setServiceCardFilter, setTRServiceCardFilter, setVisibilityFilter } from '../actions'
import React from 'react'
class ServiceCardFilters extends React.Component{
  constructor(){
    super();
    this.setFilter = this.setFilter.bind(this);
  }
  state={
    selected:[],
    selectedTR:[]
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

  setTRFilter(e){
    let sel =  this.state.selectedTR.indexOf(e);
    let  prevSelected = this.state.selectedTR;
    if(sel<0){     
      prevSelected.push(e);
    }  
    else{
      prevSelected.splice(sel, 1);
    }
    this.setState({selectedTR:prevSelected})
    console.log(prevSelected);
    this.props.setTRFilter(this.state.selectedTR);
  }

 render(){
   return(
      <div>
        <input type="checkbox" value="india" onChange={() => this.setFilter('US')}/> US
        <hr/>
        <input type="checkbox" value="england" onChange={() => this.setFilter('CA')}/> CA
        <hr/>
        <input type="checkbox" value="england" onChange={() => this.setFilter('GB')}/> GB
        <hr/>
        <div>
          <input type="checkbox" value="tr" onChange={() => this.setTRFilter('AIP')}/> AIP
          <hr/>
          <input type="checkbox" value="trt" onChange={() => this.setTRFilter('threePIP')}/> threePIP
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: (e) => {
    dispatch(setServiceCardFilter(e))
    },
  setTRFilter: (e) => {
    dispatch(setTRServiceCardFilter(e))
    },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceCardFilters)
