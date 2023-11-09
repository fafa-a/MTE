const n=`date,value\r
2017-02-19,37500\r
2017-02-22,39900\r
2017-03-04,30600\r
2017-03-11,38400\r
2017-03-14,39900\r
2017-04-03,49300\r
2017-04-10,49300\r
2017-04-20,46400\r
2017-04-23,46200\r
2017-04-30,46200\r
2017-05-23,45800\r
2017-05-30,45800\r
2017-06-02,48300\r
2017-06-09,49100\r
2017-06-12,47000\r
2017-06-19,45500\r
2017-06-22,43700\r
2017-07-02,43300\r
2017-07-04,38500\r
2017-07-07,39000\r
2017-07-09,39000\r
2017-07-12,39000\r
2017-07-14,36300\r
2017-07-17,37000\r
2017-07-22,33800\r
2017-07-24,33800\r
2017-07-27,28700\r
2017-07-29,28700\r
2017-08-03,27400\r
2017-08-06,28600\r
2017-08-13,25100\r
2017-08-18,24700\r
2017-08-21,21500\r
2017-08-23,22300\r
2017-08-26,21800\r
2017-09-05,14400\r
2017-09-15,12800\r
2017-09-20,11600\r
2017-09-22,12800\r
2017-09-27,11200\r
2017-10-05,8800\r
2017-10-07,5400\r
2017-10-10,5100\r
2017-10-12,5400\r
2017-10-15,4900\r
2017-10-17,4100\r
2017-10-22,4000\r
2017-10-25,5900\r
2017-10-27,5100\r
2017-10-30,4900\r
2017-11-21,3200\r
2017-11-26,3200\r
2017-11-29,3200\r
2018-01-13,13100\r
2018-01-15,15900\r
2018-01-23,12200\r
2018-01-28,4400\r
2018-02-02,4400\r
2018-02-24,23400\r
2018-02-27,23400\r
2018-03-04,6400\r
2018-03-14,38200\r
2018-03-16,49600\r
2018-03-19,41700\r
2018-03-21,41700\r
2018-03-24,41700\r
2018-04-18,46500\r
2018-04-20,52200\r
2018-04-25,52200\r
2018-04-30,51100\r
2018-05-05,49800\r
2018-05-08,49800\r
2018-05-18,48500\r
2018-05-20,50300\r
2018-05-25,45900\r
2018-06-02,44600\r
2018-06-14,43700\r
2018-06-19,47600\r
2018-06-22,44000\r
2018-06-24,46800\r
2018-06-27,46800\r
2018-06-29,46800\r
2018-07-02,47900\r
2018-07-04,47000\r
2018-07-07,46100\r
2018-07-09,45800\r
2018-07-12,45800\r
2018-07-17,41900\r
2018-07-19,40600\r
2018-07-22,43000\r
2018-07-24,40700\r
2018-07-27,41200\r
2018-07-29,40600\r
2018-08-01,40600\r
2018-08-03,35800\r
2018-08-06,36500\r
2018-08-11,40600\r
2018-08-16,26900\r
2018-08-18,32200\r
2018-08-21,30700\r
2018-08-23,30700\r
2018-08-26,31100\r
2018-08-28,30900\r
2018-08-31,25700\r
2018-09-02,22800\r
2018-09-05,23800\r
2018-09-07,21600\r
2018-09-10,20600\r
2018-09-12,20600\r
2018-09-17,19200\r
2018-09-20,16800\r
2018-09-22,18000\r
2018-09-25,15600\r
2018-09-27,15600\r
2018-10-02,15200\r
2018-10-05,15200\r
2018-10-10,17900\r
2018-10-12,17900\r
2018-10-15,10900\r
2018-10-17,12900\r
2018-10-20,12900\r
2018-10-22,11600\r
2018-10-25,11600\r
2018-10-30,12600\r
2018-11-04,14000\r
2018-11-09,14000\r
2018-11-11,14000\r
2018-11-14,14000\r
2018-11-24,34800\r
2018-12-11,39900\r
2018-12-14,39900\r
2019-01-03,34400\r
2019-01-10,34400\r
2019-01-15,34600\r
2019-02-04,38800\r
2019-02-12,39900\r
2019-02-14,33900\r
2019-02-17,36200\r
2019-02-19,36200\r
2019-02-22,35400\r
2019-02-24,35400\r
2019-02-27,35400\r
2019-03-04,38100\r
2019-03-16,35400\r
2019-03-19,35400\r
2019-03-21,41400\r
2019-03-24,40900\r
2019-03-26,43000\r
2019-03-29,42500\r
2019-03-31,44200\r
2019-04-05,44700\r
2019-04-13,47200\r
2019-04-15,47200\r
2019-04-18,46600\r
2019-04-20,49000\r
2019-04-23,47600\r
2019-04-30,46500\r
2019-05-03,47300\r
2019-05-10,48600\r
2019-05-13,49000\r
2019-05-15,47700\r
2019-05-23,47000\r
2019-05-25,47000\r
2019-05-30,42700\r
2019-06-02,46900\r
2019-06-04,46900\r
2019-06-07,49700\r
2019-06-12,49400\r
2019-06-17,43500\r
2019-06-19,48700\r
2019-06-24,46200\r
2019-06-27,47600\r
2019-06-29,44200\r
2019-07-02,46200\r
2019-07-04,45500\r
2019-07-07,43600\r
2019-07-09,43600\r
2019-07-12,42600\r
2019-07-14,41300\r
2019-07-17,41400\r
2019-07-19,40400\r
2019-07-22,39300\r
2019-07-24,37400\r
2019-07-29,37400\r
2019-08-01,35700\r
2019-08-03,35000\r
2019-08-06,32900\r
2019-08-08,31900\r
2019-08-11,28200\r
2019-08-13,30900\r
2019-08-16,30100\r
2019-08-18,30100\r
2019-08-21,29900\r
2019-08-23,27700\r
2019-08-26,28400\r
2019-08-28,27200\r
2019-08-31,25300\r
2019-09-02,24100\r
2019-09-07,23900\r
2019-09-12,24900\r
2019-09-15,20000\r
2019-09-17,16000\r
2019-09-20,13000\r
2019-09-22,13000\r
2019-09-27,11600\r
2019-09-30,11700\r
2019-10-07,11600\r
2019-10-25,17300\r
2019-10-30,17300\r
2019-12-06,41100\r
2019-12-14,41100\r
2019-12-19,41100\r
2019-12-21,50300\r
2019-12-29,49600\r
2020-02-12,35700\r
2020-02-14,35700\r
2020-02-22,38000\r
2020-02-24,37200\r
2020-03-08,38100\r
2020-03-20,42100\r
2020-03-23,43200\r
2020-03-25,43100\r
2020-03-28,48700\r
2020-04-02,48200\r
2020-04-04,49300\r
2020-04-07,50900\r
2020-04-09,50000\r
2020-04-12,50300\r
2020-04-14,49500\r
2020-04-17,49500\r
2020-04-22,49700\r
2020-04-24,48700\r
2020-04-27,50500\r
2020-05-04,46900\r
2020-05-07,46900\r
2020-05-09,45400\r
2020-05-17,43300\r
2020-05-19,45500\r
2020-05-22,46800\r
2020-05-24,46800\r
2020-05-27,47300\r
2020-05-29,43900\r
2020-06-01,43900\r
2020-06-21,45700\r
2020-06-23,50600\r
2020-06-26,50600\r
2020-06-28,50600\r
2020-07-01,44500\r
2020-07-08,43600\r
2020-07-11,42800\r
2020-07-13,43200\r
2020-07-18,41000\r
2020-07-21,39600\r
2020-07-23,39600\r
2020-07-28,33600\r
2020-07-31,35100\r
2020-08-05,29200\r
2020-08-07,27600\r
2020-08-10,26500\r
2020-08-15,28900\r
2020-08-20,24200\r
2020-08-25,18500\r
2020-08-27,18400\r
2020-09-01,13400\r
2020-09-04,13800\r
2020-09-09,9900\r
2020-09-14,8900\r
2020-09-16,9100\r
2020-09-19,8500\r
2020-10-31,3500\r
2020-11-10,3500\r
2020-11-18,1900\r
2020-11-23,5200\r
2020-11-25,5200\r
2020-11-28,5200\r
2020-12-13,5600\r
2020-12-28,19400\r
2021-01-24,32300\r
2021-01-29,32300\r
2021-02-21,43800\r
2021-02-23,47300\r
2021-02-26,47300\r
2021-02-28,46600\r
2021-03-05,49500\r
2021-03-10,49300\r
2021-03-20,52000\r
2021-03-23,52200\r
2021-03-25,50700\r
2021-03-28,51800\r
2021-03-30,50500\r
2021-04-02,49100\r
2021-04-04,49200\r
2021-04-07,48700\r
2021-04-09,50000\r
2021-04-14,46300\r
2021-04-17,47300\r
2021-04-19,47500\r
2021-04-22,47500\r
2021-04-24,48000\r
2021-04-27,48300\r
2021-05-27,38900\r
2021-05-29,40800\r
2021-06-01,43800\r
2021-06-03,45500\r
2021-06-11,45800\r
2021-06-13,45200\r
2021-06-16,44300\r
2021-06-18,45400\r
2021-06-21,45400\r
2021-06-26,47500\r
2021-07-11,43700\r
2021-07-18,43700\r
2021-07-21,44800\r
2021-07-23,43800\r
2021-08-02,46600\r
2021-08-10,46300\r
2021-08-12,41300\r
2021-08-15,41000\r
2021-08-17,41000\r
2021-08-20,42700\r
2021-08-25,44000\r
2021-08-27,43700\r
2021-09-01,42600\r
2021-09-04,42600\r
2021-09-06,40200\r
2021-09-24,34700\r
2021-09-26,34700\r
2021-09-29,36100\r
2021-10-01,36100\r
2021-10-11,37600\r
2021-10-14,40600\r
2021-10-16,37400\r
2021-10-21,39000\r
2021-10-24,40100\r
2021-11-30,38100\r
2021-12-03,38100\r
2021-12-23,36700\r
2022-01-14,31700\r
2022-01-19,31700\r
2022-01-22,31700\r
2022-01-24,34000\r
2022-01-27,32300\r
2022-01-29,32300\r
2022-02-01,46700\r
2022-02-08,45600\r
2022-02-11,45600\r
2022-02-13,23400\r
2022-02-18,23400\r
2022-02-26,37100\r
2022-02-28,38700\r
2022-03-03,38700\r
2022-03-05,38500\r
2022-03-08,39800\r
2022-03-10,43100\r
2022-03-23,45900\r
2022-03-25,47200\r
2022-03-28,47200\r
2022-04-04,45200\r
2022-04-14,44100\r
2022-04-17,45900\r
2022-04-19,45900\r
2022-04-27,45900\r
2022-05-02,41500\r
2022-05-04,41500\r
2022-05-07,41500\r
2022-05-19,45400\r
2022-05-27,45400\r
2022-05-29,43200\r
2022-06-06,42800\r
2022-06-11,46000\r
2022-06-13,43700\r
2022-06-16,43200\r
2022-06-18,42200\r
2022-06-21,41100\r
2022-06-23,42400\r
2022-06-28,40100\r
2022-07-01,45200\r
2022-07-03,40300\r
2022-07-06,38400\r
2022-07-08,38700\r
2022-07-11,39000\r
2022-07-13,36800\r
2022-07-16,35300\r
2022-07-18,35500\r
2022-07-21,34700\r
2022-07-26,33700\r
2022-07-28,31600\r
2022-07-31,29400\r
2022-08-02,25900\r
2022-08-05,25900\r
2022-08-07,24000\r
2022-08-10,19800\r
2022-08-12,17100\r
2022-08-15,15100\r
2022-08-17,15100\r
2022-08-22,13000\r
2022-08-25,10900\r
2022-08-30,10900\r
2022-09-01,10200\r
2022-09-04,10900\r
2022-09-06,14600\r
2022-09-09,14600\r
2022-09-11,13600\r
2022-09-19,15500\r
2022-09-21,13600\r
2022-10-04,12400\r
2022-10-06,13200\r
2022-10-09,13200\r
2022-10-11,12500\r
2022-10-16,13700\r
2022-11-18,41200\r
2022-11-20,42500\r
2022-11-23,42500\r
2022-12-05,35600\r
2023-01-17,30100\r
2023-01-24,30100\r
2023-02-03,32300\r
2023-02-08,32700\r
2023-02-11,32700\r
2023-02-13,31400\r
2023-02-16,31300\r
2023-02-21,33900\r
2023-02-26,36400\r
2023-03-03,35300\r
2023-03-05,36600\r
2023-03-15,36600\r
2023-03-28,42100\r
2023-04-04,42800\r
2023-04-07,42800\r
2023-04-09,36900\r
2023-04-19,44600\r
2023-05-27,50300\r
2023-05-29,52500\r
2023-06-01,49500\r
2023-06-03,50400\r
2023-06-06,50100\r
2023-06-08,49800\r
2023-06-16,51300\r
2023-06-23,48900\r
2023-06-26,51100\r
2023-06-28,51900\r
2023-07-06,41300\r
2023-07-08,41300\r
2023-07-11,50600\r
2023-07-13,45500\r
2023-07-16,47500\r
2023-07-18,48000\r
2023-07-21,48000\r
2023-07-23,46500\r
2023-07-26,44700\r
2023-07-28,45900\r
2023-07-31,43900\r
2023-08-02,39500\r
2023-08-05,39700\r
2023-08-07,39700\r
2023-08-12,38700\r
2023-08-22,19700\r
2023-08-25,24400\r
2023-09-01,19300\r
2023-09-04,20100\r
2023-09-06,19600\r
2023-09-11,19700\r
2023-09-14,19500\r
2023-09-19,15400\r
2023-09-26,29200\r
2023-09-29,29900\r
2023-10-01,28700\r
2023-10-06,30100\r
2023-10-09,29600\r
2023-10-11,30200\r
2023-10-16,31700\r
2023-10-21,47500\r
`;export{n as default};
