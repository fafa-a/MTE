const n=`date,value\r
2017-02-19,13.458054737180078\r
2017-03-11,57.54273621254685\r
2017-03-21,29.2198856053265\r
2017-04-20,84.86945308276232\r
2017-05-30,73.61839058952546\r
2017-06-19,92.27898855345722\r
2017-07-04,54.54992590974245\r
2017-07-14,67.61872829929085\r
2017-08-03,48.22911023777058\r
2017-08-18,66.31782502095457\r
2017-08-23,53.37370534211359\r
2017-09-07,59.37417193870457\r
2017-09-17,65.02872006186053\r
2017-09-22,54.54992590974245\r
2017-10-07,90.02576133249266\r
2017-10-17,21.77646163093161\r
2017-10-27,27.47787328176611\r
2017-11-11,51.0571946447361\r
2017-11-16,49.9169400952864\r
2018-02-14,7.729007614044191\r
2018-03-16,32.85327147710914\r
2018-04-20,72.9400208352934\r
2018-04-25,83.42230932419598\r
2018-05-25,2.443124733578054\r
2018-06-09,8.210856912514245\r
2018-06-14,10.546328101027946\r
2018-06-19,2.3061805591309867\r
2018-06-29,1.047051412829137\r
2019-02-14,2.443124733578054\r
2019-02-19,1.142461713127984\r
2019-03-01,2.7280344178187415\r
2019-03-11,56.33666415059436\r
2019-03-21,58.760719129049654\r
2019-03-31,44.39640905681118\r
2019-04-05,64.38859678878495\r
2019-04-20,28.342635144214317\r
2019-04-30,65.02872006186053\r
2019-05-10,100.0\r
2019-05-15,87.79854319895549\r
2019-05-30,81.98678419628325\r
2019-06-04,59.37417193870457\r
2019-06-19,91.52502558007119\r
2019-06-24,77.054139112226\r
2019-06-29,61.85767748882213\r
2019-07-04,92.27898855345722\r
2019-07-14,64.38859678878495\r
2019-07-19,38.67388213403572\r
2019-07-24,51.0571946447361\r
2019-07-29,49.9169400952864\r
2019-08-03,32.85327147710914\r
2019-08-08,27.47787328176611\r
2019-08-18,21.392932555814273\r
2019-09-02,47.672523359392564\r
2019-09-07,40.7121724129007\r
2019-09-12,33.79259230934458\r
2019-09-17,41.22937004610482\r
2019-09-27,8.210856912514245\r
2019-10-07,17.03985936681942\r
2019-10-17,27.47787328176611\r
2019-11-06,26.204203423126422\r
2020-02-04,5.323925535621277\r
2020-02-14,25.370777493210774\r
2020-02-19,20.261449300329332\r
2020-02-24,27.050183653058834\r
2020-04-04,7.493187938661551\r
2020-04-09,24.549933034049552\r
2020-04-14,68.9314145769756\r
2020-04-24,33.32138762807728\r
2020-05-04,50.4855654285061\r
2020-05-14,89.28046324897748\r
2020-05-24,66.31782502095457\r
2020-06-03,55.142519830279966\r
2020-06-23,72.26458194090092\r
2020-07-03,68.9314145769756\r
2020-07-18,51.63182548276117\r
2020-07-23,65.02872006186053\r
2020-08-07,49.9169400952864\r
2020-08-12,77.054139112226\r
2020-08-17,60.60998993657437\r
2020-08-22,55.142519830279966\r
2020-08-27,29.663186093378325\r
2020-09-01,90.02576133249266\r
2020-09-06,31.467483571807236\r
2020-09-16,36.68451884412684\r
2020-10-11,72.26458194090092\r
2020-10-31,52.79008305507891\r
2020-11-05,28.779700900636325\r
2020-11-10,29.663186093378325\r
2021-02-08,3.6699977614862593\r
2021-02-23,15.037308756127343\r
2021-02-28,47.118951904867096\r
2021-03-05,22.55304903085555\r
2021-03-20,39.686922009571624\r
2021-03-30,37.67307392248881\r
2021-04-04,82.7030935911639\r
2021-04-09,68.27359951375949\r
2021-04-24,81.98678419628325\r
2021-06-13,94.558181892494\r
2021-07-23,44.39640905681118\r
2021-08-02,100.0\r
2021-08-12,52.20945569655302\r
2021-08-17,65.02872006186053\r
2021-08-27,32.38824678046184\r
2021-09-01,31.926316487193617\r
2021-09-06,54.54992590974245\r
2021-09-11,69.59217160153482\r
2021-09-21,89.28046324897748\r
2021-10-01,55.73809995886035\r
2021-10-06,46.020864710279135\r
2021-10-11,49.351320921674436\r
2021-10-16,44.9348677075014\r
2021-10-26,29.2198856053265\r
2021-11-05,44.9348677075014\r
2022-02-08,4.369725138850817\r
2022-02-13,9.474722988952331\r
2022-02-18,7.493187938661551\r
2022-02-23,8.210856912514245\r
2022-02-28,18.084803051153177\r
2022-03-25,53.37370534211359\r
2022-04-14,65.67179678699888\r
2022-05-14,96.86329900916336\r
2022-05-19,13.152029031513637\r
2022-05-29,86.32820211461126\r
2022-06-13,73.61839058952546\r
2022-06-18,83.42230932419598\r
2022-07-03,88.53805666601963\r
2022-07-08,84.86945308276232\r
2022-07-13,90.77394930928831\r
2022-07-18,65.02872006186053\r
2022-08-02,65.67179678699888\r
2022-08-07,100.0\r
2022-08-12,67.61872829929085\r
2022-08-22,95.32367591808246\r
2022-08-27,100.0\r
2022-09-01,37.177263386555396\r
2022-09-11,43.86098022342149\r
2022-09-16,59.37417193870457\r
2022-09-21,30.55912190243063\r
2022-09-26,17.73326544734734\r
2022-10-11,27.050183653058834\r
2022-10-26,22.94609991695648\r
2022-11-05,47.118951904867096\r
2022-11-10,41.74961253120483\r
2023-02-03,19.15870353742352\r
2023-02-08,7.968232917508747\r
2023-02-13,2.583747268027788\r
2023-02-18,5.525276500120462\r
2023-03-05,30.55912190243063\r
2023-03-15,33.32138762807728\r
2023-03-20,51.0571946447361\r
2023-03-25,63.751428922562084\r
2023-04-04,90.02576133249266\r
2023-04-09,74.29968938945689\r
2023-04-14,80.56289119566854\r
2023-04-24,89.28046324897748\r
2023-05-04,66.31782502095457\r
2023-05-24,89.28046324897748\r
2023-06-23,100.0\r
2023-06-28,68.27359951375949\r
2023-07-03,71.59207573062355\r
2023-07-08,73.61839058952546\r
2023-07-13,96.86329900916336\r
2023-07-23,67.61872829929085\r
2023-08-02,60.60998993657437\r
2023-08-07,56.33666415059436\r
2023-08-12,46.56839823076199\r
2023-08-22,34.744255689491204\r
2023-09-01,58.760719129049654\r
2023-09-06,46.56839823076199\r
2023-09-11,53.96032035605488\r
2023-09-26,39.178874442507194\r
2023-10-01,31.926316487193617\r
2023-10-06,42.79922186582456\r
2023-10-11,18.084803051153177\r
`;export{n as default};