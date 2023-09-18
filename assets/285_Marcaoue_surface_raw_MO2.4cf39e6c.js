const r=`date,value\r
2017-02-15,135000\r
2017-02-22,135000\r
2017-02-25,138800\r
2017-03-17,143000\r
2017-03-27,143000\r
2017-04-06,163900\r
2017-05-16,173200\r
2017-05-26,176100\r
2017-06-02,175200\r
2017-06-05,175700\r
2017-07-05,171000\r
2017-07-07,171000\r
2017-08-14,150100\r
2017-08-17,126600\r
2017-08-19,126600\r
2017-08-21,126600\r
2017-08-22,126600\r
2017-08-24,126600\r
2017-08-26,112000\r
2017-08-29,114600\r
2017-09-03,114600\r
2017-09-05,70900\r
2017-09-08,98700\r
2017-09-13,92200\r
2017-09-15,92200\r
2017-10-08,89500\r
2017-10-10,89500\r
2017-10-11,89500\r
2017-10-13,94700\r
2017-10-15,94700\r
2017-10-16,94700\r
2017-10-18,94700\r
2017-10-20,90500\r
2017-10-23,90500\r
2017-10-28,92300\r
2017-10-30,92300\r
2017-10-31,92300\r
2017-11-02,92300\r
2017-11-07,96500\r
2017-11-14,95800\r
2017-11-15,95800\r
2017-11-17,97400\r
2017-11-19,95900\r
2017-11-22,97600\r
2017-11-24,97600\r
2017-11-25,97600\r
2017-11-27,94300\r
2017-11-30,96600\r
2017-12-07,94900\r
2018-02-10,139200\r
2018-02-12,139200\r
2018-02-15,144700\r
2018-02-25,142600\r
2018-02-27,137300\r
2018-03-02,149400\r
2018-03-07,149400\r
2018-03-09,148300\r
2018-03-22,155100\r
2018-04-01,155100\r
2018-04-21,162000\r
2018-04-23,162000\r
2018-04-24,162000\r
2018-04-26,162000\r
2018-05-06,156800\r
2018-05-11,170700\r
2018-05-19,167800\r
2018-05-21,169500\r
2018-05-23,162400\r
2018-06-20,174700\r
2018-06-22,174700\r
2018-06-23,174700\r
2018-06-25,182100\r
2018-06-28,182100\r
2018-07-02,182600\r
2018-07-03,182600\r
2018-07-07,172100\r
2018-07-08,172100\r
2018-07-10,172100\r
2018-07-15,160500\r
2018-07-18,160500\r
2018-07-22,160500\r
2018-07-23,160500\r
2018-07-25,166800\r
2018-07-27,166700\r
2018-07-30,168100\r
2018-08-01,168100\r
2018-08-02,168100\r
2018-08-04,166800\r
2018-08-06,162300\r
2018-08-11,158300\r
2018-08-12,158300\r
2018-08-19,165400\r
2018-08-21,165400\r
2018-08-22,165400\r
2018-08-26,165400\r
2018-08-27,165400\r
2018-09-03,131700\r
2018-09-05,131700\r
2018-09-08,146000\r
2018-09-10,146000\r
2018-09-11,146000\r
2018-09-16,143900\r
2018-09-18,143900\r
2018-09-23,117600\r
2018-09-25,117600\r
2018-09-26,117600\r
2018-09-28,129200\r
2018-09-30,129200\r
2018-10-03,117400\r
2018-10-05,130700\r
2018-10-06,130700\r
2018-10-23,114400\r
2018-10-25,114400\r
2018-11-12,125500\r
2018-11-15,125500\r
2018-11-17,129900\r
2018-11-22,129900\r
2018-11-24,120100\r
2018-11-27,121700\r
2018-11-29,119100\r
2018-12-05,119100\r
2019-01-26,130200\r
2019-01-28,130200\r
2019-02-03,129400\r
2019-02-15,126300\r
2019-02-17,126300\r
2019-02-18,126300\r
2019-02-20,129000\r
2019-02-22,129000\r
2019-02-23,129000\r
2019-02-25,125700\r
2019-02-27,125700\r
2019-03-07,124500\r
2019-03-12,126600\r
2019-03-20,125300\r
2019-03-22,128200\r
2019-03-24,118900\r
2019-03-25,118900\r
2019-03-27,130800\r
2019-03-29,130800\r
2019-03-30,130800\r
2019-04-01,130800\r
2019-04-08,129900\r
2019-04-09,129900\r
2019-05-01,148600\r
2019-05-06,148600\r
2019-05-11,148600\r
2019-05-13,148600\r
2019-05-14,148600\r
2019-05-16,167300\r
2019-05-23,165800\r
2019-05-31,165800\r
2019-07-05,174800\r
2019-07-08,174800\r
2019-07-10,176900\r
2019-07-12,176900\r
2019-07-13,176900\r
2019-07-15,173700\r
2019-07-17,173700\r
2019-07-22,179300\r
2019-07-23,179300\r
2019-07-25,167000\r
2019-07-28,175000\r
2019-08-02,153700\r
2019-08-04,153900\r
2019-08-09,143000\r
2019-08-14,131200\r
2019-08-16,131200\r
2019-08-17,131200\r
2019-08-21,133100\r
2019-08-22,133100\r
2019-08-24,120700\r
2019-08-26,124600\r
2019-08-29,119600\r
2019-08-31,115000\r
2019-09-03,115000\r
2019-09-06,115000\r
2019-09-08,115000\r
2019-09-13,115200\r
2019-09-15,106100\r
2019-09-16,106100\r
2019-09-20,106100\r
2019-09-21,106100\r
2019-10-08,74900\r
2019-10-11,74900\r
2019-10-13,81600\r
2019-10-15,81600\r
2019-10-25,78700\r
2019-12-27,132300\r
2019-12-29,132300\r
2019-12-30,132300\r
2020-01-06,128200\r
2020-01-09,128200\r
2020-01-11,128200\r
2020-01-14,128200\r
2020-01-16,128200\r
2020-01-19,128200\r
2020-02-05,116500\r
2020-02-07,116500\r
2020-02-08,116500\r
2020-02-15,116500\r
2020-02-18,116500\r
2020-02-20,119300\r
2020-02-22,117000\r
2020-03-21,145900\r
2020-03-24,145900\r
2020-03-26,147500\r
2020-03-28,147500\r
2020-03-29,147500\r
2020-03-31,147500\r
2020-04-03,147500\r
2020-04-05,144300\r
2020-04-08,152700\r
2020-04-10,151600\r
2020-04-12,167000\r
2020-04-15,163000\r
2020-04-25,172800\r
2020-04-28,168800\r
2020-05-20,174200\r
2020-05-22,173500\r
2020-05-25,176200\r
2020-05-27,176200\r
2020-05-28,176200\r
2020-05-30,171000\r
2020-06-12,170500\r
2020-06-14,170500\r
2020-07-19,160600\r
2020-07-21,160600\r
2020-07-22,160600\r
2020-07-24,161600\r
2020-07-27,161600\r
2020-07-29,161600\r
2020-07-31,161600\r
2020-08-03,161600\r
2020-08-05,147700\r
2020-08-06,147700\r
2020-08-08,149500\r
2020-08-10,122600\r
2020-08-15,122600\r
2020-08-20,122600\r
2020-08-21,122600\r
2020-08-23,122600\r
2020-09-02,84100\r
2020-09-04,84100\r
2020-09-05,84100\r
2020-09-07,85500\r
2020-09-10,85500\r
2020-09-12,85500\r
2020-09-14,85500\r
2020-09-17,85500\r
2020-10-17,73700\r
2020-10-24,73700\r
2020-10-30,73700\r
2020-11-01,73700\r
2020-11-11,80800\r
2020-11-14,80800\r
2020-11-16,80800\r
2020-11-18,80800\r
2020-11-19,80800\r
2020-11-21,84300\r
2020-11-23,84300\r
2020-11-26,78800\r
2020-11-29,81600\r
2020-12-26,117600\r
2021-02-19,147300\r
2021-02-24,152100\r
2021-02-27,152200\r
2021-03-01,143200\r
2021-03-04,151400\r
2021-03-09,140700\r
2021-03-26,152400\r
2021-03-28,152400\r
2021-03-29,152400\r
2021-03-31,155300\r
2021-04-02,155300\r
2021-04-03,155300\r
2021-04-05,153500\r
2021-04-07,163800\r
2021-04-15,165900\r
2021-04-17,165300\r
2021-04-20,165300\r
2021-04-22,165300\r
2021-04-23,165300\r
2021-06-14,181400\r
2021-06-16,181400\r
2021-06-19,181400\r
2021-06-21,181400\r
2021-09-12,121800\r
2021-09-17,126700\r
2021-09-22,126100\r
2021-10-07,127300\r
2021-10-10,127300\r
2021-10-12,130900\r
2021-10-14,130900\r
2021-10-17,128300\r
2021-10-19,130500\r
2021-10-20,130500\r
2021-10-27,122900\r
2021-12-16,144700\r
2021-12-18,144700\r
2021-12-19,144700\r
2021-12-21,137100\r
2021-12-23,139900\r
2022-01-15,144700\r
2022-01-22,144700\r
2022-01-23,144700\r
2022-01-25,145600\r
2022-01-27,137100\r
2022-02-01,137100\r
2022-02-09,136900\r
2022-03-21,99400\r
2022-03-23,99400\r
2022-03-24,99400\r
2022-03-26,132100\r
2022-04-05,149900\r
2022-04-10,149900\r
2022-04-15,162900\r
2022-04-17,162800\r
2022-04-25,162800\r
2022-06-19,182500\r
2022-06-22,182500\r
2022-06-24,182500\r
2022-06-27,182500\r
2022-06-29,182500\r
2022-07-14,166100\r
2022-07-16,156200\r
2022-07-17,156200\r
2022-07-19,156200\r
2022-07-21,156200\r
2022-07-22,156200\r
2022-07-24,157500\r
2022-07-26,148900\r
2022-07-27,148900\r
2022-07-31,148900\r
2022-08-01,148900\r
2022-08-03,148900\r
2022-08-13,94000\r
2022-08-15,94000\r
2022-08-18,98400\r
2022-08-20,98400\r
2022-08-23,103400\r
2022-08-28,96100\r
2022-08-30,89800\r
2022-09-04,83400\r
2022-09-05,83400\r
2022-09-22,56200\r
2022-10-02,56200\r
2022-11-06,67700\r
2022-11-08,67700\r
2022-11-11,68000\r
2022-11-13,68000\r
2022-11-16,65300\r
2022-11-24,69800\r
2022-12-11,82400\r
2022-12-21,94000\r
2022-12-28,93400\r
2023-02-04,116800\r
2023-02-06,116800\r
2023-02-09,120300\r
2023-02-11,120300\r
2023-02-12,120300\r
2023-02-14,116900\r
2023-02-16,121100\r
2023-02-17,121100\r
2023-02-19,108800\r
2023-02-21,116300\r
2023-02-24,116000\r
2023-02-26,110800\r
2023-03-01,123700\r
2023-03-03,125700\r
2023-03-04,125700\r
2023-03-09,124000\r
2023-03-16,123300\r
2023-04-05,132000\r
2023-04-07,132000\r
2023-04-08,132000\r
2023-04-15,132000\r
2023-06-24,183300\r
2023-07-14,179900\r
2023-07-16,179900\r
2023-07-17,179900\r
2023-07-19,179900\r
2023-07-22,179900\r
2023-07-29,164300\r
2023-07-31,164300\r
2023-08-03,164800\r
2023-08-05,164800\r
2023-08-06,164800\r
2023-08-08,158700\r
2023-08-10,159200\r
2023-08-11,159200\r
2023-08-13,159200\r
2023-08-15,147000\r
2023-08-18,147100\r
2023-08-20,130500\r
2023-08-21,130500\r
2023-08-23,130500\r
`;export{r as default};
