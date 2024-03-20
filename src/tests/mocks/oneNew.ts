/* eslint-disable */

import { ApiReturn } from "../../@types/ApiReturn";

const newDate = new Date();
const formattedDate = `${newDate.getDate()}/${newDate.getMonth() - 3}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;

const oneNew: ApiReturn = {
  count: 1,
  page: 1,
  totalPages: 1,
  nextPage: 1,
  previousPage: 1,
  showingFrom: 1,
  showingTo: 1,
  items: [
    {
      id: 39351,
      tipo: 'Notícia',
      titulo: 'Webinários do Hub Regional para Big Data discutem experimentos com dados alternativos',
      introducao: 'O Hub Regional da ONU para Big Data no Brasil realizará uma série de webinários para apresentar experiências de utilização de fontes de dados alternativos na produção de indicadores confiáveis. O primeiro seminário será em 15 de março, às 13h, e abordará...',
      data_publicacao: formattedDate,
      produto_id: 0,
      produtos: '',
      editorias: 'ibge',
      imagens: '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_03\\/ENCE_HUB_Thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_03\\/ENCE_HUB_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
      produtos_relacionados: '',
      destaque: true,
      link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39351-webinarios-do-hub-regional-para-big-data-discutem-experimentos-com-dados-alternativos.html',
    }
  ]
};

export default oneNew;
