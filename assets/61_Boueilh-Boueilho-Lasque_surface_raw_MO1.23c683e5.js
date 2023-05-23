const r=`date,value\r
2017-01-26,97400\r
2017-02-15,112200\r
2017-02-18,112900\r
2017-02-25,112300\r
2017-03-10,123000\r
2017-03-30,119200\r
2017-04-09,134400\r
2017-04-19,128600\r
2017-05-06,139900\r
2017-05-09,137900\r
2017-05-16,144300\r
2017-05-26,151400\r
2017-06-18,161300\r
2017-07-05,163900\r
2017-07-18,162900\r
2017-08-02,153600\r
2017-08-12,148800\r
2017-08-14,155700\r
2017-08-22,147400\r
2017-09-01,152100\r
2017-09-03,148900\r
2017-09-21,145700\r
2017-10-08,143500\r
2017-10-11,137400\r
2017-10-13,138900\r
2017-10-16,137600\r
2017-10-23,141500\r
2017-10-26,135600\r
2017-10-31,138100\r
2017-11-17,133900\r
2017-11-20,133300\r
2017-11-22,136000\r
2017-11-27,135100\r
2017-11-30,135100\r
2017-12-05,135100\r
2017-12-12,145200\r
2017-12-25,142400\r
2018-01-24,177300\r
2018-03-02,173700\r
2018-03-15,176700\r
2018-03-22,178000\r
2018-03-30,168900\r
2018-04-06,161800\r
2018-04-19,164000\r
2018-04-21,171800\r
2018-05-06,161800\r
2018-05-11,177100\r
2018-05-21,176000\r
2018-06-20,175500\r
2018-06-23,174000\r
2018-06-25,166300\r
2018-07-08,159700\r
2018-07-13,165400\r
2018-07-18,161900\r
2018-07-23,160100\r
2018-07-25,161700\r
2018-07-30,157600\r
2018-08-02,154400\r
2018-08-04,150600\r
2018-08-12,146300\r
2018-08-19,142200\r
2018-08-22,139600\r
2018-08-27,130400\r
2018-09-01,121800\r
2018-09-03,123200\r
2018-09-08,127800\r
2018-09-11,126300\r
2018-09-16,121300\r
2018-09-23,115200\r
2018-09-26,115300\r
2018-09-28,116300\r
2018-10-03,107100\r
2018-11-15,67400\r
2018-12-07,114300\r
2019-01-16,111100\r
2019-02-03,154900\r
2019-02-13,128800\r
2019-02-15,143800\r
2019-02-20,146400\r
2019-02-23,147500\r
2019-02-25,141600\r
2019-03-12,136600\r
2019-03-20,138600\r
2019-03-22,133600\r
2019-03-27,141100\r
2019-03-30,133700\r
2019-04-09,148300\r
2019-05-01,153900\r
2019-05-06,160100\r
2019-05-14,170400\r
2019-06-13,168200\r
2019-06-18,174900\r
2019-06-23,155400\r
2019-06-28,178200\r
2019-07-05,161700\r
2019-07-15,166700\r
2019-07-23,156100\r
2019-07-25,150400\r
2019-08-09,155800\r
2019-08-14,152400\r
2019-08-17,150600\r
2019-08-22,151900\r
2019-08-24,154900\r
2019-08-29,156200\r
2019-09-03,150300\r
2019-09-11,140600\r
2019-09-13,142900\r
2019-09-16,136800\r
2019-10-08,134500\r
2019-10-11,128900\r
2019-10-13,132600\r
2019-12-05,179500\r
2019-12-10,174000\r
2019-12-15,146700\r
2019-12-25,159100\r
2019-12-30,161000\r
2020-01-09,177700\r
2020-01-11,175600\r
2020-01-14,167700\r
2020-01-19,172200\r
2020-01-29,172100\r
2020-01-31,173400\r
2020-02-05,177200\r
2020-02-15,162000\r
2020-02-20,162100\r
2020-02-23,176700\r
2020-03-11,174700\r
2020-03-21,173900\r
2020-03-24,170600\r
2020-03-26,164900\r
2020-04-03,175000\r
2020-04-05,162500\r
2020-04-08,169300\r
2020-04-10,166800\r
2020-05-05,174000\r
2020-05-18,174800\r
2020-05-20,169800\r
2020-05-25,175600\r
2020-05-28,170000\r
2020-05-30,168900\r
2020-06-24,161600\r
2020-07-07,173700\r
2020-07-09,158400\r
2020-07-19,151200\r
2020-07-22,147000\r
2020-07-27,138900\r
2020-08-06,117100\r
2020-09-02,112400\r
2020-09-12,105900\r
2020-09-17,103300\r
2020-09-30,108200\r
2020-10-17,135500\r
2020-10-30,138500\r
2020-11-11,140800\r
2020-11-14,138400\r
2020-11-21,141500\r
2020-11-26,139300\r
2020-11-29,137900\r
2020-12-26,174900\r
2021-01-03,179900\r
2021-01-18,179300\r
2021-02-14,181000\r
2021-02-19,166100\r
2021-02-24,176800\r
2021-02-27,180100\r
2021-03-01,177900\r
2021-03-04,178400\r
2021-03-21,172700\r
2021-03-24,169100\r
2021-03-29,176500\r
2021-03-31,175100\r
2021-04-08,175500\r
2021-04-15,175800\r
2021-04-23,176000\r
2021-05-03,169000\r
2021-05-28,169400\r
2021-06-07,168400\r
2021-06-09,163900\r
2021-06-14,169300\r
2021-07-02,158700\r
2021-07-22,154500\r
2021-08-11,151500\r
2021-08-26,131900\r
2021-08-28,118600\r
2021-09-05,110600\r
2021-09-12,108100\r
2021-09-30,102300\r
2021-10-07,108000\r
2021-10-12,106900\r
2021-10-17,100700\r
2021-10-27,101500\r
2021-11-11,107900\r
2021-11-19,108400\r
2021-12-14,157500\r
2021-12-19,154400\r
2022-01-13,147900\r
2022-01-15,151600\r
2022-01-23,168100\r
2022-01-25,157700\r
2022-02-09,158900\r
2022-03-09,171100\r
2022-03-21,173400\r
2022-03-24,173600\r
2022-04-05,169700\r
2022-05-08,164700\r
2022-05-10,173200\r
2022-05-15,157300\r
2022-05-28,161000\r
2022-06-17,161300\r
2022-07-02,163600\r
2022-07-12,157600\r
2022-07-14,153100\r
2022-07-17,151000\r
2022-08-01,137600\r
2022-08-03,132200\r
2022-08-11,118300\r
2022-08-28,103900\r
2022-09-05,84700\r
2022-09-10,79600\r
2022-09-15,75600\r
2022-09-20,71000\r
2022-09-22,70900\r
2022-10-05,68900\r
2022-10-07,71800\r
2022-10-12,75800\r
2022-10-15,75000\r
2022-10-17,71500\r
2022-10-22,70200\r
2022-10-30,72100\r
2022-11-06,73800\r
2022-11-11,74700\r
2022-11-16,73700\r
2022-12-04,111100\r
2022-12-11,108200\r
2022-12-21,116600\r
2023-01-10,123600\r
2023-01-18,140700\r
2023-02-02,154400\r
2023-02-04,145900\r
2023-02-09,139100\r
2023-02-12,152700\r
2023-02-17,154200\r
2023-02-24,149300\r
2023-04-05,154200\r
2023-04-20,147800\r
`;export{r as default};
