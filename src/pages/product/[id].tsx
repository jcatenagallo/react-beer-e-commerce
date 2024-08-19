import { GetServerSideProps } from 'next';
import tw from 'twin.macro';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import DetailHeader from '@/components/Pages/Detail/DetailHeader';
import DetailCard from '@/components/Pages/Detail/DetailCard';
import { PRODUCT_DETAIL_IMAGES } from '@/constants/images';
import { ModeloEspecialDetail } from '@/assets/images/detail';
import useGetProducts from '@/hooks/api/useGetProducts';

const StyledSkeleton = tw(Skeleton)`
rounded-2xl
w-full
h-full
max-h-[240px]
max-w-[240px]
min-w-[140px]
min-h-[140px]
`;

const StyledWrapper = tw.div`
flex
flex-col
relative
overflow-hidden
justify-center
items-center
h-dvh
`;

type Props = {
  id: string;
};

export default function DetailPage({ id }: Props) {
  const parsedId = parseFloat(id);
  const productImage = PRODUCT_DETAIL_IMAGES?.[parsedId] || ModeloEspecialDetail;
  const { data: allProductsData, isLoading } = useGetProducts();
  const productData = allProductsData?.find((product) => product.id === parsedId);

  if (!productData) return null;

  return (
    <StyledWrapper>
      <DetailHeader />
      {isLoading ? (
        <StyledSkeleton />
      ) : (
        <Image
          alt={`product`}
          src={productImage}
          style={{
            marginBottom: '10px',
            objectFit: 'contain',
            width: '100%',
            height: '100%',
            maxHeight: '240px',
            maxWidth: '240px',
            minWidth: '140px',
            minHeight: '140px',
          }}
        />
      )}
      <DetailCard isLoading={isLoading} productData={productData} />
    </StyledWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      id: params?.id,
    },
  };
};
