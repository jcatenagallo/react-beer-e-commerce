import { StaticImageData } from 'next/image';

import { Budweiser, Corona, Miller, ModeloEspecial } from '@/assets/images';
import {
  BudweiserDetail,
  CoronaDetail,
  MillerDetail,
  ModeloEspecialDetail,
} from '@/assets/images/detail';

export const PRODUCT_IMAGES: { [id: number]: StaticImageData } = {
  127: ModeloEspecial,
  374: Miller,
  743: Corona,
  841: Budweiser,
};

export const PRODUCT_DETAIL_IMAGES: { [id: number]: StaticImageData } = {
  127: ModeloEspecialDetail,
  374: MillerDetail,
  743: CoronaDetail,
  841: BudweiserDetail,
};
