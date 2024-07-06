import { api } from '../../api/api';

export const audioApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchAudio: build.query({
      query: ({ id, reciterId }) => `chapter_recitations/${reciterId}/${id}`,
    }),
  }),
});

export const { useFetchAudioQuery } = audioApi;
