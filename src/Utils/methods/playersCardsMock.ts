export const cardsUnder21 = [
  {
    code: 'KH',
    image: 'https://deckofcardsapi.com/static/img/KH.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/KH.svg',
      png: 'https://deckofcardsapi.com/static/img/KH.png',
    },
    value: 'KING',
    suit: 'HEARTS',
    id: '6482e2d2-0039-4894-a887-003500ad089d',
  },
  {
    code: 'QC',
    image: 'https://deckofcardsapi.com/static/img/QC.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/QC.svg',
      png: 'https://deckofcardsapi.com/static/img/QC.png',
    },
    value: 'QUEEN',
    suit: 'CLUBS',
    id: '30a2b168-12a6-4950-a942-bd10dfe51ea4',
  },
  {
    code: '7H',
    image: 'https://deckofcardsapi.com/static/img/7H.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/7H.svg',
      png: 'https://deckofcardsapi.com/static/img/7H.png',
    },
    value: '7',
    suit: 'HEARTS',
    id: '56047455-7785-4df9-ad17-63021503da4d',
  },
  {
    code: 'KS',
    image: 'https://deckofcardsapi.com/static/img/KS.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/KS.svg',
      png: 'https://deckofcardsapi.com/static/img/KS.png',
    },
    value: 'KING',
    suit: 'SPADES',
    id: 'ba7ba517-be02-46ad-99e9-48dc1dbdef3d',
  },
];

export const cardsOver21 = [
  {
    code: '8C',
    image: 'https://deckofcardsapi.com/static/img/8C.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/8C.svg',
      png: 'https://deckofcardsapi.com/static/img/8C.png',
    },
    value: '8',
    suit: 'CLUBS',
    id: '097a2b9a-6bd3-434e-ab37-24b7a9d356db',
  },
  {
    code: '9H',
    image: 'https://deckofcardsapi.com/static/img/9H.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/9H.svg',
      png: 'https://deckofcardsapi.com/static/img/9H.png',
    },
    value: '9',
    suit: 'HEARTS',
    id: '361040b2-e7da-4fd7-af0e-d81a851b462c',
  },
  {
    code: 'JS',
    image: 'https://deckofcardsapi.com/static/img/JS.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/JS.svg',
      png: 'https://deckofcardsapi.com/static/img/JS.png',
    },
    value: 'JACK',
    suit: 'SPADES',
    id: '91fda1f7-5b34-42a8-bba8-a604257a605c',
  },
  {
    code: 'QD',
    image: 'https://deckofcardsapi.com/static/img/QD.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/QD.svg',
      png: 'https://deckofcardsapi.com/static/img/QD.png',
    },
    value: 'QUEEN',
    suit: 'DIAMONDS',
    id: '1d279c4c-593f-49f5-a807-ffe8f47472ac',
  },
];

export const cardsEqual21 = [
  {
    code: '8C',
    image: 'https://deckofcardsapi.com/static/img/8C.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/8C.svg',
      png: 'https://deckofcardsapi.com/static/img/8C.png',
    },
    value: '8',
    suit: 'CLUBS',
    id: '097a2b9a-6bd3-434e-ab37-24b7a9d356db',
  },
  {
    code: '9H',
    image: 'https://deckofcardsapi.com/static/img/9H.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/9H.svg',
      png: 'https://deckofcardsapi.com/static/img/9H.png',
    },
    value: '9',
    suit: 'HEARTS',
    id: '361040b2-e7da-4fd7-af0e-d81a851b462c',
  },
  {
    code: 'JS',
    image: 'https://deckofcardsapi.com/static/img/JS.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/JS.svg',
      png: 'https://deckofcardsapi.com/static/img/JS.png',
    },
    value: 'JACK',
    suit: 'SPADES',
    id: '91fda1f7-5b34-42a8-bba8-a604257a605c',
  },
  {
    code: 'QD',
    image: 'https://deckofcardsapi.com/static/img/QD.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/QD.svg',
      png: 'https://deckofcardsapi.com/static/img/QD.png',
    },
    value: 'JACK',
    suit: 'DIAMONDS',
    id: '1d279c4c-593f-49f5-a807-ffe8f47472ac',
  },
];

export const mockedPlayers = [
  {
    id: 'b8cb208c-286c-4d6b-b3ae-83495a18b045',
    cards: cardsUnder21,
    points: 18,
    status: 'passed',
    index: 0,
  },
  {
    id: 'eb7ae352-a15b-486f-b8df-bcaaf746a056',
    cards: cardsOver21,
    points: 22,
    status: 'lost',
    index: 1,
  },
  {
    id: '11aded7d-22df-4306-b95e-28cf79068b3c',
    cards: cardsEqual21,
    points: 21,
    status: 'won',
    index: 2,
  },
];

export const mockedPlayers2 = [
  {
    id: 'b8cb208c-286c-4d6b-b3ae-83495a18b045',
    cards: cardsOver21,
    points: 22,
    status: 'lost',
    index: 0,
  },
  {
    id: 'eb7ae352-a15b-486f-b8df-bcaaf746a056',
    cards: cardsOver21,
    points: 22,
    status: 'lost',
    index: 1,
  },
  {
    id: '11aded7d-22df-4306-b95e-28cf79068b3c',
    cards: cardsEqual21,
    points: 21,
    status: 'won',
    index: 2,
  },
];
