const n=`date,value\r
2017-03-14,5167.230097098873\r
2017-03-17,5167.230097098873\r
2017-04-23,743.4861944486187\r
2017-05-03,743.4861944486187\r
2017-05-23,156.651956386155\r
2017-05-26,156.651956386155\r
2017-06-02,247.08349650569048\r
2017-06-05,156.651956386155\r
2017-06-12,156.651956386155\r
2017-07-07,1819.2865506724936\r
2017-07-12,2048.655842753368\r
2017-07-17,1674.4583579413343\r
2017-08-21,4071.2377905941844\r
2017-08-24,4071.2377905941844\r
2017-08-26,4071.2377905941844\r
2017-08-29,4071.2377905941844\r
2017-10-05,3417.79404948446\r
2017-10-10,3417.79404948446\r
2017-10-13,3417.79404948446\r
2017-10-15,6404.352835022866\r
2017-10-18,6259.854751393377\r
2017-10-25,6259.854751393377\r
2018-03-14,4786.333317973089\r
2018-03-19,4786.333317973089\r
2018-03-22,4786.333317973089\r
2018-04-18,4541.071992391865\r
2018-04-21,4541.071992391865\r
2018-04-23,4541.071992391865\r
2018-04-26,4541.071992391865\r
2018-06-22,3958.069504587358\r
2018-06-25,3958.069504587358\r
2018-06-27,4421.03243061041\r
2018-07-02,4186.118737591833\r
2018-07-07,3016.0335713968966\r
2018-07-10,2128.3648615790667\r
2018-07-12,3016.0335713968966\r
2018-07-15,3016.0335713968966\r
2018-07-17,2463.584039619149\r
2018-07-20,5297.676546631689\r
2018-07-22,5297.676546631689\r
2018-07-27,6259.854751393377\r
2018-07-30,5038.526206382279\r
2018-08-01,5976.156611438693\r
2018-08-04,5976.156611438693\r
2018-08-06,5976.156611438693\r
2018-08-11,4421.03243061041\r
2018-08-16,5976.156611438693\r
2018-08-19,5976.156611438693\r
2018-08-21,4421.03243061041\r
2018-08-26,4071.2377905941844\r
2018-09-03,3113.9503770757997\r
2018-09-05,3113.9503770757997\r
2018-09-20,4786.333317973089\r
2018-09-23,4786.333317973089\r
2018-09-25,5038.526206382279\r
2018-09-28,5038.526206382279\r
2018-10-05,3736.8568705693433\r
2018-10-20,4541.071992391865\r
2018-10-23,4541.071992391865\r
2018-10-25,4541.071992391865\r
2018-10-30,5038.526206382279\r
2018-11-04,3522.4523489569024\r
2018-11-09,3522.4523489569024\r
2019-02-12,8277.196895122395\r
2019-02-15,8277.196895122395\r
2019-02-17,10036.03434892838\r
2019-02-20,10036.03434892838\r
2019-02-22,5429.868711773785\r
2019-02-25,5429.868711773785\r
2019-02-27,5976.156611438693\r
2019-03-04,3736.8568705693433\r
2019-03-07,5167.230097098873\r
2019-03-24,2292.6890160232247\r
2019-03-27,2292.6890160232247\r
2019-03-29,3016.0335713968966\r
2019-04-01,3016.0335713968966\r
2019-04-08,3016.0335713968966\r
2019-05-13,2641.0843207949083\r
2019-05-16,2641.0843207949083\r
2019-05-23,2641.0843207949083\r
2019-05-26,2641.0843207949083\r
2019-05-31,2048.655842753368\r
2019-06-02,2551.50641105238\r
2019-06-05,2551.50641105238\r
2019-06-12,3213.5468375019313\r
2019-06-17,3628.805401405319\r
2019-06-27,3736.8568705693433\r
2019-06-30,3736.8568705693433\r
2019-07-02,3736.8568705693433\r
2019-07-05,2292.6890160232247\r
2019-07-07,2292.6890160232247\r
2019-07-10,2292.6890160232247\r
2019-07-12,3958.069504587358\r
2019-07-15,3736.8568705693433\r
2019-07-17,5563.809718859545\r
2019-07-20,5563.809718859545\r
2019-07-22,3522.4523489569024\r
2019-07-25,3522.4523489569024\r
2019-08-01,3113.9503770757997\r
2019-08-04,3846.6103780969797\r
2019-08-06,3846.6103780969797\r
2019-08-09,3016.0335713968966\r
2019-08-11,3016.0335713968966\r
2019-08-14,3016.0335713968966\r
2019-08-16,3016.0335713968966\r
2019-08-26,2825.223309490773\r
2019-08-29,2825.223309490773\r
2019-08-31,3736.8568705693433\r
2019-09-03,3736.8568705693433\r
2019-09-15,5167.230097098873\r
2019-09-18,4786.333317973089\r
2019-09-20,5167.230097098873\r
2019-09-30,3628.805401405319\r
2019-10-03,3736.8568705693433\r
2019-10-25,6117.123662279038\r
2019-10-30,6117.123662279038\r
2019-11-04,6117.123662279038\r
2020-02-07,10036.03434892838\r
2020-02-12,10036.03434892838\r
2020-02-15,10036.03434892838\r
2020-02-20,10036.03434892838\r
2020-02-22,10036.03434892838\r
2020-03-28,1604.455228043967\r
2020-03-31,1604.455228043967\r
2020-04-02,1819.2865506724936\r
2020-04-05,1819.2865506724936\r
2020-04-07,1604.455228043967\r
2020-04-10,1604.455228043967\r
2020-04-12,1604.455228043967\r
2020-04-15,2128.3648615790667\r
2020-05-27,2292.6890160232247\r
2020-05-30,2292.6890160232247\r
2020-06-01,2292.6890160232247\r
2020-06-21,2463.584039619149\r
2020-06-24,2463.584039619149\r
2020-06-26,2463.584039619149\r
2020-06-29,2463.584039619149\r
2020-07-01,3628.805401405319\r
2020-07-04,3628.805401405319\r
2020-07-06,3628.805401405319\r
2020-07-09,3522.4523489569024\r
2020-07-11,3522.4523489569024\r
2020-07-14,3522.4523489569024\r
2020-07-31,3417.79404948446\r
2020-08-05,5563.809718859545\r
2020-08-08,5563.809718859545\r
2020-08-10,5563.809718859545\r
2020-08-15,2463.584039619149\r
2020-08-18,3846.6103780969797\r
2020-08-20,2463.584039619149\r
2020-08-25,2551.50641105238\r
2020-09-02,3736.8568705693433\r
2020-09-04,3016.0335713968966\r
2020-09-07,3213.5468375019313\r
2020-09-09,3213.5468375019313\r
2020-09-12,3016.0335713968966\r
2020-09-14,3736.8568705693433\r
2020-09-17,3736.8568705693433\r
2021-02-21,1217.8713016485417\r
2021-02-24,1217.8713016485417\r
2021-02-26,3958.069504587358\r
2021-03-01,3958.069504587358\r
2021-03-06,3628.805401405319\r
2021-03-23,1819.2865506724936\r
2021-03-28,2292.6890160232247\r
2021-03-31,2292.6890160232247\r
2021-04-02,1674.4583579413343\r
2021-04-05,2825.223309490773\r
2021-04-07,2825.223309490773\r
2021-04-12,2128.3648615790667\r
2021-04-22,1819.2865506724936\r
2021-04-27,3213.5468375019313\r
2021-05-05,2209.7077676825284\r
2021-06-16,2128.3648615790667\r
2021-06-26,2128.3648615790667\r
2021-07-21,2048.655842753368\r
2021-07-29,2048.655842753368\r
2021-08-10,1278.347801226\r
2021-08-13,1278.347801226\r
2021-08-15,1604.455228043967\r
2021-08-20,1536.0528089480192\r
2021-08-25,1404.0297949892447\r
2021-08-28,1674.4583579413343\r
2021-09-02,938.9092345367027\r
2021-09-04,2377.3129972344104\r
2021-09-07,2377.3129972344104\r
2021-09-12,2377.3129972344104\r
2021-09-24,1101.6196416286762\r
2021-10-14,1819.2865506724936\r
2021-10-17,1819.2865506724936\r
2021-10-19,2641.0843207949083\r
2021-10-22,2641.0843207949083\r
2021-10-24,1894.1213127807644\r
2021-10-27,4302.715808905971\r
2022-02-26,1469.2460455575592\r
2022-03-01,1469.2460455575592\r
2022-03-06,1469.2460455575592\r
2022-03-08,1970.5761898233698\r
2022-04-17,1340.3988231698518\r
2022-04-22,2463.584039619149\r
2022-04-27,1340.3988231698518\r
2022-04-30,2551.50641105238\r
2022-05-02,2551.50641105238\r
2022-05-07,1469.2460455575592\r
2022-06-06,1.5509300306108518\r
2022-06-11,3417.79404948446\r
2022-06-16,3417.79404948446\r
2022-06-19,3417.79404948446\r
2022-06-21,4302.715808905971\r
2022-06-29,2463.584039619149\r
2022-07-01,2641.0843207949083\r
2022-07-06,1894.1213127807644\r
2022-07-11,3113.9503770757997\r
2022-07-14,3113.9503770757997\r
2022-07-16,2377.3129972344104\r
2022-07-19,3736.8568705693433\r
2022-07-21,2825.223309490773\r
2022-07-24,3417.79404948446\r
2022-07-26,2048.655842753368\r
2022-07-31,2641.0843207949083\r
2022-08-03,1970.5761898233698\r
2022-08-05,1970.5761898233698\r
2022-08-10,2732.3219212247404\r
2022-08-13,2732.3219212247404\r
2022-09-19,2463.584039619149\r
2022-09-22,2463.584039619149\r
2022-10-04,2292.6890160232247\r
2022-10-07,2292.6890160232247\r
2022-10-09,2463.584039619149\r
2022-10-12,2463.584039619149\r
2023-02-11,5167.230097098873\r
2023-02-14,5167.230097098873\r
2023-02-16,7153.449818880738\r
2023-02-21,4911.561686574012\r
2023-02-26,6404.352835022866\r
2023-03-28,4421.03243061041\r
2023-03-31,4421.03243061041\r
2023-04-05,4421.03243061041\r
2023-04-07,4421.03243061041\r
`;export{n as default};
