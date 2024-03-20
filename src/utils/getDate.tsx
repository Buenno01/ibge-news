const getDate = (dateString: string): string => {
  const dateParts = dateString.split(' ');
  const [datePart, timePart] = dateParts;
  const [day, month, year] = datePart.split('/').map(Number);
  const [hour, minute, seconds] = timePart.split(':').map(Number);

  const publishDate = new Date(year, month - 1, day, hour, minute, seconds);
  const today = new Date();

  const timeDifference = today.getTime() - publishDate.getTime();

  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(monthsDifference / 12);

  switch (true) {
    case yearsDifference > 0:
      return `${yearsDifference} ano${yearsDifference > 1 ? 's' : ''} atrás`;
    case monthsDifference > 0:
      return `${monthsDifference} mês${monthsDifference > 1 ? 'es' : ''} atrás`;
    case daysDifference > 0:
      return `${daysDifference} dia${daysDifference > 1 ? 's' : ''} atrás`;
    case hoursDifference > 0:
      return `${hoursDifference} hora${hoursDifference > 1 ? 's' : ''} atrás`;
    case minutesDifference > 0:
      return `${minutesDifference} minuto${minutesDifference > 1 ? 's' : ''} atrás`;
    default:
      return `${secondsDifference} segundo${secondsDifference > 1 ? 's' : ''} atrás`;
  }
};

export default getDate;
