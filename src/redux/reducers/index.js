
import { combineReducers } from "redux";
import chapterReducer from "./ChapterReducer";
import chapterVerseReducer from "./ChapterVerseReducer";
const rootReducer=combineReducers({
    chapters:chapterReducer,
    verses:chapterVerseReducer
})
export default rootReducer;