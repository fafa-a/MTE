const r=`date,value\r
2017-02-22,2475800\r
2017-02-25,2480500\r
2017-03-07,2425400\r
2017-03-17,2527400\r
2017-03-27,2529600\r
2017-04-06,2472300\r
2017-04-16,2469800\r
2017-04-23,2330400\r
2017-05-03,2330400\r
2017-05-16,2313500\r
2017-05-23,2306500\r
2017-05-26,2331000\r
2017-06-12,2380800\r
2017-06-15,2306500\r
2017-06-22,2388600\r
2017-06-25,2331700\r
2017-07-02,2295400\r
2017-07-05,2354000\r
2017-07-07,2355700\r
2017-07-10,2355700\r
2017-07-12,2355700\r
2017-07-17,2351700\r
2017-07-22,2337700\r
2017-07-27,2379900\r
2017-08-04,2378100\r
2017-08-06,2378100\r
2017-08-11,2310600\r
2017-08-14,2324600\r
2017-08-19,2323700\r
2017-08-21,2305200\r
2017-08-24,2307300\r
2017-08-26,2293800\r
2017-08-29,2305500\r
2017-09-03,2263100\r
2017-09-05,2263100\r
2017-09-08,2257300\r
2017-09-20,1991800\r
2017-09-23,2046800\r
2017-09-28,2054900\r
2017-10-03,1961600\r
2017-10-05,1687800\r
2017-10-08,1687700\r
2017-10-10,1701000\r
2017-10-13,1654400\r
2017-10-15,1655000\r
2017-10-18,1668100\r
2017-10-25,1630000\r
2017-10-28,1634600\r
2017-10-30,1634600\r
2017-11-07,1556200\r
2018-02-25,1963100\r
2018-02-27,1964900\r
2018-03-02,2018700\r
2018-03-14,2243500\r
2018-03-19,2425700\r
2018-03-22,2425700\r
2018-04-18,2495700\r
2018-04-21,2530600\r
2018-04-23,2530600\r
2018-04-26,2518200\r
2018-05-06,2501700\r
2018-05-11,2506000\r
2018-05-18,2506000\r
2018-05-21,2506000\r
2018-06-25,2419100\r
2018-06-27,2404700\r
2018-07-02,2404000\r
2018-07-07,2420200\r
2018-07-10,2427200\r
2018-07-12,2455700\r
2018-07-15,2449700\r
2018-07-17,2451300\r
2018-07-20,2433500\r
2018-07-22,2448300\r
2018-07-25,2416400\r
2018-07-27,2407200\r
2018-07-30,2395500\r
2018-08-01,2379900\r
2018-08-04,2376400\r
2018-08-06,2404300\r
2018-08-11,2359200\r
2018-08-16,2403400\r
2018-08-19,2369100\r
2018-08-21,2364300\r
2018-08-26,2380500\r
2018-08-31,2371200\r
2018-09-03,2351300\r
2018-09-08,2323400\r
2018-09-10,2302100\r
2018-09-13,2279200\r
2018-09-20,2238200\r
2018-09-23,2067100\r
2018-09-25,2067100\r
2018-09-28,2017600\r
2018-09-30,2017600\r
2018-10-03,1946000\r
2018-10-05,1900700\r
2018-10-20,2115800\r
2018-10-23,2161100\r
2018-10-25,2137800\r
2018-10-30,2147600\r
2018-11-04,2183800\r
2019-02-20,1605900\r
2019-02-22,1581900\r
2019-02-25,1566100\r
2019-02-27,1565500\r
2019-03-12,1582700\r
2019-03-22,1484400\r
2019-03-24,1490700\r
2019-03-27,1464700\r
2019-03-29,1473900\r
2019-04-01,1474800\r
2019-04-08,1472400\r
2019-04-13,1507600\r
2019-05-06,1989800\r
2019-05-11,1989800\r
2019-05-13,2005300\r
2019-05-16,1999400\r
2019-05-23,2039900\r
2019-05-31,2144000\r
2019-06-02,2119200\r
2019-06-12,2167200\r
2019-06-17,2159200\r
2019-06-22,2344800\r
2019-06-25,2329200\r
2019-06-27,2220800\r
2019-06-30,2260600\r
2019-07-02,2260600\r
2019-07-05,2321400\r
2019-07-07,2321400\r
2019-07-10,2300600\r
2019-07-12,2297300\r
2019-07-15,2315900\r
2019-07-17,2325000\r
2019-07-22,2321100\r
2019-07-25,2308700\r
2019-08-01,2316700\r
2019-08-04,2292800\r
2019-08-09,2318500\r
2019-08-11,2295100\r
2019-08-14,2354300\r
2019-08-16,2305900\r
2019-08-21,2324000\r
2019-08-24,2329500\r
2019-08-26,2327800\r
2019-08-29,2306400\r
2019-08-31,2297000\r
2019-09-03,2287100\r
2019-09-05,2287100\r
2019-09-13,2270300\r
2019-09-15,2265200\r
2019-09-18,2226800\r
2019-09-20,2249000\r
2019-10-08,1980200\r
2019-10-13,1980200\r
2019-10-25,2016300\r
2019-10-30,2021000\r
2019-11-04,2021000\r
2019-11-09,2021000\r
2020-02-20,2038700\r
2020-02-22,2006000\r
2020-03-01,2006000\r
2020-03-08,2088300\r
2020-03-11,2164500\r
2020-03-13,2163000\r
2020-03-18,2179800\r
2020-03-21,2179800\r
2020-03-28,2215700\r
2020-03-31,2182800\r
2020-04-05,2184000\r
2020-04-07,2236500\r
2020-04-10,2203400\r
2020-04-12,2203900\r
2020-04-15,2186600\r
2020-04-25,2202600\r
2020-05-05,2227100\r
2020-05-07,2231300\r
2020-05-17,2248900\r
2020-05-20,2270000\r
2020-05-22,2410100\r
2020-05-25,2430700\r
2020-05-27,2435900\r
2020-05-30,2435900\r
2020-06-19,2387000\r
2020-06-21,2475200\r
2020-06-24,2473800\r
2020-06-26,2440000\r
2020-07-01,2447500\r
2020-07-04,2425600\r
2020-07-09,2471600\r
2020-07-11,2471700\r
2020-07-14,2455100\r
2020-07-19,2488200\r
2020-07-21,2479600\r
2020-07-24,2471600\r
2020-07-26,2464500\r
2020-07-29,2465500\r
2020-07-31,2443300\r
2020-08-03,2443300\r
2020-08-05,2440900\r
2020-08-08,2467100\r
2020-08-10,2473700\r
2020-08-15,2506100\r
2020-08-20,2486800\r
2020-08-23,2524700\r
2020-08-25,2478900\r
2020-09-02,2447000\r
2020-09-04,2428400\r
2020-09-07,2418700\r
2020-09-12,2419000\r
2020-09-14,2410800\r
2020-09-17,2418900\r
2020-09-19,2420100\r
2021-03-23,2233400\r
2021-03-26,2217900\r
2021-03-28,2269400\r
2021-03-31,2269400\r
2021-04-02,2243400\r
2021-04-05,2213600\r
2021-04-07,2211600\r
2021-04-15,2227900\r
2021-04-17,1998300\r
2021-04-20,1980400\r
2021-04-22,1980400\r
2021-05-27,2093000\r
2021-05-30,2093000\r
2021-06-14,2197200\r
2021-06-16,2285500\r
2021-06-19,2285500\r
2021-06-21,2285500\r
2021-06-26,2252900\r
2021-07-01,2235400\r
2021-07-19,2328600\r
2021-07-21,2265300\r
2021-07-26,2269100\r
2021-07-29,2351300\r
2021-08-05,2348400\r
2021-08-10,2364900\r
2021-08-13,2381200\r
2021-08-18,2367800\r
2021-08-20,2372300\r
2021-08-23,2376200\r
2021-08-25,2371400\r
2021-08-28,2377200\r
2021-08-30,2363200\r
2021-09-04,2344500\r
2021-09-07,2339500\r
2021-09-12,2129700\r
2021-09-14,2129700\r
2021-09-17,2126500\r
2021-09-22,2134500\r
2021-09-24,1739300\r
2021-09-29,1739300\r
2021-10-07,1659700\r
2021-10-12,1678200\r
2021-10-14,1665800\r
2021-10-17,1665800\r
2021-10-24,1648900\r
2021-10-27,1630600\r
2022-04-10,2274300\r
2022-04-15,2274300\r
2022-04-17,2200800\r
2022-04-27,2336600\r
2022-04-30,2355600\r
2022-05-07,2355600\r
2022-05-12,2192200\r
2022-05-15,2207500\r
2022-05-17,2186300\r
2022-05-20,2186300\r
2022-05-22,2186300\r
2022-05-27,2192300\r
2022-06-01,2168400\r
2022-06-04,2168200\r
2022-06-06,2253000\r
2022-06-11,2258900\r
2022-06-14,2278000\r
2022-06-16,2271400\r
2022-06-19,2264400\r
2022-06-29,2299500\r
2022-07-01,2322700\r
2022-07-04,2322700\r
2022-07-06,2322700\r
2022-07-11,2332200\r
2022-07-14,2334600\r
2022-07-16,2331200\r
2022-07-19,2337800\r
2022-07-21,2326300\r
2022-07-24,2328700\r
2022-07-26,2327000\r
2022-07-29,2327500\r
2022-07-31,2339900\r
2022-08-03,2341200\r
2022-08-05,2334200\r
2022-08-08,2324900\r
2022-08-10,2337700\r
2022-08-13,2336000\r
2022-08-15,2340700\r
2022-08-20,2337400\r
2022-08-30,2344700\r
2022-09-02,2348300\r
2022-09-04,2346200\r
2022-09-19,2326900\r
2022-09-22,2319700\r
2022-10-04,2199400\r
2022-10-07,2199400\r
2022-10-09,2216800\r
2022-10-12,2216800\r
2022-10-24,2159200\r
2022-10-27,2159200\r
2022-11-01,2156200\r
2023-02-19,1480500\r
2023-02-21,1480500\r
2023-02-26,1451300\r
2023-03-01,1463200\r
2023-03-03,1507000\r
2023-03-16,1794500\r
2023-03-28,1883900\r
2023-04-05,1915500\r
2023-04-07,1840200\r
2023-04-15,1859400\r
2023-07-29,2420300\r
2023-07-31,2413000\r
2023-08-03,2416600\r
2023-08-05,2416600\r
2023-08-08,2417800\r
2023-08-10,2420800\r
2023-08-13,2411400\r
2023-08-15,2403500\r
2023-08-18,2398200\r
2023-08-20,2387100\r
2023-08-23,2385500\r
`;export{r as default};
