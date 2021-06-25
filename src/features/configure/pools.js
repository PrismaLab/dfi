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
        id: 'usdt',
        name: 'USDT',  
        token: 'USDT',
        tokenDescription: 'USDT',
        tokenAddress: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        tokenDecimals: 6,
        itokenDecimals: 6,
        depostLimit:0,
        tokenDescriptionUrl: 'https://docs.dfi.money/#/using-crv?id=how-to-get-ycrv',
        tokenDescriptionUrl2: 'https://docs.dfi.money/#/zh-cn/buy-tokens?id=_5-ycrv%e5%85%91%e6%8d%a2',
        earnedToken: 'iUSDT',
        earnedTokenAddress: '0x387F73238a7c710D4838DdCEe0b04beA59548698',
        earnContractAddress: '0x387F73238a7c710D4838DdCEe0b04beA59548698',
        defaultApy: "42.63",
        pricePerFullShare: 1,
        pastPricePerFullShare: 1
      },
      
]