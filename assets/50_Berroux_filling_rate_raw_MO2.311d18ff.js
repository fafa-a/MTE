const r=`date,value\r
2017-02-15,55.28324466311808\r
2017-02-25,56.38782528943306\r
2017-03-17,45.76760681961147\r
2017-03-27,45.76760681961147\r
2017-04-03,21.028979988722565\r
2017-04-06,21.028979988722565\r
2017-05-26,60.51781939856748\r
2017-06-02,60.51781939856748\r
2017-06-05,60.51781939856748\r
2017-07-05,74.06552656997025\r
2017-07-07,74.06552656997025\r
2017-08-14,62.823120538232445\r
2017-08-19,62.823120538232445\r
2017-08-21,62.823120538232445\r
2017-08-22,62.823120538232445\r
2017-08-24,62.823120538232445\r
2017-08-29,59.75761074793745\r
2017-09-03,59.75761074793745\r
2017-11-17,53.463144086630834\r
2017-11-22,62.05058160953675\r
2017-11-27,62.05058160953675\r
2018-02-25,68.34517254901866\r
2018-02-27,68.34517254901866\r
2018-03-05,68.34517254901866\r
2018-04-21,74.89877474048042\r
2018-04-26,74.89877474048042\r
2018-05-11,64.77237033742925\r
2018-05-18,64.77237033742925\r
2018-05-19,64.77237033742925\r
2018-05-21,64.77237033742925\r
2018-05-26,55.28324466311808\r
2018-06-20,81.708032645226\r
2018-06-22,80.84300370626174\r
2018-06-23,80.84300370626174\r
2018-06-25,90.12174680564023\r
2018-06-27,90.12174680564023\r
2018-06-28,90.12174680564023\r
2018-07-03,89.2194738032529\r
2018-07-07,80.84300370626174\r
2018-07-08,80.84300370626174\r
2018-08-19,69.95942563824323\r
2018-08-22,69.95942563824323\r
2018-08-26,69.95942563824323\r
2018-09-08,56.75809965344559\r
2018-09-10,56.75809965344559\r
2018-09-11,56.75809965344559\r
2018-09-18,75.73601726651421\r
2018-09-20,75.73601726651421\r
2018-09-25,75.73601726651421\r
2018-09-26,75.73601726651421\r
2018-09-28,75.73601726651421\r
2018-10-18,63.21092628958495\r
2018-10-20,63.21092628958495\r
2018-10-21,63.21092628958495\r
2018-10-23,74.89877474048042\r
2018-10-25,74.89877474048042\r
2018-10-30,49.901646731280366\r
2019-02-05,81.708032645226\r
2019-02-13,81.708032645226\r
2019-02-15,81.708032645226\r
2019-02-17,81.708032645226\r
2019-02-18,81.708032645226\r
2019-02-20,60.51781939856748\r
2019-02-22,61.2821454685877\r
2019-02-23,61.2821454685877\r
2019-02-25,46.445954137289434\r
2019-02-27,46.445954137289434\r
2019-03-07,64.38047794633343\r
2019-03-22,59.00152693149913\r
2019-03-24,59.00152693149913\r
2019-03-27,69.15027908708856\r
2019-03-29,69.15027908708856\r
2019-03-30,69.15027908708856\r
2019-04-01,69.15027908708856\r
2019-05-01,75.31689710490116\r
2019-05-06,75.31689710490116\r
2019-05-13,75.31689710490116\r
2019-05-14,75.31689710490116\r
2019-05-16,87.42662176376767\r
2019-05-23,64.77237033742925\r
2019-05-28,64.77237033742925\r
2019-05-29,64.77237033742925\r
2019-05-31,74.89877474048042\r
2019-06-02,48.506613516248784\r
2019-06-08,48.506613516248784\r
2019-06-25,92.85188695224\r
2019-06-27,92.85188695224\r
2019-06-28,92.85188695224\r
2019-06-30,100.0\r
2019-07-02,100.0\r
2019-07-03,100.0\r
2019-07-05,93.31030408851827\r
2019-07-07,93.31030408851827\r
2019-07-08,93.31030408851827\r
2019-07-10,99.35755586293413\r
2019-07-12,94.23004118463511\r
2019-07-13,94.23004118463511\r
2019-07-15,99.35755586293413\r
2019-07-17,90.57434260651145\r
2019-07-20,93.31030408851827\r
2019-07-22,85.20754118445292\r
2019-07-23,85.20754118445292\r
2019-07-25,98.41662196306817\r
2019-08-02,100.0\r
2019-08-04,95.6168937790767\r
2019-08-09,97.94759547041505\r
2019-08-12,100.0\r
2019-08-14,91.48244934145723\r
2019-08-22,94.6913597943054\r
2019-08-24,79.9819259400287\r
2019-08-26,88.76979799566452\r
2019-08-29,88.76979799566452\r
2019-08-31,74.4816509641524\r
2019-09-03,74.4816509641524\r
2019-09-06,74.4816509641524\r
2019-09-13,71.99992334668049\r
2019-09-15,71.99992334668049\r
2019-09-16,71.99992334668049\r
2019-09-18,78.27164807843612\r
2019-09-20,78.27164807843612\r
2019-09-21,78.27164807843612\r
2019-10-03,66.35012562976843\r
2019-10-13,52.38364784663527\r
2019-10-21,52.38364784663527\r
2020-01-06,37.65277908867789\r
2020-01-13,37.65277908867789\r
2020-01-16,40.17556898436278\r
2020-01-18,40.17556898436278\r
2020-01-19,40.17556898436278\r
2020-01-21,46.445954137289434\r
2020-01-24,46.445954137289434\r
2020-03-26,78.27164807843612\r
2020-03-28,78.27164807843612\r
2020-03-31,96.08110781804999\r
2020-04-02,96.08110781804999\r
2020-04-05,75.73601726651421\r
2020-04-07,75.73601726651421\r
2020-04-08,75.73601726651421\r
2020-04-10,78.69773093535157\r
2020-04-12,75.31689710490116\r
2020-04-13,75.31689710490116\r
2020-04-15,82.14202693369815\r
2020-04-17,74.4816509641524\r
2020-04-22,87.87337127137903\r
2020-04-23,87.87337127137903\r
2020-04-27,86.09223716749771\r
2020-05-20,76.57724783334446\r
2020-05-25,89.6701236393164\r
2020-05-27,89.6701236393164\r
2020-05-28,89.6701236393164\r
2020-05-30,82.14202693369815\r
2020-06-01,82.14202693369815\r
2020-06-02,82.14202693369815\r
2020-07-04,78.27164807843612\r
2020-07-06,78.27164807843612\r
2020-07-07,78.27164807843612\r
2020-07-09,91.02791034870292\r
2020-07-11,91.02791034870292\r
2020-07-12,91.02791034870292\r
2020-07-14,91.02791034870292\r
2020-07-17,95.6168937790767\r
2020-07-19,86.53605399955543\r
2020-07-21,100.0\r
2020-07-22,100.0\r
2020-07-24,73.23627912015644\r
2020-07-27,99.35755586293413\r
2020-07-29,77.42246017597421\r
2020-07-31,77.42246017597421\r
2020-08-05,77.84655756882776\r
2020-08-06,77.84655756882776\r
2020-08-08,74.4816509641524\r
2020-08-10,82.14202693369815\r
2020-09-17,74.89877474048042\r
2020-11-21,49.901646731280366\r
2020-11-23,49.901646731280366\r
2020-11-28,49.901646731280366\r
2020-11-29,49.901646731280366\r
2020-12-04,49.901646731280366\r
2021-02-24,57.8751516570349\r
2021-02-27,57.8751516570349\r
2021-03-01,62.05058160953675\r
2021-03-04,62.05058160953675\r
2021-03-06,62.05058160953675\r
2021-03-08,46.78673165333855\r
2021-03-09,46.78673165333855\r
2021-03-31,59.00152693149913\r
2021-04-02,59.00152693149913\r
2021-04-03,59.00152693149913\r
2021-04-05,59.00152693149913\r
2021-04-07,59.00152693149913\r
2021-04-08,59.00152693149913\r
2021-06-14,82.14202693369815\r
2021-06-16,82.14202693369815\r
2021-07-19,65.95416069420328\r
2021-07-21,65.95416069420328\r
2021-07-22,65.95416069420328\r
2021-07-29,75.31689710490116\r
2021-09-07,61.2821454685877\r
2021-09-12,67.54411276366397\r
2021-09-17,67.54411276366397\r
2021-09-22,54.9171352004759\r
2021-09-24,39.85638806629448\r
2021-09-25,39.85638806629448\r
2021-09-27,39.85638806629448\r
2021-09-30,39.85638806629448\r
2021-10-02,39.85638806629448\r
2021-10-22,44.75812197799113\r
2021-10-24,44.75812197799113\r
2021-10-27,44.75812197799113\r
2021-11-01,44.75812197799113\r
2022-01-15,47.128576923547584\r
2022-01-25,57.12941281106188\r
2022-02-09,55.65039681930373\r
2022-03-26,49.551298761475834\r
2022-04-10,57.12941281106188\r
2022-04-15,67.14510252488151\r
2022-04-17,67.14510252488151\r
2022-04-20,67.14510252488151\r
2022-04-22,53.102262984198255\r
2022-05-10,73.65040235516261\r
2022-05-15,86.53605399955543\r
2022-05-17,86.53605399955543\r
2022-05-30,54.18804830663719\r
2022-06-01,54.18804830663719\r
2022-06-02,54.18804830663719\r
2022-06-04,54.18804830663719\r
2022-06-14,69.95942563824323\r
2022-06-16,69.95942563824323\r
2022-06-21,69.95942563824323\r
2022-06-29,69.55434778006399\r
2022-07-02,59.00152693149913\r
2022-07-04,59.00152693149913\r
2022-07-06,59.00152693149913\r
2022-07-14,62.823120538232445\r
2022-07-16,62.823120538232445\r
2022-07-17,62.823120538232445\r
2022-07-19,67.14510252488151\r
2022-07-21,67.14510252488151\r
2022-07-24,65.55921258659704\r
2022-07-31,72.41103880738758\r
2022-08-03,75.73601726651421\r
2022-08-06,69.15027908708856\r
2022-08-08,80.41197055097183\r
2022-08-10,80.41197055097183\r
2022-08-11,80.41197055097183\r
2022-08-13,68.34517254901866\r
2022-08-18,80.84300370626174\r
2022-09-12,61.2821454685877\r
2022-09-19,61.2821454685877\r
2022-09-20,61.2821454685877\r
2022-09-22,64.77237033742925\r
2022-10-22,66.35012562976843\r
2022-11-11,50.95903444397053\r
2022-11-13,50.95903444397053\r
2023-02-09,62.436338678093726\r
2023-02-11,62.436338678093726\r
2023-02-12,62.436338678093726\r
2023-02-14,75.73601726651421\r
2023-02-16,75.73601726651421\r
2023-04-05,60.137199933971054\r
2023-04-08,60.137199933971054\r
2023-04-13,60.137199933971054\r
2023-06-14,83.88785223488642\r
2023-06-16,83.88785223488642\r
2023-06-19,83.88785223488642\r
2023-06-24,85.20754118445292\r
2023-06-27,74.4816509641524\r
2023-07-02,83.01297143179085\r
2023-07-04,83.01297143179085\r
`;export{r as default};
