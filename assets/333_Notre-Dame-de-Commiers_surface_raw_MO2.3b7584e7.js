const r=`date,value\r
2017-03-21,1472200\r
2017-03-31,1473800\r
2017-04-03,1511100\r
2017-04-10,1511500\r
2017-04-20,1439900\r
2017-04-23,1476600\r
2017-04-30,1473900\r
2017-05-03,1432600\r
2017-06-02,1485400\r
2017-06-09,1472700\r
2017-06-12,1468500\r
2017-06-19,1427100\r
2017-06-22,1473700\r
2017-07-02,1459600\r
2017-07-04,1443100\r
2017-07-07,1505100\r
2017-07-12,1498900\r
2017-07-14,1479700\r
2017-07-17,1485900\r
2017-08-03,1432400\r
2017-08-06,1440800\r
2017-08-11,1459500\r
2017-08-13,1459500\r
2017-08-18,1441600\r
2017-08-21,1465800\r
2017-08-23,1443200\r
2017-08-26,1478700\r
2017-09-02,1487500\r
2017-09-05,1486200\r
2017-09-07,1480900\r
2017-09-10,1480900\r
2017-09-12,1480900\r
2017-09-17,1470900\r
2017-09-20,1488600\r
2017-09-22,1507400\r
2017-09-25,1507400\r
2017-09-27,1499500\r
2017-10-02,1497500\r
2017-10-05,1513200\r
2017-10-07,1484800\r
2018-03-24,1500800\r
2018-03-26,1485600\r
2018-03-31,1487400\r
2018-04-05,1514300\r
2018-04-18,1521600\r
2018-04-20,1519900\r
2018-04-23,1519900\r
2018-04-25,1497800\r
2018-04-28,1497800\r
2018-05-05,1494800\r
2018-05-15,1454500\r
2018-05-25,1504400\r
2018-05-28,1504400\r
2018-06-09,1496900\r
2018-06-14,1497500\r
2018-06-19,1497200\r
2018-06-22,1479700\r
2018-06-27,1507000\r
2018-06-29,1488100\r
2018-07-02,1487100\r
2018-07-04,1494500\r
2018-07-07,1493700\r
2018-07-09,1486100\r
2018-07-12,1487600\r
2018-07-14,1491300\r
2018-07-17,1491500\r
2018-07-19,1478500\r
2018-07-22,1482600\r
2018-07-24,1477100\r
2018-07-27,1478700\r
2018-07-29,1466100\r
2018-08-01,1477400\r
2018-08-03,1444800\r
2018-08-06,1432800\r
2018-08-08,1433700\r
2018-08-11,1426100\r
2018-08-16,1487300\r
2018-08-18,1487300\r
2018-08-21,1497400\r
2018-08-23,1497400\r
2018-08-26,1491300\r
2018-08-28,1480300\r
2018-08-31,1480300\r
2018-09-02,1463900\r
2018-09-05,1465100\r
2018-09-07,1453600\r
2018-09-10,1458300\r
2018-09-12,1458300\r
2018-09-17,1456000\r
2018-09-20,1480600\r
2018-09-22,1470400\r
2018-09-25,1470400\r
2018-09-27,1471600\r
2018-10-02,1469900\r
2018-10-05,1474900\r
2019-03-19,1443000\r
2019-03-21,1444000\r
2019-03-24,1452900\r
2019-03-26,1445200\r
2019-03-29,1443300\r
2019-03-31,1448900\r
2019-04-05,1454600\r
2019-04-13,1479300\r
2019-04-15,1486000\r
2019-04-18,1503200\r
2019-04-20,1506600\r
2019-04-30,1489900\r
2019-05-05,1504600\r
2019-05-10,1487700\r
2019-05-13,1487700\r
2019-05-15,1473500\r
2019-05-23,1472900\r
2019-05-30,1480700\r
2019-06-02,1491300\r
2019-06-04,1489800\r
2019-06-07,1480400\r
2019-06-12,1484000\r
2019-06-17,1413800\r
2019-06-19,1503000\r
2019-06-24,1497500\r
2019-06-27,1494900\r
2019-06-29,1497000\r
2019-07-02,1488400\r
2019-07-04,1471600\r
2019-07-07,1478400\r
2019-07-12,1475400\r
2019-07-14,1446000\r
2019-07-17,1470100\r
2019-07-19,1440600\r
2019-07-22,1460000\r
2019-07-24,1442500\r
2019-07-29,1444600\r
2019-08-01,1459600\r
2019-08-03,1454800\r
2019-08-06,1467200\r
2019-08-08,1473200\r
2019-08-11,1488100\r
2019-08-16,1492500\r
2019-08-18,1478600\r
2019-08-21,1494500\r
2019-08-23,1477500\r
2019-08-26,1466500\r
2019-08-31,1454500\r
2019-09-02,1460600\r
2019-09-05,1454400\r
2019-09-07,1457100\r
2019-09-12,1457900\r
2019-09-15,1460400\r
2019-09-17,1460800\r
2019-09-20,1455800\r
2019-09-25,1458000\r
2019-09-27,1457300\r
2019-09-30,1472400\r
2019-10-02,1472800\r
2019-10-05,1483000\r
2019-10-07,1484400\r
2019-10-10,1485000\r
2020-03-18,1468500\r
2020-03-20,1475500\r
2020-03-25,1459700\r
2020-03-28,1457500\r
2020-03-30,1457500\r
2020-04-02,1471900\r
2020-04-04,1479100\r
2020-04-07,1493500\r
2020-04-09,1486900\r
2020-04-14,1486400\r
2020-04-22,1488400\r
2020-04-24,1484700\r
2020-04-29,1485900\r
2020-05-04,1480200\r
2020-05-07,1480100\r
2020-05-09,1480100\r
2020-05-14,1465700\r
2020-05-19,1455100\r
2020-05-22,1463700\r
2020-05-24,1464800\r
2020-05-27,1501800\r
2020-05-29,1454500\r
2020-06-03,1454500\r
2020-06-06,1487600\r
2020-06-21,1468800\r
2020-06-23,1482000\r
2020-06-26,1482000\r
2020-06-28,1482000\r
2020-07-01,1485300\r
2020-07-03,1485300\r
2020-07-06,1495100\r
2020-07-08,1493500\r
2020-07-11,1501500\r
2020-07-16,1501500\r
2020-07-18,1490400\r
2020-07-21,1490400\r
2020-07-23,1480800\r
2020-07-26,1464000\r
2020-07-28,1470000\r
2020-07-31,1471000\r
2020-08-02,1480100\r
2020-08-05,1480400\r
2020-08-07,1477900\r
2020-08-10,1474500\r
2020-08-12,1474500\r
2020-08-15,1481900\r
2020-08-20,1474800\r
2020-08-22,1474300\r
2020-08-25,1482600\r
2020-08-27,1480900\r
2020-09-01,1485900\r
2020-09-04,1467600\r
2020-09-06,1482000\r
2020-09-14,1423700\r
2020-09-16,1463000\r
2020-09-26,1442800\r
2020-09-29,1442800\r
2021-03-23,1503700\r
2021-03-25,1504900\r
2021-03-28,1491700\r
2021-03-30,1492500\r
2021-04-02,1479300\r
2021-04-04,1473500\r
2021-04-07,1478000\r
2021-04-09,1484800\r
2021-04-14,1501800\r
2021-04-19,1510700\r
2021-04-22,1512500\r
2021-04-24,1512500\r
2021-05-27,1480200\r
2021-06-03,1499000\r
2021-06-11,1503500\r
2021-06-13,1493800\r
2021-06-16,1456400\r
2021-06-18,1464100\r
2021-06-26,1451800\r
2021-07-21,1469500\r
2021-07-23,1491000\r
2021-07-26,1487600\r
2021-07-28,1491600\r
2021-08-10,1492000\r
2021-08-12,1485800\r
2021-08-15,1489000\r
2021-08-17,1493800\r
2021-08-20,1485900\r
2021-08-22,1489300\r
2021-08-25,1494200\r
2021-08-27,1489500\r
2021-08-30,1481200\r
2021-09-01,1477500\r
2021-09-06,1460200\r
2021-09-11,1459800\r
2021-09-21,1479300\r
2021-09-24,1474400\r
2021-09-29,1484400\r
2021-10-01,1474700\r
2021-10-06,1473100\r
2021-10-09,1473100\r
2022-03-23,1496100\r
2022-03-25,1515100\r
2022-03-28,1511800\r
2022-04-04,1519300\r
2022-04-14,1508800\r
2022-04-17,1512200\r
2022-04-19,1512200\r
2022-04-22,1512200\r
2022-04-27,1502200\r
2022-05-12,1484000\r
2022-05-14,1496200\r
2022-05-17,1494000\r
2022-05-19,1494000\r
2022-05-22,1494000\r
2022-05-29,1481500\r
2022-06-01,1481500\r
2022-06-06,1496000\r
2022-06-11,1493700\r
2022-06-13,1484500\r
2022-06-16,1490400\r
2022-06-18,1496800\r
2022-06-21,1494500\r
2022-06-26,1484100\r
2022-06-28,1489600\r
2022-07-03,1479400\r
2022-07-06,1479400\r
2022-07-08,1492900\r
2022-07-11,1476700\r
2022-07-13,1485500\r
2022-07-16,1487500\r
2022-07-18,1481600\r
2022-07-21,1475800\r
2022-07-26,1490300\r
2022-07-28,1484100\r
2022-07-31,1476400\r
2022-08-02,1446200\r
2022-08-05,1444500\r
2022-08-07,1444400\r
2022-08-10,1467300\r
2022-08-12,1485200\r
2022-08-20,1492200\r
2022-08-22,1494900\r
2022-08-25,1488100\r
2022-08-27,1488100\r
2022-09-01,1470800\r
2022-09-04,1458300\r
2022-09-06,1446800\r
2022-09-09,1462900\r
2022-09-11,1455800\r
2022-09-16,1461200\r
2022-09-19,1472400\r
2022-09-21,1467800\r
2022-09-26,1479000\r
`;export{r as default};
