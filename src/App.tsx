import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import UserLookup from './components/UserLookup';
import { fetchUserProfile } from './service/GitHubApiService';

function App() {
  return (
    <div className="App">
      <UserLookup />
    </div>
  );
}

export default App;
