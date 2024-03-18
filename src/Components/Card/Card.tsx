import React from 'react'
import "./Card.css"
import { CompanySearch } from '../../company';


interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({id, searchResult} : Props) : JSX.Element=> {
  return (
    <div className='card'>
     <img src="https://st5.depositphotos.com/4678277/67973/i/380/depositphotos_679737100-stock-photo-photo-impressed-funky-girl-dressed.jpg"
     alt="CompanyLogo"/>
     <div className="details">
        <h2>{searchResult.name} ({searchResult.symbol})</h2>
        <p>${searchResult.currency}</p> 
     </div>
     <p className="info">
       {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
     </div>
  )
}

export default Card