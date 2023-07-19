const r=`date,value\r
2017-03-01,52.31408101910684\r
2017-03-11,90.81320592932207\r
2017-03-14,90.81320592932207\r
2017-03-21,90.81320592932207\r
2017-03-31,38.060195753644095\r
2017-04-20,75.104160212876\r
2017-04-23,75.104160212876\r
2017-04-30,75.104160212876\r
2017-05-30,71.3239723422462\r
2017-06-02,71.3239723422462\r
2017-06-09,82.18229560564116\r
2017-07-04,82.87622859926886\r
2017-07-07,82.87622859926886\r
2017-07-12,82.87622859926886\r
2017-08-18,94.6806324172915\r
2017-08-21,94.6806324172915\r
2017-08-23,94.6806324172915\r
2017-08-26,94.6806324172915\r
2017-09-07,93.14452398812521\r
2017-09-10,93.14452398812521\r
2017-09-15,93.14452398812521\r
2017-09-17,93.14452398812521\r
2017-10-07,86.71931071944564\r
2017-10-10,76.42321968785245\r
2017-10-12,77.75595169292157\r
2017-10-15,78.73075739042234\r
2017-10-17,71.5468788068513\r
2017-10-22,74.1889297211382\r
2017-10-25,41.384279711062874\r
2017-10-27,41.384279711062874\r
2018-03-21,81.97479169803924\r
2018-03-24,81.97479169803924\r
2018-03-26,81.97479169803924\r
2018-03-31,93.66736996932427\r
2018-04-05,93.51780788567825\r
2018-04-08,93.51780788567825\r
2018-04-10,93.48043955948826\r
2018-04-15,73.40974953787689\r
2018-04-18,73.40974953787689\r
2018-04-20,79.17008425524004\r
2018-04-25,70.65773177027424\r
2018-04-28,91.43883291954923\r
2018-04-30,91.43883291954923\r
2018-05-05,100.0\r
2018-05-08,100.0\r
2018-05-25,100.0\r
2018-05-28,100.0\r
2018-06-02,100.0\r
2018-06-14,76.48953119335451\r
2018-06-19,85.08482950640006\r
2018-06-22,86.82654984879017\r
2018-06-24,86.79079471955704\r
2018-06-27,91.95597320002554\r
2018-06-29,95.28414428962977\r
2018-07-02,100.0\r
2018-07-04,100.0\r
2018-07-07,99.41763821616844\r
2018-07-09,96.19368909180861\r
2018-07-12,89.0241916652224\r
2018-07-14,89.0241916652224\r
2018-07-17,86.68358184720617\r
2018-07-19,86.79079471955704\r
2018-07-22,73.47449450999024\r
2018-07-24,89.09679874620613\r
2018-07-27,89.09679874620613\r
2018-07-29,89.09679874620613\r
2018-08-01,88.80658148275704\r
2018-08-03,88.80658148275704\r
2018-08-28,77.28793744142128\r
2018-09-02,87.39982288124196\r
2018-09-05,87.39982288124196\r
2018-09-07,83.99374301473256\r
2018-09-10,89.53318032273658\r
2018-09-12,89.53318032273658\r
2018-09-27,69.08637752965944\r
2018-09-30,69.08637752965944\r
2018-10-02,69.08637752965944\r
2018-10-05,69.08637752965944\r
2019-03-16,83.88859797736896\r
2019-03-19,83.88859797736896\r
2019-03-21,83.88859797736896\r
2019-03-24,83.88859797736896\r
2019-03-26,63.12794913027603\r
2019-03-29,63.12794913027603\r
2019-03-31,63.12794913027603\r
2019-04-05,63.06879015881602\r
2019-04-15,95.09530197070256\r
2019-04-18,96.15568882244177\r
2019-04-20,91.51260398387389\r
2019-04-23,93.70478268830482\r
2019-04-30,85.79320233555234\r
2019-05-10,73.5068797188574\r
2019-05-13,73.5068797188574\r
2019-05-15,74.58035468881295\r
2019-05-23,60.23903854380468\r
2019-05-30,87.22043416371834\r
2019-06-02,86.57644773358406\r
2019-06-04,87.22043416371834\r
2019-06-07,87.22043416371834\r
2019-06-12,87.22043416371834\r
2019-06-29,76.32381651790077\r
2019-07-02,76.32381651790077\r
2019-07-04,76.8881183482421\r
2019-07-07,76.8881183482421\r
2019-07-09,76.68867085397821\r
2019-07-12,76.68867085397821\r
2019-07-14,80.3601177136628\r
2019-07-17,79.47508517762449\r
2019-07-19,81.2166099378593\r
2019-07-22,82.14768996672684\r
2019-07-24,80.3942738097562\r
2019-07-29,83.43387373250516\r
2019-08-01,81.97479169803924\r
2019-08-03,83.15477332301174\r
2019-08-06,81.62964451448033\r
2019-08-08,81.62964451448033\r
2019-08-11,88.3000548812809\r
2019-08-16,78.79825157262565\r
2019-08-18,84.45027644950083\r
2019-08-23,85.93529595540959\r
2019-08-26,85.93529595540959\r
2019-08-31,85.93529595540959\r
2019-09-07,86.36241570899256\r
2019-09-12,70.34177982114473\r
2019-09-15,70.34177982114473\r
2019-09-17,64.64765880403343\r
2019-09-20,64.64765880403343\r
2019-09-22,64.64765880403343\r
2019-09-27,64.01929339738447\r
2019-09-30,57.570153272158265\r
2020-03-15,47.55409826801533\r
2020-03-18,47.55409826801533\r
2020-03-20,67.01360831697284\r
2020-03-23,67.01360831697284\r
2020-03-25,46.23992052878682\r
2020-03-28,46.23992052878682\r
2020-03-30,46.23992052878682\r
2020-04-02,65.40047421675533\r
2020-04-04,65.03847628918192\r
2020-04-07,90.0438946736024\r
2020-04-09,87.0770808949085\r
2020-04-12,90.99694887398363\r
2020-04-14,87.22043416371834\r
2020-04-17,87.22043416371834\r
2020-04-22,89.09679874620613\r
2020-04-24,89.09679874620613\r
2020-04-27,47.37927216762925\r
2020-04-29,47.37927216762925\r
2020-05-04,50.76669328625834\r
2020-05-07,50.76669328625834\r
2020-05-09,95.51104906437135\r
2020-05-14,95.51104906437135\r
2020-05-17,95.51104906437135\r
2020-05-19,68.71237475781993\r
2020-05-22,96.45994090390091\r
2020-05-24,68.58797524436395\r
2020-05-27,69.36767183727052\r
2020-05-29,66.79921309128454\r
2020-06-01,66.79921309128454\r
2020-06-03,66.79921309128454\r
2020-06-23,92.47484789289452\r
2020-06-28,92.47484789289452\r
2020-07-01,92.47484789289452\r
2020-07-06,92.47484789289452\r
2020-07-08,92.6977541606428\r
2020-07-13,78.52848106450196\r
2020-07-18,80.83908840758208\r
2020-07-21,80.83908840758208\r
2020-07-23,78.39380197550476\r
2020-07-26,79.44116176057162\r
2020-07-28,79.44116176057162\r
2020-07-31,82.98061777357508\r
2020-08-02,82.98061777357508\r
2020-08-05,73.2157181356919\r
2020-08-07,78.56217230822237\r
2020-08-10,74.51503216643363\r
2020-08-12,85.15550973418166\r
2020-08-15,85.15550973418166\r
2020-08-20,85.15550973418166\r
2020-08-22,82.84144956293595\r
2020-08-25,89.89780008835095\r
2020-08-27,83.88859797736896\r
2020-09-01,83.81854477194159\r
2020-09-04,83.81854477194159\r
2020-09-06,83.81854477194159\r
2020-09-09,86.14869849866618\r
2020-09-11,86.14869849866618\r
2020-09-14,84.34479201528421\r
2020-09-16,84.80245735159507\r
2020-09-19,68.71237475781993\r
2021-02-28,57.17879860069826\r
2021-03-05,58.69706488823832\r
2021-03-10,87.50756128118688\r
2021-03-20,91.14410219357232\r
2021-03-30,75.33401060294302\r
2021-04-02,75.33401060294302\r
2021-04-04,91.84501147927367\r
2021-04-07,91.84501147927367\r
2021-04-09,100.0\r
2021-04-14,100.0\r
2021-04-17,100.0\r
2021-04-19,100.0\r
2021-06-03,81.38855633922097\r
2021-06-11,81.38855633922097\r
2021-06-13,87.79524946171352\r
2021-06-16,71.9299664298446\r
2021-06-18,75.26829646236277\r
2021-06-21,75.26829646236277\r
2021-07-23,92.9582147257219\r
2021-08-02,96.57418274917036\r
2021-08-10,94.07939841967816\r
2021-08-12,94.07939841967816\r
2021-08-17,92.2522605292312\r
2021-08-20,92.2522605292312\r
2021-08-25,92.2522605292312\r
2021-08-27,92.4006166783798\r
2021-09-01,83.92363762524158\r
2021-09-06,85.65124845861594\r
2021-09-11,80.9762480056979\r
2021-09-21,80.80482010084931\r
2021-10-01,84.90828152980058\r
2021-10-09,84.06388320045404\r
2021-10-11,84.55583925538038\r
2021-10-14,33.869259575947964\r
2021-10-16,58.66873375817065\r
2021-10-21,45.84748316706594\r
2021-10-24,57.710307461751775\r
2021-10-26,61.10597734160893\r
2021-10-29,68.37059841481803\r
2022-02-28,35.317739845298895\r
2022-03-03,35.317739845298895\r
2022-03-05,35.317739845298895\r
2022-03-10,87.79524946171352\r
2022-03-20,87.79524946171352\r
2022-03-25,52.12904781504134\r
2022-03-28,52.12904781504134\r
2022-04-04,52.12904781504134\r
2022-04-14,88.22783448625286\r
2022-04-17,88.22783448625286\r
2022-04-19,88.22783448625286\r
2022-05-14,90.19013028311876\r
2022-05-19,90.19013028311876\r
2022-05-29,49.60500094093086\r
2022-06-06,49.60500094093086\r
2022-06-13,61.45481615160789\r
2022-06-16,61.45481615160789\r
2022-06-18,83.46880037285831\r
2022-06-21,83.46880037285831\r
2022-06-23,83.46880037285831\r
2022-06-26,82.52882859168147\r
2022-06-28,82.52882859168147\r
2022-07-03,84.55583925538038\r
2022-07-06,84.55583925538038\r
2022-07-08,86.32677431581061\r
2022-07-11,86.32677431581061\r
2022-07-13,84.06388320045404\r
2022-07-16,87.61537858062684\r
2022-07-18,83.99374301473256\r
2022-07-21,88.48075955768783\r
2022-07-28,88.0834990529934\r
2022-08-02,86.29114166678823\r
2022-08-05,86.29114166678823\r
2022-08-07,81.31975184107623\r
2022-08-10,82.63295752539253\r
2022-08-12,77.62206195359562\r
2022-08-22,88.58928777727655\r
2022-08-25,88.22783448625286\r
2022-08-27,88.22783448625286\r
2022-08-30,88.22783448625286\r
2022-09-01,88.37231040247423\r
2022-09-04,76.42321968785245\r
2022-09-06,76.42321968785245\r
2022-09-09,76.42321968785245\r
2022-09-11,77.68898967950483\r
2022-09-19,51.00095175040106\r
2022-09-21,54.80947270042108\r
2022-10-06,77.25457210100497\r
2022-10-11,79.3733407498867\r
2022-10-16,51.786448029104804\r
2022-10-19,53.486083281732256\r
2022-10-26,34.320613249150014\r
2023-03-05,55.30045051825093\r
2023-03-15,55.84903649574344\r
2023-05-04,95.5488977171361\r
2023-06-23,95.20858064084615\r
2023-06-26,95.20858064084615\r
2023-06-28,95.24635801125783\r
2023-07-03,88.40845133707774\r
2023-07-06,88.7703438915588\r
2023-07-08,88.7703438915588\r
`;export{r as default};
