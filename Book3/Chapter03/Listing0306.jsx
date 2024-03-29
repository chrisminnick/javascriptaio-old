import Header from './Header';

function Welcome({ loggedIn }) {
  return (
    <div>
      {loggedIn && <Header />}
      Note: if you don't see the welcome message, you're not logged in.
    </div>
  );
}

export default Welcome;
