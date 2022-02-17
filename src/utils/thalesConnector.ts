import { ethers, Signer } from 'ethers';
import { NetworkSettings } from 'types/network';

type ThalesConnector = {
    initialized: boolean;
    provider: ethers.providers.Provider | undefined;
    signer: Signer | undefined;
    setNetworkSettings: (networkSettings: NetworkSettings) => void;
};

// @ts-ignore
const thalesConnector: ThalesConnector = {
    initialized: false,

    setNetworkSettings: function (networkSettings: NetworkSettings) {
        this.initialized = true;
        this.signer = networkSettings.signer;
        this.provider = networkSettings.provider;
    },
};

// const initializeContract = (contract: any, networkSettings: NetworkSettings) =>
//     new ethers.Contract(contract.addresses[networkSettings.networkId || 1], contract.abi, thalesConnector.provider);

// const conditionalInitializeContract = (contract: any, networkSettings: NetworkSettings) =>
//     contract.addresses[networkSettings.networkId || 1] !== 'TBD'
//         ? new ethers.Contract(
//               contract.addresses[networkSettings.networkId || 1],
//               contract.abi,
//               thalesConnector.provider
//           )
//         : undefined;

export default thalesConnector;
