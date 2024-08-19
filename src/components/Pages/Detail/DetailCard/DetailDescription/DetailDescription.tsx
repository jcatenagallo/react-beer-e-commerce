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

type Props = {
  description: string;
};

const DetailDescription = ({ description }: Props) => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true);

  const trucatedDescription = useMemo(() => `${description.substring(0, 170)} ... `, [description]);

  const completeDescription = useMemo(() => `${description} `, [description]);

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
