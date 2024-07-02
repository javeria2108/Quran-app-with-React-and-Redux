export const fetchRecitersListRequest = () => {
    return {
      type: "FETCH_RECITERS_LIST_REQUEST",
    };
  };
  
  export const fetchRecitersListSuccess = (reciters) => {
    return {
      type: "FETCH_RECITERS_LIST_SUCCESS",
      payload: reciters,
    };
  };
  
  export const fetchRecitersListFailure = (error) => {
    return {
      type: "FETCH_RECITERS_LIST_FAILURE",
      payload: error,
    };
  };