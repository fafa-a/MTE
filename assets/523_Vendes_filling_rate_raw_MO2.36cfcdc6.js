const n=`date,value\r
2017-02-15,56.99047881378478\r
2017-02-25,58.44805242488016\r
2017-03-17,40.01572549893535\r
2017-03-27,44.531547141389346\r
2017-04-03,63.662025116539\r
2017-04-06,63.662025116539\r
2017-04-23,60.66128640446491\r
2017-05-16,100.0\r
2017-05-23,100.0\r
2017-05-26,100.0\r
2017-06-02,40.01572549893535\r
2017-06-05,40.01572549893535\r
2017-06-25,32.72117229053575\r
2017-07-02,30.988104535709503\r
2017-07-05,45.856223138482086\r
2017-07-07,45.856223138482086\r
2017-07-17,59.182223707848756\r
2017-07-18,59.182223707848756\r
2017-07-22,59.182223707848756\r
2017-08-14,67.49208442062132\r
2017-08-19,67.49208442062132\r
2017-08-21,62.154578668099234\r
2017-08-22,71.40903338092247\r
2017-08-24,71.40903338092247\r
2017-08-26,87.06768122876323\r
2017-08-27,87.06768122876323\r
2017-08-29,69.83189626489978\r
2017-09-03,81.99224273052684\r
2017-09-23,56.99047881378478\r
2017-10-03,56.99047881378478\r
2017-10-05,77.8542437034441\r
2017-10-06,77.8542437034441\r
2017-10-11,77.8542437034441\r
2017-10-13,79.49939084061779\r
2017-10-15,75.41180769535116\r
2017-10-16,77.03671929847881\r
2017-10-18,73.80046501095214\r
2017-10-25,80.32699822267182\r
2017-10-26,71.40903338092247\r
2017-10-28,71.40903338092247\r
2017-11-04,45.19198833547653\r
2017-11-05,45.19198833547653\r
2017-11-07,45.19198833547653\r
2017-11-14,45.19198833547653\r
2017-11-17,49.23388380894668\r
2017-11-22,58.44805242488016\r
2017-11-27,58.44805242488016\r
2018-02-25,68.26855781705292\r
2018-02-27,68.26855781705292\r
2018-03-05,68.26855781705292\r
2018-03-14,49.23388380894668\r
2018-03-17,49.23388380894668\r
2018-03-19,49.23388380894668\r
2018-03-20,49.23388380894668\r
2018-03-24,49.23388380894668\r
2018-04-18,59.182223707848756\r
2018-04-19,59.182223707848756\r
2018-04-21,66.71908644483166\r
2018-04-26,66.71908644483166\r
2018-05-11,50.61109170121\r
2018-05-18,49.92063173296179\r
2018-05-19,49.92063173296179\r
2018-05-21,49.92063173296179\r
2018-05-26,49.23388380894668\r
2018-06-20,61.406158587353346\r
2018-06-22,67.49208442062132\r
2018-06-23,67.49208442062132\r
2018-06-25,60.66128640446491\r
2018-06-27,65.94957264455822\r
2018-06-28,65.94957264455822\r
2018-07-03,62.90653727175044\r
2018-07-07,55.547330104372826\r
2018-07-08,69.04849796203307\r
2018-07-12,62.90653727175044\r
2018-07-22,62.154578668099234\r
2018-07-27,73.80046501095214\r
2018-07-28,73.80046501095214\r
2018-07-30,89.64987713753237\r
2018-08-01,89.64987713753237\r
2018-08-02,89.64987713753237\r
2018-08-04,89.64987713753237\r
2018-08-06,84.51507211907663\r
2018-08-07,92.26147157549293\r
2018-08-11,87.92513516734819\r
2018-08-12,87.92513516734819\r
2018-08-14,87.92513516734819\r
2018-08-16,87.92513516734819\r
2018-08-19,86.21351467402185\r
2018-08-22,86.21351467402185\r
2018-08-26,91.38768502893167\r
2018-09-01,75.41180769535116\r
2018-09-03,77.8542437034441\r
2018-09-05,77.8542437034441\r
2018-09-08,81.15795135663629\r
2018-09-10,88.7858694609952\r
2018-09-11,88.7858694609952\r
2018-09-18,77.8542437034441\r
2018-09-20,88.7858694609952\r
2018-09-25,99.36806518725302\r
2018-09-26,99.36806518725302\r
2018-09-28,99.36806518725302\r
2018-09-30,100.0\r
2018-10-05,82.82986489587279\r
2018-10-06,97.57212508299564\r
2018-10-10,97.57212508299564\r
2018-10-11,77.03671929847881\r
2018-10-13,99.36806518725302\r
2018-10-16,63.662025116539\r
2018-10-18,82.82986489587279\r
2018-10-20,66.71908644483166\r
2018-10-21,66.71908644483166\r
2018-10-23,67.49208442062132\r
2018-10-25,65.18355185883792\r
2018-10-30,52.704633294112845\r
2018-11-04,41.28667826092707\r
2018-11-09,65.94957264455822\r
2018-11-14,67.49208442062132\r
2018-11-19,67.49208442062132\r
2018-11-22,68.26855781705292\r
2018-11-24,57.717467504771406\r
2018-11-27,90.5171512806105\r
2019-02-05,59.919971589206526\r
2019-02-13,59.919971589206526\r
2019-02-15,59.919971589206526\r
2019-02-17,48.55085917691984\r
2019-02-18,48.55085917691984\r
2019-02-20,54.83119034438353\r
2019-02-22,52.704633294112845\r
2019-02-23,52.704633294112845\r
2019-02-25,45.856223138482086\r
2019-02-27,52.00310341529462\r
2019-03-07,57.717467504771406\r
2019-03-22,70.61874421510429\r
2019-03-24,82.82986489587279\r
2019-03-27,62.154578668099234\r
2019-03-29,69.83189626489978\r
2019-03-30,69.83189626489978\r
2019-04-01,69.83189626489978\r
2019-04-08,60.66128640446491\r
2019-04-09,73.80046501095214\r
2019-04-11,73.80046501095214\r
2019-04-18,61.406158587353346\r
2019-04-19,61.406158587353346\r
2019-05-01,83.67081046679064\r
2019-05-06,80.32699822267182\r
2019-05-13,80.32699822267182\r
2019-05-14,80.32699822267182\r
2019-05-16,80.32699822267182\r
2019-05-23,81.15795135663629\r
2019-05-28,81.15795135663629\r
2019-05-29,81.15795135663629\r
2019-05-31,91.38768502893167\r
2019-06-02,69.83189626489978\r
2019-06-08,79.49939084061779\r
2019-06-17,79.49939084061779\r
2019-06-25,79.49939084061779\r
2019-06-27,80.32699822267182\r
2019-06-28,80.32699822267182\r
2019-06-30,78.67513678691837\r
2019-07-02,79.49939084061779\r
2019-07-03,65.94957264455822\r
2019-07-05,77.03671929847881\r
2019-07-07,73.80046501095214\r
2019-07-08,73.80046501095214\r
2019-07-10,79.49939084061779\r
2019-07-12,79.49939084061779\r
2019-07-13,84.51507211907663\r
2019-07-15,84.51507211907663\r
2019-07-17,83.67081046679064\r
2019-07-20,93.13850416684484\r
2019-07-22,89.64987713753237\r
2019-07-23,87.92513516734819\r
2019-07-25,100.0\r
2019-08-02,100.0\r
2019-08-04,100.0\r
2019-08-09,100.0\r
2019-08-12,93.13850416684484\r
2019-08-14,93.13850416684484\r
2019-08-22,77.03671929847881\r
2019-08-24,77.8542437034441\r
2019-08-26,75.41180769535116\r
2019-08-29,75.41180769535116\r
2019-08-31,95.789011463275\r
2019-09-03,89.64987713753237\r
2019-09-06,89.64987713753237\r
2019-09-10,94.90228073353978\r
2019-09-13,94.90228073353978\r
2019-09-15,87.92513516734819\r
2019-09-16,87.92513516734819\r
2019-09-18,87.92513516734819\r
2019-09-20,87.06768122876323\r
2019-09-21,87.06768122876323\r
2019-10-03,100.0\r
2019-10-08,81.99224273052684\r
2019-10-11,81.99224273052684\r
2019-10-13,81.99224273052684\r
2019-10-21,73.80046501095214\r
2019-11-04,50.61109170121\r
2019-11-07,50.61109170121\r
2019-11-09,50.61109170121\r
2019-11-22,61.406158587353346\r
2019-11-24,64.42103301228482\r
2019-12-04,58.44805242488016\r
2019-12-05,58.44805242488016\r
2020-01-16,55.547330104372826\r
2020-01-18,55.547330104372826\r
2020-01-19,55.547330104372826\r
2020-01-21,52.704633294112845\r
2020-01-24,58.44805242488016\r
2020-02-15,52.704633294112845\r
2020-02-18,52.704633294112845\r
2020-02-20,54.83119034438353\r
2020-02-22,44.531547141389346\r
2020-03-18,41.28667826092707\r
2020-03-19,41.28667826092707\r
2020-03-21,41.28667826092707\r
2020-03-23,61.406158587353346\r
2020-03-24,61.406158587353346\r
2020-03-26,54.83119034438353\r
2020-03-28,59.919971589206526\r
2020-03-31,52.704633294112845\r
2020-04-02,58.44805242488016\r
2020-04-05,60.66128640446491\r
2020-04-07,60.66128640446491\r
2020-04-08,56.2670963218307\r
2020-04-10,56.99047881378478\r
2020-04-12,49.92063173296179\r
2020-04-13,56.2670963218307\r
2020-04-15,54.11868733435108\r
2020-04-17,59.919971589206526\r
2020-04-22,72.99990201910279\r
2020-04-23,72.99990201910279\r
2020-04-27,72.99990201910279\r
2020-05-07,26.54911126204204\r
2020-05-17,37.520678407365594\r
2020-05-18,37.520678407365594\r
2020-05-20,37.520678407365594\r
2020-05-25,46.524239479964024\r
2020-05-27,52.00310341529462\r
2020-05-28,52.00310341529462\r
2020-05-30,52.00310341529462\r
2020-06-01,52.00310341529462\r
2020-06-02,63.662025116539\r
2020-06-26,75.41180769535116\r
2020-06-29,75.41180769535116\r
2020-07-04,71.40903338092247\r
2020-07-06,71.40903338092247\r
2020-07-07,71.40903338092247\r
2020-07-09,77.03671929847881\r
2020-07-11,64.42103301228482\r
2020-07-12,59.919971589206526\r
2020-07-14,59.919971589206526\r
2020-07-17,59.919971589206526\r
2020-07-19,92.26147157549293\r
2020-07-21,73.80046501095214\r
2020-07-22,73.80046501095214\r
2020-07-24,99.36806518725302\r
2020-07-27,100.0\r
2020-07-29,94.90228073353978\r
2020-07-31,97.57212508299564\r
2020-08-05,83.67081046679064\r
2020-08-06,83.67081046679064\r
2020-08-08,87.92513516734819\r
2020-08-10,86.21351467402185\r
2020-08-15,76.22257134772845\r
2020-08-20,82.82986489587279\r
2020-08-25,84.51507211907663\r
2020-09-04,77.8542437034441\r
2020-09-07,81.15795135663629\r
2020-09-09,77.03671929847881\r
2020-09-10,87.06768122876323\r
2020-09-12,87.06768122876323\r
2020-09-14,77.03671929847881\r
2020-09-15,77.03671929847881\r
2020-09-17,82.82986489587279\r
2020-11-11,50.61109170121\r
2020-11-14,50.61109170121\r
2020-11-18,69.83189626489978\r
2020-11-19,69.83189626489978\r
2020-11-21,55.547330104372826\r
2020-11-23,66.71908644483166\r
2020-11-28,66.71908644483166\r
2020-11-29,66.71908644483166\r
2020-12-04,59.919971589206526\r
2020-12-11,85.36264258931789\r
2020-12-13,85.36264258931789\r
2021-02-14,39.38608607577929\r
2021-02-17,39.38608607577929\r
2021-02-21,49.23388380894668\r
2021-02-24,48.55085917691984\r
2021-02-27,65.94957264455822\r
2021-03-01,49.92063173296179\r
2021-03-04,69.04849796203307\r
2021-03-06,56.99047881378478\r
2021-03-08,59.919971589206526\r
2021-03-09,59.919971589206526\r
2021-03-14,48.55085917691984\r
2021-03-23,52.704633294112845\r
2021-03-24,52.704633294112845\r
2021-03-28,72.99990201910279\r
2021-03-29,72.99990201910279\r
2021-03-31,65.18355185883792\r
2021-04-02,74.60443625501063\r
2021-04-03,73.80046501095214\r
2021-04-05,73.80046501095214\r
2021-04-07,73.80046501095214\r
2021-04-08,72.99990201910279\r
2021-04-22,72.99990201910279\r
2021-04-23,72.99990201910279\r
2021-04-25,72.99990201910279\r
2021-04-27,72.99990201910279\r
2021-05-05,37.520678407365594\r
2021-05-08,37.520678407365594\r
2021-05-13,37.520678407365594\r
2021-05-27,30.41863237835416\r
2021-05-28,30.41863237835416\r
2021-05-30,30.41863237835416\r
2021-06-01,46.524239479964024\r
2021-06-09,46.524239479964024\r
2021-06-11,46.524239479964024\r
2021-06-14,71.40903338092247\r
2021-06-16,83.67081046679064\r
2021-06-26,65.18355185883792\r
2021-07-04,55.547330104372826\r
2021-07-07,45.19198833547653\r
2021-07-11,45.19198833547653\r
2021-07-19,59.182223707848756\r
2021-07-21,69.04849796203307\r
2021-07-22,69.04849796203307\r
2021-07-29,69.04849796203307\r
2021-08-10,45.19198833547653\r
2021-08-11,45.19198833547653\r
2021-08-15,45.19198833547653\r
2021-08-20,54.11868733435108\r
2021-08-25,52.704633294112845\r
2021-08-26,52.704633294112845\r
2021-09-07,70.61874421510429\r
2021-09-12,70.61874421510429\r
2021-09-17,70.61874421510429\r
2021-09-22,35.08884987979836\r
2021-09-24,65.18355185883792\r
2021-09-25,65.18355185883792\r
2021-09-27,62.90653727175044\r
2021-09-30,62.90653727175044\r
2021-10-02,62.90653727175044\r
2021-10-04,69.83189626489978\r
2021-10-14,55.547330104372826\r
2021-10-15,55.547330104372826\r
2021-10-17,55.547330104372826\r
2021-10-19,62.154578668099234\r
2021-10-22,62.154578668099234\r
2021-10-24,56.2670963218307\r
2021-10-27,55.547330104372826\r
2021-11-01,59.182223707848756\r
2022-01-15,46.524239479964024\r
2022-01-25,57.717467504771406\r
2022-02-09,41.92796508569293\r
2022-02-26,45.856223138482086\r
2022-02-27,45.856223138482086\r
2022-03-06,49.23388380894668\r
2022-03-08,49.23388380894668\r
2022-03-09,64.42103301228482\r
2022-03-23,54.83119034438353\r
2022-03-24,54.83119034438353\r
2022-03-26,55.547330104372826\r
2022-04-17,75.41180769535116\r
2022-04-20,75.41180769535116\r
2022-04-22,75.41180769535116\r
2022-05-02,61.406158587353346\r
2022-05-03,61.406158587353346\r
2022-05-08,61.406158587353346\r
2022-05-10,65.18355185883792\r
2022-05-15,41.28667826092707\r
2022-05-17,53.40983147834102\r
2022-05-30,39.38608607577929\r
2022-06-01,49.23388380894668\r
2022-06-02,49.23388380894668\r
2022-06-04,49.23388380894668\r
2022-06-11,46.524239479964024\r
2022-06-14,40.64926067491799\r
2022-06-16,42.5731081456838\r
2022-06-21,42.5731081456838\r
2022-06-29,60.66128640446491\r
2022-07-02,39.38608607577929\r
2022-07-04,40.64926067491799\r
2022-07-06,40.64926067491799\r
2022-07-11,57.717467504771406\r
2022-07-12,57.717467504771406\r
2022-07-14,60.66128640446491\r
2022-07-16,62.154578668099234\r
2022-07-17,62.154578668099234\r
2022-07-19,63.662025116539\r
2022-07-21,61.406158587353346\r
2022-07-24,62.154578668099234\r
2022-07-31,69.04849796203307\r
2022-08-03,78.67513678691837\r
2022-08-06,71.40903338092247\r
2022-08-08,80.32699822267182\r
2022-08-10,69.04849796203307\r
2022-08-11,69.04849796203307\r
2022-08-13,77.03671929847881\r
2022-08-18,69.83189626489978\r
2022-08-25,62.90653727175044\r
2022-08-28,62.90653727175044\r
2022-08-31,62.90653727175044\r
2022-09-02,62.90653727175044\r
2022-09-04,86.21351467402185\r
2022-09-12,88.7858694609952\r
2022-09-19,81.15795135663629\r
2022-09-20,81.15795135663629\r
2022-09-22,74.60443625501063\r
2022-10-04,73.80046501095214\r
2022-10-05,73.80046501095214\r
2022-10-09,87.06768122876323\r
2022-10-19,83.67081046679064\r
2022-10-22,81.15795135663629\r
2022-11-11,47.19602543373283\r
2022-11-13,47.19602543373283\r
2023-01-15,57.717467504771406\r
2023-02-11,64.42103301228482\r
2023-02-12,64.42103301228482\r
2023-02-14,59.182223707848756\r
2023-02-16,59.182223707848756\r
2023-03-01,52.00310341529462\r
2023-03-04,52.00310341529462\r
2023-04-05,55.547330104372826\r
2023-04-08,55.547330104372826\r
2023-04-13,55.547330104372826\r
2023-04-20,40.01572549893535\r
2023-06-01,43.874911773971334\r
2023-06-02,43.874911773971334\r
2023-06-04,43.874911773971334\r
2023-06-06,43.874911773971334\r
2023-06-11,43.874911773971334\r
2023-06-14,74.60443625501063\r
2023-06-16,74.60443625501063\r
2023-06-19,95.789011463275\r
2023-06-24,68.26855781705292\r
2023-06-27,89.64987713753237\r
2023-07-02,73.80046501095214\r
2023-07-04,73.80046501095214\r
2023-07-09,72.99990201910279\r
`;export{n as default};
