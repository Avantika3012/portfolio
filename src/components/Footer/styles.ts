import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
  ${tw`bg-gray-100 border-t border-gray-200 py-4`};
`;

export const Links = styled.div`
  ${tw` flex items-center justify-center w-full`};

  button {
    ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
  }

`;

