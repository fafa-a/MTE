const n=`date,value\r
2017-02-15,76.76126790217377\r
2017-02-25,76.76126790217377\r
2017-03-17,48.28999722287754\r
2017-03-27,58.1444930363602\r
2017-04-03,60.699804891088874\r
2017-04-06,60.699804891088874\r
2017-04-23,65.91660860814645\r
2017-05-16,100.0\r
2017-05-23,100.0\r
2017-05-26,100.0\r
2017-06-02,48.28999722287754\r
2017-06-05,48.28999722287754\r
2017-06-15,43.591340598122414\r
2017-06-22,63.29068128648962\r
2017-06-25,43.591340598122414\r
2017-07-02,68.57709443671554\r
2017-07-05,43.591340598122414\r
2017-07-07,36.84466313816257\r
2017-07-17,65.91660860814645\r
2017-07-18,65.91660860814645\r
2017-07-22,65.91660860814645\r
2017-08-14,50.69743269227288\r
2017-08-19,50.69743269227288\r
2017-08-21,65.91660860814645\r
2017-08-22,65.91660860814645\r
2017-08-24,65.91660860814645\r
2017-08-26,85.24050229287978\r
2017-08-27,85.24050229287978\r
2017-08-29,55.625282090258075\r
2017-09-03,68.57709443671554\r
2017-10-05,63.29068128648962\r
2017-10-06,63.29068128648962\r
2017-10-11,63.29068128648962\r
2017-10-13,71.27166613469372\r
2017-10-15,68.57709443671554\r
2017-10-16,73.999869561484\r
2017-10-18,68.57709443671554\r
2017-10-25,73.999869561484\r
2017-10-26,55.625282090258075\r
2017-10-28,55.625282090258075\r
2017-11-04,48.28999722287754\r
2017-11-05,48.28999722287754\r
2017-11-07,48.28999722287754\r
2017-11-14,48.28999722287754\r
2017-11-17,58.1444930363602\r
2017-11-22,73.999869561484\r
2017-11-27,73.999869561484\r
2018-02-27,50.69743269227288\r
2018-03-05,50.69743269227288\r
2018-03-14,68.57709443671554\r
2018-03-17,68.57709443671554\r
2018-03-19,79.55544059741585\r
2018-03-20,79.55544059741585\r
2018-03-24,79.55544059741585\r
2018-03-25,58.1444930363602\r
2018-03-29,58.1444930363602\r
2018-04-18,53.14273289772704\r
2018-04-19,53.14273289772704\r
2018-04-21,60.699804891088874\r
2018-04-26,60.699804891088874\r
2018-05-06,50.69743269227288\r
2018-05-08,50.69743269227288\r
2018-05-11,73.999869561484\r
2018-05-18,71.27166613469372\r
2018-05-19,71.27166613469372\r
2018-05-21,71.27166613469372\r
2018-05-26,39.05235707504859\r
2018-06-20,45.921073128454275\r
2018-06-22,63.29068128648962\r
2018-06-23,63.29068128648962\r
2018-06-25,48.28999722287754\r
2018-06-27,55.625282090258075\r
2018-06-28,55.625282090258075\r
2018-07-03,58.1444930363602\r
2018-07-07,68.57709443671554\r
2018-07-08,65.91660860814645\r
2018-07-12,55.625282090258075\r
2018-07-22,55.625282090258075\r
2018-07-27,60.699804891088874\r
2018-07-28,60.699804891088874\r
2018-07-30,60.699804891088874\r
2018-08-01,60.699804891088874\r
2018-08-02,60.699804891088874\r
2018-08-04,60.699804891088874\r
2018-08-06,63.29068128648962\r
2018-08-07,53.14273289772704\r
2018-08-11,53.14273289772704\r
2018-08-12,53.14273289772704\r
2018-08-14,53.14273289772704\r
2018-08-16,53.14273289772704\r
2018-08-19,45.921073128454275\r
2018-08-22,45.921073128454275\r
2018-08-26,45.921073128454275\r
2018-09-03,32.5571185279913\r
2018-09-05,32.5571185279913\r
2018-09-08,50.69743269227288\r
2018-09-10,41.3015163630691\r
2018-09-11,41.3015163630691\r
2018-09-18,50.69743269227288\r
2018-09-20,71.27166613469372\r
2018-09-25,73.999869561484\r
2018-09-26,73.999869561484\r
2018-09-28,73.999869561484\r
2018-09-30,71.27166613469372\r
2018-10-05,73.999869561484\r
2018-10-06,58.1444930363602\r
2018-10-10,58.1444930363602\r
2018-10-11,58.1444930363602\r
2018-10-13,82.3819823634707\r
2018-10-16,50.69743269227288\r
2018-10-18,76.76126790217377\r
2018-10-20,60.699804891088874\r
2018-10-21,60.699804891088874\r
2018-10-23,63.29068128648962\r
2018-10-25,53.14273289772704\r
2018-10-30,43.591340598122414\r
2018-11-09,73.999869561484\r
2018-11-14,73.999869561484\r
2018-11-19,73.999869561484\r
2018-11-22,79.55544059741585\r
2018-11-24,63.29068128648962\r
2018-11-27,100.0\r
2018-12-07,85.24050229287978\r
2018-12-09,85.24050229287978\r
2018-12-10,85.24050229287978\r
2018-12-14,85.24050229287978\r
2018-12-17,85.24050229287978\r
2019-02-05,73.999869561484\r
2019-02-13,73.999869561484\r
2019-02-15,76.76126790217377\r
2019-02-17,60.699804891088874\r
2019-02-18,60.699804891088874\r
2019-02-20,79.55544059741585\r
2019-02-22,79.55544059741585\r
2019-02-23,79.55544059741585\r
2019-02-25,55.625282090258075\r
2019-02-27,76.76126790217377\r
2019-03-07,79.55544059741585\r
2019-03-22,63.29068128648962\r
2019-03-24,63.29068128648962\r
2019-03-27,91.05197999620167\r
2019-03-29,63.29068128648962\r
2019-03-30,63.29068128648962\r
2019-04-01,63.29068128648962\r
2019-04-08,100.0\r
2019-04-09,100.0\r
2019-04-11,100.0\r
2019-04-13,58.1444930363602\r
2019-05-01,73.999869561484\r
2019-05-06,73.999869561484\r
2019-05-13,76.76126790217377\r
2019-05-14,76.76126790217377\r
2019-05-16,65.91660860814645\r
2019-05-23,65.91660860814645\r
2019-05-28,65.91660860814645\r
2019-05-29,82.3819823634707\r
2019-05-31,60.699804891088874\r
2019-06-02,58.1444930363602\r
2019-06-08,65.91660860814645\r
2019-06-27,58.1444930363602\r
2019-06-28,58.1444930363602\r
2019-06-30,68.57709443671554\r
2019-07-02,58.1444930363602\r
2019-07-03,58.1444930363602\r
2019-07-05,68.57709443671554\r
2019-07-07,68.57709443671554\r
2019-07-08,68.57709443671554\r
2019-07-10,60.699804891088874\r
2019-07-12,60.699804891088874\r
2019-07-13,65.91660860814645\r
2019-07-15,63.29068128648962\r
2019-07-17,63.29068128648962\r
2019-07-20,71.27166613469372\r
2019-07-22,71.27166613469372\r
2019-07-23,71.27166613469372\r
2019-07-25,58.1444930363602\r
2019-08-02,82.3819823634707\r
2019-08-04,55.625282090258075\r
2019-08-09,71.27166613469372\r
2019-08-12,65.91660860814645\r
2019-08-14,68.57709443671554\r
2019-08-22,55.625282090258075\r
2019-08-24,60.699804891088874\r
2019-08-26,55.625282090258075\r
2019-08-29,55.625282090258075\r
2019-08-31,76.76126790217377\r
2019-09-03,53.14273289772704\r
2019-09-06,53.14273289772704\r
2019-09-10,68.57709443671554\r
2019-09-13,55.625282090258075\r
2019-09-15,48.28999722287754\r
2019-09-16,48.28999722287754\r
2019-09-18,48.28999722287754\r
2019-09-20,50.69743269227288\r
2019-09-21,50.69743269227288\r
2019-10-03,58.1444930363602\r
2019-10-08,41.3015163630691\r
2019-10-11,41.3015163630691\r
2019-10-13,53.14273289772704\r
2019-10-21,50.69743269227288\r
2019-11-04,43.591340598122414\r
2019-11-07,43.591340598122414\r
2019-11-09,43.591340598122414\r
2019-11-24,41.3015163630691\r
2019-12-04,55.625282090258075\r
2019-12-05,55.625282090258075\r
2019-12-10,48.28999722287754\r
2019-12-17,48.28999722287754\r
2020-01-06,48.28999722287754\r
2020-01-13,48.28999722287754\r
2020-01-16,63.29068128648962\r
2020-01-18,63.29068128648962\r
2020-01-19,63.29068128648962\r
2020-01-21,53.14273289772704\r
2020-01-24,60.699804891088874\r
2020-02-15,58.1444930363602\r
2020-02-18,58.1444930363602\r
2020-02-20,58.1444930363602\r
2020-02-22,41.3015163630691\r
2020-03-18,45.921073128454275\r
2020-03-19,45.921073128454275\r
2020-03-21,68.57709443671554\r
2020-03-23,53.14273289772704\r
2020-03-24,53.14273289772704\r
2020-03-26,63.29068128648962\r
2020-03-28,58.1444930363602\r
2020-03-31,65.91660860814645\r
2020-04-02,60.699804891088874\r
2020-04-05,60.699804891088874\r
2020-04-07,63.29068128648962\r
2020-04-08,60.699804891088874\r
2020-04-10,60.699804891088874\r
2020-04-12,50.69743269227288\r
2020-04-13,58.1444930363602\r
2020-04-15,55.625282090258075\r
2020-04-17,58.1444930363602\r
2020-04-22,58.1444930363602\r
2020-04-23,58.1444930363602\r
2020-04-27,53.14273289772704\r
2020-05-07,24.520857118917554\r
2020-05-17,39.05235707504859\r
2020-05-18,39.05235707504859\r
2020-05-20,36.84466313816257\r
2020-05-25,43.591340598122414\r
2020-05-27,43.591340598122414\r
2020-05-28,43.591340598122414\r
2020-05-30,43.591340598122414\r
2020-06-01,43.591340598122414\r
2020-06-02,48.28999722287754\r
2020-06-26,39.05235707504859\r
2020-06-29,39.05235707504859\r
2020-07-04,60.699804891088874\r
2020-07-06,60.699804891088874\r
2020-07-07,60.699804891088874\r
2020-07-09,50.69743269227288\r
2020-07-11,50.69743269227288\r
2020-07-12,48.28999722287754\r
2020-07-14,48.28999722287754\r
2020-07-17,48.28999722287754\r
2020-07-19,65.91660860814645\r
2020-07-21,68.57709443671554\r
2020-07-22,68.57709443671554\r
2020-07-24,60.699804891088874\r
2020-07-27,65.91660860814645\r
2020-07-29,71.27166613469372\r
2020-07-31,71.27166613469372\r
2020-08-05,58.1444930363602\r
2020-08-06,71.27166613469372\r
2020-08-08,45.921073128454275\r
2020-08-10,41.3015163630691\r
2020-08-15,68.57709443671554\r
2020-08-20,53.14273289772704\r
2020-08-25,50.69743269227288\r
2020-09-04,43.591340598122414\r
2020-09-07,48.28999722287754\r
2020-09-09,43.591340598122414\r
2020-09-10,63.29068128648962\r
2020-09-12,43.591340598122414\r
2020-09-14,50.69743269227288\r
2020-09-15,50.69743269227288\r
2020-09-17,36.84466313816257\r
2020-11-06,39.05235707504859\r
2020-11-08,39.05235707504859\r
2020-11-09,39.05235707504859\r
2020-11-11,39.05235707504859\r
2020-11-14,39.05235707504859\r
2020-11-18,34.679283075156505\r
2020-11-19,34.679283075156505\r
2020-11-21,43.591340598122414\r
2020-11-23,39.05235707504859\r
2020-11-28,50.69743269227288\r
2020-11-29,50.69743269227288\r
2020-12-04,55.625282090258075\r
2020-12-11,100.0\r
2020-12-13,100.0\r
2020-12-18,100.0\r
2020-12-24,100.0\r
2021-02-21,45.921073128454275\r
2021-02-24,55.625282090258075\r
2021-02-27,55.625282090258075\r
2021-03-01,50.69743269227288\r
2021-03-04,63.29068128648962\r
2021-03-06,63.29068128648962\r
2021-03-08,50.69743269227288\r
2021-03-09,50.69743269227288\r
2021-03-28,65.91660860814645\r
2021-03-29,65.91660860814645\r
2021-03-31,79.55544059741585\r
2021-04-02,48.28999722287754\r
2021-04-03,48.28999722287754\r
2021-04-05,48.28999722287754\r
2021-04-07,48.28999722287754\r
2021-04-08,48.28999722287754\r
2021-04-15,32.5571185279913\r
2021-04-22,53.14273289772704\r
2021-04-23,53.14273289772704\r
2021-04-25,53.14273289772704\r
2021-04-27,85.24050229287978\r
2021-05-03,71.27166613469372\r
2021-05-05,71.27166613469372\r
2021-05-27,20.79051055906432\r
2021-05-28,20.79051055906432\r
2021-05-30,68.57709443671554\r
2021-06-01,34.679283075156505\r
2021-06-09,68.57709443671554\r
2021-06-11,34.679283075156505\r
2021-06-14,53.14273289772704\r
2021-06-16,53.14273289772704\r
2021-06-26,19.002049751415157\r
2021-07-04,24.520857118917554\r
2021-07-19,45.921073128454275\r
2021-07-21,50.69743269227288\r
2021-07-22,50.69743269227288\r
2021-07-29,50.69743269227288\r
2021-08-10,22.630613990464813\r
2021-08-11,22.630613990464813\r
2021-08-15,24.520857118917554\r
2021-08-20,24.520857118917554\r
2021-08-25,26.459858692470323\r
2021-08-26,26.459858692470323\r
2021-09-02,36.84466313816257\r
2021-09-05,36.84466313816257\r
2021-09-07,41.3015163630691\r
2021-09-12,32.5571185279913\r
2021-09-17,36.84466313816257\r
2021-09-22,20.79051055906432\r
2021-09-24,30.47913001617945\r
2021-09-25,30.47913001617945\r
2021-09-27,30.47913001617945\r
2021-09-30,30.47913001617945\r
2021-10-02,24.520857118917554\r
2021-10-04,34.679283075156505\r
2021-10-09,28.44634360707683\r
2021-10-14,32.5571185279913\r
2021-10-15,32.5571185279913\r
2021-10-17,32.5571185279913\r
2021-10-19,41.3015163630691\r
2021-10-22,22.630613990464813\r
2021-10-24,34.679283075156505\r
2021-10-27,36.84466313816257\r
2021-11-01,28.44634360707683\r
2021-12-23,32.5571185279913\r
2022-01-15,32.5571185279913\r
2022-01-25,48.28999722287754\r
2022-02-09,39.05235707504859\r
2022-02-26,45.921073128454275\r
2022-02-27,45.921073128454275\r
2022-03-06,45.921073128454275\r
2022-03-08,39.05235707504859\r
2022-03-09,41.3015163630691\r
2022-03-23,22.630613990464813\r
2022-03-24,22.630613990464813\r
2022-03-26,22.630613990464813\r
2022-04-17,20.79051055906432\r
2022-04-20,20.79051055906432\r
2022-04-22,20.79051055906432\r
2022-05-02,22.630613990464813\r
2022-05-03,22.630613990464813\r
2022-05-08,22.630613990464813\r
2022-05-10,24.520857118917554\r
2022-05-15,13.963806367998103\r
2022-05-17,26.459858692470323\r
2022-05-30,28.44634360707683\r
2022-06-01,28.44634360707683\r
2022-06-02,28.44634360707683\r
2022-06-04,28.44634360707683\r
2022-06-11,28.44634360707683\r
2022-06-14,28.44634360707683\r
2022-06-16,24.520857118917554\r
2022-06-21,20.79051055906432\r
2022-06-29,28.44634360707683\r
2022-07-02,15.586793858917892\r
2022-07-04,17.26687506814437\r
2022-07-06,17.26687506814437\r
2022-07-11,19.002049751415157\r
2022-07-12,19.002049751415157\r
2022-07-14,17.26687506814437\r
2022-07-16,20.79051055906432\r
2022-07-17,20.79051055906432\r
2022-07-19,22.630613990464813\r
2022-07-21,19.002049751415157\r
2022-07-24,20.79051055906432\r
2022-07-31,20.79051055906432\r
2022-08-03,20.79051055906432\r
2022-08-06,13.963806367998103\r
2022-08-08,17.26687506814437\r
2022-08-10,17.26687506814437\r
2022-08-11,17.26687506814437\r
2022-08-13,17.26687506814437\r
2022-08-18,13.963806367998103\r
2022-08-25,15.586793858917892\r
2022-08-28,15.586793858917892\r
2022-08-31,15.586793858917892\r
2022-09-02,15.586793858917892\r
2022-09-04,22.630613990464813\r
2022-09-12,26.459858692470323\r
2022-09-19,28.44634360707683\r
2022-09-20,28.44634360707683\r
2022-09-22,24.520857118917554\r
2022-10-04,19.002049751415157\r
2022-10-05,19.002049751415157\r
2022-10-09,32.5571185279913\r
2022-10-19,30.47913001617945\r
2022-10-22,28.44634360707683\r
2022-11-11,36.84466313816257\r
2022-11-13,36.84466313816257\r
2022-12-08,36.84466313816257\r
2022-12-09,36.84466313816257\r
2022-12-11,36.84466313816257\r
2022-12-16,36.84466313816257\r
2022-12-28,36.84466313816257\r
2023-01-15,19.002049751415157\r
2023-02-11,19.002049751415157\r
2023-02-12,19.002049751415157\r
2023-02-14,30.47913001617945\r
2023-02-16,30.47913001617945\r
2023-03-28,60.699804891088874\r
2023-04-05,60.699804891088874\r
2023-04-08,13.963806367998103\r
2023-04-13,13.963806367998103\r
2023-04-20,10.898309389957332\r
2023-05-27,15.586793858917892\r
2023-05-28,15.586793858917892\r
2023-05-30,12.400142529473085\r
2023-06-01,12.400142529473085\r
2023-06-02,12.400142529473085\r
2023-06-04,3.3829895259683496\r
2023-06-06,3.3829895259683496\r
2023-06-11,12.400142529473085\r
2023-06-14,17.26687506814437\r
2023-06-16,17.26687506814437\r
2023-06-19,17.26687506814437\r
2023-06-24,17.26687506814437\r
2023-06-27,12.400142529473085\r
2023-07-09,13.963806367998103\r
2023-07-11,13.963806367998103\r
2023-07-14,13.963806367998103\r
2023-07-17,13.963806367998103\r
2023-07-19,10.898309389957332\r
2023-07-22,10.898309389957332\r
2023-07-26,9.46115346113938\r
2023-07-31,15.586793858917892\r
2023-08-08,19.002049751415157\r
2023-08-10,19.002049751415157\r
2023-08-11,8.09194464611881\r
2023-08-18,8.09194464611881\r
2023-08-20,15.586793858917892\r
2023-08-21,15.586793858917892\r
2023-08-23,9.46115346113938\r
2023-08-26,9.46115346113938\r
2023-09-04,12.400142529473085\r
2023-09-05,12.400142529473085\r
2023-09-07,17.26687506814437\r
2023-09-09,17.26687506814437\r
2023-09-10,17.26687506814437\r
2023-09-14,17.26687506814437\r
2023-09-15,19.002049751415157\r
2023-09-19,19.002049751415157\r
2023-10-02,17.26687506814437\r
2023-10-05,17.26687506814437\r
2023-10-07,20.79051055906432\r
2023-10-09,17.26687506814437\r
2023-10-10,17.26687506814437\r
2023-10-19,13.963806367998103\r
2023-11-08,28.44634360707683\r
2023-12-16,28.44634360707683\r
2023-12-26,30.47913001617945\r
2023-12-31,30.47913001617945\r
`;export{n as default};
