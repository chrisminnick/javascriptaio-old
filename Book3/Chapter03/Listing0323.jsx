import './App.css';

import useRepos from './components/Chapter03/useGitHubRepos';

function App() {
  const [repos, isLoading] = useRepos('facebook');
  const reposList = repos.map((repo, index) => (
    <li key={index}>
      <a href={repo.clone_url}>{repo.name}</a>
    </li>
  ));
  return <div>{isLoading ? 'Loading...' : reposList}</div>;
}

export default App;
