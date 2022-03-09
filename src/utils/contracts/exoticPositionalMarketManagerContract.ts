export const exoticPositionalMarketManagerContract = {
    addresses: {
        10: '',
        69: '0x4eA42C9bD934e38C646a66512B1bc783BA81D812',
    },
    abi: [
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'creatorPercentage', type: 'uint256' }],
            name: 'CreatorPercentageChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'disputePrice', type: 'uint256' }],
            name: 'DisputePriceChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: '_exoticMastercopy', type: 'address' }],
            name: 'ExoticMarketMastercopyChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'marketAddress', type: 'address' }],
            name: 'MarketCanceled',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'marketAddress', type: 'address' },
                { indexed: false, internalType: 'string', name: 'marketQuestion', type: 'string' },
                { indexed: false, internalType: 'address', name: 'marketOwner', type: 'address' },
            ],
            name: 'MarketCreated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'marketAddress', type: 'address' }],
            name: 'MarketPaused',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'marketAddress', type: 'address' }],
            name: 'MarketReset',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'marketAddress', type: 'address' }],
            name: 'MarketResolved',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'duration', type: 'uint256' }],
            name: 'MinimumMarketMaturityDurationChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'duration', type: 'uint256' }],
            name: 'MinimumPositionDurationChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'fixedBond', type: 'uint256' }],
            name: 'NewFixedBondAmount',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'maxNumberOfTags', type: 'uint256' }],
            name: 'NewMaxNumberOfTags',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'maxOracleCouncilMembers', type: 'uint256' }],
            name: 'NewMaxOracleCouncilMembers',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'maximumPositionsAllowed', type: 'uint256' }],
            name: 'NewMaximumPositionsAllowed',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'oracleCouncilAddress', type: 'address' }],
            name: 'NewOracleCouncilAddress',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'paymentTokenAddress', type: 'address' }],
            name: 'NewPaymentToken',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'safeBox', type: 'address' }],
            name: 'NewSafeBoxAddress',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'tagsAddress', type: 'address' }],
            name: 'NewTagsAddress',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'thalesBondsAddress', type: 'address' }],
            name: 'NewThalesBonds',
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
            inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
            name: 'Paused',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'pauserAddress', type: 'address' }],
            name: 'PauserAddressAdded',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'pauserAddress', type: 'address' }],
            name: 'PauserAddressRemoved',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'resolverPercentage', type: 'uint256' }],
            name: 'ResolverPercentageChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'safeBoxPercentage', type: 'uint256' }],
            name: 'SafeBoxPercentageChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
            name: 'Unpaused',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'withdrawalPercentage', type: 'uint256' }],
            name: 'WithdrawalPercentageChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'pDAOResolveTimePeriod', type: 'uint256' }],
            name: 'setPDAOResolveTimePeriodChanged',
            type: 'event',
        },
        { inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'activeMarkets',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_pauserAddress', type: 'address' }],
            name: 'addPauserAddress',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'backstopTimeout',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_marketAddress', type: 'address' }],
            name: 'cancelMarket',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'claimTimeoutDefaultPeriod',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_marketAddress', type: 'address' }],
            name: 'closeDispute',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'string', name: '_marketQuestion', type: 'string' },
                { internalType: 'string', name: '_marketSource', type: 'string' },
                { internalType: 'uint256', name: '_endOfPositioning', type: 'uint256' },
                { internalType: 'uint256', name: '_fixedTicketPrice', type: 'uint256' },
                { internalType: 'bool', name: '_withdrawalAllowed', type: 'bool' },
                { internalType: 'uint256[]', name: '_tags', type: 'uint256[]' },
                { internalType: 'uint256', name: '_positionCount', type: 'uint256' },
                { internalType: 'string[]', name: '_positionPhrases', type: 'string[]' },
            ],
            name: 'createExoticMarket',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'creatorAddress',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'creatorPercentage',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_marketAddress', type: 'address' },
                { internalType: 'address', name: '_disputor', type: 'address' },
            ],
            name: 'disputeMarket',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'disputePrice',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'exoticMarketMastercopy',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'fixedBondAmount',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_index', type: 'uint256' }],
            name: 'getActiveMarketAddress',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_marketAddress', type: 'address' }],
            name: 'getActiveMarketIndex',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_market', type: 'address' }],
            name: 'getMarketBondAmount',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'initNonReentrant', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'address', name: '_owner', type: 'address' },
                { internalType: 'uint256', name: '_minimumPositioningDuration', type: 'uint256' },
                { internalType: 'address', name: '_paymentToken', type: 'address' },
            ],
            name: 'initialize',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_marketAddress', type: 'address' }],
            name: 'isActiveMarket',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_pauser', type: 'address' }],
            name: 'isPauserAddress',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxNumberOfTags',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxOracleCouncilMembers',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maximumPositionsAllowed',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'minimumPositioningDuration',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'nominateNewOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'nominatedOwner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'numOfActiveMarkets',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'oracleCouncilAddress',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'pDAOResolveTimePeriod',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'paused',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'pauserAddress',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'pauserIndex',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'pausersCount',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'paymentToken',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_pauserAddress', type: 'address' }],
            name: 'removePauserAddress',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_marketAddress', type: 'address' }],
            name: 'resetMarket',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_marketAddress', type: 'address' },
                { internalType: 'uint256', name: '_outcomePosition', type: 'uint256' },
            ],
            name: 'resolveMarket',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'resolverAddress',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'resolverPercentage',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'safeBoxAddress',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'safeBoxPercentage',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_market', type: 'address' },
                { internalType: 'address', name: '_recepient', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'sendMarketBondAmountTo',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_market', type: 'address' }],
            name: 'setBackstopTimeout',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_creatorPercentage', type: 'uint256' }],
            name: 'setCreatorPercentage',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_disputePrice', type: 'uint256' }],
            name: 'setDisputePrice',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_exoticMastercopy', type: 'address' }],
            name: 'setExoticMarketMastercopy',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_fixedBond', type: 'uint256' }],
            name: 'setFixedBondAmount',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_maxNumberOfTags', type: 'uint256' }],
            name: 'setMaxNumberOfTags',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_maxOracleCouncilMembers', type: 'uint256' }],
            name: 'setMaxOracleCouncilMembers',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_maximumPositionsAllowed', type: 'uint256' }],
            name: 'setMaximumPositionsAllowed',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_duration', type: 'uint256' }],
            name: 'setMinimumPositioningDuration',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_councilAddress', type: 'address' }],
            name: 'setOracleCouncilAddress',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'setOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_pDAOResolveTimePeriod', type: 'uint256' }],
            name: 'setPDAOResolveTimePeriod',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_paymentToken', type: 'address' }],
            name: 'setPaymentToken',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_resolverPercentage', type: 'uint256' }],
            name: 'setResolverPercentage',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_safeBoxAddress', type: 'address' }],
            name: 'setSafeBoxAddress',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_safeBoxPercentage', type: 'uint256' }],
            name: 'setSafeBoxPercentage',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_tagsAddress', type: 'address' }],
            name: 'setTagsAddress',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_thalesBonds', type: 'address' }],
            name: 'setThalesBonds',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_withdrawalPercentage', type: 'uint256' }],
            name: 'setWithdrawalPercentage',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'tagsAddress',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'thalesBonds',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'proxyAddress', type: 'address' }],
            name: 'transferOwnershipAtInit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'withdrawalPercentage',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
    ],
};

export default exoticPositionalMarketManagerContract;
