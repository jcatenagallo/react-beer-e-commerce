import tw from 'twin.macro';

const StyledWrapper = tw.div`
pb-[15px]
flex
flex-col
gap-[5px]
`;

const StyledGreetings = tw.label`
text-grays-label
font-normal
text-base
`;

const StyledWelcomeMessage = tw.h2`
text-darks-font
font-bold
text-2xl
`;

const WelcomeMessage = () => {
  return (
    <StyledWrapper>
      <StyledGreetings>Hi Mr. Michael,</StyledGreetings>
      <StyledWelcomeMessage>Welcome Back!</StyledWelcomeMessage>
    </StyledWrapper>
  );
};

export default WelcomeMessage;
