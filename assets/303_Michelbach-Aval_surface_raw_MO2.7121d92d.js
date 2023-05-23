const r=`date,value\r
2017-02-09,376000\r
2017-02-19,426100\r
2017-03-11,558900\r
2017-03-14,558900\r
2017-04-10,692800\r
2017-04-20,694700\r
2017-04-23,688700\r
2017-04-30,690400\r
2017-05-10,707400\r
2017-05-13,713600\r
2017-06-22,733900\r
2017-06-29,733500\r
2017-07-19,680600\r
2017-07-22,677900\r
2017-07-29,666900\r
2017-08-06,639000\r
2017-08-13,569000\r
2017-08-18,576000\r
2017-08-21,574100\r
2017-08-23,545500\r
2017-08-26,548500\r
2017-09-22,419700\r
2017-09-25,420400\r
2017-09-27,420400\r
2017-10-05,390000\r
2017-10-07,374500\r
2017-10-15,375000\r
2017-10-17,340300\r
2017-10-25,340300\r
2017-11-01,296300\r
2017-12-01,50400\r
2017-12-06,28200\r
2017-12-09,28200\r
2018-02-04,496600\r
2018-02-12,496600\r
2018-02-14,496600\r
2018-04-15,790600\r
2018-04-18,790600\r
2018-04-20,790600\r
2018-04-25,790600\r
2018-04-30,787400\r
2018-05-05,796500\r
2018-05-08,794900\r
2018-05-25,748400\r
2018-05-30,756900\r
2018-06-04,778400\r
2018-07-09,780000\r
2018-07-14,778100\r
2018-07-17,778100\r
2018-07-19,778900\r
2018-07-24,770300\r
2018-07-27,770300\r
2018-07-29,747600\r
2018-08-01,753000\r
2018-08-03,734400\r
2018-08-06,740600\r
2018-08-11,728100\r
2018-08-28,656800\r
2018-09-05,638500\r
2018-09-07,636400\r
2018-09-10,583000\r
2018-09-17,583600\r
2018-09-20,541300\r
2018-09-22,541300\r
2018-09-25,545300\r
2018-09-27,524300\r
2018-09-30,493800\r
2018-10-05,494500\r
2018-10-22,396700\r
2018-12-11,351900\r
2018-12-14,351900\r
2018-12-16,385000\r
2018-12-26,368800\r
2019-02-14,724500\r
2019-02-17,737500\r
2019-02-24,757400\r
2019-02-27,755200\r
2019-03-21,775900\r
2019-03-24,780300\r
2019-03-29,769300\r
2019-03-31,777000\r
2019-04-15,791500\r
2019-04-20,779100\r
2019-04-25,780800\r
2019-05-15,793700\r
2019-05-23,782100\r
2019-05-25,782100\r
2019-05-30,791800\r
2019-06-24,769800\r
2019-06-27,767800\r
2019-06-29,773700\r
2019-07-02,773600\r
2019-07-04,767200\r
2019-07-09,768500\r
2019-07-17,772200\r
2019-07-22,763500\r
2019-07-24,756800\r
2019-07-29,717500\r
2019-08-01,720400\r
2019-08-03,714700\r
2019-08-08,705900\r
2019-08-11,705100\r
2019-08-18,666600\r
2019-08-21,664600\r
2019-08-23,654400\r
2019-08-26,647600\r
2019-08-28,631500\r
2019-08-31,628800\r
2019-09-02,628800\r
2019-09-10,608100\r
2019-09-12,602100\r
2019-09-15,545900\r
2019-09-17,527400\r
2019-09-20,529500\r
2019-09-22,529500\r
2019-10-12,475000\r
2019-12-14,724500\r
2019-12-19,724500\r
2019-12-29,724300\r
2020-01-05,763300\r
2020-01-15,768400\r
2020-01-20,764700\r
2020-01-23,767800\r
2020-01-25,767800\r
2020-02-07,763000\r
2020-02-09,763000\r
2020-02-19,763000\r
2020-02-22,763000\r
2020-03-15,787900\r
2020-03-18,774300\r
2020-03-20,787400\r
2020-03-23,775600\r
2020-03-25,785300\r
2020-03-28,784200\r
2020-03-30,788500\r
2020-04-02,787800\r
2020-04-04,796400\r
2020-04-07,794400\r
2020-04-09,794700\r
2020-04-12,787600\r
2020-04-14,789400\r
2020-04-17,784600\r
2020-04-19,787000\r
2020-04-22,778800\r
2020-04-24,776900\r
2020-04-27,777800\r
2020-05-09,629400\r
2020-05-12,629400\r
2020-05-17,633400\r
2020-05-19,786800\r
2020-05-27,786400\r
2020-05-29,785500\r
2020-06-01,781700\r
2020-06-23,784600\r
2020-07-01,796300\r
2020-07-06,785000\r
2020-07-08,785000\r
2020-07-18,791400\r
2020-07-21,777100\r
2020-07-23,775800\r
2020-07-31,775200\r
2020-08-05,766000\r
2020-08-07,751400\r
2020-08-12,736200\r
2020-08-15,736200\r
2020-08-20,716300\r
2020-09-11,648100\r
2020-09-14,639100\r
2020-09-16,639100\r
2020-09-21,642700\r
2020-10-04,600700\r
2020-11-25,680300\r
2020-11-28,680300\r
2020-11-30,681900\r
2020-12-10,683300\r
2021-01-24,714300\r
2021-02-23,788500\r
2021-02-28,795500\r
2021-03-08,786800\r
2021-03-30,798100\r
2021-04-02,792900\r
2021-04-04,794300\r
2021-04-24,791000\r
2021-04-27,790700\r
2021-05-24,781300\r
2021-05-29,788200\r
2021-06-01,784400\r
2021-06-03,784400\r
2021-06-13,782600\r
2021-06-16,779800\r
2021-06-18,775000\r
2021-06-21,769800\r
2021-07-18,776300\r
2021-07-21,779100\r
2021-07-23,777200\r
2021-08-12,779500\r
2021-08-15,775700\r
2021-09-01,757000\r
2021-09-04,760000\r
2021-09-06,760100\r
2021-09-21,741200\r
2021-09-24,742000\r
2021-10-01,738600\r
2021-10-09,730400\r
2022-01-14,779300\r
2022-01-19,779300\r
2022-01-24,770600\r
2022-02-08,764800\r
2022-02-11,764800\r
2022-02-13,782900\r
2022-02-23,770700\r
2022-02-28,783400\r
2022-03-03,786900\r
2022-03-05,787100\r
2022-03-08,787600\r
2022-03-10,784900\r
2022-03-20,794100\r
2022-03-23,794200\r
2022-03-25,793800\r
2022-03-28,794300\r
2022-04-04,786600\r
2022-04-14,789400\r
2022-04-17,789000\r
2022-04-22,786600\r
2022-06-18,766800\r
2022-06-23,760500\r
2022-06-28,765300\r
2022-07-03,754500\r
2022-07-06,745600\r
2022-07-08,745400\r
2022-07-11,745600\r
2022-07-13,737500\r
2022-07-16,741200\r
2022-07-18,724700\r
2022-07-28,718400\r
2022-07-31,667200\r
2022-08-02,669200\r
2022-08-07,645100\r
2022-08-10,637200\r
2022-08-12,617100\r
2022-08-17,610800\r
2022-08-22,588100\r
2022-08-25,562700\r
2022-08-30,562700\r
2022-09-01,562700\r
2022-10-26,542800\r
2023-02-08,773600\r
2023-02-11,778400\r
2023-02-13,774800\r
2023-02-16,777000\r
2023-02-21,769800\r
2023-04-04,792700\r
2023-04-09,794600\r
`;export{r as default};