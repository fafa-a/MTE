const r=`date,value\r
2017-01-19,831800\r
2017-01-26,865000\r
2017-02-15,932800\r
2017-02-18,917500\r
2017-02-25,915200\r
2017-03-10,968700\r
2017-03-17,974300\r
2017-03-30,977300\r
2017-04-09,980800\r
2017-04-19,986900\r
2017-04-29,997900\r
2017-05-16,1012900\r
2017-05-26,998600\r
2017-06-05,953300\r
2017-06-18,1011800\r
2017-06-25,967000\r
2017-07-05,980200\r
2017-07-18,1002900\r
2017-07-28,959300\r
2017-08-02,948500\r
2017-08-04,945200\r
2017-08-14,888100\r
2017-08-17,888200\r
2017-08-22,846800\r
2017-08-24,810800\r
2017-10-11,751800\r
2017-10-16,757000\r
2017-10-26,742700\r
2017-10-31,727500\r
2017-11-07,730200\r
2017-11-17,599900\r
2017-11-22,706800\r
2017-11-25,739700\r
2018-01-14,900500\r
2018-01-24,1014500\r
2018-02-10,982400\r
2018-03-07,1039600\r
2018-03-15,1031300\r
2018-04-19,992600\r
2018-05-06,980000\r
2018-05-11,1006700\r
2018-06-20,990300\r
2018-06-25,1004900\r
2018-07-08,998100\r
2018-07-10,1008300\r
2018-07-15,994900\r
2018-07-18,1026300\r
2018-07-25,976600\r
2018-08-02,982400\r
2018-08-04,976300\r
2018-08-12,979200\r
2018-08-19,995100\r
2018-08-22,980300\r
2018-08-27,918800\r
2018-09-01,975600\r
2018-09-03,963200\r
2018-09-08,959200\r
2018-09-11,969500\r
2018-09-16,958500\r
2018-09-26,967400\r
2018-09-28,960700\r
2018-10-06,951500\r
2018-10-23,902100\r
2018-11-17,925800\r
2018-11-27,931500\r
2019-02-03,997600\r
2019-02-13,987400\r
2019-02-15,966200\r
2019-02-20,980500\r
2019-02-23,960500\r
2019-02-25,992700\r
2019-03-20,993600\r
2019-03-22,966600\r
2019-03-25,965300\r
2019-03-27,986100\r
2019-03-30,974700\r
2019-04-19,1009800\r
2019-05-01,969100\r
2019-05-14,994100\r
2019-05-31,975000\r
2019-07-03,1016800\r
2019-07-05,1004600\r
2019-07-08,1013200\r
2019-07-10,997600\r
2019-07-15,1007400\r
2019-07-23,966600\r
2019-07-25,938400\r
2019-08-02,937000\r
2019-08-04,941600\r
2019-08-22,848100\r
2019-08-29,800100\r
2019-09-03,767100\r
2019-09-11,718500\r
2019-09-13,676800\r
2019-09-16,693200\r
2019-09-18,673900\r
2019-10-08,671100\r
2019-10-11,651900\r
2019-10-13,547100\r
2019-12-05,957400\r
2019-12-10,978900\r
2019-12-15,1032400\r
2019-12-17,1002500\r
2019-12-30,1016900\r
2020-01-11,990200\r
2020-01-16,982700\r
2020-01-19,954300\r
2020-02-03,1000700\r
2020-02-05,1002800\r
2020-02-15,977800\r
2020-02-20,983600\r
2020-03-09,1046000\r
2020-03-21,1019700\r
2020-03-24,1008400\r
2020-04-03,999200\r
2020-04-05,978500\r
2020-04-10,977600\r
2020-04-13,1042900\r
2020-04-15,999300\r
2020-05-18,1012500\r
2020-05-20,1014700\r
2020-05-25,967100\r
2020-05-28,1025600\r
2020-05-30,996000\r
2020-06-24,989000\r
2020-06-27,1031500\r
2020-07-07,1008900\r
2020-07-09,1009300\r
2020-07-12,1016300\r
2020-07-19,989700\r
2020-07-24,987300\r
2020-07-27,997000\r
2020-07-29,1008200\r
2020-08-06,946500\r
2020-08-11,968600\r
2020-09-02,878600\r
2020-09-05,876200\r
2020-09-10,868100\r
2020-09-12,848400\r
2020-09-17,840800\r
2020-09-30,815200\r
2020-10-17,825800\r
2020-10-30,833300\r
2020-11-06,847200\r
2020-11-19,879700\r
2020-11-21,867300\r
2020-11-26,866200\r
2020-11-29,819900\r
2020-12-26,973700\r
2021-01-03,1010600\r
2021-01-08,992500\r
2021-01-10,1009700\r
2021-01-18,1027400\r
2021-02-24,1004800\r
2021-02-27,1015500\r
2021-03-01,1002700\r
2021-03-04,1003500\r
2021-03-06,1008400\r
2021-03-09,991400\r
2021-03-21,985700\r
2021-03-24,976900\r
2021-03-29,992500\r
2021-03-31,1019600\r
2021-04-03,1006600\r
2021-04-05,1019200\r
2021-04-15,1019500\r
2021-04-23,1011200\r
2021-05-08,1026000\r
2021-05-28,1034700\r
2021-05-30,990600\r
2021-06-09,1006000\r
2021-06-12,1000300\r
2021-06-14,1006900\r
2021-07-17,1008200\r
2021-07-19,992100\r
2021-07-22,1003700\r
2021-08-11,995400\r
2021-08-21,1000400\r
2021-08-26,979200\r
2021-08-28,983200\r
2021-08-31,988900\r
2021-09-05,986200\r
2021-09-07,966900\r
2021-09-22,940200\r
2021-09-25,944400\r
2021-09-30,954200\r
2021-10-10,944800\r
2021-10-12,952700\r
2021-10-15,949400\r
2021-10-27,932600\r
2021-11-06,942300\r
2021-11-09,952900\r
2021-12-14,983200\r
2021-12-16,951000\r
2021-12-19,974900\r
2021-12-21,970000\r
2022-01-05,980700\r
2022-01-23,1002100\r
2022-01-25,970100\r
2022-02-09,972400\r
2022-03-01,1017900\r
2022-03-06,1019200\r
2022-03-09,999300\r
2022-03-19,1006200\r
2022-03-24,1000400\r
2022-03-26,990700\r
2022-04-15,973500\r
2022-04-30,1003700\r
2022-05-28,1016400\r
2022-06-17,1006200\r
2022-06-19,1014600\r
2022-07-02,1005300\r
2022-07-04,987300\r
2022-07-07,1022500\r
2022-07-12,1015300\r
2022-07-14,1003500\r
2022-07-17,989600\r
2022-07-24,952700\r
2022-08-03,880000\r
2022-08-06,860400\r
2022-08-11,777600\r
2022-08-28,702300\r
2022-09-05,676000\r
2022-09-15,652800\r
2022-09-20,634400\r
2022-09-22,633300\r
2022-10-05,601100\r
2022-10-12,596600\r
2022-11-16,589300\r
2022-12-11,586700\r
2023-02-04,836300\r
2023-02-09,826400\r
2023-02-12,839400\r
2023-02-14,862300\r
2023-02-17,862200\r
2023-04-08,966300\r
`;export{r as default};
