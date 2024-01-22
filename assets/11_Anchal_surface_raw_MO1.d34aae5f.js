const r=`date,value\r
2017-01-26,3700\r
2017-02-15,118200\r
2017-02-22,88700\r
2017-02-25,57500\r
2017-03-14,134800\r
2017-03-17,65500\r
2017-03-27,84000\r
2017-04-23,107400\r
2017-05-16,93800\r
2017-05-26,136800\r
2017-06-25,146000\r
2017-07-05,151700\r
2017-07-07,154100\r
2017-08-14,147800\r
2017-08-21,147200\r
2017-08-26,152300\r
2017-08-29,149100\r
2017-09-23,130100\r
2017-10-05,116800\r
2017-10-15,100900\r
2017-10-18,106500\r
2017-11-17,77300\r
2017-11-22,70700\r
2017-11-27,134000\r
2018-01-23,143400\r
2018-01-28,113900\r
2018-02-27,90800\r
2018-04-06,68800\r
2018-04-18,102900\r
2018-04-23,141700\r
2018-05-06,103300\r
2018-05-11,70600\r
2018-05-26,128200\r
2018-06-20,137400\r
2018-06-22,153500\r
2018-06-25,149700\r
2018-06-27,147300\r
2018-07-12,157800\r
2018-07-27,154600\r
2018-08-01,153900\r
2018-08-11,153600\r
2018-08-19,143400\r
2018-08-26,144100\r
2018-09-08,152400\r
2018-09-10,152600\r
2018-09-18,142600\r
2018-09-25,116700\r
2018-09-28,106200\r
2018-10-05,102200\r
2018-10-13,103400\r
2018-10-18,103400\r
2018-10-20,101800\r
2018-10-23,98000\r
2018-10-25,101700\r
2018-10-30,54600\r
2018-11-14,109700\r
2018-11-22,113400\r
2019-02-05,71600\r
2019-02-15,103900\r
2019-02-17,72100\r
2019-02-20,149300\r
2019-02-22,79400\r
2019-02-25,94400\r
2019-02-27,90100\r
2019-03-22,73800\r
2019-03-24,111900\r
2019-03-27,88800\r
2019-03-29,78400\r
2019-04-01,123800\r
2019-04-13,81100\r
2019-04-18,93700\r
2019-05-01,113400\r
2019-05-13,109600\r
2019-05-16,112100\r
2019-05-23,129800\r
2019-05-31,116800\r
2019-06-02,119900\r
2019-06-27,142800\r
2019-06-30,148100\r
2019-07-05,147400\r
2019-07-10,150300\r
2019-07-22,147100\r
2019-08-04,134900\r
2019-08-24,137200\r
2019-08-26,140400\r
2019-09-03,143400\r
2019-09-13,139700\r
2019-09-15,146000\r
2019-09-20,146900\r
2019-10-13,147900\r
2019-11-04,111400\r
2019-11-22,58500\r
2020-01-16,67300\r
2020-01-21,107900\r
2020-02-12,120200\r
2020-02-15,85600\r
2020-02-20,97200\r
2020-03-18,113400\r
2020-03-23,133700\r
2020-03-28,69900\r
2020-04-02,135100\r
2020-04-05,107300\r
2020-04-07,124800\r
2020-04-10,63000\r
2020-04-15,90000\r
2020-05-07,62300\r
2020-05-20,89200\r
2020-05-22,110300\r
2020-05-25,111100\r
2020-05-27,100000\r
2020-05-30,111900\r
2020-06-01,105900\r
2020-06-24,156000\r
2020-06-26,156600\r
2020-06-29,157500\r
2020-07-04,152900\r
2020-07-09,158300\r
2020-07-11,143200\r
2020-07-19,149900\r
2020-07-24,163000\r
2020-07-29,144900\r
2020-07-31,146400\r
2020-08-05,142700\r
2020-08-08,147300\r
2020-08-10,156200\r
2020-08-20,151300\r
2020-08-25,142700\r
2020-09-04,142400\r
2020-09-09,152400\r
2020-09-14,131900\r
2020-09-17,146200\r
2020-11-08,4000\r
2020-11-11,97100\r
2020-11-18,77200\r
2020-11-21,96900\r
2020-11-23,110800\r
2020-11-28,122700\r
2021-02-14,108700\r
2021-02-21,113000\r
2021-02-24,123200\r
2021-02-26,91000\r
2021-03-01,112300\r
2021-03-23,105600\r
2021-03-28,115200\r
2021-03-31,101200\r
2021-04-02,103300\r
2021-05-27,127300\r
2021-06-14,146800\r
2021-06-16,151300\r
2021-06-26,151300\r
2021-07-11,149700\r
2021-07-19,149100\r
2021-07-21,145900\r
2021-07-29,151700\r
2021-08-20,156500\r
2021-08-25,149300\r
2021-09-07,152500\r
2021-09-22,90400\r
2021-10-14,83100\r
2021-10-19,92400\r
2021-10-22,97900\r
2021-10-24,104400\r
2021-10-27,111600\r
2022-01-15,64000\r
2022-01-25,109400\r
2022-01-27,56600\r
2022-02-09,111300\r
2022-02-11,110500\r
2022-02-26,76700\r
2022-03-06,78000\r
2022-03-08,64500\r
2022-03-26,106200\r
2022-04-10,77100\r
2022-04-17,118100\r
2022-05-10,155200\r
2022-05-15,123700\r
2022-05-17,135400\r
2022-05-30,143200\r
2022-06-11,146600\r
2022-06-19,145700\r
2022-06-29,152900\r
2022-07-04,151700\r
2022-07-06,146900\r
2022-07-11,142300\r
2022-07-14,153000\r
2022-07-16,147500\r
2022-07-19,152100\r
2022-07-21,144000\r
2022-07-24,150500\r
2022-08-03,149300\r
2022-08-08,148900\r
2022-08-10,148900\r
2022-08-13,145700\r
2022-09-04,127600\r
2022-09-12,149600\r
2022-09-19,150800\r
2022-09-22,152800\r
2022-10-04,66300\r
2022-10-09,70300\r
2022-10-12,61500\r
2022-10-22,69700\r
2022-11-11,74200\r
2023-02-09,84600\r
2023-02-11,80400\r
2023-02-14,23900\r
2023-04-05,75900\r
2023-04-07,126400\r
2023-05-25,83700\r
2023-06-11,135900\r
2023-06-24,141500\r
2023-07-11,159600\r
2023-07-14,152400\r
2023-07-19,149700\r
2023-07-31,150400\r
2023-08-10,160700\r
2023-08-20,149800\r
2023-08-23,144600\r
2023-09-04,153100\r
2023-09-07,146700\r
2023-09-17,150100\r
2023-09-24,153500\r
2023-10-02,139400\r
2023-10-07,81000\r
2023-10-09,86700\r
2023-11-08,109400\r
`;export{r as default};
