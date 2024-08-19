import tw from 'twin.macro';
import Image from 'next/image';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';

import { Avatar } from '@/assets/images';
import { showWindowAlert } from '@/utils/showWindowAlert';

const StyledWrapper = tw.header`
flex
pt-10
pb-6
justify-between
bg-transparent
`;

const StyledButtonIcon = tw.button`
cursor-pointer
bg-white
rounded-xl
p-2
`;

const Header = () => {
  return (
    <StyledWrapper>
      <StyledButtonIcon onClick={() => showWindowAlert('Open menu')}>
        <Bars3CenterLeftIcon className="h-6 w-6 text-darks-black" />
      </StyledButtonIcon>
      <button onClick={() => showWindowAlert('Open user profile page')}>
        <Image
          alt={`avatar`}
          height={40}
          src={Avatar}
          style={{
            objectFit: 'cover',
            borderRadius: '100px',
            maxWidth: '40px',
            maxHeight: '40px',
          }}
          width={40}
        />
      </button>
    </StyledWrapper>
  );
};

export default Header;
