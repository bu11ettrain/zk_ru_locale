export default {
  shared: {
    loading: 'Loading',
    searchError: 'Address does not exist',
    copySuccess: 'Successfully copied',
    emptyData: 'Empty',
    copy: 'Copy'
  },
  header: {
    projects: 'projects',
    home: 'Home',
    statistics: 'Statistics',
    start: 'Start Mining',
    placeholder: 'Miner Address',
    blog: 'Blog'
  },
  footer: {
    copyright: '© ZK.Work All Rights Reserved',
    community: {
      title: 'Community',
      discord: 'Discord',
      medium: 'Medium',
      twitter: 'Twitter'
    },
    pools: {
      title: 'Links',
      sixBlock: '6block.com',
      aleoInfo: 'aleo.info',
      aleoOrg: 'aleo.org'
    },
    others: {
      title: 'Other Platforms',
      etherchain: 'etherchain.org',
      poolWatch: 'poolwatch.io'
    },
    contact: {
      title: 'Contact Us'
    },
    docs: {
      title: 'Docs',
      bugBounty: 'Bug Bounty',
      faq: 'FAQ'
    }
  },

  entry: {
    supportedProjects: 'SUPPORTED PROJECTS',
    aleoIs: 'Aleo is a Layer 1 blockchain bringing privacy to the web.',
    ironfishIs: 'The Privacy Platform for web3.',
    spacemeshIs: 'Spacemesh is a layer 1 Proof of Space Time (PoST) protocol.',
    subspaceIs:
      'Subspace is a fourth generation blockchain built for the next wave of crypto creators',
    whyChooseUs: {
      title: 'WHY CHOOSE US',
      items: [
        {
          title: 'Excellence',
          content:
            'ZK.Work ranks 2nd in Filecoin Space Race, 2nd in Aleo Testnet and 3rd in Iron Fish Testnet'
        },
        {
          title: 'Monitoring system',
          content:
            'Self-developed "monitoring system" ensures the operation of mining machines constantly supervised'
        },
        {
          title: 'Technical personnel',
          content:
            'International team of top technical talents with veteran experience and knowledge of the mining industry'
        },
        {
          title: 'Globalization',
          content:
            'Global layout with mines extensively distributed around Asia, Europe, America, etc'
        }
      ]
    },
    milestone: {
      title: 'MILESTONE',
      items: [
        {
          title: '2020',
          content: 'Took 2nd place in Filecoin Space Race'
        },
        {
          title: '2022',
          content: 'Got 3rd place during Ironfish Phase2'
        },
        {
          title: '2020 - 2023',
          content: 'Ranked 2nd both in Aleo Testnet2 and Testnet3 Phase2'
        }
      ]
    }
  },

  home: {
    slogan: ['The Leading', ' Mining ', ' Platform For ', 'Zero Knowledge Proofs'],
    subTitle: 'Mining pools for professionals by professionals',
    start: 'Get start to explore',
    hashrate: 'Hashrate',
    netspace: 'EST Netspace',
    activeMiners: 'Active Miners',
    workers: 'Workers',
    blocks: 'Blocks / h',
    solutions: 'Solutions / h',
    credits: 'Credits / h',
    aleo: 'ALEO / h',
    aleoAverageProfit: 'ALEO / MH',
    price: 'Price',
    average: '100GH/s Daily Profit',
    dailyProfitPerT: 'Daily Profit/T',
    networkPower: 'Network Power',

    blockList: {
      recentlyMinedSolutions: 'Recently Submitted Solutions',
      recentlyMined: 'Recently mined Blocks',
      blockHeight: 'Block Height',
      blockHash: 'Block Hash',
      commitment: 'Commitment',
      time: 'Time',
      viewMore: 'View more'
    },

    support: {
      title: 'Help & Support',
      desc: 'Join Mining Group for more information'
    }
  },

  coin: {
    dashboard: {
      title: 'Dashboard',
      autoUpdate: 'Auto Update',
      data: {
        activeWorkers: 'Workers Active',
        inactiveWorkers: '/Inactive',
        unpaid: 'Unpaid Profit/Credits',
        totalProfit: 'Total Profit/Credits',
        hashrate: 'Hashrate',
        current: 'Current',
        average: 'Average',
        shares: 'Shares',
        valid: 'Valid',
        stale: 'Stale',
        invalid: 'Invalid',
        currentHashRate: 'Current Hashrate',
        averageHashrate: 'Average Hashrate',
        sharesAndWorkers: 'Shares & Workers',
        validShares: 'Valid Shares',
        invalidShares: 'Invalid Shares',
        tableWorkers: 'Workers',
        staleShares: 'Stale Shares',
        poolFeeRate: 'Pool fee rate',
        hours24: '24 Hours',
        minimumPayoutAmount: 'Min amount',
        settlementTime: 'Settlement time',
        settlementTimeTip: 'Daily 01:00 ~ 04:00 (UTC)'
      },
      workers: {
        activeWorkersTitle: 'Active Workers',
        inactiveWorkersTitle: 'Inactive Workers',
        placeholder: 'Filter By Worker',
        name: 'Name',
        version: 'Version',
        currentHashRate: 'Hashrate',
        currentNetspace: 'Current Netspace',
        validShares: 'Valid Shares',
        staleShares: 'Stale Shares',
        invalidShares: 'Invalid Shares',
        lastSeenTimestamp: 'Last Seen',
        status: 'Status'
      },
      worker: {
        title: 'Worker'
      }
    },
    payouts: {
      title: 'Payouts',
      aleoPayoutsTip:
        "The previous day's settlement is completed daily between 01:00-04:00 UTC, and a payment will be made once the payout threshold is reached.",
      data: {
        totalRevenue: 'Total Profit/Credits ( {coinToken} )',
        paidCoin: 'Paid ( {coinToken} )',
        unpaidProfit: 'UnPaid ( {coinToken} )',
        todayProfit: "Today's ( {coinToken} )",
        yesterdayEarning: "Yesterday's ( {coinToken} )",
        unFinalizedProfit: 'Unfinalized ( {coinToken} )',
        invalidProfit: 'Non-Reward ( {coinToken} )'
      },
      last: {
        title: 'Last 100 Payouts'
      },
      income: {
        title: 'Income during the last 1000 rounds'
      },
      table: {
        title: 'Payouts',
        profit: 'Profit',
        placeholder: 'Filter By Address',
        date: 'Date',
        type: 'Type',
        withdrawalId: 'Withdrawal Id',
        amount: 'Amount ( {coinToken} )',
        hashRate: 'Hashrate',
        paidAmount: 'PaidAmount ( {coinToken} )',
        payedTime: 'PayTime',
        status: 'Status',
        txFee: 'Tx Fee',
        txId: 'Tx Id',
        txHash: 'Tx Hash',
        mined: 'Mined',
        reward: 'Reward',
        download: 'Download'
      }
    },
    statistics: {
      title: 'Mining Pool Statistics',
      hashrate: 'Hashrate',
      foundBlocks: 'Found Blocks',
      submittedSolutions: 'Submitted Solutions',
      miningProfit: 'Mining Profit'
    },
    start: {
      title: 'HOW TO CONNECT',
      downloadcpu: '1. Download for CPU',
      downloadgpu: '2. Download for GPU',
      linux: '2. Linux',
      ironfishMiningTutorial: 'Ironfish Mining Tutorial',
      customizedCpuMiningSoftware: 'ZK.Work Customized Mining Software For CPU',
      customizedGpuMiningSoftware: 'ZK.Work Customized Mining Software For GPU',
      gpuSoftwareExplain1:
        'Runtime environment relies on cuda; Ubuntu18.04 installation reference:',
      gpuSoftwareExplain2:
        'If the old nvidia driver cannot run after installation, please uninstall the old driver and install cuda'
    },
    description: {
      home: {
        hashrate: 'Data from the past 10 minutes',
        activeMiners: 'Data from the past 10 minutes',
        workers: 'Data from the past 10 minutes',
        blocks: 'Mined blocks per hour in the last 6 hours',
        solutions: 'The average value of the past 6 hours',
        credits: 'Mined credits per hour in the last 6 hours',
        price: '{coinToken} real-time price',
        netspace: 'Netspace',
        dailyProfitPerT: '1T Daily Profit',
        average: '',
        networkPower: '',
        aleo: 'The average value of the past 6 hours',
        aleoAverageProfit: '24h average of yesterday (UTC)'
      },
      miner: {
        activeWorkers: 'The number of miners who have submitted shares in the last 60 minutes',
        inactiveWorkers: `The number of miners who have not submitted shares in the last 60 minutes but have submitted in the last 24 hours`,
        inactiveWorkers_subspace: `The number of miners who have not submitted shares in the last 60 minutes`,
        totalProfit: 'Total rewards, including finalized and unfinalized',
        unpaidProfit: 'Unpaid part of the finalized rewards',
        currentHashRate: `Average hash rate in the last 10-minute interval, e.g. at 4:54, the 10-minute metric between 4:40 to 4:50 will be displayed`,
        averageHashRate: 'Average hash rate in the last 6 hours',
        validShares: `The number of valid shares in the last 10-minute interval, e.g. at 4:54, the 10-minute metric from 4:40 to 4:50 will be displayed`,
        validShares_subspace: `The number of valid shares in the last 3-hours interval, e.g. at 4:54, the 3-hours metric from 1:50 to 4:50 will be displayed`,
        staleShares: `The number of stale shares in the last 10-minute interval, e.g. at 4:54, the 10-minute metric between 4:40 to 4:50 will be displayed, stale shares will not be included in hashrate.`,
        invalidShares: `The number of invalid shares in the last 10-minute interval, e.g. at 4:54, the 10-minute metric between 4:40 to 4:50 will be displayed`,
        totalRevenue: 'Total rewards, including finalized and unfinalized',
        paidCoin: 'The total amount of credited rewards',
        todayProfit: 'The amount of finalized rewards today so far',
        yesterdayEarning: `Yesterday's finalized rewards`,
        unFinalizedProfit: 'Unfinalized Profit/Credits',
        invalidProfit:
          'Points earned before 7.15 12:00 EST or before block height 62196 are not included in the rewards'
      },
      worker: {
        currentHashRate: `Average hash rate in the last 10-minute interval, e.g. at 4:54, the 10-minute metric between 4:40 to 4:50 will be displayed`,
        currentHashRate_subspace: '',

        averageHashrate: 'Average hash rate in the last 6 hours',
        validShares: `The number of valid shares in the last 10-minute interval, e.g. at 4:54, the 10-minute metric between 4:40 to 4:50 will be displayed`,
        validShares_subspace: `The number of valid shares in the last 3-hours interval, e.g. at 4:54, the 3-hours metric between 4:40 to 4:50 will be displayed`,
        staleShares: `The number of stale shares in the last 10-minute interval, e.g. at 4:54, the 10-minute metric between 4:40 to 4:50 will be displayed, stale shares will not be included in hashrate.`,

        staleShares_subspace: '',

        invalidShares: `The number of invalid shares in the last 10-minute interval, e.g. at 4:54, the 10-minute metric between 4:40 to 4:50 will be displayed`,
        invalidShares_subspace: '',

        lastSeenTimestamp: 'The latest share submission time',
        lastSeenTimestamp_subspace: 'The latest share submission time'
      },
      payouts: {
        date: 'Settlement date',
        hashRate: 'Average hash rate for the day',
        amount: 'Finalized rewards for the day',
        paidAmount: 'The actual amount received on the day',
        payedTime: 'Transfer time',
        status: 'Payout status, including paid, unpaid, threshold not reached',
        tips: 'Tips: Current data are all test network credits'
      }
    }
  },

  blog: {
    title: 'Blog',
    subTitle: 'Latest updates, campaigns, tutorials, weekly progress and more...',
    news: 'News',
    tutorial: 'Tutorial',
    documents: 'Documents',
    announcements: 'Announcements',
    more: 'More'
  },

  user: {
    register: 'Register',
    inviteCode: 'Invitation code (optional)',
    registerNow: 'Register now',
    registerSuccess: 'Register successfully',
    registeredEmail: 'Registered email',
    registeredEmailTip: 'Your email has been registered, login right now ?',
    passwordRuleTip: 'Password must be 8-16 characters long and start with letters',
    agreement: 'By checking this box, I agree with ZKWork’s agreement and privacy policy',
    verify: 'Verify',
    verifiedEmail: 'This email has been verified before',
    verifySuccess: 'Validation succeeded',
    verifyFailed: 'Validation failed',
    verifySuccessTip: 'Verification passed, you can click the button below to log in',
    invalidVerifyLink: 'Invalid validation link',
    linkHasExpired: 'Link expired',
    networkError: 'Network error',
    unknownError: 'Unknown error',
    login: 'Login',
    goLogin: 'Go to login',
    loginSuccess: 'Successfully logged in',
    logout: 'Logout',
    forgetPassword: 'Forget password',
    resetPassword: 'Reset password',
    reset: 'Reset',
    resetSuccess: 'Reset successfully',
    pleaseGoLogin: 'Please go to the login page to login',
    enterEmail: 'Please enter the email address',
    invalidEmail: 'Invalid email address',
    invalidInput: 'Invalid username or password',
    enterPassword: 'Please input a password',
    repeatPassword: 'Please re-enter the password',
    passwordNotEqual: 'The two passwords are inconsistent',
    emailSent: 'Email sent',
    emailSentTip: 'The email has been sent, please go to the mailbox to verify',
    send: 'Send',
    addressManage: 'Address management',
    addressList: 'Address list',
    address: 'Address',
    inputAddrToAdd: 'Please enter and add {addrType} address',
    add: 'Add',
    emptyAddress: 'Address cannot be empty',
    addSuccess: 'Successfully added',
    remove: 'Remove',
    removeSuccess: 'Successfully removed',
    handle: 'Handle',
    accountDes: 'Hello, {account}',
    coinType: 'Coin',
    myAssets: 'MY ASSETS',
    haveNoAddress: "You haven't added an address",
    addMiningAddress: 'Add mining address',
    amount: 'Amount',
    myProfile: 'My Profile',
    collectIt: 'Collect It',
    removeIt: 'Remove It',

    myCommission: 'My commission',
    goInvite: 'GO INVITE',
    assetsDetails: 'ASSETS DETAILS',
    totalRevenue: 'Total Revenue',
    edit: 'Edit',
    delete: 'Delete',
    noIncomeAddr: 'No Income Address Has Been Added Yet',
    addTo: 'Add To',
    invite: 'INVITE',
    invitedCount: 'Number of people invited',
    record: 'Record',
    time: 'Time',
    startDate: 'Start Date',
    endDate: 'End Date',
    commissionEarned: 'Commission Earned',
    inviteUsers: 'Users invited',
    token: 'Token',
    amountOfIncome: 'Amount of income',
    commission: 'Commission',
    lastWeek: 'Last week',
    lastMonth: 'Last month',
    lastThreeMonths: 'Last three months',
    confirm: 'CONFIRM',
    cancel: 'CANCEL',
    successSentEmail: 'Email successfully sent',
    addAddrSuccess: 'Add Reward Address Success',
    deleteAddrSuccess: 'Remove Reward Address Success',
    addTokenRevenueAddress: 'Add new API Token revenue address',
    editTokenRevenueAddress: 'Edit Token revenue address',
    deleteTokenRevenueAddress: 'Delete Token revenue address',
    confirmDeletionOfRevenueAddress: 'Are you sure you want to delete this revenue address?',
    deletionOfRevenueAddressDes:
      'If you are still using the API token, after deleting the address here, the original mining process will not be affected, and the income will continue to accumulate in the ZK.WORK background until the income address is reset.',
    originalIncomeAddr: 'Original Income Address',
    revenueAddrDelete: 'Revenue address to be deleted',
    modifyGoogleAuth: 'Modify Google Authenticator',
    googleVerificationCode: 'Please enter the Google verification code',
    addGoogleAuth: 'Add Google Authenticator',
    confirmDeleteApiToken: 'Are you sure you want to delete the API token address?',
    apiTokenDeleteWarning:
      'If you are still using the API token, after deleting the address here, the original mining process will not be affected, and you can use the add address function to add it again.',
    sendEmail: 'SEND EMAIL',
    applySuccess: 'Successfully Applied',
    inputEmailCode: 'Please enter the email verification code',
    scanGoogleQrCode: 'Please use Google Authenticator to scan the QR code below',
    verifyCode: 'Verification code',
    bindGoogleAuthSuccess: 'Bind Google Authenticator Success',
    inputAddress: 'Please enter address',
    inputRevenueAddress: 'Please enter revenue address',
    useApiTokenAddr: 'Use API token address',
    invitationCode: 'Invitation code',
    inviteLink: 'Invite link',
    invitationQRCode: 'Invitation QR code',
    withdraw: 'Withdraw',
    withdrawRecords: 'Withdraw records',
    sum: 'Sum',
    schedule: 'Schedule',
    trade: 'Trade',
    transactionLink: 'Transaction Link',
    txLink: 'Tx Link',
    inputwithdrawalAmount: 'Input withdrawal Amount',
    inputWithdrawalAddress: 'Please Input Withdrawal Address',
    withdrawalAmount: 'Withdrawal Amount',
    withdrawalAddress: 'Withdrawal Address',
    emailVerificationCode: 'E-mail verification code',
    inputGoogleVerificationCode: 'Input google verification code',
    modifyGoogleVerificationCode: 'Modify Google Verification Code',
    addAddress: 'ADD ADDRESS',
    details: 'details',

    accountNotActivated: 'Account has not been activated',
    resendEmailDesc:
      'The account has not been activated yet, do you want to resend the activation link to the email address {email} ?',
    no: 'No',
    yes: 'Yes',

    revenueAddress: 'Revenue Address',
    watchAddress: 'Watch Address',
    tag: 'Tag',
    tagPlaceholder: 'Self define tag (optional)',
    allocationRatio: 'Allocation Ratio',
    operation: 'Operation',
    apiTokenAddressTotal: 'ApiToken Address Total',
    watchAddressTotal: 'Watch Address Total',

    deleteConfirm: 'Are you sure delete ?',
    addWatchAddress: 'Add Watch Address',
    editWatchAddress: 'Edit Watch Address',

    optional: 'Optional',
    allocableRatio: 'Allocable ratio',
    emailCode: 'Email Code',
    googleCode: 'Google Code',
    referralCode: 'Referral Code',
    referralCodePlaceholder: 'If you were invited by someone (optional)',
    NoInvited: 'No. of people invited',
    withdrawalThreshold: 'Withdrawal Threshold',
    withdrawalThresholdTip: 'How many coins trigger an automatic withdrawal',
    autoWithdrawal: 'Automatic Withdrawal',

    notSelected: 'Not Selected',
    inValidPercentage: 'Invalid Percentage !'
  }
}
