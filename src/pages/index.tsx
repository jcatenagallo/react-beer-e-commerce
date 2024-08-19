import tw from 'twin.macro';

import Header from '@/components/Common/Header';
import WelcomeMessage from '@/components/Pages/Home/WelcomeMessage';
import MainContent from '@/components/Pages/Home/MainContent';

const StyledWrapper = tw.div`
flex
flex-col
relative
overflow-hidden
px-6
`;

export default function Home() {
  return (
    <StyledWrapper>
      <Header />
      <WelcomeMessage />
      <MainContent />
    </StyledWrapper>
  );
}
