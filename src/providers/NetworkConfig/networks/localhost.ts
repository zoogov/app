import { legacy, addresses } from '@decentdao/decent-contracts';
import {
  getCompatibilityFallbackHandlerDeployment,
  getMultiSendCallOnlyDeployment,
  getProxyFactoryDeployment,
  getSafeL2SingletonDeployment,
} from '@safe-global/safe-deployments';
import { Chain } from 'wagmi/chains';
import { GovernanceType } from '../../../types';
import { NetworkConfig } from '../../../types/network';
import {
  getSafeContractDeploymentAddress,
  getAddressFromContractDeploymentInfo,
} from './utils';

const SAFE_VERSION = '1.3.0';

// Define localhost chain
const localhost: Chain = {
  id: 1337,
  name: 'Localhost',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545'],
    },
    public: {
      http: ['http://127.0.0.1:8545'],
    },
  },
  blockExplorers: {
    default: { name: 'Local Explorer', url: 'http://localhost:8545' },
  },
  testnet: true,
};

const chain = localhost;
// Use mainnet addresses as fallback for local development
const a = legacy.addresses[1] || {};

export const localhostConfig: NetworkConfig = {
  order: 100,
  chain,
  rpcEndpoint: 'http://127.0.0.1:8545',
  safeBaseURL: '',
  etherscanBaseURL: '',
  etherscanAPIUrl: '',
  addressPrefix: 'local',
  nativeTokenIcon: '/images/coin-icon-eth.svg',
  isENSSupported: false,
  decentSubgraph: {
    space: 0,
    slug: 'local',
    id: 'local',
  },
  sablierSubgraph: {
    space: 0,
    slug: 'local',
    id: 'local',
  },
  contracts: {
    // Safe contracts - use default addresses or deploy locally
    gnosisSafeL2Singleton: '0x3E5c63644E683549055b9Be8653de26E0B4CD36E',
    gnosisSafeProxyFactory: '0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2',
    compatibilityFallbackHandler: '0xf48f2B2d2a534e402487b3ee7C18c33Aec0Fe5e4',
    multiSendCallOnly: '0x40A2aCCbd92BCA938b02010E17A5b8929b49130D',

    zodiacModuleProxyFactory: '0x000000000000aDdB49795b0f9bA5BC298cDda236',

    // Use mainnet addresses as placeholders - these would need to be deployed locally
    linearVotingErc20MasterCopy: getAddressFromContractDeploymentInfo(a.LinearERC20Voting) || '0x0000000000000000000000000000000000000000',
    linearVotingErc20HatsWhitelistingMasterCopy: getAddressFromContractDeploymentInfo(
      a.LinearERC20VotingWithHatsProposalCreation,
    ) || '0x0000000000000000000000000000000000000000',
    linearVotingErc721MasterCopy: getAddressFromContractDeploymentInfo(a.LinearERC721Voting) || '0x0000000000000000000000000000000000000000',
    linearVotingErc721HatsWhitelistingMasterCopy: getAddressFromContractDeploymentInfo(
      a.LinearERC721VotingWithHatsProposalCreation,
    ) || '0x0000000000000000000000000000000000000000',

    linearVotingErc20V1MasterCopy: getAddressFromContractDeploymentInfo(a.LinearERC20VotingV1) || '0x0000000000000000000000000000000000000000',
    linearVotingErc20HatsWhitelistingV1MasterCopy: getAddressFromContractDeploymentInfo(
      a.LinearERC20VotingWithHatsProposalCreationV1,
    ) || '0x0000000000000000000000000000000000000000',
    linearVotingErc721V1MasterCopy: getAddressFromContractDeploymentInfo(a.LinearERC721VotingV1) || '0x0000000000000000000000000000000000000000',
    linearVotingErc721HatsWhitelistingV1MasterCopy: getAddressFromContractDeploymentInfo(
      a.LinearERC721VotingWithHatsProposalCreationV1,
    ) || '0x0000000000000000000000000000000000000000',

    moduleAzoriusMasterCopy: getAddressFromContractDeploymentInfo(a.Azorius) || '0x0000000000000000000000000000000000000000',
    moduleFractalMasterCopy: getAddressFromContractDeploymentInfo(a.FractalModule) || '0x0000000000000000000000000000000000000000',

    freezeGuardAzoriusMasterCopy: getAddressFromContractDeploymentInfo(a.AzoriusFreezeGuard) || '0x0000000000000000000000000000000000000000',
    freezeGuardMultisigMasterCopy: getAddressFromContractDeploymentInfo(a.MultisigFreezeGuard) || '0x0000000000000000000000000000000000000000',

    freezeVotingErc20MasterCopy: getAddressFromContractDeploymentInfo(a.ERC20FreezeVoting) || '0x0000000000000000000000000000000000000000',
    freezeVotingErc721MasterCopy: getAddressFromContractDeploymentInfo(a.ERC721FreezeVoting) || '0x0000000000000000000000000000000000000000',
    freezeVotingMultisigMasterCopy: getAddressFromContractDeploymentInfo(a.MultisigFreezeVoting) || '0x0000000000000000000000000000000000000000',

    votesErc20MasterCopy: getAddressFromContractDeploymentInfo(a.VotesERC20) || '0x0000000000000000000000000000000000000000',
    votesErc20LockableMasterCopy: '0x0000000000000000000000000000000000000000',
    votesERC20StakedV1MasterCopy: '0x0000000000000000000000000000000000000000',

    claimErc20MasterCopy: getAddressFromContractDeploymentInfo(a.ERC20Claim) || '0x0000000000000000000000000000000000000000',

    decentAutonomousAdminV1MasterCopy: getAddressFromContractDeploymentInfo(
      a.DecentAutonomousAdminV1,
    ) || '0x0000000000000000000000000000000000000000',

    paymaster: {
      decentPaymasterV1MasterCopy: '0x0000000000000000000000000000000000000000',
      linearERC20VotingV1ValidatorV1: '0x0000000000000000000000000000000000000000',
      linearERC721VotingV1ValidatorV1: '0x0000000000000000000000000000000000000000',
    },

    keyValuePairs: '0x0000000000000000000000000000000000000000',

    decentHatsCreationModule: '0x0000000000000000000000000000000000000000',
    decentHatsModificationModule: '0x0000000000000000000000000000000000000000',
    decentSablierStreamManagementModule: '0x0000000000000000000000000000000000000000',

    hatsProtocol: '0x0000000000000000000000000000000000000000',
    erc6551Registry: '0x0000000000000000000000000000000000000000',
    hatsAccount1ofNMasterCopy: '0x0000000000000000000000000000000000000000',
    hatsElectionsEligibilityMasterCopy: '0x0000000000000000000000000000000000000000',
    sablierV2Batch: '0x0000000000000000000000000000000000000000',
    sablierV2LockupDynamic: '0x0000000000000000000000000000000000000000',
    sablierV2LockupTranched: '0x0000000000000000000000000000000000000000',
    sablierV2LockupLinear: '0x0000000000000000000000000000000000000000',
    disperse: '0x0000000000000000000000000000000000000000',

    accountAbstraction: {
      entryPointv07: '0x0000000000000000000000000000000000000000',
      lightAccountFactory: '0x0000000000000000000000000000000000000000',
    },
  },
  staking: {},
  moralis: {
    chainSupported: false,
    deFiSupported: false,
  },
  createOptions: [
    GovernanceType.MULTISIG,
    GovernanceType.AZORIUS_ERC20,
    GovernanceType.AZORIUS_ERC721,
  ],
  bundlerMinimumStake: 0n,
  stablecoins: {
    usdc: '0x0000000000000000000000000000000000000000',
  },
};

export default localhostConfig;