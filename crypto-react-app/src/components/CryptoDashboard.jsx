
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
        const [error,setError]= useState(false)

        const handleSearch =(searchText) => {

    
            if(searchText ==="") {
                 alert('Enter a crypto coin to search')
                 
                 return;
            }
           
           
            //TODO filter the crypto coin list by searchText
            //use ES6 array method filter.

            const filterCoins = coinData.filter(coin=>coin.Name.includes(searchText));
            //set stare to filter coins and re-render on update
            setCoinData (filterCoins)

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

                    }
                });
                if(!response.ok){
                    throw new Error('There was an error Loading data..')
                }
                const data =await response.json();
                console.log ('coin market data: ${JSON.stringify({data}')
            }
            catch (error){
                //setError('There was an error loading data..')

            }
            finally{
                setIsLoading(false);
            }
            }

            if(isLoading){
                return <p style={{textAlign: 'center'}}>Loading....</p>
            }

            if(error){
                return <p style={{textAlign: 'center'}}>Error: {error.message}</p>
            }
            
            
       return <>
        <div className="app">
        <h1> Crypto Coin Tracker</h1>
               <SearchPanel searchCallback={handleSearch} />
                 
                   {/* {
                       coinData.data.map((currentCoin) => {
                           return <CryptoCard
                               {...currentCoin}
                               searchCallback={handleSearch}
                           />

                       })
                   } */}

               {
                   CryptoCoins.map((currentCoin) => {
                       return <CryptoCard
                           {...currentCoin}
                           searchCallback={handleSearch}
                       />

                   })
               }
              
    
       
       </div>

        </>
        
        }
                    
        


export default CryptoDashboard;