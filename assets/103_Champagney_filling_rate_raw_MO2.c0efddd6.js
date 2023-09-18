const n=`date,value\r
2017-02-19,95.86518607349234\r
2017-03-11,93.20524003251553\r
2017-03-14,93.49323874777423\r
2017-04-10,88.01475368887762\r
2017-04-20,83.80771035293836\r
2017-04-23,80.4975786233246\r
2017-04-30,77.62628934859632\r
2017-05-10,75.76937418904596\r
2017-05-13,72.67859631355371\r
2017-06-02,66.37831033219057\r
2017-06-12,58.35304166875381\r
2017-06-19,53.501543963744666\r
2017-06-22,49.62626691887835\r
2017-07-07,42.88021795396325\r
2017-07-17,42.42621580240662\r
2017-07-19,37.222754276728296\r
2017-07-22,37.222754276728296\r
2017-07-29,28.85462143066542\r
2017-08-03,28.85462143066542\r
2017-08-06,28.85462143066542\r
2017-08-23,13.06457890323938\r
2017-08-26,12.376462872330293\r
2017-09-05,10.000093675168154\r
2017-09-22,1.0632207913590637\r
2017-10-05,2.8573019557108226\r
2017-10-07,2.0830292066230744\r
2017-10-10,2.0830292066230744\r
2017-10-12,2.0830292066230744\r
2017-10-15,2.1050907748004604\r
2018-05-25,3.293213452725681\r
2018-05-30,3.293213452725681\r
2018-06-02,3.293213452725681\r
2018-06-27,17.26485337869064\r
2018-06-29,17.26485337869064\r
2018-07-02,15.441263076786266\r
2018-07-04,16.186417500300912\r
2018-07-07,16.186417500300912\r
2018-07-09,15.475200533855263\r
2018-07-12,15.331181667525714\r
2018-07-14,16.481610026539887\r
2018-07-17,14.944312176187177\r
2018-07-19,14.752430475461173\r
2018-07-22,14.669327367910162\r
2018-07-24,14.011590199972431\r
2018-07-27,14.73579414644325\r
2018-07-29,14.31422487262639\r
2018-08-01,14.877453089319959\r
2018-08-03,14.59470253305096\r
2018-08-06,14.919225324385604\r
2018-08-11,15.807721958451623\r
2018-08-16,16.21237410337629\r
2018-08-18,13.857235603897792\r
2018-08-21,14.371784118497924\r
2018-08-23,14.330660512162446\r
2018-08-26,14.142127278558538\r
2018-08-28,12.843944640288951\r
2018-09-05,13.286782803896912\r
2018-09-07,13.3824924756438\r
2018-09-10,12.276132061594966\r
2018-09-12,12.820398533888664\r
2018-09-17,12.237634278465016\r
2018-09-20,9.993023401315995\r
2018-09-22,9.993023401315995\r
2018-09-25,9.86611639445615\r
2018-09-27,9.97182513116783\r
2018-09-30,9.908343340099387\r
2018-10-02,9.282886739467347\r
2018-10-05,9.76788040202598\r
2018-10-07,9.105383748604208\r
2018-10-10,9.11218426843371\r
2018-10-12,8.721272801206663\r
2018-10-15,8.814973952423014\r
2018-10-17,7.941813875807364\r
2018-10-20,8.75468941309164\r
2018-10-22,8.19390195557423\r
2018-11-01,6.617822886563279\r
2019-01-03,18.1992943606439\r
2019-01-10,18.1992943606439\r
2019-01-15,18.1992943606439\r
2019-01-18,28.316987328300964\r
2019-01-23,28.142350132459836\r
2019-01-25,28.142350132459836\r
2019-01-30,28.142350132459836\r
2019-02-14,36.90473905635381\r
2019-02-17,46.22185339604227\r
2019-02-19,46.22185339604227\r
2019-02-22,46.22185339604227\r
2019-02-24,42.25810150147612\r
2019-02-27,47.11077904463992\r
2019-03-21,63.04301781103958\r
2019-03-24,76.57946046408088\r
2019-03-26,76.57946046408088\r
2019-03-29,73.73548603712463\r
2019-03-31,76.23183941291151\r
2019-04-05,76.23183941291151\r
2019-04-15,79.38419403932441\r
2019-04-18,91.21749443910602\r
2019-04-20,83.79050492035634\r
2019-04-25,83.79050492035634\r
2019-05-23,100.0\r
2019-05-25,100.0\r
2019-05-30,100.0\r
2019-06-02,100.0\r
2019-06-04,99.60825990275842\r
2019-06-07,99.01714850572765\r
2019-06-12,95.48327810946122\r
2019-06-17,99.42337951670889\r
2019-06-19,99.42337951670889\r
2019-06-24,99.42337951670889\r
2019-06-27,99.55278070244799\r
2019-06-29,96.90500544774426\r
2019-07-02,97.41751148159406\r
2019-07-04,96.94157551764157\r
2019-07-07,96.94157551764157\r
2019-07-09,95.7378125711974\r
2019-07-14,93.29519970670502\r
2019-07-17,93.04340410602124\r
2019-07-19,91.07492638395675\r
2019-07-22,91.07492638395675\r
2019-07-24,83.68730335640356\r
2019-07-29,87.10349659843534\r
2019-08-01,78.57853754996003\r
2019-08-03,75.09431803706292\r
2019-08-08,75.01216703789186\r
2019-08-11,71.30615350776742\r
2019-08-18,73.24689774562015\r
2019-08-21,69.4349610021898\r
2019-08-23,66.36270369221073\r
2019-08-26,68.45183817269047\r
2019-08-28,68.45183817269047\r
2019-08-31,64.06987813857802\r
2019-09-07,61.56868656289514\r
2019-09-10,62.09897869049501\r
2019-09-12,56.648143945630856\r
2019-09-15,55.29659047772415\r
2019-09-17,50.778834559474504\r
2019-09-20,49.25372364636427\r
2019-09-22,49.25372364636427\r
2019-09-27,49.460547173077934\r
2019-12-04,37.051373487997246\r
2019-12-06,37.051373487997246\r
2019-12-14,37.051373487997246\r
2019-12-19,38.8423793155839\r
2019-12-29,49.75070885092948\r
2020-01-05,53.25933381101081\r
2020-01-15,58.9458336031847\r
2020-01-20,57.68914904308119\r
2020-01-23,60.12395023285051\r
2020-01-25,60.04909696144109\r
2020-01-30,60.04909696144109\r
2020-02-07,74.22543225751012\r
2020-02-09,71.08115453669271\r
2020-02-14,75.24228460273949\r
2020-02-22,75.24228460273949\r
2020-02-24,69.8649266685625\r
2020-03-13,61.46285648168757\r
2020-03-15,97.61916242789388\r
2020-03-18,95.31979850667332\r
2020-03-20,95.59232960108298\r
2020-03-23,95.70143315318104\r
2020-03-25,97.19772758229887\r
2020-03-28,98.04135965437861\r
2020-04-02,98.72214484355236\r
2020-04-04,96.90500544774426\r
2020-04-07,97.74757655500407\r
2020-04-09,97.72922735675745\r
2020-04-12,95.01132347063457\r
2020-04-14,93.04340410602124\r
2020-04-17,93.06138006613598\r
2020-04-22,94.48606699762212\r
2020-04-24,93.6373774497998\r
2020-04-27,93.67342663638681\r
2020-05-04,94.34138304731424\r
2020-05-07,95.02945748262734\r
2020-05-09,96.30243283742527\r
2020-05-17,99.25711002005826\r
2020-05-19,97.10621224639252\r
2020-05-27,97.45416231679461\r
2020-05-29,98.09648503544241\r
2020-06-01,94.43179964842156\r
2020-06-03,94.46797643228311\r
2020-06-13,95.62869166776443\r
2020-06-23,92.46894056702824\r
2020-07-01,99.31252025185012\r
2020-07-06,97.36254604135874\r
2020-07-08,97.36254604135874\r
2020-07-13,96.24773148140507\r
2020-07-18,95.41060604233026\r
2020-07-23,88.17287380682447\r
2020-07-31,88.54228227331458\r
2020-08-05,83.72169796662105\r
2020-08-07,84.1176607541765\r
2020-08-10,82.35052856393109\r
2020-08-12,82.35052856393109\r
2020-08-15,82.35052856393109\r
2020-08-20,75.12718896729544\r
2020-09-04,72.72723530440152\r
2020-09-09,66.1911319764214\r
2020-09-11,60.88967987531241\r
2020-09-14,62.1293385384471\r
2020-09-16,60.01916657456463\r
2020-09-21,61.82601943659568\r
2020-10-14,44.99458577486106\r
2020-10-19,48.70396776080903\r
2020-10-31,48.92356037096868\r
2020-11-10,47.89779475294489\r
2020-11-13,47.89779475294489\r
2020-11-15,47.89779475294489\r
2020-11-18,50.988309812436114\r
2020-11-23,50.988309812436114\r
2020-11-25,51.184145377674774\r
2020-11-28,51.21214751683757\r
2020-12-10,48.75882717400978\r
2021-02-11,78.93058927977509\r
2021-02-16,78.93058927977509\r
2021-02-21,88.73603969930956\r
2021-02-23,92.95354609426666\r
2021-02-26,92.95354609426666\r
2021-02-28,89.9909142456564\r
2021-03-08,91.574322552065\r
2021-03-23,90.79007015914463\r
2021-03-30,93.70948162667563\r
2021-04-02,93.88984362087372\r
2021-04-04,94.8481825085943\r
2021-04-09,94.8481825085943\r
2021-04-14,94.61274152105088\r
2021-04-24,93.5833145526589\r
2021-04-27,96.32066951157697\r
2021-05-29,96.72224167962769\r
2021-06-01,96.86844114946346\r
2021-06-03,96.86844114946346\r
2021-06-13,93.13329843094552\r
2021-06-16,96.10192476041135\r
2021-06-18,94.34138304731424\r
2021-06-21,94.34138304731424\r
2021-06-23,94.35946346923458\r
2021-07-18,77.29331873464206\r
2021-07-21,80.44682956962527\r
2021-07-23,78.3943922740779\r
2021-08-12,64.26992307188245\r
2021-08-15,64.03912514960118\r
2021-09-01,50.430511088780285\r
2021-09-04,52.71958620375816\r
2021-09-06,50.68120290856067\r
2021-09-24,46.275525966738414\r
2021-10-01,44.32021323842301\r
2021-10-09,41.94847050019468\r
2021-10-11,41.94847050019468\r
2021-10-14,43.12752221877295\r
2021-10-16,43.12752221877295\r
2021-10-19,43.12752221877295\r
2021-10-21,39.17977548195626\r
2021-10-24,39.455592754366684\r
2021-10-29,39.68186309793648\r
2021-11-23,35.24794605709951\r
2021-12-03,35.24794605709951\r
2022-01-12,53.65851306599112\r
2022-01-14,55.3978449598068\r
2022-01-19,55.3978449598068\r
2022-01-22,55.16652001306289\r
2022-01-24,54.9932920779559\r
2022-01-29,53.487283584145096\r
2022-02-08,53.302043373490584\r
2022-02-11,53.302043373490584\r
2022-02-13,54.58998018827559\r
2022-02-23,48.197743509760144\r
2022-02-26,47.73451657427369\r
2022-02-28,48.53954454510853\r
2022-03-03,47.720920587256416\r
2022-03-05,48.02040639383173\r
2022-03-08,47.66655284018604\r
2022-03-10,47.51717522720616\r
2022-03-20,50.16645627575602\r
2022-03-23,50.27756657724653\r
2022-03-25,47.911411793421266\r
2022-03-28,48.266022884526485\r
2022-04-04,47.57147166828395\r
2022-04-17,50.2914625938816\r
2022-04-22,50.2914625938816\r
2022-04-27,49.653909415601746\r
2022-05-04,52.84721330759508\r
2022-05-07,49.84758712881889\r
2022-05-09,49.64008736243139\r
2022-05-14,49.653909415601746\r
2022-05-19,49.33640955575378\r
2022-06-11,45.35332956421579\r
2022-06-13,46.0342046218367\r
2022-06-16,43.78116262675269\r
2022-06-18,44.227984928436264\r
2022-06-21,44.214816016053625\r
2022-06-23,43.218784227262375\r
2022-07-03,39.229863872725254\r
2022-07-06,39.417933658877274\r
2022-07-08,39.12971386071686\r
2022-07-11,38.38200570301459\r
2022-07-13,37.026917527399064\r
2022-07-16,35.909256833822276\r
2022-07-18,33.376879886335885\r
2022-07-21,33.21315146482565\r
2022-07-26,31.8580485984442\r
2022-07-28,30.526636837861744\r
2022-08-07,21.796534057203804\r
2022-08-10,22.328185378185005\r
2022-08-12,20.739766421212856\r
2022-08-17,20.739766421212856\r
2022-08-22,18.144825050219602\r
2022-08-25,14.885803617034895\r
2022-08-30,14.885803617034895\r
2022-09-01,14.885803617034895\r
2022-09-04,14.545041112400655\r
2022-10-09,4.340527952232462\r
2022-10-16,4.340527952232462\r
2022-10-19,4.340527952232462\r
2022-11-23,29.574324019949778\r
2023-01-07,57.218982206918845\r
2023-02-08,70.02445487193722\r
2023-02-11,70.72818586394604\r
2023-02-13,68.99024394749492\r
2023-02-16,69.2283365896909\r
2023-02-21,68.53090482056196\r
2023-03-03,67.89944112246403\r
2023-04-04,98.3539081574703\r
2023-04-09,99.25711002005826\r
2023-05-27,97.8760612844414\r
2023-05-29,100.0\r
2023-06-01,100.0\r
2023-06-03,100.0\r
2023-06-06,100.0\r
2023-06-08,100.0\r
2023-06-11,99.77477506618376\r
2023-06-13,99.23864281725412\r
2023-06-18,98.61161340351498\r
2023-06-21,97.89442200836088\r
2023-06-23,96.35714719282944\r
2023-06-26,93.92593342571098\r
2023-06-28,93.99813043846721\r
2023-07-11,89.74289093448157\r
2023-07-13,74.17637657059963\r
2023-08-10,76.77839799824469\r
2023-08-12,73.53988768654041\r
2023-08-20,73.53988768654041\r
2023-08-22,65.73969743553654\r
`;export{n as default};
