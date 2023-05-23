const r=`date,value\r
2017-01-26,23.937119371221268\r
2017-02-15,28.352894983194528\r
2017-02-18,26.363314129001587\r
2017-02-25,29.094565820003687\r
2017-03-10,28.537403031320224\r
2017-03-30,22.933629786061577\r
2017-04-09,42.05808658333826\r
2017-04-19,35.583954966238544\r
2017-05-09,46.91631887330306\r
2017-05-16,52.29463743148857\r
2017-05-26,49.813293290557695\r
2017-06-18,55.87122986930599\r
2017-07-05,56.39195897860378\r
2017-07-18,58.765535182322914\r
2017-08-02,51.294766119369974\r
2017-08-04,65.33760407545678\r
2017-08-12,48.59553342033249\r
2017-08-14,59.83637543006809\r
2017-08-22,42.509187692409576\r
2017-08-24,51.294766119369974\r
2017-09-26,40.71941103923379\r
2017-10-08,45.97019824121268\r
2017-10-11,42.509187692409576\r
2017-10-13,39.185344746941226\r
2017-10-16,38.96862867570771\r
2017-10-23,39.839146987454505\r
2017-10-26,36.62493125046565\r
2017-11-07,39.40266979273006\r
2017-11-17,42.28333234159261\r
2017-11-20,40.058299225833906\r
2017-11-22,39.185344746941226\r
2017-11-27,36.62493125046565\r
2017-11-30,39.620603857974146\r
2017-12-05,40.71941103923379\r
2018-02-15,75.25270042712191\r
2018-03-02,83.63225794213962\r
2018-03-22,22.440048429926957\r
2018-03-30,78.30399119650285\r
2018-04-06,72.85589859805818\r
2018-04-19,82.99617862021974\r
2018-04-21,96.52792801372033\r
2018-05-06,92.46026469139278\r
2018-05-11,98.595038712391\r
2018-05-21,100.0\r
2018-06-20,92.46026469139278\r
2018-06-23,100.0\r
2018-06-25,94.14434175994334\r
2018-07-08,86.84956913749774\r
2018-07-10,100.0\r
2018-07-13,96.18556691402873\r
2018-07-15,88.80949642452919\r
2018-07-23,81.73140089563397\r
2018-07-25,74.95095051244604\r
2018-08-02,73.75009314479144\r
2018-08-04,60.37546993077579\r
2018-08-12,54.580114000898114\r
2018-08-19,49.32435684642812\r
2018-08-22,40.49843120735354\r
2018-08-27,30.415844408562698\r
2018-09-01,28.908238397536067\r
2018-09-03,25.13538494269647\r
2018-09-08,32.94856028315189\r
2018-09-11,30.607025770043546\r
2018-09-16,24.962388452598496\r
2018-09-23,25.13538494269647\r
2018-09-26,25.658006918785915\r
2018-09-28,32.75009195290972\r
2018-10-03,28.16899328853479\r
2018-10-06,29.281499804694256\r
2018-10-23,23.600203507438437\r
2019-01-16,38.75252153401012\r
2019-02-03,47.154375023097266\r
2019-02-13,35.99852057426987\r
2019-02-15,45.50079972492096\r
2019-02-20,42.9627273447877\r
2019-02-23,44.569324622033605\r
2019-02-25,46.91631887330306\r
2019-02-28,49.813293290557695\r
2019-03-12,37.681118184432286\r
2019-03-20,43.418705885484634\r
2019-03-22,39.839146987454505\r
2019-03-25,15.281485477498515\r
2019-03-27,43.418705885484634\r
2019-03-30,39.839146987454505\r
2019-05-06,57.704491305233475\r
2019-05-14,65.05672018512642\r
2019-06-08,73.15334937252199\r
2019-06-13,73.75009314479144\r
2019-06-18,17.94899159855616\r
2019-06-23,78.30399119650285\r
2019-06-28,82.67906162127106\r
2019-07-05,71.67223546571493\r
2019-07-10,68.18017140562198\r
2019-07-15,80.16426536316928\r
2019-07-25,54.32372599172155\r
2019-08-04,57.17764226301137\r
2019-08-14,58.49935589588241\r
2019-08-17,52.043752718804946\r
2019-08-22,52.043752718804946\r
2019-08-24,56.39195897860378\r
2019-09-03,55.87122986930599\r
2019-09-11,47.154375023097266\r
2019-09-13,47.63231880147155\r
2019-09-16,48.837863784124316\r
2019-09-18,50.55128000011015\r
2019-10-08,45.97019824121268\r
2019-10-11,41.386006429365516\r
2019-10-13,42.9627273447877\r
2019-12-05,90.12842726699478\r
2020-01-16,85.23322209517869\r
2020-01-19,87.17468483233694\r
2020-01-31,90.7915872108474\r
2020-02-05,81.73140089563397\r
2020-02-15,74.64981485987147\r
2020-02-20,79.85268282283221\r
2020-03-11,82.67906162127106\r
2020-03-21,89.46773041874539\r
2020-03-24,90.7915872108474\r
2020-03-26,80.78927491460622\r
2020-04-03,99.28900739401007\r
2020-04-05,80.16426536316928\r
2020-04-08,95.16218134630047\r
2020-04-10,86.52506891245439\r
2020-05-18,98.24897915304959\r
2020-05-20,96.87090545066374\r
2020-05-28,96.18556691402873\r
2020-05-30,98.24897915304959\r
2020-06-24,83.95122032771539\r
2020-07-07,100.0\r
2020-07-09,88.80949642452919\r
2020-07-19,71.37785450643072\r
2020-07-22,70.49839466707466\r
2020-07-24,53.558231602928764\r
2020-07-27,57.704491305233475\r
2020-08-06,37.894181357970595\r
2020-08-08,46.20581288694838\r
2020-08-31,41.386006429365516\r
2020-09-02,38.32213385854343\r
2020-09-05,2.385243758890396\r
2020-09-12,36.62493125046565\r
2020-09-30,41.60942367079504\r
2020-11-14,45.26701577087549\r
2020-11-21,47.39304165212445\r
2020-11-26,43.19041173260158\r
2020-11-29,40.71941103923379\r
2021-02-14,92.12529734739854\r
2021-02-19,78.92162376016894\r
2021-02-24,92.79584801901086\r
2021-02-27,93.13204736000257\r
2021-03-01,79.85268282283221\r
2021-03-04,87.50041602762842\r
2021-03-21,78.30399119650285\r
2021-03-24,81.73140089563397\r
2021-03-29,83.63225794213962\r
2021-03-31,95.16218134630047\r
2021-04-08,94.48300545089687\r
2021-04-15,100.0\r
2021-04-23,99.28900739401007\r
2021-05-20,74.04938620910451\r
2021-05-30,81.73140089563397\r
2021-06-09,77.68881711505024\r
2021-06-14,96.87090545066374\r
2021-07-02,83.63225794213962\r
2021-07-22,71.96723032093857\r
2021-08-11,63.66149658556905\r
2021-08-26,41.83345037424381\r
2021-08-28,31.377821441992914\r
2021-08-31,37.681118184432286\r
2021-09-05,30.22526996851827\r
2021-09-12,37.681118184432286\r
2021-09-17,35.37758447437291\r
2021-09-22,32.94856028315189\r
2021-09-27,36.41551932753923\r
2021-09-30,34.15213091416283\r
2021-10-07,40.058299225833906\r
2021-10-12,39.839146987454505\r
2021-10-27,30.415844408562698\r
2021-11-09,39.839146987454505\r
2021-11-19,39.620603857974146\r
2022-01-13,56.91513583522874\r
2022-01-15,55.87122986930599\r
2022-01-23,75.85804317431803\r
2022-01-25,60.37546993077579\r
2022-02-09,65.90121130867193\r
2022-02-22,82.99617862021974\r
2022-03-09,71.67223546571493\r
2022-03-21,81.73140089563397\r
2022-03-24,73.15334937252199\r
2022-04-05,89.46773041874539\r
2022-04-10,93.8062942008478\r
2022-05-08,98.24897915304959\r
2022-05-10,100.0\r
2022-05-15,77.38215192441929\r
2022-05-28,89.46773041874539\r
2022-06-17,79.85268282283221\r
2022-07-02,69.62445867465516\r
2022-07-12,77.0761012573375\r
2022-07-14,66.4672713791938\r
2022-07-17,65.33760407545678\r
2022-08-01,40.71941103923379\r
2022-08-03,29.469040403395212\r
2022-08-11,17.083138838135227\r
2022-08-28,7.987053611421093\r
2022-09-05,4.439910861070699\r
2022-09-10,4.8825533917332224\r
2022-09-15,4.3682082700614115\r
2022-09-20,6.082502808913078\r
2022-09-22,4.732637998914624\r
2022-10-02,5.425921053798859\r
2022-10-05,4.439910861070699\r
2022-10-07,5.586505398345658\r
2022-10-15,6.082502808913078\r
2022-10-17,5.91479537218105\r
2022-10-30,6.082502808913078\r
2022-11-06,8.781705457209624\r
2022-11-11,10.822205943219517\r
2022-11-16,11.395072874694048\r
2023-01-18,44.569324622033605\r
2023-02-02,53.30428989102369\r
2023-02-04,48.3538137808152\r
2023-02-09,42.05808658333826\r
2023-02-12,52.29463743148857\r
2023-02-14,57.17764226301137\r
2023-02-17,55.35294820464814\r
2023-02-24,51.54381710207072\r
2023-03-09,59.03232674203011\r
2023-03-16,69.62445867465516\r
2023-04-05,70.49839466707466\r
2023-04-08,62.55635059917368\r
2023-04-18,67.60675114970626\r
2023-04-20,69.91515696793937\r
`;export{r as default};
