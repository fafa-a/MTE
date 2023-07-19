const r=`date,value\r
2017-02-15,65.30067822796036\r
2017-02-22,65.30067822796036\r
2017-02-25,67.56389512311543\r
2017-03-07,64.33897103052458\r
2017-03-17,89.175013003127\r
2017-03-27,89.5857681640144\r
2017-04-03,74.04755741894074\r
2017-04-06,76.0555809456355\r
2017-05-16,98.58643783085651\r
2017-05-23,98.58643783085651\r
2017-05-26,99.08356774758012\r
2017-06-02,84.0680051140735\r
2017-06-05,84.0680051140735\r
2017-07-05,55.997622198453165\r
2017-07-07,51.70411145926214\r
2017-07-12,51.70411145926214\r
2017-08-14,80.71503280386752\r
2017-08-19,82.38969807234484\r
2017-08-21,82.38969807234484\r
2017-08-24,80.33028538910821\r
2017-10-18,37.709249293698704\r
2017-10-25,37.709249293698704\r
2017-10-28,37.99255028245895\r
2017-10-30,23.3776838240018\r
2017-11-04,23.3776838240018\r
2017-11-07,25.35306768597624\r
2017-11-14,24.93148437704153\r
2017-11-17,25.625209978015345\r
2017-11-19,22.794233237799194\r
2017-11-22,24.722351871631908\r
2017-11-27,24.62236018436234\r
2017-11-29,23.790797975804562\r
2018-02-25,78.66484487206421\r
2018-02-27,78.66484487206421\r
2018-03-22,100.0\r
2018-03-29,100.0\r
2018-04-01,100.0\r
2018-04-06,90.61783819402972\r
2018-04-16,100.0\r
2018-04-18,100.0\r
2018-04-21,100.0\r
2018-04-23,100.0\r
2018-04-26,99.74218082055076\r
2018-05-06,95.65595957754766\r
2018-05-08,90.67434613688197\r
2018-05-11,92.34175038073967\r
2018-05-13,92.34175038073967\r
2018-05-18,76.5967509469844\r
2018-05-21,76.5967509469844\r
2018-05-26,59.8086887017215\r
2018-06-02,59.8086887017215\r
2018-06-20,84.78862214684078\r
2018-06-22,84.78862214684078\r
2018-06-25,86.38757558856162\r
2018-06-27,86.38757558856162\r
2018-07-02,85.20472388105505\r
2018-07-07,78.57870174299254\r
2018-07-10,79.21756260651568\r
2018-07-12,68.14514251512605\r
2018-07-15,79.6163277423367\r
2018-07-17,79.6163277423367\r
2018-07-25,77.20844459381817\r
2018-08-19,55.55304276634262\r
2018-08-21,55.55304276634262\r
2018-08-26,55.55304276634262\r
2018-09-08,68.60289831580049\r
2018-09-10,68.60289831580049\r
2018-09-13,68.60289831580049\r
2018-09-18,65.23935142836031\r
2018-09-28,54.05531782162425\r
2018-09-30,54.05531782162425\r
2018-10-05,54.05531782162425\r
2018-10-08,55.816743916347036\r
2018-10-13,56.34649662213962\r
2018-10-18,57.84084810219425\r
2018-10-20,60.581066857915886\r
2018-10-23,46.078728131517465\r
2018-10-25,54.273562125967224\r
2018-10-30,40.65937806543117\r
2018-11-22,4.791036332900038\r
2018-11-29,4.791036332900038\r
2019-02-15,37.73099450699838\r
2019-02-17,37.73099450699838\r
2019-02-20,37.90523918100446\r
2019-02-22,37.90523918100446\r
2019-02-25,32.66524906812742\r
2019-02-27,32.66524906812742\r
2019-03-12,21.532273397056468\r
2019-03-22,39.13908192614354\r
2019-03-24,39.13908192614354\r
2019-03-27,40.62519861527872\r
2019-03-29,42.508484614242334\r
2019-04-01,42.508484614242334\r
2019-05-01,82.4074408665104\r
2019-05-06,87.45168653882799\r
2019-05-13,87.45168653882799\r
2019-05-16,86.46070053069923\r
2019-05-23,98.74534890373906\r
2019-05-31,100.0\r
2019-06-02,94.0667932804381\r
2019-06-30,90.0727324074546\r
2019-07-02,90.0727324074546\r
2019-07-05,88.95146319664023\r
2019-07-07,88.95146319664023\r
2019-07-10,88.33851334015569\r
2019-07-15,89.71671117732942\r
2019-07-17,87.04709695883783\r
2019-07-20,87.17570246573904\r
2019-07-22,95.55858119112351\r
2019-07-25,82.79838840818562\r
2019-08-04,74.76322905237154\r
2019-08-09,73.63345090541978\r
2019-08-14,74.74653650564241\r
2019-08-16,74.74653650564241\r
2019-08-21,77.68631642686948\r
2019-08-24,74.46312052834536\r
2019-08-26,75.53361382493333\r
2019-08-29,70.32458088692388\r
2019-08-31,70.26033744422861\r
2019-09-03,60.581066857915886\r
2019-09-13,61.448203056254926\r
2019-09-15,62.7559450410898\r
2019-09-18,62.7559450410898\r
2019-09-20,62.42739066342718\r
2019-10-13,78.76829472513693\r
2019-10-15,78.76829472513693\r
2019-10-25,78.76829472513693\r
2020-02-15,53.647594079031876\r
2020-02-20,59.72164081020055\r
2020-02-22,59.72164081020055\r
2020-03-26,91.4488357658918\r
2020-03-28,91.4488357658918\r
2020-03-31,72.84244194777105\r
2020-04-02,72.84244194777105\r
2020-04-05,71.32506587499712\r
2020-04-07,63.37113830003486\r
2020-04-10,64.7347823853689\r
2020-04-12,58.92740018359809\r
2020-04-15,63.491614827397534\r
2020-05-20,86.90026492021849\r
2020-05-22,86.90026492021849\r
2020-05-25,94.66561430476845\r
2020-05-27,94.66561430476845\r
2020-05-30,89.41758895709675\r
2020-06-01,89.41758895709675\r
2020-07-04,91.75219627899624\r
2020-07-09,98.82486460351429\r
2020-07-11,98.82486460351429\r
2020-07-14,96.37849298753997\r
2020-07-19,95.83139735577372\r
2020-07-21,93.2017704269854\r
2020-07-24,97.24216247847735\r
2020-07-29,95.22795950307074\r
2020-07-31,85.49493933277012\r
2020-08-05,95.36401086820716\r
2020-08-08,83.94229328140946\r
2020-08-10,85.64027906233892\r
2020-08-15,84.95129252266278\r
2020-08-20,84.95129252266278\r
2020-09-12,79.72055988514322\r
2020-09-14,79.72055988514322\r
2020-09-17,79.73794021920759\r
2020-11-06,52.69034177432425\r
2020-11-08,52.69034177432425\r
2020-11-11,55.13826476033018\r
2020-11-18,55.13826476033018\r
2020-11-21,47.459657708855055\r
2020-11-23,49.443827050627746\r
2020-11-28,34.16667257154199\r
2021-02-24,80.48754279804253\r
2021-02-26,79.14834021473101\r
2021-03-01,81.82319223542794\r
2021-03-06,81.82319223542794\r
2021-03-26,47.133903157023475\r
2021-03-28,47.133903157023475\r
2021-03-31,32.84438663074419\r
2021-04-02,32.9242005116498\r
2021-04-05,31.925437787369937\r
2021-04-07,24.722351871631908\r
2021-04-15,26.583368657090954\r
2021-04-17,26.55718220375574\r
2021-04-22,26.55718220375574\r
2021-07-19,78.23472054001482\r
2021-07-21,78.23472054001482\r
2021-07-29,80.26045507148226\r
2021-09-22,48.06475019786697\r
2021-09-24,48.06475019786697\r
2021-09-27,48.06475019786697\r
2021-10-02,48.06475019786697\r
2021-10-27,32.20039173537027\r
2021-11-06,27.80549884343794\r
2022-01-25,60.01210958175268\r
2022-01-27,50.40290605375323\r
2022-01-30,50.40290605375323\r
2022-02-09,47.74899833175653\r
2022-02-11,47.74899833175653\r
2022-02-19,47.74899833175653\r
2022-03-26,55.13826476033018\r
2022-04-10,72.80959938681929\r
2022-04-15,79.4774844793898\r
2022-04-17,79.4774844793898\r
2022-06-19,64.06583852242449\r
2022-06-21,64.06583852242449\r
2022-06-29,61.256475467051885\r
2022-07-01,58.45405084055165\r
2022-07-04,58.45405084055165\r
2022-07-06,58.45405084055165\r
2022-07-14,55.941928275034826\r
2022-07-16,55.941928275034826\r
2022-07-19,58.33965964194719\r
2022-07-21,58.33965964194719\r
2022-07-24,55.42840477002869\r
2022-07-26,57.897719302095155\r
2022-07-31,53.647594079031876\r
2022-08-03,54.46497822164722\r
2022-08-08,50.87366729533114\r
2022-08-10,50.87366729533114\r
2022-08-13,46.573415998149024\r
2022-09-12,48.91740861377355\r
2022-09-19,48.91740861377355\r
2022-09-22,50.93926785208653\r
2022-10-22,54.57454854845193\r
2022-10-24,50.690267508415666\r
2022-11-11,56.68269471117151\r
2022-11-13,56.68269471117151\r
2023-02-14,59.04251206143882\r
2023-02-16,59.04251206143882\r
2023-03-06,53.36333778180572\r
2023-03-13,53.36333778180572\r
2023-03-16,53.36333778180572\r
2023-06-14,79.8074853038864\r
2023-06-16,79.8074853038864\r
2023-06-24,83.2083470181574\r
2023-06-26,80.87276169092236\r
2023-07-04,77.51543574887523\r
2023-07-09,81.20637895325406\r
`;export{r as default};
