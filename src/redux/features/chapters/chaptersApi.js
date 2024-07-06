import { api } from '../../api/api';

export const chaptersApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchChapters: build.query({
      query: () => 'chapters?language=en',
    }),
  }),
});

export const { useFetchChaptersQuery } = chaptersApi;
