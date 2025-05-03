// src/lib/microcms.ts
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

export async function getNewsList() {
  const response = await client.get({
    endpoint: 'news',
  });
  
  return response.contents;
}

export async function getNewsDetail(contentId: string) {
  const response = await client.get({
    endpoint: 'news',
    contentId,
  });
  
  return response;
}