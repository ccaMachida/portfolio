// drawer.jsでlet linkPathは読み込み済み

const footerInfo = {
    template: `
<footer>
<img src="images/taiwanFlagPC.png" class="footFlag" alt="フッター国旗">
<div class="pcFoot">
  <nav>
    <ul>
      <li class="footer"><a href="${linkPath}index.html">TOPへもどる</a></li>
      <li class="footer"><a href="${linkPath}taipei/index.html">台北</a></li>
      <li class="footer"><a href="${linkPath}taichu/index.html">台中</a></li>
      <li class="footer"><a href="${linkPath}tainan/index.html">台南</a></li>
      <li class="footer"><a>当サイトのポリシー</a></li>
      <li class="footer"><a>お問い合わせ</a></li>
    </ul>
  </nav>
  <div class="footImage">
    <img class="footLogo" src="images/logoFooterPC.svg" alt="フッターロゴ">
    <div class="footSns">
      <a><img src="images/iconFb.svg" class="snsIcon" alt="facebook"></a>
      <a><img src="images/iconInsta.svg" class="snsIcon" alt="instagram"></a>
      <a><img src="images/iconTwi.svg" class="snsIcon" alt="twitter"></a>
    </div>
  </div>
  <div class="copyRight">
    <p>Copyright&ensp;(C)&ensp;2023&ensp;TAIWAN.traveler.cc</p>
  </div>
</div>
</footer>
`
}