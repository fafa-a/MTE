const r=`date,value\r
2017-02-19,22000\r
2017-02-22,22000\r
2017-02-26,22000\r
2017-03-01,22600\r
2017-03-08,21000\r
2017-03-11,22400\r
2017-03-14,21500\r
2017-04-10,22400\r
2017-04-17,22400\r
2017-04-20,23000\r
2017-04-23,22200\r
2017-06-09,21300\r
2017-06-12,21300\r
2017-06-16,21300\r
2017-06-19,23200\r
2017-06-22,22500\r
2017-06-26,22500\r
2017-06-29,22500\r
2017-07-04,21600\r
2017-07-06,21600\r
2017-07-07,21600\r
2017-07-12,21600\r
2017-07-14,22100\r
2017-07-17,20700\r
2017-07-19,20700\r
2017-07-21,20700\r
2017-07-22,20700\r
2017-07-24,22300\r
2017-07-26,20700\r
2017-07-27,20700\r
2017-07-29,22000\r
2017-07-31,22000\r
2017-08-03,19700\r
2017-08-05,21000\r
2017-08-06,21000\r
2017-08-08,21000\r
2017-08-11,17700\r
2017-08-13,18100\r
2017-08-15,17200\r
2017-08-18,22500\r
2017-08-20,22500\r
2017-08-21,22500\r
2017-08-23,22500\r
2017-08-25,20700\r
2017-08-26,20700\r
2017-09-02,18500\r
2017-09-04,18500\r
2017-09-05,18500\r
2017-09-07,22000\r
2017-09-10,22000\r
2017-09-12,17300\r
2017-09-14,20800\r
2017-09-17,20400\r
2017-09-20,20900\r
2017-09-22,20900\r
2017-09-27,22700\r
2017-10-04,22200\r
2017-10-05,22200\r
2017-10-07,22300\r
2017-10-09,20000\r
2017-10-10,20000\r
2017-10-12,20800\r
2017-10-14,20800\r
2017-10-15,20800\r
2017-10-17,20200\r
2017-10-19,21900\r
2017-10-20,21900\r
2017-10-22,20000\r
2017-10-24,21300\r
2017-10-25,21300\r
2017-10-27,19000\r
2017-10-29,19100\r
2017-10-30,19100\r
2017-11-01,19100\r
2017-11-03,18600\r
2017-11-06,18600\r
2017-11-16,18500\r
2017-11-18,18500\r
2017-11-19,18500\r
2017-11-21,19000\r
2017-11-23,19000\r
2017-11-26,17600\r
2017-11-28,18200\r
2017-11-29,18200\r
2017-12-01,18200\r
2017-12-03,18100\r
2017-12-06,19800\r
2017-12-16,19900\r
2017-12-19,18500\r
2017-12-21,20300\r
2017-12-23,20300\r
2017-12-24,20300\r
2017-12-26,20300\r
2017-12-28,17500\r
2018-01-05,19300\r
2018-01-07,19300\r
2018-01-08,19300\r
2018-01-13,19300\r
2018-01-15,19300\r
2018-01-20,20600\r
2018-01-22,20600\r
2018-01-23,20600\r
2018-01-28,20600\r
2018-01-30,20600\r
2018-02-04,18300\r
2018-02-07,18300\r
2018-02-09,18900\r
2018-02-11,18900\r
2018-02-12,18900\r
2018-02-14,18000\r
2018-02-16,18700\r
2018-02-19,18700\r
2018-02-21,18500\r
2018-02-24,18500\r
2018-03-16,21100\r
2018-03-19,21100\r
2018-03-21,21100\r
2018-03-23,21100\r
2018-03-26,22900\r
2018-03-31,22600\r
2018-04-05,25000\r
2018-04-10,25100\r
2018-04-15,25100\r
2018-04-17,16500\r
2018-04-18,16500\r
2018-04-20,21100\r
2018-04-22,21100\r
2018-04-25,20300\r
2018-04-27,24000\r
2018-04-28,24000\r
2018-04-30,23800\r
2018-05-03,23600\r
2018-05-05,23600\r
2018-05-25,21100\r
2018-06-01,21100\r
2018-06-02,21100\r
2018-06-09,22100\r
2018-06-14,24800\r
2018-06-16,24800\r
2018-06-17,24800\r
2018-06-19,24800\r
2018-06-21,23100\r
2018-06-22,23100\r
2018-06-24,23100\r
2018-07-04,24600\r
2018-07-06,24600\r
2018-07-07,24600\r
2018-07-09,22300\r
2018-07-11,22300\r
2018-07-12,22300\r
2018-07-14,21100\r
2018-07-17,25800\r
2018-07-19,22400\r
2018-07-21,25900\r
2018-07-22,25900\r
2018-07-24,23400\r
2018-07-26,24800\r
2018-07-27,24800\r
2018-07-29,21500\r
2018-07-31,24800\r
2018-08-01,24800\r
2018-08-03,24800\r
2018-08-05,21200\r
2018-08-06,21200\r
2018-08-08,21200\r
2018-08-13,23000\r
2018-08-15,23000\r
2018-08-16,23000\r
2018-08-18,23000\r
2018-08-20,23000\r
2018-08-21,23000\r
2018-08-23,23000\r
2018-08-28,20900\r
2018-08-30,20900\r
2018-08-31,20900\r
2018-09-02,24600\r
2018-09-04,24600\r
2018-09-05,24600\r
2018-09-07,20900\r
2018-09-09,24700\r
2018-09-10,24700\r
2018-09-12,22900\r
2018-09-14,24800\r
2018-09-17,19700\r
2018-09-19,24900\r
2018-09-20,24900\r
2018-09-22,24900\r
2018-09-24,19700\r
2018-09-25,19700\r
2018-09-27,22800\r
2018-09-29,22700\r
2018-10-02,23600\r
2018-10-04,23600\r
2018-10-05,23600\r
2018-10-09,21200\r
2018-10-12,21200\r
2018-11-26,17600\r
2018-11-28,17600\r
2018-12-01,17600\r
2018-12-03,17600\r
2018-12-04,17600\r
2018-12-06,18500\r
2018-12-08,15700\r
2018-12-11,18400\r
2018-12-18,16100\r
2019-01-05,13700\r
2019-01-07,13700\r
2019-01-10,15400\r
2019-01-12,15400\r
2019-01-15,10800\r
2019-01-17,10800\r
2019-01-20,10800\r
2019-01-22,12900\r
2019-01-23,12900\r
2019-01-25,8100\r
2019-01-27,10500\r
2019-01-28,10500\r
2019-01-30,10500\r
2019-02-04,13100\r
2019-02-06,13100\r
2019-02-09,13100\r
2019-02-11,19600\r
2019-02-12,19600\r
2019-02-14,13700\r
2019-02-16,13700\r
2019-02-17,13700\r
2019-02-19,13700\r
2019-02-21,10500\r
2019-02-22,10500\r
2019-02-27,10500\r
2019-03-01,13200\r
2019-03-03,12000\r
2019-03-08,12000\r
2019-03-11,14700\r
2019-03-13,14700\r
2019-03-16,11500\r
2019-03-18,14800\r
2019-03-19,14800\r
2019-03-21,12100\r
2019-03-23,12100\r
2019-03-24,12100\r
2019-03-26,12100\r
2019-03-28,14700\r
2019-03-29,14700\r
2019-03-31,8600\r
2019-04-02,12200\r
2019-04-05,9100\r
2019-04-07,11400\r
2019-04-08,11400\r
2019-04-13,11400\r
2019-04-15,11200\r
2019-04-17,15000\r
2019-04-18,15000\r
2019-04-20,15000\r
2019-04-22,14800\r
2019-04-27,14800\r
2019-04-30,15700\r
2019-05-02,11300\r
2019-05-05,11300\r
2019-05-07,11300\r
2019-05-10,16800\r
2019-05-12,16800\r
2019-05-13,16800\r
2019-05-15,16800\r
2019-05-23,16500\r
2019-06-04,19400\r
2019-06-06,19400\r
2019-06-07,19400\r
2019-06-11,19400\r
2019-06-12,19400\r
2019-06-19,18400\r
2019-06-22,18400\r
2019-06-24,18400\r
2019-06-26,18400\r
2019-06-27,18400\r
2019-06-29,18800\r
2019-07-01,18800\r
2019-07-02,18800\r
2019-07-04,17500\r
2019-07-06,19500\r
2019-07-07,19500\r
2019-07-11,19500\r
2019-07-12,19500\r
2019-07-14,19500\r
2019-07-16,18400\r
2019-07-17,18400\r
2019-07-19,18900\r
2019-07-21,16100\r
2019-07-22,16100\r
2019-07-24,16100\r
2019-07-26,16100\r
2019-07-29,16100\r
2019-07-31,16100\r
2019-08-03,14900\r
2019-08-05,16800\r
2019-08-06,16800\r
2019-08-08,14600\r
2019-08-10,14600\r
2019-08-11,14600\r
2019-08-15,19100\r
2019-08-16,19100\r
2019-08-18,17100\r
2019-08-20,20200\r
2019-08-21,20200\r
2019-08-23,17500\r
2019-08-25,22000\r
2019-08-26,22000\r
2019-08-30,22000\r
2019-08-31,22000\r
2019-09-02,12500\r
2019-09-04,15000\r
2019-09-05,15000\r
2019-09-07,13700\r
2019-09-09,17600\r
2019-09-12,13700\r
2019-09-14,13700\r
2019-09-15,13700\r
2019-09-17,15400\r
2019-09-19,15400\r
2019-09-25,16200\r
2019-09-27,13100\r
2019-09-29,13900\r
2019-09-30,13900\r
2019-10-02,12700\r
2019-10-05,15000\r
2019-10-07,12400\r
2019-10-10,12400\r
2019-10-19,13200\r
2019-11-06,6700\r
2019-11-08,6700\r
2019-11-09,6700\r
2019-11-13,6700\r
2019-11-16,7700\r
2019-11-26,6200\r
2019-11-28,6200\r
2019-11-29,6200\r
2019-12-06,7900\r
2019-12-08,7900\r
2019-12-09,7900\r
2019-12-13,7900\r
2019-12-21,8300\r
2019-12-23,2200\r
2019-12-26,2200\r
2019-12-28,2200\r
2019-12-29,2200\r
2020-01-05,6300\r
2020-01-08,6300\r
2020-01-12,6300\r
2020-01-13,6300\r
2020-02-04,7300\r
2020-02-07,7300\r
2020-02-09,17100\r
2020-02-11,17100\r
2020-02-12,17100\r
2020-02-14,7900\r
2020-02-19,7900\r
2020-02-22,17100\r
2020-02-24,9600\r
2020-02-26,9600\r
2020-03-03,9500\r
2020-03-07,9500\r
2020-03-08,9500\r
2020-03-10,9500\r
2020-03-20,9700\r
2020-03-22,9700\r
2020-03-28,9700\r
2020-04-01,9700\r
2020-04-04,11200\r
2020-04-06,8300\r
2020-04-07,8300\r
2020-04-09,11300\r
2020-04-11,11300\r
2020-04-14,8700\r
2020-04-24,12200\r
2020-04-26,9200\r
2020-04-29,20800\r
2020-05-04,20800\r
2020-05-06,20800\r
2020-05-09,20800\r
2020-05-14,20800\r
2020-05-19,23600\r
2020-05-21,23600\r
2020-05-22,23600\r
2020-05-24,23600\r
2020-05-26,23600\r
2020-05-31,23600\r
2020-06-01,23600\r
2020-06-03,23600\r
2020-06-05,13000\r
2020-06-06,13000\r
2020-06-08,13000\r
2020-06-23,21600\r
2020-06-25,21600\r
2020-06-26,21600\r
2020-06-28,24000\r
2020-06-30,24000\r
2020-07-01,24000\r
2020-07-03,20200\r
2020-07-05,20200\r
2020-07-06,20200\r
2020-07-08,22100\r
2020-07-10,20500\r
2020-07-11,20500\r
2020-07-15,21900\r
2020-07-16,21900\r
2020-07-18,21900\r
2020-07-20,19400\r
2020-07-21,19400\r
2020-07-23,23700\r
2020-07-25,22500\r
2020-07-26,22500\r
2020-07-30,22500\r
2020-07-31,22500\r
2020-08-02,22500\r
2020-08-04,22500\r
2020-08-05,22500\r
2020-08-07,18200\r
2020-08-09,19300\r
2020-08-10,19300\r
2020-08-12,19300\r
2020-08-14,19300\r
2020-08-15,19300\r
2020-08-17,19300\r
2020-08-19,18600\r
2020-08-20,18600\r
2020-08-22,18600\r
2020-08-24,10000\r
2020-08-25,10000\r
2020-08-27,16900\r
2020-09-01,13000\r
2020-09-03,13000\r
2020-09-04,13000\r
2020-09-06,14100\r
2020-09-08,13300\r
2020-09-09,13300\r
2020-09-13,14900\r
2020-09-14,14900\r
2020-09-16,10300\r
2020-09-18,11700\r
2020-09-21,11700\r
2020-09-23,11600\r
2020-09-26,15400\r
2020-09-28,15400\r
2020-09-29,15400\r
2020-10-01,15400\r
2020-10-03,14700\r
2020-10-08,14700\r
2020-10-11,18500\r
2020-10-13,18000\r
2020-10-16,18000\r
2020-10-18,18000\r
2020-10-19,18000\r
2020-10-21,18000\r
2020-10-24,18000\r
2020-10-31,17500\r
2020-11-02,17500\r
2020-11-05,17500\r
2020-11-07,17500\r
2020-11-10,17200\r
2020-11-12,17200\r
2020-11-17,12600\r
2020-11-18,12600\r
2020-11-20,12900\r
2020-11-22,10800\r
2020-11-23,10800\r
2020-11-25,10800\r
2020-11-27,10600\r
2020-11-30,19000\r
2020-12-02,19000\r
2020-12-03,19000\r
2020-12-07,19000\r
2020-12-12,19000\r
2020-12-13,19000\r
2020-12-30,17100\r
2021-01-14,18500\r
2021-01-17,18500\r
2021-01-19,20900\r
2021-01-22,20900\r
2021-01-24,18600\r
2021-01-26,20800\r
2021-01-29,20800\r
2021-01-31,17100\r
2021-02-03,17100\r
2021-02-23,19300\r
2021-02-25,19300\r
2021-02-26,19300\r
2021-02-28,21200\r
2021-03-02,21200\r
2021-03-05,21200\r
2021-03-07,19600\r
2021-03-08,19600\r
2021-03-10,21300\r
2021-03-12,21100\r
2021-03-13,21100\r
2021-03-15,21400\r
2021-03-17,21400\r
2021-03-20,21400\r
2021-03-22,19300\r
2021-03-23,19300\r
2021-03-25,21100\r
2021-03-30,23700\r
2021-04-01,23700\r
2021-04-02,23700\r
2021-04-06,22600\r
2021-04-09,22600\r
2021-05-04,22400\r
2021-05-06,22400\r
2021-05-07,22400\r
2021-05-09,22400\r
2021-05-11,22400\r
2021-05-12,22400\r
2021-05-14,24200\r
2021-05-19,23500\r
2021-05-21,23500\r
2021-05-26,20600\r
2021-05-27,20600\r
2021-06-03,24100\r
2021-06-05,24100\r
2021-06-08,24100\r
2021-06-10,24100\r
2021-06-11,24100\r
2021-06-13,24200\r
2021-06-15,20800\r
2021-06-16,20800\r
2021-06-18,20800\r
2021-07-03,23600\r
2021-07-05,23600\r
2021-07-10,23600\r
2021-07-11,23600\r
2021-07-13,23600\r
2021-07-18,24900\r
2021-07-20,24900\r
2021-07-21,24900\r
2021-07-23,24900\r
2021-07-25,24900\r
2021-07-28,25400\r
2021-07-30,23500\r
2021-08-02,24100\r
2021-08-05,24100\r
2021-08-09,22500\r
2021-08-10,22500\r
2021-08-12,22500\r
2021-08-17,22100\r
2021-08-19,22100\r
2021-08-20,22100\r
2021-08-22,24300\r
2021-08-27,22000\r
2021-08-29,23700\r
2021-08-30,23700\r
2021-09-01,22000\r
2021-09-06,22100\r
2021-09-08,20500\r
2021-09-11,23200\r
2021-09-13,23100\r
2021-09-18,23100\r
2021-09-19,23100\r
2021-09-21,23100\r
2021-10-01,22500\r
2021-10-06,22500\r
2021-10-11,21400\r
2021-10-13,21800\r
2021-10-14,21800\r
2021-10-16,21100\r
2021-10-18,22500\r
2021-10-23,21200\r
2021-10-24,21200\r
2021-10-26,21200\r
2021-11-05,17700\r
2021-11-20,16500\r
2021-11-23,16500\r
2021-11-30,21000\r
2021-12-02,19800\r
2021-12-03,19800\r
2021-12-05,22000\r
2021-12-07,22000\r
2021-12-12,19800\r
2021-12-15,19800\r
2021-12-20,17500\r
2022-01-09,21300\r
2022-01-11,21300\r
2022-01-12,21300\r
2022-01-14,21700\r
2022-01-16,21700\r
2022-01-17,21700\r
2022-01-19,21700\r
2022-01-21,15700\r
2022-01-22,15700\r
2022-01-24,20100\r
2022-01-26,19900\r
2022-01-27,19900\r
2022-01-29,21900\r
2022-02-01,21900\r
2022-02-05,18300\r
2022-02-06,18300\r
2022-02-08,18300\r
2022-02-10,15300\r
2022-02-11,15300\r
2022-02-13,15300\r
2022-02-15,15300\r
2022-02-18,19800\r
2022-02-20,18500\r
2022-02-21,18500\r
2022-02-23,20900\r
2022-02-26,20900\r
2022-02-28,20700\r
2022-03-02,21000\r
2022-03-03,21000\r
2022-03-25,24000\r
2022-03-27,24000\r
2022-03-28,24000\r
2022-04-01,24000\r
2022-04-04,24000\r
2022-04-09,24800\r
2022-04-14,24800\r
2022-04-16,24800\r
2022-04-17,24800\r
2022-04-19,25200\r
2022-04-26,23600\r
2022-04-27,23600\r
2022-04-29,23600\r
2022-05-09,23400\r
2022-05-11,23400\r
2022-05-12,23400\r
2022-05-14,24600\r
2022-05-16,24600\r
2022-05-17,24600\r
2022-05-19,24600\r
2022-05-21,22600\r
2022-05-22,22600\r
2022-05-24,22600\r
2022-05-29,23100\r
2022-05-31,23100\r
2022-06-01,23100\r
2022-06-05,23100\r
2022-06-06,23100\r
2022-06-13,20400\r
2022-06-15,20400\r
2022-06-16,20400\r
2022-06-18,21900\r
2022-06-20,21900\r
2022-06-25,20900\r
2022-06-26,20900\r
2022-06-28,22800\r
2022-07-01,21900\r
2022-07-03,22800\r
2022-07-05,22800\r
2022-07-06,22800\r
2022-07-08,22100\r
2022-07-10,22900\r
2022-07-11,22900\r
2022-07-13,22900\r
2022-07-15,21500\r
2022-07-16,21500\r
2022-07-18,24200\r
2022-07-23,26400\r
2022-07-25,26400\r
2022-07-26,26400\r
2022-07-28,26400\r
2022-07-30,24900\r
2022-07-31,24900\r
2022-08-02,25100\r
2022-08-04,21400\r
2022-08-05,21400\r
2022-08-07,22400\r
2022-08-09,22400\r
2022-08-10,22400\r
2022-08-12,21700\r
2022-08-19,20800\r
2022-08-20,20800\r
2022-08-22,22700\r
2022-08-24,22400\r
2022-08-25,22400\r
2022-08-27,22900\r
2022-08-29,22900\r
2022-09-01,22900\r
2022-09-03,20100\r
2022-09-04,20100\r
2022-09-06,20100\r
2022-09-11,19900\r
2022-09-16,20900\r
2022-09-18,20900\r
2022-09-19,20900\r
2022-09-21,20900\r
2022-09-26,21100\r
2022-09-28,20900\r
2022-10-01,20900\r
2022-10-03,20900\r
2022-10-04,20900\r
2022-10-06,20900\r
2022-10-16,17200\r
2022-10-18,17200\r
2022-10-19,17200\r
2022-10-26,20300\r
2022-10-28,19400\r
2022-10-31,19400\r
2022-11-05,19500\r
2022-11-10,17100\r
2022-11-20,15300\r
2022-11-22,15300\r
2022-11-25,20300\r
2022-11-30,15900\r
2022-12-02,20200\r
2022-12-05,17100\r
2022-12-07,18900\r
2022-12-08,18900\r
2022-12-10,17200\r
2022-12-17,17700\r
2022-12-18,17700\r
2022-12-25,12500\r
2022-12-27,12500\r
2022-12-28,12500\r
2022-12-30,12500\r
2023-01-04,15100\r
2023-01-06,15100\r
2023-01-09,17900\r
2023-01-12,17900\r
2023-01-14,17900\r
2023-01-19,18600\r
2023-01-21,17000\r
2023-01-22,17000\r
2023-01-24,17000\r
2023-01-26,17000\r
2023-01-27,17000\r
2023-01-29,18400\r
2023-01-31,17400\r
2023-02-01,17400\r
2023-02-03,20300\r
2023-02-05,20300\r
2023-02-06,20300\r
2023-02-08,17400\r
2023-02-10,19700\r
2023-02-11,19700\r
2023-02-13,18100\r
2023-02-15,18900\r
2023-02-16,18900\r
2023-02-18,18700\r
2023-02-20,22200\r
2023-02-21,22200\r
2023-02-26,21700\r
2023-03-05,22200\r
2023-03-07,22200\r
2023-03-10,22200\r
2023-03-12,22200\r
2023-03-13,22200\r
2023-03-30,20300\r
2023-04-01,19900\r
2023-04-02,19900\r
2023-04-06,19900\r
2023-04-07,19900\r
2023-04-24,21700\r
2023-04-26,21700\r
2023-04-29,22000\r
2023-05-02,22000\r
2023-05-04,21800\r
2023-05-24,22100\r
2023-05-26,22100\r
2023-05-27,22100\r
2023-05-31,23700\r
2023-06-01,23700\r
2023-06-03,23700\r
2023-06-13,25800\r
2023-06-15,25800\r
2023-06-16,25800\r
2023-06-18,27000\r
2023-06-20,27000\r
2023-06-21,27000\r
2023-06-23,24500\r
2023-06-25,25500\r
2023-06-26,25500\r
2023-06-28,24800\r
2023-06-30,15300\r
2023-07-03,23800\r
2023-07-05,23800\r
2023-07-06,23800\r
2023-07-08,24900\r
2023-07-10,24900\r
2023-07-11,24900\r
2023-07-13,23800\r
2023-07-15,25100\r
2023-07-16,25100\r
2023-07-18,25100\r
2023-07-20,23400\r
2023-07-21,23400\r
2023-07-23,23500\r
2023-07-25,20800\r
2023-07-26,20800\r
2023-07-28,20800\r
2023-07-30,20800\r
2023-07-31,20800\r
2023-08-02,21500\r
2023-08-04,20000\r
2023-08-05,20000\r
2023-08-07,20400\r
2023-08-09,20400\r
2023-08-10,20400\r
2023-08-12,19300\r
2023-08-14,19700\r
2023-08-15,19700\r
2023-08-17,19700\r
2023-08-19,19700\r
2023-08-22,20100\r
2023-08-24,17600\r
2023-08-25,17600\r
2023-08-29,17600\r
`;export{r as default};
