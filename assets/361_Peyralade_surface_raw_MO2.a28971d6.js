const r=`date,value\r
2017-01-26,108500\r
2017-01-29,108500\r
2017-02-25,132100\r
2017-03-07,131200\r
2017-03-17,144300\r
2017-03-27,152600\r
2017-03-30,152600\r
2017-04-06,156500\r
2017-04-09,154700\r
2017-05-16,156300\r
2017-05-19,156300\r
2017-05-26,160100\r
2017-06-05,159800\r
2017-06-15,152600\r
2017-06-25,158600\r
2017-07-03,158000\r
2017-07-05,158300\r
2017-08-04,137300\r
2017-08-07,137300\r
2017-08-14,137300\r
2017-08-17,124900\r
2017-08-19,127500\r
2017-08-22,127500\r
2017-08-24,127500\r
2017-08-27,118400\r
2017-08-29,118400\r
2017-10-08,101900\r
2017-10-11,101900\r
2017-10-13,101900\r
2017-10-16,101900\r
2017-10-18,104300\r
2017-10-23,103300\r
2017-10-26,103300\r
2017-10-28,105400\r
2017-10-31,95200\r
2017-11-02,107400\r
2017-11-07,101300\r
2017-11-15,102300\r
2017-11-17,108100\r
2017-11-20,107500\r
2017-11-22,109900\r
2017-11-25,109900\r
2017-11-27,106000\r
2017-12-05,105100\r
2018-02-10,141300\r
2018-03-22,162500\r
2018-03-30,162500\r
2018-04-01,162600\r
2018-04-04,126700\r
2018-04-21,159900\r
2018-04-26,159900\r
2018-05-06,156800\r
2018-05-11,165800\r
2018-05-19,161900\r
2018-05-21,161900\r
2018-05-26,153600\r
2018-06-20,161300\r
2018-06-23,161300\r
2018-06-25,165300\r
2018-06-28,165300\r
2018-07-03,168800\r
2018-07-08,160200\r
2018-07-10,161900\r
2018-07-15,162400\r
2018-07-18,162400\r
2018-07-20,160600\r
2018-07-23,156000\r
2018-07-25,155800\r
2018-07-30,150500\r
2018-08-02,150500\r
2018-08-04,143300\r
2018-08-12,138900\r
2018-08-19,129800\r
2018-08-22,129800\r
2018-08-27,129800\r
2018-09-03,122200\r
2018-09-08,126500\r
2018-09-11,126500\r
2018-09-16,116900\r
2018-09-18,121400\r
2018-09-23,130100\r
2018-09-26,130100\r
2018-09-28,118000\r
2018-10-03,127200\r
2018-10-06,115000\r
2018-11-17,112000\r
2018-11-20,112000\r
2018-11-22,120100\r
2018-11-27,115200\r
2018-12-17,123600\r
2018-12-25,123600\r
2019-01-11,135800\r
2019-01-16,137100\r
2019-01-24,137100\r
2019-02-15,145400\r
2019-02-18,145400\r
2019-02-20,146300\r
2019-02-23,146300\r
2019-02-25,144200\r
2019-03-05,146300\r
2019-03-07,146300\r
2019-03-12,144700\r
2019-03-22,152100\r
2019-03-25,152100\r
2019-03-27,152500\r
2019-03-30,152500\r
2019-04-09,148300\r
2019-05-01,156800\r
2019-05-06,156800\r
2019-05-11,156800\r
2019-05-14,156800\r
2019-05-16,156800\r
2019-05-31,154800\r
2019-06-08,154800\r
2019-06-13,154800\r
2019-07-05,163200\r
2019-07-08,163200\r
2019-07-10,163400\r
2019-07-13,163400\r
2019-07-15,159500\r
2019-07-23,160200\r
2019-07-25,148700\r
2019-08-02,124800\r
2019-08-04,127100\r
2019-08-09,123600\r
2019-08-14,130400\r
2019-08-17,130400\r
2019-08-22,127100\r
2019-08-24,129900\r
2019-08-29,115700\r
2019-09-03,115700\r
2019-09-06,115700\r
2019-09-11,102700\r
2019-09-13,102700\r
2019-09-16,102700\r
2019-09-18,102700\r
2019-09-21,87500\r
2019-10-08,95300\r
2019-10-11,95300\r
2019-10-13,95300\r
2020-01-06,138400\r
2020-01-11,140500\r
2020-01-14,140500\r
2020-01-16,137200\r
2020-01-19,137200\r
2020-01-21,139600\r
2020-02-05,149700\r
2020-02-15,152700\r
2020-02-20,145300\r
2020-02-23,149400\r
2020-03-21,156500\r
2020-03-24,156500\r
2020-03-29,156500\r
2020-03-31,156500\r
2020-04-03,156500\r
2020-04-05,160800\r
2020-04-08,152500\r
2020-04-10,162900\r
2020-04-13,162900\r
2020-04-15,156900\r
2020-04-18,156900\r
2020-04-25,163200\r
2020-05-05,167700\r
2020-05-08,167700\r
2020-05-18,162600\r
2020-05-20,168000\r
2020-05-25,164600\r
2020-05-28,164600\r
2020-05-30,160000\r
2020-06-02,160000\r
2020-06-14,160500\r
2020-07-09,163200\r
2020-07-12,163200\r
2020-07-14,165600\r
2020-07-19,161600\r
2020-07-24,156600\r
2020-07-27,154000\r
2020-07-29,150500\r
2020-08-03,146900\r
2020-08-06,147300\r
2020-08-08,139700\r
2020-08-11,142900\r
2020-08-16,125500\r
2020-09-02,88500\r
2020-09-05,88500\r
2020-09-07,94800\r
2020-09-10,94800\r
2020-09-12,82200\r
2020-09-15,82200\r
2020-09-17,84000\r
2020-09-30,76800\r
2020-10-17,81900\r
2020-10-30,81900\r
2020-11-21,92200\r
2020-11-26,91500\r
2020-11-29,92100\r
2021-01-10,123200\r
2021-01-18,123200\r
2021-02-14,146200\r
2021-02-17,146200\r
2021-02-19,151200\r
2021-02-24,148300\r
2021-02-27,160300\r
2021-03-01,153300\r
2021-03-04,160900\r
2021-03-09,153900\r
2021-03-16,154600\r
2021-03-21,162300\r
2021-03-24,162300\r
2021-03-29,154300\r
2021-03-31,164300\r
2021-04-03,161800\r
2021-04-05,166300\r
2021-04-08,166300\r
2021-04-13,165400\r
2021-04-15,165500\r
2021-04-23,164600\r
2021-05-30,161200\r
2021-06-09,165200\r
2021-06-12,159700\r
2021-06-14,162800\r
2021-06-19,162800\r
2021-07-19,161000\r
2021-07-22,161000\r
2021-08-23,159000\r
2021-08-26,159000\r
2021-08-28,163200\r
2021-08-31,163200\r
2021-09-05,155700\r
2021-09-07,155700\r
2021-09-12,151100\r
2021-09-15,151100\r
2021-09-17,154100\r
2021-09-22,150700\r
2021-09-25,153400\r
2021-09-27,153400\r
2021-09-30,150200\r
2021-10-02,150200\r
2021-10-12,151100\r
2021-10-15,151100\r
2021-10-17,154300\r
2021-10-20,154300\r
2021-10-27,150700\r
2021-11-06,151400\r
2021-11-09,148300\r
2021-11-11,148300\r
2021-12-16,155500\r
2021-12-19,155500\r
2021-12-21,148800\r
2022-01-25,150800\r
2022-02-09,155000\r
2022-02-24,164400\r
2022-02-27,164400\r
2022-03-01,164400\r
2022-03-06,164400\r
2022-03-09,158700\r
2022-03-26,159500\r
2022-04-05,173500\r
2022-04-10,173500\r
2022-04-15,167900\r
2022-04-30,165400\r
2022-05-05,165400\r
2022-05-08,165400\r
2022-05-10,167200\r
2022-05-15,167300\r
2022-05-30,164900\r
2022-06-19,163100\r
2022-06-22,163100\r
2022-06-24,165700\r
2022-06-27,165700\r
2022-06-29,165700\r
2022-07-04,162200\r
2022-07-07,160000\r
2022-07-12,160000\r
2022-07-14,162800\r
2022-07-17,153000\r
2022-07-19,153000\r
2022-07-22,153000\r
2022-07-24,153000\r
2022-08-01,132400\r
2022-08-03,132400\r
2022-08-06,107200\r
2022-08-08,108700\r
2022-08-11,108700\r
2022-08-13,96000\r
2022-08-28,60800\r
2022-08-31,60800\r
2022-09-05,60800\r
2022-09-12,53300\r
2022-09-15,53300\r
2022-09-20,53300\r
2022-09-22,53300\r
2022-10-07,46800\r
2022-10-12,46800\r
2022-10-15,46800\r
2022-10-22,40100\r
2022-11-06,48500\r
2022-11-11,48800\r
2022-11-16,48000\r
2023-02-04,69300\r
2023-02-09,76000\r
2023-02-12,76000\r
2023-02-14,74100\r
2023-02-17,80300\r
2023-02-19,77800\r
2023-02-27,75700\r
2023-03-01,95100\r
2023-03-09,94900\r
2023-04-05,127100\r
2023-04-08,127100\r
2023-04-15,128800\r
2023-04-20,138700\r
2023-05-30,155800\r
2023-06-02,155800\r
2023-06-04,155800\r
2023-06-07,155800\r
2023-06-14,155500\r
2023-06-24,155500\r
2023-07-14,162000\r
2023-07-19,162000\r
2023-07-22,161400\r
2023-08-08,138000\r
2023-08-11,138000\r
2023-08-13,138300\r
2023-08-18,137200\r
2023-08-21,129400\r
2023-08-23,127700\r
2023-08-26,127900\r
2023-08-31,115300\r
2023-09-07,103900\r
2023-09-10,103900\r
2023-09-15,103900\r
2023-10-02,96600\r
2023-10-05,96600\r
2023-10-07,97100\r
2023-10-10,97800\r
2023-10-12,95500\r
2023-10-15,96500\r
`;export{r as default};
