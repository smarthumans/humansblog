import { createMuiTheme } from '@material-ui/core';

export const TITLE="MEAL";

export const CONTENT_LISTS = [
  {
    id: 1,
    title: "水",
    content: `
    ランニングは全身運動です。下半身に注意が行きがちですが、全身をバランスよく動かすことができると、さらにスムーズに、速く、体を動かすことができるようになります。
    走るだけでも筋肉はつきますが、必要な筋肉を意識して鍛えると、けがの予防やスムーズな走りへとつながります。
    ダイエット効果を高めたいときも、筋トレとの組み合わせは有効です。筋トレで筋肉に刺激を入れ、基礎代謝を高めることで、日常生活で燃焼するカロリーの増加が期待できます。
    より効果的な組み合わせ方を知りたい方は合わせてチェックしてみて下さい。
    「筋トレと有酸素運動はどっちが先？組み合わせ方は？」
    `,
  },
  {
    id: 2,
    title: "プチファスティング",
    content: "test2",
  },
  {
    id: 3,
    title: "習慣作り",
    content: "test2",
  },
];

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F5F5F5',
    },
    secondary: {
      main: '#526071',
    },
  },
});