import { ParamsType } from '../@types/ParamsType';

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/';
const QTD = '?qtd=9';
const PAGE = '&page=';
const RELEASE = '&tipo=release';
const NEWS = '&tipo=noticia';

const getEndPoint = (params: ParamsType) => {
  const { type, page } = params;

  switch (type) {
    case 'release':
      return `${BASE_URL}${QTD}${PAGE}${page}${RELEASE}`;
    case 'news':
      return `${BASE_URL}${QTD}${PAGE}${page}${NEWS}`;
    default:
      return `${BASE_URL}${QTD}${PAGE}${page}`;
  }
};

export default getEndPoint;
