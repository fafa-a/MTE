const n=`date,value\r
2017-02-18,90.27035183132891\r
2017-02-21,90.27035183132891\r
2017-03-30,82.66536208426645\r
2017-04-02,82.66536208426645\r
2017-04-09,82.97708654676421\r
2017-04-12,89.94835910172031\r
2017-04-19,69.69330412622648\r
2017-04-22,84.54246094808802\r
2017-04-29,85.48707327614844\r
2017-05-02,85.48707327614844\r
2017-06-18,82.66536208426645\r
2017-06-21,97.46537104211367\r
2017-06-28,97.46537104211367\r
2017-07-01,86.75282048423398\r
2017-08-07,94.49634384662636\r
2017-08-20,85.80283968772255\r
2017-08-27,86.11905327978712\r
2017-09-14,70.86394248833757\r
2017-09-16,70.86394248833757\r
2017-09-19,70.86394248833757\r
2017-09-21,96.80253910454553\r
2017-09-26,89.62680869549575\r
2017-10-11,80.80450125382907\r
2017-10-14,82.35408867458843\r
2017-10-16,82.66536208426645\r
2017-10-19,85.17175442683818\r
2017-10-21,85.17175442683818\r
2017-10-26,92.86217365798676\r
2017-11-08,77.43538275559044\r
2017-11-13,74.42061696565005\r
2017-11-15,77.73938485656618\r
2017-11-23,89.62680869549575\r
2017-11-25,91.8869375696033\r
2017-11-28,80.18783754417046\r
2017-12-08,73.82319604325674\r
2017-12-15,81.1135134636229\r
2017-12-18,81.1135134636229\r
2018-01-17,66.22655297511493\r
2018-01-19,72.63391391054567\r
2018-01-27,72.63391391054567\r
2018-02-26,69.11079851703514\r
2018-02-28,77.43538275559044\r
2018-03-05,77.43538275559044\r
2018-03-08,77.43538275559044\r
2018-03-10,71.15777176491939\r
2018-03-20,75.01988651488803\r
2018-04-17,82.66536208426645\r
2018-04-19,88.34503765715334\r
2018-04-22,76.82875275395754\r
2018-04-24,78.34876118329737\r
2018-05-04,78.34876118329737\r
2018-05-07,78.34876118329737\r
2018-05-09,82.04326671175835\r
2018-05-19,82.04326671175835\r
2018-05-22,75.32021345225208\r
2018-06-23,73.52517989494065\r
2018-06-26,82.66536208426645\r
2018-06-28,74.12167521090292\r
2018-07-01,78.34876118329737\r
2018-07-08,75.01988651488803\r
2018-07-11,81.73289659106734\r
2018-07-13,77.73938485656618\r
2018-07-16,91.56273868638617\r
2018-07-18,77.1318385825582\r
2018-07-21,90.9156627990532\r
2018-07-23,90.9156627990532\r
2018-07-26,87.70681566829013\r
2018-07-28,88.66481509068275\r
2018-08-02,94.16863379431686\r
2018-08-05,85.17175442683818\r
2018-09-01,81.1135134636229\r
2018-09-04,81.1135134636229\r
2018-09-09,94.49634384662636\r
2018-09-11,82.35408867458843\r
2018-09-14,100.0\r
2018-09-26,82.35408867458843\r
2018-09-29,86.43571367175805\r
2018-10-01,82.35408867458843\r
2018-10-04,86.75282048423398\r
2018-10-09,89.62680869549575\r
2018-10-19,88.66481509068275\r
2018-10-21,96.14144664170009\r
2018-10-24,85.17175442683818\r
2018-11-15,69.69330412622648\r
2018-11-18,81.1135134636229\r
2018-12-20,13.310671972776197\r
2019-01-09,32.1591966601115\r
2019-01-14,32.1591966601115\r
2019-01-17,44.168255899190825\r
2019-01-22,44.168255899190825\r
2019-01-24,43.67965287298004\r
2019-02-03,63.67131535815056\r
2019-02-13,49.935803605846274\r
2019-02-16,55.43623442603875\r
2019-02-18,55.43623442603875\r
2019-02-23,58.40482473651897\r
2019-02-26,58.40482473651897\r
2019-03-13,71.7468308036424\r
2019-03-23,57.318456468796654\r
2019-03-30,93.18813097342884\r
2019-04-09,93.18813097342884\r
2019-04-12,94.16863379431686\r
2019-04-14,94.16863379431686\r
2019-04-17,87.70681566829013\r
2019-04-19,87.70681566829013\r
2019-04-27,87.70681566829013\r
2019-05-12,76.82875275395754\r
2019-05-14,91.8869375696033\r
2019-05-24,69.4018164788003\r
2019-05-27,69.4018164788003\r
2019-06-01,91.23898030910115\r
2019-06-18,78.95996425834304\r
2019-06-26,82.97708654676421\r
2019-06-28,79.57299079902911\r
2019-07-01,79.57299079902911\r
2019-07-03,83.60188706037857\r
2019-07-06,83.91496232969055\r
2019-07-08,82.35408867458843\r
2019-07-11,82.35408867458843\r
2019-07-13,82.04326671175835\r
2019-07-16,82.04326671175835\r
2019-07-23,84.54246094808802\r
2019-07-28,81.1135134636229\r
2019-07-31,91.23898030910115\r
2019-08-02,85.80283968772255\r
2019-08-07,85.80283968772255\r
2019-08-22,84.54246094808802\r
2019-08-25,79.88018684903419\r
2019-08-27,79.88018684903419\r
2019-09-01,79.88018684903419\r
2019-09-06,81.42297870907626\r
2019-09-11,95.81155357554904\r
2019-09-16,79.57299079902911\r
2019-09-19,79.57299079902911\r
2019-09-21,79.57299079902911\r
2019-09-24,82.04326671175835\r
2019-10-06,80.80450125382907\r
2019-10-09,80.80450125382907\r
2019-10-11,80.80450125382907\r
2019-10-21,86.75282048423398\r
2019-11-13,71.7468308036424\r
2019-11-18,77.43538275559044\r
2019-11-23,77.43538275559044\r
2019-12-03,85.80283968772255\r
2019-12-13,84.85688352276097\r
2019-12-20,59.499014160491924\r
2019-12-23,53.31482063828472\r
2019-12-25,53.31482063828472\r
2019-12-30,54.10662200900601\r
2020-01-22,54.371551643471584\r
2020-02-06,57.318456468796654\r
2020-02-11,49.935803605846274\r
2020-02-13,49.935803605846274\r
2020-02-18,49.935803605846274\r
2020-03-19,56.23994342165033\r
2020-03-24,58.9509439119435\r
2020-03-27,54.90290130210115\r
2020-03-29,54.90290130210115\r
2020-04-01,60.60099121092883\r
2020-04-08,56.77821589234764\r
2020-04-11,65.6553864735223\r
2020-04-13,69.4018164788003\r
2020-04-16,69.4018164788003\r
2020-04-18,68.24056732425964\r
2020-04-23,71.7468308036424\r
2020-04-26,71.7468308036424\r
2020-04-28,67.3745798542844\r
2020-05-18,74.12167521090292\r
2020-05-21,74.12167521090292\r
2020-05-26,72.33775419161181\r
2020-05-28,74.12167521090292\r
2020-05-31,74.12167521090292\r
2020-06-02,78.95996425834304\r
2020-06-22,61.71072287826033\r
2020-06-25,81.73289659106734\r
2020-07-07,70.27768665800862\r
2020-07-12,88.34503765715334\r
2020-07-17,76.22395780296064\r
2020-07-20,77.43538275559044\r
2020-07-22,76.82875275395754\r
2020-07-27,88.34503765715334\r
2020-07-30,85.17175442683818\r
2020-08-04,90.27035183132891\r
2020-08-06,94.49634384662636\r
2020-08-09,96.80253910454553\r
2020-08-11,92.21157659852913\r
2020-08-14,92.21157659852913\r
2020-08-21,93.84136139596873\r
2020-09-08,89.30570097945235\r
2020-09-10,93.18813097342884\r
2020-09-13,85.80283968772255\r
2020-09-15,85.80283968772255\r
2020-11-04,100.0\r
2020-11-12,100.0\r
2020-11-14,85.48707327614844\r
2020-11-19,88.66481509068275\r
2020-11-22,82.97708654676421\r
2020-11-29,83.91496232969055\r
2020-12-04,81.73289659106734\r
2020-12-12,85.48707327614844\r
2020-12-17,77.1318385825582\r
2020-12-29,57.86066084180603\r
2021-02-17,78.65413458295451\r
2021-02-27,83.60188706037857\r
2021-03-02,82.04326671175835\r
2021-03-07,82.04326671175835\r
2021-03-09,82.04326671175835\r
2021-03-22,100.0\r
2021-03-24,100.0\r
2021-03-29,99.79894169443928\r
2021-04-01,89.62680869549575\r
2021-04-03,87.70681566829013\r
2021-04-08,80.18783754417046\r
2021-04-13,77.1318385825582\r
2021-04-18,85.17175442683818\r
2021-04-21,77.43538275559044\r
2021-04-23,85.17175442683818\r
2021-04-26,90.59278651863421\r
2021-04-28,78.65413458295451\r
2021-05-01,78.65413458295451\r
2021-05-03,78.65413458295451\r
2021-05-08,65.94073208426823\r
2021-05-23,71.7468308036424\r
2021-05-28,80.80450125382907\r
2021-05-31,74.12167521090292\r
2021-06-05,76.82875275395754\r
2021-06-10,77.43538275559044\r
2021-06-12,84.54246094808802\r
2021-06-15,78.95996425834304\r
2021-07-17,73.52517989494065\r
2021-07-20,77.1318385825582\r
2021-07-22,75.62100126244637\r
2021-08-11,81.73289659106734\r
2021-08-14,97.13373781093992\r
2021-08-26,84.54246094808802\r
2021-09-03,84.54246094808802\r
2021-09-05,84.54246094808802\r
2021-09-13,69.11079851703514\r
2021-09-23,83.28926166930938\r
2021-09-30,87.38837185897245\r
2021-10-03,87.38837185897245\r
2021-10-08,69.9852610038973\r
2021-10-23,67.3745798542844\r
2021-10-28,79.57299079902911\r
2021-11-09,78.95996425834304\r
2021-11-17,78.95996425834304\r
2021-11-19,79.57299079902911\r
2021-11-22,75.01988651488803\r
2021-11-24,75.01988651488803\r
2021-12-17,72.63391391054567\r
2022-01-06,60.04903130752898\r
2022-01-11,60.04903130752898\r
2022-01-13,60.04903130752898\r
2022-01-21,58.13249811479982\r
2022-02-05,67.3745798542844\r
2022-02-07,67.3745798542844\r
2022-02-12,72.63391391054567\r
2022-02-17,72.33775419161181\r
2022-03-07,70.27768665800862\r
2022-03-09,70.27768665800862\r
2022-03-12,84.54246094808802\r
2022-03-14,84.85688352276097\r
2022-03-22,84.85688352276097\r
2022-03-24,68.82025069796933\r
2022-03-27,68.82025069796933\r
2022-04-01,68.82025069796933\r
2022-04-03,71.45206801865076\r
2022-04-11,72.04205967555937\r
2022-04-13,65.6553864735223\r
2022-04-16,72.04205967555937\r
2022-04-21,67.08686258132629\r
2022-04-26,70.5705806363585\r
2022-05-01,67.08686258132629\r
2022-05-11,71.15777176491939\r
2022-05-13,71.15777176491939\r
2022-05-16,70.86394248833757\r
2022-05-21,73.52517989494065\r
2022-05-28,73.52517989494065\r
2022-05-31,72.63391391054567\r
2022-06-02,77.1318385825582\r
2022-06-12,85.17175442683818\r
2022-06-15,77.43538275559044\r
2022-06-17,92.86217365798676\r
2022-06-27,90.9156627990532\r
2022-07-02,82.66536208426645\r
2022-07-05,89.30570097945235\r
2022-07-10,87.38837185897245\r
2022-07-12,89.94835910172031\r
2022-07-15,90.59278651863421\r
2022-07-17,92.86217365798676\r
2022-07-20,92.86217365798676\r
2022-07-30,87.70681566829013\r
2022-08-06,88.98503632150316\r
2022-08-09,86.11905327978712\r
2022-08-11,89.94835910172031\r
2022-08-24,90.27035183132891\r
2022-08-29,94.49634384662636\r
2022-09-05,89.94835910172031\r
2022-09-08,89.94835910172031\r
2022-09-18,82.04326671175835\r
2022-09-20,82.04326671175835\r
2022-09-25,82.04326671175835\r
2022-09-30,84.22848708819946\r
2022-10-08,84.22848708819946\r
2022-11-02,78.95996425834304\r
2022-11-04,78.95996425834304\r
2022-11-12,79.88018684903419\r
2022-11-19,84.22848708819946\r
2022-11-22,80.4959424801078\r
2022-11-29,86.43571367175805\r
2022-12-09,73.52517989494065\r
2022-12-27,95.81155357554904\r
2022-12-29,95.81155357554904\r
2023-01-11,78.04384447037921\r
2023-01-13,78.04384447037921\r
2023-01-16,78.04384447037921\r
2023-01-18,78.04384447037921\r
2023-01-21,78.04384447037921\r
2023-02-10,100.0\r
2023-02-12,100.0\r
2023-02-15,70.86394248833757\r
2023-02-20,76.52612568766642\r
2023-02-27,80.4959424801078\r
2023-03-02,77.73938485656618\r
2023-03-04,76.52612568766642\r
2023-03-07,76.52612568766642\r
2023-03-14,63.67131535815056\r
2023-05-26,72.04205967555937\r
2023-05-28,73.22762719966568\r
2023-05-31,77.1318385825582\r
2023-06-02,78.04384447037921\r
2023-06-05,76.82875275395754\r
2023-06-07,77.1318385825582\r
2023-06-12,79.26624979980589\r
2023-06-15,82.66536208426645\r
2023-06-22,88.98503632150316\r
2023-06-25,95.15307550708448\r
2023-06-27,86.43571367175805\r
2023-07-07,82.66536208426645\r
2023-07-10,89.94835910172031\r
2023-07-15,89.94835910172031\r
2023-07-17,89.94835910172031\r
2023-08-09,75.62100126244637\r
2023-08-14,75.62100126244637\r
2023-08-16,75.62100126244637\r
2023-08-19,80.18783754417046\r
2023-08-21,86.43571367175805\r
2023-09-03,94.16863379431686\r
2023-09-05,94.16863379431686\r
2023-09-08,75.92224952052197\r
2023-09-10,85.48707327614844\r
`;export{n as default};
