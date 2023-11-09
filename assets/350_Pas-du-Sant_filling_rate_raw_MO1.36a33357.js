const n=`date,value\r
2017-01-26,58.98958101655892\r
2017-02-22,66.82805642753004\r
2017-02-25,48.92415457432322\r
2017-03-17,92.89649086078016\r
2017-04-23,72.98894223493058\r
2017-05-16,91.73511509600638\r
2017-05-26,91.73511509600638\r
2017-06-02,42.13127352450717\r
2017-06-25,100.0\r
2017-07-05,98.80002590244136\r
2017-07-07,56.16208027490176\r
2017-07-17,66.82805642753004\r
2017-08-04,94.06432272061203\r
2017-08-14,100.0\r
2017-08-21,62.854782393689504\r
2017-08-24,79.38883066125855\r
2017-08-26,37.333316094945275\r
2017-09-05,33.53215299463742\r
2017-09-20,48.05055415869057\r
2017-09-23,72.98894223493058\r
2017-10-05,50.69219980414936\r
2017-10-08,56.16208027490176\r
2017-10-10,48.92415457432322\r
2017-10-13,58.98958101655892\r
2017-10-15,51.58661613848206\r
2017-10-18,37.333316094945275\r
2017-10-25,37.333316094945275\r
2017-10-28,39.700241109097675\r
2017-11-17,43.78735947725792\r
2017-11-19,51.58661613848206\r
2017-11-22,48.05055415869057\r
2017-12-09,55.233248415248994\r
2018-01-31,64.82795877693795\r
2018-02-25,48.92415457432322\r
2018-02-27,35.03095582529609\r
2018-03-14,40.503484249129684\r
2018-03-19,50.69219980414936\r
2018-04-18,59.94570659541705\r
2018-04-21,88.28981874855313\r
2018-04-26,83.78705505786547\r
2018-05-11,80.47855085074518\r
2018-06-20,75.09579941967611\r
2018-07-02,62.854782393689504\r
2018-07-07,51.58661613848206\r
2018-07-15,78.3056849241042\r
2018-07-25,80.47855085074518\r
2018-07-27,58.04025956340237\r
2018-08-01,45.47161624296408\r
2018-08-04,74.03905697916453\r
2018-08-11,54.31127263850827\r
2018-08-19,70.90863976202235\r
2018-08-21,49.80470789782302\r
2018-09-03,53.396166301128915\r
2018-09-08,71.94546614207522\r
2018-09-20,64.82795877693795\r
2018-09-23,58.98958101655892\r
2018-09-28,60.90862366324446\r
2018-09-30,51.58661613848206\r
2018-10-03,54.31127263850827\r
2018-10-05,50.69219980414936\r
2018-10-23,40.503484249129684\r
2018-10-25,32.06240371051241\r
2018-11-12,31.33847114463589\r
2019-01-16,72.98894223493058\r
2019-02-12,53.396166301128915\r
2019-02-15,52.487942912559305\r
2019-02-17,29.9125866920854\r
2019-02-20,42.13127352450717\r
2019-02-22,55.233248415248994\r
2019-02-25,61.878319718797705\r
2019-02-27,35.79120636361944\r
2019-03-12,70.90863976202235\r
2019-03-22,67.8381711480509\r
2019-03-24,54.31127263850827\r
2019-03-27,62.854782393689504\r
2019-03-29,35.03095582529609\r
2019-04-13,66.82805642753004\r
2019-05-01,70.90863976202235\r
2019-05-06,100.0\r
2019-05-13,69.87847426442053\r
2019-05-23,56.16208027490176\r
2019-06-02,61.878319718797705\r
2019-06-17,43.78735947725792\r
2019-06-27,52.487942912559305\r
2019-06-30,97.60646207426407\r
2019-07-05,57.09775501087771\r
2019-07-12,66.82805642753004\r
2019-07-15,57.09775501087771\r
2019-07-22,41.3138338067314\r
2019-07-25,77.22912408966613\r
2019-08-04,75.09579941967611\r
2019-08-09,78.3056849241042\r
2019-08-14,97.60646207426407\r
2019-08-16,58.98958101655892\r
2019-08-24,81.57483513804968\r
2019-08-29,33.53215299463742\r
2019-08-31,66.82805642753004\r
2019-09-03,45.47161624296408\r
2019-09-15,46.32427022509694\r
2019-10-08,42.13127352450717\r
2019-10-25,17.301820217992294\r
2020-01-06,20.76524894586868\r
2020-01-11,48.92415457432322\r
2020-01-16,66.82805642753004\r
2020-02-20,25.15491418351245\r
2020-02-22,33.53215299463742\r
2020-03-08,54.31127263850827\r
2020-03-13,39.700241109097675\r
2020-03-18,47.18392114996653\r
2020-03-21,57.09775501087771\r
2020-04-05,63.837999449829816\r
2020-04-10,87.15436214680035\r
2020-04-12,62.854782393689504\r
2020-04-15,88.28981874855313\r
2020-05-07,38.11514021463153\r
2020-05-20,96.41931752964555\r
2020-05-22,47.18392114996653\r
2020-05-25,79.38883066125855\r
2020-05-27,47.18392114996653\r
2020-05-30,91.73511509600638\r
2020-06-21,38.11514021463153\r
2020-07-04,65.82464839012293\r
2020-07-09,100.0\r
2020-07-14,86.0254094422869\r
2020-07-19,87.15436214680035\r
2020-07-21,30.621858936883438\r
2020-07-24,89.4317695214975\r
2020-07-31,41.3138338067314\r
2020-08-05,50.69219980414936\r
2020-08-08,100.0\r
2020-08-10,67.8381711480509\r
2020-08-20,48.92415457432322\r
2020-08-25,38.904120863595644\r
2020-09-02,50.69219980414936\r
2020-09-04,35.79120636361944\r
2020-09-07,72.98894223493058\r
2020-09-12,38.904120863595644\r
2020-09-14,47.18392114996653\r
2020-09-17,58.98958101655892\r
2020-11-08,4.0755924796007985\r
2020-11-11,25.812230531888808\r
2020-11-18,32.06240371051241\r
2020-11-21,7.072782572501011\r
2021-02-11,3.787981188588205\r
2021-02-19,43.78735947725792\r
2021-02-24,72.98894223493058\r
2021-03-01,42.95578735933482\r
2021-03-23,43.78735947725792\r
2021-03-28,65.82464839012293\r
2021-04-05,91.73511509600638\r
2021-04-15,100.0\r
2021-04-17,61.878319718797705\r
2021-04-22,80.47855085074518\r
2021-05-27,70.90863976202235\r
2021-06-14,84.90297044652324\r
2021-06-16,48.05055415869057\r
2021-06-26,38.11514021463153\r
2021-07-19,46.32427022509694\r
2021-07-29,78.3056849241042\r
2021-08-10,64.82795877693795\r
2021-08-20,69.87847426442053\r
2021-08-28,47.18392114996653\r
2021-08-30,59.94570659541705\r
2021-09-12,64.82795877693795\r
2021-09-14,46.32427022509694\r
2021-09-22,53.396166301128915\r
2021-09-24,48.05055415869057\r
2021-10-12,46.32427022509694\r
2021-10-14,43.78735947725792\r
2021-10-17,42.13127352450717\r
2021-10-24,30.621858936883438\r
2021-10-27,27.14930047656926\r
2021-12-16,36.55866567390411\r
2021-12-21,50.69219980414936\r
2022-01-12,52.487942912559305\r
2022-01-15,36.55866567390411\r
2022-01-17,39.700241109097675\r
2022-01-22,42.95578735933482\r
2022-01-25,31.33847114463589\r
2022-01-27,35.79120636361944\r
2022-02-09,47.18392114996653\r
2022-02-26,39.700241109097675\r
2022-03-01,57.09775501087771\r
2022-03-03,50.69219980414936\r
2022-03-08,60.90862366324446\r
2022-03-23,45.47161624296408\r
2022-03-26,45.47161624296408\r
2022-04-05,79.38883066125855\r
2022-04-10,78.3056849241042\r
2022-04-17,70.90863976202235\r
2022-05-17,67.8381711480509\r
2022-06-01,69.87847426442053\r
2022-06-06,72.98894223493058\r
2022-06-19,77.22912408966613\r
2022-07-11,65.82464839012293\r
2022-07-14,95.238601357101\r
2022-07-16,65.82464839012293\r
2022-07-19,78.3056849241042\r
2022-07-21,62.854782393689504\r
2022-07-24,82.67767326293132\r
2022-07-31,67.8381711480509\r
2022-08-03,84.90297044652324\r
2022-08-08,54.31127263850827\r
2022-08-10,57.09775501087771\r
2022-08-13,65.82464839012293\r
2022-08-28,54.31127263850827\r
2022-08-30,48.05055415869057\r
2022-09-04,50.69219980414936\r
2022-09-12,51.58661613848206\r
2022-09-19,41.3138338067314\r
2022-09-22,46.32427022509694\r
2022-10-02,38.904120863595644\r
2022-10-04,48.92415457432322\r
2022-10-09,35.03095582529609\r
2022-10-22,42.13127352450717\r
2022-10-27,70.90863976202235\r
2022-11-08,38.11514021463153\r
2022-11-11,26.477033289140937\r
2022-11-13,37.333316094945275\r
2022-11-16,44.62597424855301\r
2022-12-06,67.8381711480509\r
2023-02-04,29.210674324908016\r
2023-02-11,53.396166301128915\r
2023-02-14,59.94570659541705\r
2023-02-16,55.233248415248994\r
2023-02-19,51.58661613848206\r
2023-02-21,64.82795877693795\r
2023-03-01,75.09579941967611\r
2023-03-13,69.87847426442053\r
2023-03-16,56.16208027490176\r
2023-03-28,64.82795877693795\r
2023-04-05,20.16866373751339\r
2023-04-07,67.8381711480509\r
2023-04-20,57.09775501087771\r
2023-06-16,51.58661613848206\r
2023-07-09,82.67767326293132\r
2023-07-14,100.0\r
2023-07-29,96.41931752964555\r
2023-07-31,64.82795877693795\r
2023-08-08,87.15436214680035\r
2023-08-20,66.82805642753004\r
2023-08-23,57.09775501087771\r
2023-09-04,48.92415457432322\r
2023-09-07,78.3056849241042\r
2023-09-24,38.904120863595644\r
2023-09-27,42.13127352450717\r
2023-09-29,52.487942912559305\r
2023-10-02,50.69219980414936\r
2023-10-04,32.06240371051241\r
2023-10-07,41.3138338067314\r
2023-10-12,38.11514021463153\r
2023-10-27,29.9125866920854\r
2023-11-06,35.03095582529609\r
`;export{n as default};
