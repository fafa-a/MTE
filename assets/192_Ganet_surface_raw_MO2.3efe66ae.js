const r=`date,value\r
2017-01-19,79100\r
2017-01-26,85300\r
2017-01-29,84100\r
2017-02-15,90600\r
2017-02-18,92100\r
2017-02-25,89100\r
2017-03-07,81500\r
2017-03-10,96900\r
2017-03-17,100900\r
2017-03-27,107300\r
2017-03-30,107400\r
2017-04-06,107100\r
2017-04-09,106100\r
2017-04-16,112700\r
2017-04-19,119600\r
2017-04-29,119600\r
2017-05-09,138500\r
2017-05-16,139500\r
2017-05-19,139800\r
2017-05-26,139400\r
2017-06-05,137700\r
2017-06-18,141100\r
2017-06-25,142300\r
2017-07-05,134900\r
2017-07-18,131000\r
2017-07-28,131000\r
2017-08-02,105500\r
2017-08-04,113800\r
2017-08-07,113700\r
2017-08-14,106400\r
2017-08-17,100000\r
2017-08-19,100000\r
2017-08-22,96400\r
2017-08-24,96400\r
2017-08-27,99400\r
2017-08-29,86900\r
2017-09-21,82900\r
2017-09-28,80800\r
2017-10-08,83000\r
2017-10-11,83600\r
2017-10-13,82400\r
2017-10-16,82600\r
2017-10-18,82000\r
2017-10-23,82600\r
2017-10-26,80400\r
2017-10-28,79700\r
2017-10-31,77900\r
2017-11-02,77900\r
2017-11-07,75500\r
2017-11-15,74500\r
2017-11-17,74900\r
2017-11-22,74900\r
2017-11-25,74900\r
2017-11-27,74900\r
2017-11-30,73800\r
2018-01-09,89000\r
2018-01-11,89000\r
2018-01-14,89000\r
2018-01-19,89000\r
2018-01-24,96900\r
2018-01-26,96900\r
2018-02-10,97600\r
2018-02-18,97600\r
2018-03-15,130400\r
2018-03-17,130400\r
2018-03-22,132100\r
2018-04-19,127300\r
2018-04-21,140300\r
2018-04-24,140300\r
2018-04-26,140300\r
2018-05-06,130400\r
2018-05-11,140400\r
2018-05-19,143300\r
2018-05-21,139800\r
2018-05-26,140700\r
2018-06-03,142900\r
2018-06-20,137500\r
2018-06-23,138800\r
2018-06-25,138800\r
2018-06-28,138800\r
2018-07-03,142200\r
2018-07-05,141300\r
2018-07-08,140800\r
2018-07-10,142100\r
2018-07-13,140600\r
2018-07-15,139100\r
2018-07-18,141500\r
2018-07-20,140400\r
2018-07-23,140600\r
2018-07-25,139100\r
2018-07-30,139900\r
2018-08-02,139600\r
2018-08-04,140100\r
2018-08-12,137600\r
2018-08-19,141800\r
2018-08-22,139500\r
2018-08-27,139500\r
2018-09-01,139200\r
2018-09-03,134900\r
2018-09-08,138000\r
2018-09-11,139600\r
2018-09-16,138400\r
2018-09-18,138400\r
2018-09-23,128400\r
2018-09-26,133000\r
2018-09-28,139400\r
2018-10-03,133100\r
2018-10-06,133700\r
2018-10-11,134500\r
2018-10-13,134500\r
2018-10-16,128600\r
2018-10-23,116700\r
2018-11-17,122100\r
2018-11-22,126300\r
2018-11-27,123000\r
2018-11-30,125800\r
2018-12-05,123400\r
2018-12-10,127600\r
2018-12-12,127600\r
2019-01-06,131300\r
2019-01-09,131300\r
2019-01-11,131300\r
2019-01-16,131300\r
2019-02-13,142400\r
2019-02-15,138900\r
2019-02-18,138900\r
2019-02-20,137700\r
2019-02-23,137900\r
2019-02-25,137500\r
2019-03-05,138800\r
2019-03-20,144500\r
2019-03-22,145100\r
2019-03-25,137500\r
2019-03-27,142100\r
2019-03-30,141500\r
2019-04-01,142200\r
2019-04-09,142200\r
2019-05-01,141100\r
2019-05-11,132100\r
2019-05-14,137500\r
2019-05-16,137500\r
2019-05-29,136000\r
2019-05-31,135900\r
2019-06-08,143800\r
2019-06-13,143800\r
2019-06-18,144900\r
2019-06-25,144900\r
2019-07-03,145300\r
2019-07-05,143200\r
2019-07-08,143100\r
2019-07-10,143000\r
2019-07-13,142800\r
2019-07-15,143400\r
2019-07-20,142500\r
2019-07-23,141800\r
2019-07-25,141700\r
2019-07-28,140200\r
2019-08-02,138300\r
2019-08-04,137100\r
2019-08-09,135600\r
2019-08-12,137400\r
2019-08-14,137400\r
2019-08-17,135800\r
2019-08-22,136700\r
2019-08-24,132600\r
2019-08-29,132600\r
2019-09-03,128100\r
2019-09-06,128200\r
2019-09-08,127400\r
2019-09-11,121800\r
2019-09-13,120100\r
2019-09-16,119800\r
2019-09-18,119800\r
2019-09-21,117600\r
2019-10-08,115100\r
2019-10-11,115800\r
2019-10-13,114300\r
2019-12-05,120300\r
2019-12-10,130200\r
2019-12-15,130100\r
2019-12-17,133600\r
2019-12-20,131600\r
2019-12-25,133600\r
2019-12-27,134800\r
2019-12-30,134400\r
2020-01-06,138000\r
2020-01-11,138000\r
2020-01-14,138000\r
2020-01-16,131200\r
2020-01-19,131200\r
2020-02-03,141400\r
2020-02-05,141100\r
2020-02-15,136600\r
2020-02-18,136600\r
2020-02-20,133900\r
2020-03-21,143000\r
2020-03-24,143600\r
2020-03-26,143600\r
2020-03-31,143600\r
2020-04-03,143200\r
2020-04-05,143400\r
2020-04-08,143600\r
2020-04-10,143100\r
2020-04-13,143100\r
2020-04-15,141900\r
2020-04-18,142200\r
2020-04-25,141200\r
2020-05-03,141300\r
2020-05-05,141700\r
2020-05-08,141700\r
2020-05-15,141300\r
2020-05-18,143900\r
2020-05-20,143900\r
2020-05-25,142300\r
2020-05-28,144800\r
2020-05-30,143000\r
2020-06-02,143000\r
2020-06-14,144300\r
2020-06-24,141200\r
2020-06-27,141200\r
2020-07-04,141200\r
2020-07-07,141400\r
2020-07-09,145600\r
2020-07-12,145700\r
2020-07-14,145700\r
2020-07-19,146500\r
2020-07-24,144500\r
2020-07-27,142900\r
2020-07-29,144900\r
2020-08-06,143300\r
2020-08-08,142900\r
2020-08-11,144600\r
2020-08-18,144000\r
2020-08-23,143700\r
2020-09-02,135700\r
2020-09-05,135500\r
2020-09-07,135500\r
2020-09-10,137500\r
2020-09-12,135400\r
2020-09-15,135400\r
2020-09-17,135000\r
2020-09-30,137000\r
2020-10-30,134800\r
2020-11-06,134800\r
2020-11-11,134800\r
2020-11-14,138100\r
2020-11-19,139000\r
2020-11-21,133000\r
2020-11-26,133800\r
2020-11-29,130500\r
2020-12-26,136100\r
2021-01-03,142400\r
2021-01-08,142400\r
2021-01-10,142800\r
2021-01-18,144500\r
2021-01-25,144500\r
2021-02-14,144200\r
2021-02-17,145500\r
2021-02-19,144200\r
2021-02-24,144400\r
2021-02-27,144200\r
2021-03-01,143500\r
2021-03-04,143600\r
2021-03-06,143600\r
2021-03-09,143800\r
2021-03-14,144500\r
2021-03-16,145900\r
2021-03-21,145500\r
2021-03-24,135800\r
2021-03-26,135800\r
2021-03-29,135600\r
2021-03-31,142800\r
2021-04-03,144900\r
2021-04-05,146100\r
2021-04-08,146100\r
2021-04-13,147200\r
2021-04-15,147000\r
2021-04-20,147100\r
2021-04-23,144800\r
2021-05-03,145000\r
2021-05-08,145500\r
2021-05-28,146900\r
2021-05-30,146900\r
2021-06-09,145300\r
2021-06-12,144900\r
2021-06-14,144900\r
2021-07-17,143600\r
2021-07-19,146300\r
2021-07-22,143100\r
2021-08-11,144800\r
2021-08-21,144900\r
2021-08-26,145400\r
2021-08-28,144700\r
2021-08-31,145200\r
2021-09-05,145700\r
2021-09-07,145000\r
2021-09-12,145900\r
2021-09-17,144100\r
2021-09-22,140600\r
2021-09-25,140600\r
2021-09-27,140600\r
2021-09-30,141600\r
2021-10-07,142000\r
2021-10-10,142300\r
2021-10-12,139200\r
2021-10-15,139200\r
2021-10-17,139200\r
2021-10-20,139200\r
2021-11-06,134600\r
2021-11-09,131400\r
2021-11-11,131400\r
2021-12-14,143600\r
2021-12-16,144000\r
2021-12-19,140600\r
2021-12-21,140600\r
2022-01-23,143700\r
2022-01-25,144300\r
2022-02-09,135000\r
2022-03-09,145300\r
2022-03-19,146300\r
2022-03-24,146600\r
2022-03-26,145000\r
2022-04-05,147300\r
2022-04-15,147100\r
2022-04-30,145500\r
2022-05-03,145500\r
2022-05-05,145500\r
2022-05-08,146300\r
2022-05-28,145400\r
2022-05-30,146900\r
2022-06-17,127800\r
2022-06-19,145500\r
2022-06-22,146000\r
2022-06-29,146100\r
2022-07-02,145900\r
2022-07-04,145900\r
2022-07-07,145900\r
2022-07-12,144900\r
2022-07-14,144800\r
2022-07-17,144500\r
2022-07-19,144700\r
2022-07-22,144700\r
2022-07-24,142900\r
2022-07-27,142200\r
2022-08-03,131800\r
2022-08-06,113800\r
2022-08-11,108400\r
2022-08-13,108700\r
2022-08-18,101000\r
2022-08-28,90200\r
2022-08-31,90200\r
2022-09-05,91200\r
2022-09-10,91200\r
2022-09-12,88100\r
2022-09-15,88900\r
2022-09-20,87700\r
2022-09-22,86400\r
2022-10-05,81800\r
2022-10-07,82400\r
2022-10-12,82400\r
2022-10-15,80200\r
2022-10-22,78100\r
2022-11-06,72100\r
2022-11-11,76600\r
2022-11-16,73600\r
2022-12-21,81500\r
2022-12-26,81000\r
2023-01-30,97100\r
2023-02-02,101500\r
2023-02-04,99600\r
2023-02-09,101600\r
2023-02-12,101500\r
2023-02-14,100700\r
2023-02-17,99900\r
2023-02-19,99700\r
2023-02-27,103700\r
2023-03-01,105900\r
2023-03-09,104900\r
2023-04-05,113900\r
2023-04-08,114000\r
2023-04-15,114000\r
2023-05-23,129700\r
2023-05-25,129700\r
2023-05-28,146300\r
2023-05-30,146300\r
2023-06-02,143200\r
2023-06-04,143600\r
2023-06-07,143600\r
2023-06-14,140700\r
2023-06-24,144600\r
`;export{r as default};
