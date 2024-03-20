import { NewsType } from '../../@types/NewsType';
import HighlightedNews from '../../components/HighlightedNews';

const newsMock: NewsType = {
  id: 39508,
  tipo: 'Notícia',
  titulo: `IBGE realiza oficina para terceira turma do curso 
  “Políticas públicas na era digital: Dominando os dados do IBGE”`,
  introducao: `O IBGE apresentou nesta segunda-feira, 18, a terceira 
  turma da oficina com o
 tema “Políticas públicas na era digital: Dominando os dados do IBGE”, 
 com transmissão virtual, por meio do Webex, para mais de 200 participantes. 
 O curso é voltado para gestores...`,
  data_publicacao: '19/03/2024 17:35:00',
  produto_id: 0,
  produtos: '',
  editorias: 'ibge',
  imagens: {
    image_intro: 'images/agenciadenoticias/ibge/2024_03/Loja-Virtual_THUMB.jpg',
    image_intro_alt: '',
    image_intro_caption: '',
    image_fulltext: 'images/agenciadenoticias/ibge/2024_03/Loja-Virtual_HOME.jpg',
    image_fulltext_alt: '',
    image_fulltext_caption: '',
    float_intro: '',
    float_fulltext: '',
  },
  produtos_relacionados: '',
  destaque: true,
  link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39508-ibge-realiza-oficina-para-terceira-turma-do-curso-politicas-publicas-na-era-digital-dominando-os-dados-do-ibge.html',
};

function Home() {
  return (
    <HighlightedNews news={ newsMock } />
  );
}

export default Home;
