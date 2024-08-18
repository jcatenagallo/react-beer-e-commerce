import tw from 'twin.macro';
import { useState } from 'react';

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
`;

const sizesData = [
  {
    id: '1',
    label: 'S',
  },
  {
    id: '2',
    label: 'M',
  },
  {
    id: '3',
    label: 'L',
  },
  {
    id: '4',
    label: 'XL',
  },
  {
    id: '5',
    label: 'XXL',
  },
];
const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState<string>('1');

  return (
    <StyledWrapper>
      <StyledTitle>Size</StyledTitle>
      <StyledChipsWrapper>
        {sizesData.map((size) => (
          <Chip
            key={size.id}
            isSelected={size.id === selectedSize}
            label={size.label}
            onClick={() => setSelectedSize(size.id)}
          />
        ))}
      </StyledChipsWrapper>
    </StyledWrapper>
  );
};

export default SizeSelector;
