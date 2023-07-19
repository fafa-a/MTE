const r=`date,value\r
2017-03-13,105800\r
2017-03-16,105800\r
2017-05-22,128600\r
2017-05-25,128600\r
2017-06-01,128600\r
2017-06-21,161400\r
2017-06-24,161400\r
2017-07-01,175800\r
2017-07-06,147000\r
2017-07-09,147000\r
2017-08-25,148900\r
2017-08-27,148900\r
2017-09-02,148900\r
2018-02-21,134000\r
2018-02-24,134000\r
2018-02-26,169800\r
2018-02-28,169800\r
2018-03-05,169600\r
2018-04-22,134200\r
2018-04-24,134200\r
2018-05-07,142700\r
2018-05-09,142700\r
2018-05-14,142700\r
2018-05-15,142700\r
2018-05-17,152200\r
2018-05-19,145300\r
2018-05-20,145300\r
2018-05-22,160600\r
2018-05-24,160600\r
2018-06-26,175100\r
2018-06-28,175100\r
2018-06-29,175100\r
2018-07-01,171100\r
2018-07-04,171100\r
2018-07-06,171600\r
2018-07-21,143400\r
2018-07-23,143400\r
2018-07-24,143400\r
2018-07-26,143400\r
2018-07-28,134300\r
2018-07-31,134300\r
2018-08-05,143500\r
2018-10-04,136700\r
2018-10-07,136700\r
2018-10-09,140300\r
2018-10-12,152100\r
2018-10-19,142500\r
2018-11-18,104200\r
2018-11-20,98200\r
2018-11-21,98200\r
2019-01-17,143200\r
2019-01-22,143200\r
2019-01-24,143200\r
2019-01-27,143200\r
2019-02-26,87200\r
2019-03-11,87200\r
2019-03-13,137100\r
2019-04-12,123300\r
2019-04-14,123300\r
2019-04-17,123300\r
2019-04-19,123300\r
2019-04-20,123300\r
2019-04-22,124400\r
2019-04-25,124400\r
2019-04-27,124400\r
2019-04-30,111200\r
2019-05-05,111200\r
2019-06-01,149100\r
2019-06-06,149100\r
2019-06-08,149100\r
2019-06-26,167300\r
2019-06-28,167300\r
2019-06-29,167300\r
2019-07-03,167300\r
2019-07-04,167300\r
2019-07-06,167300\r
2019-07-08,167300\r
2019-07-09,167300\r
2019-07-11,158300\r
2019-07-13,171800\r
2019-07-14,171800\r
2019-07-16,151000\r
2019-07-23,175100\r
2019-07-24,175100\r
2019-07-29,154400\r
2019-08-30,143800\r
2019-09-01,143800\r
2019-09-02,143800\r
2019-09-04,143800\r
2019-09-07,143800\r
2019-09-11,143800\r
2019-09-14,151900\r
2019-09-16,121300\r
2019-09-19,123100\r
2019-09-21,123100\r
2019-09-24,123100\r
2019-09-27,123100\r
2019-12-03,103800\r
2019-12-05,103800\r
2019-12-08,138700\r
2019-12-13,136100\r
2020-01-17,115000\r
2020-01-19,115000\r
2020-01-20,115000\r
2020-01-22,120700\r
2020-02-04,103300\r
2020-02-06,140600\r
2020-02-11,137300\r
2020-02-26,109000\r
2020-03-17,100500\r
2020-03-24,100500\r
2020-03-25,100500\r
2020-03-27,100000\r
2020-03-30,84500\r
2020-04-01,101000\r
2020-04-03,99200\r
2020-04-04,99200\r
2020-04-08,99200\r
2020-04-09,99200\r
2020-04-11,103100\r
2020-04-14,103400\r
2020-04-16,101600\r
2020-04-18,121700\r
2020-04-21,130500\r
2020-04-23,130500\r
2020-04-26,125400\r
2020-05-21,169300\r
2020-05-24,169300\r
2020-05-26,175900\r
2020-05-28,175900\r
2020-05-29,175900\r
2020-05-31,153700\r
2020-06-02,153700\r
2020-06-08,160300\r
2020-06-25,139000\r
2020-07-07,139000\r
2020-07-10,139000\r
2020-07-30,120800\r
2020-08-02,120800\r
2020-08-04,125300\r
2020-08-06,117800\r
2020-08-07,117800\r
2020-08-09,117700\r
2020-08-11,117700\r
2020-08-14,117700\r
2020-08-21,113700\r
2020-09-08,82800\r
2020-09-13,92800\r
2020-09-16,92800\r
2020-09-26,81500\r
2020-11-12,99400\r
2020-11-15,99400\r
2020-11-19,99400\r
2021-02-10,139800\r
2021-02-18,139800\r
2021-03-07,159800\r
2021-03-09,159800\r
2021-03-15,159800\r
2021-04-01,143400\r
2021-04-03,143400\r
2021-04-04,143400\r
2021-04-06,143400\r
2021-04-08,143400\r
2021-05-01,107400\r
2021-05-03,107400\r
2021-05-06,107400\r
2021-05-11,107400\r
2021-05-31,114200\r
2021-06-05,123800\r
2021-06-08,123800\r
2021-06-12,119900\r
2021-06-13,119900\r
2021-06-15,125400\r
2021-08-14,139000\r
2021-08-22,139000\r
2021-09-13,112800\r
2021-09-16,112800\r
2021-09-21,112800\r
2021-09-23,118800\r
2021-10-03,113100\r
2021-10-08,129900\r
2021-10-11,129900\r
2021-10-15,129800\r
2021-11-22,106700\r
2021-11-24,106700\r
2022-02-05,126300\r
2022-02-10,126300\r
2022-02-12,126300\r
2022-03-07,130700\r
2022-03-09,130700\r
2022-03-14,130700\r
2022-03-17,163900\r
2022-03-22,164400\r
2022-03-24,164400\r
2022-03-25,164400\r
2022-03-27,159600\r
2022-04-01,162600\r
2022-04-03,162300\r
2022-04-11,151200\r
2022-04-13,151200\r
2022-04-14,151200\r
2022-04-16,156300\r
2022-04-21,147700\r
2022-04-26,153300\r
2022-05-01,141000\r
2022-06-15,175100\r
2022-06-17,175100\r
2022-06-25,175100\r
2022-07-10,165300\r
2022-07-12,165300\r
2022-07-13,165300\r
2022-07-15,172600\r
2022-07-17,174100\r
2022-07-18,174100\r
2022-07-20,174100\r
2022-07-23,167300\r
2022-08-09,150000\r
2022-08-11,143100\r
2022-08-12,143100\r
2022-08-16,143100\r
2022-08-29,130900\r
2022-09-06,130900\r
2022-11-12,97300\r
2022-11-15,97300\r
2022-11-17,100600\r
2022-11-19,100600\r
2022-11-20,100600\r
2022-11-22,100600\r
2023-01-21,137000\r
2023-01-23,137000\r
2023-01-31,137000\r
2023-02-15,150000\r
2023-03-02,155900\r
2023-05-31,159100\r
2023-06-02,159100\r
2023-06-03,159100\r
2023-06-05,155800\r
2023-06-07,166900\r
2023-06-08,166900\r
2023-06-12,161300\r
2023-06-13,161300\r
2023-06-15,181500\r
2023-06-20,168000\r
2023-06-22,168000\r
2023-06-23,168000\r
2023-06-25,174900\r
2023-07-03,140300\r
`;export{r as default};
