import axios from 'axios';
import {useQuery} from 'react-query';
// @ts-ignore
import {BATIK_KITA_BASE_API} from '@env';

console.log(BATIK_KITA_BASE_API);

export interface BatikListItemDTO {
  id: number;
  nama_batik: string;
  daerah_batik: string;
  makna_batik: string;
  harga_rendah: number;
  harga_tinggi: number;
  hitung_view: number;
  link_batik: string;
}

export interface BatikListDTO {
  hasil: BatikListItemDTO[];
}

const instance = axios.create({
  baseURL: BATIK_KITA_BASE_API,
  timeout: 50000,
});

export const useBatiksQuery = () =>
  useQuery('all-batik', () =>
    instance.get<BatikListDTO>('index.php/batik/all'),
  );
