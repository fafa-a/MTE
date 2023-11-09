const r=`date,value\r
2017-02-22,8000\r
2017-02-25,1400\r
2017-03-07,1300\r
2017-03-14,1000\r
2017-03-17,1500\r
2017-03-27,1300\r
2017-04-03,200\r
2017-04-06,200\r
2017-04-16,4300\r
2017-04-23,19600\r
2017-05-23,845900\r
2017-05-26,919700\r
2017-06-15,1484100\r
2017-06-22,1507000\r
2017-06-25,1502100\r
2017-07-02,1517600\r
2017-07-05,1479300\r
2017-07-07,1450900\r
2017-07-10,1450900\r
2017-07-12,1442200\r
2017-07-27,1431200\r
2017-07-30,1403200\r
2017-08-04,1423800\r
2017-08-06,1417500\r
2017-08-11,1406200\r
2017-08-14,1411700\r
2017-08-19,1396100\r
2017-08-21,1403500\r
2017-08-24,1424300\r
2017-08-26,1395700\r
2017-08-29,1395700\r
2017-09-05,1380900\r
2017-09-08,1345300\r
2017-09-10,1345300\r
2017-09-13,1372800\r
2017-09-20,1359700\r
2017-09-23,1359700\r
2017-09-28,1358400\r
2017-10-03,1313000\r
2017-10-05,1321000\r
2017-10-08,1343700\r
2017-10-10,1336500\r
2017-10-13,1336900\r
2017-10-15,1324600\r
2017-10-18,1344500\r
2017-10-20,1317500\r
2017-10-23,1342000\r
2017-10-25,1317500\r
2017-10-28,1338600\r
2017-10-30,1349500\r
2018-02-25,2100\r
2018-02-27,2100\r
2018-03-02,2100\r
2018-03-07,2100\r
2018-04-18,100\r
2018-04-21,1500\r
2018-04-26,600\r
2018-05-11,28000\r
2018-05-18,28000\r
2018-05-21,46100\r
2018-06-20,1560800\r
2018-06-22,1560800\r
2018-06-25,1553700\r
2018-06-27,1559000\r
2018-07-02,1551300\r
2018-07-05,1551300\r
2018-07-07,1550400\r
2018-07-10,1558100\r
2018-07-15,1555500\r
2018-07-17,1560800\r
2018-07-20,1554200\r
2018-07-25,1545100\r
2018-07-27,1559900\r
2018-07-30,1553100\r
2018-08-14,1539200\r
2018-08-16,1545000\r
2018-08-19,1547900\r
2018-08-21,1547200\r
2018-08-24,1538800\r
2018-08-26,1549900\r
2018-08-29,1547300\r
2018-08-31,1546400\r
2018-09-03,1525000\r
2018-09-05,1544300\r
2018-09-08,1496200\r
2018-09-10,1496200\r
2018-09-13,1495500\r
2018-09-18,1499000\r
2018-09-20,1505700\r
2018-09-23,1490200\r
2018-09-25,1510500\r
2018-09-28,1489000\r
2018-09-30,1504300\r
2018-10-03,1498100\r
2018-10-05,1516300\r
2018-10-13,1502500\r
2018-10-20,1411600\r
2018-10-23,1440300\r
2018-10-25,1460300\r
2018-10-30,1460300\r
2018-11-04,1458700\r
2019-02-20,1500\r
2019-02-22,3600\r
2019-02-25,2600\r
2019-02-27,2000\r
2019-03-02,2200\r
2019-03-07,2500\r
2019-03-09,3000\r
2019-03-12,2000\r
2019-03-14,1200\r
2019-03-17,700\r
2019-03-19,1300\r
2019-03-22,600\r
2019-03-24,400\r
2019-03-27,1100\r
2019-03-29,500\r
2019-04-01,1000\r
2019-04-08,2200\r
2019-04-13,34800\r
2019-04-28,1600\r
2019-05-01,2800\r
2019-05-06,2800\r
2019-05-13,1100\r
2019-05-16,89900\r
2019-05-23,335100\r
2019-05-28,595900\r
2019-05-31,875200\r
2019-06-02,1315900\r
2019-06-07,1315900\r
2019-06-12,1398500\r
2019-06-22,1245500\r
2019-06-25,1425900\r
2019-06-27,1435200\r
2019-06-30,1435200\r
2019-07-02,1435100\r
2019-07-05,1451400\r
2019-07-07,1450800\r
2019-07-10,1468900\r
2019-07-12,1469700\r
2019-07-15,1475200\r
2019-07-17,1475200\r
2019-07-20,1473600\r
2019-07-22,1464800\r
2019-07-25,1467600\r
2019-08-01,1453000\r
2019-08-04,1453000\r
2019-08-06,1459800\r
2019-08-09,1459600\r
2019-08-11,1449000\r
2019-08-14,1458200\r
2019-08-16,1452200\r
2019-08-21,1462000\r
2019-08-24,1463500\r
2019-08-26,1478000\r
2019-08-29,1478000\r
2019-08-31,1472900\r
2019-09-03,1472100\r
2019-09-05,1458600\r
2019-09-08,1443100\r
2019-09-13,1434900\r
2019-09-15,1434900\r
2019-09-18,1436800\r
2019-09-20,1436900\r
2019-09-30,1436000\r
2019-10-03,1418600\r
2019-10-05,1418400\r
2019-10-08,1416000\r
2019-10-10,1419000\r
2019-10-13,1415200\r
2019-10-15,1415800\r
2019-10-25,1411600\r
2020-02-20,22600\r
2020-02-22,21600\r
2020-02-27,25000\r
2020-03-01,23500\r
2020-03-08,17800\r
2020-03-11,3800\r
2020-03-13,3400\r
2020-03-18,3200\r
2020-03-21,3100\r
2020-03-28,3800\r
2020-03-31,3600\r
2020-04-05,4100\r
2020-04-07,900\r
2020-04-10,2200\r
2020-04-15,1900\r
2020-04-25,6600\r
2020-05-07,1218600\r
2020-05-17,1242200\r
2020-05-20,1313900\r
2020-05-22,1346200\r
2020-05-25,1402300\r
2020-05-27,1399000\r
2020-05-30,1393000\r
2020-06-06,1401700\r
2020-06-21,1445700\r
2020-06-24,1478700\r
2020-06-26,1475900\r
2020-07-01,1477700\r
2020-07-04,1480600\r
2020-07-06,1478600\r
2020-07-09,1484300\r
2020-07-11,1482500\r
2020-07-14,1484700\r
2020-07-16,1482900\r
2020-07-19,1482800\r
2020-07-21,1480100\r
2020-07-24,1481100\r
2020-07-26,1474700\r
2020-07-29,1479300\r
2020-07-31,1474900\r
2020-08-03,1474400\r
2020-08-05,1469100\r
2020-08-08,1474500\r
2020-08-10,1473500\r
2020-08-13,1473400\r
2020-08-15,1466000\r
2020-08-20,1452700\r
2020-08-23,1464100\r
2020-08-25,1452300\r
2020-08-30,1456500\r
2020-09-02,1456500\r
2020-09-04,1425000\r
2020-09-07,1422100\r
2020-09-12,1449000\r
2020-09-14,1423400\r
2020-09-17,1423400\r
2020-09-19,1423400\r
2020-09-24,1464400\r
2020-09-27,1422900\r
2020-09-29,1409800\r
2020-10-04,1437800\r
2020-10-12,1437800\r
2020-10-14,1427900\r
2020-10-17,1466800\r
2020-10-24,1467300\r
2020-11-01,1441300\r
2020-11-08,1427800\r
2021-02-19,8300\r
2021-02-24,5900\r
2021-03-01,3500\r
2021-03-11,1000\r
2021-03-28,10500\r
2021-03-31,2400\r
2021-04-02,2400\r
2021-04-05,2600\r
2021-04-07,2600\r
2021-04-12,10000\r
2021-04-15,10000\r
2021-05-20,1156900\r
2021-05-25,1187300\r
2021-05-27,1187300\r
2021-05-30,1141500\r
2021-06-14,1265900\r
2021-06-16,1274800\r
2021-06-19,1274800\r
2021-06-21,1259400\r
2021-06-26,1310100\r
2021-06-29,1313300\r
2021-07-01,1275900\r
2021-07-09,1315800\r
2021-07-11,1282700\r
2021-07-14,1330500\r
2021-07-16,1302500\r
2021-07-19,1328600\r
2021-07-21,1344600\r
2021-07-26,1343200\r
2021-07-29,1423100\r
2021-07-31,1369500\r
2021-08-10,1298600\r
2021-08-13,1303100\r
2021-08-15,1303100\r
2021-08-18,1303100\r
2021-08-20,1278700\r
2021-08-23,1245800\r
2021-08-25,1265700\r
2021-08-28,1237200\r
2021-08-30,1237400\r
2021-09-04,1250500\r
2021-09-17,1196000\r
2021-09-19,1230000\r
2021-09-22,1215600\r
2021-09-27,1215600\r
2021-09-29,1256700\r
2021-10-07,1224700\r
2021-10-09,1202200\r
2021-10-12,1199900\r
2021-10-14,1207200\r
2021-10-17,1189200\r
2021-10-19,1171100\r
2021-10-22,1176700\r
2021-10-24,1176000\r
2021-10-27,1191200\r
2021-11-06,1226100\r
2022-02-24,541600\r
2022-02-26,471400\r
2022-03-01,522500\r
2022-03-03,448400\r
2022-03-08,670700\r
2022-03-26,1285100\r
2022-04-10,617000\r
2022-04-17,721300\r
2022-04-22,104400\r
2022-04-25,104500\r
2022-05-10,1263600\r
2022-05-12,1263700\r
2022-05-15,988200\r
2022-05-17,1062000\r
2022-05-20,862400\r
2022-05-22,640400\r
2022-05-27,1037200\r
2022-05-30,758600\r
2022-06-01,1068900\r
2022-06-04,1076700\r
2022-06-06,1078400\r
2022-06-09,541900\r
2022-06-11,541900\r
2022-06-14,390600\r
2022-06-16,651500\r
2022-06-19,633400\r
2022-06-26,1134900\r
2022-06-29,1148400\r
2022-07-01,1133500\r
2022-07-04,1138700\r
2022-07-09,991900\r
2022-07-11,1167600\r
2022-07-14,1056500\r
2022-07-16,1159400\r
2022-07-19,1160200\r
2022-07-21,1154600\r
2022-07-24,1079800\r
2022-07-26,1157100\r
2022-07-31,1165600\r
2022-08-03,1160100\r
2022-08-05,1166900\r
2022-08-08,1174800\r
2022-08-10,1171300\r
2022-08-13,1172800\r
2022-08-20,1185900\r
2022-08-23,1191100\r
2022-08-28,1186100\r
2022-08-30,1180700\r
2022-09-02,1201900\r
2022-09-04,1189000\r
2022-09-19,1181200\r
2022-09-22,1202000\r
2022-09-27,1202000\r
2022-10-02,1212400\r
2022-10-04,1222500\r
2022-10-09,1210600\r
2022-10-12,1220900\r
2022-10-22,1213000\r
2023-02-19,307400\r
2023-02-24,1302900\r
2023-02-26,1298300\r
2023-03-01,1298500\r
2023-03-03,8700\r
2023-03-06,2000\r
2023-03-13,159100\r
2023-03-16,1291300\r
2023-03-28,824400\r
2023-04-02,824400\r
2023-04-05,858100\r
2023-04-07,1105700\r
2023-04-12,1146500\r
2023-04-15,1146500\r
2023-04-17,1142200\r
2023-04-20,95400\r
2023-04-27,95400\r
2023-05-17,1186400\r
2023-05-27,1186400\r
2023-06-16,1360200\r
2023-06-19,1360200\r
2023-06-24,1397400\r
2023-06-26,1397400\r
2023-06-29,887400\r
2023-07-09,1477900\r
2023-07-11,1477900\r
2023-07-14,1486800\r
2023-07-16,1490700\r
2023-07-19,1494100\r
2023-07-24,1495600\r
2023-07-26,1497000\r
2023-07-29,1489600\r
2023-07-31,1482900\r
2023-08-05,1500900\r
2023-08-08,1504300\r
2023-08-10,1510900\r
2023-08-13,1510000\r
2023-08-15,1500500\r
2023-08-18,1502200\r
2023-08-20,1496900\r
2023-08-23,1493400\r
2023-08-25,1493000\r
2023-08-30,1507800\r
2023-09-04,1521500\r
2023-09-24,1478900\r
2023-09-27,1486700\r
2023-09-29,1469600\r
2023-10-02,1472600\r
2023-10-04,1463100\r
2023-10-07,1434300\r
2023-10-12,1420800\r
2023-10-17,1404500\r
2023-10-24,1405800\r
2023-10-27,1405800\r
`;export{r as default};
