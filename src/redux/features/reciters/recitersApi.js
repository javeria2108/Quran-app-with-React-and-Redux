import { api } from '../../api/api'

export const recitersApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchRecitersList: build.query({
      query: () => 'resources/chapter_reciters?language=en',
    }),
  }),
});

export const { useFetchRecitersListQuery } = recitersApi;
