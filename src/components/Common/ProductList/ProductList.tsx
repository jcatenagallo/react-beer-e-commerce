import tw from 'twin.macro';

import ProductCard from '../ProductCard';

const StyledWrapper = tw.ul`
flex
flex-wrap
gap-[13px]
`;

const ProductList = () => {
  return (
    <StyledWrapper>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </StyledWrapper>
  );
};

export default ProductList;
