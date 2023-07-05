
import { combineReducers } from "redux";
import chapterReducer from "./ChapterReducer";
import chapterVerseReducer from "./ChapterVerseReducer";
import translationReducer from "./TranslationReducer";
import audioReducer from "./AudioReducer";
const rootReducer=combineReducers({
    chapters:chapterReducer,
    verses:chapterVerseReducer,
    translation:translationReducer,
    audio:audioReducer
})
export default rootReducer;