const n=`date,value\r
2017-01-26,65.04572165975021\r
2017-02-15,63.75012962558459\r
2017-02-25,65.63472672692137\r
2017-03-17,62.26052145833481\r
2017-04-06,69.0469024678858\r
2017-05-16,58.24720289418129\r
2017-07-05,65.1717329284707\r
2017-08-14,55.36627879223217\r
2017-09-08,45.86533704492667\r
2017-10-08,44.47906289488222\r
2017-10-13,46.47568473845543\r
2017-11-07,46.044468616534886\r
2017-11-17,45.75801115329416\r
2017-11-22,44.974464424234036\r
2017-11-27,46.044468616534886\r
2017-12-07,49.43430611390251\r
2017-12-12,44.09157718716437\r
2018-02-15,61.89063335326708\r
2018-02-25,62.425239145802095\r
2018-03-02,68.05781769221154\r
2018-04-21,81.28208527922969\r
2018-05-11,89.40743310972262\r
2018-05-21,86.22946873774796\r
2018-06-20,98.7466651060348\r
2018-06-25,97.83416839092138\r
2018-07-25,93.67665272960714\r
2018-08-04,88.2457345506337\r
2018-08-19,99.71405060122314\r
2018-09-03,86.46838431785959\r
2018-09-23,95.61991746977392\r
2018-09-28,97.22798679331343\r
2018-10-03,91.21196576317229\r
2018-10-23,83.66843052016371\r
2018-11-17,83.2450204403861\r
2018-11-27,83.2450204403861\r
2018-12-17,84.89712202535561\r
2019-01-26,12.669447290620075\r
2019-02-15,93.13184773627276\r
2019-02-20,86.22946873774796\r
2019-02-25,96.52294979246916\r
2019-03-22,91.94822085714863\r
2019-03-27,93.87512331784106\r
2019-05-01,90.47841424293728\r
2019-05-06,96.12112362622938\r
2019-05-16,100.0\r
2019-07-05,100.0\r
2019-07-10,98.34063349063763\r
2019-07-15,100.0\r
2019-07-25,100.0\r
2019-08-04,95.1698550706155\r
2019-08-09,91.70250221204182\r
2019-08-14,93.13184773627276\r
2019-08-24,94.77061366469594\r
2019-09-03,94.77061366469594\r
2019-09-13,92.6871776385746\r
2019-10-08,80.26242258499771\r
2019-10-13,88.43886917362438\r
2020-01-06,84.09282120770126\r
2020-01-11,83.3860481505893\r
2020-01-16,78.24074553982078\r
2020-02-20,74.4466884165292\r
2020-03-21,87.04301288791916\r
2020-03-26,75.38712742302785\r
2020-04-05,82.58833266589237\r
2020-04-10,92.5391702375151\r
2020-04-15,87.76374160250005\r
2020-05-05,84.2817539413588\r
2020-05-20,99.91825929803699\r
2020-05-25,90.57606483775888\r
2020-05-30,97.53086256033784\r
2020-07-14,89.55313307887306\r
2020-07-19,88.63219656669425\r
2020-07-24,80.26242258499771\r
2020-08-08,78.19507211770568\r
2020-09-02,61.89063335326708\r
2020-09-12,55.87443482730296\r
2020-09-17,55.75697991678964\r
2020-11-11,54.24034423254284\r
2020-11-21,56.03121690501274\r
2020-11-26,51.98230314990159\r
2021-02-19,86.086264280491\r
2021-02-24,91.84989737271292\r
2021-03-01,82.86947950049908\r
2021-03-31,88.58384664823097\r
2021-04-05,92.58849403778845\r
2021-04-15,92.5391702375151\r
2021-05-20,84.18726337498629\r
2021-06-14,94.42190616610429\r
2021-07-19,86.18172184326724\r
2021-08-28,66.26849272987953\r
2021-09-12,63.45922443214492\r
2021-10-07,55.444318656992095\r
2021-10-12,57.253074585768594\r
2021-10-17,44.16191398111493\r
2021-10-27,49.656776114187686\r
2021-12-11,70.30328997581907\r
2021-12-16,56.778669860316576\r
2022-01-15,67.80086754299504\r
2022-01-25,65.29785554260232\r
2022-02-09,67.97211833424215\r
2022-03-21,78.78977623210658\r
2022-03-26,69.69546656816438\r
2022-04-05,77.55692313546494\r
2022-06-19,89.1648405702234\r
2022-07-14,69.86888448160144\r
2022-07-24,71.83338371688029\r
2022-08-03,73.33415069968198\r
2022-08-23,52.55222424381232\r
2022-08-28,55.992002581049384\r
2022-09-22,46.51170224718963\r
2022-10-02,51.98230314990159\r
2022-10-07,52.209931079749886\r
2022-11-06,43.635636207330606\r
2022-11-11,38.598031070627194\r
2022-11-16,44.69107104353597\r
2023-01-10,48.62248715865891\r
2023-02-04,50.14035861195152\r
2023-02-09,45.901137852996484\r
2023-03-16,49.064536639954085\r
2023-04-05,48.475543352639164\r
2023-06-24,67.80086754299504\r
2023-07-14,65.676891270707\r
2023-07-29,62.301682250645584\r
2023-08-08,62.79658032881292\r
2023-08-18,63.70853454891841\r
2023-08-23,60.13729303514036\r
`;export{n as default};
