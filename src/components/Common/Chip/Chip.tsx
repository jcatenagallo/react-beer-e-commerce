import tw, { styled } from 'twin.macro';

const StyledWrapper = styled.button<{ isSelected?: boolean }>`
  ${tw`
flex
border
border-grays-font
rounded-[15px]
px-[15px]
h-[31px]
items-center
text-orange
`}

  ${({ isSelected }) => isSelected && tw`border-orange`}
`;

const StyledChipLabel = styled.label<{ isSelected?: boolean }>`
  ${tw`
text-sm
leading-[18px]
text-grays-font
`}

  ${({ isSelected }) => isSelected && tw`text-orange`}
`;

type Props = {
  label: string;
  onClick?: () => void;
  isSelected?: boolean;
};

const Chip = ({ label, onClick, isSelected }: Props) => {
  return (
    <StyledWrapper isSelected={isSelected} onClick={onClick}>
      <StyledChipLabel isSelected={isSelected}>{label}</StyledChipLabel>
    </StyledWrapper>
  );
};

export default Chip;
