export default function Search2Page() {
    return (<>
    <head>
      <title>アコーディオンメニュー</title>
      <link rel="stylesheet" href="/search2.css" />
    </head>
    <h1>検索</h1>
    <div class="accordion">
        <div class="accordion-item">
          <button class="accordion-button">セクション 1</button>
          <div class="accordion-content">
            <p>セクション1の内容です。</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-button">セクション 2</button>
          <div class="accordion-content">
            <p>セクション2の内容です。</p>
          </div>
        </div>
        <details class="accordion">
          <summary class="details-summary js-details-summary layer1"><span class="accordion-button"></span>1つ目のアコーディオンのタイトル</summary>
          <div class="details-content js-details-content layer1">
            <details class="details layer2">
              <summary class="details-summary js-details-summary layer2"><span class="btn"></span>A</summary>
              <div class="details-content js-details-content layer2">
                <p class="details-content-item layer3">A-a</p>
                <p class="details-content-item layer3">A-b</p>
              </div>
            </details>
          </div>
        </details>
    </div>
    </>);
}