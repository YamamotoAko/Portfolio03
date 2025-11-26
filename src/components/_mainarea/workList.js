import html from '../../assets/html.png';
import css from '../../assets/css.png';
import scss from '../../assets/scss.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import vite from '../../assets/vite.png';
import figma from '../../assets/figma.png';

// 画像の呼び出し
// tokyoblog
import tokyo01 from './../../assets/images/tokyo01.png';
import tokyo02 from './../../assets/images/tokyo02.png';
import tokyo03 from './../../assets/images/tokyo03.png';
import tokyo04 from './../../assets/images/tokyo04.png';
import tokyo05 from './../../assets/images/tokyo05.png';
import tokyo06 from './../../assets/images/tokyo06.png';
import tokyo07 from './../../assets/images/tokyo07.png';

// pokeAPI
import poke01 from './../../assets/images/poke01.png';
import poke02 from './../../assets/images/poke02.png';
import poke03 from './../../assets/images/poke03.png';

// 化粧水LP
import lp01 from './../../assets/images/lp01.png';
import lp02 from './../../assets/images/lp02.png';
import lp03 from './../../assets/images/lp03.png';
import lp04 from './../../assets/images/lp04.png';
import lp05 from './../../assets/images/lp05.png';
import lp06 from './../../assets/images/lp06.png';
import lp07 from './../../assets/images/lp07.png';
import lp08 from './../../assets/images/lp08.png';
import lp09 from './../../assets/images/lp09.png';
import lp10 from './../../assets/images/lp10.png';
import lp11 from './../../assets/images/lp11.png';
import lp12 from './../../assets/images/lp12.png';
import lp13 from './../../assets/images/lp13.png';

// reactblog
import reactvlog01 from './../../assets/images/reactvlog01.png';
import reactvlog02 from './../../assets/images/reactvlog02.png';
import reactvlog03 from './../../assets/images/reactvlog03.png';
import reactvlog04 from './../../assets/images/reactvlog04.png';

// portfolio
import portfolio01 from './../../assets/images/portfolio01.png';

const workList = [
  {
    id: '01',
    name: 'ブログサイト',
    subName: '(Webサイト、自主制作)',
    text: '訓練2ヶ月目に初めて作ったホームページです。レスポンシブ対応させることを考えて、scssでデザインを組みました',
    firstImg: tokyo01,
    img: [tokyo01, tokyo02, tokyo03, tokyo04, tokyo05, tokyo06, tokyo07],
    skill: [html, css, scss, js],
    url: 'https://yamamotoako.github.io/obon_holiday/index.html',
    href: 'blog',
  },
  {
    id: '02',
    name: 'ポケモンゲーム',
    subName: '(Webサイト、自主制作)',
    text: 'PokeAPIを活用したポケモンの名前当てゲームです。PCでのプレイを想定し、快適な操作性を実現するため、カーソルの自動フォーカスを細かく設定しました。ページ読み込み時には回答入力欄にカーソルを自動配置し、Enterキーでの送信後は次の問題へ進むボタンにフォーカスが移動するようにしました。これにより、マウスに触れることなくキーボードのみでゲームを進められます。',
    firstImg: poke01,
    img: [poke01, poke02, poke03],
    skill: [html, css, scss, js],
    url: 'https://yamamotoako.github.io/PokeApp/',
    href: 'poke',
  },
  {
    id: '03',
    name: '化粧水LP(架空)',
    subName: '(Webサイト、自主制作)',
    text: '韓国の化粧品会社 Pure Dream(架空)の新商品のLPを制作しました。20代〜30代の社会人女性をターゲットとし、サイトを見にきた方に購入してもらえる動線を細かく考えました。',
    firstImg: lp01,
    img: [
      lp01,
      lp02,
      lp03,
      lp04,
      lp05,
      lp06,
      lp07,
      lp08,
      lp09,
      lp10,
      lp11,
      lp12,
      lp13,
    ],
    skill: [html, css, scss, js, figma],
    url: 'https://yamamotoako.github.io/2025_10_fictional_LP/',
    href: 'lp',
  },
  {
    id: '04',
    name: 'Reactブログサイト',
    subName: '(Webサイト、学校課題)',
    text: 'Reactを活用して開発したブログサイトです',
    firstImg: reactvlog01,
    img: [reactvlog01, reactvlog02, reactvlog03, reactvlog04],
    skill: [html, css, js, react, vite, figma],
    url: 'https://yamamotoako.github.io/reactBlogsite/',
    href: 'reactblog',
  },
  {
    id: '05',
    name: 'Portfolio',
    subName: '(Webサイト、自主制作)',
    text: '転職活動のためのポートフォリオを制作しました。ひと目見ただけで情報がすぐに入ってくるように分かりやすさを重視しました。シンプルなデザインの中にも細部にこだわり、美しさを感じてもらえるよう心がけました。',
    firstImg: portfolio01,
    img: [portfolio01],
    skill: [html, css, js, react, vite, figma],
    href: 'portfolio',
  },
];

export default workList;
