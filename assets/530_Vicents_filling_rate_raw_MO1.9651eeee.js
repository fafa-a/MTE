const n=`date,value\r
2017-01-26,53.38366963154901\r
2017-02-15,58.36396185291765\r
2017-02-25,74.56978666214128\r
2017-03-17,69.1968595765679\r
2017-03-27,9.455544971048813\r
2017-05-16,79.05462410013384\r
2017-05-26,88.25642374107372\r
2017-06-25,92.44267167504889\r
2017-07-05,97.22132100397002\r
2017-08-04,88.25642374107372\r
2017-08-14,93.49831664358997\r
2017-08-19,86.70171833092755\r
2017-08-24,87.21902888098778\r
2017-08-29,76.55330976939685\r
2017-10-08,67.75266794505411\r
2017-10-13,76.05596072930001\r
2017-10-18,54.728636248417416\r
2017-10-28,53.38366963154901\r
2017-11-22,46.384070447534995\r
2017-11-27,47.24271807757268\r
2018-02-10,51.60614788953286\r
2018-02-25,53.83087185976336\r
2018-03-02,62.068782747580244\r
2018-03-17,17.04772704170954\r
2018-03-22,67.75266794505411\r
2018-04-21,88.25642374107372\r
2018-04-26,61.601938188282304\r
2018-05-11,88.25642374107372\r
2018-05-21,76.55330976939685\r
2018-06-20,90.8659904595479\r
2018-06-25,97.75673921436872\r
2018-07-10,83.61741042554998\r
2018-07-15,79.55778344690678\r
2018-07-25,82.59681141611335\r
2018-07-30,89.81941795997562\r
2018-08-04,71.13663982215846\r
2018-08-19,82.08792912686752\r
2018-09-03,69.1968595765679\r
2018-09-08,78.55242697204113\r
2018-09-23,70.65018264242337\r
2018-09-28,71.13663982215846\r
2018-10-03,66.31768471420779\r
2018-11-17,51.164608323629054\r
2018-11-22,46.81280161339414\r
2019-01-11,49.84687005828624\r
2019-01-16,59.745218541037616\r
2019-02-15,68.71444399803508\r
2019-02-20,60.67144017763986\r
2019-02-25,67.75266794505411\r
2019-03-22,65.36618383275363\r
2019-03-27,60.67144017763986\r
2019-05-01,77.05163341796505\r
2019-05-31,65.36618383275363\r
2019-06-30,84.12912253611786\r
2019-07-05,96.68678898226256\r
2019-07-10,91.91620438102971\r
2019-07-15,98.83022647437491\r
2019-07-25,92.97004311068974\r
2019-08-04,84.64177333653963\r
2019-08-09,86.18533528677862\r
2019-08-14,80.56697910839421\r
2019-08-24,85.66988195592829\r
2019-08-29,64.41883435440822\r
2019-09-03,82.59681141611335\r
2019-09-13,80.56697910839421\r
2019-10-08,58.82329953810268\r
2019-10-13,70.65018264242337\r
2019-11-27,43.416511505366636\r
2020-01-06,50.72421286185877\r
2020-01-11,48.539536432784644\r
2020-01-16,45.956528927571526\r
2020-02-05,56.99247673120609\r
2020-02-15,40.508808999122635\r
2020-02-20,64.89198866553771\r
2020-04-05,53.83087185976336\r
2020-04-10,87.21902888098778\r
2020-04-15,79.05462410013384\r
2020-04-25,100.0\r
2020-05-20,91.39064328581655\r
2020-05-25,78.05119450583233\r
2020-05-30,86.70171833092755\r
2020-06-14,78.05119450583233\r
2020-06-24,80.06190258613786\r
2020-07-19,97.22132100397002\r
2020-07-24,67.75266794505411\r
2020-07-29,83.10663928653192\r
2020-08-08,100.0\r
2020-09-02,88.25642374107372\r
2020-09-12,74.07636155011242\r
2020-09-17,89.2975024929366\r
2021-02-14,61.13615626021818\r
2021-02-24,70.16473169502487\r
2021-03-01,65.36618383275363\r
2021-03-21,70.65018264242337\r
2021-03-31,67.27331319338063\r
2021-04-05,89.2975024929366\r
2021-04-15,89.81941795997562\r
2021-04-20,89.2975024929366\r
2021-06-09,98.29304167884305\r
2021-06-14,100.0\r
2021-08-23,85.15536056030575\r
2021-09-17,65.84141684477348\r
2021-09-22,78.05119450583233\r
2021-10-17,60.67144017763986\r
2021-10-27,56.53750247108588\r
2021-12-16,62.536686750438776\r
2021-12-21,58.82329953810268\r
2022-01-15,67.27331319338063\r
2022-01-25,63.47566046689699\r
2022-02-09,71.62410049043709\r
2022-03-01,90.34224798545053\r
2022-03-26,81.57999474706376\r
2022-04-05,92.44267167504889\r
2022-04-10,88.77650370764924\r
2022-04-30,84.64177333653963\r
2022-06-29,85.15536056030575\r
2022-07-19,96.15314509557429\r
2022-08-08,88.77650370764924\r
2022-08-13,85.15536056030575\r
2022-09-12,79.55778344690678\r
2022-09-22,78.05119450583233\r
2022-10-07,78.55242697204113\r
2022-10-22,63.47566046689699\r
2022-11-06,50.2849654466947\r
2022-11-11,48.10608972746041\r
2022-11-16,56.53750247108588\r
2022-12-06,14.27036956055856\r
2023-01-10,55.17919105357906\r
2023-02-09,52.492643748762816\r
2023-02-14,73.09247629498824\r
2023-02-19,71.62410049043709\r
2023-03-01,68.71444399803508\r
2023-03-16,82.59681141611335\r
2023-04-05,74.07636155011242\r
`;export{n as default};
