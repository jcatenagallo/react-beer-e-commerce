import tw from 'twin.macro';
import { Dispatch, SetStateAction, useState } from 'react';

import Chip from '@/components/Common/Chip';

const StyledWrapper = tw.div`
flex
flex-col
gap-[13px]
mb-[50px]
`;

const StyledTitle = tw.h3`
text-lg
font-bold
`;

const StyledChipsWrapper = tw.div`
flex
gap-4
flex-wrap
`;

type Props = {
  sizesData: { name: string; code: string }[];
  selectedSize: number;
  setSelectedSize: Dispatch<SetStateAction<number>>;
};

const SizeSelector = ({ sizesData, selectedSize, setSelectedSize }: Props) => {
  return (
    <StyledWrapper>
      <StyledTitle>Size</StyledTitle>
      <StyledChipsWrapper>
        {sizesData.map(({ name, code }) => {
          const parsedCode = parseFloat(code);

          return (
            <Chip
              key={code}
              isSelected={parsedCode === selectedSize}
              label={name}
              onClick={() => setSelectedSize(parsedCode)}
            />
          );
        })}
      </StyledChipsWrapper>
    </StyledWrapper>
  );
};

export default SizeSelector;
