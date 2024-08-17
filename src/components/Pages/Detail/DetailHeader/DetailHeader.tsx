import tw from 'twin.macro';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

const StyledWrapper = tw.header`
flex
pt-10
pb-6
justify-between
bg-transparent
items-center
`;

const StyledButtonIcon = tw.button`
cursor-pointer
bg-white
rounded-xl
p-2
`;

const StyledTitle = tw.h2`
text-lg
text-darks-font
font-bold
`;

const DetailHeader = () => {
  return (
    <StyledWrapper>
      <StyledButtonIcon>
        <ArrowLeftIcon className="h-6 w-6 text-darks-font" />
      </StyledButtonIcon>
      <StyledTitle>Detail</StyledTitle>
      <StyledButtonIcon>
        <EllipsisHorizontalIcon className="h-6 w-6 text-darks-font" />
      </StyledButtonIcon>
    </StyledWrapper>
  );
};

export default DetailHeader;
