const n=`date,value\r
2017-02-15,80.29394731356503\r
2017-02-18,80.91783763782882\r
2017-02-25,74.78182920932049\r
2017-03-10,83.05613590371641\r
2017-03-17,92.5373482342515\r
2017-03-27,90.5496259830761\r
2017-03-30,91.87250652151502\r
2017-04-06,91.87250652151502\r
2017-04-09,87.67124811918178\r
2017-04-19,79.92070935939785\r
2017-04-29,84.70908939712291\r
2017-05-06,84.07151528507116\r
2017-05-09,99.17260133567507\r
2017-05-16,100.0\r
2017-05-19,100.0\r
2017-05-26,96.84596715639165\r
2017-06-05,91.34226558781096\r
2017-06-18,100.0\r
2017-06-25,100.0\r
2017-06-28,92.00529350591677\r
2017-07-05,90.28613882244824\r
2017-07-18,91.60720463964981\r
2017-08-02,74.06089624198803\r
2017-08-04,90.68150571397186\r
2017-08-07,80.16944329343761\r
2017-08-12,80.16944329343761\r
2017-08-14,79.05301951530664\r
2017-08-17,72.98569112769319\r
2017-08-22,71.44575070891337\r
2017-08-24,74.54115128804007\r
2017-08-27,70.38873899315779\r
2017-08-29,69.6882047453918\r
2017-09-01,64.99001851629488\r
2017-09-03,73.10479114000825\r
2017-09-06,66.69087797948544\r
2017-09-08,68.4125011827737\r
2017-10-08,65.78116715823226\r
2017-10-11,68.4125011827737\r
2017-10-13,67.03354244518022\r
2017-10-16,70.15485943514693\r
2017-10-18,66.80500719633022\r
2017-10-23,69.6882047453918\r
2017-10-26,67.8363214792344\r
2017-10-28,66.69087797948544\r
2017-10-31,67.03354244518022\r
2017-11-05,67.03354244518022\r
2017-11-07,70.62298660460071\r
2017-11-17,71.68165374178454\r
2017-11-20,71.68165374178454\r
2017-11-22,74.42094991491373\r
2017-11-25,74.42094991491373\r
2017-11-27,71.56365625996916\r
2017-11-30,75.3851288262677\r
2017-12-05,68.87510379762676\r
2017-12-07,68.87510379762676\r
2017-12-25,78.80593093649236\r
2017-12-27,78.80593093649236\r
2018-01-09,80.66800749410123\r
2018-01-11,80.66800749410123\r
2018-01-19,80.66800749410123\r
2018-01-24,85.7339444556917\r
2018-01-29,85.7339444556917\r
2018-01-31,85.7339444556917\r
2018-02-10,80.54322942157782\r
2018-02-15,80.54322942157782\r
2018-02-25,81.54401096562596\r
2018-03-02,81.54401096562596\r
2018-03-07,93.87383011301051\r
2018-03-15,92.00529350591677\r
2018-03-17,92.00529350591677\r
2018-03-22,98.21141246070192\r
2018-03-30,97.39106045223161\r
2018-04-19,79.17670096215765\r
2018-04-21,96.84596715639165\r
2018-04-24,96.84596715639165\r
2018-04-26,96.84596715639165\r
2018-05-06,76.35517472732155\r
2018-05-11,100.0\r
2018-05-21,100.0\r
2018-05-24,78.68252382005896\r
2018-06-20,93.20445639243037\r
2018-06-23,99.4480396914382\r
2018-06-25,94.54546851662381\r
2018-07-08,98.48558612799751\r
2018-07-10,91.87250652151502\r
2018-07-13,89.62900967945484\r
2018-07-15,94.81475779303443\r
2018-07-18,87.93110151997733\r
2018-07-23,85.22078841586975\r
2018-07-25,84.32627158949522\r
2018-07-30,83.18273923688592\r
2018-08-02,83.56309630709839\r
2018-08-04,80.79287690207279\r
2018-08-12,70.85760220314377\r
2018-08-19,71.44575070891337\r
2018-08-22,63.97948153018138\r
2018-08-27,63.19868749879931\r
2018-09-01,54.805931269185635\r
2018-09-03,50.82207512993252\r
2018-09-08,55.5360156709273\r
2018-09-11,57.86028364827786\r
2018-09-16,55.955257456846\r
2018-09-18,55.955257456846\r
2018-09-23,50.92244838136581\r
2018-09-26,57.647125122988186\r
2018-09-28,64.99001851629488\r
2018-10-03,59.903832072011966\r
2018-10-06,60.44717986053049\r
2018-10-13,62.86544960087712\r
2018-10-16,59.47082458315302\r
2018-10-23,59.47082458315302\r
2018-11-15,63.19868749879931\r
2018-11-17,70.74024840962548\r
2018-11-22,62.42242855587411\r
2018-11-27,63.309951915476105\r
2018-12-07,64.09139356960593\r
2019-01-09,66.91922868774557\r
2019-01-11,66.91922868774557\r
2019-01-16,79.92070935939785\r
2019-01-19,75.26428552759046\r
2019-01-24,75.26428552759046\r
2019-01-26,89.49785626702845\r
2019-02-03,95.08440922269007\r
2019-02-13,93.87383011301051\r
2019-02-15,82.6768730804005\r
2019-02-18,82.6768730804005\r
2019-02-20,74.66144438885026\r
2019-02-23,75.14353390856711\r
2019-02-25,73.82131924589794\r
2019-02-28,73.82131924589794\r
2019-03-12,79.79647946088912\r
2019-03-20,68.87510379762676\r
2019-03-22,80.66800749410123\r
2019-03-25,78.92942950416439\r
2019-03-27,83.94427382548335\r
2019-03-30,81.54401096562596\r
2019-04-01,81.54401096562596\r
2019-04-09,86.7646257023862\r
2019-05-01,78.92942950416439\r
2019-05-06,78.92942950416439\r
2019-05-09,78.92942950416439\r
2019-05-11,89.23582191602965\r
2019-05-14,86.89387032373222\r
2019-05-16,86.89387032373222\r
2019-05-29,86.7646257023862\r
2019-05-31,77.0865569167268\r
2019-06-08,77.0865569167268\r
2019-06-13,77.0865569167268\r
2019-06-18,100.0\r
2019-06-23,100.0\r
2019-06-25,100.0\r
2019-06-28,100.0\r
2019-07-05,90.81347620236548\r
2019-07-08,85.09272704688738\r
2019-07-10,90.02301477788264\r
2019-07-13,89.23582191602965\r
2019-07-15,91.47468975641596\r
2019-07-20,91.47468975641596\r
2019-07-23,91.47468975641596\r
2019-07-25,88.7128433118502\r
2019-07-28,85.22078841586975\r
2019-08-02,83.18273923688592\r
2019-08-04,85.60551887598552\r
2019-08-09,82.80320281792878\r
2019-08-14,83.18273923688592\r
2019-08-17,85.3489408486612\r
2019-08-22,80.66800749410123\r
2019-08-24,83.30943375352379\r
2019-08-29,83.30943375352379\r
2019-09-03,80.29394731356503\r
2019-09-06,80.29394731356503\r
2019-09-08,88.06116458792933\r
2019-09-11,80.41854269217323\r
2019-09-13,81.41859370566326\r
2019-09-16,78.68252382005896\r
2019-09-18,79.17670096215765\r
2019-09-21,75.74820872047133\r
2019-09-26,75.74820872047133\r
2019-10-08,71.68165374178454\r
2019-10-11,74.18082238384514\r
2019-10-13,72.62894211937194\r
2019-10-26,81.29326773526934\r
2019-12-05,84.07151528507116\r
2019-12-07,84.07151528507116\r
2019-12-10,84.07151528507116\r
2019-12-15,70.85760220314377\r
2019-12-17,72.86668294806059\r
2019-12-20,72.86668294806059\r
2019-12-25,66.80500719633022\r
2019-12-27,67.03354244518022\r
2019-12-30,71.32793709684118\r
2020-01-06,85.99106871017362\r
2020-01-09,86.11976737016141\r
2020-01-11,81.29326773526934\r
2020-01-14,82.92962376155015\r
2020-01-16,79.17670096215765\r
2020-01-19,79.05301951530664\r
2020-01-29,71.79974314614348\r
2020-01-31,73.5821093537547\r
2020-02-03,78.80593093649236\r
2020-02-05,82.92962376155015\r
2020-02-10,82.92962376155015\r
2020-02-15,80.79287690207279\r
2020-02-18,79.05301951530664\r
2020-02-20,80.04503063948243\r
2020-02-23,81.16803306207365\r
2020-03-21,80.91783763782882\r
2020-03-24,82.04659274881487\r
2020-03-26,79.92070935939785\r
2020-03-31,85.60551887598552\r
2020-04-03,80.66800749410123\r
2020-04-05,84.19884787556904\r
2020-04-08,86.50640939251889\r
2020-04-10,85.47718433783866\r
2020-04-15,88.19131855786316\r
2020-04-25,88.7128433118502\r
2020-04-30,88.32156342249574\r
2020-05-08,89.36679367681309\r
2020-05-18,90.68150571397186\r
2020-05-20,91.47468975641596\r
2020-05-25,90.4178370168442\r
2020-05-28,93.07085348759826\r
2020-05-30,90.28613882244824\r
2020-06-12,95.35442274979899\r
2020-06-14,83.56309630709839\r
2020-06-19,60.229562351871465\r
2020-06-24,88.32156342249574\r
2020-07-04,88.32156342249574\r
2020-07-07,81.66951950753484\r
2020-07-09,93.3381499197468\r
2020-07-19,91.87250652151502\r
2020-07-22,91.87250652151502\r
2020-07-24,78.80593093649236\r
2020-07-27,74.42094991491373\r
2020-07-29,74.42094991491373\r
2020-08-03,74.42094991491373\r
2020-08-06,72.2730198249679\r
2020-08-08,75.14353390856711\r
2020-08-18,74.06089624198803\r
2020-08-21,74.06089624198803\r
2020-08-23,69.8047303437331\r
2020-09-02,60.88352812416059\r
2020-09-05,68.75931493998078\r
2020-09-07,66.57684104577098\r
2020-09-10,69.45542974695516\r
2020-09-12,66.91922868774557\r
2020-09-17,66.91922868774557\r
2020-09-30,67.49171996438305\r
2020-10-12,67.49171996438305\r
2020-10-17,79.42433813197579\r
2020-10-30,86.6354720561976\r
2020-11-09,82.80320281792878\r
2020-11-11,83.69006432899859\r
2020-11-14,77.94400203339724\r
2020-11-21,76.11211344476678\r
2020-11-26,77.33108354993152\r
2020-11-29,76.59860244232698\r
2020-12-26,66.12161631371026\r
2021-01-03,84.70908939712291\r
2021-01-08,84.70908939712291\r
2021-01-10,86.24855704213246\r
2021-01-15,77.4534841879883\r
2021-01-18,85.3489408486612\r
2021-02-17,93.3381499197468\r
2021-02-19,95.35442274979899\r
2021-02-24,93.3381499197468\r
2021-02-27,93.3381499197468\r
2021-03-01,80.16944329343761\r
2021-03-04,81.54401096562596\r
2021-03-09,82.42448725384989\r
2021-03-14,80.41854269217323\r
2021-03-21,82.2984311799576\r
2021-03-24,82.92962376155015\r
2021-03-29,80.41854269217323\r
2021-03-31,88.06116458792933\r
2021-04-03,84.19884787556904\r
2021-04-05,81.41859370566326\r
2021-04-08,81.41859370566326\r
2021-04-15,87.80112936129632\r
2021-04-20,86.37743771870878\r
2021-04-23,88.45189917455039\r
2021-05-03,84.32627158949522\r
2021-05-08,82.04659274881487\r
2021-06-09,77.94400203339724\r
2021-06-14,86.24855704213246\r
2021-06-22,85.99106871017362\r
2021-07-17,82.42448725384989\r
2021-07-19,82.42448725384989\r
2021-07-22,84.5813923577376\r
2021-08-11,87.28214996528662\r
2021-08-26,77.57597636320665\r
2021-08-28,77.57597636320665\r
2021-08-31,79.54829383945533\r
2021-09-05,76.84239652651308\r
2021-09-12,80.04503063948243\r
2021-09-17,79.67234095166853\r
2021-09-22,79.67234095166853\r
2021-09-25,70.15485943514693\r
2021-09-27,70.15485943514693\r
2021-09-30,70.50581679634897\r
2021-10-12,75.50606379661996\r
2021-10-15,81.29326773526934\r
2021-10-17,75.50606379661996\r
2021-10-20,75.50606379661996\r
2021-10-27,75.62709043067582\r
2021-11-19,72.7477666092408\r
2021-12-14,78.06686027886387\r
2021-12-16,88.19131855786316\r
2021-12-19,71.09258572258281\r
2021-12-21,77.20877445689054\r
2022-01-15,67.03354244518022\r
2022-01-23,80.54322942157782\r
2022-01-25,70.85760220314377\r
2022-02-09,75.9907202354623\r
2022-02-27,81.66951950753484\r
2022-03-01,81.66951950753484\r
2022-03-09,81.66951950753484\r
2022-03-19,75.62709043067582\r
2022-03-21,78.68252382005896\r
2022-03-24,74.18082238384514\r
2022-03-26,77.6985600677396\r
2022-04-05,84.70908939712291\r
2022-04-10,77.33108354993152\r
2022-05-08,79.05301951530664\r
2022-05-10,84.4537864193743\r
2022-05-15,84.4537864193743\r
2022-05-28,79.67234095166853\r
2022-05-30,87.54145780093558\r
2022-06-09,87.28214996528662\r
2022-06-17,78.55920816263972\r
2022-06-19,78.55920816263972\r
2022-06-22,78.55920816263972\r
2022-06-24,78.55920816263972\r
2022-07-02,87.0232059128897\r
2022-07-04,87.0232059128897\r
2022-07-07,87.93110151997733\r
2022-07-12,90.28613882244824\r
2022-07-14,90.81347620236548\r
2022-07-17,88.7128433118502\r
2022-07-24,87.0232059128897\r
2022-07-27,80.29394731356503\r
2022-08-01,74.66144438885026\r
2022-08-03,74.66144438885026\r
2022-08-06,70.97504797688404\r
2022-08-08,70.62298660460071\r
2022-08-11,71.44575070891337\r
2022-08-13,68.64361821267698\r
2022-08-18,62.31190480955758\r
2022-09-05,48.24527257352532\r
2022-09-10,48.24527257352532\r
2022-09-12,48.24527257352532\r
2022-09-15,51.022915276400724\r
2022-09-20,51.32487772304791\r
2022-09-22,50.12208523421155\r
2022-10-02,51.931329645501535\r
2022-10-05,49.22884685181393\r
2022-10-07,49.22884685181393\r
2022-10-12,55.745450193855284\r
2022-10-15,54.702006504780755\r
2022-10-17,59.25487795351299\r
2022-10-22,59.25487795351299\r
2022-10-30,66.34904406201473\r
2022-11-01,66.34904406201473\r
2022-11-06,74.06089624198803\r
2022-11-11,61.65070774309582\r
2022-11-16,70.38873899315779\r
2022-12-21,73.22398297688304\r
2022-12-24,73.22398297688304\r
2023-01-03,77.20877445689054\r
2023-01-10,77.20877445689054\r
2023-01-18,80.41854269217323\r
2023-01-20,80.41854269217323\r
2023-02-02,74.42094991491373\r
2023-02-04,82.42448725384989\r
2023-02-09,77.82123529374732\r
2023-02-12,80.04503063948243\r
2023-02-14,78.06686027886387\r
2023-02-17,79.05301951530664\r
2023-02-19,90.68150571397186\r
2023-02-24,82.6768730804005\r
2023-03-01,89.49785626702845\r
2023-03-09,93.73977416616471\r
2023-03-16,77.6985600677396\r
2023-04-05,82.04659274881487\r
2023-04-08,84.70908939712291\r
2023-04-10,84.70908939712291\r
`;export{n as default};
