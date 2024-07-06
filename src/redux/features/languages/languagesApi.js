import { api } from '../../api/api';

export const languagesApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchLanguages: build.query({
      query: () => 'resources/languages',
    }),
  }),
});

export const { useFetchLanguagesQuery } = languagesApi;
