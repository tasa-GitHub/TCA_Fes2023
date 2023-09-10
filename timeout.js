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

const iframeElem = document.getElementsByTagName('iframe');

const iframeDocument = iframeElem[0].contentDocument || iframeElem[0].contentWindow.document;

const elem = iframeDocument.getElementsById("unity-canvas")

window.addEventListener("load", () => {
  WATCHEVENTS.forEach((type) => {
      elem.addEventListener(type, () => {
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