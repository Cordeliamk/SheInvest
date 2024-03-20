
import ReactDOM from 'react-dom';
import { useState, ChangeEvent, SyntheticEvent, useEffect} from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { searchCompanies } from './api';
import { CompanySearch } from './company';

function App() {
  const [search, setSearch] = useState<string>("");
  const[searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const[serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      // console.log(e);
  };

  const onPortfolioCreate = (e:SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
  if(typeof result === "string"){
    setServerError(result);
    console.log(result);
  } else if(Array.isArray(result.data)){
  setSearchResult(result.data);
  }
};
useEffect(() => {
  console.log(searchResult);
}, [searchResult]);

  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      <CardList 
      searchResults={searchResult} 
      onPortfolioCreate={onPortfolioCreate}
      />
      { serverError && <div>Unable to connect to API </div>}
      {/* { serverError ? <div>Connected</div> : <div>Unable to connect</div>} */}

    </div>
  );
}

export default App;
