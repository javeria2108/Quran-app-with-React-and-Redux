import { api } from '../../api/api';

export const translationsApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchTranslation: build.query({
      query: ({ id, translationId }) => `quran/translations/${translationId}?chapter_number=${id}`,
    }),
    fetchTranslationsList: build.query({
      query: (language) => `resources/translations?language=${language}`,
    }),
  }),
});

export const { useFetchTranslationQuery, useFetchTranslationsListQuery } = translationsApi;
