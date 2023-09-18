const n=`date,value\r
2017-07-04,86.26787557059295\r
2017-07-06,86.26787557059295\r
2017-07-14,88.90345277598666\r
2017-09-07,100.0\r
2017-09-12,100.0\r
2017-09-17,100.0\r
2017-10-07,97.47228181414181\r
2017-10-09,97.24085137236578\r
2017-10-12,97.89064453570677\r
2017-10-14,97.9452971516078\r
2017-10-17,95.66197594881383\r
2017-10-19,96.35015927693657\r
2017-10-22,96.04391484302074\r
2017-10-24,93.74010564611771\r
2017-10-27,94.01949034352933\r
2018-06-19,64.80361410781342\r
2018-06-21,68.57533643314243\r
2018-06-24,68.57533643314243\r
2018-06-26,61.57591779938416\r
2018-06-29,77.0989342124291\r
2018-07-24,96.76095156857511\r
2018-07-26,96.39524723704228\r
2018-07-29,99.14336003599178\r
2018-07-31,99.14336003599178\r
2018-08-03,99.12499971705702\r
2018-08-05,95.20939325074572\r
2018-08-08,99.54783135000793\r
2018-08-28,100.0\r
2018-08-30,100.0\r
2018-09-02,100.0\r
2018-09-04,100.0\r
2018-09-07,100.0\r
2018-09-27,100.0\r
2018-09-29,100.0\r
2018-10-02,100.0\r
2018-10-04,100.0\r
2018-10-07,100.0\r
2019-05-15,20.558801917007568\r
2019-05-30,26.958495968865435\r
2019-06-01,16.382583830776394\r
2019-06-04,21.73169619019922\r
2019-06-14,20.194280328370482\r
2019-07-14,66.34809090698113\r
2019-07-16,67.04112791719724\r
2019-07-19,66.37301822616676\r
2019-07-21,66.45852828437867\r
2019-07-24,67.40374036006132\r
2019-07-26,69.00155484875366\r
2019-07-29,71.10940280647092\r
2019-07-31,72.89039457252584\r
2019-08-03,74.4424836977923\r
2019-08-05,74.4769543277819\r
2019-08-08,76.62999387208347\r
2019-08-10,76.90332250422458\r
2019-08-15,78.18832415470446\r
2019-08-18,78.457234813154\r
2019-09-12,86.8492277262119\r
2019-09-14,86.8492277262119\r
2019-09-17,87.57302815454707\r
2019-09-19,87.86191169464715\r
2019-09-22,87.86191169464715\r
2019-09-27,87.48817689107995\r
2019-09-29,88.56110841561325\r
2019-10-02,88.50128401636292\r
2020-02-24,50.37472963924451\r
2020-03-07,46.72551113529422\r
2020-03-10,46.72551113529422\r
2020-04-09,33.551939041354636\r
2020-04-11,33.551939041354636\r
2020-04-14,32.4440267528629\r
2020-04-16,32.4440267528629\r
2020-04-24,31.572790338773437\r
2020-04-29,31.122924706948346\r
2020-05-24,52.10730740831204\r
2020-05-26,51.56511997533568\r
2020-05-29,51.56511997533568\r
2020-05-31,51.56511997533568\r
2020-06-03,51.650170240689064\r
2020-06-05,51.650170240689064\r
2020-06-23,72.43406409697639\r
2020-06-25,72.43406409697639\r
2020-06-28,72.43406409697639\r
2020-06-30,72.43406409697639\r
2020-07-03,72.4453561699447\r
2020-07-05,72.4453561699447\r
2020-07-08,75.56601899680243\r
2020-07-23,91.40613674579967\r
2020-07-25,91.38869613273862\r
2020-07-28,91.38869613273862\r
2020-07-30,91.38869613273862\r
2020-08-02,91.38869613273862\r
2020-08-04,91.38869613273862\r
2020-08-07,92.36422553728441\r
2020-08-09,90.48901471696492\r
2020-08-12,91.01423185906815\r
2020-08-14,91.01423185906815\r
2020-08-19,91.01423185906815\r
2020-08-22,90.45002576846728\r
2020-08-27,90.50201339470195\r
2020-09-01,91.98723629152543\r
2020-09-03,91.98723629152543\r
2020-09-06,91.12298751087232\r
2020-09-08,90.72317162453753\r
2020-09-11,90.72317162453753\r
2020-09-13,92.72018900202991\r
2020-09-16,91.04032572455029\r
2021-02-23,1.0580144560410807\r
2021-02-25,1.0580144560410807\r
2021-02-28,1.0442959985731948\r
2021-03-02,1.0660910090318558\r
2021-03-05,2.380185356436303\r
2021-03-07,3.1269013893435034\r
2021-03-25,1.3907497432731621\r
2021-03-27,1.3907497432731621\r
2021-03-30,1.080779528322582\r
2021-04-01,5.3910250201026075\r
2021-04-04,3.452720818493245\r
2021-04-06,5.474409253006458\r
2021-04-09,7.509958914366814\r
2021-04-14,12.42365969971221\r
2021-04-16,12.7446630191449\r
2021-04-19,11.987985351110895\r
2021-04-24,11.181668766407688\r
2021-06-13,41.600547253516766\r
2021-06-15,41.600547253516766\r
2021-06-18,41.600547253516766\r
2021-07-23,76.43124185709293\r
2021-08-17,86.31832992743328\r
2021-08-19,86.31832992743328\r
2021-08-24,86.24265538816202\r
2021-08-27,87.59000465009211\r
2021-08-29,86.67203302171586\r
2021-09-01,90.5583546443043\r
2021-09-06,90.5583546443043\r
2021-10-16,88.64233957038891\r
2021-10-18,89.50886987824288\r
2021-10-21,88.80066175102486\r
2021-10-23,89.1006791748473\r
2021-10-26,87.47545368809104\r
2021-10-28,88.27503747715924\r
2021-10-31,88.27503747715924\r
2021-11-02,87.22123532487682\r
2021-11-05,87.22546846366885\r
2022-02-18,35.44708567832286\r
2022-02-20,34.014308767723115\r
2022-02-23,30.441620538006863\r
2022-02-25,30.41117498146127\r
2022-02-28,16.88875905263229\r
2022-04-19,21.07022043013551\r
2022-04-29,25.425734899133857\r
2022-06-18,57.598022317130635\r
2022-06-20,57.598022317130635\r
2022-06-23,57.598022317130635\r
2022-06-25,56.719921969559614\r
2022-07-08,61.13538128179087\r
2022-07-10,61.13538128179087\r
2022-07-13,61.13538128179087\r
2022-07-15,61.00023383723885\r
2022-07-18,63.29589571274599\r
2022-08-02,63.40309326344574\r
2022-08-04,63.40309326344574\r
2022-08-07,63.40309326344574\r
2022-08-09,63.40309326344574\r
2022-08-12,65.7622319441843\r
2022-08-22,69.07823244897678\r
2022-09-11,71.47083754573782\r
2022-09-13,71.46710550092533\r
2022-09-16,72.6412623599564\r
2022-09-18,72.6412623599564\r
2022-09-21,72.6412623599564\r
2022-10-11,78.40578027377364\r
2022-10-16,78.35039156613774\r
2022-10-18,79.80255780420609\r
2022-10-31,77.00500137061806\r
2022-11-05,77.00500137061806\r
2023-04-24,3.1418814685145366\r
2023-04-26,3.0001356063058195\r
2023-06-23,69.24638115642503\r
2023-06-25,69.24638115642503\r
2023-06-28,70.54535956515018\r
2023-07-03,77.4753901499559\r
2023-07-08,77.4753901499559\r
2023-07-10,77.4753901499559\r
2023-07-13,78.4928696936052\r
2023-08-07,97.58585521581303\r
2023-08-09,97.58585521581303\r
2023-08-12,97.60403472283194\r
2023-08-14,97.01882426703557\r
2023-08-22,93.99729774219712\r
2023-08-24,93.81101067824515\r
2023-08-27,93.81101067824515\r
2023-08-29,93.81101067824515\r
2023-09-01,95.53637147352488\r
2023-09-06,97.4404962495955\r
2023-09-08,97.4404962495955\r
2023-09-11,98.10025101378714\r
`;export{n as default};
