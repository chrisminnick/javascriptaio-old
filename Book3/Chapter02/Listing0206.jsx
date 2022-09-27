import Header from './Header';

function WelcomeScreen({ loggedIn }) {
  return (
    <div>
      {loggedIn && <Header />}
      Note: if you don't see the welcome message, you're not logged in.
    </div>
  );
}

export default WelcomeScreen;
