import React, { useEffect, useState } from "react";

import Header from "./layout/app/Header";
import Treasury from "./layout/app/Treasury";
import Stake from "./layout/app/Stake";
import Withdraw from "./layout/app/Withdraw";
import Footer from "./layout/app/Footer";

import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

import { CONTACT_ABI, CONTACT_ADDRESS, TOKEN_ABI, TOKEN_ADDRESS, TREASURY_ADDRESS, PANCAKE_ADDRESS, PANCAKE_ABI, BUSD_ADDRESS, BNB_ADDRESS } from '../config';

let web3Modal;
let provider;
let selectedAccount;
let accountid;
let web3;
let smashTokenCont;
let smashPoolCont;
let smashPancakeCont;
let token_price;
let _stakeList = [];
let _stake_amount = 0;
let _reward_amount = 0;

// import Web3 from 'web3'
function init() {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
              network:'binance',
              rpc: {
                  56:"https://bsc-dataseed.binance.org/"
                },
              chainId:56,
              infuraId: "f6e332c6125f4eeaa51bf8e9dc866470"
            }
        },
    };

    web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
    });

    window.w3m = web3Modal;
}

async function fetchAccountData() {
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    selectedAccount = await signer.getAddress();
    
    return selectedAccount;
}

async function refreshAccountData() {
    await fetchAccountData(provider);
}

async function onConnect() {
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect({ cacheProvider: true });
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

    provider.on("accountsChanged", (accounts) => {
        console.log('chainchan',accounts)
        fetchAccountData();
        window.location.reload();
    });

    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
        window.location.reload();
    });

    provider.on("networkChanged", (networkId) => {
        fetchAccountData();
    });
    window.location.reload()

    await refreshAccountData();
}

async function disconnet() {
    console.log("Opening a dialog", web3Modal);
    try {
        // provider = await web3Modal.connect();        

        await web3Modal.clearCachedProvider();
        // await window.ethereum.disable()
        window.location.reload()
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }   
}

export async function staking_web (period, amount) {
    try {   
        let amt_stake = String(amount);    
        await smashTokenCont.methods.approve(CONTACT_ADDRESS, web3.utils.toWei(amt_stake)).send({ from: accountid, gas: 1e6 })
        await smashPoolCont.methods.deposit(web3.utils.toWei(amt_stake), period).send({ from: accountid, gas: 1e6 }); 
    
        window.location.reload()
    } catch (error) {
        console.log(error)
    }        
}

export async function withraw_web (userTime) {
    try {   
        await smashPoolCont.methods.unstakeAll(userTime).send({ from: accountid, gas: 1e6 }); 

        window.location.reload()
    } catch (error) {
        console.log(error)
    }        
}

const Apps = () => {
    const [acc,setacc] = useState()
    const [myBalance, setMyBalance] = useState();
    const [treAmount, setTreAmount] = useState();
    const [supplyAmount, setSupplyAmount] = useState();
    const [apy, setApy] = useState();
    const [maxApy, setMaxApy] = useState();
    const [tokenPrice, setTokenPrice] = useState();

    useEffect(() => {
        async function web3Connect() {
            if (acc) {
                provider = await web3Modal.connect();
                let web3_2 = new Web3(provider);
                const accounts = await web3_2.eth.getAccounts();
                web3 = web3_2;
                accountid = accounts[0];
                let smashToken_ = new web3_2.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);
                smashTokenCont = smashToken_;
                let smashStaking = new web3_2.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
                smashPoolCont = smashStaking;
                let smashPancake = new web3_2.eth.Contract(PANCAKE_ABI, PANCAKE_ADDRESS);
                smashPancakeCont = smashPancake;

                let bnb_amountOut = await smashPancakeCont.methods.getAmountsOut(web3.utils.toWei('1'), [TOKEN_ADDRESS ,BNB_ADDRESS]).call();
                let bnb_token_price = web3.utils.fromWei(bnb_amountOut[1])

                let _amountOut = await smashPancakeCont.methods.getAmountsOut(web3.utils.toWei(bnb_token_price), [BNB_ADDRESS ,BUSD_ADDRESS]).call();
                token_price = web3.utils.fromWei(_amountOut[1])

                setTokenPrice(covnertNum6(token_price))

                setProviderEvent();

                syncBlocksInfo();
            }
        }
        web3Connect();
    }, [acc]);

    useEffect(() => {
        init();
        getAccount();
        if (web3Modal.cachedProvider) {
           setacc(true)
        }
    }, []); 

    // useEffect(() => {
    //     setInterval(async () => {
    //         syncBlocksInfo();
    //     }, 5000);
    // }, []); 

    function setProviderEvent() {
        provider.on("accountsChanged", (accounts) => {
            console.log('chainchan',accounts)
            fetchAccountData();
            window.location.reload();
        });
    
        provider.on("chainChanged", (chainId) => {
            fetchAccountData();
            window.location.reload();
        });
    
        provider.on("networkChanged", (networkId) => {
            fetchAccountData();
        });
    }

    async function getAccount() {
        // const web3_2 = new Web3(window.ethereum, null, { transactionConfirmationBlocks: 1 })
        if (window.ethereum) {
            // request change chain
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x38' }],
                });
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        const data = [{
                            chainId: '0x38',
                            chainName: 'Smart Chain',
                            nativeCurrency: {
                            name: 'Water Finance',
                            symbol: '$WATER',
                            decimals: 18,
                            },
                            rpcUrls: ['https://speedy-nodes-nyc.moralis.io/727af4ed35037dec53480062/bsc/mainnet'],
                            blockExplorerUrls: ['https://bscscan.com'],
                        }]

                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: data,
                        });
                    } catch (addError) {
                        
                    }
                }
            }
        } 
    }

    function syncBlocksInfo() {
        if (accountid) { 
            get_apy_web();
            get_mystaked_amount();
            get_tokens_web();
            get_treasury_web();
            get_total_supply_web();
        }      
    }

    async function get_apy_web() {
        if (accountid && web3 && smashPoolCont) {
            const _typeList = await smashPoolCont.methods.getTypeList().call()
            const apy_list = [];
            let max_apy = 0;

            for(let i = 0; i < _typeList.length; i++){
                await smashPoolCont.methods.APY(_typeList[i]).call()
                .then((val) => {
                    const _apy = {
                        type : _typeList[i],
                        value : val
                    };
                    apy_list.push(_apy);
                    max_apy = Number(max_apy) < Number(val) ? val : max_apy;
                }).catch()
            }

            setApy(apy_list);
            setMaxApy(max_apy);
        }
    }

    async function get_mystaked_amount() {
        if (accountid && web3 && smashPoolCont) {
            await smashPoolCont.methods.getUserList().call()
            .then((user_list) => {
                for(let i = 0; i < user_list.length; i++){
                    smashPoolCont.methods.userInfo(user_list[i], accountid).call()
                    .then((user_val) => {
                        _stake_amount = Number(_stake_amount) + Number(web3.utils.fromWei(user_val.amount));

                        smashPoolCont.methods.calcCurrentAmount(accountid, user_list[i]).call()
                        .then((amount_val) => {
                            const _amount =  web3.utils.fromWei(amount_val);
                            _reward_amount = Number(_reward_amount) + Number(_amount);
                            if(_amount > 0){
                                smashPoolCont.methods.calcCurrentTimeStamp(accountid, user_list[i]).call()
                                .then((time_val) => {
                                    const _time =  time_val;
                                    const _data = {
                                        amount: covnertNum2(_amount),
                                        period: user_val.types,
                                        remainedTime: new Date(Number(_time) * 1000).getTime(),
                                        userTime: user_list[i],
                                        lastTime: user_val.lastStakedBlock
                                    };
                                    _stakeList.push(_data);
                                }).catch()
                            }
                        }).catch()
                    }).catch()
                }
            }).catch()
        }
    }

    function covnertNum2(_number) {
        return Number.parseFloat(_number).toFixed(2);        
    }

    function covnertNum4(_number) {
        return Number.parseFloat(_number).toFixed(4);        
    }

    function covnertNum6(_number) {
        return Number.parseFloat(_number).toFixed(6);        
    }

    async function get_tokens_web ()  {        
        if (accountid && web3 && smashTokenCont) {
            const tokens = await smashTokenCont.methods.balanceOf(accountid).call();
            let weiTokens =  web3.utils.fromWei(tokens);
            setMyBalance(covnertNum2(weiTokens));
        }        
    }

    async function get_treasury_web ()  {        
        if (TREASURY_ADDRESS && web3 && smashTokenCont) {
            const tokens = await smashTokenCont.methods.balanceOf(TREASURY_ADDRESS).call();
            let weiTokens =  web3.utils.fromWei(tokens);
            setTreAmount(covnertNum2(Number(weiTokens) * Number(token_price)));
        }        
    }

    async function get_total_supply_web ()  {        
        if (accountid && web3 && smashTokenCont) {
            const tokens = await smashTokenCont.methods.totalSupply().call();
            let weiTokens =  web3.utils.fromWei(tokens);
            setSupplyAmount(covnertNum2(Number(weiTokens) * Number(token_price)));
        }        
    }

    return (
        <div id="apps">
            <Header acc={acc} disconnet={disconnet} onConnect={onConnect}  />

            <Treasury maxapy={maxApy} treamount={treAmount} tokenPrice={tokenPrice}/>

            <Stake amount={myBalance} maxapy={maxApy} apy={apy} stakedAmount={_stake_amount} rewaredAmount={_reward_amount} supplyamount={supplyAmount} tokenPrice={tokenPrice}/>

            <Withdraw stackingList={_stakeList} />

            <Footer />
        </div>
    );
}

export default Apps;