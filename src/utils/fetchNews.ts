import { NewsType } from '../@types/NewsType';
import formatApiData from './formatApiData';

const fetchNews = async (endpoint: string): Promise<NewsType[]> => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    return formatApiData(data.items);
  } catch (err) {
    throw new Error('Failed to fetch');
  }
};

export default fetchNews;
