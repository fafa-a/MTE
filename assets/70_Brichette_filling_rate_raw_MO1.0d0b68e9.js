const r=`date,value\r
2017-01-26,46.48231844885616\r
2017-02-25,48.379255052844336\r
2017-03-17,65.24495272391279\r
2017-03-27,73.0242042262188\r
2017-04-06,71.472922308154\r
2017-05-16,81.02285914855179\r
2017-05-26,81.02285914855179\r
2017-06-05,77.37353958840774\r
2017-06-25,79.5939797748124\r
2017-07-05,74.98603458664506\r
2017-08-04,32.63724830200662\r
2017-08-14,57.54386075897129\r
2017-08-19,50.15044839810589\r
2017-08-29,43.40266769168464\r
2017-10-08,41.90129156908604\r
2017-10-28,38.68865288384024\r
2017-11-07,30.68855482745343\r
2017-11-17,43.706020728103766\r
2017-11-22,41.604095634236295\r
2017-11-27,36.2914319597171\r
2018-02-10,70.70334561853893\r
2018-02-25,79.18799544269382\r
2018-03-22,100.0\r
2018-05-06,81.63901309700756\r
2018-05-11,96.65806089602536\r
2018-05-21,82.25743256440384\r
2018-06-20,88.99474256112718\r
2018-06-25,86.01549743714432\r
2018-07-10,97.77788629325319\r
2018-07-15,91.15290852941774\r
2018-07-25,68.79710161458434\r
2018-07-30,76.17524686843325\r
2018-08-04,71.472922308154\r
2018-08-19,60.88878974995692\r
2018-09-03,61.60466933128832\r
2018-09-08,52.94850535900613\r
2018-09-18,62.32460977422409\r
2018-09-28,56.851358326688754\r
2018-11-17,50.312998463996074\r
2019-01-16,63.23024381549682\r
2019-02-15,84.96341744271143\r
2019-02-20,73.0242042262188\r
2019-02-25,78.9853811901322\r
2019-03-22,80.61334871880752\r
2019-03-27,75.57950541262218\r
2019-05-01,80.20484555835577\r
2019-05-31,70.3200738994844\r
2019-07-05,76.17524686843325\r
2019-07-10,69.55656451589499\r
2019-07-15,70.3200738994844\r
2019-07-25,40.7186702457405\r
2019-08-04,31.59069884873138\r
2019-08-09,35.87612172864732\r
2019-08-14,31.073634461089167\r
2019-08-24,29.673075207799727\r
2019-09-03,26.846062568776112\r
2019-09-13,22.038950983548368\r
2019-10-08,25.0764447427962\r
2020-01-11,74.19827314726463\r
2020-01-16,71.2801490293338\r
2020-02-05,87.07386094579945\r
2020-02-15,78.5809086063072\r
2020-02-20,79.79734981672686\r
2020-03-21,89.85499684832152\r
2020-04-05,83.29316480755212\r
2020-04-10,94.43719862328345\r
2020-04-15,87.49896522989647\r
2020-05-20,86.43808894494592\r
2020-05-25,84.5443453346239\r
2020-05-30,89.42436759419346\r
2020-06-24,96.2118840161244\r
2020-07-19,83.70921887114396\r
2020-07-24,81.63901309700756\r
2020-07-29,83.50106606010182\r
2020-08-08,79.39086164386534\r
2020-09-02,67.6654972589511\r
2020-09-07,68.79710161458434\r
2020-09-12,58.41521060746617\r
2020-09-17,60.1769724173588\r
2020-10-17,64.69244493904924\r
2020-11-21,74.19827314726463\r
2020-11-26,63.776667740102546\r
2020-12-26,84.33518647235687\r
2021-01-10,86.43808894494592\r
2021-02-14,100.0\r
2021-02-19,94.87936638019198\r
2021-02-24,95.54449763251823\r
2021-03-01,87.9250743739233\r
2021-03-21,80.81797803434762\r
2021-03-31,90.28663018256205\r
2021-04-05,93.9960334883456\r
2021-04-15,91.80525195692888\r
2021-05-30,90.28663018256205\r
2021-06-14,93.77582694697182\r
2021-07-19,87.7118942033416\r
2021-08-23,83.70921887114396\r
2021-08-28,82.67097058422263\r
2021-09-12,81.22799204279313\r
2021-10-12,76.77325843323722\r
2021-10-17,74.98603458664506\r
2021-12-11,100.0\r
2021-12-16,99.80934586721389\r
2022-01-25,86.86168567089835\r
2022-02-09,77.77498765360808\r
2022-03-26,90.07068801422271\r
2022-04-05,100.0\r
2022-04-10,97.3292048134765\r
2022-04-15,94.6581571825517\r
2022-04-30,99.58262691212796\r
2022-05-30,93.9960334883456\r
2022-07-14,84.33518647235687\r
2022-07-24,66.54300482594014\r
2022-08-03,52.117894352436345\r
2022-08-08,51.29365952244434\r
2022-08-13,29.547306676054646\r
2022-08-28,30.81665572287942\r
2022-09-12,31.073634461089167\r
2022-09-22,22.148055205815982\r
2022-10-07,18.485278289041254\r
2022-11-06,24.96055337818216\r
2022-11-11,19.499000696261554\r
2022-11-16,26.48745460345372\r
2022-12-11,23.14175641809566\r
2023-01-10,34.10327007576611\r
2023-02-04,48.698990741958404\r
2023-02-09,49.180510862739695\r
2023-02-14,50.312998463996074\r
2023-02-19,48.379255052844336\r
2023-03-01,54.79827923874555\r
2023-04-05,63.41213154133101\r
2023-04-15,73.4145505594297\r
2023-05-30,76.57366904269604\r
2023-07-14,82.46407574913222\r
2023-08-08,68.23016072328544\r
2023-08-13,74.00196380913957\r
2023-08-18,68.41888800018442\r
2023-08-23,52.94850535900613\r
2023-09-07,30.30580641439809\r
2023-10-02,22.367048126517034\r
2023-10-07,22.587086765046084\r
2023-10-12,20.11983578840002\r
2023-11-06,38.54558032415589\r
`;export{r as default};
