const r=`date,value\r
2017-03-14,2035700\r
2017-04-03,1997700\r
2017-04-06,1997700\r
2017-04-10,1997700\r
2017-04-23,2022200\r
2017-04-30,2022200\r
2017-10-05,1472200\r
2017-10-07,1472200\r
2017-10-13,1472200\r
2017-10-15,1476000\r
2017-10-17,1368500\r
2017-10-18,1368500\r
2017-10-20,1368500\r
2017-10-25,1368500\r
2018-02-22,2018200\r
2018-02-24,2018200\r
2018-02-25,2018200\r
2018-02-27,2022900\r
2018-03-24,2026200\r
2018-04-18,2046400\r
2018-04-20,2046400\r
2018-04-21,2046400\r
2018-04-25,2046400\r
2018-05-08,2031700\r
2018-05-11,2031700\r
2018-05-18,2031700\r
2018-06-22,1970100\r
2018-06-27,1997700\r
2018-07-02,2017500\r
2018-07-04,2017500\r
2018-07-07,2011300\r
2018-07-09,1985800\r
2018-07-10,1985800\r
2018-07-17,1979000\r
2018-07-19,1978500\r
2018-07-20,1978500\r
2018-07-24,1978500\r
2018-07-25,1978500\r
2018-07-27,1981900\r
2018-07-29,1956800\r
2018-07-30,1956800\r
2018-08-03,1956800\r
2018-08-04,1956800\r
2018-08-06,1959500\r
2018-09-25,1770500\r
2018-09-27,1770500\r
2018-09-28,1770500\r
2018-09-30,1759800\r
2018-10-05,1725900\r
2018-10-10,1714600\r
2018-10-13,1738800\r
2018-10-15,1687300\r
2018-10-17,1712800\r
2018-10-18,1712800\r
2018-10-20,1640700\r
2018-10-22,1680300\r
2019-02-17,1790000\r
2019-02-20,1790000\r
2019-02-22,1792400\r
2019-02-24,1792400\r
2019-02-25,1792400\r
2019-02-27,1794200\r
2019-03-24,1894100\r
2019-03-29,1905000\r
2019-03-31,1905000\r
2019-04-01,1905000\r
2019-04-11,1866700\r
2019-04-18,1867200\r
2019-04-20,1867200\r
2019-04-26,1867200\r
2019-05-01,1867200\r
2019-05-23,1964600\r
2019-05-25,1964600\r
2019-05-26,1964600\r
2019-06-02,1962600\r
2019-06-04,1962600\r
2019-06-05,1962600\r
2019-06-27,1856300\r
2019-06-29,1856300\r
2019-06-30,1856300\r
2019-07-02,1842300\r
2019-07-04,1850100\r
2019-07-05,1850100\r
2019-07-07,1841000\r
2019-07-09,1841000\r
2019-07-10,1841000\r
2019-07-15,1877600\r
2019-07-17,1847900\r
2019-07-22,1868400\r
2019-07-24,1797900\r
2019-07-25,1797900\r
2019-07-29,1797900\r
2019-07-30,1797900\r
2019-08-01,1801000\r
2019-08-04,1729800\r
2019-08-08,1729800\r
2019-08-09,1729800\r
2019-08-13,1729800\r
2019-08-14,1729800\r
2019-08-16,1729800\r
2019-08-26,1600000\r
2019-08-28,1600000\r
2019-08-29,1600000\r
2019-08-31,1639000\r
2019-09-03,1639000\r
2019-09-07,1639700\r
2019-09-10,1570500\r
2019-09-12,1621000\r
2019-09-15,1568700\r
2019-09-18,1587000\r
2019-09-20,1544700\r
2019-09-22,1544700\r
2019-12-04,1470000\r
2020-02-07,1950200\r
2020-02-10,1948400\r
2020-02-15,1948400\r
2020-02-22,2017200\r
2020-03-28,1947400\r
2020-03-30,1973800\r
2020-03-31,1973800\r
2020-04-02,1988500\r
2020-04-04,1988500\r
2020-04-05,1988500\r
2020-04-07,1982100\r
2020-04-09,1982100\r
2020-04-10,1982100\r
2020-04-12,1998800\r
2020-04-14,2034800\r
2020-04-15,2034800\r
2020-04-17,2034800\r
2020-04-19,2037300\r
2020-04-20,2037300\r
2020-04-22,2032500\r
2020-04-27,1987200\r
2020-05-07,1947200\r
2020-05-15,1925000\r
2020-05-17,1925300\r
2020-05-19,1925300\r
2020-05-20,1925300\r
2020-05-27,1916000\r
2020-05-29,1916000\r
2020-05-30,1916000\r
2020-06-01,1899600\r
2020-06-03,1965200\r
2020-07-31,1739100\r
2020-08-02,1739100\r
2020-08-05,1751300\r
2020-08-07,1751300\r
2020-08-08,1751300\r
2020-08-10,1751300\r
2020-08-12,1751300\r
2020-08-13,1751300\r
2020-08-17,1680400\r
2020-08-20,1723300\r
2020-08-25,1686000\r
2020-09-02,1686000\r
2020-09-04,1703600\r
2020-09-07,1628600\r
2020-09-09,1708500\r
2020-09-11,1708500\r
2020-09-12,1708500\r
2020-09-14,1626900\r
2020-09-16,1626900\r
2020-09-17,1626900\r
2020-09-21,1707400\r
2020-09-22,1707400\r
2021-02-11,1960000\r
2021-02-14,1960000\r
2021-02-21,1993800\r
2021-02-24,1992700\r
2021-02-28,1992700\r
2021-03-01,1992700\r
2021-03-08,2010700\r
2021-03-23,2041400\r
2021-03-28,2047300\r
2021-03-30,2047300\r
2021-03-31,2047300\r
2021-04-02,2030600\r
2021-04-04,2038600\r
2021-04-22,2023300\r
2021-04-24,2023300\r
2021-04-25,2023300\r
2021-04-27,2041200\r
2021-04-30,2041200\r
2021-06-01,1992300\r
2021-06-03,1992400\r
2021-06-04,1992400\r
2021-06-11,1992100\r
2021-06-16,1949400\r
2021-06-19,1949400\r
2021-06-21,1966000\r
2021-07-21,1964400\r
2021-07-23,1964400\r
2021-10-14,1806300\r
2021-10-16,1806300\r
2021-10-19,1806300\r
2021-10-21,1758200\r
2021-10-24,1760500\r
2021-10-27,1671600\r
2021-10-29,1692100\r
2021-11-06,1628500\r
2022-03-03,1830100\r
2022-03-05,1830100\r
2022-03-06,1830100\r
2022-03-08,1816100\r
2022-03-10,1839200\r
2022-03-23,1807800\r
2022-03-25,1807800\r
2022-03-26,1807800\r
2022-03-28,1823500\r
2022-04-04,1793200\r
2022-04-17,1778900\r
2022-04-20,1778900\r
2022-04-22,1804000\r
2022-04-27,1796100\r
2022-06-11,1597800\r
2022-06-13,1597800\r
2022-06-16,1637300\r
2022-06-18,1637300\r
2022-06-19,1637300\r
2022-06-21,1592800\r
2022-06-23,1631700\r
2022-06-28,1479300\r
2022-06-29,1479300\r
2022-07-01,1532200\r
2022-07-11,1432700\r
2022-07-14,1432700\r
2022-07-16,1391900\r
2022-07-18,1392100\r
2022-07-19,1392100\r
2022-07-24,1339600\r
2022-08-10,1178800\r
2022-08-12,1178800\r
2022-08-13,1178800\r
2022-08-15,1178800\r
2022-08-20,1194800\r
2022-08-25,1267800\r
2022-09-02,1264600\r
2022-09-04,1264600\r
2022-10-09,1194000\r
2022-10-12,1194000\r
2022-10-19,1194000\r
2023-02-06,1286200\r
2023-02-08,1286200\r
2023-02-09,1286200\r
2023-02-11,1307100\r
2023-02-13,1307100\r
2023-02-14,1307100\r
2023-02-21,1330600\r
2023-03-01,1325500\r
2023-03-18,1405200\r
2023-05-27,1309200\r
2023-05-29,1309200\r
2023-06-01,1327800\r
2023-06-03,1327800\r
2023-06-04,1327800\r
2023-06-06,1256800\r
2023-06-08,1270100\r
2023-06-09,1270100\r
2023-06-11,1247000\r
2023-06-13,1242900\r
2023-06-14,1242900\r
2023-06-16,1242900\r
2023-07-11,1038600\r
2023-07-14,1038600\r
2023-07-19,1023200\r
2023-08-20,928900\r
2023-08-22,922600\r
2023-08-23,922600\r
`;export{r as default};
