import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const cryptoNewsHeaders = {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': '89ff8870cdmsh72d6a525790eaa2p10f5eejsn27b73502342d',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
// }

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '89ff8870cdmsh72d6a525790eaa2p10f5eejsn27b73502342d',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

// const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (count) => 
            createRequest(`/coindesk`)
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;
