const n=`date,value\r
2017-01-03,38.55275140189292\r
2017-01-13,38.55275140189292\r
2017-02-22,36.69486815606327\r
2017-02-25,41.38652113954085\r
2017-03-07,34.862671265605016\r
2017-03-14,81.5635945809024\r
2017-03-17,100.0\r
2017-03-27,81.5635945809024\r
2017-04-03,69.18257981593557\r
2017-04-06,69.18257981593557\r
2017-04-23,61.60596720272641\r
2017-05-03,61.60596720272641\r
2017-05-13,58.43452399183667\r
2017-05-16,90.91206051231536\r
2017-05-23,90.91206051231536\r
2017-05-26,100.0\r
2017-06-02,100.0\r
2017-06-05,100.0\r
2017-06-12,45.24980593911182\r
2017-06-22,43.30623603963287\r
2017-06-25,89.72824230341332\r
2017-07-02,92.10016152071489\r
2017-07-05,88.54873202409928\r
2017-07-07,80.41497750980685\r
2017-07-10,80.41497750980685\r
2017-07-12,80.41497750980685\r
2017-07-17,66.993109495698\r
2017-07-22,62.67335861151076\r
2017-07-27,66.993109495698\r
2017-08-04,78.13134406727896\r
2017-08-06,78.13134406727896\r
2017-08-11,68.08540826592122\r
2017-08-14,87.37355519453995\r
2017-08-19,87.37355519453995\r
2017-08-21,92.10016152071489\r
2017-08-24,86.20273773487264\r
2017-08-26,87.37355519453995\r
2017-08-29,68.08540826592122\r
2017-09-03,93.29252057903891\r
2017-09-05,44.2750686110497\r
2017-09-08,44.2750686110497\r
2017-09-10,35.775522611173635\r
2017-09-13,61.60596720272641\r
2017-09-20,50.21011344007002\r
2017-09-23,48.20888233032045\r
2017-09-28,64.82327219216751\r
2017-10-03,62.67335861151076\r
2017-10-05,37.62063475984355\r
2017-10-08,43.30623603963287\r
2017-10-10,40.43576073737105\r
2017-10-13,41.38652113954085\r
2017-10-15,41.38652113954085\r
2017-10-18,40.43576073737105\r
2017-10-25,37.62063475984355\r
2017-10-28,24.4450414821567\r
2017-10-30,36.69486815606327\r
2017-11-07,26.109178397048588\r
2017-11-14,24.4450414821567\r
2017-11-17,33.956389483924845\r
2017-11-19,46.230390903434206\r
2017-11-22,46.230390903434206\r
2017-11-24,46.230390903434206\r
2017-11-27,46.230390903434206\r
2017-11-29,35.775522611173635\r
2017-12-09,33.056754966398806\r
2017-12-14,38.55275140189292\r
2017-12-19,38.55275140189292\r
2017-12-24,48.20888233032045\r
2017-12-27,48.20888233032045\r
2018-01-01,49.20668145607568\r
2018-01-03,49.20668145607568\r
2018-02-12,57.38775507204252\r
2018-02-25,53.25370705146473\r
2018-02-27,53.25370705146473\r
2018-03-02,64.82327219216751\r
2018-03-14,48.20888233032045\r
2018-03-19,69.18257981593557\r
2018-03-22,69.18257981593557\r
2018-04-01,58.43452399183667\r
2018-04-18,70.28458949866958\r
2018-04-21,85.03630597544921\r
2018-04-23,85.03630597544921\r
2018-04-26,76.99638624607319\r
2018-05-06,79.27088432909378\r
2018-05-11,81.5635945809024\r
2018-05-18,81.5635945809024\r
2018-05-21,81.5635945809024\r
2018-06-20,78.13134406727896\r
2018-06-22,78.13134406727896\r
2018-06-25,88.54873202409928\r
2018-06-27,88.54873202409928\r
2018-07-02,80.41497750980685\r
2018-07-07,76.99638624607319\r
2018-07-10,61.60596720272641\r
2018-07-12,68.08540826592122\r
2018-07-15,73.61931033269947\r
2018-07-17,73.61931033269947\r
2018-07-20,58.43452399183667\r
2018-07-22,76.99638624607319\r
2018-07-25,80.41497750980685\r
2018-07-27,93.29252057903891\r
2018-07-30,79.27088432909378\r
2018-08-01,83.87428666744682\r
2018-08-04,76.99638624607319\r
2018-08-06,83.87428666744682\r
2018-08-11,58.43452399183667\r
2018-08-16,59.48650976837089\r
2018-08-19,73.61931033269947\r
2018-08-21,59.48650976837089\r
2018-08-26,74.74033856106908\r
2018-08-31,53.25370705146473\r
2018-09-03,46.230390903434206\r
2018-09-08,46.230390903434206\r
2018-09-10,46.230390903434206\r
2018-09-13,46.230390903434206\r
2018-09-20,52.23367503335474\r
2018-09-23,56.346245272042\r
2018-09-25,48.20888233032045\r
2018-09-28,54.279176661076846\r
2018-09-30,48.20888233032045\r
2018-10-03,46.230390903434206\r
2018-10-05,48.20888233032045\r
2018-10-23,23.624462700384523\r
2018-10-25,38.55275140189292\r
2018-10-30,38.55275140189292\r
2018-11-04,33.056754966398806\r
2018-11-12,30.398549606348734\r
2018-11-27,40.43576073737105\r
2018-11-29,40.43576073737105\r
2018-12-19,16.606939302579075\r
2018-12-27,34.862671265605016\r
2018-12-29,34.862671265605016\r
2019-01-03,38.55275140189292\r
2019-01-11,38.55275140189292\r
2019-01-16,38.55275140189292\r
2019-02-12,28.661190152890676\r
2019-02-15,28.661190152890676\r
2019-02-17,28.661190152890676\r
2019-02-20,33.956389483924845\r
2019-02-22,26.952513505050096\r
2019-02-25,34.862671265605016\r
2019-02-27,29.526332229295072\r
2019-03-12,51.219127752267276\r
2019-03-22,56.346245272042\r
2019-03-24,47.21676780917264\r
2019-03-27,50.21011344007002\r
2019-03-29,48.20888233032045\r
2019-04-01,48.20888233032045\r
2019-04-08,59.48650976837089\r
2019-04-13,58.43452399183667\r
2019-05-01,49.20668145607568\r
2019-05-06,76.99638624607319\r
2019-05-11,76.99638624607319\r
2019-05-13,57.38775507204252\r
2019-05-16,57.38775507204252\r
2019-05-23,64.82327219216751\r
2019-05-31,63.745806324497714\r
2019-06-02,79.27088432909378\r
2019-06-12,80.41497750980685\r
2019-06-27,41.38652113954085\r
2019-06-30,100.0\r
2019-07-02,100.0\r
2019-07-05,94.48911330899358\r
2019-07-07,94.48911330899358\r
2019-07-10,94.48911330899358\r
2019-07-12,100.0\r
2019-07-15,100.0\r
2019-07-17,66.993109495698\r
2019-07-22,80.41497750980685\r
2019-07-25,60.5436710170834\r
2019-08-01,94.48911330899358\r
2019-08-04,59.48650976837089\r
2019-08-09,71.39140330520623\r
2019-08-11,59.48650976837089\r
2019-08-14,68.08540826592122\r
2019-08-16,61.60596720272641\r
2019-08-21,68.08540826592122\r
2019-08-24,68.08540826592122\r
2019-08-26,51.219127752267276\r
2019-08-29,51.219127752267276\r
2019-08-31,31.277750928655795\r
2019-09-03,11.65714027275579\r
2019-09-05,11.65714027275579\r
2019-10-05,10.335665178120715\r
2019-11-19,4.99343988301091\r
2019-11-27,6.654187594998345\r
2019-12-02,6.654187594998345\r
2020-01-01,4.99343988301091\r
2020-01-06,7.831197272455927\r
2020-01-11,4.99343988301091\r
2020-01-16,4.99343988301091\r
2020-01-18,8.439127637785495\r
2020-03-11,17.352253379780976\r
2020-03-13,17.352253379780976\r
2020-10-24,10.335665178120715\r
2020-11-01,10.335665178120715\r
2020-11-06,10.335665178120715\r
2020-11-08,10.335665178120715\r
2020-11-11,3.47408355410254\r
2020-11-18,9.059434714258655\r
2020-11-21,6.086074179797356\r
2020-11-23,6.086074179797356\r
2020-11-26,6.086074179797356\r
2021-02-11,13.021489528163915\r
2021-02-14,13.021489528163915\r
2021-02-19,13.021489528163915\r
2021-03-23,47.21676780917264\r
2021-03-26,42.34336683078953\r
2021-03-28,63.745806324497714\r
2021-03-31,63.745806324497714\r
2021-04-02,63.745806324497714\r
2021-04-05,88.54873202409928\r
2021-04-07,88.54873202409928\r
2021-04-15,89.72824230341332\r
2021-04-17,89.72824230341332\r
2021-04-20,49.20668145607568\r
2021-04-22,49.20668145607568\r
2021-05-20,72.50298784597467\r
2021-05-25,68.08540826592122\r
2021-05-27,64.82327219216751\r
2021-05-30,64.82327219216751\r
2021-06-09,82.71670699386142\r
2021-06-11,98.10405512938704\r
2021-06-14,98.10405512938704\r
2021-06-16,82.71670699386142\r
2021-06-19,82.71670699386142\r
2021-06-21,100.0\r
2021-06-26,56.346245272042\r
2021-07-01,79.27088432909378\r
2021-07-09,90.91206051231536\r
2021-07-19,89.72824230341332\r
2021-07-21,78.13134406727896\r
2021-07-26,78.13134406727896\r
2021-07-29,64.82327219216751\r
2021-08-05,69.18257981593557\r
2021-08-10,65.90571881009882\r
2021-08-13,65.90571881009882\r
2021-08-18,78.13134406727896\r
2021-08-20,66.993109495698\r
2021-08-23,73.61931033269947\r
2021-08-25,73.61931033269947\r
2021-08-28,58.43452399183667\r
2021-08-30,59.48650976837089\r
2021-09-04,54.279176661076846\r
2021-09-07,69.18257981593557\r
2021-09-12,72.50298784597467\r
2021-09-14,72.50298784597467\r
2021-09-17,72.50298784597467\r
2021-09-22,74.74033856106908\r
2021-09-24,51.219127752267276\r
2021-09-29,51.219127752267276\r
2021-10-12,41.38652113954085\r
2021-10-14,54.279176661076846\r
2021-10-17,54.279176661076846\r
2021-10-24,36.69486815606327\r
2021-10-27,34.862671265605016\r
2021-12-16,31.277750928655795\r
2021-12-18,41.38652113954085\r
2021-12-21,28.661190152890676\r
2021-12-23,28.661190152890676\r
2022-01-12,32.16384786843773\r
2022-01-15,35.775522611173635\r
2022-01-17,23.624462700384523\r
2022-01-22,29.526332229295072\r
2022-01-25,27.803217931750257\r
2022-01-27,28.661190152890676\r
2022-01-30,26.952513505050096\r
2022-02-01,26.952513505050096\r
2022-02-06,24.4450414821567\r
2022-02-09,32.16384786843773\r
2022-02-26,22.811699824051193\r
2022-03-01,22.811699824051193\r
2022-03-03,36.69486815606327\r
2022-03-08,31.277750928655795\r
2022-03-26,35.775522611173635\r
2022-04-05,63.745806324497714\r
2022-04-10,62.67335861151076\r
2022-04-15,62.67335861151076\r
2022-04-17,63.745806324497714\r
2022-04-27,63.745806324497714\r
2022-05-17,49.20668145607568\r
2022-05-20,49.20668145607568\r
2022-05-22,64.82327219216751\r
2022-05-27,64.82327219216751\r
2022-05-30,59.48650976837089\r
2022-06-01,76.99638624607319\r
2022-06-04,69.18257981593557\r
2022-06-06,83.87428666744682\r
2022-06-11,83.87428666744682\r
2022-06-14,88.54873202409928\r
2022-06-16,88.54873202409928\r
2022-06-19,55.31003776396217\r
2022-07-11,81.5635945809024\r
2022-07-14,96.89490407372372\r
2022-07-16,83.87428666744682\r
2022-07-19,90.91206051231536\r
2022-07-21,83.87428666744682\r
2022-07-24,80.41497750980685\r
2022-07-26,79.27088432909378\r
2022-07-29,81.5635945809024\r
2022-07-31,79.27088432909378\r
2022-08-03,82.71670699386142\r
2022-08-05,73.61931033269947\r
2022-08-08,68.08540826592122\r
2022-08-10,70.28458949866958\r
2022-08-13,65.90571881009882\r
2022-08-15,69.18257981593557\r
2022-08-20,66.993109495698\r
2022-08-23,52.23367503335474\r
2022-08-28,52.23367503335474\r
2022-08-30,59.48650976837089\r
2022-09-02,57.38775507204252\r
2022-09-04,69.18257981593557\r
2022-09-12,68.08540826592122\r
2022-09-19,68.08540826592122\r
2022-09-22,52.23367503335474\r
2022-10-02,57.38775507204252\r
2022-10-04,62.67335861151076\r
2022-10-07,62.67335861151076\r
2022-10-09,45.24980593911182\r
2022-10-12,45.24980593911182\r
2022-10-22,40.43576073737105\r
2022-10-24,40.43576073737105\r
2022-10-27,40.43576073737105\r
2022-11-01,43.30623603963287\r
2022-11-06,41.38652113954085\r
2022-11-08,39.49114908371537\r
2022-11-11,39.49114908371537\r
2022-11-13,53.25370705146473\r
2022-11-16,38.55275140189292\r
2023-01-10,44.2750686110497\r
2023-01-12,44.2750686110497\r
2023-01-20,44.2750686110497\r
2023-02-04,29.526332229295072\r
2023-02-06,36.69486815606327\r
2023-02-09,36.69486815606327\r
2023-02-11,28.661190152890676\r
2023-02-14,28.661190152890676\r
2023-02-16,33.056754966398806\r
2023-02-19,32.16384786843773\r
2023-02-21,32.16384786843773\r
2023-02-26,38.55275140189292\r
2023-03-01,46.230390903434206\r
2023-03-03,66.993109495698\r
2023-03-13,52.23367503335474\r
2023-03-16,56.346245272042\r
2023-03-28,57.38775507204252\r
2023-04-05,79.27088432909378\r
2023-04-07,58.43452399183667\r
2023-04-15,74.74033856106908\r
2023-04-17,86.20273773487264\r
2023-04-20,75.86604089408725\r
2023-05-02,69.18257981593557\r
2023-05-27,44.2750686110497\r
2023-05-30,44.2750686110497\r
2023-06-04,74.74033856106908\r
2023-06-11,58.43452399183667\r
2023-06-16,61.60596720272641\r
2023-06-24,61.60596720272641\r
2023-06-26,61.60596720272641\r
2023-07-09,76.99638624607319\r
2023-07-11,76.99638624607319\r
2023-07-14,76.99638624607319\r
2023-07-16,83.87428666744682\r
2023-07-19,83.87428666744682\r
2023-07-21,80.41497750980685\r
2023-07-26,89.72824230341332\r
2023-07-29,94.48911330899358\r
2023-07-31,96.89490407372372\r
2023-08-03,96.89490407372372\r
2023-08-05,68.08540826592122\r
2023-08-08,87.37355519453995\r
2023-08-10,80.41497750980685\r
2023-08-13,75.86604089408725\r
2023-08-15,75.86604089408725\r
2023-08-18,73.61931033269947\r
2023-08-20,73.61931033269947\r
2023-08-23,63.745806324497714\r
2023-09-04,49.20668145607568\r
2023-09-07,72.50298784597467\r
2023-09-14,58.43452399183667\r
2023-09-19,56.346245272042\r
2023-09-24,48.20888233032045\r
2023-09-27,60.5436710170834\r
2023-09-29,50.21011344007002\r
2023-10-02,55.31003776396217\r
2023-10-04,51.219127752267276\r
2023-10-07,45.24980593911182\r
2023-10-12,43.30623603963287\r
2023-10-27,35.775522611173635\r
2023-11-06,35.775522611173635\r
`;export{n as default};
