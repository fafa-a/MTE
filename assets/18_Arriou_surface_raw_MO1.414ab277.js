const r=`date,value\r
2017-01-26,84100\r
2017-02-15,90200\r
2017-02-18,91400\r
2017-02-25,88300\r
2017-03-10,92800\r
2017-03-30,96200\r
2017-04-06,100300\r
2017-04-09,97100\r
2017-04-19,102700\r
2017-04-29,103600\r
2017-05-09,98600\r
2017-05-16,99900\r
2017-05-26,102600\r
2017-06-18,105500\r
2017-07-05,104700\r
2017-07-18,105900\r
2017-08-02,98500\r
2017-08-07,100000\r
2017-08-12,98400\r
2017-08-14,101200\r
2017-08-22,97600\r
2017-09-01,101300\r
2017-09-21,102800\r
2017-10-08,100300\r
2017-10-11,98700\r
2017-10-13,100000\r
2017-10-16,98800\r
2017-10-23,97700\r
2017-10-26,97900\r
2017-10-31,98200\r
2017-11-17,95200\r
2017-11-20,95900\r
2017-11-22,96300\r
2017-11-30,95900\r
2017-12-05,95600\r
2017-12-12,102400\r
2017-12-15,98600\r
2017-12-20,102700\r
2017-12-25,102700\r
2018-01-24,114500\r
2018-02-15,117400\r
2018-03-02,108800\r
2018-03-15,112300\r
2018-03-30,106600\r
2018-04-19,105600\r
2018-04-21,112300\r
2018-04-24,105600\r
2018-05-06,101900\r
2018-05-11,113500\r
2018-05-21,110800\r
2018-06-20,108300\r
2018-06-23,106200\r
2018-06-25,100200\r
2018-07-08,97900\r
2018-07-13,99300\r
2018-07-23,97500\r
2018-07-25,103600\r
2018-08-02,100000\r
2018-08-04,100500\r
2018-08-12,102300\r
2018-08-19,100600\r
2018-08-22,98400\r
2018-08-27,94300\r
2018-09-01,96500\r
2018-09-03,96000\r
2018-09-08,101800\r
2018-09-11,100100\r
2018-09-16,95300\r
2018-09-23,98400\r
2018-09-26,95600\r
2018-09-28,101600\r
2018-10-03,96500\r
2018-11-15,94400\r
2018-12-07,94800\r
2018-12-20,100900\r
2019-01-16,100500\r
2019-02-03,114500\r
2019-02-13,96100\r
2019-02-15,109000\r
2019-02-20,110900\r
2019-02-23,109900\r
2019-02-25,108800\r
2019-02-28,110500\r
2019-03-12,97800\r
2019-03-20,105400\r
2019-03-22,104700\r
2019-03-27,108100\r
2019-03-30,105700\r
2019-04-09,100000\r
2019-05-01,98600\r
2019-05-06,100000\r
2019-05-14,105500\r
2019-06-08,104600\r
2019-06-13,99500\r
2019-06-18,106400\r
2019-06-28,107500\r
2019-07-05,99000\r
2019-07-15,104000\r
2019-07-23,100400\r
2019-07-25,100700\r
2019-08-09,103300\r
2019-08-14,101100\r
2019-08-17,98400\r
2019-08-22,99900\r
2019-08-24,103200\r
2019-08-29,105000\r
2019-09-03,103600\r
2019-09-08,99000\r
2019-09-11,101400\r
2019-09-13,103800\r
2019-09-16,101200\r
2019-10-08,97200\r
2019-10-11,94000\r
2019-10-13,96300\r
2019-12-05,105200\r
2019-12-10,100900\r
2019-12-15,87700\r
2019-12-25,96000\r
2019-12-30,97600\r
2020-01-09,103900\r
2020-01-11,105600\r
2020-01-14,107700\r
2020-01-19,104200\r
2020-01-29,105100\r
2020-01-31,111100\r
2020-02-15,100200\r
2020-02-20,102100\r
2020-02-23,103700\r
2020-03-11,105800\r
2020-03-21,105900\r
2020-03-24,103100\r
2020-03-26,100600\r
2020-04-05,103200\r
2020-04-10,102300\r
2020-04-30,99200\r
2020-05-18,99600\r
2020-05-20,101200\r
2020-05-25,106800\r
2020-05-28,101100\r
2020-05-30,102300\r
2020-06-24,96200\r
2020-07-07,109000\r
2020-07-09,100600\r
2020-07-19,98100\r
2020-07-22,99800\r
2020-07-24,92200\r
2020-07-27,92000\r
2020-08-06,83800\r
2020-09-02,88200\r
2020-09-12,86700\r
2020-09-17,88500\r
2020-09-30,79600\r
2020-10-30,76900\r
2020-11-11,97700\r
2020-11-14,91800\r
2020-11-21,95400\r
2020-11-26,93300\r
2020-11-29,92700\r
2020-12-26,103700\r
2021-01-18,107700\r
2021-02-17,118700\r
2021-02-19,106000\r
2021-02-24,112900\r
2021-02-27,112400\r
2021-03-01,111800\r
2021-03-04,112800\r
2021-03-24,105300\r
2021-03-29,107000\r
2021-03-31,109100\r
2021-04-08,108900\r
2021-04-15,109500\r
2021-04-23,106400\r
2021-05-03,103200\r
2021-05-28,100400\r
2021-06-07,101000\r
2021-06-14,102000\r
2021-07-02,101000\r
2021-07-22,98500\r
2021-08-11,100700\r
2021-08-26,93500\r
2021-08-28,85300\r
2021-08-31,92800\r
2021-09-05,89800\r
2021-09-12,92700\r
2021-09-30,86800\r
2021-10-07,91400\r
2021-10-12,88900\r
2021-10-20,81900\r
2021-10-27,86000\r
2021-11-09,88500\r
2021-11-11,87400\r
2021-11-19,88500\r
2021-12-14,109300\r
2021-12-16,107300\r
2021-12-19,108000\r
2022-01-13,101600\r
2022-01-15,104500\r
2022-01-23,113700\r
2022-01-25,106400\r
2022-02-09,107000\r
2022-03-09,106500\r
2022-03-19,106400\r
2022-03-24,100600\r
2022-04-05,106400\r
2022-04-25,99500\r
2022-05-08,98800\r
2022-05-10,104500\r
2022-05-15,96200\r
2022-05-28,100000\r
2022-06-17,100400\r
2022-07-02,99700\r
2022-07-12,103500\r
2022-07-14,101700\r
2022-07-17,102900\r
2022-08-01,96900\r
2022-08-03,91800\r
2022-08-06,90100\r
2022-08-28,88400\r
2022-09-05,77100\r
2022-09-10,78000\r
2022-09-20,79300\r
2022-09-22,78700\r
2022-10-05,74900\r
2022-10-15,82900\r
2022-10-17,80300\r
2022-10-22,80400\r
2022-11-06,79400\r
2022-11-11,80700\r
2022-11-16,78700\r
2022-12-04,93800\r
2022-12-11,91200\r
2022-12-21,97600\r
2022-12-24,97400\r
2023-01-10,99200\r
2023-02-02,109100\r
2023-02-04,102300\r
2023-02-09,103500\r
2023-02-12,106400\r
2023-02-17,106100\r
2023-02-24,101300\r
2023-04-05,112900\r
2023-04-20,107000\r
2023-05-05,109000\r
2023-05-28,110800\r
2023-06-24,110700\r
2023-07-14,106700\r
2023-07-17,111300\r
2023-07-22,102900\r
2023-07-27,104500\r
2023-07-29,105200\r
2023-08-08,105900\r
2023-08-11,103200\r
2023-08-16,104200\r
2023-08-21,103200\r
2023-08-23,103500\r
2023-08-31,101100\r
2023-09-20,94000\r
2023-09-25,93800\r
2023-09-30,98000\r
2023-10-05,95000\r
2023-10-07,93100\r
2023-10-10,90700\r
2023-10-12,93000\r
`;export{r as default};
