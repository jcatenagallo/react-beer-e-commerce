import tw from 'twin.macro';

import useGetProducts from '@/hooks/api/useGetProducts';

import ProductCard from '../ProductCard';

const StyledWrapper = tw.ul`
flex
flex-wrap
gap-[13px]
`;

const ProductList = () => {
  const { data } = useGetProducts();

  return (
    <StyledWrapper>
      {data?.map((product) => <ProductCard key={product.id} data={product} />)}
    </StyledWrapper>
  );
};

export default ProductList;
