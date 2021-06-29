import BigNumber from "bignumber.js";
// id: '池子id',
// name: '池子名字',  
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// tokenDecimals: '存入精度'
// itokenDecimals: '提取精度'
// depostLimit: '存入最大数量限制' 0时不限制
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
// price ： 挖的代币的价格！
// path price: 
export const pools = [
    
    {
        chainId: 137,
        id: 'wmatic',
        name: 'WMATIC',  
        token: 'WMATIC',
        tokenDescription: 'WMATIC',
        tokenAddress: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
        tokenDecimals: 18,
        itokenDecimals: 18,
        depostLimit:0,
        tokenDescriptionUrl: '',
        tokenDescriptionUrl2: '',
        earnedToken: 'iWMATIC',
        earnedTokenAddress: '0xd71f14663737529C73d0dfD3cF66Fe3264056A50',
        earnContractAddress: '0xd71f14663737529C73d0dfD3cF66Fe3264056A50',
        defaultApy: "42.63",
        pricePerFullShare: 1,
        pastPricePerFullShare: 1
      },
    
      {
        chainId: 137,
        id: 'dai',
        name: 'DAI',  
        token: 'DAI',
        tokenDescription: 'DAI',
        tokenAddress: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
        tokenDecimals: 18,
        itokenDecimals: 18,
        depostLimit:0,
        tokenDescriptionUrl: '',
        tokenDescriptionUrl2: '',
        earnedToken: 'iDAI',
        earnedTokenAddress: '0xa794C5Af96BEF8315AB4Ca15BCD7b3E118df9E69',
        earnContractAddress: '0xa794C5Af96BEF8315AB4Ca15BCD7b3E118df9E69',
        defaultApy: "42.63",
        pricePerFullShare: 1,
        pastPricePerFullShare: 1
      },
      {
        chainId: 137,
        id: 'usdc',
        name: 'USDC',  
        token: 'USDC',
        tokenDescription: 'USDC',
        tokenAddress: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        tokenDecimals: 6,
        itokenDecimals: 6,
        depostLimit:0,
        tokenDescriptionUrl: '',
        tokenDescriptionUrl2: '',
        earnedToken: 'iUSDC',
        earnedTokenAddress: '0xD7008eDA961dCB5C51286464A2434D86aE6c8fd6',
        earnContractAddress: '0xD7008eDA961dCB5C51286464A2434D86aE6c8fd6',
        defaultApy: "42.63",
        pricePerFullShare: 1,
        pastPricePerFullShare: 1
      },
      {
        chainId: 137,
        id: 'usdt',
        name: 'USDT',  
        token: 'USDT',
        tokenDescription: 'USDT',
        tokenAddress: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        tokenDecimals: 6,
        itokenDecimals: 6,
        depostLimit:0,
        tokenDescriptionUrl: '',
        tokenDescriptionUrl2: '',
        earnedToken: 'iUSDT',
        earnedTokenAddress: '0x06F6A9Eed5F339D3B866e7086985058225674FEc',
        earnContractAddress: '0x06F6A9Eed5F339D3B866e7086985058225674FEc',
        defaultApy: "42.63",
        pricePerFullShare: 1,
        pastPricePerFullShare: 1
      },
      {
        chainId: 137,
        id: 'weth',
        name: 'WETH',  
        token: 'WETH',
        tokenDescription: 'WETH',
        tokenAddress: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
        tokenDecimals: 18,
        itokenDecimals: 18,
        depostLimit:0,
        tokenDescriptionUrl: '',
        tokenDescriptionUrl2: '',
        earnedToken: 'iWETH',
        earnedTokenAddress: '0x19aCE7C1D88fCD7DA9D8D1D1ea64506384B97815',
        earnContractAddress: '0x19aCE7C1D88fCD7DA9D8D1D1ea64506384B97815',
        defaultApy: "42.63",
        pricePerFullShare: 1,
        pastPricePerFullShare: 1
      },
      {
        chainId: 137,
        id: 'wbtc',
        name: 'wBTC',  
        token: 'wBTC',
        tokenDescription: 'wBTC',
        tokenAddress: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
        tokenDecimals: 18,
        itokenDecimals: 18,
        depostLimit:0,
        tokenDescriptionUrl: '',
        tokenDescriptionUrl2: '',
        earnedToken: 'iWBTC',
        earnedTokenAddress: '0x7679A7f8511E26501B03248d335459A45783EB9C',
        earnContractAddress: '0x7679A7f8511E26501B03248d335459A45783EB9C',
        defaultApy: "42.63",
        pricePerFullShare: 1,
        pastPricePerFullShare: 1
      },
      
]