const r=`date,value\r
2017-02-15,843700\r
2017-02-22,843700\r
2017-02-25,902300\r
2017-03-17,1041100\r
2017-03-27,1041100\r
2017-04-06,1208900\r
2017-05-16,1328900\r
2017-05-26,1360800\r
2017-06-02,1360800\r
2017-06-05,1365600\r
2017-06-12,1326000\r
2017-07-05,1382400\r
2017-07-07,1382400\r
2017-08-14,1022500\r
2017-08-17,1022500\r
2017-08-19,1022500\r
2017-08-21,1022500\r
2017-08-22,1022500\r
2017-08-24,1022500\r
2017-08-26,885700\r
2017-08-29,885700\r
2017-09-03,885700\r
2017-09-08,750000\r
2017-09-13,749500\r
2017-09-15,749500\r
2017-10-08,784400\r
2017-10-10,784400\r
2017-10-11,784400\r
2017-10-13,787000\r
2017-10-15,791600\r
2017-10-16,791600\r
2017-10-18,791600\r
2017-10-20,774100\r
2017-10-23,778200\r
2017-10-25,752300\r
2017-10-26,752300\r
2017-10-28,752300\r
2017-10-30,752300\r
2017-10-31,752300\r
2017-11-02,752300\r
2017-11-07,685800\r
2017-11-14,685800\r
2017-11-15,685800\r
2017-11-17,724100\r
2017-11-19,722300\r
2017-11-22,727000\r
2017-11-24,727000\r
2017-11-25,727000\r
2017-11-27,707400\r
2018-02-15,1420400\r
2018-02-25,1481400\r
2018-02-27,1471700\r
2018-03-02,1523800\r
2018-03-07,1523800\r
2018-03-09,1519100\r
2018-03-22,1495000\r
2018-04-01,1487000\r
2018-04-21,1522200\r
2018-04-23,1522200\r
2018-04-24,1522200\r
2018-04-26,1522200\r
2018-05-11,1517700\r
2018-05-19,1517700\r
2018-05-21,1517700\r
2018-05-23,1437300\r
2018-06-20,1523400\r
2018-06-22,1523400\r
2018-06-23,1523400\r
2018-06-25,1540800\r
2018-06-28,1540800\r
2018-07-02,1543000\r
2018-07-03,1543000\r
2018-07-07,1511000\r
2018-07-08,1511000\r
2018-07-10,1514400\r
2018-07-15,1488000\r
2018-07-18,1488000\r
2018-07-22,1482300\r
2018-07-23,1482300\r
2018-07-25,1484100\r
2018-07-27,1468300\r
2018-07-30,1474700\r
2018-08-01,1474700\r
2018-08-02,1474700\r
2018-08-04,1465500\r
2018-08-06,1431200\r
2018-08-11,1413000\r
2018-08-12,1413000\r
2018-08-19,1465700\r
2018-08-21,1465700\r
2018-08-22,1465700\r
2018-08-26,1465700\r
2018-08-27,1465700\r
2018-09-03,1335700\r
2018-09-05,1335700\r
2018-09-08,1386400\r
2018-09-10,1386400\r
2018-09-11,1386400\r
2018-09-16,1380600\r
2018-09-18,1380600\r
2018-09-23,1324400\r
2018-09-25,1324400\r
2018-09-26,1324400\r
2018-09-28,1327000\r
2018-09-30,1327000\r
2018-10-03,1315200\r
2018-10-05,1294200\r
2018-10-06,1294200\r
2018-10-23,1226200\r
2018-10-25,1226200\r
2018-11-12,1171700\r
2018-11-15,1171700\r
2018-11-17,1257100\r
2018-11-22,1257100\r
2018-11-24,1217200\r
2018-11-27,1227400\r
2019-02-15,1352800\r
2019-02-17,1352800\r
2019-02-18,1352800\r
2019-02-20,1362900\r
2019-02-22,1362900\r
2019-02-23,1362900\r
2019-02-25,1355000\r
2019-02-27,1355000\r
2019-03-07,1362900\r
2019-03-12,1371600\r
2019-03-22,1358400\r
2019-03-24,1333200\r
2019-03-25,1333200\r
2019-03-27,1348400\r
2019-03-29,1348400\r
2019-03-30,1348400\r
2019-04-01,1348400\r
2019-04-08,1337800\r
2019-04-09,1337800\r
2019-05-01,1331100\r
2019-05-06,1339200\r
2019-05-11,1339200\r
2019-05-13,1339200\r
2019-05-14,1339200\r
2019-05-16,1340300\r
2019-05-23,1368200\r
2019-05-31,1368200\r
2019-07-05,1372800\r
2019-07-08,1372800\r
2019-07-10,1379000\r
2019-07-12,1379000\r
2019-07-13,1379000\r
2019-07-15,1366700\r
2019-07-17,1366700\r
2019-07-22,1383900\r
2019-07-23,1383900\r
2019-07-25,1344400\r
2019-07-28,1364700\r
2019-08-02,1227600\r
2019-08-04,1227600\r
2019-08-09,1055200\r
2019-08-14,968600\r
2019-08-16,968600\r
2019-08-17,968600\r
2019-08-21,968900\r
2019-08-22,968900\r
2019-08-24,921200\r
2019-08-26,929900\r
2019-08-29,924000\r
2019-08-31,837700\r
2019-09-03,837700\r
2019-09-06,837700\r
2019-09-08,837700\r
2019-09-13,568400\r
2019-09-15,565300\r
2019-09-16,565300\r
2019-09-20,565300\r
2019-09-21,565300\r
2019-10-08,473200\r
2019-10-11,473200\r
2019-10-13,494200\r
2019-10-15,494200\r
2019-10-25,478200\r
2020-02-05,1295200\r
2020-02-07,1295200\r
2020-02-08,1295200\r
2020-02-15,1295200\r
2020-02-18,1295200\r
2020-02-20,1298700\r
2020-02-22,1282900\r
2020-03-21,1472100\r
2020-03-24,1472100\r
2020-03-26,1425900\r
2020-03-28,1433200\r
2020-03-29,1433200\r
2020-03-31,1433200\r
2020-04-03,1433200\r
2020-04-05,1409500\r
2020-04-08,1419900\r
2020-04-10,1417500\r
2020-04-12,1486900\r
2020-04-15,1471700\r
2020-04-25,1487100\r
2020-05-05,1448100\r
2020-05-07,1448100\r
2020-05-08,1448100\r
2020-05-17,1448100\r
2020-05-18,1448100\r
2020-05-20,1517000\r
2020-05-22,1505000\r
2020-05-25,1513600\r
2020-05-27,1513600\r
2020-05-28,1513600\r
2020-05-30,1498800\r
2020-06-12,1503200\r
2020-06-14,1503200\r
2020-07-19,1473700\r
2020-07-21,1473700\r
2020-07-22,1473700\r
2020-07-24,1475000\r
2020-07-27,1475000\r
2020-07-29,1475000\r
2020-07-31,1475000\r
2020-08-03,1462000\r
2020-08-05,1392900\r
2020-08-06,1392900\r
2020-08-08,1386400\r
2020-08-10,1304900\r
2020-08-15,1304900\r
2020-08-20,1295900\r
2020-08-21,1295900\r
2020-08-23,1295900\r
2020-09-02,939500\r
2020-09-04,939500\r
2020-09-05,939500\r
2020-09-07,939500\r
2020-09-10,939500\r
2020-09-12,939500\r
2020-09-14,939500\r
2020-09-17,910200\r
2020-11-11,800200\r
2020-11-14,800200\r
2020-11-16,800200\r
2020-11-18,800200\r
2020-11-19,800200\r
2020-11-21,865400\r
2020-11-23,865400\r
2020-11-26,849100\r
2020-11-29,874000\r
2021-02-14,1535800\r
2021-02-17,1535800\r
2021-02-19,1547600\r
2021-02-24,1527300\r
2021-02-27,1538000\r
2021-03-01,1502000\r
2021-03-04,1529600\r
2021-03-09,1476800\r
2021-03-21,1474800\r
2021-03-23,1474800\r
2021-03-24,1474800\r
2021-03-26,1503500\r
2021-03-28,1503500\r
2021-03-29,1503500\r
2021-03-31,1534900\r
2021-04-02,1537000\r
2021-04-03,1537000\r
2021-04-05,1549800\r
2021-04-07,1549800\r
2021-04-15,1547900\r
2021-04-17,1504200\r
2021-04-20,1504200\r
2021-04-22,1504200\r
2021-04-23,1504200\r
2021-06-14,1525200\r
2021-06-16,1525200\r
2021-06-19,1525200\r
2021-06-21,1525200\r
2021-07-19,1515300\r
2021-07-21,1515300\r
2021-07-22,1515300\r
2021-07-29,1515300\r
2021-08-28,1329500\r
2021-08-30,1329500\r
2021-08-31,1329500\r
2021-09-05,1329500\r
2021-09-07,1329500\r
2021-09-12,1228200\r
2021-09-17,1228300\r
2021-09-22,1220700\r
2021-10-07,1192000\r
2021-10-10,1192000\r
2021-10-12,1204100\r
2021-10-14,1204100\r
2021-10-17,1204100\r
2021-10-19,1193200\r
2021-10-20,1193200\r
2021-10-27,1127200\r
2022-02-09,1500100\r
2022-03-21,1538100\r
2022-03-23,1538100\r
2022-03-24,1538100\r
2022-03-26,1541500\r
2022-04-05,1607300\r
2022-04-10,1606800\r
2022-04-15,1612700\r
2022-04-17,1520100\r
2022-04-25,1520600\r
2022-07-14,1372600\r
2022-07-16,1372600\r
2022-07-17,1372600\r
2022-07-19,1372600\r
2022-07-21,1372600\r
2022-07-22,1372600\r
2022-07-24,1373000\r
2022-07-26,1246300\r
2022-07-27,1246300\r
2022-07-31,1246300\r
2022-08-01,1246300\r
2022-08-03,1247200\r
2022-08-28,683100\r
2022-08-30,683100\r
2022-09-04,643200\r
2022-09-05,643200\r
2022-09-22,525300\r
2022-10-02,542000\r
2022-10-04,511100\r
2022-10-05,511100\r
2022-10-07,511100\r
2022-10-09,511100\r
2022-10-12,511100\r
2022-11-06,453100\r
2022-11-08,453100\r
2022-11-11,455000\r
2022-11-13,455000\r
2022-11-16,439500\r
2022-11-24,453400\r
2023-02-04,1105900\r
2023-02-06,1105900\r
2023-02-09,1131800\r
2023-02-11,1131800\r
2023-02-12,1131800\r
2023-02-14,1131800\r
2023-02-16,1105300\r
2023-02-17,1105300\r
2023-02-19,1105300\r
2023-02-24,1206200\r
2023-02-26,1206200\r
2023-03-01,1206200\r
2023-03-03,1206200\r
2023-03-04,1206200\r
2023-03-16,1260400\r
2023-04-05,1335000\r
2023-04-07,1335000\r
2023-04-08,1335000\r
2023-04-15,1335000\r
`;export{r as default};
