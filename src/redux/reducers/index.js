
import { combineReducers } from "redux";
import chapterReducer from "./ChapterReducer";
import chapterVerseReducer from "./ChapterVerseReducer";
import translationReducer from "./TranslationReducer";
import audioReducer from "./AudioReducer";
import languagesReducer from "./LanguagesReducer";
const rootReducer=combineReducers({
    chapters:chapterReducer,
    verses:chapterVerseReducer,
    translation:translationReducer,
    audio:audioReducer,
    languages:languagesReducer
})
export default rootReducer;