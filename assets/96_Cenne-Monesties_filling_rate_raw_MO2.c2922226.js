const n=`date,value\r
2017-01-03,38.09772548720003\r
2017-01-13,38.09772548720003\r
2017-02-22,36.26177024890772\r
2017-02-25,40.898049138122246\r
2017-03-07,34.45119819806954\r
2017-03-14,80.6009253062007\r
2017-03-17,100.0\r
2017-03-27,80.6009253062007\r
2017-04-03,68.36603973729373\r
2017-04-06,68.36603973729373\r
2017-04-23,60.878851483157185\r
2017-05-03,60.878851483157185\r
2017-05-13,57.74483981205272\r
2017-05-16,89.8390542549928\r
2017-05-23,89.8390542549928\r
2017-05-26,100.0\r
2017-06-02,100.0\r
2017-06-05,100.0\r
2017-06-12,44.715736810751004\r
2017-06-22,42.79510625124447\r
2017-06-25,88.66920827748149\r
2017-07-02,91.01313248347557\r
2017-07-05,87.50361938442957\r
2017-07-07,79.46586499861493\r
2017-07-10,79.46586499861493\r
2017-07-12,79.46586499861493\r
2017-07-17,66.2024110418153\r
2017-07-22,61.93364480919888\r
2017-07-27,66.2024110418153\r
2017-08-04,77.20918455835599\r
2017-08-06,77.20918455835599\r
2017-08-11,67.28181775559726\r
2017-08-14,86.34231279479741\r
2017-08-19,86.34231279479741\r
2017-08-21,91.01313248347557\r
2017-08-24,85.18531412279508\r
2017-08-26,86.34231279479741\r
2017-08-29,67.28181775559726\r
2017-09-03,92.19141850546814\r
2017-09-05,43.752503998661375\r
2017-09-08,43.752503998661375\r
2017-09-10,35.35327544831702\r
2017-09-13,60.878851483157185\r
2017-09-20,49.61749937326231\r
2017-09-23,47.63988816048803\r
2017-09-28,64.05818364076572\r
2017-10-03,61.93364480919888\r
2017-10-05,37.17661032266461\r
2017-10-08,42.79510625124447\r
2017-10-10,39.95851025986241\r
2017-10-13,40.898049138122246\r
2017-10-15,40.898049138122246\r
2017-10-18,39.95851025986241\r
2017-10-25,37.17661032266461\r
2017-10-28,24.156524399571047\r
2017-10-30,36.26177024890772\r
2017-11-07,25.801020033507932\r
2017-11-14,24.156524399571047\r
2017-11-17,33.555612973228584\r
2017-11-19,45.68474824130212\r
2017-11-22,45.68474824130212\r
2017-11-24,45.68474824130212\r
2017-11-27,45.68474824130212\r
2017-11-29,35.35327544831702\r
2017-12-09,32.66659655698822\r
2017-12-14,38.09772548720003\r
2017-12-19,38.09772548720003\r
2017-12-24,47.63988816048803\r
2017-12-27,47.63988816048803\r
2018-01-01,48.62591057917652\r
2018-01-03,48.62591057917652\r
2018-02-12,56.710425574295044\r
2018-02-25,52.62517041320315\r
2018-02-27,52.62517041320315\r
2018-03-02,64.05818364076572\r
2018-03-14,47.63988816048803\r
2018-03-19,68.36603973729373\r
2018-03-22,68.36603973729373\r
2018-04-01,57.74483981205272\r
2018-04-18,69.45504274876168\r
2018-04-21,84.03264938800565\r
2018-04-23,84.03264938800565\r
2018-04-26,76.0876222848596\r
2018-05-06,78.33527518736622\r
2018-05-11,80.6009253062007\r
2018-05-18,80.6009253062007\r
2018-05-21,80.6009253062007\r
2018-06-20,77.20918455835599\r
2018-06-22,77.20918455835599\r
2018-06-25,87.50361938442957\r
2018-06-27,87.50361938442957\r
2018-07-02,79.46586499861493\r
2018-07-07,76.0876222848596\r
2018-07-10,60.878851483157185\r
2018-07-12,67.28181775559726\r
2018-07-15,72.75040492893231\r
2018-07-17,72.75040492893231\r
2018-07-20,57.74483981205272\r
2018-07-22,76.0876222848596\r
2018-07-25,79.46586499861493\r
2018-07-27,92.19141850546814\r
2018-07-30,78.33527518736622\r
2018-08-01,82.88434502587062\r
2018-08-04,76.0876222848596\r
2018-08-06,82.88434502587062\r
2018-08-11,57.74483981205272\r
2018-08-16,58.78440933364259\r
2018-08-19,72.75040492893231\r
2018-08-21,58.78440933364259\r
2018-08-26,73.85820201616514\r
2018-08-31,52.62517041320315\r
2018-09-03,45.68474824130212\r
2018-09-08,45.68474824130212\r
2018-09-10,45.68474824130212\r
2018-09-13,45.68474824130212\r
2018-09-20,51.617177509946934\r
2018-09-23,55.681208384605675\r
2018-09-25,47.63988816048803\r
2018-09-28,53.63853672979113\r
2018-09-30,47.63988816048803\r
2018-10-03,45.68474824130212\r
2018-10-05,47.63988816048803\r
2018-10-23,23.345630649273307\r
2018-10-25,38.09772548720003\r
2018-10-30,38.09772548720003\r
2018-11-04,32.66659655698822\r
2018-11-12,30.039765152918342\r
2018-11-27,39.95851025986241\r
2018-11-29,39.95851025986241\r
2018-12-19,16.410932857601082\r
2018-12-27,34.45119819806954\r
2018-12-29,34.45119819806954\r
2019-01-03,38.09772548720003\r
2019-01-11,38.09772548720003\r
2019-01-16,38.09772548720003\r
2019-02-12,28.322911202847546\r
2019-02-15,28.322911202847546\r
2019-02-17,28.322911202847546\r
2019-02-20,33.555612973228584\r
2019-02-22,26.634401524323714\r
2019-02-25,34.45119819806954\r
2019-02-27,29.177842281324672\r
2019-03-12,50.61460460909927\r
2019-03-22,55.681208384605675\r
2019-03-24,46.659483252819136\r
2019-03-27,49.61749937326231\r
2019-03-29,47.63988816048803\r
2019-04-01,47.63988816048803\r
2019-04-08,58.78440933364259\r
2019-04-13,57.74483981205272\r
2019-05-01,48.62591057917652\r
2019-05-06,76.0876222848596\r
2019-05-11,76.0876222848596\r
2019-05-13,56.710425574295044\r
2019-05-16,56.710425574295044\r
2019-05-23,64.05818364076572\r
2019-05-31,62.993434761486085\r
2019-06-02,78.33527518736622\r
2019-06-12,79.46586499861493\r
2019-06-27,40.898049138122246\r
2019-06-30,100.0\r
2019-07-02,100.0\r
2019-07-05,93.37388823040594\r
2019-07-07,93.37388823040594\r
2019-07-10,93.37388823040594\r
2019-07-12,100.0\r
2019-07-15,100.0\r
2019-07-17,66.2024110418153\r
2019-07-22,79.46586499861493\r
2019-07-25,59.82909324295179\r
2019-08-01,93.37388823040594\r
2019-08-04,58.78440933364259\r
2019-08-09,70.54879318248057\r
2019-08-11,58.78440933364259\r
2019-08-14,67.28181775559726\r
2019-08-16,60.878851483157185\r
2019-08-21,67.28181775559726\r
2019-08-24,67.28181775559726\r
2019-08-26,50.61460460909927\r
2019-08-29,50.61460460909927\r
2019-08-31,30.908589540471464\r
2019-09-03,11.51955473806802\r
2019-09-05,11.51955473806802\r
2019-10-05,10.21367659544843\r
2019-11-19,4.934503893552076\r
2019-11-27,6.575650326272991\r
2019-12-02,6.575650326272991\r
2020-01-01,4.934503893552076\r
2020-01-06,7.73876813128016\r
2020-01-11,4.934503893552076\r
2020-01-16,4.934503893552076\r
2020-01-18,8.339523287046344\r
2020-03-11,17.147450228799386\r
2020-03-13,17.147450228799386\r
2020-10-24,10.21367659544843\r
2020-11-01,10.21367659544843\r
2020-11-06,10.21367659544843\r
2020-11-08,10.21367659544843\r
2020-11-11,3.4330800461960345\r
2020-11-18,8.952509075554339\r
2020-11-21,6.01424217378351\r
2020-11-23,6.01424217378351\r
2020-11-26,6.01424217378351\r
2021-02-11,12.867801011319804\r
2021-02-14,12.867801011319804\r
2021-02-19,12.867801011319804\r
2021-03-23,46.659483252819136\r
2021-03-26,41.84360148272125\r
2021-03-28,62.993434761486085\r
2021-03-31,62.993434761486085\r
2021-04-02,62.993434761486085\r
2021-04-05,87.50361938442957\r
2021-04-07,87.50361938442957\r
2021-04-15,88.66920827748149\r
2021-04-17,88.66920827748149\r
2021-04-20,48.62591057917652\r
2021-04-22,48.62591057917652\r
2021-05-20,71.64725804296604\r
2021-05-25,67.28181775559726\r
2021-05-27,64.05818364076572\r
2021-05-30,64.05818364076572\r
2021-06-09,81.74042789855365\r
2021-06-11,96.94616403738732\r
2021-06-14,96.94616403738732\r
2021-06-16,81.74042789855365\r
2021-06-19,81.74042789855365\r
2021-06-21,99.34817382427569\r
2021-06-26,55.681208384605675\r
2021-07-01,78.33527518736622\r
2021-07-09,89.8390542549928\r
2021-07-19,88.66920827748149\r
2021-07-21,77.20918455835599\r
2021-07-26,77.20918455835599\r
2021-07-29,64.05818364076572\r
2021-08-05,68.36603973729373\r
2021-08-10,65.12785448408899\r
2021-08-13,65.12785448408899\r
2021-08-18,77.20918455835599\r
2021-08-20,66.2024110418153\r
2021-08-23,72.75040492893231\r
2021-08-25,72.75040492893231\r
2021-08-28,57.74483981205272\r
2021-08-30,58.78440933364259\r
2021-09-04,53.63853672979113\r
2021-09-07,68.36603973729373\r
2021-09-12,71.64725804296604\r
2021-09-14,71.64725804296604\r
2021-09-17,71.64725804296604\r
2021-09-22,73.85820201616514\r
2021-09-24,50.61460460909927\r
2021-09-29,50.61460460909927\r
2021-10-12,40.898049138122246\r
2021-10-14,53.63853672979113\r
2021-10-17,53.63853672979113\r
2021-10-24,36.26177024890772\r
2021-10-27,34.45119819806954\r
2021-12-16,30.908589540471464\r
2021-12-18,40.898049138122246\r
2021-12-21,28.322911202847546\r
2021-12-23,28.322911202847546\r
2022-01-12,31.784228158710338\r
2022-01-15,35.35327544831702\r
2022-01-17,23.345630649273307\r
2022-01-22,29.177842281324672\r
2022-01-25,27.47506535610349\r
2022-01-27,28.322911202847546\r
2022-01-30,26.634401524323714\r
2022-02-01,26.634401524323714\r
2022-02-06,24.156524399571047\r
2022-02-09,31.784228158710338\r
2022-02-26,22.542460555757906\r
2022-03-01,22.542460555757906\r
2022-03-03,36.26177024890772\r
2022-03-08,30.908589540471464\r
2022-03-26,35.35327544831702\r
2022-04-05,62.993434761486085\r
2022-04-10,61.93364480919888\r
2022-04-15,61.93364480919888\r
2022-04-17,62.993434761486085\r
2022-04-27,62.993434761486085\r
2022-05-17,48.62591057917652\r
2022-05-20,48.62591057917652\r
2022-05-22,64.05818364076572\r
2022-05-27,64.05818364076572\r
2022-05-30,58.78440933364259\r
2022-06-01,76.0876222848596\r
2022-06-04,68.36603973729373\r
2022-06-06,82.88434502587062\r
2022-06-11,82.88434502587062\r
2022-06-14,87.50361938442957\r
2022-06-16,87.50361938442957\r
2022-06-19,54.65723090556478\r
2022-07-11,80.6009253062007\r
2022-07-14,95.75128420868182\r
2022-07-16,82.88434502587062\r
2022-07-19,89.8390542549928\r
2022-07-21,82.88434502587062\r
2022-07-24,79.46586499861493\r
2022-07-26,78.33527518736622\r
2022-07-29,80.6009253062007\r
2022-07-31,78.33527518736622\r
2022-08-03,81.74042789855365\r
2022-08-05,72.75040492893231\r
2022-08-08,67.28181775559726\r
2022-08-10,69.45504274876168\r
2022-08-13,65.12785448408899\r
2022-08-15,68.36603973729373\r
2022-08-20,66.2024110418153\r
2022-08-23,51.617177509946934\r
2022-08-28,51.617177509946934\r
2022-08-30,58.78440933364259\r
2022-09-02,56.710425574295044\r
2022-09-04,68.36603973729373\r
2022-09-12,67.28181775559726\r
2022-09-19,67.28181775559726\r
2022-09-22,51.617177509946934\r
2022-10-02,56.710425574295044\r
2022-10-04,61.93364480919888\r
2022-10-07,61.93364480919888\r
2022-10-09,44.715736810751004\r
2022-10-12,44.715736810751004\r
2022-10-22,39.95851025986241\r
2022-10-24,39.95851025986241\r
2022-10-27,39.95851025986241\r
2022-11-01,42.79510625124447\r
2022-11-06,40.898049138122246\r
2022-11-08,39.02504755838535\r
2022-11-11,39.02504755838535\r
2022-11-13,52.62517041320315\r
2022-11-16,38.09772548720003\r
2023-01-10,48.62591057917652\r
2023-01-12,48.62591057917652\r
2023-01-20,48.62591057917652\r
2023-02-04,22.542460555757906\r
2023-02-06,38.09772548720003\r
2023-02-09,38.09772548720003\r
2023-02-11,30.039765152918342\r
2023-02-14,30.039765152918342\r
2023-02-16,33.555612973228584\r
2023-02-19,33.555612973228584\r
2023-02-21,33.555612973228584\r
2023-02-26,36.26177024890772\r
2023-03-01,47.63988816048803\r
2023-03-03,58.78440933364259\r
2023-03-13,53.63853672979113\r
2023-03-16,68.36603973729373\r
2023-03-28,56.710425574295044\r
2023-04-05,69.45504274876168\r
2023-04-07,64.05818364076572\r
2023-04-15,62.993434761486085\r
2023-04-17,81.74042789855365\r
2023-04-20,53.63853672979113\r
2023-05-02,73.85820201616514\r
`;export{n as default};