// 配列の中にオブジェクトを入れてさらに配列を入れる
const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲームは次の内どれ？',
    answers: [
  'スーパファミコン',
  'プレイステーション2',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
  ],
  correct:'ニンテンドーDS'
  },{    
    question: 'アイアンマンの俳優の名前は？',
    answers:[
      'ロバート・ダウニー・ジュニア',
      'ブラッド・ピッド',
      'モーガン・フリーマン',
      'クリスティーナ・リッチ'
  ],
  correct:'ロバート・ダウニー・ジュニア'

  },{    
    question: 'キャプテン・アメリカの武器は？',
    answers: [
      '剣',
      '爆弾',
      'ハンマー',
      '盾'
  ],
  correct:'盾'

  },{
    question: 'マイティ・ソーの出身は？',
    answers: [
      'ミッドガルド',
      'アスガルド',
      'ヨトゥンヘイム',
      '修羅の国'
  ],
  correct:'アスガルド'
  }
];


const quizLength =quiz.length;
let quizIndex = 0;
let score = 0;


// const question = 'ゲーム市場、最も売れたゲームは次の内どれ？'
// const answers = [
//   'スーパファミコン',
//   'プレイステーション2',
//   'ニンテンドースイッチ',
//   'ニンテンドーDS'
// ];
// const correct ='ニンテンドーDS';

// HTMLのオブジェクトからとってくるときは$をつけるルールがある
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  // これは関数(オブジェクト)
  // textContentはHTMLが持っているテキスト情報を取ってくるプロパティ = で書き換えられる
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

  
  
  // 上記をリファクタリング
    // $button[0].textContent = answers[0];
    // $button[1].textContent = answers[1];
    // $button[2].textContent = answers[2];
    // $button[3].textContent = answers[3];
    


const clickHandler = (e) => {
  // eはイベントのオブジェクト e.targetはクリックされた要素に対してなにかしたいときに使う
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  }else{
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了です！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

// ボタンをクリックしたら正誤判定(リファクタリング)
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e) =>{
  clickHandler(e);
});
  handlerIndex++;
}











// $button[0].addEventListener('click',() =>{
//   if(correct ===$button[0].textContent){
//     window.alert('正解');
//   }else{
//     window.alert('不正解');
//   }
// });

// $button[1].addEventListener('click',() =>{
//   if(correct ===$button[1].textContent){
//     window.alert('正解');
//   }else{
//     window.alert('不正解');
//   }
// });

// $button[2].addEventListener('click',() =>{
//   if(correct ===$button[2].textContent){
//     window.alert('正解');
//   }else{
//     window.alert('不正解');
//   }
// });

// $button[3].addEventListener('click',() =>{
//   if(correct ===$button[3].textContent){
//     window.alert('正解');
//   }else{
//     window.alert('不正解');
//   }
// });

