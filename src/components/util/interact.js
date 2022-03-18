const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const ownerAddress = process.env.REACT_APP_OWNER_ADDRESS;
const contractABI = require("../../PostApocalypticItem.json");
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
console.log(alchemyKey);

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Please mint the items using the connected wallet.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a href={`https://metamask.io/download.html`} rel="noreferrer" target="_blank">
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Please mint the items using the connected wallet.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a href={`https://metamask.io/download.html`} rel="noreferrer" target="_blank">
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getMintedTotal = async () => {
  const nftContract = window.contract = await new web3.eth.Contract(contractABI.abi, contractAddress, {from: ownerAddress});

  let totalSupply = await nftContract.methods.totalSupply().call();

  return parseInt(totalSupply);
};

export const mintNFT = async (NUM_ITEMS) => {
  let mintedItems = 0;
  let msg = "";

  const nftContract = window.contract = await new web3.eth.Contract(contractABI.abi, contractAddress, {from: ownerAddress});

  const totalSupply = await nftContract.methods.totalSupply().call();

  for (let i = 0; i < NUM_ITEMS; i++) {
    let tokenInx = parseInt(totalSupply) + 1 + i;

    console.log("Starting minting token " + tokenInx);

    const result = await nftContract.methods
      .mintItem(window.ethereum.selectedAddress, `https://post-apocalyptic-api.herokuapp.com/api/token/${tokenInx}`)
      .send({ from: window.ethereum.selectedAddress, value: web3.utils.toWei('0.05', 'ether') });

    try {
      if (result) {
        msg += "#" + tokenInx + ", ";
        mintedItems++;
      }      
    } catch (err) {
      return {
        mintedItems: mintedItems,
        message: err.message
      };
    }    
  }  

  return {
    mintedItems: mintedItems,
    messsage: msg ? "Minted Tokens " + msg.substring(0, msg.length - 2) + " successfully. Thanks!" : ""
  };
};