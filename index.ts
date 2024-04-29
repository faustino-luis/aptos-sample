import { Aptos } from '@aptos-labs/ts-sdk'

const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(aptosConfig)
const transaction = await aptos.transferCoinTransaction({
  sender: alice,
  recipient: bob.accountAddress,
  amount: 100,
})

const pendingTransaction = await aptos.signAndSubmitTransaction({
  signer: alice,
  transaction,
});

const alice: Account = Account.generate();

// create the account on chain
await aptos.fundAccount({
  accountAddress: alice.accountAddress,
  amount: 100000000,
});
