export default {
  shared: {
    loading: 'в номере не уютно',
    searchError: 'Адрес не существует',
    copySuccess: 'Успешно копировано',
    emptyData: 'Пока нет данных',
    copy: 'копия'
  },
  header: {
    projects: 'проекты',
    home: 'Домашняя страница',
    statistics: 'Статистические данные',
    start: 'Начать майнить',
    placeholder: 'Адрес майнера',
    blog: 'блог'
  },
  footer: {
    copyright: '© ZK.Work All Rights Reserved',
    community: {
      title: 'Сообщество',
      discord: 'Discord',
      medium: 'Medium',
      twitter: 'Twitter'
    },
    pools: {
      title: 'Ссылки',
      sixBlock: '6block.com',
      aleoInfo: 'aleo.info',
      aleoOrg: 'aleo.org'
    },
    others: {
      title: 'Другие платформы',
      etherchain: 'etherchain.org',
      poolWatch: 'poolwatch.io'
    },
    contact: {
      title: 'связаться с нами'
    },
    docs: {
      title: 'Документация',
      bugBounty: 'Bug награда',
      faq: 'FAQ'
    }
  },

  entry: {
    supportedProjects: 'ПОДДЕРЖИВАЕМЫЕ ПРОЕКТЫ',
    aleoIs: 'Aleo - это Layer 1 блокчейн, обеспечивающий конфиденциальность в Интернете.',
    ironfishIs: 'Ironfish - это платформа конфиденциальности для web3.',
    spacemeshIs: 'Spacemesh — это протокол доказательства пространства-времени (PoST) уровня 1.',
    subspaceIs:
      'Subspace - это блокчейн четвертого поколения, созданный для следующей волны создателей криптовалюты.',
    whyChooseUs: {
      title: 'ПОЧЕМУ ВЫБИРАТЬ НАС',
      items: [
        {
          title: 'Превосходство',
          content:
            'ZK.Work заняла 2-е место в Filecoin Space Race, 2-е место в Aleo Testnet и 3-е место в Iron Fish Testnet'
        },
        {
          title: 'Система мониторинга',
          content:
            'Собственная разработка "системы мониторинга" обеспечивает постоянный контроль за работой добычных машин'
        },
        {
          title: 'Технический персонал',
          content:
            'Международная команда высококвалифицированных технических специалистов с большим опытом и знаниями о горнодобывающей промышленности'
        },
        {
          title: 'Глобализация',
          content:
            'Глобальное распределение шахт, широко распространенных по всей Азии, Европе, Америке и т.д.'
        }
      ]
    },
    milestone: {
      title: 'ВЕРШИНА',
      items: [
        {
          title: '2020 год',
          content: 'Заняла 2-е место в Filecoin Space Race'
        },
        {
          title: '2022 год',
          content: 'Заняла 3-е место в Ironfish Phase2'
        },
        {
          title: '2020 - 2023 годы',
          content: 'Заняла 2-е место как в Aleo Testnet2, так и в Testnet3 Phase2'
        }
      ]
    }
  },

  home: {
    slogan: ['The Leading', ' Mining ', ' Platform For ', 'Zero Knowledge Proofs'],
    subTitle: 'Mining pools for professionals by professionals',
    start: 'Начинаем!',
    hashrate: 'Хешрейт',
    netspace: 'EST Netspace',
    activeMiners: 'Активные майнеры',
    workers: 'Оборудование майнинга',
    blocks: 'Блок/ч',
    solutions: 'Solutions/ч',
    credits: 'Credits/ч',
    aleo: 'ALEO/ч',
    aleoAverageProfit: 'ALEO / MH',
    price: 'Цена',
    average: '100GH/s Дневная прибыль',
    dailyProfitPerT: 'Дневная прибыль/T',
    networkPower: 'Вычислительная мощность всей сети',

    blockList: {
      recentlyMinedSolutions: 'Последнее представление Solutions',
      recentlyMined: 'недавно добыто',
      blockHeight: 'высота блока',
      blockHash: 'хеш блока',
      commitment: 'Commitment',
      time: 'время',
      viewMore: 'узнать больше'
    },

    support: {
      title: 'Помощь и поддержка',
      desc: 'Присоединяйтесь к сообществу, чтобы узнать больше'
    }
  },

  coin: {
    dashboard: {
      title: 'Панель приборов',
      autoUpdate: 'Автоматическое обновление',
      data: {
        activeWorkers: 'Активные майнеры',
        inactiveWorkers: 'Неактивные',
        unpaid: 'Невыплаченная прибыль',
        totalProfit: 'Невыплаченная прибыль',
        hashrate: 'Хешрейт',
        current: 'Сейчас',
        average: 'В среднем',
        shares: 'Акции',
        valid: 'действительные',
        stale: 'устаревшие',
        invalid: 'недействительные',
        currentHashRate: 'Текущий хешрейт',
        averageHashrate: 'Средний хешрейт',
        sharesAndWorkers: 'Доля вознаграждений & Оборудование майнинга',
        validShares: 'Действительная доля вознаграждений',
        invalidShares: 'Invalid Shares',
        tableWorkers: 'Оборудование майнинга',
        staleShares: 'Истекшая доля вознаграждений',
        poolFeeRate: 'Ставка',
        hours24: '24 часа',
        minimumPayoutAmount: 'Минимальная сумма выплаты',
        settlementTime: 'Время расчёта',
        settlementTimeTip: 'Ежедневно с 01:00 до 04:00 (UTC)'
      },
      workers: {
        activeWorkersTitle: 'Активные оборудования майнинга',
        inactiveWorkersTitle: 'неактивный оборудования майнинга',
        placeholder: 'Фильтровать по оборудованиям майнинга',
        name: 'Название',
        version: 'Версия',
        currentHashRate: 'Текущий хешрейт',
        currentNetspace: 'Текущий хешрейт',
        validShares: 'Действительная доля вознаграждений',
        staleShares: 'Истекшая доля вознаграждений',
        invalidShares: 'Бездействительная доля вознаграждений',
        lastSeenTimestamp: 'Последнее появление',
        status: 'Статус'
      },
      worker: {
        title: 'Оборудование майнинга'
      }
    },
    payouts: {
      title: 'Выплаты',
      aleoPayoutsTip:
        'Ежедневно в период с 01:00 до 04:00 UTC производится расчёт за предыдущий день, и выплата будет произведена, как только будет достигнут порог выплаты.',
      data: {
        totalRevenue: 'Общая прибыль ( {coinToken} )',
        paidCoin: 'Выплаченная прибыль ( {coinToken} )',
        unpaidProfit: 'Невыплаченная прибыль ( {coinToken} )',
        todayProfit: 'Сегодня ( {coinToken} )',
        yesterdayEarning: 'Вчера ( {coinToken} )',
        unFinalizedProfit: 'Нефинализированный ( {coinToken} )',
        invalidProfit: 'Неоплачиваемый интеграл( {coinToken} )'
      },
      last: {
        title: 'Последние 100 выплат'
      },
      income: {
        title: 'Выручка за последние 1000 раундов'
      },
      table: {
        title: 'Выплаты',
        profit: 'прибыль',
        placeholder: 'сортировка по адресу',
        date: 'дата',
        type: 'тип',
        amount: 'Сумма ( {coinToken} )',
        withdrawalId: 'идентификатор_снятия_денег',
        hashRate: 'Хешрейт ( H/s )',
        paidAmount: 'Выплаченная сумма ( {coinToken} )',
        payedTime: 'Время передачи',
        status: 'Статус',
        txFee: 'Плата за передачу',
        txId: 'Идентификатор передачи',
        txHash: 'торговое гашиш',
        mined: 'горнодобывающий',
        reward: 'премиальный',
        download: 'Скачать'
      }
    },
    statistics: {
      title: 'Статистические данные',
      hashrate: 'Хешрейт',
      foundBlocks: 'Найденные блоки',
      submittedSolutions: 'Представлено Solutions',
      miningProfit: 'Доход от добычи'
    },
    start: {
      title: 'КАК ПОДКЛЮЧИТЬСЯ',
      downloadcpu: '1. загрузка программы CPU',
      downloadgpu: '2. загрузка программы GPU',
      miningTutorial: 'курс разработки',
      ironfishMiningTutorial: 'курс разработки Ironfish',
      customizedCpuMiningSoftware:
        'Индивидуальное программное обеспечение для майнинга для CPU ZK.Work',
      customizedGpuMiningSoftware:
        'Индивидуальное программное обеспечение для майнинга для GPU ZK.Work',
      gpuSoftwareExplain1: 'Среда выполнения зависит от cuda; Ссылка на установку Ubuntu18.04:',
      gpuSoftwareExplain2:
        'Если старый драйвер nvidia не запускается после установки, удалите его и установите cuda.'
    },
    description: {
      home: {
        hashrate: 'данные за последние 10 минут',
        activeMiners: 'данные за последние 10 минут',
        workers: 'данные за последние 10 минут',
        blocks: 'Добыто блоков в час за последние 6 часов',
        solutions: 'среднее значение за последние 6 часов',
        credits: 'Добыто кредитов в час за последние 6 часов',
        price: 'ALEO Цена в реальном времени',
        netspace: 'сетевое пространство',
        dailyProfitPerT: '1T Ежедневный доход',
        average: '',
        networkPower: '',
        aleo: 'среднее значение за последние 6 часов',
        aleoAverageProfit: 'Среднее за 24 часа вчера (UTC)'
      },
      miner: {
        activeWorkers: 'Количество майнеров, отправивших долю вознаграждений за последние 60 минут',
        inactiveWorkers: `Количество майнеров, которые не отправили долю вознаграждений за последние 60 минут, но отправили за последние 24 часа`,
        inactiveWorkers_subspace:
          'Количество майнеров, которые не предоставили доли в последние 60 минут',
        totalProfit: 'Все вознаграждения, включающие финализированные и нефинализированные',
        unpaidProfit: 'Невыплаченная часть финализированных вознаграждений',
        currentHashRate: `Средняя скорость хеширования за последний 10-минутный интервал, например, в 4:54 будет отображаться 10-минутная метрика с 4:40 до 4:50`,
        averageHashRate: 'Средний хешрейт за последние 6 часов',
        validShares: `Количество действительных долей вознаграждений за последние 10 минут, например, в 4:54 будет отображаться 10-минутная метрика с 4:40 до 4:50`,
        validShares_subspace:
          'Количество действительных долей за последний 3-часовой интервал, например, в 4:54 будет отображаться метрика за последние 3 часа с 1:50 до 4:50',
        staleShares: `Количество истекших долей вознаграждений за последние 10 минут, например, в 4:54 будет отображаться 10-минутная метрика с 4:40 до 4:50, Устаревшие шары не будут включены в хешрейт.`,
        invalidShares: `Количество бездействительных долей вознаграждений за последние 10 минут, например, в 4:54 будет отображаться 10-минутная метрика с 4:40 до 4:50`,
        totalRevenue: 'Все вознаграждения, включающие финализированные и нефинализированные',
        paidCoin: 'Общая сумма начисленных вознаграждений',
        todayProfit: 'Сумма сегодняшних финализированных вознаграждений на данный момент',
        yesterdayEarning: `Сумма вчерашних финализированных вознаграждений`,
        unFinalizedProfit: 'Нефинализированная прибыль',
        invalidProfit:
          'Баллы, заработанные до 7.15 в 12:00 по восточному времени США или до высоты блока 62196, не включаются в вознаграждение'
      },
      worker: {
        currentHashRate: `Средняя скорость хеширования за последний 10-минутный интервал, например, в 4:54 будет отображаться 10-минутная метрика с 4:40 до 4:50`,
        currentHashRate_subspace: '',

        averageHashrate: 'Средний хешрейт за последние 6 часов',
        validShares: `Количество действительных долей вознаграждений за последние 10 минут, например, в 4:54 будет отображаться 10-минутная метрика с 4:40 до 4:50`,
        validShares_subspace: `Количество действительных долей вознаграждений за последние 3-Час, например, в 4:54 будет отображаться 3-Час метрика с 1:50 до 4:50`,

        staleShares: `Количество истекших долей вознаграждений за последние 10 минут, например, в 4:54 будет отображаться 10-минутная метрика с 4:40 до 4:50, Устаревшие шары не будут включены в хешрейт.`,

        staleShares_subspace: '',

        invalidShares: `Количество бездействительных долей вознаграждений за последние 10 минут, например, в 4:54 будет отображаться 10-минутная метрика с 4:40 до 4:50`,
        invalidShares_subspace: '',

        lastSeenTimestamp: 'Последнее время отправки доли вознаграждений',
        lastSeenTimestamp_subspace: 'Последнее время отправки доли вознаграждений',

        status: 'статус'
      },
      payouts: {
        date: 'Расчетная дата',
        hashRate: 'Средний хэшрейт за день',
        amount: ' Сегодняшние финализированные вознаграждения',
        paidAmount: 'Фактическая сумма, полученная в день',
        payedTime: 'Время передачи',
        status: 'Статус выплаты: выплачено, не выплачено, порог не достигнут',
        tips: 'Совет: текущие данные являются тест сети зачет'
      }
    }
  },

  blog: {
    title: 'блог',
    subTitle:
      'Самые свежие обновления, кампании, туториалы, еженедельные отчеты и многое другое...',
    news: 'Общественная информация',
    tutorial: 'консультационный',
    documents: 'Документация',
    announcements: 'объявление',
    more: 'больше'
  },

  user: {
    register: 'регистрация',
    inviteCode: 'Код приглашения (необязательно)',
    registerNow: 'регистрироваться сейчас',
    registerSuccess: 'вы успешно зарегистрированы',
    registeredEmail: 'зарегистрированный почтовый ящик',
    registeredEmailTip:
      'ваш адрес электронной почты зарегистрирован и вы сразу же зарегистрировались?',
    passwordRuleTip: 'длина пароля должна составлять 8 - 16 символов и начинаться с буквы',
    agreement:
      'Поставив галочку, вы соглашаетесь с условиями и политикой конфиденциальности ZK.Work',
    verify: 'подтверждение',
    verifiedEmail: 'данный имейл уже подтвержден',
    verifySuccess: 'подтверждено',
    verifyFailed: 'не удалось подтвердить',
    verifySuccessTip: 'Подтверждено, вы можете нажать на кнопку внизу для входа',
    invalidVerifyLink: 'Недействительная ссылка подтверждения',
    linkHasExpired: 'срок действия ссылки истек',
    networkError: 'Сетевая ошибка',
    unknownError: 'Неизвестная ошибка',
    login: 'логин',
    goLogin: 'Войти',
    loginSuccess: 'Успешный вход в систему',
    logout: 'Выйти',
    forgetPassword: 'Забыли пароль?',
    resetPassword: 'Восстановить пароль',
    reset: 'Восстановить',
    resetSuccess: 'Восстановлено',
    pleaseGoLogin: 'Пожалуйста, вернитесь на страницу входа, чтобы войти',
    enterEmail: 'Введите свой имейл',
    invalidEmail: 'Имейл недействителен',
    invalidInput: 'Неверный пароль или имя',
    enterPassword: 'Введите пароль',
    repeatPassword: 'Введите пароль снова',
    passwordNotEqual: 'Пароли не совпадают',
    emailSent: 'Имейл отправлен',
    emailSentTip: 'Письмо отправлено, пожалуйста, подтвердите в почтовом ящике',
    send: 'Отправить',
    addressManage: 'Управление адресом',
    addressList: 'Список адресов',
    address: 'Aдрес',
    inputAddrToAdd: 'Пожалуйста, введите и добавьте адрес {addrType}',
    add: 'Добавить',
    emptyAddress: 'Адрес не может быть пустым',
    addSuccess: 'Добавлено',
    remove: 'Удалить',
    removeSuccess: 'Удалено',
    handle: 'Операции',
    accountDes: 'Привет，{account}',
    coinType: 'Тип токена',
    myAssets: 'Мои активы',
    haveNoAddress: 'Вы еще не добавили адрес',
    addMiningAddress: 'Добавить адрес',
    amount: 'Количество',
    myProfile: 'мои личные данные',
    collectIt: 'Коллекция',
    removeIt: 'Удалить коллекцию',

    myCommission: 'Моя комиссия',
    goInvite: 'ПРИГЛАСИТЬ',
    assetsDetails: 'ДЕТАЛИ АКТИВОВ',
    totalRevenue: 'Общий доход',
    edit: 'Редактировать',
    delete: 'Удалить',
    noIncomeAddr: 'Адрес дохода не добавлен',
    addTo: 'Добавить в',
    invite: 'ПРИГЛАСИТЬ',
    invitedCount: 'Количество приглашенных людей',
    record: 'Запись',
    time: 'Время',
    startDate: 'Дата начала',
    endDate: 'Дата окончания',
    commissionEarned: 'Заработанная комиссия',
    inviteUsers: 'Пригласить пользователей',
    token: 'Токен',
    amountOfIncome: 'Сумма дохода',
    commission: 'Комиссия',
    lastWeek: 'Прошлая неделя',
    lastMonth: 'Прошлый месяц',
    lastThreeMonths: 'Последние три месяца',
    confirm: 'Подтвердить',
    cancel: 'отмена',
    successSentEmail: 'E-mail успешно отправлен',
    addAddrSuccess: 'Адрес вознаграждения успешно добавлен',
    deleteAddrSuccess: 'Адрес вознаграждения успешно удален',
    addTokenRevenueAddress: 'Добавить новый адрес дохода API токена',
    editTokenRevenueAddress: 'Редактировать адрес дохода токена',
    deleteTokenRevenueAddress: 'Удалить адрес дохода токена',
    confirmDeletionOfRevenueAddress: 'Вы уверены, что хотите удалить этот адрес дохода?',
    deletionOfRevenueAddressDes:
      'Если вы все еще используете API-токен, после удаления адреса здесь, исходный процесс майнинга не будет затронут, а доход продолжит накапливаться на фоне ZK.WORK, пока не будет сброшен адрес дохода.',
    originalIncomeAddr: 'Оригинальный адрес дохода',
    revenueAddrDelete: 'Адрес дохода для удаления',
    modifyGoogleAuth: 'Изменить Google Authenticator',
    googleVerificationCode: 'Введите код подтверждения Google',
    addGoogleAuth: 'Добавить Google Authenticator',
    confirmDeleteApiToken: 'Вы уверены, что хотите удалить адрес API-токена?',
    apiTokenDeleteWarning:
      'Если вы все еще используете API-токен, после удаления адреса здесь, исходный процесс майнинга не будет затронут, и вы сможете использовать функцию добавления адреса, чтобы добавить его снова.',
    sendEmail: 'ОТПРАВИТЬ E-MAIL',
    applySuccess: 'Успешно применено',
    inputEmailCode: 'Введите код подтверждения электронной почты',
    scanGoogleQrCode: 'Используйте Google Authenticator, чтобы отсканировать QR-код ниже',
    verifyCode: 'Код подтверждения',
    bindGoogleAuthSuccess: 'Успешно привязан Google Authenticator',
    inputAddress: 'Введите адрес',
    inputRevenueAddress: 'Пожалуйста, введите адрес дохода',
    useApiTokenAddr: 'Использовать адрес API токена',
    invitationCode: 'Код приглашения',
    inviteLink: 'Ссылка для приглашения',
    invitationQRCode: 'QR-код приглашения',
    withdraw: 'ВЫВЕСТИ',
    withdrawRecords: 'Записи об изъятиях',
    sum: 'Сумма',
    schedule: 'График',
    trade: 'Торговля',
    transactionLink: 'Ссылка на транзакцию',
    txLink: 'Tx ссылка',
    inputwithdrawalAmount: 'Введите сумму вывода',
    inputWithdrawalAddress: 'Пожалуйста, введите адрес вывода',
    withdrawalAmount: 'Сумма вывода',
    withdrawalAddress: 'Адрес вывода',
    emailVerificationCode: 'Код подтверждения электронной почты',
    inputGoogleVerificationCode: 'Введите код подтверждения Google',
    modifyGoogleVerificationCode: 'Изменить код подтверждения Google',
    addAddress: 'ДОБАВИТЬ АДРЕС',
    details: 'детали',

    accountNotActivated: 'Учетная запись не активирована',
    resendEmailDesc:
      'Учетная запись не активирована. Хотите ли вы отправить ссылку для активации на адрес электронной почты {email}?',
    no: 'Нет',
    yes: 'Да',

    revenueAddress: 'Адрес дохода',
    watchAddress: 'Адрес наблюдения',
    tag: 'Тег',
    tagPlaceholder: 'Пользовательский тег(необязательно)',
    allocationRatio: 'Коэффициент распределения',
    operation: 'Операция',
    apiTokenAddressTotal: 'Общая сумма доходов по адресам ApiToken',
    watchAddressTotal: 'Общее количество адресов наблюдения',

    deleteConfirm: 'Подтвердить удаление?',
    addWatchAddress: 'Добавить адрес наблюдения',
    editWatchAddress: 'Редактировать адрес наблюдения',

    optional: 'Необязательно',
    allocableRatio: 'Распределяемое соотношение',
    emailCode: 'Код электронной почты',
    googleCode: 'Код Google',
    referralCode: 'Реферальный код',
    referralCodePlaceholder: 'Если вас пригласили (необязательно)',
    NoInvited: 'Количество приглашенных',
    withdrawalThreshold: 'Порог вывода',
    withdrawalThresholdTip: 'Сколько монет запускают автоматический вывод',
    autoWithdrawal: ' Автоматический вывод',

    notSelected: 'Не выбрано'
  }
}
