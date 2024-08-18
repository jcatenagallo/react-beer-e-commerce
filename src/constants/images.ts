import { StaticImageData } from 'next/image';

import { Budweiser, Corona, Miller, ModeloEspecial } from '@/assets/images';

export const PRODUCT_IMAGES: { [id: number]: StaticImageData } = {
  127: ModeloEspecial,
  374: Miller,
  743: Corona,
  841: Budweiser,
};
