import { useFetchChaptersQuery } from "../features/chapters/chaptersApi"

const Chapters=()=>{
    const { data: chapters = [], error, isLoading } = useFetchChaptersQuery();
    return {chapters, error, isLoading}
}
