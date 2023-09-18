const r=`date,value\r
2017-01-03,59200\r
2017-01-13,97800\r
2017-02-22,105700\r
2017-02-25,105700\r
2017-04-23,105300\r
2017-05-03,105300\r
2017-05-23,106600\r
2017-05-26,106600\r
2017-06-02,106600\r
2017-06-12,105100\r
2017-06-15,105100\r
2017-06-22,105100\r
2017-07-07,104600\r
2017-07-10,104600\r
2017-07-12,107200\r
2017-07-17,107700\r
2017-07-22,106400\r
2017-07-27,109300\r
2017-07-30,111200\r
2017-08-04,110800\r
2017-08-06,111000\r
2017-08-14,100300\r
2017-08-21,102800\r
2017-08-24,102800\r
2017-08-26,107700\r
2017-08-29,107700\r
2017-09-03,102200\r
2017-10-05,102100\r
2017-10-08,102100\r
2017-10-10,102100\r
2017-10-13,102100\r
2017-10-15,106900\r
2017-10-25,106000\r
2017-12-24,92200\r
2017-12-27,92200\r
2018-01-23,101700\r
2018-01-28,101900\r
2018-01-31,101900\r
2018-02-02,101900\r
2018-04-18,109800\r
2018-04-21,109800\r
2018-04-23,109800\r
2018-04-26,109800\r
2018-06-22,102800\r
2018-06-25,102800\r
2018-06-27,105400\r
2018-07-02,100200\r
2018-07-07,102800\r
2018-07-12,102000\r
2018-07-20,101500\r
2018-07-22,101500\r
2018-07-27,97400\r
2018-07-30,97400\r
2018-08-01,97400\r
2018-08-04,97400\r
2018-08-06,97400\r
2018-08-11,95800\r
2018-08-16,104800\r
2018-08-19,104800\r
2018-08-21,99400\r
2018-08-26,101900\r
2018-08-31,104900\r
2018-09-03,100200\r
2018-09-05,100200\r
2018-09-10,100200\r
2018-09-13,100200\r
2018-09-18,100200\r
2018-09-20,105200\r
2018-09-23,102000\r
2018-09-25,111400\r
2018-09-28,111400\r
2018-10-03,105900\r
2018-10-05,106400\r
2018-10-13,103500\r
2018-10-25,101300\r
2018-10-30,101500\r
2018-11-04,101500\r
2018-11-09,5500\r
2018-12-29,100300\r
2019-01-03,96600\r
2019-01-06,96600\r
2019-01-11,96600\r
2019-01-16,96600\r
2019-02-17,27700\r
2019-02-20,27700\r
2019-02-22,26000\r
2019-02-25,48800\r
2019-02-27,52600\r
2019-03-24,99900\r
2019-03-27,99900\r
2019-03-29,105800\r
2019-04-01,105800\r
2019-04-08,105800\r
2019-04-13,110200\r
2019-04-18,107900\r
2019-04-28,107900\r
2019-05-01,102700\r
2019-05-13,109800\r
2019-05-16,109800\r
2019-05-23,113800\r
2019-05-26,113800\r
2019-05-31,111900\r
2019-06-02,116500\r
2019-06-12,117000\r
2019-06-17,100100\r
2019-06-22,100100\r
2019-06-27,102300\r
2019-06-30,102300\r
2019-07-02,101900\r
2019-07-05,112800\r
2019-07-07,107900\r
2019-07-10,107900\r
2019-07-12,107900\r
2019-07-15,114600\r
2019-07-17,114600\r
2019-07-20,109600\r
2019-07-22,109600\r
2019-07-25,86000\r
2019-08-01,104400\r
2019-08-04,104400\r
2019-08-06,100200\r
2019-08-09,107200\r
2019-08-11,107200\r
2019-08-14,107200\r
2019-08-16,107200\r
2019-08-21,103000\r
2019-08-26,98700\r
2019-08-29,98700\r
2019-08-31,98700\r
2019-09-03,98700\r
2019-09-05,98700\r
2019-09-15,110100\r
2019-09-18,110100\r
2019-09-20,110100\r
2019-09-30,110300\r
2019-10-03,99700\r
2019-10-08,99700\r
2019-10-10,99700\r
2019-10-13,99700\r
2019-12-29,104100\r
2020-02-07,81300\r
2020-02-12,106700\r
2020-02-15,106700\r
2020-02-20,106700\r
2020-02-22,99900\r
2020-03-08,99200\r
2020-03-18,102700\r
2020-03-21,102700\r
2020-03-28,109100\r
2020-03-31,109100\r
2020-04-02,109100\r
2020-04-05,108400\r
2020-04-07,108400\r
2020-04-10,108400\r
2020-04-12,108400\r
2020-04-15,101600\r
2020-05-07,102200\r
2020-05-17,107300\r
2020-05-20,107300\r
2020-05-22,107300\r
2020-05-25,106800\r
2020-05-27,110400\r
2020-05-30,110400\r
2020-06-01,108900\r
2020-06-14,109300\r
2020-06-21,105800\r
2020-06-24,105800\r
2020-06-26,105800\r
2020-06-29,105800\r
2020-07-01,105800\r
2020-07-04,105800\r
2020-07-06,113400\r
2020-07-09,109200\r
2020-07-11,109200\r
2020-07-14,109200\r
2020-07-16,109200\r
2020-07-19,109200\r
2020-07-21,114100\r
2020-07-26,115900\r
2020-07-29,115900\r
2020-07-31,114300\r
2020-08-05,109700\r
2020-08-08,108100\r
2020-08-10,108100\r
2020-08-15,99100\r
2020-08-20,103200\r
2020-08-23,78900\r
2020-08-25,97200\r
2020-09-02,97200\r
2020-09-04,97300\r
2020-09-12,91700\r
2020-09-14,96400\r
2020-09-17,96400\r
2020-09-29,107100\r
2020-10-07,105300\r
2020-11-18,97000\r
2020-11-21,97000\r
2020-11-23,99400\r
2020-12-06,97200\r
2020-12-13,100500\r
2020-12-28,100500\r
2021-02-11,107400\r
2021-02-14,107400\r
2021-02-19,107400\r
2021-02-21,107400\r
2021-03-23,105700\r
2021-03-26,105700\r
2021-03-28,110200\r
2021-03-31,110200\r
2021-04-05,108500\r
2021-04-07,109400\r
2021-05-27,109900\r
2021-05-30,109900\r
2021-06-01,109900\r
2021-06-16,108300\r
2021-06-26,109600\r
2021-07-01,108900\r
2021-07-11,107400\r
2021-07-19,107400\r
2021-07-21,109700\r
2021-07-26,105300\r
2021-07-29,105300\r
2021-08-05,112800\r
2021-08-10,114900\r
2021-08-13,114900\r
2021-08-15,114900\r
2021-08-18,110200\r
2021-08-20,111100\r
2021-08-23,108400\r
2021-08-25,109400\r
2021-08-28,109400\r
2021-08-30,109400\r
2021-09-04,107000\r
2021-09-07,106200\r
2021-09-12,106200\r
2021-09-14,106200\r
2021-09-24,101100\r
2021-09-29,101100\r
2021-10-14,99700\r
2021-10-17,99700\r
2021-10-19,99700\r
2021-10-24,101700\r
2021-10-27,97500\r
2021-12-03,94100\r
2021-12-11,94100\r
2021-12-18,93200\r
2021-12-21,93200\r
2021-12-23,93200\r
2022-01-27,96000\r
2022-01-30,96000\r
2022-02-01,96000\r
2022-02-06,96000\r
2022-02-26,105300\r
2022-03-01,105300\r
2022-03-06,105300\r
2022-03-08,105300\r
2022-03-23,108600\r
2022-03-26,108600\r
2022-03-28,108600\r
2022-04-17,111500\r
2022-04-22,114200\r
2022-04-27,114200\r
2022-04-30,110700\r
2022-05-02,112000\r
2022-05-07,109400\r
2022-05-12,109500\r
2022-05-17,109900\r
2022-05-20,109900\r
2022-05-22,109900\r
2022-05-27,110000\r
2022-06-01,109100\r
2022-06-04,109100\r
2022-06-06,110100\r
2022-06-11,111500\r
2022-06-14,111500\r
2022-06-16,108000\r
2022-06-19,109700\r
2022-06-21,108600\r
2022-07-11,106300\r
2022-07-14,106300\r
2022-07-16,107800\r
2022-07-19,110200\r
2022-07-21,105800\r
2022-07-24,109200\r
2022-07-26,105200\r
2022-07-31,102800\r
2022-08-03,103600\r
2022-08-05,103600\r
2022-08-08,101100\r
2022-08-10,101100\r
2022-08-25,98000\r
2022-08-28,98000\r
2022-09-04,98100\r
2022-09-07,94100\r
2022-09-09,94100\r
2022-09-12,94100\r
2022-09-19,91200\r
2022-09-22,91200\r
2022-10-04,83800\r
2022-10-07,83800\r
2022-10-09,83800\r
2022-10-12,83800\r
2023-02-11,81900\r
2023-02-14,81900\r
2023-02-16,92000\r
2023-02-19,92000\r
2023-02-26,91800\r
2023-03-28,101300\r
2023-04-05,101300\r
2023-04-07,101300\r
2023-05-27,100500\r
2023-05-30,100500\r
2023-06-04,101900\r
2023-06-06,101900\r
2023-06-16,103000\r
2023-06-19,103000\r
2023-06-21,107000\r
2023-06-24,107000\r
2023-06-26,105900\r
2023-07-11,107100\r
2023-07-14,107100\r
2023-07-16,108600\r
2023-07-19,108600\r
2023-07-21,105700\r
2023-07-26,106800\r
2023-07-31,105000\r
2023-08-05,99300\r
2023-08-08,99300\r
2023-08-10,100600\r
2023-08-13,90600\r
2023-08-15,93800\r
2023-08-23,92500\r
2023-08-25,93600\r
`;export{r as default};
