const r=`date,value\r
2017-05-06,18.377689294659845\r
2017-05-13,18.377689294659845\r
2017-05-16,16.155826740587155\r
2017-06-15,4.6134166907889185\r
2017-06-22,3.165673513919514\r
2017-06-25,11.287421617309434\r
2017-07-02,22.65322899473898\r
2017-07-05,11.287421617309434\r
2017-07-07,11.287421617309434\r
2017-07-12,28.890846171138346\r
2017-07-17,12.183905445130547\r
2017-07-22,26.014423840223657\r
2017-07-25,57.04644550405826\r
2017-07-27,44.89100897502561\r
2017-07-30,44.89100897502561\r
2017-08-04,45.84236345150369\r
2017-08-11,69.62873934420138\r
2017-08-14,50.76636615670751\r
2017-08-16,70.8420257240619\r
2017-08-19,70.8420257240619\r
2017-08-21,48.76321554113028\r
2017-08-24,1.849467002717015\r
2017-08-26,1.142730916147623\r
2017-08-29,1.142730916147623\r
2017-09-05,26.014423840223657\r
2017-09-08,26.71781248245638\r
2017-09-10,26.71781248245638\r
2017-09-13,18.377689294659845\r
2017-09-20,86.31837425721422\r
2017-09-23,86.31837425721422\r
2017-09-28,89.06387266607797\r
2017-10-03,55.97142975139086\r
2017-10-05,57.04644550405826\r
2017-10-08,35.98286616460784\r
2017-10-10,13.600509862772894\r
2017-10-13,16.696380710978115\r
2017-10-15,13.600509862772894\r
2017-10-18,15.104322152500282\r
2017-10-20,7.717957831463221\r
2017-10-23,21.38082933030098\r
2017-10-25,43.0215370072097\r
2017-10-28,49.75918216060321\r
2017-10-30,49.75918216060321\r
2017-11-07,43.0215370072097\r
2017-11-12,39.41479374574005\r
2018-05-11,35.98286616460784\r
2018-05-13,35.98286616460784\r
2018-05-21,35.98286616460784\r
2018-06-17,50.76636615670751\r
2018-06-22,50.76636615670751\r
2018-06-25,78.36767508896278\r
2018-06-27,73.30364171275482\r
2018-07-02,49.75918216060321\r
2018-07-07,86.31837425721422\r
2018-07-10,2.5535913743315404\r
2018-08-16,1.402849644514398\r
2018-08-19,1.402849644514398\r
2018-08-21,4.3510195173503625\r
2018-08-24,4.3510195173503625\r
2018-08-26,1.6929612505418257\r
2018-08-29,5.452291847286913\r
2018-08-31,5.452291847286913\r
2018-09-03,7.367409495986117\r
2018-09-05,7.367409495986117\r
2018-09-08,3.386055480793841\r
2018-09-10,3.386055480793841\r
2018-09-13,3.386055480793841\r
2018-09-18,31.158827485400515\r
2018-09-20,46.80483200907568\r
2018-09-23,30.392233360737492\r
2018-09-25,45.84236345150369\r
2018-09-28,34.33190159802723\r
2018-09-30,49.75918216060321\r
2018-10-03,41.196203734060596\r
2018-10-05,36.82455595412888\r
2018-10-10,18.95812765520912\r
2018-10-13,20.14921961060512\r
2018-10-23,28.15599262315398\r
2018-10-25,48.76321554113028\r
2018-11-04,30.392233360737492\r
2018-11-14,75.81213206334337\r
2018-11-17,75.81213206334337\r
2018-11-22,75.81213206334337\r
2018-11-24,75.81213206334337\r
2018-11-27,59.230676408708916\r
2018-11-29,58.13285296467659\r
2018-12-09,2.365699784047848\r
2018-12-12,2.365699784047848\r
2018-12-17,2.365699784047848\r
2019-05-16,8.446371223754022\r
2019-05-23,14.593296787771212\r
2019-05-28,14.593296787771212\r
2019-05-31,10.853432926245004\r
2019-06-02,15.625152942939646\r
2019-06-12,14.092038840225928\r
2019-06-15,14.092038840225928\r
2019-06-17,17.246851614306905\r
2019-06-22,20.14921961060512\r
2019-06-25,19.54862613424059\r
2019-06-27,19.54862613424059\r
2019-06-30,19.54862613424059\r
2019-07-05,27.43165835701275\r
2019-07-07,12.64648276421894\r
2019-07-10,26.71781248245638\r
2019-07-12,33.52256965807908\r
2019-07-15,36.82455595412888\r
2019-07-20,35.98286616460784\r
2019-07-22,43.0215370072097\r
2019-07-25,49.75918216060321\r
2019-08-01,64.89187261488459\r
2019-08-04,64.89187261488459\r
2019-08-06,54.90778127862443\r
2019-08-09,58.13285296467659\r
2019-08-14,66.05869347190661\r
2019-08-16,70.8420257240619\r
2019-08-21,58.13285296467659\r
2019-08-24,72.06698564566855\r
2019-08-26,50.76636615670751\r
2019-08-29,57.04644550405826\r
2019-08-31,41.196203734060596\r
2019-09-03,20.14921961060512\r
2019-09-05,20.14921961060512\r
2019-09-08,11.730898673321413\r
2019-09-13,8.446371223754022\r
2019-09-15,1.0237061383764483\r
2019-09-18,1.402849644514398\r
2019-09-20,1.269083002421826\r
2019-09-28,24.638892237191175\r
2019-09-30,28.890846171138346\r
2019-10-03,27.43165835701275\r
2019-10-05,31.936061867945604\r
2019-10-08,27.43165835701275\r
2019-10-10,31.158827485400515\r
2019-10-13,28.890846171138346\r
2019-10-15,35.15199086938859\r
2019-10-25,31.936061867945604\r
2019-10-30,44.89100897502561\r
2019-11-04,44.89100897502561\r
2019-11-09,26.014423840223657\r
2019-11-12,43.95074231103077\r
2019-11-17,17.807275815628167\r
2020-05-05,43.0215370072097\r
2020-05-07,46.80483200907568\r
2020-05-17,46.80483200907568\r
2020-05-20,42.10336642451799\r
2020-05-22,5.452291847286913\r
2020-05-25,2.365699784047848\r
2020-05-27,2.5535913743315404\r
2020-05-30,2.5535913743315404\r
2020-06-21,2.5535913743315404\r
2020-06-24,6.3698249552378226\r
2020-06-26,6.3698249552378226\r
2020-07-01,6.3698249552378226\r
2020-07-04,6.3698249552378226\r
2020-07-06,6.3698249552378226\r
2020-07-09,45.84236345150369\r
2020-07-11,45.84236345150369\r
2020-07-14,45.84236345150369\r
2020-07-16,45.84236345150369\r
2020-07-19,55.97142975139086\r
2020-07-21,78.36767508896278\r
2020-07-24,78.36767508896278\r
2020-07-26,60.33993996124442\r
2020-07-31,77.08401092432149\r
2020-08-03,77.08401092432149\r
2020-08-05,78.36767508896278\r
2020-08-08,59.230676408708916\r
2020-08-10,62.592883153240265\r
2020-08-13,80.97044714367073\r
2020-08-15,80.97044714367073\r
2020-08-20,63.73661031023353\r
2020-08-23,45.84236345150369\r
2020-08-25,51.784792922497914\r
2020-08-30,51.784792922497914\r
2020-09-02,51.784792922497914\r
2020-09-04,31.936061867945604\r
2020-09-07,40.300021913893545\r
2020-09-12,32.72396613100299\r
2020-09-14,17.807275815628167\r
2020-09-17,17.807275815628167\r
2020-09-19,17.807275815628167\r
2020-09-27,17.807275815628167\r
2020-09-29,26.014423840223657\r
2020-10-09,60.33993996124442\r
2020-10-12,26.014423840223657\r
2020-10-17,78.36767508896278\r
2020-10-19,78.36767508896278\r
2020-10-24,18.95812765520912\r
2020-10-27,18.95812765520912\r
2020-10-29,18.95812765520912\r
2020-11-01,28.890846171138346\r
2020-11-08,28.15599262315398\r
2020-11-11,23.304808678269147\r
2020-11-13,23.304808678269147\r
2020-11-16,23.304808678269147\r
2020-11-18,20.759942613446352\r
2020-11-21,20.759942613446352\r
2020-11-23,31.936061867945604\r
2020-11-26,20.14921961060512\r
2020-12-03,31.158827485400515\r
2021-04-15,23.304808678269147\r
2021-04-20,18.377689294659845\r
2021-04-22,18.377689294659845\r
2021-05-20,51.784792922497914\r
2021-05-22,51.784792922497914\r
2021-05-25,51.784792922497914\r
2021-05-27,51.784792922497914\r
2021-05-30,51.784792922497914\r
2021-06-14,1.269083002421826\r
2021-06-16,1.269083002421826\r
2021-06-19,1.269083002421826\r
2021-06-21,20.14921961060512\r
2021-06-24,20.14921961060512\r
2021-06-26,69.62873934420138\r
2021-06-29,66.05869347190661\r
2021-07-01,59.230676408708916\r
2021-07-09,39.41479374574005\r
2021-07-11,23.304808678269147\r
2021-07-14,28.15599262315398\r
2021-07-16,25.321460996501056\r
2021-07-19,47.77844073561252\r
2021-07-21,43.95074231103077\r
2021-07-24,73.30364171275482\r
2021-07-29,52.81448768401968\r
2021-08-10,78.36767508896278\r
2021-08-13,78.36767508896278\r
2021-08-15,37.677088490375006\r
2021-08-18,37.677088490375006\r
2021-08-20,18.377689294659845\r
2021-08-23,18.377689294659845\r
2021-08-25,2.5535913743315404\r
2021-08-28,2.365699784047848\r
2021-08-30,2.5535913743315404\r
2021-09-17,1.402849644514398\r
2021-09-19,1.402849644514398\r
2021-09-22,5.749326148297838\r
2021-09-27,5.749326148297838\r
2021-10-02,5.749326148297838\r
2021-10-07,13.600509862772894\r
2021-10-09,20.759942613446352\r
2021-10-12,18.95812765520912\r
2021-10-14,18.95812765520912\r
2021-10-17,22.65322899473898\r
2021-10-19,23.304808678269147\r
2021-10-22,48.76321554113028\r
2021-10-24,46.80483200907568\r
2021-10-27,43.0215370072097\r
2021-11-06,35.98286616460784\r
2021-11-13,16.696380710978115\r
2021-11-16,16.696380710978115\r
2022-05-10,2.9535118268279037\r
2022-05-12,100.0\r
2022-05-15,100.0\r
2022-05-17,100.0\r
2022-05-20,100.0\r
2022-05-22,100.0\r
2022-05-27,91.85728689405704\r
2022-05-30,91.85728689405704\r
2022-06-01,94.69878420721973\r
2022-06-04,89.06387266607797\r
2022-06-06,93.27201477728354\r
2022-06-09,90.45457980850507\r
2022-06-11,90.45457980850507\r
2022-06-14,83.62062267210915\r
2022-06-16,94.69878420721973\r
2022-06-19,79.663146540707\r
2022-06-26,67.23709614791643\r
2022-06-29,75.81213206334337\r
2022-07-01,100.0\r
2022-07-04,100.0\r
2022-07-09,86.31837425721422\r
2022-07-11,90.45457980850507\r
2022-07-14,67.23709614791643\r
2022-07-16,89.06387266607797\r
2022-07-19,79.663146540707\r
2022-07-21,86.31837425721422\r
2022-07-24,91.85728689405704\r
2022-07-26,90.45457980850507\r
2022-07-31,100.0\r
2022-08-03,93.27201477728354\r
2022-08-05,93.27201477728354\r
2022-08-08,93.27201477728354\r
2022-08-10,93.27201477728354\r
2022-08-13,80.97044714367073\r
2022-08-20,86.31837425721422\r
2022-08-23,86.31837425721422\r
2022-08-25,86.31837425721422\r
2022-08-28,96.13761582862763\r
2022-08-30,96.13761582862763\r
2022-09-04,86.31837425721422\r
2022-09-19,84.96354074260147\r
2022-09-22,84.96354074260147\r
2022-10-02,86.31837425721422\r
2022-10-04,87.68514450544674\r
2022-10-07,87.68514450544674\r
2022-10-09,87.68514450544674\r
2022-10-12,87.68514450544674\r
2022-10-14,94.69878420721973\r
2022-11-01,62.592883153240265\r
2022-11-06,66.05869347190661\r
2022-11-08,63.73661031023353\r
2022-11-11,63.73661031023353\r
2022-11-13,51.784792922497914\r
2022-11-16,44.89100897502561\r
2022-11-18,50.76636615670751\r
2022-11-26,40.300021913893545\r
2023-04-05,23.304808678269147\r
2023-04-07,35.98286616460784\r
2023-04-10,35.98286616460784\r
2023-04-12,35.98286616460784\r
2023-04-15,44.89100897502561\r
2023-04-17,73.30364171275482\r
2023-04-20,69.62873934420138\r
2023-04-27,83.62062267210915\r
2023-05-02,21.38082933030098\r
2023-05-05,21.38082933030098\r
2023-05-10,21.38082933030098\r
2023-06-16,25.321460996501056\r
2023-06-21,26.014423840223657\r
2023-06-24,14.092038840225928\r
2023-07-09,91.85728689405704\r
2023-07-11,91.85728689405704\r
2023-07-14,96.13761582862763\r
2023-07-16,96.13761582862763\r
2023-07-19,96.13761582862763\r
2023-07-24,69.62873934420138\r
2023-07-29,60.33993996124442\r
2023-07-31,75.81213206334337\r
2023-08-03,75.81213206334337\r
2023-08-05,75.81213206334337\r
2023-08-08,58.13285296467659\r
2023-08-10,66.05869347190661\r
2023-08-13,66.05869347190661\r
2023-08-15,61.46066759916112\r
2023-08-18,61.46066759916112\r
2023-08-20,68.42710377332737\r
2023-08-23,72.06698564566855\r
2023-08-25,79.663146540707\r
`;export{r as default};
