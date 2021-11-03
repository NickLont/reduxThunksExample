const selectCharactersData = (state) => state?.characters?.data
const selectCharactersError = (state) => state?.characters?.error
const selectCharactersLoading = (state) => state?.characters?.loading

export {
  selectCharactersData,
  selectCharactersError,
  selectCharactersLoading
}
