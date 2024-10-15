
import {useState, useEffect} from 'react';
import SearchPanel from "./SearchPanel";
import CryptoCard from "./CryptoCard";


const CryptoCoins=[{
    Name: "Bitcoin",
    Price: "$59789.00",
    MarketCap:"$1,175,931,107,572",
    Volume: "$34,395,405,407,507",
    Change: "6.25%",
    Icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
    }];
    const coinMarketCapApiKey ='d828f78d-9d58-4241-91a2-d42ede5c11ed';
    const coinMarketCapApiUrl= 'some-url';
    //1. component mount-useEffect hook
    //2. get data-using fetch api
    //3. set the coin data from market cap api
    //4. handle loading and errors

    const CryptoDashboard =() => {

        //default the data to the coin array..
        const [coinData, setCoinData] = useState([]);
        const [isLoading,setIsLoading]=useState(true);
        const [error,setError]= useState(null);

        const handleSearch =(searchText) => {

            if (searchText === "") {
                alert('Enter a crypto coin to search')

                return;
            }


            //TODO filter the crypto coin list by searchText
            //use ES6 array method filter.

            const filterCoins = coinData.filter(coin => coin.Name.includes(searchText));
            //set stare to filter coins and re-render on update
            setCoinData(filterCoins)
        }

    

        //componet mounted, fire once ===> empty dependeny arrary
        useEffect(()=>{
            console.log('component mounted..')
            fetchData();
         }, []) 



         const fetchData= async()=>{
            console.log('fetch data..');
            try {
                const response = await fetch (coinMarketCapApiUrl, {
                    headers:{
                        'X-CMC_PRO_API_KEY': coinMarketCapApiKey
                     },
                    params:{
                        start: 1,
                        limit: 10,
                        convert: 'USD',
                     }
                });
                if(!response.ok){
                    throw new Error('There was an error Loading data..')
                }
                const data =await response.json();
                
                console.log(`coin market data: ${JSON.stringify(data)}`)
            }
            catch (error){
                    console.error(`There was an error ${error}`) // output error to the console..
                    setError('There was an error loading data..')

            }
            finally{
                setIsLoading(false);
            }
            };

            
            if(isLoading){
                return <p style={{textAlign: 'center'}}>Loading....</p>
            }

        
            if (error) {
                return <p style={{ textAlign: 'center' }}>{error}</p>
            }
        
            
            
       return <>
        <div className="app">
        <h1> Crypto Coin Tracker</h1>
               <SearchPanel searchCallback={handleSearch} />
               <div className= "crypto-container">
                 
                   {
                       coinData.data.map((currentCoin) => {
                           return <CryptoCard
                               {...currentCoin}
                               searchCallback={handleSearch}
                           />

                    })
            }

               
              
              <CryptoCard {...'bitCoin'}/>
        
              <div class="cryptocard">
                    <h2>Bitcoin</h2>    
                    <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=035" height="100px" width="100px"
                     alt="Bitcoin"/>
                     <p>Current Price: $59789.00</p>
                    <p>Market Cap: $1,175,931,107,572</p>
                    <p>24h Volume: $34,395,407,507</p>
                    <p>24h Change: -6.25%</p>
                    </div>



                    <div class="cryptocard">
                    <h2>Ethereum</h2>
                    <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=035" height="100px" width="100px"
                    alt="Ethereum"/>
                    <p>Current Price: $2981.53 </p>
                    <p>Market Cap: $363,893,865</p>
                    <p>24h Volume: $19,349,023,571</p>
                    <p>24h Change: -6.53</p>
                    </div>

                    <div class="cryptocard">
                    <h2>Tether</h2>
                    <img src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=035"  height="100px" width="100px"
                    alt="Tether"/>
                    <p>Current Price: $1.00 </p>
                    <p>Market Cap: $110,503,849,633</p>
                    <p>24h Volume: $43,404,519,853</p>
                    <p>24h Change: 0.06% </p>
                    </div>

                    <div class="cryptocard">
                    <h2>BNB</h2>
                    <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=035" height="100px" width="100px"
                    alt="BNB"/>
                    <p>Current Price: $568.22 </p>
                    <p>Market Cap: $87,344,440,730 </p>
                    <p>24h Volume: $20,030,004,641 </p>
                    <p>24h Change: -4.32% </p>
                    </div>

                    <div class="cryptocard">
                    <h2> Solana</h2>
                    <img src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" height="100px" width="100px"
                    alt="Solana"/>
                    <p>Current Price: $125.16 </p>
                    <p>Market Cap: $56,090,533,555 </p>
                    <p>24h Volume: $3,814,576,230</p>
                    <p>24h Change:-8.69% </p>
                    </div>

                    <div class="cryptocard">
                    <h2>USDC</h2>
                    <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=035" height="100px" width="100px"
                    alt="USDC"/>
                    <p>Current Price:$1.00</p>
                    <p>Market Cap: $33.117,668,058</p>
                    <p>24h Volume: $9,142,246,288 </p>
                    <p>24h Change: 0.05% </p>
                    </div>
 
                    </div>
                     </div>

    </>

    }




export default CryptoDashboard; 
