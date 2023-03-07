const shopData = [
  {
    title: 'Hats',
    items: [
      {
        id: 1,
        name: '브라운 브림',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25000,
      },
      {
        id: 2,
        name: '블루 비니',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18000,
      },
      {
        id: 3,
        name: '브라운 카우보이',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35000,
      },
      {
        id: 4,
        name: '그레이 브림',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25000,
      },
      {
        id: 5,
        name: '그린 비니',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18000,
      },
      {
        id: 6,
        name: '팜 트리 캡',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14000,
      },
      {
        id: 7,
        name: '레드 비니',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18000,
      },
      {
        id: 8,
        name: '울프 캡',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14000,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16000,
      },
    ],
  },
  {
    title: 'Sneakers',
    items: [
      {
        id: 10,
        name: '아디다스 NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220000,
      },
      {
        id: 11,
        name: '아디다스 이지',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280000,
      },
      {
        id: 12,
        name: '블랙 컨버스',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110000,
      },
      {
        id: 13,
        name: '나이키 화이트 에어포스',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160000,
      },
      {
        id: 14,
        name: '나이키 레드 하이 탑',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160000,
      },
      {
        id: 15,
        name: '나이키 브라운 하이 탑',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160000,
      },
      {
        id: 16,
        name: '에어 조던 리미티드',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190000,
      },
      {
        id: 17,
        name: '팀버랜드',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200000,
      },
    ],
  },
  {
    title: 'Jackets',
    items: [
      {
        id: 18,
        name: '블랙진 시어링',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125000,
      },
      {
        id: 19,
        name: '블루 진 재킷',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90000,
      },
      {
        id: 20,
        name: '그레이 진 재킷',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90000,
      },
      {
        id: 21,
        name: '브라운 시어링',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165000,
      },
      {
        id: 22,
        name: '탄 트렌치',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185000,
      },
    ],
  },
  {
    title: 'Womens',
    items: [
      {
        id: 23,
        name: '블루 탱크탑',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25000,
      },
      {
        id: 24,
        name: '플로럴 블라우스',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20000,
      },
      {
        id: 25,
        name: '플로럴 드레스',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80000,
      },
      {
        id: 26,
        name: '레드 도트 드레스',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80000,
      },
      {
        id: 27,
        name: '스트라이프 스웨터',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45000,
      },
      {
        id: 28,
        name: '옐로우 트랙 슈트',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135000,
      },
      {
        id: 29,
        name: '화이트 블라우스',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20000,
      },
    ],
  },
  {
    title: 'Mens',
    items: [
      {
        id: 30,
        name: '카모 다운 베스트',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325000,
      },
      {
        id: 31,
        name: '플로럴 티셔츠',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20000,
      },
      {
        id: 32,
        name: '블랙 & 화이트 롱슬리브',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25000,
      },
      {
        id: 33,
        name: '핑크 티셔츠',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25000,
      },
      {
        id: 34,
        name: '진 롱 슬리브',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40000,
      },
      {
        id: 35,
        name: '버건디 티셔츠',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25000,
      },
    ],
  },
];

export default shopData;
