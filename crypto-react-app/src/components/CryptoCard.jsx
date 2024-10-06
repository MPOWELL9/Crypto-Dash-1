//{
// Name: "Bitcoin",
// Price: "$59789.00",
// MarketCap: "$1,175,931,107,572",
 //Volume: "$34,395,407,507",
//Change: "-6.25%",
//Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",//}
//}

const CryptoCard = (props) => {
    console.log('card data ${JSON.stringify(props)')

    return <>
    <div class crypto-card>
            <h2>{'props'.Name}</h2>    
            <img https://s2.coinmarketcap.com/static/img/coins/64x64/1.png
            src={'props'.Icon} 
            alt={'coin'.Name}
            width="32"
            height= "32"/>
           {/* <p>Current Price:{'props'.Price}</p>
            <p>Market Cap: {'props'.MarketCap}</p>
            <p>24h Volume: {'props'.Volume}</p>
            <p>24h Change: {'props'.Change} </p>*/}
            <p>Current Price:${props.quote.USD.price.toFixed(2)}</p>
            <p>Market Cap:${props.quote.USD.market_cap.toLocaleString()}</p>
            <p>24h Volume:${props.quote.USD.volume_24.toLocaleString()}</p>
            <p>24h Change:{props.quote.USD.percent_change_24h.toFixed(2)}%</p>
            



        </div>
    </>
}
export default CryptoCard;