import tw from 'twin.macro';
import Image from 'next/image';
import { PlusIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

import { Beer } from '@/assets/images';

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

const ProductCard = () => {
  return (
    <StyledWrapper>
      <StyleTitle>Card</StyleTitle>
      <Image alt={`product`} height={122} src={Beer} width={122} />
      <StyledPrice>$28.65</StyledPrice>
      <StyledAddButton>
        <PlusIcon className="h-6 w-6 text-white" />
      </StyledAddButton>
      <StyledRating>
        <StarIcon className="h-3 w-3 text-orange" />
        <StyledRatingLabel>4.9</StyledRatingLabel>
      </StyledRating>
    </StyledWrapper>
  );
};

export default ProductCard;
