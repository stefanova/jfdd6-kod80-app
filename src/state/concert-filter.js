
// to samo co w student-filters
// valueType - rodzaj szukanego słowa kluczowego - rodzaj muzyki, nazwa miejscowości
// searchFilterNames --> to bedzie nasz initial state

// ACTION TYPES (there may be more than one)
const SET_SEARCH_VALUE = 'search/SET_SEARCH_VALUE'

// ACTION CREATORS (there may be more than one; one for each action type)
export const setSearchValue = (value, valueType) => ({
  type: SET_SEARCH_VALUE,
  value
})

// INITIAL VALUE --> do przegadania
const initialState = {
  searchFilterNames: []
}

//REDUCER

export default (state = initialState, action = {}) => {
  switch (action.type) {
    // Number of cases should be equal to number of action types
    case SET_SEARCH_VALUE:

    default:
      return state
  }
}