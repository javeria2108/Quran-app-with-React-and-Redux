
import { combineReducers } from "redux";
import chapterReducer from "./ChapterReducer";
import chapterVerseReducer from "./ChapterVerseReducer";
import translationReducer from "./TranslationReducer";
import tafseerReducer from "./TafseerReducer";
const rootReducer=combineReducers({
    chapters:chapterReducer,
    verses:chapterVerseReducer,
    translation:translationReducer,
    tafseer:tafseerReducer
})
export default rootReducer;