const r=`date,value\r
2017-03-17,60.8106504084311\r
2017-03-27,63.638681744945394\r
2017-04-03,56.09215442369202\r
2017-04-06,56.09215442369202\r
2017-05-16,28.26405915137181\r
2017-05-23,28.26405915137181\r
2017-05-26,54.626117724675304\r
2017-06-02,40.38666393635752\r
2017-06-05,40.38666393635752\r
2017-06-25,30.21566460258406\r
2017-07-02,35.02027256786911\r
2017-07-05,37.32659615007899\r
2017-07-07,37.716339461534204\r
2017-07-12,37.716339461534204\r
2017-08-04,80.03810000990373\r
2017-08-06,80.03810000990373\r
2017-08-14,70.79409320927972\r
2017-08-19,60.460551810623805\r
2017-08-21,51.518358994424815\r
2017-08-24,51.9581285290011\r
2017-08-26,55.188250518793616\r
2017-08-29,55.188250518793616\r
2017-09-03,54.28987734179051\r
2018-03-22,100.0\r
2018-03-29,100.0\r
2018-04-01,100.0\r
2018-04-06,83.03818945458204\r
2018-04-16,100.0\r
2018-04-18,100.0\r
2018-04-21,100.0\r
2018-04-23,100.0\r
2018-04-26,79.90860415966662\r
2018-05-06,64.71160955218686\r
2018-05-08,59.06777175646766\r
2018-05-11,73.03373950696574\r
2018-05-13,73.03373950696574\r
2018-05-18,53.73121269900687\r
2018-05-21,53.73121269900687\r
2018-05-26,57.57273702861138\r
2018-06-02,57.57273702861138\r
2018-06-20,41.090129165496855\r
2018-06-22,41.29195693208878\r
2018-06-25,47.73070497116031\r
2018-06-27,47.73070497116031\r
2018-07-02,49.01707149475427\r
2018-07-07,37.521277597091625\r
2018-07-10,42.001276573805946\r
2018-07-12,32.492319509832896\r
2018-07-15,51.62816963486224\r
2018-07-17,49.77337584030725\r
2018-07-25,55.30093650480291\r
2018-08-19,35.782899069017425\r
2018-08-21,35.782899069017425\r
2018-08-26,44.779503825343205\r
2018-09-03,53.50835548094448\r
2018-09-05,53.50835548094448\r
2018-09-08,60.8106504084311\r
2018-09-10,60.8106504084311\r
2018-09-13,60.8106504084311\r
2018-09-18,48.372280970583304\r
2018-09-28,46.98627668661359\r
2018-09-30,46.98627668661359\r
2018-10-05,52.1785398065082\r
2018-10-08,52.1785398065082\r
2019-03-12,76.1876457987593\r
2019-03-22,76.44211897446525\r
2019-03-24,76.44211897446525\r
2019-03-27,40.88867333149876\r
2019-03-29,42.306658995923016\r
2019-04-01,42.306658995923016\r
2019-05-01,53.619740570975885\r
2019-05-06,60.460551810623805\r
2019-05-13,60.460551810623805\r
2019-05-16,57.45833178366703\r
2019-05-23,76.0605288481343\r
2019-05-31,85.14959261879854\r
2019-06-02,53.954417889697325\r
2019-06-25,54.8507112394367\r
2019-06-27,45.82537148290085\r
2019-06-30,54.5139509009254\r
2019-07-02,54.5139509009254\r
2019-07-05,47.62408890876241\r
2019-07-07,42.9199147814716\r
2019-07-10,45.405935529847\r
2019-07-15,45.30130317704013\r
2019-07-17,46.66858407257226\r
2019-07-20,46.35170227317451\r
2019-07-22,52.3993015989737\r
2019-07-25,53.28584659473924\r
2019-08-04,53.06368640092679\r
2019-08-09,54.626117724675304\r
2019-08-14,45.510658588645505\r
2019-08-16,43.63956427447864\r
2019-08-21,51.62816963486224\r
2019-08-24,40.486879279584656\r
2019-08-26,43.227785181906036\r
2019-08-29,43.227785181906036\r
2019-08-31,34.83058211685788\r
2019-09-03,33.23391238261314\r
2019-09-13,32.40006320955337\r
2019-09-15,32.40006320955337\r
2019-09-18,35.59166377366162\r
2019-09-20,34.83058211685788\r
2020-03-21,61.51312426220217\r
2020-03-23,61.51312426220217\r
2020-03-26,61.51312426220217\r
2020-03-28,62.80885210536658\r
2020-03-31,60.460551810623805\r
2020-04-02,60.460551810623805\r
2020-04-05,22.95159422234201\r
2020-04-07,22.870648261157257\r
2020-04-10,20.49271071004646\r
2020-04-12,20.49271071004646\r
2020-04-15,35.115262946478985\r
2020-05-20,63.51988410098669\r
2020-05-22,63.51988410098669\r
2020-05-25,67.60557096409697\r
2020-05-27,51.29900147855903\r
2020-05-30,53.73121269900687\r
2020-06-01,53.73121269900687\r
2020-07-04,74.79375394632353\r
2020-07-09,68.70303648217232\r
2020-07-11,68.70303648217232\r
2020-07-14,75.04646891215116\r
2020-07-19,63.995575007012896\r
2020-07-21,53.06368640092679\r
2020-07-24,77.46319717514315\r
2020-07-29,73.28420499471605\r
2020-07-31,41.29195693208878\r
2020-08-05,66.03210057080987\r
2020-08-08,51.73806813500175\r
2020-08-10,40.38666393635752\r
2020-09-12,45.405935529847\r
2020-09-14,45.93045684809473\r
2020-09-17,51.73806813500175\r
2021-03-01,69.43836475632158\r
2021-03-06,63.28253921028206\r
2021-03-21,76.56947513353947\r
2021-03-23,81.20710481851903\r
2021-03-26,81.20710481851903\r
2021-03-28,78.7466926936062\r
2021-03-31,76.82442642947309\r
2021-04-02,42.20477246942917\r
2021-04-05,45.30130317704013\r
2021-04-07,45.405935529847\r
2021-04-15,67.60557096409697\r
2021-04-17,67.24122689238851\r
2021-04-22,66.99874219121452\r
2021-07-19,49.88177434831908\r
2021-07-21,46.35170227317451\r
2021-07-29,49.4487124764094\r
2021-09-22,33.79422550917416\r
2021-09-24,34.07570067498061\r
2021-09-27,34.07570067498061\r
2021-10-02,66.75658691174843\r
2021-10-07,69.31560576589722\r
2021-10-09,69.31560576589722\r
2021-10-12,43.84600365975796\r
2021-10-14,38.00964447095549\r
2021-10-17,46.66858407257226\r
2021-10-19,52.068290330382425\r
2021-10-22,52.068290330382425\r
2022-03-06,55.86566116455326\r
2022-03-08,53.17472288869918\r
2022-03-26,45.092310797367574\r
2022-04-10,64.83123960603791\r
2022-04-15,67.24122689238851\r
2022-04-17,67.24122689238851\r
2022-04-22,42.20477246942917\r
2022-05-15,67.36259268379268\r
2022-05-17,67.36259268379268\r
2022-05-30,42.001276573805946\r
2022-06-01,42.001276573805946\r
2022-06-04,50.970625316693095\r
2022-06-06,50.970625316693095\r
2022-06-11,51.73806813500175\r
2022-06-14,51.73806813500175\r
2022-06-19,43.43349130492076\r
2022-06-21,43.43349130492076\r
2022-06-29,71.28952494854055\r
2022-07-01,68.09251328715176\r
2022-07-04,68.09251328715176\r
2022-07-06,68.33647674480397\r
2022-07-14,35.782899069017425\r
2022-07-16,33.04792471806409\r
2022-07-19,35.97451928839009\r
2022-07-21,29.946658563512525\r
2022-07-24,33.14086950986416\r
2022-07-26,33.70059557798154\r
2022-07-31,31.757034749765793\r
2022-08-03,35.21035000705722\r
2022-08-08,37.132295612102574\r
2022-08-10,37.132295612102574\r
2022-08-13,28.089076922532314\r
2022-08-28,29.322501610621497\r
2022-08-30,29.322501610621497\r
2022-09-02,29.322501610621497\r
2022-09-04,35.68723327386775\r
2022-09-12,38.00964447095549\r
2022-09-19,36.166523921752585\r
2022-09-22,47.09235416959188\r
2022-10-12,53.50835548094448\r
2022-10-19,52.841875261357565\r
2022-10-22,55.86566116455326\r
2023-03-06,67.24122689238851\r
2023-04-05,63.51988410098669\r
2023-04-07,63.51988410098669\r
2023-05-30,50.20750136229923\r
2023-06-01,52.1785398065082\r
2023-06-06,52.1785398065082\r
2023-06-14,44.36370238043214\r
2023-06-16,44.36370238043214\r
2023-06-24,49.77337584030725\r
2023-06-26,48.2651281197579\r
2023-07-09,53.8427718201746\r
2023-07-11,53.8427718201746\r
2023-07-14,61.86549735634882\r
2023-07-19,46.14089887030907\r
2023-07-26,32.492319509832896\r
2023-08-08,41.89966731557403\r
2023-08-10,41.89966731557403\r
2023-08-15,37.423889290733456\r
2023-08-23,43.02244633804152\r
`;export{r as default};
