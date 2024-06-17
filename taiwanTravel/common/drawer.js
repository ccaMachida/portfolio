const drawer = {
    template: `
<!-- ↓ドロワー↓ -->
<div class="drawer">
  <a data-bs-toggle="offcanvas" data-bs-target="#drawer">
    <img src="images/drawerOpen.svg" class="dW" alt="ドロワーアイコン">
  </a>
  <header class="offcanvas offcanvas-end" id="drawer">
    <a data-bs-dismiss="offcanvas">
      <img src="images/drawerClose.svg" class="dW" alt="ドロワーアイコン">
    </a>
    <nav class="menu">
      <div class="offcanvas-header">
        <img src="images/logoHeaderSP.svg" class="headLogo" alt="ヘッダーロゴ">
      </div>
      <div class="offcanvas-body menuInnner">
        <p class="menuTitle">Menu</p>
        <a href="index.html" class="mb-4">TOP</a>
        <ul>
          <li class="mb-2"><a href="taipei/index.html">台北</a></li>
          <li class="mb-2"><a href="taichu/index.html">台中</a></li>
          <li class="mb-4"><a href="tainan/index.html">台南</a></li>
        </ul>
        <a href="" class="mb-4">当サイトのポリシー</a>
        <a href="" class="">お問い合わせ</a>
      </div>
    </nav>
  </header>
</div>
<!-- ↑ドロワー↑ -->
`
}