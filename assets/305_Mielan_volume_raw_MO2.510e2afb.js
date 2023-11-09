const n=`date,value\r
2017-01-26,745462.1739131773\r
2017-01-29,745462.1739131773\r
2017-02-15,1031197.8305424537\r
2017-02-18,1031197.8305424537\r
2017-02-25,1076343.3958150183\r
2017-04-06,1594191.4922089053\r
2017-04-09,1594191.4922089053\r
2017-05-16,1555646.5806664284\r
2017-05-19,1544811.695512786\r
2017-05-26,1549905.725364435\r
2017-06-05,1600014.1124875129\r
2017-07-05,1449009.7352858507\r
2017-08-14,1145336.8119678881\r
2017-08-17,1145336.8119678881\r
2017-08-22,1145336.8119678881\r
2017-08-24,1148623.7210144382\r
2017-08-27,1008989.4835758036\r
2017-08-29,1008989.4835758036\r
2017-09-01,1008989.4835758036\r
2017-09-03,1008989.4835758036\r
2017-10-08,802549.9299733754\r
2017-10-11,802549.9299733754\r
2017-10-13,824677.5458385763\r
2017-10-16,824677.5458385763\r
2017-10-18,824677.5458385763\r
2017-10-23,783436.2993527721\r
2017-10-26,752981.1657840408\r
2017-10-28,752981.1657840408\r
2017-10-31,752981.1657840408\r
2017-11-07,681182.5967348049\r
2017-11-15,681182.5967348049\r
2017-11-17,696446.4677918387\r
2017-11-20,682448.0948616045\r
2017-11-22,696872.8902698458\r
2017-11-25,696872.8902698458\r
2017-11-27,696872.8902698458\r
2017-11-30,674872.8082688653\r
2017-12-12,658190.9371065196\r
2017-12-15,658190.9371065196\r
2017-12-20,650340.5352235355\r
2018-02-15,2715387.674395104\r
2018-02-25,2739090.266384881\r
2018-03-02,2728919.338717627\r
2018-03-07,2728919.338717627\r
2018-03-22,2818559.5846084445\r
2018-03-30,2818559.5846084445\r
2018-04-21,2794513.1877524387\r
2018-04-24,2794513.1877524387\r
2018-04-26,2794513.1877524387\r
2018-05-11,2775692.2102248427\r
2018-05-21,2779109.4529389367\r
2018-05-24,2642400.732486612\r
2018-06-20,2695153.5460304865\r
2018-06-23,2695153.5460304865\r
2018-06-25,2728072.619551055\r
2018-07-08,2605040.9140428896\r
2018-07-10,2605040.9140428896\r
2018-07-15,2636571.649658234\r
2018-07-18,2636571.649658234\r
2018-07-23,2625763.369866523\r
2018-07-25,2639901.7621363634\r
2018-07-30,2659926.7892159396\r
2018-08-02,2659926.7892159396\r
2018-08-04,2569591.258631826\r
2018-08-12,2507532.8654269287\r
2018-08-19,2322805.9479984473\r
2018-08-22,2322805.9479984473\r
2018-08-27,2322805.9479984473\r
2018-09-03,2111547.807680011\r
2018-09-08,2213243.422658521\r
2018-09-11,2213243.422658521\r
2018-09-16,2127956.515511586\r
2018-09-18,2127956.515511586\r
2018-09-23,2055354.1947451306\r
2018-09-26,2055354.1947451306\r
2018-09-28,2055354.1947451306\r
2018-10-03,2067121.1434325522\r
2018-10-06,1932414.535548112\r
2018-10-13,1932414.535548112\r
2018-10-23,1624716.09887177\r
2018-11-12,1589024.7836099754\r
2018-11-15,1589024.7836099754\r
2018-11-17,1658826.966723713\r
2018-11-22,1658826.966723713\r
2018-11-27,1521992.8293858701\r
2018-12-07,1531479.955521802\r
2018-12-10,1506246.7743879845\r
2019-01-11,1600661.728676929\r
2019-01-16,1616894.9291427427\r
2019-01-19,1616894.9291427427\r
2019-01-24,1616894.9291427427\r
2019-01-26,1616244.0209481022\r
2019-02-15,2488093.8417556104\r
2019-02-18,2488093.8417556104\r
2019-02-20,2562202.4476163173\r
2019-02-23,2562202.4476163173\r
2019-02-25,2505910.0435730373\r
2019-02-28,2505910.0435730373\r
2019-03-12,2509968.087954115\r
2019-03-22,2387285.9321794566\r
2019-03-25,2387285.9321794566\r
2019-03-27,2550729.990318853\r
2019-03-30,2550729.990318853\r
2019-04-01,2550729.990318853\r
2019-04-09,2538466.776794387\r
2019-05-01,2384911.2748569804\r
2019-05-06,2419858.5895546195\r
2019-05-09,2419858.5895546195\r
2019-05-11,2419858.5895546195\r
2019-05-14,2419858.5895546195\r
2019-05-16,2419061.4956927923\r
2019-05-29,2753531.6243452015\r
2019-05-31,2753531.6243452015\r
2019-07-05,2424643.923539618\r
2019-07-08,2424643.923539618\r
2019-07-10,2467925.684891024\r
2019-07-13,2467925.684891024\r
2019-07-15,2491328.4005122953\r
2019-07-20,2475176.720369817\r
2019-07-23,2545003.4620239064\r
2019-07-25,2429434.007524637\r
2019-07-28,2454258.4466606304\r
2019-08-02,2260753.4679977247\r
2019-08-04,2214005.6910578315\r
2019-08-09,2178321.64109155\r
2019-08-14,2123475.084180103\r
2019-08-17,2123475.084180103\r
2019-08-22,2201065.0645692525\r
2019-08-24,2047283.9955222278\r
2019-08-29,1897686.201325128\r
2019-09-03,1914656.4599526206\r
2019-09-06,1914656.4599526206\r
2019-09-08,1914656.4599526206\r
2019-09-11,1839582.567709666\r
2019-09-13,1850016.0193892964\r
2019-09-16,1460739.1474881999\r
2019-09-18,1460739.1474881999\r
2019-09-21,1460739.1474881999\r
2019-09-26,1460739.1474881999\r
2019-10-08,1304354.1977330912\r
2019-10-11,1304354.1977330912\r
2019-10-13,1359270.1157510397\r
2019-10-26,1246003.0729955481\r
2019-12-17,2444633.944136213\r
2019-12-20,2444633.944136213\r
2019-12-25,2388077.748488874\r
2019-12-27,2388077.748488874\r
2019-12-30,2388077.748488874\r
2020-01-11,2616635.325815349\r
2020-01-14,2616635.325815349\r
2020-01-16,2667455.7768356903\r
2020-01-19,2667455.7768356903\r
2020-01-29,2611663.124385715\r
2020-01-31,2611663.124385715\r
2020-02-05,2590996.76495801\r
2020-02-10,2590996.76495801\r
2020-02-15,2597601.024690709\r
2020-02-18,2597601.024690709\r
2020-02-20,2455864.3777366253\r
2020-02-23,2460685.3378359275\r
2020-03-21,2801373.023786626\r
2020-03-24,2801373.023786626\r
2020-03-26,2702732.433165491\r
2020-03-31,2714543.067531799\r
2020-04-03,2714543.067531799\r
2020-04-05,2463097.5992611237\r
2020-04-08,2475983.050764468\r
2020-04-10,2436628.0398523593\r
2020-04-15,2492946.471661389\r
2020-04-25,2496993.958878909\r
2020-05-05,2672481.0421749465\r
2020-05-08,2672481.0421749465\r
2020-05-18,2672481.0421749465\r
2020-05-20,2741635.968806951\r
2020-05-25,2800515.0821529855\r
2020-05-28,2800515.0821529855\r
2020-05-30,2655748.638470605\r
2020-06-12,2664108.2400648985\r
2020-06-14,2664108.2400648985\r
2020-06-24,2577813.586933158\r
2020-07-04,2577813.586933158\r
2020-07-07,2522162.016211938\r
2020-07-09,2621612.2790133357\r
2020-07-19,2595949.1678284844\r
2020-07-22,2596775.0302652703\r
2020-07-24,2489710.857210927\r
2020-07-27,2511592.2294722386\r
2020-07-29,2511592.2294722386\r
2020-08-03,2511592.2294722386\r
2020-08-06,2291674.1815211526\r
2020-08-08,2401558.8119250145\r
2020-08-18,2255364.0409705928\r
2020-08-21,2255364.0409705928\r
2020-08-23,2255364.0409705928\r
2020-08-31,1970334.087431626\r
2020-09-02,1979691.6550770057\r
2020-09-05,1711330.7404414418\r
2020-09-07,1711330.7404414418\r
2020-09-10,1711330.7404414418\r
2020-09-12,1719377.913298419\r
2020-09-17,1719377.913298419\r
2020-11-11,1509389.4033538932\r
2020-11-14,1509389.4033538932\r
2020-11-21,1591607.0845218995\r
2020-11-26,1518837.036285757\r
2020-11-29,1585155.28240881\r
2020-12-26,2577813.586933158\r
2021-02-14,2846167.9411045867\r
2021-02-17,2846167.9411045867\r
2021-02-19,2880868.536284548\r
2021-02-24,2853091.157623198\r
2021-02-27,2926295.1888702484\r
2021-03-01,2695995.116547847\r
2021-03-04,2927172.27799668\r
2021-03-09,2654078.3021958107\r
2021-03-31,2809100.440203049\r
2021-04-03,2809100.440203049\r
2021-04-05,2824587.3587370533\r
2021-04-08,2824587.3587370533\r
2021-04-15,2775692.2102248427\r
2021-04-20,2771423.627542083\r
2021-04-23,2771423.627542083\r
2021-05-20,2454258.4466606304\r
2021-05-28,2454258.4466606304\r
2021-05-30,2456667.541203553\r
2021-06-09,2454258.4466606304\r
2021-06-14,2600079.799900998\r
2021-06-22,2598427.151105007\r
2021-06-29,1367037.1822948032\r
2021-07-02,1448393.7139487874\r
2021-07-09,1476866.919139887\r
2021-09-12,2287797.5506585874\r
2021-09-17,2295554.1100862417\r
2021-09-22,2272324.0036878167\r
2021-09-25,2170766.8753143293\r
2021-09-27,2170766.8753143293\r
2021-10-07,2191195.0084416773\r
2021-10-12,2225455.5434782184\r
2021-10-15,2225455.5434782184\r
2021-10-17,2180590.6423852607\r
2021-10-20,2221635.628811375\r
2021-10-27,2123475.084180103\r
2021-12-16,2641567.6103702504\r
2021-12-19,2641567.6103702504\r
2021-12-21,2641567.6103702504\r
2022-01-15,2471147.047758452\r
2022-01-23,2471147.047758452\r
2022-01-25,2575345.502620872\r
2022-02-09,2563843.481754376\r
2022-03-01,2888705.2880157228\r
2022-03-09,2888705.2880157228\r
2022-03-21,2825448.997496788\r
2022-03-24,2825448.997496788\r
2022-03-26,2838389.4241717695\r
2022-04-05,2734002.42615784\r
2022-04-10,2719612.6889774036\r
2022-07-14,2516467.821244949\r
2022-07-17,2516467.821244949\r
2022-07-24,2516467.821244949\r
2022-08-28,1199055.4286205065\r
2022-09-05,1199055.4286205065\r
2022-09-22,818654.7918903842\r
2022-10-02,818654.7918903842\r
2022-10-05,673195.1807330346\r
2022-10-07,691764.4758822897\r
2022-10-12,691764.4758822897\r
2022-11-06,484612.7018641035\r
2022-11-11,484968.10576869437\r
2022-11-16,451103.3782931791\r
2022-12-21,739298.5305186125\r
2022-12-24,739298.5305186125\r
2023-01-10,964799.2465949119\r
2023-01-18,964799.2465949119\r
2023-01-20,1057326.9839707064\r
2023-02-04,2064912.269669351\r
2023-02-09,2110059.271533205\r
2023-02-12,2110059.271533205\r
2023-02-14,2040692.9704546547\r
2023-02-17,2079660.5080240155\r
2023-02-19,2079660.5080240155\r
2023-02-24,2057557.9267546465\r
2023-03-01,1963868.8206694394\r
2023-03-16,2138431.6491524205\r
2023-04-05,2193470.735495804\r
2023-04-08,2193470.735495804\r
2023-04-10,2205627.9923404604\r
2023-06-24,2482438.44442547\r
2023-06-27,2482438.44442547\r
2023-07-14,2420655.8153596176\r
2023-07-17,2420655.8153596176\r
2023-07-22,2420655.8153596176\r
2023-08-08,2215530.623514339\r
2023-08-11,2095202.9178464166\r
2023-08-16,2095202.9178464166\r
2023-08-18,2139930.206617227\r
2023-08-21,2042888.7923017005\r
2023-08-23,2050950.2903458576\r
2023-08-28,1990516.5294548848\r
2023-08-31,1925301.4206461231\r
2023-09-07,1821568.1492528508\r
2023-09-10,1721392.6702657645\r
2023-09-15,1721392.6702657645\r
2023-10-02,1337285.5514385516\r
2023-10-05,1337285.5514385516\r
2023-10-07,1340838.3803222456\r
2023-10-10,1340838.3803222456\r
2023-10-12,1270681.6129724637\r
2023-10-15,1274722.0666202665\r
`;export{n as default};
