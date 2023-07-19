const n=`date,value\r
2017-02-15,91100\r
2017-02-25,93200\r
2017-03-17,100500\r
2017-03-27,102100\r
2017-04-03,110200\r
2017-04-06,110200\r
2017-04-23,115800\r
2017-05-16,135000\r
2017-05-23,135000\r
2017-05-26,135000\r
2017-06-02,103000\r
2017-06-05,103000\r
2017-06-22,107100\r
2017-06-25,102900\r
2017-07-02,110900\r
2017-07-05,114500\r
2017-07-07,114500\r
2017-07-17,110000\r
2017-07-18,110000\r
2017-07-22,110000\r
2017-08-14,104100\r
2017-08-19,104100\r
2017-08-21,108500\r
2017-08-22,108500\r
2017-08-24,105100\r
2017-08-26,106100\r
2017-08-27,106100\r
2017-08-29,108600\r
2017-09-03,111500\r
2017-10-05,97500\r
2017-10-06,97500\r
2017-10-11,97500\r
2017-10-13,99400\r
2017-10-15,98600\r
2017-10-16,101600\r
2017-10-18,98600\r
2017-10-25,102700\r
2017-10-26,95300\r
2017-10-28,95300\r
2017-11-17,87600\r
2017-11-22,88000\r
2017-11-27,88000\r
2018-02-10,46000\r
2018-02-12,46000\r
2018-02-18,46000\r
2018-02-25,110800\r
2018-02-27,111000\r
2018-03-05,111000\r
2018-03-14,101500\r
2018-03-17,101500\r
2018-03-19,101500\r
2018-03-20,101500\r
2018-03-24,101500\r
2018-04-18,116000\r
2018-04-19,116000\r
2018-04-21,114700\r
2018-04-26,115300\r
2018-05-06,101800\r
2018-05-08,112200\r
2018-05-11,108200\r
2018-05-18,112900\r
2018-05-19,110900\r
2018-05-21,110900\r
2018-05-26,105300\r
2018-06-20,111900\r
2018-06-22,115100\r
2018-06-23,115100\r
2018-06-25,114700\r
2018-06-27,111900\r
2018-06-28,111900\r
2018-07-03,116800\r
2018-07-07,117900\r
2018-07-08,117700\r
2018-07-12,106300\r
2018-07-22,106300\r
2018-07-27,110100\r
2018-07-28,110100\r
2018-07-30,114800\r
2018-08-01,114800\r
2018-08-02,114800\r
2018-08-04,114800\r
2018-08-06,109700\r
2018-08-07,116700\r
2018-08-11,114900\r
2018-08-12,114900\r
2018-08-14,114900\r
2018-08-16,114900\r
2018-08-19,110500\r
2018-08-22,103800\r
2018-08-26,106300\r
2018-09-08,102500\r
2018-09-10,105300\r
2018-09-11,105300\r
2018-09-18,105100\r
2018-09-20,109900\r
2018-09-25,109400\r
2018-09-26,109400\r
2018-09-28,109400\r
2018-09-30,110100\r
2018-10-05,105700\r
2018-10-06,101800\r
2018-10-10,110200\r
2018-10-11,100000\r
2018-10-13,106500\r
2018-10-16,100000\r
2018-10-18,105600\r
2018-10-20,102400\r
2018-10-21,102400\r
2018-10-23,103800\r
2018-10-25,105100\r
2018-10-30,102500\r
2018-11-04,88300\r
2018-11-09,88300\r
2018-11-14,87600\r
2018-11-19,87600\r
2018-11-22,95000\r
2018-11-24,90400\r
2018-11-27,94600\r
2019-02-05,93200\r
2019-02-13,93200\r
2019-02-15,93300\r
2019-02-17,86100\r
2019-02-18,86100\r
2019-02-20,92500\r
2019-02-22,91700\r
2019-02-23,91700\r
2019-02-25,84400\r
2019-02-27,90800\r
2019-03-07,92700\r
2019-03-22,91900\r
2019-03-24,91900\r
2019-03-27,100700\r
2019-03-29,92000\r
2019-03-30,92000\r
2019-04-01,92000\r
2019-04-08,92500\r
2019-04-09,92500\r
2019-04-11,92500\r
2019-04-13,89800\r
2019-04-18,98600\r
2019-04-19,98600\r
2019-05-01,100900\r
2019-05-06,99300\r
2019-05-13,103200\r
2019-05-14,103200\r
2019-05-16,103200\r
2019-05-23,100700\r
2019-05-28,95900\r
2019-05-29,104500\r
2019-05-31,94100\r
2019-06-02,95300\r
2019-06-08,93100\r
2019-06-27,91400\r
2019-06-28,91400\r
2019-06-30,94600\r
2019-07-02,93200\r
2019-07-03,91700\r
2019-07-05,97300\r
2019-07-07,97300\r
2019-07-08,97300\r
2019-07-10,94900\r
2019-07-12,94900\r
2019-07-13,98200\r
2019-07-15,96800\r
2019-07-17,95200\r
2019-07-20,95800\r
2019-07-22,94600\r
2019-07-23,94600\r
2019-07-25,97200\r
2019-08-02,93800\r
2019-08-04,98400\r
2019-08-09,100600\r
2019-08-12,96700\r
2019-08-14,97800\r
2019-08-22,91400\r
2019-08-24,92100\r
2019-08-26,90700\r
2019-08-29,90700\r
2019-08-31,92500\r
2019-09-03,95300\r
2019-09-06,95300\r
2019-09-10,94100\r
2019-09-13,91700\r
2019-09-15,88900\r
2019-09-16,90200\r
2019-09-18,87700\r
2019-09-20,87700\r
2019-09-21,87700\r
2019-10-03,87700\r
2019-10-13,65800\r
2019-10-21,65800\r
2019-11-09,73500\r
2019-11-20,72400\r
2019-11-22,74000\r
2019-11-24,72500\r
2019-12-04,69600\r
2019-12-05,69600\r
2020-02-15,98200\r
2020-02-18,98200\r
2020-02-20,101900\r
2020-02-22,98800\r
2020-03-13,113100\r
2020-03-18,114000\r
2020-03-19,114000\r
2020-03-21,114000\r
2020-03-23,109600\r
2020-03-24,109600\r
2020-03-26,111500\r
2020-03-28,111400\r
2020-03-31,112400\r
2020-04-02,112900\r
2020-04-05,112100\r
2020-04-07,112100\r
2020-04-08,111700\r
2020-04-10,112000\r
2020-04-12,109200\r
2020-04-13,109300\r
2020-04-15,108300\r
2020-04-17,109600\r
2020-04-22,113700\r
2020-04-23,113700\r
2020-04-27,113700\r
2020-05-17,105600\r
2020-05-18,105600\r
2020-05-20,116500\r
2020-05-25,107200\r
2020-05-27,109000\r
2020-05-28,109000\r
2020-05-30,108900\r
2020-06-01,112500\r
2020-06-02,112100\r
2020-06-26,106100\r
2020-06-29,106100\r
2020-07-04,116200\r
2020-07-06,116200\r
2020-07-07,116200\r
2020-07-09,109300\r
2020-07-11,109300\r
2020-07-12,125100\r
2020-07-14,125100\r
2020-07-17,125100\r
2020-07-19,121400\r
2020-07-21,126000\r
2020-07-22,126000\r
2020-07-24,123100\r
2020-07-27,127100\r
2020-07-29,122000\r
2020-07-31,124000\r
2020-08-05,121700\r
2020-08-06,121700\r
2020-08-08,122900\r
2020-08-10,122000\r
2020-08-15,117000\r
2020-08-20,116700\r
2020-08-25,115600\r
2020-09-04,110900\r
2020-09-07,112900\r
2020-09-09,109400\r
2020-09-10,117100\r
2020-09-12,108900\r
2020-09-14,112900\r
2020-09-15,112900\r
2020-09-17,108200\r
2020-11-11,93400\r
2020-11-14,93400\r
2020-11-18,99000\r
2020-11-19,99000\r
2020-11-21,97000\r
2020-11-23,97000\r
2020-11-28,97000\r
2020-11-29,97000\r
2020-12-04,98000\r
2021-02-14,100800\r
2021-02-17,100800\r
2021-02-21,102000\r
2021-02-24,101400\r
2021-02-27,108200\r
2021-03-01,99900\r
2021-03-04,110000\r
2021-03-06,110000\r
2021-03-08,98400\r
2021-03-09,98400\r
2021-03-28,113000\r
2021-03-29,113000\r
2021-03-31,119300\r
2021-04-02,110400\r
2021-04-03,110400\r
2021-04-05,110400\r
2021-04-07,110400\r
2021-04-08,109800\r
2021-05-27,93400\r
2021-05-28,93400\r
2021-05-30,115100\r
2021-06-01,101800\r
2021-06-09,117800\r
2021-06-11,104500\r
2021-06-14,117100\r
2021-06-16,123500\r
2021-06-26,109000\r
2021-07-04,112300\r
2021-07-07,104000\r
2021-07-11,106500\r
2021-07-19,116900\r
2021-07-21,105300\r
2021-07-22,114700\r
2021-07-29,108400\r
2021-09-07,111600\r
2021-09-12,119700\r
2021-09-17,119700\r
2021-09-22,111800\r
2021-09-24,110300\r
2021-09-25,110300\r
2021-09-27,110300\r
2021-09-30,110300\r
2021-10-02,105400\r
2021-10-04,115900\r
2021-10-09,111000\r
2021-10-14,101300\r
2021-10-15,101300\r
2021-10-17,102500\r
2021-10-19,101700\r
2021-10-22,105600\r
2021-10-24,101600\r
2021-10-27,99400\r
2021-11-01,96900\r
2022-01-25,102400\r
2022-02-09,98500\r
2022-02-26,96000\r
2022-02-27,96000\r
2022-03-06,99800\r
2022-03-08,99200\r
2022-03-09,105200\r
2022-03-26,102500\r
2022-04-15,105400\r
2022-04-17,119500\r
2022-04-20,119500\r
2022-04-22,119500\r
2022-05-15,113200\r
2022-05-17,115000\r
2022-06-11,108400\r
2022-06-14,108400\r
2022-06-16,107600\r
2022-06-21,107600\r
2022-06-29,111500\r
2022-07-02,104200\r
2022-07-04,108700\r
2022-07-06,103500\r
2022-07-11,108400\r
2022-07-12,108400\r
2022-07-14,111800\r
2022-07-16,114100\r
2022-07-17,114100\r
2022-07-19,114100\r
2022-07-21,110900\r
2022-07-24,111500\r
2022-07-31,113700\r
2022-08-03,117400\r
2022-08-06,117600\r
2022-08-08,116900\r
2022-08-10,115800\r
2022-08-11,115700\r
2022-08-13,117200\r
2022-08-18,116200\r
2022-08-25,113700\r
2022-08-28,113700\r
2022-08-31,108500\r
2022-09-02,108500\r
2022-09-04,108500\r
2022-09-12,117000\r
2022-09-19,117100\r
2022-09-20,117100\r
2022-09-22,108000\r
2022-10-04,103200\r
2022-10-05,103200\r
2022-10-09,108800\r
2022-10-19,107600\r
2022-10-22,101800\r
2022-11-11,91100\r
2022-11-13,110200\r
2023-02-09,96700\r
2023-02-11,103000\r
2023-02-12,103000\r
2023-02-14,92300\r
2023-02-16,92300\r
2023-04-05,106000\r
2023-04-08,102400\r
2023-04-13,102400\r
2023-04-20,99700\r
2023-05-27,107000\r
2023-05-28,107000\r
2023-05-30,101000\r
2023-06-01,113600\r
2023-06-02,113600\r
2023-06-04,105700\r
2023-06-06,105700\r
2023-06-11,107200\r
2023-06-14,118500\r
2023-06-16,123900\r
2023-06-19,123900\r
2023-06-24,118200\r
2023-06-27,114500\r
2023-07-02,117500\r
2023-07-04,118500\r
`;export{n as default};
