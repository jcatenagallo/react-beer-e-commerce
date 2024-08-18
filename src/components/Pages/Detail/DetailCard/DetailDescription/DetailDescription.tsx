import { useMemo, useState } from 'react';
import tw from 'twin.macro';

const StyledDescriptionWrapper = tw.div`
flex
flex-col
gap-2
mb-[22px]
`;

const StyledDescriptionTitle = tw.h3`
font-bold
text-darks-font
text-base
`;

const StyledDescription = tw.p`
text-sm
font-normal
text-grays-font
`;

const StyledInlineButton = tw.button`
text-orange
font-bold
`;

const DetailDescription = () => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true);
  const completeDescription =
    'Selling imported beer in the US with nearly 60 million cases in annual sales, growing more than 15 million cases over the past 2 years. A full flavored Mexican lager consistently delivering ';

  const trucatedDescription = useMemo(
    () => `${completeDescription.substring(0, 170)} ... `,
    [completeDescription],
  );

  return (
    <StyledDescriptionWrapper>
      <StyledDescriptionTitle>Description</StyledDescriptionTitle>
      <StyledDescription>
        {isTruncated ? trucatedDescription : completeDescription}
        <StyledInlineButton onClick={() => setIsTruncated((prev: boolean) => !prev)}>
          {isTruncated ? 'Read more' : ` Show less`}
        </StyledInlineButton>
      </StyledDescription>
    </StyledDescriptionWrapper>
  );
};

export default DetailDescription;
