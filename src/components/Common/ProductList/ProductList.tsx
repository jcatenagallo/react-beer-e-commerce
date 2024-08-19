import tw from 'twin.macro';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import useGetProducts from '@/hooks/api/useGetProducts';

import ProductCard from '../ProductCard';

const StyledSkeleton = tw(Skeleton)`
h-[203px]
w-[155px]
rounded-2xl
`;

const StyledWrapper = tw.ul`
flex
flex-wrap
gap-[13px]
`;

const ProductList = () => {
  const { data, isLoading } = useGetProducts();

  if (isLoading) {
    return (
      <StyledWrapper>
        {Array.from({ length: 4 }).map((_, index) => (
          <StyledSkeleton key={index} />
        ))}
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      {data?.map((product) => <ProductCard key={product.id} data={product} />)}
    </StyledWrapper>
  );
};

export default ProductList;
