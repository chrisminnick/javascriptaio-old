import Header from './Header';

function Welcome({ loggedIn, isHuman }) {
  return (
    <div>
      {loggedIn && isHuman && <Header />}
      Note: if you don't see the welcome message, you're not logged in or you're
      a bot.
    </div>
  );
}

export default Welcome;
