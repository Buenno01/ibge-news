import { NewsType } from '../@types/NewsType';

const formatApiData = (data: any[]): NewsType[] => {
  if (!data || data.length === 0) return [];

  return data.map((item) => {
    return {
      ...item,
      imagens: JSON.parse(item.imagens),
    };
  });
};

export default formatApiData;
