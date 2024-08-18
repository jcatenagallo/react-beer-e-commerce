import tw from 'twin.macro';

import SizeSelector from './SizeSelector';
import DetailFooter from './DetailFooter';
import DetailDescription from './DetailDescription';

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

const DetailCard = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledTitle>Modelo</StyledTitle>
        <StyledPrice>$26.40</StyledPrice>
      </StyledHeader>
      <StyledSubTitle>Origin: Import I</StyledSubTitle>
      <DetailDescription />
      <SizeSelector />
      <DetailFooter />
    </StyledWrapper>
  );
};

export default DetailCard;
