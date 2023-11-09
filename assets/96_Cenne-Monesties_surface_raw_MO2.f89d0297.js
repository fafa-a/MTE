const n=`date,value\r
2017-01-03,5700\r
2017-01-13,5700\r
2017-02-22,5500\r
2017-02-25,6000\r
2017-03-07,5300\r
2017-03-14,9800\r
2017-03-17,11500\r
2017-03-27,9800\r
2017-04-03,8700\r
2017-04-06,8700\r
2017-04-23,8000\r
2017-05-03,8000\r
2017-05-13,7700\r
2017-05-16,10600\r
2017-05-23,10600\r
2017-05-26,11800\r
2017-06-02,11800\r
2017-06-05,11800\r
2017-06-12,6400\r
2017-06-22,6200\r
2017-06-25,10500\r
2017-07-02,10700\r
2017-07-05,10400\r
2017-07-07,9700\r
2017-07-10,9700\r
2017-07-12,9700\r
2017-07-17,8500\r
2017-07-22,8100\r
2017-07-27,8500\r
2017-08-04,9500\r
2017-08-06,9500\r
2017-08-11,8600\r
2017-08-14,10300\r
2017-08-19,10300\r
2017-08-21,10700\r
2017-08-24,10200\r
2017-08-26,10300\r
2017-08-29,8600\r
2017-09-03,10800\r
2017-09-05,6300\r
2017-09-08,6300\r
2017-09-10,5400\r
2017-09-13,8000\r
2017-09-20,6900\r
2017-09-23,6700\r
2017-09-28,8300\r
2017-10-03,8100\r
2017-10-05,5600\r
2017-10-08,6200\r
2017-10-10,5900\r
2017-10-13,6000\r
2017-10-15,6000\r
2017-10-18,5900\r
2017-10-25,5600\r
2017-10-28,4100\r
2017-10-30,5500\r
2017-11-07,4300\r
2017-11-14,4100\r
2017-11-17,5200\r
2017-11-19,6500\r
2017-11-22,6500\r
2017-11-24,6500\r
2017-11-27,6500\r
2017-11-29,5400\r
2017-12-09,5100\r
2017-12-14,5700\r
2017-12-19,5700\r
2017-12-24,6700\r
2017-12-27,6700\r
2018-01-01,6800\r
2018-01-03,6800\r
2018-02-12,7600\r
2018-02-25,7200\r
2018-02-27,7200\r
2018-03-02,8300\r
2018-03-14,6700\r
2018-03-19,8700\r
2018-03-22,8700\r
2018-04-01,7700\r
2018-04-18,8800\r
2018-04-21,10100\r
2018-04-23,10100\r
2018-04-26,9400\r
2018-05-06,9600\r
2018-05-11,9800\r
2018-05-18,9800\r
2018-05-21,9800\r
2018-06-20,9500\r
2018-06-22,9500\r
2018-06-25,10400\r
2018-06-27,10400\r
2018-07-02,9700\r
2018-07-07,9400\r
2018-07-10,8000\r
2018-07-12,8600\r
2018-07-15,9100\r
2018-07-17,9100\r
2018-07-20,7700\r
2018-07-22,9400\r
2018-07-25,9700\r
2018-07-27,10800\r
2018-07-30,9600\r
2018-08-01,10000\r
2018-08-04,9400\r
2018-08-06,10000\r
2018-08-11,7700\r
2018-08-16,7800\r
2018-08-19,9100\r
2018-08-21,7800\r
2018-08-26,9200\r
2018-08-31,7200\r
2018-09-03,6500\r
2018-09-08,6500\r
2018-09-10,6500\r
2018-09-13,6500\r
2018-09-20,7100\r
2018-09-23,7500\r
2018-09-25,6700\r
2018-09-28,7300\r
2018-09-30,6700\r
2018-10-03,6500\r
2018-10-05,6700\r
2018-10-23,4000\r
2018-10-25,5700\r
2018-10-30,5700\r
2018-11-04,5100\r
2018-11-12,4800\r
2018-11-27,5900\r
2018-11-29,5900\r
2018-12-19,3100\r
2018-12-27,5300\r
2018-12-29,5300\r
2019-01-03,5700\r
2019-01-11,5700\r
2019-01-16,5700\r
2019-02-12,4600\r
2019-02-15,4600\r
2019-02-17,4600\r
2019-02-20,5200\r
2019-02-22,4400\r
2019-02-25,5300\r
2019-02-27,4700\r
2019-03-12,7000\r
2019-03-22,7500\r
2019-03-24,6600\r
2019-03-27,6900\r
2019-03-29,6700\r
2019-04-01,6700\r
2019-04-08,7800\r
2019-04-13,7700\r
2019-05-01,6800\r
2019-05-06,9400\r
2019-05-11,9400\r
2019-05-13,7600\r
2019-05-16,7600\r
2019-05-23,8300\r
2019-05-31,8200\r
2019-06-02,9600\r
2019-06-12,9700\r
2019-06-27,6000\r
2019-06-30,12100\r
2019-07-02,12100\r
2019-07-05,10900\r
2019-07-07,10900\r
2019-07-10,10900\r
2019-07-12,12100\r
2019-07-15,12200\r
2019-07-17,8500\r
2019-07-22,9700\r
2019-07-25,7900\r
2019-08-01,10900\r
2019-08-04,7800\r
2019-08-09,8900\r
2019-08-11,7800\r
2019-08-14,8600\r
2019-08-16,8000\r
2019-08-21,8600\r
2019-08-24,8600\r
2019-08-26,7000\r
2019-08-29,7000\r
2019-08-31,4900\r
2019-09-03,2400\r
2019-09-05,2400\r
2019-09-13,300\r
2019-09-15,400\r
2019-09-20,300\r
2019-10-05,2200\r
2019-10-08,200\r
2019-10-13,200\r
2019-10-30,200\r
2019-11-09,200\r
2019-11-19,1300\r
2019-11-27,1600\r
2019-12-02,1600\r
2020-01-01,1300\r
2020-01-06,1800\r
2020-01-11,1300\r
2020-01-16,1300\r
2020-01-18,1900\r
2020-02-05,100\r
2020-02-07,100\r
2020-02-15,100\r
2020-02-20,100\r
2020-03-11,3200\r
2020-03-13,3200\r
2020-10-24,2200\r
2020-11-01,2200\r
2020-11-06,2200\r
2020-11-08,2200\r
2020-11-11,1000\r
2020-11-18,2000\r
2020-11-21,1500\r
2020-11-23,1500\r
2020-11-26,1500\r
2021-02-11,2600\r
2021-02-14,2600\r
2021-02-19,2600\r
2021-03-23,6600\r
2021-03-26,6100\r
2021-03-28,8200\r
2021-03-31,8200\r
2021-04-02,8200\r
2021-04-05,10400\r
2021-04-07,10400\r
2021-04-15,10500\r
2021-04-17,10500\r
2021-04-20,6800\r
2021-04-22,6800\r
2021-05-20,9000\r
2021-05-25,8600\r
2021-05-27,8300\r
2021-05-30,8300\r
2021-06-09,9900\r
2021-06-11,11200\r
2021-06-14,11200\r
2021-06-16,9900\r
2021-06-19,9900\r
2021-06-21,11400\r
2021-06-26,7500\r
2021-07-01,9600\r
2021-07-09,10600\r
2021-07-19,10500\r
2021-07-21,9500\r
2021-07-26,9500\r
2021-07-29,8300\r
2021-08-05,8700\r
2021-08-10,8400\r
2021-08-13,8400\r
2021-08-18,9500\r
2021-08-20,8500\r
2021-08-23,9100\r
2021-08-25,9100\r
2021-08-28,7700\r
2021-08-30,7800\r
2021-09-04,7300\r
2021-09-07,8700\r
2021-09-12,9000\r
2021-09-14,9000\r
2021-09-17,9000\r
2021-09-22,9200\r
2021-09-24,7000\r
2021-09-29,7000\r
2021-10-12,6000\r
2021-10-14,7300\r
2021-10-17,7300\r
2021-10-24,5500\r
2021-10-27,5300\r
2021-12-16,4900\r
2021-12-18,6000\r
2021-12-21,4600\r
2021-12-23,4600\r
2022-01-12,5000\r
2022-01-15,5400\r
2022-01-17,4000\r
2022-01-22,4700\r
2022-01-25,4500\r
2022-01-27,4600\r
2022-01-30,4400\r
2022-02-01,4400\r
2022-02-06,4100\r
2022-02-09,5000\r
2022-02-26,3900\r
2022-03-01,3900\r
2022-03-03,5500\r
2022-03-08,4900\r
2022-03-26,5400\r
2022-04-05,8200\r
2022-04-10,8100\r
2022-04-15,8100\r
2022-04-17,8200\r
2022-04-27,8200\r
2022-05-17,6800\r
2022-05-20,6800\r
2022-05-22,8300\r
2022-05-27,8300\r
2022-05-30,7800\r
2022-06-01,9400\r
2022-06-04,8700\r
2022-06-06,10000\r
2022-06-11,10000\r
2022-06-14,10400\r
2022-06-16,10400\r
2022-06-19,7400\r
2022-07-11,9800\r
2022-07-14,11100\r
2022-07-16,10000\r
2022-07-19,10600\r
2022-07-21,10000\r
2022-07-24,9700\r
2022-07-26,9600\r
2022-07-29,9800\r
2022-07-31,9600\r
2022-08-03,9900\r
2022-08-05,9100\r
2022-08-08,8600\r
2022-08-10,8800\r
2022-08-13,8400\r
2022-08-15,8700\r
2022-08-20,8500\r
2022-08-23,7100\r
2022-08-28,7100\r
2022-08-30,7800\r
2022-09-02,7600\r
2022-09-04,8700\r
2022-09-12,8600\r
2022-09-19,8600\r
2022-09-22,7100\r
2022-10-02,7600\r
2022-10-04,8100\r
2022-10-07,8100\r
2022-10-09,6400\r
2022-10-12,6400\r
2022-10-22,5900\r
2022-10-24,5900\r
2022-10-27,5900\r
2022-11-01,6200\r
2022-11-06,6000\r
2022-11-08,5800\r
2022-11-11,5800\r
2022-11-13,7200\r
2022-11-16,5700\r
2023-01-10,6300\r
2023-01-12,6300\r
2023-01-20,6300\r
2023-02-04,4700\r
2023-02-06,5500\r
2023-02-09,5500\r
2023-02-11,4600\r
2023-02-14,4600\r
2023-02-16,5100\r
2023-02-19,5000\r
2023-02-21,5000\r
2023-02-26,5700\r
2023-03-01,6500\r
2023-03-03,8500\r
2023-03-13,7100\r
2023-03-16,7500\r
2023-03-28,7600\r
2023-04-05,9600\r
2023-04-07,7700\r
2023-04-15,9200\r
2023-04-17,10200\r
2023-04-20,9300\r
2023-05-02,8700\r
2023-05-27,6300\r
2023-05-30,6300\r
2023-06-04,9200\r
2023-06-11,7700\r
2023-06-16,8000\r
2023-06-24,8000\r
2023-06-26,8000\r
2023-07-09,9400\r
2023-07-11,9400\r
2023-07-14,9400\r
2023-07-16,10000\r
2023-07-19,10000\r
2023-07-21,9700\r
2023-07-26,10500\r
2023-07-29,10900\r
2023-07-31,11100\r
2023-08-03,11100\r
2023-08-05,8600\r
2023-08-08,10300\r
2023-08-10,9700\r
2023-08-13,9300\r
2023-08-15,9300\r
2023-08-18,9100\r
2023-08-20,9100\r
2023-08-23,8200\r
2023-09-04,6800\r
2023-09-07,9000\r
2023-09-14,7700\r
2023-09-19,7500\r
2023-09-24,6700\r
2023-09-27,7900\r
2023-09-29,6900\r
2023-10-02,7400\r
2023-10-04,7000\r
2023-10-07,6400\r
2023-10-12,6200\r
2023-10-27,5400\r
2023-11-06,5400\r
`;export{n as default};
