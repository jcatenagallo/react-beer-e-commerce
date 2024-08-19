import tw from 'twin.macro';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import { useMemo, useState } from 'react';

import useGetStockPriceById from '@/hooks/api/useGetPriceStockById';
import { Product } from '@/types/products';

import SizeSelector from './SizeSelector';
import DetailFooter from './DetailFooter';
import DetailDescription from './DetailDescription';

const StyledSkeleton = tw(Skeleton)`
rounded-2xl
w-full
h-full
min-w-[140px]
min-h-[140px]
`;

const StyledWrapper = tw.div`
h-fit
w-full
bottom-0
flex
flex-col
bg-white
rounded-t-[48px]
pt-[45px]
px-6
mt-auto
overflow-y-auto
`;

const StyledTitle = tw.h2`
font-bold
text-2xl
text-darks-secondaryFont
`;

const StyledPrice = tw(StyledTitle)`
text-orange
`;

const StyledHeader = tw.div`
flex
justify-between
mt-1
`;

const StyledSubTitle = tw.h5`
font-normal
text-sm 
mb-[29px]
text-grays-font
`;

type Props = {
  productData: Product;
  isLoading: boolean;
};

const DetailCard = ({ productData, isLoading }: Props) => {
  const parsedSkuCode = parseFloat(productData.skus[0].code);

  const [selectedSize, setSelectedSize] = useState<number>(parsedSkuCode);

  const { data: stockPriceData } = useGetStockPriceById(selectedSize, { refetchInterval: 5000 });

  const price = useMemo(() => {
    const priceNumber = (stockPriceData?.price || 0) / 100;

    return `$${priceNumber.toFixed(2)}`;
  }, [stockPriceData]);

  return (
    <StyledWrapper>
      {isLoading ? (
        <StyledSkeleton />
      ) : (
        <>
          <StyledHeader>
            <StyledTitle>{productData.brand}</StyledTitle>
            <StyledPrice>{price}</StyledPrice>
          </StyledHeader>
          <StyledSubTitle>{`Origin: ${productData.origin}`}</StyledSubTitle>
          <DetailDescription description={productData.information} />
          <SizeSelector
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            sizesData={productData.skus}
          />
        </>
      )}
      <DetailFooter />
    </StyledWrapper>
  );
};

export default DetailCard;
