const r=`date,value\r
2017-02-19,2555100\r
2017-03-11,2596100\r
2017-03-14,2730200\r
2017-04-10,2855800\r
2017-04-20,2842200\r
2017-04-23,2787100\r
2017-04-30,2778300\r
2017-05-10,2886700\r
2017-05-13,2887300\r
2017-06-19,2869200\r
2017-06-22,2869200\r
2017-06-29,2868800\r
2017-08-23,2508400\r
2017-08-26,2508400\r
2017-09-22,2439500\r
2017-09-25,2297900\r
2017-09-27,2297900\r
2017-10-15,2297300\r
2017-10-17,2330100\r
2017-10-25,2334800\r
2017-10-27,2268200\r
2018-02-24,2623300\r
2018-02-27,2547000\r
2018-03-04,2547000\r
2018-03-24,2661000\r
2018-03-31,2666200\r
2018-04-08,2815000\r
2018-04-15,2817100\r
2018-04-18,2822500\r
2018-04-20,2824900\r
2018-04-25,2824900\r
2018-04-30,2745000\r
2018-05-05,2805500\r
2018-05-08,2826500\r
2018-05-18,2822600\r
2018-05-25,2747300\r
2018-06-29,2788400\r
2018-07-02,2814500\r
2018-07-04,2812400\r
2018-07-09,2846800\r
2018-07-14,2880700\r
2018-07-17,2855400\r
2018-07-19,2805600\r
2018-07-24,2756600\r
2018-07-27,2761100\r
2018-08-03,2667900\r
2018-08-06,2644900\r
2018-08-11,2645900\r
2018-08-16,2508300\r
2018-08-18,2446700\r
2018-08-21,2383800\r
2018-08-23,2419300\r
2018-08-26,2387500\r
2018-08-28,2378300\r
2018-09-17,2180900\r
2018-09-20,2180900\r
2018-09-22,2180900\r
2018-09-25,2235900\r
2018-09-27,2110300\r
2018-09-30,2071900\r
2018-10-05,2089600\r
2018-10-10,2010800\r
2018-10-12,2016900\r
2018-10-20,1978900\r
2018-10-22,1986100\r
2019-02-17,1716300\r
2019-02-24,1685000\r
2019-02-27,1691600\r
2019-03-21,1780100\r
2019-03-24,1850200\r
2019-03-29,1796800\r
2019-03-31,1806500\r
2019-04-15,1902100\r
2019-04-18,1898700\r
2019-04-20,1834600\r
2019-04-25,1834600\r
2019-05-15,1891800\r
2019-05-23,1962200\r
2019-05-25,1962200\r
2019-05-30,1962200\r
2019-06-04,2017800\r
2019-06-07,1987300\r
2019-06-19,1995300\r
2019-06-24,1977300\r
2019-06-27,1984700\r
2019-06-29,1951500\r
2019-07-02,1961400\r
2019-07-04,1935700\r
2019-07-09,1935500\r
2019-07-17,1930600\r
2019-07-22,1824800\r
2019-07-24,1826300\r
2019-07-29,1760300\r
2019-08-01,1778300\r
2019-08-03,1752100\r
2019-08-08,1724800\r
2019-08-11,1742000\r
2019-08-23,1584400\r
2019-08-26,1570700\r
2019-08-28,1557500\r
2019-08-31,1530100\r
2019-09-02,1528600\r
2019-09-12,1464100\r
2019-09-15,1361100\r
2019-09-17,1376400\r
2019-09-20,1281300\r
2019-09-22,1281700\r
2020-03-15,1840200\r
2020-03-18,1837300\r
2020-03-20,1805700\r
2020-03-23,1814000\r
2020-03-25,1874400\r
2020-03-28,1868500\r
2020-03-30,1905900\r
2020-04-02,1919900\r
2020-04-04,1961200\r
2020-04-07,1960300\r
2020-04-09,1970500\r
2020-04-12,1940100\r
2020-04-14,1950100\r
2020-04-17,1974100\r
2020-04-19,1961800\r
2020-04-22,1948800\r
2020-04-24,1982300\r
2020-04-27,1970000\r
2020-05-07,1994400\r
2020-05-09,2070000\r
2020-05-12,2086800\r
2020-05-17,2098700\r
2020-05-19,2071700\r
2020-05-27,2044000\r
2020-05-29,2050900\r
2020-06-01,2016100\r
2020-06-08,1983400\r
2020-06-23,1991900\r
2020-07-01,1991900\r
2020-07-06,1994400\r
2020-07-08,1994400\r
2020-07-31,1815900\r
2020-08-05,1778100\r
2020-08-07,1744300\r
2020-08-12,1677100\r
2020-08-15,1673600\r
2020-08-20,1556400\r
2020-09-04,1477400\r
2020-09-09,1432700\r
2020-09-11,1432700\r
2020-09-14,1476900\r
2020-09-16,1409500\r
2020-09-21,1414200\r
2020-10-04,1372200\r
2020-10-31,1498200\r
2021-02-21,2025800\r
2021-02-23,2093600\r
2021-02-28,2039200\r
2021-03-08,2087100\r
2021-03-28,2045100\r
2021-03-30,2128800\r
2021-04-02,2060500\r
2021-04-04,2073200\r
2021-04-24,2070100\r
2021-04-27,2104400\r
2021-05-29,2143400\r
2021-06-01,2144300\r
2021-06-03,2157500\r
2021-06-11,2207900\r
2021-06-13,2203000\r
2021-06-16,2237300\r
2021-06-18,2237300\r
2021-06-21,2193200\r
2021-07-18,2423000\r
2021-07-21,2510900\r
2021-07-23,2473400\r
2021-09-01,2593200\r
2021-09-04,2610300\r
2021-09-06,2608900\r
2021-09-24,2566900\r
2021-10-01,2566900\r
2021-10-09,2567000\r
2021-10-14,2640200\r
2021-10-16,2600100\r
2021-10-21,2563900\r
2021-10-24,2529200\r
2021-10-29,2555800\r
2022-02-28,2642300\r
2022-03-03,2661700\r
2022-03-05,2648800\r
2022-03-08,2666000\r
2022-03-10,2660900\r
2022-03-20,2724500\r
2022-03-23,2749600\r
2022-03-25,2715000\r
2022-03-28,2740100\r
2022-04-04,2727900\r
2022-04-17,2779200\r
2022-04-22,2827100\r
2022-04-27,2827100\r
2022-05-14,2838200\r
2022-05-17,2850700\r
2022-05-19,2852500\r
2022-06-01,2702000\r
2022-06-11,2782500\r
2022-06-13,2844300\r
2022-06-16,2814400\r
2022-06-18,2842900\r
2022-06-23,2837000\r
2022-06-28,2862100\r
2022-07-03,2889700\r
2022-07-06,2903000\r
2022-07-08,2886400\r
2022-07-11,2857700\r
2022-07-13,2893400\r
2022-07-16,2883900\r
2022-07-18,2860700\r
2022-07-28,2873200\r
2022-08-07,2614600\r
2022-08-10,2670400\r
2022-08-12,2609400\r
2022-08-17,2609500\r
2022-08-22,2453600\r
2022-08-25,2444700\r
2022-08-30,2542000\r
2022-09-01,2542000\r
2022-09-04,2532700\r
2022-10-09,2360200\r
2022-10-19,2379500\r
2022-10-26,2401600\r
2023-02-21,2535400\r
2023-04-09,2725600\r
2023-05-24,2661400\r
2023-05-27,2679700\r
2023-05-29,2679700\r
2023-06-01,2756500\r
2023-06-03,2835800\r
2023-06-06,2906400\r
2023-06-08,2914600\r
2023-06-11,2866600\r
2023-06-13,2904800\r
2023-06-23,2902600\r
2023-08-10,2731900\r
2023-08-17,2731900\r
2023-08-20,2748700\r
2023-08-22,2736100\r
2023-09-04,2613900\r
2023-09-06,2643300\r
2023-09-09,2610800\r
2023-09-11,2617100\r
2023-09-14,2617100\r
2023-09-26,2514100\r
2023-10-01,2436100\r
2023-10-06,2466300\r
2023-10-09,2409500\r
2023-10-11,2430300\r
2023-10-16,2431800\r
2023-10-21,2431800\r
`;export{r as default};
