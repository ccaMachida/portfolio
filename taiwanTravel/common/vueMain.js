/* 共通部品をコンポーネント化して管理 */
const wrapper = Vue.createApp({
    components: {
        'drawer': drawer,           // （SP用）ドロワーのコンポーネント
        // （PC用）グローバルナビのコンポーネント
        'footerinfo': footerInfo,   // フッター情報のコンポーネント
        'backtop': backTop          // トップへ戻るボタンのコンポーネント
    }
})

const vm = wrapper.mount('#wrapper');