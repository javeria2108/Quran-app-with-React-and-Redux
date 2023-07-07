
import { combineReducers } from "redux";
import chapterReducer from "./ChapterReducer";
import chapterVerseReducer from "./ChapterVerseReducer";
import translationReducer from "./TranslationReducer";
import audioReducer from "./AudioReducer";
import translationsListReducer from "./TranslationListReducer";
import { idReducer } from "./translationIdReducer";
import { recitersListReducer } from "./RecitersReducer";
import { reciterIdReducer } from "./reciterIdReducer";
import languagesReducer from "./LanguagesReducer";
const rootReducer=combineReducers({
    chapters:chapterReducer,
    verses:chapterVerseReducer,
    translation:translationReducer,
    audio:audioReducer,
    languages:languagesReducer,
    translationsList:translationsListReducer,
    translationId:idReducer,
    reciters:recitersListReducer,
    reciterId:reciterIdReducer
})
export default rootReducer;