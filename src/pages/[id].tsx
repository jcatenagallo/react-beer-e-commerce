import { GetServerSideProps } from 'next';
import tw from 'twin.macro';

import DetailHeader from '@/components/Pages/Detail/DetailHeader';

const StyledWrapper = tw.div`
flex
flex-col
relative
overflow-hidden
px-6
`;

type Props = {
  id: string;
};

export default function DetailPage({ id }: Props) {
  return (
    <StyledWrapper>
      <DetailHeader />
      <h1>Detail Page {id}</h1>
    </StyledWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  res.setHeader('Cache-Control', 'no-store');

  return {
    props: {
      id: params?.id,
    },
  };
};
