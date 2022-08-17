export default function Bing() {
  return (
    <Homepage>
      <TopNav />
      <SearchBox />
      <NewsImageScroller />
      <div>
        <div class="leftColumn">
          <TopStories />
        </div>
        <div class="rightColumn">
          <Weather />
          <Sports />
        </div>
      </div>
    </Homepage>
  );
}
