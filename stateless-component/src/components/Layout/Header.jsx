import { useState } from 'react';
import { SkipToContent, Nav } from '@/components';

export function Header() {
  const [navList] = useState([
    { id: 'item-1', text: '과자', to: '#snack' },
    { id: 'item-2', text: '호박', to: '#pumpkin' },
    { id: 'item-3', text: '아이스크림', to: '#icecream' },
    { id: 'item-4', text: '수박', to: '#watermelon' },
    { id: 'item-5', text: '치킨', to: '#chicken' },
  ]);

  return (
    <header>
      <h2>앱 헤더</h2>
      <SkipToContent to="#snack">과자</SkipToContent>
      <SkipToContent to="#pumpkin">호박</SkipToContent>
      <SkipToContent to="#icecream">아이스크림</SkipToContent>

      <Nav as="h3" headline="상품 목록" list={navList} />
    </header>
  );
}
