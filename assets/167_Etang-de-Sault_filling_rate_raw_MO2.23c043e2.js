const n=`date,value\r
2017-01-26,78.01072410504142\r
2017-02-05,78.01072410504142\r
2017-02-15,80.49730090881671\r
2017-02-25,81.33223676742718\r
2017-03-17,79.87308838228236\r
2017-03-27,80.56676321265023\r
2017-04-03,82.87079704484549\r
2017-04-06,81.47168688744661\r
2017-04-23,86.0492625086275\r
2017-05-23,83.43278156247031\r
2017-05-26,86.19150133469077\r
2017-06-02,85.19756503707589\r
2017-06-05,86.90393266477547\r
2017-06-15,88.0481019913028\r
2017-06-22,90.49686446075633\r
2017-06-25,89.12552812973243\r
2017-07-02,89.34156547746\r
2017-07-05,91.00394604398905\r
2017-07-07,91.00394604398905\r
2017-07-17,93.40784615266159\r
2017-07-18,93.40784615266159\r
2017-07-22,93.40784615266159\r
2017-08-14,90.42450554285276\r
2017-08-19,91.43937928020988\r
2017-08-21,93.84728098409728\r
2017-08-22,96.12920987549373\r
2017-08-24,96.12920987549373\r
2017-08-26,99.47580897039111\r
2017-08-27,99.47580897039111\r
2017-08-29,95.096276110596\r
2017-09-03,95.16992698787887\r
2017-10-18,88.33496524698023\r
2017-10-25,91.22157136351541\r
2017-10-26,88.83776436474336\r
2017-10-28,88.90967464498522\r
2017-11-07,82.24016159698976\r
2017-11-14,81.47168688744661\r
2017-11-17,81.47168688744661\r
2017-11-22,79.25058541465211\r
2017-11-27,79.25058541465211\r
2017-12-12,79.31966786490415\r
2017-12-15,79.31966786490415\r
2017-12-20,79.31966786490415\r
2018-01-13,80.91439039603378\r
2018-01-14,80.91439039603378\r
2018-01-23,80.91439039603378\r
2018-02-25,84.7021178106257\r
2018-02-27,85.12672470673945\r
2018-03-05,85.12672470673945\r
2018-04-18,87.04666608841929\r
2018-04-19,87.04666608841929\r
2018-04-21,87.54688085825006\r
2018-04-26,86.40501431213845\r
2018-05-06,82.38015648045611\r
2018-05-08,82.38015648045611\r
2018-05-11,89.91856295233947\r
2018-05-18,89.77419123318656\r
2018-05-19,89.77419123318656\r
2018-05-21,89.77419123318656\r
2018-05-24,87.90479336280866\r
2018-05-26,91.9483071264353\r
2018-06-20,91.43937928020988\r
2018-06-22,92.89608890961797\r
2018-06-23,92.89608890961797\r
2018-06-25,89.99077937760512\r
2018-06-27,90.93144487036434\r
2018-06-28,90.93144487036434\r
2018-07-03,90.42450554285276\r
2018-07-07,89.77419123318656\r
2018-07-08,91.80279789494335\r
2018-07-12,89.91856295233947\r
2018-07-22,88.0481019913028\r
2018-08-06,91.87554238791648\r
2018-08-07,91.87554238791648\r
2018-08-11,92.23956844076469\r
2018-08-12,92.23956844076469\r
2018-08-14,92.23956844076469\r
2018-08-16,92.23956844076469\r
2018-08-19,90.20755085784086\r
2018-08-22,89.77419123318656\r
2018-08-26,93.70072218432813\r
2018-09-01,93.55424389470235\r
2018-09-03,93.55424389470235\r
2018-09-05,93.55424389470235\r
2018-09-08,89.77419123318656\r
2018-09-10,92.67706697058188\r
2018-09-11,92.67706697058188\r
2018-09-18,90.135273335211\r
2018-09-20,92.38532044753993\r
2018-09-25,92.31243433564114\r
2018-09-26,92.31243433564114\r
2018-09-28,89.55778655592496\r
2018-09-30,89.55778655592496\r
2018-10-05,89.70203594903181\r
2018-10-06,85.69402679521023\r
2018-10-10,92.96913658729893\r
2018-10-11,84.98510618068327\r
2018-10-13,89.2695326071668\r
2018-10-16,83.15162246504899\r
2018-10-18,88.0481019913028\r
2018-10-20,87.54688085825006\r
2018-10-21,87.54688085825006\r
2018-10-23,87.54688085825006\r
2018-10-25,82.59030563750382\r
2018-11-09,80.15030535070049\r
2018-11-14,82.80064286616957\r
2018-11-19,82.80064286616957\r
2018-11-22,85.76503262024757\r
2018-11-24,78.62979598575134\r
2018-11-27,83.01116802434242\r
2018-12-07,85.33930780677022\r
2019-02-15,77.32488578232434\r
2019-02-17,83.15162246504899\r
2019-02-18,83.15162246504899\r
2019-02-20,83.15162246504899\r
2019-02-22,80.35843947714254\r
2019-02-23,80.35843947714254\r
2019-02-25,81.33223676742718\r
2019-02-27,80.21966231615683\r
2019-03-07,84.06660780773659\r
2019-03-19,83.57348613554194\r
2019-03-20,83.57348613554194\r
2019-03-22,86.40501431213845\r
2019-03-24,82.4501852938392\r
2019-03-27,82.4501852938392\r
2019-03-29,83.71427400253653\r
2019-03-30,83.71427400253653\r
2019-04-01,82.17019553747986\r
2019-04-08,81.19287061696777\r
2019-04-09,81.19287061696777\r
2019-04-11,81.19287061696777\r
2019-04-13,84.49009429173553\r
2019-04-14,86.40501431213845\r
2019-04-18,88.33496524698023\r
2019-04-19,88.33496524698023\r
2019-05-01,87.90479336280866\r
2019-05-06,88.98160536917196\r
2019-05-13,89.99077937760512\r
2019-05-14,89.99077937760512\r
2019-05-16,89.99077937760512\r
2019-05-23,93.84728098409728\r
2019-05-28,92.02109210573694\r
2019-05-29,97.6859474776154\r
2019-05-31,88.76587453336307\r
2019-06-02,92.09389732106223\r
2019-06-08,88.76587453336307\r
2019-06-27,87.47535995143782\r
2019-06-28,87.47535995143782\r
2019-06-30,98.05789304758505\r
2019-07-02,91.43937928020988\r
2019-07-03,91.43937928020988\r
2019-07-05,94.94903447853228\r
2019-07-07,94.50779089495519\r
2019-07-08,94.50779089495519\r
2019-07-10,95.83368589219295\r
2019-07-12,95.83368589219295\r
2019-07-13,95.75985486829613\r
2019-07-15,97.24026888081372\r
2019-07-17,96.86941745030265\r
2019-07-20,96.57309501116913\r
2019-07-22,96.94354789536415\r
2019-07-23,94.65479183370903\r
2019-07-25,95.83368589219295\r
2019-08-02,94.14063996457563\r
2019-08-04,96.12920987549373\r
2019-08-09,100.0\r
2019-08-12,99.7003437194284\r
2019-08-14,100.0\r
2019-08-22,96.94354789536415\r
2019-08-24,99.25145217782519\r
2019-08-26,99.47580897039111\r
2019-08-29,100.0\r
2019-08-31,99.10197990646726\r
2019-09-03,100.0\r
2019-09-06,100.0\r
2019-09-10,98.80327294018372\r
2019-09-13,98.05789304758505\r
2019-09-15,98.72864571960788\r
2019-09-16,98.72864571960788\r
2019-09-18,100.0\r
2019-09-20,99.7003437194284\r
2019-09-21,99.7003437194284\r
2019-10-03,99.7752281610468\r
2019-10-13,87.1894818041222\r
2019-10-21,87.1894818041222\r
2019-11-04,88.40673228173075\r
2019-11-07,88.40673228173075\r
2019-11-09,88.55032778161429\r
2019-11-22,84.63142255683405\r
2019-11-24,84.7021178106257\r
2019-12-04,81.47168688744661\r
2019-12-05,81.47168688744661\r
2019-12-10,79.18152411916908\r
2019-12-17,79.18152411916908\r
2020-01-06,76.23197929268085\r
2020-01-13,81.33223676742718\r
2020-01-16,79.52704208952456\r
2020-01-18,79.52704208952456\r
2020-01-19,79.52704208952456\r
2020-01-21,79.7346065101559\r
2020-01-24,79.87308838228236\r
2020-02-15,77.66753891850445\r
2020-02-18,77.66753891850445\r
2020-02-20,77.66753891850445\r
2020-02-22,80.42785966184704\r
2020-03-18,86.33382269461988\r
2020-03-19,86.33382269461988\r
2020-03-21,86.33382269461988\r
2020-03-23,84.13713695083692\r
2020-03-24,84.13713695083692\r
2020-03-26,83.08138481466621\r
2020-03-28,84.63142255683405\r
2020-03-31,83.78469915823511\r
2020-04-02,86.12037160239478\r
2020-04-05,85.97817405845603\r
2020-04-07,85.0559050862342\r
2020-04-08,87.1894818041222\r
2020-04-10,84.3488490509801\r
2020-04-12,86.83259682501844\r
2020-04-13,83.29216032504327\r
2020-04-15,85.2684260721245\r
2020-04-17,83.22188097025266\r
2020-04-22,83.43278156247031\r
2020-04-23,86.76128157333531\r
2020-04-27,86.5474593970269\r
2020-05-20,87.1894818041222\r
2020-05-25,87.1894818041222\r
2020-05-27,91.9483071264353\r
2020-05-28,91.9483071264353\r
2020-05-30,90.135273335211\r
2020-06-01,92.75005409654088\r
2020-06-02,92.75005409654088\r
2020-06-26,84.98510618068327\r
2020-06-29,87.33237977180181\r
2020-07-04,92.09389732106223\r
2020-07-06,90.93144487036434\r
2020-07-07,90.93144487036434\r
2020-07-09,91.657369664703\r
2020-07-11,91.657369664703\r
2020-07-12,92.09389732106223\r
2020-07-14,92.09389732106223\r
2020-07-17,91.80279789494335\r
2020-07-19,93.62747297340852\r
2020-07-21,92.02109210573694\r
2020-07-22,97.16605876271825\r
2020-07-24,93.26152899570299\r
2020-07-27,95.096276110596\r
2020-07-29,93.70072218432813\r
2020-07-31,93.70072218432813\r
2020-08-05,96.20314082038942\r
2020-08-06,96.20314082038942\r
2020-08-08,93.04220443945599\r
2020-08-10,94.65479183370903\r
2020-08-15,92.09389732106223\r
2020-08-20,92.6041000379732\r
2020-08-25,91.87554238791648\r
2020-09-04,92.6041000379732\r
2020-09-07,90.20755085784086\r
2020-09-09,93.70072218432813\r
2020-09-10,92.82306141112633\r
2020-09-12,93.11529246137928\r
2020-09-14,90.85896400452783\r
2020-09-15,90.85896400452783\r
2020-09-17,91.00394604398905\r
2020-11-11,83.99609945174\r
2020-11-14,83.99609945174\r
2020-11-18,84.84357053495684\r
2020-11-19,84.84357053495684\r
2020-11-21,84.84357053495684\r
2020-11-23,84.84357053495684\r
2020-11-28,83.85514512179888\r
2020-11-29,83.85514512179888\r
2020-12-04,84.91432799521378\r
2020-12-11,90.56924371538167\r
2020-12-13,90.56924371538167\r
2020-12-18,89.34156547746\r
2020-12-24,89.34156547746\r
2021-02-24,82.80064286616957\r
2021-02-27,81.96042295137255\r
2021-03-01,82.59030563750382\r
2021-03-04,82.59030563750382\r
2021-03-06,82.59030563750382\r
2021-03-08,86.40501431213845\r
2021-03-09,86.40501431213845\r
2021-03-14,86.40501431213845\r
2021-03-28,85.90710625695152\r
2021-03-29,85.90710625695152\r
2021-03-31,89.8463669025785\r
2021-04-02,84.77283380504774\r
2021-04-03,84.77283380504774\r
2021-04-05,86.26265170045218\r
2021-04-07,86.0492625086275\r
2021-04-08,84.7021178106257\r
2021-04-15,82.4501852938392\r
2021-04-22,87.04666608841929\r
2021-04-23,87.04666608841929\r
2021-04-25,87.04666608841929\r
2021-04-27,95.68604384232553\r
2021-05-03,91.51202247388797\r
2021-05-05,91.51202247388797\r
2021-05-27,82.80064286616957\r
2021-05-28,82.80064286616957\r
2021-05-30,92.1667227676555\r
2021-06-01,84.06660780773659\r
2021-06-09,92.38532044753993\r
2021-06-11,84.3488490509801\r
2021-06-14,90.135273335211\r
2021-06-16,95.096276110596\r
2021-06-26,92.09389732106223\r
2021-07-04,87.11806366226998\r
2021-07-19,85.90710625695152\r
2021-07-21,91.43937928020988\r
2021-07-22,91.43937928020988\r
2021-07-29,86.12037160239478\r
2021-08-10,91.00394604398905\r
2021-08-11,91.00394604398905\r
2021-08-15,91.00394604398905\r
2021-08-20,93.55424389470235\r
2021-08-25,93.18840064836257\r
2021-08-26,93.18840064836257\r
2021-09-07,87.83316981576192\r
2021-09-12,87.83316981576192\r
2021-09-17,87.83316981576192\r
2021-09-22,83.08138481466621\r
2021-09-24,88.1914926325771\r
2021-09-25,88.1914926325771\r
2021-09-27,88.1914926325771\r
2021-09-30,88.1914926325771\r
2021-10-02,88.1914926325771\r
2021-10-04,88.0481019913028\r
2021-10-09,77.66753891850445\r
2021-10-14,87.90479336280866\r
2021-10-15,87.90479336280866\r
2021-10-17,87.90479336280866\r
2021-10-19,82.66039715723748\r
2021-10-22,89.34156547746\r
2021-10-24,84.56074804882017\r
2021-10-27,83.92561188803134\r
2021-11-01,84.7021178106257\r
2021-12-23,77.53041377887773\r
2022-01-15,79.52704208952456\r
2022-01-25,83.64386965990387\r
2022-02-09,80.21966231615683\r
2022-02-26,76.43648265266134\r
2022-02-27,76.43648265266134\r
2022-03-06,80.28904036010906\r
2022-03-08,78.62979598575134\r
2022-03-09,82.4501852938392\r
2022-03-23,81.61122093428665\r
2022-03-24,81.61122093428665\r
2022-03-26,83.01116802434242\r
2022-04-15,83.29216032504327\r
2022-04-17,92.31243433564114\r
2022-04-20,92.31243433564114\r
2022-04-22,92.31243433564114\r
2022-05-15,95.68604384232553\r
2022-05-17,96.64714571071192\r
2022-05-30,90.49686446075633\r
2022-06-01,90.49686446075633\r
2022-06-02,90.49686446075633\r
2022-06-04,90.49686446075633\r
2022-06-11,93.55424389470235\r
2022-06-14,93.55424389470235\r
2022-06-16,93.55424389470235\r
2022-06-21,93.55424389470235\r
2022-06-29,89.91856295233947\r
2022-07-02,88.83776436474336\r
2022-07-04,88.83776436474336\r
2022-07-06,89.55778655592496\r
2022-07-11,92.23956844076469\r
2022-07-12,92.23956844076469\r
2022-07-14,90.3521669665059\r
2022-07-16,91.9483071264353\r
2022-07-17,91.9483071264353\r
2022-07-19,92.6041000379732\r
2022-07-21,90.93144487036434\r
2022-07-24,91.36675636072927\r
2022-07-31,93.48103495289159\r
2022-08-03,96.20314082038942\r
2022-08-06,98.13234175196173\r
2022-08-08,98.05789304758505\r
2022-08-10,96.79530693481718\r
2022-08-11,95.68604384232553\r
2022-08-13,97.01769826547137\r
2022-08-18,96.72121635344133\r
2022-08-25,95.68604384232553\r
2022-08-28,95.68604384232553\r
2022-09-04,94.36087026140099\r
2022-09-12,94.5812813285012\r
2022-09-19,94.36087026140099\r
2022-09-20,94.36087026140099\r
2022-09-22,90.64164330189737\r
2022-10-04,87.76156678680712\r
2022-10-05,87.76156678680712\r
2022-10-09,90.27984873655448\r
2022-10-19,90.135273335211\r
2022-10-22,89.8463669025785\r
2022-11-11,85.5520771571999\r
2022-11-13,92.09389732106223\r
2022-12-16,80.70575096932502\r
2022-12-28,81.75083886527693\r
2023-01-15,68.6050080360667\r
2023-02-11,79.25058541465211\r
2023-02-12,79.25058541465211\r
2023-02-14,82.03032620937182\r
2023-02-16,82.03032620937182\r
2023-04-05,82.52023501461379\r
2023-04-08,82.52023501461379\r
2023-04-13,82.52023501461379\r
2023-04-20,78.69868784535839\r
2023-05-27,86.4762265479566\r
2023-05-28,86.4762265479566\r
2023-05-30,83.78469915823511\r
2023-06-01,91.80279789494335\r
2023-06-02,91.80279789494335\r
2023-06-04,91.80279789494335\r
2023-06-06,91.80279789494335\r
2023-06-11,85.97817405845603\r
2023-06-14,93.48103495289159\r
2023-06-16,93.48103495289159\r
2023-06-19,93.48103495289159\r
2023-06-24,93.48103495289159\r
2023-06-27,89.41361876227705\r
2023-07-09,93.04220443945599\r
2023-07-11,92.89608890961797\r
2023-07-14,92.75005409654088\r
2023-07-17,93.55424389470235\r
2023-07-19,93.04220443945599\r
2023-07-22,92.6041000379732\r
2023-07-31,92.45822677171958\r
2023-08-08,100.0\r
2023-08-10,100.0\r
2023-08-11,100.0\r
2023-08-18,100.0\r
2023-08-20,99.47580897039111\r
2023-08-21,99.47580897039111\r
2023-08-23,100.0\r
2023-08-26,100.0\r
2023-09-04,93.62747297340852\r
2023-09-05,93.62747297340852\r
2023-09-07,95.90753690943599\r
2023-09-09,94.50779089495519\r
2023-09-10,94.50779089495519\r
2023-09-14,94.50779089495519\r
2023-09-15,96.86941745030265\r
2023-09-19,95.3172888418959\r
2023-10-02,88.1914926325771\r
2023-10-05,88.1914926325771\r
2023-10-07,92.23956844076469\r
2023-10-09,89.41361876227705\r
2023-10-10,89.41361876227705\r
2023-10-19,87.68998428091795\r
2023-11-06,73.45646865685993\r
`;export{n as default};
