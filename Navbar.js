import React, {useState} from "react";



function Navbar ({account, setAccount}) {
    const isConnected = Boolean(account[0]);
    /*const [amount, setAmount] = useState(1);
    /*const [decimals, setDecimals] = useState("");*/


    /*const handleChange = (e) => {
        setAmount(e.target.value);
    }*/
  
      async function connect(){
          if(window.ethereum){
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
  
            });
            setAccount(accounts);
          }
        }

        /*async function mint() {
          if(window.ethereum){
            const provider = new ethers.BrowserProvider(window.ethereum);
            /*const contract = new ethers.Contract(ca, constant, provider)*/
            /*const sym = await contract.symbol();*/
          
            /*const signer = await provider.getSigner();
            const contract = new ethers.Contract(ca, constant, signer);
            /*const contract = new Contract(ca, constant, signer);*/
            /*const response = await contract.claim(BigInt(amount));
            /*setDecimals(sym);
          }
          
        }*/
          
        /*<input type="number" value={amount} onChange={handleChange} />*/
        /*<button onClick={mint}>claim</button>*/
    return(
    <div>
        <>Account:{account}</>
      {isConnected ? (
        <p>connected</p>
      ):                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      (<button onClick={connect}>CONNECT</button>)
      }
    </div>
    );
}

export default Navbar;
