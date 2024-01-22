const r=`date,value\r
2017-01-26,19.27897120498639\r
2017-02-15,47.62363421662528\r
2017-02-18,48.408887774140936\r
2017-02-25,51.32224067406851\r
2017-03-10,63.47038357562911\r
2017-03-30,72.89903453394508\r
2017-04-09,92.27183395726672\r
2017-04-19,92.15201035788053\r
2017-04-29,89.71512591646199\r
2017-05-09,92.69191439950163\r
2017-05-16,100.0\r
2017-05-26,99.8745637037045\r
2017-06-18,100.0\r
2017-07-05,96.7061604568327\r
2017-08-02,83.98358049696382\r
2017-08-12,67.56365141575823\r
2017-08-14,70.81965012562308\r
2017-08-22,52.53216830842097\r
2017-09-21,31.869211793931097\r
2017-10-08,30.066142786918036\r
2017-10-11,28.96947308437555\r
2017-10-13,28.506558026224965\r
2017-10-16,27.563286439057737\r
2017-10-23,28.200303096353352\r
2017-10-26,24.84123813495868\r
2017-10-31,26.578955448587298\r
2017-11-17,26.402171828334648\r
2017-11-20,22.385977928058228\r
2017-11-22,24.756104016510992\r
2017-12-05,23.498998908700866\r
2017-12-12,29.280442307049142\r
2017-12-25,40.694465700381286\r
2018-02-15,100.0\r
2018-03-02,94.26172707918423\r
2018-03-15,97.63201267160862\r
2018-03-22,100.0\r
2018-03-30,95.84655761976578\r
2018-04-06,93.71663263748383\r
2018-04-19,94.0192408104911\r
2018-04-21,100.0\r
2018-04-24,88.48133841531022\r
2018-05-06,91.49456361056608\r
2018-05-11,100.0\r
2018-05-21,99.37371411551132\r
2018-06-20,97.26106941399063\r
2018-06-23,95.60175865521104\r
2018-06-25,92.81213683257704\r
2018-07-08,92.15201035788053\r
2018-07-13,94.80862099979431\r
2018-07-23,88.07223505206798\r
2018-07-25,89.53827524332988\r
2018-08-02,84.7239429387183\r
2018-08-04,75.97511545071485\r
2018-08-12,71.59540760993922\r
2018-08-19,65.81982366290595\r
2018-08-22,61.74012305756863\r
2018-08-27,57.992181735147675\r
2018-09-03,55.26854560890316\r
2018-09-08,52.011663475966564\r
2018-09-11,49.87456911186371\r
2018-09-16,42.98715012859767\r
2018-09-23,40.920520098863705\r
2018-09-26,38.69196133409181\r
2018-09-28,42.214974715443304\r
2018-10-03,37.424667428480696\r
2018-12-07,35.34254611460178\r
2019-02-03,100.0\r
2019-02-13,89.36162309901204\r
2019-02-15,98.37631057248419\r
2019-02-20,97.94174593795563\r
2019-02-23,98.37631057248419\r
2019-02-25,98.06579556534552\r
2019-03-20,89.89217517246944\r
2019-03-22,92.21191108332516\r
2019-03-27,96.76772780388461\r
2019-03-30,91.67360166183244\r
2019-05-06,91.5542208336931\r
2019-05-14,97.57013299737618\r
2019-06-18,95.96909069595684\r
2019-06-23,98.37631057248419\r
2019-06-28,100.0\r
2019-07-05,95.4183931592747\r
2019-07-15,94.9303975004352\r
2019-07-25,74.58723639544618\r
2019-08-09,69.48638253933387\r
2019-08-14,65.96827848344469\r
2019-08-17,61.69244842903831\r
2019-08-22,61.216854221959636\r
2019-08-24,64.6879870201532\r
2019-08-29,64.10189438222382\r
2019-09-11,47.33617102752294\r
2019-09-13,48.53354347091527\r
2019-09-16,43.649767900728115\r
2019-10-08,34.9963530810487\r
2019-10-11,29.71897604128883\r
2019-10-13,29.124721545012417\r
2019-12-05,92.99263674965202\r
2019-12-10,85.98529444225407\r
2019-12-15,75.86783844896988\r
2019-12-25,86.61995020140574\r
2019-12-30,85.41063799692857\r
2020-01-09,87.78067866121015\r
2020-01-11,88.59842326415605\r
2020-01-14,90.18769870782705\r
2020-01-19,87.78067866121015\r
2020-01-29,88.71559621965122\r
2020-01-31,98.68738425832645\r
2020-02-03,85.98529444225407\r
2020-02-05,89.00891418041888\r
2020-02-15,88.07223505206798\r
2020-02-20,91.3157246810745\r
2020-02-23,93.17333623523051\r
2020-03-11,84.55276186288843\r
2020-03-21,97.63201267160862\r
2020-03-24,92.51174697770541\r
2020-03-26,90.36527778222955\r
2020-04-03,95.72411361142021\r
2020-04-05,94.80862099979431\r
2020-04-10,94.9303975004352\r
2020-04-15,97.07589902383164\r
2020-04-30,91.73332527082366\r
2020-05-05,86.38885901683216\r
2020-05-18,94.68693343328304\r
2020-05-20,94.56533478514191\r
2020-05-28,94.44382503960568\r
2020-05-30,94.68693343328304\r
2020-06-24,88.53986982740655\r
2020-07-07,97.75583899325405\r
2020-07-09,92.27183395726672\r
2020-07-19,82.12078385690693\r
2020-07-22,79.06883515071922\r
2020-07-24,67.81488929478881\r
2020-07-27,68.36948115830495\r
2020-08-06,45.47171452764333\r
2020-08-08,49.411245334780844\r
2020-09-02,32.85978657791169\r
2020-09-05,32.033110101980654\r
2020-09-10,30.607190611080227\r
2020-09-12,27.71420613447978\r
2020-09-17,25.817735478056036\r
2020-09-30,23.334196903095048\r
2020-10-17,40.54415849146022\r
2020-10-30,61.8355351843094\r
2020-11-14,62.7942706569088\r
2020-11-21,66.61378288072136\r
2020-11-26,66.56400169751323\r
2020-11-29,62.31385379185317\r
2020-12-26,88.53986982740655\r
2021-01-03,96.46011399315418\r
2021-01-18,93.47494567529075\r
2021-02-14,97.69391466958375\r
2021-02-19,93.17333623523051\r
2021-02-24,98.87429673688617\r
2021-02-27,95.05226295095908\r
2021-03-01,92.45173548992545\r
2021-03-04,96.39865809857244\r
2021-03-24,92.21191108332516\r
2021-03-29,90.54305563746418\r
2021-03-31,98.12785388416921\r
2021-04-08,92.27183395726672\r
2021-04-15,99.49879220406423\r
2021-04-23,93.83760929879547\r
2021-05-03,88.36434165703831\r
2021-05-28,94.14043952114793\r
2021-06-14,93.95867476799516\r
2021-07-02,89.24396526987495\r
2021-07-22,79.06883515071922\r
2021-08-11,65.5234847874177\r
2021-08-26,42.63868561588598\r
2021-08-31,39.46388317878872\r
2021-09-05,34.20745830381769\r
2021-09-12,34.65209774039995\r
2021-09-27,33.12685665542329\r
2021-09-30,30.57521222492895\r
2021-10-07,32.23041978136186\r
2021-10-12,32.06594717821518\r
2021-10-15,30.383741214737935\r
2021-10-20,24.47352393161813\r
2021-10-27,27.59343286891282\r
2021-11-09,29.31164316622689\r
2021-11-11,28.845614138908278\r
2021-11-19,29.0315158147343\r
2021-12-14,92.87228130062543\r
2021-12-19,90.01031836030998\r
2022-01-13,86.38885901683216\r
2022-01-15,85.64023747454299\r
2022-01-23,91.67360166183244\r
2022-01-25,87.25726289367532\r
2022-02-09,88.53986982740655\r
2022-03-09,86.38885901683216\r
2022-03-24,88.13061234788323\r
2022-04-05,91.49456361056608\r
2022-05-10,99.06141047996084\r
2022-05-28,89.12639563569098\r
2022-06-17,85.41063799692857\r
2022-07-02,86.50436070095242\r
2022-07-12,85.69769214810059\r
2022-07-14,76.99855144035574\r
2022-07-17,69.63948552492674\r
2022-08-01,41.679185713308364\r
2022-08-11,22.27903349386461\r
2022-08-28,15.614346214787666\r
2022-09-05,9.55298716229905\r
2022-09-10,6.980304042975172\r
2022-09-15,6.206147431866535\r
2022-09-20,5.328277090096308\r
2022-09-22,4.900756977993352\r
2022-10-02,2.166266025368596\r
2022-10-05,2.8171063032690347\r
2022-10-07,2.8253450065547225\r
2022-10-15,1.505009019984635\r
2022-12-04,30.54325285795864\r
2022-12-11,30.479391170582463\r
2022-12-21,45.91368661962601\r
2023-01-10,60.03702120593363\r
2023-01-18,88.8328572978649\r
2023-02-02,95.29626076464017\r
2023-02-04,94.68693343328304\r
2023-02-09,89.42048509169922\r
2023-02-12,94.50456880053376\r
2023-02-14,95.78532448309399\r
2023-02-17,95.47949273542316\r
2023-02-24,87.02520524018801\r
2023-03-09,94.32240418090306\r
2023-04-05,98.68738425832645\r
2023-04-08,91.13708481960707\r
2023-04-20,87.25726289367532\r
2023-05-05,85.41063799692857\r
2023-05-28,92.93244793899001\r
2023-06-09,96.58309264400484\r
2023-06-24,98.31416288455392\r
2023-07-14,94.86949813236383\r
2023-07-17,96.64461540419221\r
2023-07-22,88.48133841531022\r
2023-07-27,86.96724576255394\r
2023-08-08,83.64312131243217\r
2023-08-11,76.1361926916509\r
2023-08-16,70.61359330226304\r
2023-08-21,65.96827848344469\r
2023-08-23,64.59009410552194\r
2023-08-31,57.349995058839575\r
2023-09-10,48.49197130388572\r
2023-09-20,38.618897226347705\r
2023-09-25,35.2384845899279\r
2023-09-30,35.58603557602692\r
2023-10-07,30.192954301726726\r
2023-10-10,28.47584781651796\r
2023-10-12,29.46793114878878\r
2023-11-19,86.96724576255394\r
2023-11-26,78.63038775818794\r
2023-12-06,83.87000666518395\r
`;export{r as default};