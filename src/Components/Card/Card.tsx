import React from 'react'
import "./Card.css"


interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price} : Props) : JSX.Element=> {
  return (
    <div className='card'>
     <img src="https://st5.depositphotos.com/4678277/67973/i/380/depositphotos_679737100-stock-photo-photo-impressed-funky-girl-dressed.jpg"
     alt="Image"/>
     <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p> 
     </div>
     <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellendus enim totam autem,
        harum pariatur exercitationem asperiores velit inventore voluptatibus commodi 
        facilis unde vitae voluptas nesciunt distinctio? Unde, illum incidunt!
        </p>
     </div>
  )
}

export default Card