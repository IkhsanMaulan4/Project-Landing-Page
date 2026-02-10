import { createClient } from 'contentful';

const client = createClient({
  space: 'nx8lkaixvcoz',
  accessToken: 'pUrA3dy5UsaMF-eE7GIwesxtJQZZoGms73UQg2tn08Y'
});

export const getProducts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'nasiPadang'
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching products from Contentful:', error);
    throw error;
  }
};
