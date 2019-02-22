import { createSelector } from 'reselect'
import ServiceCardSearch from '../containers/ServiceCardSearch';

const getCards = state => state.serviceCards;
const getCardFilter = state => state.serviceCardFilter;

export const getServiceCards =  createSelector(
  [getCardFilter, getCards],
  (filters,cards) =>{
    let data = [], opData=[], countryKeys, paymentKeys, paymentData=[], searchData=[];
  
    // Prepare Array based on country codes
    cards.data.forEach(function(element){
      countryKeys = Object.keys(element.feature[0]);  
      element.filters = countryKeys;
    })

     // Prepare Array based on Payment Methods
     cards.data.forEach(function(element){
      paymentKeys = Object.keys(element.feature[0]);  
      if(element.productLine.AIP==true){

      }
      element.filters = paymentKeys;
    })


    // filter based on country keys
    if (!filters.selected || filters.selected=='All' || filters.selected=='') {
      opData = cards.data;
    }
    else{
      const keys = Object.keys(cards.data[0]);
      console.log(cards);   
        for (var j = 0; j < filters.selected.length; j++) {
          cards.data.forEach(entry => {
            console.log(entry);
            if(entry.filters.includes(filters.selected[j])){
              opData.push(entry);
            }
          });
          
        }      
    }

    // filter based on payment methods 
    if (!filters.selectedTR || filters.selectedTR=='') {
      paymentData = opData;
    }
    else{
      const keys = Object.keys(cards.data[0]);
        for (var j = 0; j < filters.selectedTR.length; j++) {
          opData.forEach(entry => {
            console.log(entry);
            if(filters.selectedTR.length!=2){
              if(entry.productLine[filters.selectedTR[j]]){
                paymentData.push(entry);
              }
            }
            else{
              if(entry.productLine[filters.selectedTR[0]] && (entry.productLine[filters.selectedTR[1]])){
                paymentData.push(entry);
              }
            }
          });
          
        }      
    }

    //search 
    if(filters.search){
      data = paymentData; 
      searchData = data.filter((e)=>{
        return e.name.toLocaleLowerCase().includes((filters.search.toLocaleLowerCase()))
      })
    }
    else{
      searchData = paymentData;
    }

    // remove duplciate values 
    const finalData = searchData.filter((item,pos) => {
      console.log(item);
      return searchData.indexOf(item) == pos;
    });
    return finalData;
  })
