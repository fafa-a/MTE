const n=`date,value\r
2017-01-19,96500\r
2017-01-26,108000\r
2017-02-15,114800\r
2017-02-18,105100\r
2017-02-25,119900\r
2017-03-27,128700\r
2017-04-09,118900\r
2017-04-19,114000\r
2017-05-16,126200\r
2017-05-26,110800\r
2017-06-15,119100\r
2017-06-18,112500\r
2017-08-02,106200\r
2017-08-14,100700\r
2017-08-22,103600\r
2017-08-24,101800\r
2017-08-27,101000\r
2017-08-29,96500\r
2017-09-18,87100\r
2017-09-21,83400\r
2017-10-13,88400\r
2017-10-16,89300\r
2017-10-28,92100\r
2017-10-31,89500\r
2017-11-07,98700\r
2018-02-08,114700\r
2018-02-10,113800\r
2018-02-25,127100\r
2018-03-20,123900\r
2018-04-19,118400\r
2018-04-21,122100\r
2018-04-24,111200\r
2018-05-04,124000\r
2018-05-06,128400\r
2018-05-16,118100\r
2018-05-19,114500\r
2018-05-21,114300\r
2018-06-20,118800\r
2018-06-23,120500\r
2018-06-25,118000\r
2018-06-28,122100\r
2018-07-03,118100\r
2018-07-15,120000\r
2018-07-25,122700\r
2018-07-28,118600\r
2018-08-04,120600\r
2018-08-07,112500\r
2018-08-12,108700\r
2018-08-19,107300\r
2018-08-22,104400\r
2018-09-01,95800\r
2018-09-08,99600\r
2018-09-11,98000\r
2018-09-16,97100\r
2018-09-26,92100\r
2018-09-28,96400\r
2018-10-06,95300\r
2018-10-08,95700\r
2018-10-18,99300\r
2018-10-21,97600\r
2018-10-23,97700\r
2018-12-10,107700\r
2019-02-13,114500\r
2019-02-15,111500\r
2019-02-20,118400\r
2019-02-23,112600\r
2019-02-25,112500\r
2019-03-22,109800\r
2019-03-30,105400\r
2019-04-11,122000\r
2019-04-19,116400\r
2019-05-06,115400\r
2019-05-14,115700\r
2019-06-30,109000\r
2019-07-05,108000\r
2019-07-23,92200\r
2019-07-25,83000\r
2019-08-22,54900\r
2019-09-03,38500\r
2019-09-06,39200\r
2019-09-13,37200\r
2019-09-16,32100\r
2019-09-18,35300\r
2019-09-21,34100\r
2019-10-11,43300\r
2019-11-22,67300\r
2019-12-02,69000\r
2019-12-05,72200\r
2020-01-06,79700\r
2020-01-16,86100\r
2020-01-19,85500\r
2020-01-21,91300\r
2020-01-24,86900\r
2020-02-15,96600\r
2020-03-19,113900\r
2020-03-24,100600\r
2020-03-26,118000\r
2020-03-31,109400\r
2020-04-05,116900\r
2020-04-10,114900\r
2020-04-15,123800\r
2020-05-15,117500\r
2020-05-18,107500\r
2020-05-20,118600\r
2020-05-25,114300\r
2020-05-28,114700\r
2020-05-30,122100\r
2020-06-02,115300\r
2020-06-24,116400\r
2020-07-07,109400\r
2020-07-09,118000\r
2020-07-14,120100\r
2020-07-19,119000\r
2020-07-22,118700\r
2020-07-24,118100\r
2020-07-29,111900\r
2020-08-06,106300\r
2020-08-08,103100\r
2020-09-07,82900\r
2020-09-10,79600\r
2020-09-12,90400\r
2020-09-15,79300\r
2020-09-17,85000\r
2020-11-14,82800\r
2020-11-19,86800\r
2020-11-21,89900\r
2020-11-29,85100\r
2021-02-24,124700\r
2021-02-27,121700\r
2021-03-01,122400\r
2021-03-06,119600\r
2021-03-09,120800\r
2021-03-24,122700\r
2021-03-29,118300\r
2021-03-31,121000\r
2021-04-03,122100\r
2021-04-08,120000\r
2021-04-23,118900\r
2021-04-25,119800\r
2021-05-03,117800\r
2021-05-28,118400\r
2021-06-14,120200\r
2021-07-19,125000\r
2021-07-22,124000\r
2021-08-26,116900\r
2021-09-02,116100\r
2021-09-07,114000\r
2021-09-22,107800\r
2021-10-15,108800\r
2021-10-22,108600\r
2021-10-27,109200\r
2021-11-06,109400\r
2021-11-09,104900\r
2021-11-29,109900\r
2021-12-09,108300\r
2022-01-05,119600\r
2022-01-20,117000\r
2022-02-09,116600\r
2022-02-12,117500\r
2022-03-24,120800\r
2022-03-26,121100\r
2022-04-15,119100\r
2022-05-03,128300\r
2022-05-08,116900\r
2022-05-10,122900\r
2022-05-13,112800\r
2022-05-18,114600\r
2022-05-28,109600\r
2022-06-02,112600\r
2022-06-12,99900\r
2022-06-17,101700\r
2022-06-19,102900\r
2022-06-29,100800\r
2022-07-02,96000\r
2022-07-04,98200\r
2022-07-12,96100\r
2022-07-14,97000\r
2022-07-17,92100\r
2022-07-19,92600\r
2022-08-03,80800\r
2022-08-06,74900\r
2022-08-08,72000\r
2022-08-11,66200\r
2022-08-13,62800\r
2022-08-18,62500\r
2022-08-31,57500\r
2022-09-20,54600\r
2022-09-22,53300\r
2022-10-20,64400\r
2022-10-27,62400\r
2022-12-16,84600\r
2023-01-15,97000\r
2023-02-07,107900\r
2023-02-09,106000\r
2023-02-14,107300\r
2023-02-27,111400\r
2023-03-01,114000\r
2023-03-04,111700\r
2023-04-05,122200\r
2023-04-20,124200\r
2023-05-03,110700\r
2023-05-28,109800\r
2023-06-02,116600\r
2023-06-07,114100\r
2023-06-14,110100\r
2023-06-24,104800\r
2023-06-27,106100\r
2023-07-07,92100\r
2023-07-22,99400\r
2023-08-08,90700\r
2023-08-21,73900\r
2023-08-23,86200\r
2023-09-05,80700\r
2023-09-07,78200\r
2023-09-10,78300\r
`;export{n as default};
