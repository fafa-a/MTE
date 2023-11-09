const r=`date,value\r
2017-02-11,63900\r
2017-02-18,45700\r
2017-03-10,46100\r
2017-03-30,53200\r
2017-04-09,53700\r
2017-04-12,53800\r
2017-04-22,59800\r
2017-05-22,60400\r
2017-06-18,63900\r
2017-06-21,70300\r
2017-08-07,27800\r
2017-08-20,8900\r
2017-08-27,5700\r
2017-10-14,4900\r
2017-10-19,5000\r
2017-10-26,4500\r
2017-11-13,5600\r
2017-11-25,6000\r
2017-11-28,6400\r
2017-12-08,5300\r
2017-12-15,8900\r
2018-01-17,56300\r
2018-01-19,57800\r
2018-02-26,57400\r
2018-03-20,57500\r
2018-04-17,59400\r
2018-04-19,57300\r
2018-04-22,59600\r
2018-05-04,59000\r
2018-05-09,57900\r
2018-05-19,55900\r
2018-06-23,55300\r
2018-06-26,61500\r
2018-06-28,52700\r
2018-07-08,57400\r
2018-07-11,59800\r
2018-07-16,60200\r
2018-07-18,55800\r
2018-07-26,59700\r
2018-08-02,51700\r
2018-08-05,50900\r
2018-08-22,30300\r
2018-09-01,19400\r
2018-09-09,16800\r
2018-09-11,15900\r
2018-09-14,13400\r
2018-09-26,11500\r
2018-09-29,13300\r
2018-10-04,13700\r
2018-10-09,13300\r
2018-10-19,13500\r
2018-10-21,14100\r
2018-10-24,15800\r
2018-11-15,26000\r
2018-11-18,27000\r
2019-01-17,52400\r
2019-02-03,50000\r
2019-02-13,55000\r
2019-02-23,51700\r
2019-02-26,54500\r
2019-03-23,45500\r
2019-03-30,55300\r
2019-04-12,53100\r
2019-04-19,56400\r
2019-05-12,57400\r
2019-05-14,61300\r
2019-05-24,57000\r
2019-06-01,62000\r
2019-06-18,58200\r
2019-06-26,62300\r
2019-06-28,61500\r
2019-07-03,64200\r
2019-07-06,61900\r
2019-07-08,60200\r
2019-07-13,51500\r
2019-07-16,65900\r
2019-07-23,46200\r
2019-07-28,43000\r
2019-08-22,18200\r
2019-08-25,11900\r
2019-09-06,2700\r
2019-09-16,1500\r
2019-09-19,1300\r
2019-11-18,52700\r
2019-12-03,58500\r
2019-12-13,47800\r
2019-12-20,56700\r
2020-01-19,54200\r
2020-01-22,52100\r
2020-02-06,54800\r
2020-03-19,49900\r
2020-03-24,51600\r
2020-03-27,49800\r
2020-04-01,53300\r
2020-04-11,55400\r
2020-04-23,55300\r
2020-05-13,67700\r
2020-05-18,55400\r
2020-05-21,54800\r
2020-05-26,57800\r
2020-05-28,54700\r
2020-05-31,59700\r
2020-06-02,59600\r
2020-06-22,50600\r
2020-06-25,60700\r
2020-07-07,54400\r
2020-07-12,57200\r
2020-07-17,52800\r
2020-07-20,54000\r
2020-07-22,55400\r
2020-07-27,54800\r
2020-07-30,45900\r
2020-08-04,34600\r
2020-08-06,36800\r
2020-08-11,26600\r
2020-09-10,16900\r
2020-09-13,19500\r
2020-09-15,21900\r
2020-11-04,47000\r
2020-11-12,40300\r
2020-11-14,43700\r
2020-11-19,44300\r
2020-11-22,44200\r
2020-11-29,47800\r
2020-12-12,55300\r
2020-12-17,55700\r
2020-12-29,56700\r
2021-01-08,57300\r
2021-02-27,60900\r
2021-03-19,61500\r
2021-03-24,60300\r
2021-03-29,59900\r
2021-04-01,53800\r
2021-04-03,52100\r
2021-04-13,52800\r
2021-04-23,57600\r
2021-04-26,57700\r
2021-04-28,52400\r
2021-05-28,58300\r
2021-05-31,55300\r
2021-06-12,57800\r
2021-06-15,58100\r
2021-07-17,55700\r
2021-07-20,57400\r
2021-07-22,56400\r
2021-08-11,49900\r
2021-08-14,49000\r
2021-08-26,34100\r
2021-09-23,9000\r
2021-09-30,9500\r
2021-10-23,13100\r
2021-10-28,13700\r
2021-11-09,15700\r
2021-11-19,18500\r
2021-12-17,39000\r
2022-01-21,54100\r
2022-02-05,55900\r
2022-03-07,56000\r
2022-03-09,53700\r
2022-03-14,63700\r
2022-03-22,53900\r
2022-03-24,54100\r
2022-04-11,56300\r
2022-04-16,54200\r
2022-04-21,52800\r
2022-05-01,60800\r
2022-05-03,51500\r
2022-05-21,51700\r
2022-05-28,60400\r
2022-05-31,61200\r
2022-06-02,62400\r
2022-06-15,63400\r
2022-06-17,64400\r
2022-06-27,59300\r
2022-07-02,59600\r
2022-07-05,59600\r
2022-07-10,61300\r
2022-07-12,59700\r
2022-07-15,53100\r
2022-07-30,38500\r
2022-08-06,22500\r
2022-08-09,17700\r
2022-08-11,12200\r
2022-08-24,4400\r
2022-08-29,3800\r
2022-09-05,4900\r
2022-09-18,3600\r
2022-09-20,3500\r
2022-10-20,7900\r
2022-11-02,6700\r
2022-11-12,5700\r
2022-11-19,8300\r
2022-11-22,6000\r
2022-12-09,17600\r
2023-01-11,58300\r
2023-01-21,55000\r
2023-02-10,52000\r
2023-02-12,54600\r
2023-02-15,52400\r
2023-02-20,55900\r
2023-02-27,60800\r
2023-03-02,55000\r
2023-03-04,34500\r
2023-03-07,69200\r
2023-03-17,53700\r
2023-03-27,50600\r
2023-05-26,57000\r
2023-05-28,53000\r
2023-05-31,59500\r
2023-06-02,58200\r
2023-06-05,56300\r
2023-06-07,57000\r
2023-06-25,59300\r
2023-07-07,54800\r
2023-08-09,30400\r
2023-08-21,22900\r
2023-09-03,9100\r
2023-09-05,5800\r
2023-09-08,1200\r
2023-09-10,4400\r
2023-09-30,3000\r
2023-10-08,3500\r
2023-10-10,3600\r
`;export{r as default};
