import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import { getServiceCards } from '../selectors'
import React from 'react';
class Details extends React.Component{
  constructor(props){
    super(props);
    this.getMatchedRecord=this.getMatchedRecord.bind(this);
//    this.getMatchedRecord();
  }
  state ={
    mRecord:[],
  }
  componentDidMount(){
    const  handle  = this.props.match.params.id;
    const matchedRecord =  this.props.data.serviceCards.data.filter((e) => e.createdAt === parseInt(handle));
    this.setState({mRecord:matchedRecord[0]});
  }
  getMatchedRecord(){

  }
 render(){
   return(
      <div>
          { console.log(this.state)}
          <h1>{this.state.mRecord.name}</h1> 
          <h2>{this.state.mRecord.companyPlatform}</h2>
          <h3>{this.state.mRecord.definition}</h3>
            <p>Examples</p>
            
                {(this.state.mRecord && this.state.mRecord.examples) ?
                <ul>{
                    this.state.mRecord.examples.map((e) => 
                        <li>{e}</li> 
                )}</ul> : null} 

      </div>
    )
  }
}

const mapStateToProps = state => ({
    data: state
  })
  
  
  const mapDispatchToProps = dispatch => ({

  })
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Details)