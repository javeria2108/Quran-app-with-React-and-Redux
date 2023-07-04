
import { combineReducers } from "redux";
import chapterReducer from "./ChapterReducer";
const rootReducer=combineReducers({
    chapters:chapterReducer
})
export default rootReducer;