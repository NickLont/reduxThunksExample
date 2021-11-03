const listingsReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_LISTINGS':
      return action.data
    default:
      return state
  }
}

export default listingsReducer
