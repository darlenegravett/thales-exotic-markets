export const paymentTokenContract = {
    addresses: {
        10: '',
        69: '0x59F83802e77F5c11621348737E9e94c7f99b30CD',
    },
    abi: [
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
            ],
            name: 'Approval',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'oldOwner', type: 'address' },
                { indexed: false, internalType: 'address', name: 'newOwner', type: 'address' },
            ],
            name: 'OwnerChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'newOwner', type: 'address' }],
            name: 'OwnerNominated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'contract Proxyable', name: 'newTarget', type: 'address' }],
            name: 'TargetUpdated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'from', type: 'address' },
                { indexed: true, internalType: 'address', name: 'to', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
            ],
            name: 'Transfer',
            type: 'event',
        },
        { payable: true, stateMutability: 'payable', type: 'fallback' },
        {
            constant: false,
            inputs: [
                { internalType: 'bytes', name: 'callData', type: 'bytes' },
                { internalType: 'uint256', name: 'numTopics', type: 'uint256' },
                { internalType: 'bytes32', name: 'topic1', type: 'bytes32' },
                { internalType: 'bytes32', name: 'topic2', type: 'bytes32' },
                { internalType: 'bytes32', name: 'topic3', type: 'bytes32' },
                { internalType: 'bytes32', name: 'topic4', type: 'bytes32' },
            ],
            name: '_emit',
            outputs: [],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: false,
            inputs: [],
            name: 'acceptOwnership',
            outputs: [],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: true,
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'spender', type: 'address' },
            ],
            name: 'allowance',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: false,
            inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'value', type: 'uint256' },
            ],
            name: 'approve',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: true,
            inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
            name: 'balanceOf',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'decimals',
            outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'name',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: false,
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'nominateNewOwner',
            outputs: [],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'nominatedOwner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'owner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: false,
            inputs: [{ internalType: 'contract Proxyable', name: '_target', type: 'address' }],
            name: 'setTarget',
            outputs: [],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'symbol',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'target',
            outputs: [{ internalType: 'contract Proxyable', name: '', type: 'address' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'totalSupply',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: false,
            inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'value', type: 'uint256' },
            ],
            name: 'transfer',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: false,
            inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'value', type: 'uint256' },
            ],
            name: 'transferFrom',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
};

export default paymentTokenContract;
