//{
// Name: "Bitcoin",
// Price: "$59789.00",
// MarketCap: "$1,175,931,107,572",
 //Volume: "$34,395,407,507",
//Change: "-6.25%",
//Icon:"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest,//}
//}

const CryptoCard = (props) => {
    console.log('card data ${JSON.stringify(props)}')

    const handleAddWatchList = () => {
        alert ('Add to Watchlist')
    }

    return <>
    <div className= "crypto-card">
              
             <img 
            src= {"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"}
            alt={props.name}
            width="50"
            height= "50"/>
           
                {props.quote &&<>   
                <h2>{props.name}</h2>
                <p>Current Price:  ${props.quote.USD.price.toFixed(2)}</p>
                <p>Market Cap:    ${props.quote.USD.market_cap.toLocaleString()}</p>
                <p>24h Volume:     ${props.quote.USD.volume_24h.toLocaleString()}</p>
                <p>24h Change:     {props.quote.USD.percent_change_24h.toFixed(2)}%</p>
                <button onClick={handleAddWatchList}><i className='fa-sharp fa-regular fa-camera-retro'></i></button>
                </>
                }
        
            </div>
                           

         </>
    }
    export default CryptoCard;

{/*<p>Current Price:{'props'.Price}</p>
            <p>Market Cap: {'props'.MarketCap}</p>
            <p>24h Volume: {'props'.Volume}</p>
            <p>24h Change: {'props'.Change} </p>/*}
            {/* <p>Current Price:${props.quote.USD.price.toFixed(2)}</p>
            <p>Market Cap:${props.quote.USD.market_cap.toLocaleString()}</p>
            <p>24h Volume:${props.quote.USD.volume_24.toLocaleString()}</p>
            <p>24h Change:{props.quote.USD.percent_change_24h.toFixed(2)}%</p> */}