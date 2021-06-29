import { byDecimals } from 'features/helpers/bignumber';

export const fetchVaultBalance = async ({address, contract, decimal}) => {
  // console.log(`=====================================fetchDepositedBalance begin=====================================`)
  // console.log(`
  //   address:${address}\n
  //   contractAddress:${contractAddress}\n
  // `)
  const vaultBalance = await contract.methods.balance().call({ from: address });

  // console.log(`=====================================fetchDepositedBalance success=====================================`)

  return byDecimals(vaultBalance, decimal).toNumber();
}