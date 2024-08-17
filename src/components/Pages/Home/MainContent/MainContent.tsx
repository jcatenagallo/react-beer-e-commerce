import tw from 'twin.macro';

import ProductList from '@/components/Common/ProductList';

const StyledWrapper = tw.ul`
flex
flex-col
gap-[17px]
`;

const StyledTitle = tw.h3`
text-lg
font-bold
text-darks-font
`;

const MainContent = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Our Product</StyledTitle>
      <ProductList />
    </StyledWrapper>
  );
};

export default MainContent;
