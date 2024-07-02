export const SET_TRANSLATION_ID = "SET_TRANSLATION_ID";

export const setTranslationId = (id) => {
  return {
    type: SET_TRANSLATION_ID,
    payload: id,
  };
};

export const setReciterId = (id) => {
  return {
    type: "SET_RECITER_ID",
    payload: id,
  };
};
