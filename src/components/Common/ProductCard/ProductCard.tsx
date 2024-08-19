import tw from 'twin.macro';
import Image from 'next/image';
import { PlusIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useMemo } from 'react';

import { Product } from '@/types/products';
import { PRODUCT_IMAGES } from '@/constants/images';
import { ModeloEspecial } from '@/assets/images';
import { PRICES_BY_ID } from '@/constants/prices';

const StyledClickableArea = tw.div`
cursor-pointer
relative
`;

const StyledWrapper = tw.div`
bg-white
rounded-xl
px-4
pt-4
pb-2
flex
flex-col
relative
min-w-[155px]
`;

const StyleTitle = tw.h3`
font-medium
text-base
text-darks-font
text-center
pb-[5px]
leading-4
`;

const StyledPrice = tw.label`
text-base
text-darks-font
font-medium
pt-3
leading-4
`;

const StyledAddButton = tw.button`
bg-orange
w-fit
absolute
bottom-0
right-0
p-2
rounded-ss-lg
rounded-ee-lg
`;

const StyledRating = tw.div`
flex
gap-1.5
absolute
bottom-8
`;

const StyledRatingLabel = tw.label`
text-xs
leading-3
font-medium
text-grays-smooth
`;

type Props = {
  data: Product;
};

const ProductCard = ({ data }: Props) => {
  const productImage = PRODUCT_IMAGES?.[data.id] || ModeloEspecial;
  const productPrice = useMemo(() => `$${PRICES_BY_ID?.[data.id] || 0}`, [data.id]);
  const handleAddToCart = () => window.alert(`${data.brand} added to cart!`);

  return (
    <StyledClickableArea>
      <Link href={`/${data.id}`}>
        <StyledWrapper>
          <StyleTitle>{data.brand}</StyleTitle>
          <Image
            alt={`product`}
            height={122}
            src={productImage}
            style={{ maxWidth: '122px', maxHeight: '122px', objectFit: 'contain' }}
            width={122}
          />
          <StyledPrice>{productPrice}</StyledPrice>
          <StyledRating>
            <StarIcon className="h-3 w-3 text-orange" />
            <StyledRatingLabel>{data.abv.slice(0, -1)}</StyledRatingLabel>
          </StyledRating>
        </StyledWrapper>
      </Link>

      <StyledAddButton onClick={handleAddToCart}>
        <PlusIcon className="h-6 w-6 text-white" />
      </StyledAddButton>
    </StyledClickableArea>
  );
};

export default ProductCard;
