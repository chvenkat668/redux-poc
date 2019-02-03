import * as types from '../constants'

export const setServiceCardFilter = (filter) => ({ type: types.SET_SERVICE_FILTER, filter})


export const setTRServiceCardFilter = (trfilter) => ({ type: types.SET_TR_SERVICE_FILTER, trfilter})


export const setServiceSearch = (search) => ({ type: types.SET_SERVICE_SEARCH, search})

export const getServiceCards = () => ({ type: types.GET_SERVICE_CARDS })


// https://github.com/chvenkat668


