import tw from 'twin.macro';
import Link from 'next/link';

import ProductCard from '../ProductCard';

const StyledWrapper = tw.ul`
flex
flex-wrap
gap-[13px]
`;

const ProductList = () => {
  return (
    <StyledWrapper>
      <Link href="/1234">
        <ProductCard />
      </Link>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </StyledWrapper>
  );
};

export default ProductList;
