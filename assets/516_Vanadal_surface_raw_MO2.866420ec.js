const r=`date,value\r
2017-02-19,8400\r
2017-02-22,8400\r
2017-02-26,8400\r
2017-03-01,8400\r
2017-03-11,7900\r
2017-03-14,7900\r
2017-04-10,10800\r
2017-04-17,10800\r
2017-04-20,11700\r
2017-04-23,11400\r
2017-06-19,10100\r
2017-06-22,10100\r
2017-06-26,10100\r
2017-06-29,10100\r
2017-07-04,10300\r
2017-07-06,10300\r
2017-07-07,10300\r
2017-07-12,10300\r
2017-07-14,10300\r
2017-07-17,9300\r
2017-07-19,9300\r
2017-07-21,9300\r
2017-07-22,9300\r
2017-07-24,9300\r
2017-07-29,10700\r
2017-07-31,10700\r
2017-08-03,10700\r
2017-08-05,10700\r
2017-08-06,10700\r
2017-08-08,10900\r
2017-08-13,10900\r
2017-08-15,10900\r
2017-08-18,12600\r
2017-08-20,12600\r
2017-08-21,12600\r
2017-08-23,10700\r
2017-08-25,12500\r
2017-08-26,12500\r
2017-08-30,10600\r
2017-09-02,10600\r
2017-09-04,9100\r
2017-09-05,9100\r
2017-09-07,11000\r
2017-09-10,11000\r
2017-09-12,11000\r
2017-09-14,10600\r
2017-09-17,10600\r
2017-09-20,9500\r
2017-09-22,9500\r
2017-09-27,10200\r
2017-10-04,9300\r
2017-10-05,9300\r
2017-10-07,9600\r
2017-10-09,8900\r
2017-10-10,8900\r
2017-10-12,9000\r
2017-10-14,9000\r
2017-10-15,9000\r
2017-10-17,8500\r
2017-10-19,8700\r
2017-10-20,8700\r
2017-10-22,7500\r
2017-10-24,8400\r
2017-10-25,8400\r
2017-10-27,7500\r
2017-10-29,7700\r
2017-10-30,7700\r
2017-11-01,7600\r
2017-11-03,8700\r
2017-11-06,8700\r
2017-11-09,8600\r
2017-11-16,7900\r
2017-11-18,7900\r
2017-11-19,7900\r
2017-11-21,8600\r
2017-11-23,8600\r
2017-11-26,8100\r
2017-11-28,8800\r
2017-11-29,8800\r
2017-12-01,8300\r
2017-12-03,8400\r
2017-12-06,8400\r
2018-02-04,10200\r
2018-02-07,10200\r
2018-02-09,11100\r
2018-02-11,11100\r
2018-02-12,11100\r
2018-02-14,10400\r
2018-02-16,10500\r
2018-02-19,10500\r
2018-02-21,10400\r
2018-02-24,10400\r
2018-03-26,10700\r
2018-03-31,9400\r
2018-04-05,10400\r
2018-04-10,12000\r
2018-04-15,12000\r
2018-04-17,10900\r
2018-04-18,10900\r
2018-04-20,11000\r
2018-04-22,10600\r
2018-04-25,13100\r
2018-04-27,13100\r
2018-04-28,13100\r
2018-04-30,13100\r
2018-05-03,12500\r
2018-05-05,12500\r
2018-05-20,12100\r
2018-05-25,13200\r
2018-06-01,12300\r
2018-06-02,12300\r
2018-06-09,12000\r
2018-06-14,12000\r
2018-06-16,12000\r
2018-06-17,12000\r
2018-06-19,12300\r
2018-06-21,11000\r
2018-06-22,11000\r
2018-06-24,11000\r
2018-06-26,11000\r
2018-06-27,11000\r
2018-06-29,11000\r
2018-07-04,12400\r
2018-07-06,12400\r
2018-07-07,12400\r
2018-07-09,12800\r
2018-07-11,12800\r
2018-07-12,12800\r
2018-07-14,11700\r
2018-07-17,12100\r
2018-07-19,11000\r
2018-07-21,12300\r
2018-07-22,12300\r
2018-07-24,11600\r
2018-07-26,12400\r
2018-07-27,12400\r
2018-07-29,10700\r
2018-07-31,12200\r
2018-08-01,12200\r
2018-08-03,12200\r
2018-08-05,12900\r
2018-08-06,12900\r
2018-08-08,12900\r
2018-08-10,12700\r
2018-08-11,12700\r
2018-08-13,12700\r
2018-08-28,12700\r
2018-08-30,12700\r
2018-08-31,12700\r
2018-09-02,12700\r
2018-09-04,11000\r
2018-09-05,11000\r
2018-09-07,11200\r
2018-09-22,11900\r
2018-09-24,11900\r
2018-09-25,11900\r
2018-09-27,13700\r
2018-09-29,13700\r
2018-10-02,11500\r
2018-10-04,12500\r
2018-10-05,12500\r
2018-10-09,10900\r
2018-10-12,11000\r
2018-10-14,10200\r
2018-10-19,10200\r
2018-10-20,10200\r
2018-10-22,10300\r
2018-10-24,9500\r
2018-10-25,9500\r
2018-10-30,9500\r
2019-01-25,3300\r
2019-01-27,5700\r
2019-01-28,5700\r
2019-01-30,5800\r
2019-02-04,2600\r
2019-02-06,2600\r
2019-02-09,2600\r
2019-02-11,8000\r
2019-02-12,8000\r
2019-02-14,3700\r
2019-02-16,3700\r
2019-02-17,3700\r
2019-02-19,3700\r
2019-02-21,3200\r
2019-02-22,3200\r
2019-02-27,3200\r
2019-03-01,4700\r
2019-03-03,3500\r
2019-03-08,3500\r
2019-03-11,6500\r
2019-03-13,6500\r
2019-03-16,5300\r
2019-03-18,6500\r
2019-03-19,6500\r
2019-03-21,6200\r
2019-03-23,6200\r
2019-03-24,6200\r
2019-03-26,6200\r
2019-03-28,7600\r
2019-03-29,7600\r
2019-03-31,6500\r
2019-04-02,7400\r
2019-04-05,6800\r
2019-04-07,7400\r
2019-04-08,7400\r
2019-04-13,7400\r
2019-04-15,6200\r
2019-04-17,6900\r
2019-04-18,6900\r
2019-04-20,6900\r
2019-04-22,5100\r
2019-04-27,5100\r
2019-04-30,8100\r
2019-05-02,8000\r
2019-05-05,8000\r
2019-05-07,8000\r
2019-05-10,9700\r
2019-05-12,9700\r
2019-05-13,9700\r
2019-05-15,9700\r
2019-05-23,9700\r
2019-06-04,11200\r
2019-06-06,11200\r
2019-06-07,11200\r
2019-06-11,11200\r
2019-06-12,11200\r
2019-06-19,9900\r
2019-06-22,9900\r
2019-06-24,10100\r
2019-06-26,10100\r
2019-06-27,10100\r
2019-06-29,9200\r
2019-07-01,9200\r
2019-07-02,9200\r
2019-07-04,9200\r
2019-07-06,10000\r
2019-07-07,10000\r
2019-07-11,9600\r
2019-07-12,9600\r
2019-07-14,10100\r
2019-07-19,9300\r
2019-07-21,9300\r
2019-07-22,9300\r
2019-07-24,8600\r
2019-07-26,8600\r
2019-07-29,8500\r
2019-07-31,8100\r
2019-08-03,8800\r
2019-08-05,7800\r
2019-08-06,7800\r
2019-08-08,8400\r
2019-08-10,6400\r
2019-08-11,6400\r
2019-08-15,8300\r
2019-08-16,8300\r
2019-08-18,8300\r
2019-08-20,6000\r
2019-08-21,6000\r
2019-08-23,8000\r
2019-08-25,6300\r
2019-08-26,6300\r
2019-08-30,6300\r
2019-08-31,6300\r
2019-09-02,6300\r
2019-09-04,6300\r
2019-09-05,6300\r
2019-09-07,7200\r
2019-09-09,6000\r
2019-09-12,6300\r
2019-09-14,6300\r
2019-09-15,6300\r
2019-09-17,5200\r
2019-09-19,5200\r
2019-09-25,5300\r
2019-09-27,4400\r
2019-09-29,4800\r
2019-09-30,4800\r
2019-10-02,3800\r
2019-10-05,4100\r
2019-10-07,2400\r
2019-10-10,2400\r
2019-10-19,1900\r
2019-10-27,2800\r
2019-10-29,2800\r
2019-10-30,2800\r
2019-11-06,3100\r
2019-11-08,3100\r
2019-11-09,3100\r
2019-11-13,1000\r
2019-11-16,1800\r
2019-11-26,1200\r
2019-11-28,1200\r
2019-11-29,1200\r
2020-02-04,1300\r
2020-02-07,1300\r
2020-02-09,1300\r
2020-02-11,1300\r
2020-02-12,1300\r
2020-02-14,200\r
2020-02-19,1100\r
2020-02-22,500\r
2020-02-24,2800\r
2020-02-26,2800\r
2020-03-03,2800\r
2020-03-07,2800\r
2020-03-08,2800\r
2020-03-10,2800\r
2020-04-04,5500\r
2020-04-06,5500\r
2020-04-07,5500\r
2020-04-09,7800\r
2020-04-11,7800\r
2020-04-14,7100\r
2020-04-24,7900\r
2020-04-26,8600\r
2020-04-29,8600\r
2020-05-04,8700\r
2020-05-06,8700\r
2020-05-09,8700\r
2020-05-14,8400\r
2020-05-19,8400\r
2020-05-24,10200\r
2020-05-26,10200\r
2020-05-31,10200\r
2020-06-01,10200\r
2020-06-03,10500\r
2020-06-05,10500\r
2020-06-06,10500\r
2020-06-08,10500\r
2020-06-10,8900\r
2020-06-15,8900\r
2020-06-23,10200\r
2020-06-25,10200\r
2020-06-26,10200\r
2020-06-28,11900\r
2020-06-30,11900\r
2020-07-01,11900\r
2020-07-03,9000\r
2020-07-05,9000\r
2020-07-06,9000\r
2020-07-08,10100\r
2020-07-10,9100\r
2020-07-11,9100\r
2020-07-15,10300\r
2020-07-16,10300\r
2020-07-18,10300\r
2020-07-20,9300\r
2020-07-21,9300\r
2020-07-23,12200\r
2020-07-25,12000\r
2020-07-26,12000\r
2020-07-30,12000\r
2020-07-31,12000\r
2020-08-02,12000\r
2020-08-04,12000\r
2020-08-05,12000\r
2020-08-07,8600\r
2020-08-09,8600\r
2020-08-10,8600\r
2020-08-12,8600\r
2020-08-14,8600\r
2020-08-15,8600\r
2020-08-17,8600\r
2020-08-19,6600\r
2020-08-20,6600\r
2020-08-22,7400\r
2020-08-24,4900\r
2020-08-25,4900\r
2020-08-27,6500\r
2020-09-01,6500\r
2020-09-03,6500\r
2020-09-04,6500\r
2020-09-06,3900\r
2020-09-08,4700\r
2020-09-09,4700\r
2020-09-13,3100\r
2020-09-14,3100\r
2020-09-16,4400\r
2020-09-18,4400\r
2020-09-21,4400\r
2020-09-23,4400\r
2020-09-26,4900\r
2020-09-28,4900\r
2020-09-29,4900\r
2020-10-01,4900\r
2020-10-03,4600\r
2020-10-08,4600\r
2020-10-11,4600\r
2020-11-05,4500\r
2020-11-07,4500\r
2020-11-10,7600\r
2020-11-12,7600\r
2020-11-17,7600\r
2020-11-18,7600\r
2020-11-20,5300\r
2020-11-22,7600\r
2020-11-23,7600\r
2020-11-25,6900\r
2020-11-27,8900\r
2020-11-30,8900\r
2020-12-02,8900\r
2020-12-03,8900\r
2021-01-24,8200\r
2021-01-26,7300\r
2021-01-29,7300\r
2021-01-31,7300\r
2021-02-03,7300\r
2021-02-08,8300\r
2021-02-10,8300\r
2021-02-11,8300\r
2021-02-15,8300\r
2021-02-18,8300\r
2021-02-23,8600\r
2021-02-25,8600\r
2021-02-26,8600\r
2021-02-28,10000\r
2021-03-02,10000\r
2021-03-05,8600\r
2021-03-07,9100\r
2021-03-08,9100\r
2021-03-10,9100\r
2021-03-15,8500\r
2021-03-17,8500\r
2021-03-20,8500\r
2021-03-22,8500\r
2021-03-23,8500\r
2021-03-25,8500\r
2021-03-30,9800\r
2021-04-01,9800\r
2021-04-02,9800\r
2021-04-06,9800\r
2021-04-09,9800\r
2021-04-19,11400\r
2021-04-24,11400\r
2021-04-26,11400\r
2021-05-04,10800\r
2021-05-06,10800\r
2021-05-07,10800\r
2021-05-09,11800\r
2021-05-11,11800\r
2021-05-12,11800\r
2021-05-14,11800\r
2021-05-19,11500\r
2021-06-08,12600\r
2021-06-10,12600\r
2021-06-11,12600\r
2021-06-13,13000\r
2021-06-15,13000\r
2021-06-16,13000\r
2021-06-18,12500\r
2021-06-25,12800\r
2021-06-26,12800\r
2021-06-28,12800\r
2021-07-03,10800\r
2021-07-05,10800\r
2021-07-10,10800\r
2021-07-11,10800\r
2021-07-13,10800\r
2021-07-15,9800\r
2021-07-16,9800\r
2021-07-18,11000\r
2021-07-20,11000\r
2021-07-21,11000\r
2021-07-23,10900\r
2021-07-25,12400\r
2021-07-28,11400\r
2021-07-30,12500\r
2021-08-02,11400\r
2021-08-05,11600\r
2021-08-09,9200\r
2021-08-10,9200\r
2021-08-12,9200\r
2021-08-22,10800\r
2021-08-27,10800\r
2021-08-29,10800\r
2021-08-30,10800\r
2021-09-01,8700\r
2021-09-06,8000\r
2021-09-08,8300\r
2021-09-11,7900\r
2021-09-13,8500\r
2021-09-18,8100\r
2021-09-19,8100\r
2021-09-21,8600\r
2021-09-23,8100\r
2021-09-24,8100\r
2021-09-28,8100\r
2021-09-29,8100\r
2021-10-01,8400\r
2021-10-06,8100\r
2021-10-11,7900\r
2021-10-13,9000\r
2021-10-14,9000\r
2021-10-16,7900\r
2021-10-18,9200\r
2021-10-23,7700\r
2021-10-24,7700\r
2021-10-26,7700\r
2021-11-05,8000\r
2021-11-20,7700\r
2021-11-23,7700\r
2021-11-30,10300\r
2022-01-24,9800\r
2022-01-26,9600\r
2022-01-27,9600\r
2022-01-29,10800\r
2022-02-01,10800\r
2022-02-05,8900\r
2022-02-06,8900\r
2022-02-08,8900\r
2022-02-10,7900\r
2022-02-11,7900\r
2022-02-13,7900\r
2022-02-15,7900\r
2022-02-18,9500\r
2022-02-20,7500\r
2022-02-21,7500\r
2022-02-23,8900\r
2022-02-26,8900\r
2022-02-28,7800\r
2022-03-02,8900\r
2022-03-03,8900\r
2022-03-07,8000\r
2022-03-08,8000\r
2022-03-25,11600\r
2022-03-27,11600\r
2022-03-28,11600\r
2022-04-01,11600\r
2022-04-04,11600\r
2022-04-09,10500\r
2022-04-14,10700\r
2022-04-16,10700\r
2022-04-17,10700\r
2022-04-19,10400\r
2022-04-26,11400\r
2022-04-27,11400\r
2022-04-29,11900\r
2022-05-01,11400\r
2022-05-02,11400\r
2022-05-04,11400\r
2022-05-07,11400\r
2022-05-09,13200\r
2022-05-11,13200\r
2022-05-12,13200\r
2022-05-14,13300\r
2022-05-16,13300\r
2022-05-17,13300\r
2022-05-19,12600\r
2022-05-21,13000\r
2022-05-22,13000\r
2022-05-24,12300\r
2022-05-27,13400\r
2022-05-29,13400\r
2022-05-31,12700\r
2022-06-01,12700\r
2022-07-03,12900\r
2022-07-05,12900\r
2022-07-06,12900\r
2022-07-08,13100\r
2022-07-10,13100\r
2022-07-11,13100\r
2022-07-13,12600\r
2022-07-15,13300\r
2022-07-16,13300\r
2022-07-18,13000\r
2022-07-20,14700\r
2022-07-21,14700\r
2022-07-23,14700\r
2022-07-25,14400\r
2022-07-26,14400\r
2022-07-28,14400\r
2022-08-02,10200\r
2022-08-04,10200\r
2022-08-05,10200\r
2022-08-07,10500\r
2022-08-09,10500\r
2022-08-10,10500\r
2022-08-12,10100\r
2022-08-19,10600\r
2022-08-20,10600\r
2022-08-22,12400\r
2022-08-24,12400\r
2022-08-25,12400\r
2022-08-27,12400\r
2022-08-29,12400\r
2022-09-01,12400\r
2022-09-03,9700\r
2022-09-04,9700\r
2022-09-06,10800\r
2022-09-08,10800\r
2022-09-09,10800\r
2022-09-11,10800\r
2022-09-16,10400\r
2022-09-18,8100\r
2022-09-19,8100\r
2022-09-21,8100\r
2022-09-26,8800\r
2022-09-28,8500\r
2022-10-01,8700\r
2022-10-03,8700\r
2022-10-04,8700\r
2022-10-06,8700\r
2022-10-11,9800\r
2022-10-16,9800\r
2022-11-05,8700\r
2022-11-10,8700\r
2022-11-20,7500\r
2022-11-22,7500\r
2022-11-25,8200\r
2022-11-30,7500\r
2022-12-02,7800\r
2022-12-05,7800\r
2023-01-29,8900\r
2023-01-31,8300\r
2023-02-01,8300\r
2023-02-03,9100\r
2023-02-05,9100\r
2023-02-06,9100\r
2023-02-08,8100\r
2023-02-10,8600\r
2023-02-11,8600\r
2023-02-13,8200\r
2023-02-15,9300\r
2023-02-16,9300\r
2023-02-18,8200\r
2023-02-20,9900\r
2023-02-21,9900\r
2023-02-26,8500\r
2023-03-05,9100\r
2023-03-07,9100\r
2023-03-10,10900\r
2023-03-12,10900\r
2023-03-13,10900\r
2023-03-18,10800\r
2023-03-20,10800\r
2023-03-25,9100\r
2023-03-27,9100\r
2023-03-28,9100\r
2023-03-30,9100\r
2023-04-01,9100\r
2023-04-02,9100\r
2023-04-14,10600\r
2023-04-16,10600\r
2023-04-17,10600\r
2023-04-19,12000\r
2023-04-24,10800\r
2023-04-26,12000\r
2023-04-29,11100\r
2023-05-02,11400\r
2023-05-04,11400\r
2023-05-06,11000\r
2023-05-24,12900\r
2023-05-26,12900\r
2023-05-27,12900\r
2023-05-31,13100\r
2023-06-01,13100\r
2023-06-03,13500\r
2023-06-05,13100\r
2023-06-08,13100\r
2023-06-10,13100\r
2023-06-13,13100\r
2023-06-18,11600\r
2023-06-20,11600\r
2023-06-21,11600\r
2023-06-23,11800\r
2023-06-25,11800\r
2023-06-26,11800\r
2023-06-28,11800\r
2023-07-03,11700\r
2023-07-05,11700\r
2023-07-06,11700\r
2023-07-08,12200\r
2023-07-10,12200\r
2023-07-11,12200\r
2023-07-13,11600\r
2023-07-15,12000\r
2023-07-16,12000\r
2023-07-18,11400\r
2023-07-20,12200\r
2023-07-21,12200\r
2023-07-23,11100\r
2023-07-25,12700\r
2023-07-26,12700\r
2023-07-28,12700\r
2023-07-30,10500\r
2023-07-31,10500\r
2023-08-02,10600\r
2023-08-04,9000\r
2023-08-05,9000\r
2023-08-07,10500\r
2023-08-09,10500\r
2023-08-10,10500\r
2023-08-12,9400\r
2023-08-14,10300\r
2023-08-15,10300\r
2023-08-17,10300\r
2023-08-19,9300\r
2023-08-22,9400\r
2023-08-24,8800\r
2023-08-25,8800\r
2023-08-29,8800\r
2023-08-30,7900\r
2023-09-01,7900\r
2023-09-06,9500\r
2023-09-08,9500\r
2023-09-11,9900\r
2023-09-13,9900\r
2023-09-19,9400\r
2023-09-26,9200\r
2023-09-28,9200\r
2023-09-29,9200\r
2023-10-01,9600\r
2023-10-03,9600\r
2023-10-04,9600\r
2023-10-06,8900\r
2023-10-08,9300\r
2023-10-09,9300\r
2023-10-11,9100\r
2023-10-13,9800\r
2023-10-31,7200\r
2023-11-05,7200\r
2023-11-07,7200\r
2023-11-08,7200\r
2023-11-25,10100\r
2023-11-27,10100\r
`;export{r as default};
