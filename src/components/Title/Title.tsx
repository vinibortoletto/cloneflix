// Libs
import React from 'react';

// Styles
import * as S from './Title.styles';

type Props = { text: string };

export default function Title({ text }: Props) {
  return <S.Container>{text}</S.Container>;
}
