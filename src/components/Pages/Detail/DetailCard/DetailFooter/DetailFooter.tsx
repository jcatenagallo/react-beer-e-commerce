import Image from 'next/image';
import tw from 'twin.macro';

import { IconBag } from '@/assets/icons';

const StyledDetailFooter = tw.footer`
flex
mt-[auto]
pb-[35px]
gap-6
sticky
bottom-0
bg-white
p-2
`;

const StyledGoToCartButton = tw.button`
p-[15px]
border
border-orange
rounded-xl
`;

const SytledAddToCartButton = tw.button`
bg-orange
text-white
text-base
font-medium
rounded-xl
w-full
`;

const DetailFooter = () => {
  return (
    <StyledDetailFooter>
      <StyledGoToCartButton>
        <Image alt="icon-bag" height={24} src={IconBag} width={24} />
      </StyledGoToCartButton>
      <SytledAddToCartButton>Add to cart</SytledAddToCartButton>
    </StyledDetailFooter>
  );
};

export default DetailFooter;
