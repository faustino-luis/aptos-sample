import { Aptos } from '@aptos-labs/ts-sdk'

const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(aptosConfig)
