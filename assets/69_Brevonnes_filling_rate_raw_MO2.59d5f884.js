const n=`date,value\r
2017-02-25,64.64761780294907\r
2017-03-27,91.4289466966619\r
2017-03-31,91.4289466966619\r
2017-04-03,93.0067829438329\r
2017-04-06,93.0067829438329\r
2017-04-10,92.40515913091181\r
2017-05-16,99.7286033402007\r
2017-05-23,99.7286033402007\r
2017-05-26,99.50904840193083\r
2017-06-02,96.94240719569986\r
2017-06-05,95.24776070507627\r
2017-06-22,92.5074591013073\r
2017-07-02,92.1189965940736\r
2017-07-05,86.5381346272808\r
2017-07-07,86.63948109929498\r
2017-08-14,76.90565953217164\r
2017-08-29,70.83553008627122\r
2017-09-03,70.7250787036282\r
2017-10-15,45.40722855344856\r
2017-10-17,45.40722855344856\r
2017-10-18,39.40845671162536\r
2017-10-20,39.37501801570122\r
2017-10-25,39.52559509422395\r
2017-11-22,15.402939866113002\r
2017-11-29,15.447308982089162\r
2017-12-01,17.61528485811323\r
2017-12-02,17.552614178647847\r
2018-02-22,96.8180761587088\r
2018-02-24,96.77188335718309\r
2018-02-25,96.89618707857687\r
2018-02-27,96.8015775640471\r
2018-03-24,98.63527674682516\r
2018-04-18,96.41697804117995\r
2018-04-20,96.86097856551874\r
2018-04-21,95.78666722382057\r
2018-04-25,96.60479427655709\r
2018-05-06,93.0229804445704\r
2018-05-08,96.82357597804766\r
2018-05-11,94.06774903587261\r
2018-05-18,96.30393020708851\r
2018-05-20,94.71352149296692\r
2018-05-21,94.76797228633612\r
2018-06-20,100.0\r
2018-06-22,100.0\r
2018-06-27,100.0\r
2018-07-02,99.97740398024882\r
2018-07-04,99.97740398024882\r
2018-07-07,99.8624516091131\r
2018-07-09,97.19018782536726\r
2018-07-10,97.20451294143564\r
2018-07-15,98.47225548352266\r
2018-07-17,96.36648311045909\r
2018-07-19,98.66190425706941\r
2018-07-20,96.76528521437699\r
2018-07-24,96.75098994915588\r
2018-07-25,96.504824329835\r
2018-07-27,95.4520086680358\r
2018-07-29,92.30936751235326\r
2018-07-30,92.30936751235326\r
2018-08-03,92.47514821530791\r
2018-08-04,92.45038005683746\r
2018-08-06,91.77957546432623\r
2018-08-11,86.764933775606\r
2018-08-16,86.00097321887915\r
2018-08-26,77.95061024050884\r
2018-08-29,76.04327586221036\r
2018-09-20,57.459737025404436\r
2018-09-22,57.459737025404436\r
2018-09-25,54.86894025924127\r
2018-09-27,54.86894025924127\r
2018-09-28,54.9536500425752\r
2018-09-30,51.36557414489879\r
2018-10-05,49.77768735873656\r
2018-10-10,47.132581316225284\r
2018-10-13,41.15636218191019\r
2018-10-15,48.03741852816004\r
2018-10-17,44.6580556744553\r
2018-10-18,41.58612161552103\r
2018-10-20,35.109990415781006\r
2018-10-22,34.065904154326645\r
2018-11-04,28.579491120809625\r
2018-11-11,28.579491120809625\r
2018-11-14,34.86220886955398\r
2018-11-17,29.076212849738837\r
2018-11-19,28.891292063807782\r
2018-11-22,15.34402945085252\r
2019-02-15,68.12427786759697\r
2019-02-17,72.8709916033058\r
2019-02-20,72.8709916033058\r
2019-02-22,73.15979545859943\r
2019-02-24,73.15979545859943\r
2019-02-25,73.00132284391195\r
2019-02-27,76.92643551698104\r
2019-03-19,86.73774526758265\r
2019-03-21,86.73774526758265\r
2019-03-22,88.00931910429385\r
2019-03-24,87.95037873662224\r
2019-03-29,88.79728040895095\r
2019-03-31,88.79728040895095\r
2019-04-01,87.70639097164256\r
2019-04-11,87.91670669206621\r
2019-04-15,89.89225168039214\r
2019-04-18,91.17306778919647\r
2019-04-20,91.17306778919647\r
2019-04-26,91.21479953611828\r
2019-05-01,93.49868502081853\r
2019-05-06,96.4136845221558\r
2019-05-13,96.69271931984294\r
2019-05-15,96.69271931984294\r
2019-05-16,97.20451294143564\r
2019-05-23,99.41772574687278\r
2019-05-25,99.41772574687278\r
2019-05-26,99.04392897307798\r
2019-06-02,94.99682300633393\r
2019-06-04,94.99682300633393\r
2019-06-05,95.13425546023325\r
2019-06-25,100.0\r
2019-06-27,96.33794788671477\r
2019-06-29,96.33794788671477\r
2019-06-30,97.8589922925343\r
2019-07-02,97.18137285265554\r
2019-07-04,97.75400709161379\r
2019-07-05,97.82030749569431\r
2019-07-07,97.86009767596002\r
2019-07-09,97.86009767596002\r
2019-07-10,97.45260169288458\r
2019-07-15,98.01490811387653\r
2019-07-17,97.30261100614919\r
2019-07-22,97.41288792038435\r
2019-07-24,97.8346753121378\r
2019-07-25,95.67724234187865\r
2019-07-29,96.75978692032659\r
2019-07-30,96.75978692032659\r
2019-08-01,91.92558470704729\r
2019-08-04,90.00496037781977\r
2019-08-08,90.00496037781977\r
2019-08-09,90.13156933843155\r
2019-08-13,89.42722064043105\r
2019-08-14,87.7021870237756\r
2019-08-16,87.7021870237756\r
2019-08-19,86.80990799765269\r
2019-08-24,78.35823464792651\r
2019-08-26,76.98580971559184\r
2019-08-28,76.98580971559184\r
2019-08-29,76.05607025826562\r
2019-08-31,73.77585669185515\r
2019-09-03,72.40749833400774\r
2019-09-07,71.92042634199738\r
2019-09-10,70.24515957684197\r
2019-09-12,68.5092848024374\r
2019-09-15,68.23096795553334\r
2019-09-18,65.16454634022345\r
2019-09-20,63.29077724513695\r
2019-09-22,63.29077724513695\r
2020-01-26,51.25801602044675\r
2020-02-07,61.03692959863631\r
2020-02-10,66.92050046447196\r
2020-02-15,73.59350283756731\r
2020-02-22,73.67107481669476\r
2020-03-26,93.53765576090734\r
2020-03-28,92.7564270447958\r
2020-03-30,92.7564270447958\r
2020-03-31,92.07062606951611\r
2020-04-02,92.54085247840985\r
2020-04-04,92.54085247840985\r
2020-04-05,91.6068644790644\r
2020-04-07,92.02226724650275\r
2020-04-09,92.02226724650275\r
2020-04-10,91.6937376126831\r
2020-04-12,92.11684654451162\r
2020-04-14,92.4428425281977\r
2020-04-15,92.05665454091005\r
2020-04-17,92.19964013711835\r
2020-04-19,92.85135303934705\r
2020-04-20,92.9830289594139\r
2020-04-22,93.59829177904689\r
2020-04-27,94.8474963282436\r
2020-05-07,92.48914896094132\r
2020-05-15,96.18107373460163\r
2020-05-17,92.38255248933608\r
2020-05-19,92.38255248933608\r
2020-05-20,95.50118932697794\r
2020-05-27,96.72680017792314\r
2020-05-29,96.72680017792314\r
2020-05-30,96.14708158190923\r
2020-06-01,95.40830232236549\r
2020-06-03,98.58203165765582\r
2020-06-24,94.32842220478344\r
2020-07-01,94.32842220478344\r
2020-07-04,95.58099610110811\r
2020-07-06,95.48479447754654\r
2020-07-08,95.6914643187608\r
2020-07-09,97.15272673461641\r
2020-07-24,97.03708006355568\r
2020-07-29,92.5214620997482\r
2020-07-31,91.72484955943435\r
2020-08-02,91.72484955943435\r
2020-08-05,90.13263362658445\r
2020-08-07,89.93158600561672\r
2020-08-08,87.84306979945326\r
2020-08-10,87.36302460357656\r
2020-08-12,87.36302460357656\r
2020-08-13,87.32316293813818\r
2020-08-17,85.65550344775002\r
2020-08-20,82.62113141503333\r
2020-08-25,81.05444108234202\r
2020-09-02,79.36802698067446\r
2020-09-04,78.74283430323872\r
2020-09-07,69.16825621093548\r
2020-09-09,69.12115775442946\r
2020-09-11,69.14470513566\r
2020-09-12,66.44342306984184\r
2020-09-14,65.50317435154713\r
2020-09-16,65.50317435154713\r
2020-09-17,63.29801232266203\r
2020-09-21,61.42705162536117\r
2020-09-22,60.02250091831797\r
2020-11-18,39.80051442806633\r
2020-11-20,39.80051442806633\r
2020-11-21,42.20609422927147\r
2020-11-25,42.20609422927147\r
2020-11-26,26.083573976459405\r
2020-11-28,38.71475983105275\r
2021-02-14,82.37386207645581\r
2021-02-21,84.31099125882798\r
2021-02-24,84.49995546727675\r
2021-02-28,85.99472410679098\r
2021-03-01,85.36152741143316\r
2021-03-06,86.62903048356858\r
2021-03-08,89.57892370098284\r
2021-03-28,94.37733541032537\r
2021-03-30,94.37733541032537\r
2021-03-31,93.57230269799336\r
2021-04-02,93.68927973973325\r
2021-04-04,92.47407127531021\r
2021-04-22,96.39831545186424\r
2021-04-24,96.39831545186424\r
2021-04-25,96.22713644691842\r
2021-04-27,96.06048144110845\r
2021-04-30,96.00678549056292\r
2021-05-30,99.00058385694321\r
2021-06-01,100.0\r
2021-06-03,100.0\r
2021-06-04,100.0\r
2021-06-11,100.0\r
2021-06-14,98.49664532050392\r
2021-06-16,100.0\r
2021-06-19,99.58146574996996\r
2021-06-21,99.58146574996996\r
2021-07-19,97.17696550439511\r
2021-07-21,100.0\r
2021-07-23,100.0\r
2021-08-25,87.6790669695243\r
2021-08-27,85.57858844306442\r
2021-09-01,85.57858844306442\r
2021-09-02,85.66486014600022\r
2021-09-04,76.51930262993275\r
2021-09-06,75.99210819221076\r
2021-09-07,73.47237197793132\r
2021-09-12,73.47237197793132\r
2021-09-17,68.71108551981895\r
2021-09-24,55.8860122403682\r
2021-10-01,56.052654681931116\r
2021-10-04,54.80629377085591\r
2021-10-14,45.285455895908115\r
2021-10-16,50.3076853483216\r
2021-10-19,49.926766667998976\r
2021-10-21,47.73201371517699\r
2021-10-24,48.83534649130653\r
2021-10-27,39.70488593060676\r
2021-10-29,37.17790013327995\r
2021-11-06,20.72553509991196\r
2022-02-09,65.51971346796535\r
2022-02-11,64.96395430528942\r
2022-02-13,64.96395430528942\r
2022-02-19,66.30384021676346\r
2022-02-26,81.86405646915185\r
2022-02-28,81.86405646915185\r
2022-03-03,81.94960192842021\r
2022-03-05,81.94960192842021\r
2022-03-06,86.23963731008514\r
2022-03-08,85.99159962917808\r
2022-03-10,88.13884125021623\r
2022-03-21,90.8630306988727\r
2022-03-23,93.3472032502328\r
2022-03-25,93.3472032502328\r
2022-03-26,91.35396888142489\r
2022-03-28,93.04673912893911\r
2022-04-04,94.1556890859814\r
2022-04-17,97.11527229562397\r
2022-04-20,97.11527229562397\r
2022-04-22,97.85567617676213\r
2022-04-27,97.32025144626407\r
2022-06-04,94.98373897388109\r
2022-06-11,95.33729917478848\r
2022-06-13,95.3733438840303\r
2022-06-19,95.54382200273565\r
2022-06-21,95.00772700078524\r
2022-06-23,98.12334247903418\r
2022-06-28,98.12334247903418\r
2022-06-29,94.25018536888598\r
2022-07-01,97.90984588214525\r
2022-07-06,97.21994107699126\r
2022-07-08,97.21994107699126\r
2022-07-11,98.41350957323158\r
2022-07-14,98.41350957323158\r
2022-07-16,95.57224865522662\r
2022-07-18,95.72209957576476\r
2022-07-19,93.40561853075161\r
2022-07-24,91.3743172013523\r
2022-07-31,88.11777476600633\r
2022-08-02,88.11777476600633\r
2022-08-03,83.71646206633608\r
2022-08-07,83.76584639906477\r
2022-08-08,81.14973616970912\r
2022-08-10,81.20146040368343\r
2022-08-12,78.50897425250818\r
2022-08-13,78.7858434292399\r
2022-08-15,77.44369763564666\r
2022-08-20,76.86807146333761\r
2022-08-22,75.61376420758373\r
2022-08-23,75.61376420758373\r
2022-09-22,52.52153126878583\r
2022-10-09,40.56051284547163\r
2022-10-12,37.79533642703443\r
2022-10-19,35.81572896578098\r
2022-10-22,30.039750831646916\r
2022-10-24,38.0503466517824\r
2022-10-26,38.0503466517824\r
2022-11-01,26.261210017329983\r
2023-02-11,65.3865363522939\r
2023-02-13,65.3865363522939\r
2023-02-14,64.85599084495632\r
2023-02-21,66.04536892151407\r
2023-03-01,69.95887772034082\r
2023-03-11,72.23247776798226\r
2023-04-05,92.1490997148083\r
2023-04-09,92.1490997148083\r
`;export{n as default};