import { ApiReturn } from '../../@types/ApiReturn';
import UnfilteredList from './UnfilteredList';

const SecondPageList: ApiReturn = {
  ...UnfilteredList,
  items: UnfilteredList.items.map((item) => ({
    ...item,
    titulo: `Segunda página ${item.titulo}`,
  })) };

export default SecondPageList;
