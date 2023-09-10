let FLAG = false;
let LASTTIME = Date.now();

const WATCHEVENTS = [
  'scroll',       // ウィンドウをスクロール
  'resize',       // ウィンドウサイズを変更
  'click',        // マウスの左ボタンをクリック
  'contextmenu',  // マウスの右ボタンをクリック
  'mousemove',    // マウスポインターを移動
  'wheel',        // マウスのホイールを操作
  'keypress',     // キーボードを押下
  'touchstart',   // タッチ開始（スマホ）
  'touchend',     // タッチ終了（スマホ）
  'touchmove',    // タッチしながら移動（スマホ）
  'touchcancel'   // タッチをキャンセル（スマホ）
];

window.addEventListener("load", () => {
  WATCHEVENTS.forEach((type) => {
      window.addEventListener(type, () => {
      LASTTIME = Date.now();
      });
  });

  const timerId = setInterval(() => {
      FLAG = Date.now() - LASTTIME > 60 * 1000;

      if (FLAG) {
        clearInterval(timerId);
        window.location.href = "https://tasa-github.github.io/TCA_Fes2023/";
      }
  }, 1000);
});