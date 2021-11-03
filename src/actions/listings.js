export const initListings = () => {
  return async dispatch => {
    const listings = ['listing1', 'listing2'] // TODO make this an async call
    dispatch({
      type: 'INIT_LISTINGS',
      data: listings
    })
  }
}
