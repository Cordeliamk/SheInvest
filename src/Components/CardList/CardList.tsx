import React from 'react'
import Card from '../Card/Card'


type Props = {}

const CardList : React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
    <Card companyName="Tesla" ticker="TSLA" price= {110} />
    <Card companyName="Microsoft" ticker="MSFT" price= {110} />
    <Card companyName="Apple" ticker="AAPL" price= {110} />
    </div>
  )
}

export default CardList