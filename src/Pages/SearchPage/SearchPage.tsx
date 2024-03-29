import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Navbar from '../../Components/Navbar/Navbar';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';

interface Props {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const[searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const[serverError, setServerError] = useState<string | null>(null); 
 

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      // console.log(e);
  };
//Han to change or turn of typescript (e: SyntheticEvent) to any because syntheticEvent does not support the updatePortofolio.
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  }

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };

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

  <Search 
    onSearchSubmit={onSearchSubmit} 
    search={search} 
    handleSearchChange={handleSearchChange}
  />
  <ListPortfolio portfolioValues={portfolioValues} 
  onPortfolioDelete={onPortfolioDelete}
  />
  <CardList 
    searchResults={searchResult} 
     onPortfolioCreate={onPortfolioCreate}
  />
  { serverError && <div>Unable to connect to API </div>}
  {/* { serverError ? <div>Connected</div> : <div>Unable to connect</div>} */}

</div>
  )
}

export default SearchPage