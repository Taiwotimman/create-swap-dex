import React, { useState } from "react";
import constant from "./constant.json";
import {ethers, InfuraProvider} from "ethers";



const ca = "0x9bee6c9C560EEC6314E50D540d5A2aA40AE08437"

function SwapForm({account, setAccount}){
  /*const isConnected = Boolean(account[0]);*/
  const [inputBundle, setInputBundle] = useState({
    erc721Tokens: [],
    erc1155Tokens: [],
    erc20Tokens: []
  });
  const [inputERC721Tokens, setInputERC721Tokens] = useState([]);
  const [inputERC1155Tokens, setInputERC1155Tokens] = useState([]);
  const [outputBundle, setOutputBundle] = useState({
    erc721Tokens: [],
    erc1155Tokens: [],
    erc20Tokens: []
  });
  const [outputERC20Tokens, setOutputERC20Tokens] = useState([]);


  async function handleSwap(){
    // Call the smart contract performSwap function with the input values
    // You need to implement the logic to connect with the smart contract here

    if(window.ethereum){
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(ca, constant, signer)
    
      console.log("Performing swap...");
      console.log("Input Bundle:", inputBundle);
      console.log("Input ERC721 Tokens:", inputERC721Tokens);
      console.log("Input ERC1155 Tokens:", inputERC1155Tokens);
      console.log("Output Bundle:", outputBundle);
      console.log("Output ERC20 Tokens:", outputERC20Tokens);


    // Add the necessary code to connect with the smart contract and execute the swap
      try {
        const response = await contract.performSwap(inputBundle, inputERC721Tokens, inputERC1155Tokens, outputBundle, outputERC20Tokens);
        console.log('response:', response);
      } catch (error) {
        console.log("error:", error); 
      }
    }
  };

  return (
    <div>
      <h2>Swap Form</h2>
         {/* Input Bundle */}
        <h4>Input Bundle</h4>
        <div>
          <label>ERC721 Tokens:</label>
          <input
            type="text"
            value={inputBundle.erc721Tokens}
            onChange={(e) =>
              setInputBundle((prevState) => ({
                ...prevState,
                erc721Tokens: e.target.value.split(",")
              }))
            }
          />
        </div>
        <div>
          <label>ERC1155 Tokens:</label>
          <input
            type="text"
            value={inputBundle.erc1155Tokens}
            onChange={(e) =>
              setInputBundle((prevState) => ({
                ...prevState,
                erc1155Tokens: e.target.value.split(",")
              }))
            }
          />
        </div>
        <div>
          <label>ERC20 Tokens:</label>
          <input
            type="text"
            value={inputBundle.erc20Tokens}
            onChange={(e) =>
              setInputBundle((prevState) => ({
                ...prevState,
                erc20Tokens: e.target.value.split(",")
              }))
            }
          />
        </div>
  
        {/* Additional Input Tokens */}
        <h4>Additional Input Tokens</h4>
        <div>
          <label>ERC721 Tokens:</label>
          <input
            type="text"
            value={inputERC721Tokens}
            onChange={(e) => setInputERC721Tokens(e.target.value.split(","))}
          />
        </div>
        <div>
          <label>ERC1155 Tokens:</label>
          <input
            type="text"
            value={inputERC1155Tokens}
            onChange={(e) => setInputERC1155Tokens(e.target.value.split(","))}
          />
        </div>
  
        {/* Output Bundle */}
        <h4>Output Bundle</h4>
        <div>
          <label>ERC721 Tokens:</label>
          <input
            type="text"
            value={outputBundle.erc721Tokens}
            onChange={(e) =>
              setOutputBundle((prevState) => ({
                ...prevState,
                erc721Tokens: e.target.value.split(",")
              }))
            }
          />
        </div>
        <div>
          <label>ERC1155 Tokens:</label>
          <input
            type="text"
            value={outputBundle.erc1155Tokens}
            onChange={(e) =>
              setOutputBundle((prevState) => ({
                ...prevState,
                erc1155Tokens: e.target.value.split(",")
              }))
            }
          />
        </div>
        <div>
          <label>ERC20 Tokens:</label>
          <input
            type="text"
            value={outputBundle.erc20Tokens}
            onChange={(e) =>
              setOutputBundle((prevState) => ({
                ...prevState,
                erc20Tokens: e.target.value.split(",")
              }))
            }
          />
        </div>
  
        {/* Additional Output Tokens */}
        <h4>Additional Output Tokens</h4>
        <div>
          <label>ERC20 Tokens:</label>
          <input
            type="text"
            value={outputERC20Tokens}
            onChange={(e) => setOutputERC20Tokens(e.target.value.split(","))}
          />
        </div>
  
        {/* Submit Button */}
        <button onClick={handleSwap}>Swap</button>      
    </div>
  );
};

export default SwapForm;
