const r=`date,value\r
2017-01-26,93400\r
2017-02-15,117600\r
2017-02-22,104600\r
2017-02-25,103300\r
2017-03-17,141700\r
2017-03-27,148900\r
2017-04-23,174600\r
2017-05-16,182900\r
2017-05-26,187100\r
2017-06-25,187700\r
2017-07-05,177100\r
2017-07-07,173800\r
2017-07-17,171200\r
2017-08-04,161200\r
2017-08-14,150000\r
2017-08-21,143800\r
2017-08-24,143100\r
2017-08-26,136900\r
2017-08-29,131700\r
2017-09-05,125000\r
2017-09-20,126800\r
2017-09-23,125600\r
2017-10-05,127000\r
2017-10-08,127600\r
2017-10-13,127700\r
2017-10-15,126000\r
2017-10-28,123500\r
2017-11-07,127600\r
2017-11-17,135500\r
2017-11-22,125600\r
2017-12-09,132900\r
2018-02-10,176900\r
2018-02-25,183500\r
2018-03-02,186500\r
2018-03-14,177800\r
2018-04-21,183800\r
2018-04-26,185100\r
2018-05-06,184800\r
2018-05-11,187600\r
2018-06-20,187200\r
2018-06-25,189400\r
2018-07-07,180900\r
2018-07-27,191400\r
2018-07-30,186700\r
2018-08-01,181400\r
2018-08-04,180300\r
2018-08-06,177900\r
2018-08-11,164300\r
2018-08-19,164400\r
2018-08-21,161500\r
2018-09-03,152400\r
2018-09-08,155700\r
2018-09-20,148500\r
2018-09-23,146200\r
2018-09-25,146800\r
2018-09-28,142200\r
2018-09-30,143400\r
2018-10-03,141000\r
2018-10-05,144000\r
2018-10-23,162300\r
2018-10-25,163000\r
2018-11-04,162900\r
2018-12-19,159900\r
2018-12-27,160700\r
2019-01-16,165100\r
2019-02-12,147400\r
2019-02-15,163900\r
2019-02-17,160800\r
2019-02-20,172900\r
2019-02-22,168200\r
2019-02-25,156700\r
2019-02-27,171100\r
2019-03-12,169400\r
2019-03-22,172500\r
2019-03-24,169700\r
2019-03-27,169500\r
2019-03-29,173100\r
2019-04-01,179900\r
2019-04-13,175000\r
2019-05-01,175700\r
2019-05-06,185800\r
2019-05-13,181300\r
2019-05-23,179100\r
2019-06-02,184700\r
2019-06-27,169900\r
2019-06-30,188000\r
2019-07-05,174800\r
2019-07-12,169100\r
2019-07-15,166600\r
2019-07-25,151100\r
2019-08-04,135600\r
2019-08-09,131300\r
2019-08-14,118600\r
2019-08-24,103800\r
2019-08-31,105100\r
2019-09-13,87400\r
2019-09-15,90100\r
2019-09-20,98400\r
2019-10-08,83300\r
2019-10-13,95900\r
2019-10-25,98500\r
2019-11-27,118600\r
2020-01-01,161600\r
2020-01-06,156300\r
2020-01-11,160300\r
2020-02-20,155200\r
2020-02-22,155400\r
2020-03-08,178400\r
2020-03-13,122000\r
2020-03-18,175700\r
2020-03-21,182900\r
2020-04-05,171000\r
2020-04-10,176900\r
2020-04-12,181700\r
2020-04-15,166000\r
2020-05-05,181600\r
2020-05-20,190400\r
2020-05-22,181300\r
2020-05-25,185500\r
2020-05-27,187000\r
2020-05-30,185600\r
2020-06-21,174600\r
2020-07-14,168200\r
2020-07-19,152800\r
2020-07-21,144000\r
2020-07-24,147500\r
2020-07-29,145200\r
2020-07-31,128500\r
2020-08-05,109200\r
2020-08-08,117600\r
2020-08-10,118200\r
2020-08-20,91800\r
2020-08-25,81500\r
2020-09-02,70400\r
2020-09-04,69000\r
2020-09-07,75900\r
2020-09-12,71900\r
2020-09-14,72500\r
2020-11-11,82100\r
2020-11-18,72400\r
2020-11-21,80200\r
2020-12-16,99900\r
2021-01-15,140800\r
2021-02-06,186400\r
2021-03-23,172300\r
2021-03-28,178000\r
2021-03-31,177300\r
2021-04-05,178500\r
2021-04-15,184000\r
2021-05-27,193800\r
2021-05-30,184800\r
2021-06-09,188200\r
2021-06-11,186100\r
2021-06-16,181800\r
2021-06-19,183600\r
2021-07-19,184700\r
2021-07-29,184100\r
2021-08-10,179700\r
2021-08-20,166900\r
2021-08-28,155000\r
2021-09-12,153900\r
2021-09-14,148300\r
2021-09-22,149600\r
2021-10-12,147900\r
2021-10-14,146300\r
2021-10-17,143300\r
2021-10-24,147400\r
2021-10-27,144400\r
2021-12-16,181900\r
2021-12-18,182600\r
2021-12-21,184800\r
2022-01-15,183600\r
2022-01-22,176600\r
2022-01-25,176300\r
2022-01-27,173800\r
2022-02-09,176000\r
2022-02-26,169400\r
2022-03-01,171900\r
2022-03-08,174900\r
2022-03-23,178900\r
2022-04-05,181400\r
2022-04-17,176200\r
2022-05-17,185500\r
2022-05-22,184800\r
2022-06-01,182900\r
2022-06-16,174100\r
2022-06-19,166700\r
2022-07-11,140300\r
2022-07-14,148100\r
2022-07-16,139000\r
2022-07-19,134200\r
2022-07-21,124500\r
2022-07-24,122200\r
2022-07-26,129100\r
2022-07-31,104300\r
2022-08-03,92300\r
2022-08-08,90700\r
2022-08-10,83800\r
2022-08-13,79000\r
2022-08-28,66800\r
2022-08-30,67400\r
2022-09-04,62000\r
2022-09-12,60100\r
2022-09-19,55400\r
2022-09-22,59100\r
2022-10-04,61700\r
2022-10-09,59200\r
2022-10-22,56900\r
2022-10-24,55000\r
2022-11-06,60400\r
2022-11-08,63600\r
2022-11-11,62000\r
2022-11-13,71900\r
2022-11-16,61400\r
2023-01-10,94800\r
2023-02-04,116000\r
2023-02-06,116800\r
2023-02-11,118000\r
2023-02-14,121500\r
2023-02-16,115800\r
2023-02-19,116800\r
2023-02-21,136800\r
2023-03-01,129400\r
2023-03-13,130500\r
2023-03-16,135900\r
2023-03-28,144900\r
2023-04-05,149000\r
2023-04-07,151200\r
2023-04-20,153900\r
2023-05-17,176400\r
2023-05-27,185600\r
2023-06-16,187600\r
2023-07-09,182000\r
2023-07-14,191100\r
2023-07-16,174300\r
2023-07-29,184500\r
2023-07-31,176400\r
2023-08-08,170600\r
2023-08-10,171200\r
2023-08-20,155400\r
2023-08-23,151300\r
`;export{r as default};
