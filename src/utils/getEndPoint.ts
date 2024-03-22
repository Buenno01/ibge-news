import { ParamsType } from '../@types/ParamsType';
import { SavedNew } from '../@types/SavedNew';

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/';
const QTD = '?qtd=9';
const PAGE = '&page=';
const RELEASE = '&tipo=release';
const NEWS = '&tipo=noticia';
const ID_PRODUTO = '?idproduto=';

const getEndPoint = (params: ParamsType, savedNews: SavedNew[] = []) => {
  const { type, page } = params;

  const savedNewsIds = (savedNews && savedNews.length > 0)
    ? savedNews.map((savedNew) => savedNew[0]).join('|')
    : '';

  switch (type) {
    case 'release':
      return `${BASE_URL}${QTD}${PAGE}${page}${RELEASE}`;
    case 'news':
      return `${BASE_URL}${QTD}${PAGE}${page}${NEWS}`;
    case 'saved':
      return `${BASE_URL}${ID_PRODUTO}${savedNewsIds}`;
    default:
      return `${BASE_URL}${QTD}${PAGE}${page}`;
  }
};

export default getEndPoint;
