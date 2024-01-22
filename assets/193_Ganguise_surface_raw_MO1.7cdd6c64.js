const r=`date,value\r
2017-02-25,2798200\r
2017-03-17,2838200\r
2017-04-23,3150200\r
2017-05-16,3140900\r
2017-05-26,3158500\r
2017-06-02,3100200\r
2017-06-22,3106000\r
2017-07-05,2899600\r
2017-07-07,2960800\r
2017-07-17,2878100\r
2017-08-14,2531100\r
2017-08-21,2479200\r
2017-08-24,2442100\r
2017-08-26,2417700\r
2017-09-05,2336600\r
2017-09-20,2237600\r
2017-09-23,2162300\r
2017-10-05,2090700\r
2017-10-08,2060700\r
2017-10-10,2048100\r
2017-10-13,2035300\r
2017-10-15,2002900\r
2017-10-28,1904300\r
2017-11-17,1932500\r
2018-02-25,2841600\r
2018-04-01,3188300\r
2018-04-21,3372500\r
2018-05-11,3526100\r
2018-06-20,3675400\r
2018-06-25,3683400\r
2018-07-02,3641200\r
2018-07-07,3596300\r
2018-07-12,3686600\r
2018-07-15,3687500\r
2018-07-25,3634600\r
2018-07-27,3670700\r
2018-07-30,3646300\r
2018-08-01,3626000\r
2018-08-04,3583700\r
2018-08-11,3561400\r
2018-08-19,3587500\r
2018-08-21,3557400\r
2018-09-03,3502800\r
2018-09-20,3455500\r
2018-09-23,3464800\r
2018-09-25,3466500\r
2018-09-30,3386000\r
2018-10-03,3370600\r
2018-10-05,3410300\r
2018-10-25,3310300\r
2018-11-27,3379100\r
2019-01-16,3594300\r
2019-02-12,3421800\r
2019-02-15,3357500\r
2019-02-17,3453500\r
2019-02-20,3475400\r
2019-02-22,3417500\r
2019-02-25,3563800\r
2019-02-27,3420700\r
2019-03-22,3413400\r
2019-03-24,3471000\r
2019-03-27,3568900\r
2019-03-29,3448400\r
2019-04-13,3397600\r
2019-05-01,3597800\r
2019-05-13,3576600\r
2019-06-02,3655000\r
2019-06-17,3549900\r
2019-06-27,3489000\r
2019-06-30,3668500\r
2019-07-05,3630300\r
2019-07-12,3541500\r
2019-07-15,3562700\r
2019-07-25,3407400\r
2019-08-04,3236600\r
2019-08-09,3197700\r
2019-08-14,3182300\r
2019-08-16,3154100\r
2019-08-24,3028400\r
2019-08-31,3046800\r
2019-09-13,2818900\r
2019-09-20,2814400\r
2019-10-08,2613200\r
2019-11-04,2758800\r
2019-11-27,2901200\r
2020-01-06,3067200\r
2020-01-11,3181500\r
2020-02-20,3410000\r
2020-02-22,3330700\r
2020-03-08,3287000\r
2020-03-18,3524000\r
2020-03-21,3607700\r
2020-04-05,3617300\r
2020-04-10,3648600\r
2020-04-15,3608900\r
2020-05-05,3542000\r
2020-05-20,3653600\r
2020-05-22,3608500\r
2020-05-25,3632600\r
2020-05-27,3660700\r
2020-05-30,3610500\r
2020-07-09,3620600\r
2020-07-14,3628200\r
2020-07-19,3562200\r
2020-07-21,3457800\r
2020-07-24,3496500\r
2020-07-31,3459500\r
2020-08-05,3278800\r
2020-08-08,3321200\r
2020-08-10,3347100\r
2020-08-20,3193000\r
2020-08-25,3138000\r
2020-09-02,2958700\r
2020-09-04,2970500\r
2020-09-12,2932100\r
2020-09-14,2963200\r
2020-09-17,2889100\r
2020-10-17,2742300\r
2020-11-08,2657700\r
2020-11-11,2774800\r
2020-11-18,2654400\r
2020-11-21,2804600\r
2021-02-11,3389200\r
2021-03-23,3484200\r
2021-03-28,3577300\r
2021-03-31,3623000\r
2021-04-15,3706600\r
2021-04-20,3649900\r
2021-05-27,3673100\r
2021-06-16,3653600\r
2021-07-19,3535500\r
2021-07-21,3562900\r
2021-07-29,3482100\r
2021-08-10,3290400\r
2021-08-20,3179500\r
2021-08-25,3042400\r
2021-08-28,2967900\r
2021-08-30,2968200\r
2021-10-07,2796500\r
2021-10-12,2706600\r
2021-10-14,2667700\r
2021-10-24,2635300\r
2021-10-27,2592800\r
2022-01-15,3102800\r
2022-01-22,3083100\r
2022-01-25,3159000\r
2022-01-27,3142300\r
2022-02-01,3271800\r
2022-02-09,3290100\r
2022-03-23,3496600\r
2022-04-05,3571900\r
2022-04-17,3574800\r
2022-05-17,3654600\r
2022-06-01,3615000\r
2022-06-11,3658000\r
2022-07-11,3356000\r
2022-07-14,3451900\r
2022-07-16,3348500\r
2022-07-19,3300800\r
2022-07-21,3244700\r
2022-07-24,3206800\r
2022-07-31,3123600\r
2022-08-03,3041700\r
2022-08-08,3046000\r
2022-08-10,2964500\r
2022-08-23,2755500\r
2022-08-30,2678200\r
2022-09-04,2549000\r
2022-09-12,2419900\r
2022-09-19,2305100\r
2022-09-22,2330000\r
2022-10-04,2256500\r
2022-10-09,2202700\r
2022-10-22,2151600\r
2022-11-06,2077100\r
2022-11-13,2033500\r
2022-11-16,2091500\r
2022-12-06,2096400\r
2023-02-06,2127900\r
2023-02-09,2161400\r
2023-02-11,2133300\r
2023-02-16,2126700\r
2023-02-19,2130600\r
2023-03-16,2237400\r
2023-03-28,2156400\r
2023-04-05,2146700\r
2023-04-07,2157300\r
2023-05-27,2281300\r
2023-06-04,2306600\r
2023-07-14,2374300\r
2023-07-16,2414400\r
2023-07-19,2432300\r
2023-07-29,2376700\r
2023-08-08,2272600\r
2023-08-20,2122600\r
2023-08-23,2091400\r
2023-09-07,1898000\r
2023-09-24,1788100\r
2023-09-27,1832500\r
2023-09-29,1758200\r
2023-10-02,1819200\r
2023-10-04,1779700\r
2023-10-07,1727200\r
2023-10-12,1714000\r
2023-11-08,1899800\r
2023-11-18,2020900\r
2023-11-26,2081100\r
2023-12-03,2092600\r
`;export{r as default};
