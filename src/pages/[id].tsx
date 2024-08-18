import { GetServerSideProps } from 'next';
import tw from 'twin.macro';
import Image from 'next/image';

import DetailHeader from '@/components/Pages/Detail/DetailHeader';
import { Beer } from '@/assets/images';
import DetailCard from '@/components/Pages/Detail/DetailCard';

const StyledWrapper = tw.div`
flex
flex-col
relative
overflow-hidden
justify-center
items-center
h-dvh
`;

export default function DetailPage() {
  return (
    <StyledWrapper>
      <DetailHeader />
      <Image alt={`product`} height={240} src={Beer} width={240} />
      <DetailCard />
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
