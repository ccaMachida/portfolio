'use strict';

const wrap = document.getElementById('wrapper');
const loadDisp = document.createElement('div');
const loadLogo = document.createElement('div');

// #wrapperを非表示にする
wrap.setAttribute('style','display:none;');

// ローディング画面の表示領域を作成
document.body.appendChild(loadDisp).appendChild(loadLogo);

// ローディング画面の要素にid属性を付与して表示
loadDisp.setAttribute('id','loadingArea');
loadLogo.setAttribute('id','loadingLogo');

// 1秒経過後、wrapper要素のv-cloak属性を削除し、
// さらに3秒後にwrapper要素の非表示を解除、ローディング画面を要素ごと削除
setTimeout(function() {
  wrap.removeAttribute('v-cloak');
} , 1000);
setTimeout(function() {
  wrap.removeAttribute('style');
  document.getElementById('loadingArea').remove();
} , 3000);
