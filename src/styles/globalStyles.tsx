import { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Inter } from 'next/font/google';
import tw, { GlobalStyles as BaseStyles, styled } from 'twin.macro';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const StyledMain = styled.div`
  ${tw`
    bg-creams-background
  `}
`;

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`
      w-full
      antialiased
      font-sans
      bg-creams-background
    `,
  },
});

type Props = {
  children: ReactNode;
};

const GlobalStyles = ({ children }: Props) => (
  <StyledMain className={`${inter.variable} font-sans`}>
    <BaseStyles />
    <CustomStyles />
    {children}
  </StyledMain>
);

export default GlobalStyles;
