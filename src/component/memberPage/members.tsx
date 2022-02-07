import React, { ReactNode } from 'react';
import MemberItem from './memberItem';

interface Props {
    children: ReactNode[];
  }

export default function Members({children}: Props) {
    return <MemberItem children={children}/>
}