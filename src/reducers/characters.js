const charactersReducer = (state = { data: null, loading: false, error: null }, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return { data: action.data, loading: false, error: null }
    default:
      return state
  }
}

export default charactersReducer
