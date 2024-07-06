import { api } from '../../api/api';

export const versesApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchVersesByChapter: build.query({
      query: (id) => `quran/verses/indopak?chapter_number=${id}`,
    }),
  }),
});

export const { useFetchVersesByChapterQuery } = versesApi;
