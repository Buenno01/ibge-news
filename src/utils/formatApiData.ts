const formatApiData = (data: any[]) => {
  if (!data || data.length === 0) return [];

  return data.map((item) => {
    return {
      ...item,
      imagens: JSON.parse(item.imagens),
    };
  });
};

export default formatApiData;
