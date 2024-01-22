const n=`date,value\r
2017-02-25,83.04642845674852\r
2017-03-17,85.1290404369885\r
2017-03-27,85.98475015604188\r
2017-04-03,83.19983000151132\r
2017-04-23,89.13172944928931\r
2017-05-03,95.83825792700242\r
2017-05-16,81.06482177707683\r
2017-05-23,87.23689686949473\r
2017-05-26,83.27658274245992\r
2017-06-02,82.81658599248644\r
2017-06-05,83.81482194661164\r
2017-06-12,85.90678524220253\r
2017-06-15,87.86629306164335\r
2017-06-22,88.41883155165019\r
2017-06-25,87.70873636511395\r
2017-07-02,95.83825792700242\r
2017-07-05,96.49724967537028\r
2017-07-07,94.36361004647787\r
2017-07-12,94.36361004647787\r
2017-07-17,92.01133875374725\r
2017-07-27,86.84464908975349\r
2017-08-14,87.63000992734449\r
2017-08-19,94.52690700968878\r
2017-08-21,87.70873636511395\r
2017-08-24,87.70873636511395\r
2017-08-26,91.36755240619343\r
2017-08-29,93.2244016603135\r
2017-09-03,92.73824317640921\r
2017-10-05,84.20031773871415\r
2017-10-10,84.20031773871415\r
2017-10-13,84.20031773871415\r
2017-10-15,88.7353290760604\r
2017-10-18,90.56593149446438\r
2017-10-25,90.56593149446438\r
2017-10-28,86.3750940361774\r
2017-11-17,86.3750940361774\r
2017-11-19,86.3750940361774\r
2017-11-22,89.29053177195343\r
2017-11-27,89.29053177195343\r
2017-12-07,83.43019215814611\r
2017-12-09,83.43019215814611\r
2017-12-12,83.43019215814611\r
2017-12-14,83.43019215814611\r
2018-01-23,87.15837808868704\r
2018-01-28,91.04648907455419\r
2018-01-31,91.04648907455419\r
2018-03-14,88.57701111370656\r
2018-03-19,92.49563057802712\r
2018-03-22,92.49563057802712\r
2018-04-21,88.57701111370656\r
2018-04-23,88.57701111370656\r
2018-04-26,88.57701111370656\r
2018-05-01,87.70873636511395\r
2018-05-06,87.23689686949473\r
2018-05-08,92.49563057802712\r
2018-05-11,90.80605466520151\r
2018-05-18,91.2872347052856\r
2018-05-21,91.6891689794959\r
2018-06-02,60.422152985753065\r
2018-06-07,64.69275940186905\r
2018-06-12,64.69275940186905\r
2018-06-20,84.7414665753408\r
2018-06-22,100.0\r
2018-06-25,90.48595960467145\r
2018-06-27,97.40697249299495\r
2018-07-02,96.41475481708858\r
2018-07-07,95.83825792700242\r
2018-07-10,88.26079039507249\r
2018-07-12,93.79315916684568\r
2018-07-15,94.77211160039526\r
2018-07-17,94.77211160039526\r
2018-07-20,95.26345364517317\r
2018-07-22,95.26345364517317\r
2018-07-25,89.13172944928931\r
2018-07-27,94.6903421848746\r
2018-07-30,93.5491985853889\r
2018-08-01,92.90015774382496\r
2018-08-04,92.90015774382496\r
2018-08-06,95.42751071243025\r
2018-08-11,92.41482884849259\r
2018-08-16,97.40697249299495\r
2018-08-19,90.08661893790486\r
2018-08-21,93.71180441355565\r
2018-08-26,90.48595960467145\r
2018-09-03,86.92302941953555\r
2018-09-05,92.65733774261776\r
2018-09-08,92.81918317702214\r
2018-09-10,89.608551543256\r
2018-09-13,93.5491985853889\r
2018-09-18,92.01133875374725\r
2018-09-20,90.40602229950451\r
2018-09-23,87.94512331910241\r
2018-09-25,89.84742958667759\r
2018-09-28,88.7353290760604\r
2018-10-05,87.31545026142611\r
2018-10-18,84.12314930400055\r
2018-10-20,92.09196763019435\r
2018-10-23,92.09196763019435\r
2018-10-25,92.09196763019435\r
2018-10-30,89.21111331316868\r
2018-11-04,91.20695158261827\r
2018-11-09,91.20695158261827\r
2018-11-12,89.92712478152033\r
2018-11-14,90.00685456547677\r
2018-11-22,84.12314930400055\r
2018-11-24,84.12314930400055\r
2018-11-27,79.70666660431368\r
2018-12-27,77.1719197764649\r
2018-12-29,77.1719197764649\r
2019-02-05,64.89644592278968\r
2019-02-10,64.89644592278968\r
2019-02-12,73.80640983492819\r
2019-02-15,69.80847042298956\r
2019-02-17,78.28524728407035\r
2019-02-20,77.54216155888174\r
2019-02-22,78.43428072762234\r
2019-02-25,80.53531552501403\r
2019-02-27,79.10664821554792\r
2019-03-04,80.91336094451486\r
2019-03-07,86.21885262456377\r
2019-03-22,83.04642845674852\r
2019-03-24,91.20695158261827\r
2019-03-27,85.2843123882909\r
2019-03-29,87.78749741009707\r
2019-04-01,87.78749741009707\r
2019-04-08,86.76630337436211\r
2019-04-13,95.42751071243025\r
2019-04-18,91.12670303882862\r
2019-05-01,90.00685456547677\r
2019-05-13,99.40632429864247\r
2019-05-16,94.20045130024704\r
2019-05-23,96.49724967537028\r
2019-05-26,96.49724967537028\r
2019-05-31,95.67385540775172\r
2019-06-02,90.56593149446438\r
2019-06-05,90.56593149446438\r
2019-06-12,97.65580390738066\r
2019-06-17,98.82112590954955\r
2019-06-27,98.82112590954955\r
2019-06-30,96.16747747683475\r
2019-07-02,98.15439901432029\r
2019-07-05,98.40416267372913\r
2019-07-07,95.18147693229886\r
2019-07-10,96.91024202542305\r
2019-07-12,96.41475481708858\r
2019-07-15,98.82112590954955\r
2019-07-17,97.73881677186583\r
2019-07-20,98.57084440059577\r
2019-07-22,96.5797790717192\r
2019-07-25,97.15845186013283\r
2019-08-01,94.44524125127374\r
2019-08-04,92.98116687618638\r
2019-08-06,92.98116687618638\r
2019-08-09,96.66234300551693\r
2019-08-11,95.50959106556805\r
2019-08-14,94.93575408416883\r
2019-08-16,94.93575408416883\r
2019-08-24,93.46794751176921\r
2019-08-26,91.6891689794959\r
2019-08-29,96.33229449749273\r
2019-08-31,94.20045130024704\r
2019-09-03,91.04648907455419\r
2019-09-13,91.20695158261827\r
2019-09-15,92.33406168830885\r
2019-09-18,96.08512077701141\r
2019-09-20,96.24986871720171\r
2019-09-30,96.08512077701141\r
2019-10-03,91.2872347052856\r
2019-10-08,86.76630337436211\r
2019-10-13,89.7677689815908\r
2019-10-25,89.84742958667759\r
2019-10-30,88.57701111370656\r
2019-11-04,88.57701111370656\r
2019-12-29,47.472115052107974\r
2020-01-06,74.89578676653862\r
2020-01-16,77.4680438063632\r
2020-01-18,77.4680438063632\r
2020-01-21,77.4680438063632\r
2020-01-26,74.67728630996551\r
2020-02-07,84.5866794512259\r
2020-02-12,84.5866794512259\r
2020-02-15,86.60971578936888\r
2020-02-20,78.06195729319997\r
2020-02-22,78.06195729319997\r
2020-03-21,78.13635259930705\r
2020-03-23,81.90033471234665\r
2020-03-26,81.90033471234665\r
2020-03-28,80.98907402827801\r
2020-03-31,81.14060419023268\r
2020-04-02,78.6580910535898\r
2020-04-05,79.03180197925597\r
2020-04-07,77.39396075116676\r
2020-04-10,76.06639979407086\r
2020-04-12,74.60452227148657\r
2020-04-15,72.72484772352132\r
2020-04-27,73.30070819205997\r
2020-05-07,97.15845186013283\r
2020-05-17,88.89378543353547\r
2020-05-20,92.57646687627968\r
2020-05-22,92.57646687627968\r
2020-05-25,92.49563057802712\r
2020-05-27,89.92712478152033\r
2020-05-30,92.73824317640921\r
2020-06-01,92.73824317640921\r
2020-06-14,100.0\r
2020-06-21,96.24986871720171\r
2020-06-24,96.24986871720171\r
2020-06-26,98.65423704837133\r
2020-06-29,97.65580390738066\r
2020-07-01,100.0\r
2020-07-04,97.48988176733033\r
2020-07-06,97.48988176733033\r
2020-07-09,97.82186416517156\r
2020-07-11,97.82186416517156\r
2020-07-14,100.0\r
2020-07-19,97.07568071461304\r
2020-07-21,100.0\r
2020-07-24,98.15439901432029\r
2020-07-26,99.49006213974234\r
2020-07-29,97.15845186013283\r
2020-07-31,97.98806253578823\r
2020-08-05,96.99294410283753\r
2020-08-08,93.30554904860212\r
2020-08-10,91.85018471904465\r
2020-08-15,97.73881677186583\r
2020-08-18,92.73824317640921\r
2020-08-20,96.99294410283753\r
2020-08-25,91.04648907455419\r
2020-09-02,98.23761904252129\r
2020-09-04,93.79315916684568\r
2020-09-07,97.40697249299495\r
2020-09-09,97.40697249299495\r
2020-09-12,95.5917059642158\r
2020-09-14,92.49563057802712\r
2020-09-17,92.98116687618638\r
2020-11-18,47.413827575361076\r
2020-11-21,47.413827575361076\r
2020-11-23,49.296409681411625\r
2020-11-26,48.23304193101186\r
2020-11-28,48.174298808876934\r
2020-12-18,83.27658274245992\r
2020-12-28,83.27658274245992\r
2021-02-14,52.86143037660804\r
2021-02-21,53.91124212351479\r
2021-02-24,51.517855866440485\r
2021-02-26,50.91273883721\r
2021-03-01,51.7608825878335\r
2021-03-06,50.25115306712016\r
2021-03-23,43.92461675377779\r
2021-03-28,53.04595689225773\r
2021-03-31,51.33595327035053\r
2021-04-02,60.029104904658894\r
2021-04-05,62.20640520886667\r
2021-04-07,60.6191478952587\r
2021-04-12,64.4893863377647\r
2021-04-15,67.64220871423132\r
2021-04-17,66.9505467336264\r
2021-04-27,94.6903421848746\r
2021-05-05,94.44524125127374\r
2021-05-27,89.92712478152033\r
2021-05-30,89.92712478152033\r
2021-06-01,89.92712478152033\r
2021-06-11,87.94512331910241\r
2021-06-14,93.95597234869854\r
2021-06-16,90.08661893790486\r
2021-06-26,95.50959106556805\r
2021-07-11,88.7353290760604\r
2021-07-19,100.0\r
2021-07-21,91.85018471904465\r
2021-07-29,91.12670303882862\r
2021-08-05,90.80605466520151\r
2021-08-08,94.03743077600605\r
2021-08-10,96.5797790717192\r
2021-08-13,96.5797790717192\r
2021-08-15,96.5797790717192\r
2021-08-20,95.18147693229886\r
2021-08-25,87.86629306164335\r
2021-08-28,87.86629306164335\r
2021-09-04,92.49563057802712\r
2021-09-07,90.8861648871024\r
2021-09-12,89.608551543256\r
2021-09-22,85.5952718160616\r
2021-09-24,85.0514564042951\r
2021-10-14,83.89185182740741\r
2021-10-17,84.50933783907894\r
2021-10-19,87.07989391965586\r
2021-10-22,87.07989391965586\r
2021-10-24,84.35475851792367\r
2021-10-27,77.1719197764649\r
2021-12-21,80.91336094451486\r
2021-12-23,85.98475015604188\r
2022-01-25,84.35475851792367\r
2022-01-27,94.77211160039526\r
2022-02-09,82.96977965427348\r
2022-02-11,82.96977965427348\r
2022-02-19,87.5513180974396\r
2022-02-26,82.96977965427348\r
2022-03-01,82.96977965427348\r
2022-03-06,88.02398818182436\r
2022-03-08,85.51748002012344\r
2022-03-26,89.05238018096038\r
2022-04-15,84.7414665753408\r
2022-04-17,92.41482884849259\r
2022-04-22,88.33979367235249\r
2022-04-27,88.26079039507249\r
2022-04-30,95.18147693229886\r
2022-05-02,90.16641789816295\r
2022-05-07,95.09953476742452\r
2022-05-12,86.45326666979432\r
2022-05-17,96.24986871720171\r
2022-05-25,96.24986871720171\r
2022-05-27,96.24986871720171\r
2022-05-30,89.608551543256\r
2022-06-01,89.608551543256\r
2022-06-04,91.52829154018319\r
2022-06-06,91.52829154018319\r
2022-06-11,98.40416267372913\r
2022-06-16,98.48748627551116\r
2022-06-19,95.09953476742452\r
2022-06-21,95.09953476742452\r
2022-06-29,94.11892376006452\r
2022-07-01,88.33979367235249\r
2022-07-06,92.33406168830885\r
2022-07-11,99.32262097413128\r
2022-07-14,94.28201339592694\r
2022-07-16,96.16747747683475\r
2022-07-19,97.07568071461304\r
2022-07-21,95.26345364517317\r
2022-07-24,94.77211160039526\r
2022-07-26,94.20045130024704\r
2022-07-31,95.50959106556805\r
2022-08-03,95.09953476742452\r
2022-08-05,96.99294410283753\r
2022-08-08,97.3240977499398\r
2022-08-10,96.91024202542305\r
2022-08-13,96.99294410283753\r
2022-08-25,95.50959106556805\r
2022-08-28,95.75603939555434\r
2022-08-30,95.75603939555434\r
2022-09-02,95.75603939555434\r
2022-09-04,93.14328883506121\r
2022-09-09,91.76965956205852\r
2022-09-12,92.09196763019435\r
2022-09-14,86.92302941953555\r
2022-09-19,85.90678524220253\r
2022-09-22,86.0627496914868\r
2022-10-02,79.63154293033085\r
2022-10-04,94.28201339592694\r
2022-10-07,96.00279861835146\r
2022-10-09,92.33406168830885\r
2022-10-12,92.33406168830885\r
2022-10-22,87.78749741009707\r
2022-11-11,78.13635259930705\r
2022-11-13,78.13635259930705\r
2022-12-06,80.76203877481237\r
2022-12-08,91.93074444981917\r
2022-12-11,84.97390700112183\r
2022-12-13,84.97390700112183\r
2022-12-18,89.7677689815908\r
2023-02-09,79.3313950143611\r
2023-02-11,88.18182172045859\r
2023-02-14,81.6720516273771\r
2023-02-16,84.7414665753408\r
2023-02-21,82.3578366007398\r
2023-02-26,84.43203086109023\r
2023-03-28,96.08512077701141\r
2023-03-31,96.08512077701141\r
2023-04-05,96.41475481708858\r
2023-04-07,96.41475481708858\r
2023-05-27,90.32611957960373\r
2023-05-30,90.32611957960373\r
2023-06-01,91.85018471904465\r
2023-06-04,91.85018471904465\r
2023-06-06,97.07568071461304\r
2023-06-11,90.8861648871024\r
2023-06-14,92.33406168830885\r
2023-06-16,91.2872347052856\r
2023-06-19,98.57084440059577\r
2023-06-24,100.0\r
2023-06-26,95.42751071243025\r
2023-07-06,94.20045130024704\r
2023-07-09,98.57084440059577\r
2023-07-11,96.49724967537028\r
2023-07-14,97.82186416517156\r
2023-07-16,97.82186416517156\r
2023-07-19,98.23761904252129\r
2023-07-26,97.24125753878047\r
2023-07-31,92.98116687618638\r
2023-08-08,97.90494608668368\r
2023-08-15,96.74494147614531\r
2023-08-23,100.0\r
2023-08-25,100.0\r
2023-09-04,99.49006213974234\r
2023-09-07,99.82535865785866\r
2023-09-12,90.96630969043275\r
2023-09-14,90.96630969043275\r
2023-09-17,88.57701111370656\r
2023-09-19,86.14078384787982\r
2023-10-02,83.73782670596074\r
2023-10-04,83.73782670596074\r
2023-10-07,86.45326666979432\r
2023-10-09,84.43203086109023\r
2023-10-12,84.43203086109023\r
2023-11-08,85.51748002012344\r
2023-12-03,81.9764983887297\r
2023-12-18,82.81658599248644\r
`;export{n as default};
