import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Creatives = styled.div`
  ${tw`max-w-screen-sm mx-auto w-full px-0 sm:px-16 mb-4`};
`;

export const Creative = styled.div`
  ${tw`flex flex-col items-center text-center mt-4`};
`;

export const Title = styled.h3`
  ${tw`font-semibold my-4`};
`;

export const Frame = styled.iframe`
  ${tw`border-4 border-white mx-auto border border-teal-400`};
`;
