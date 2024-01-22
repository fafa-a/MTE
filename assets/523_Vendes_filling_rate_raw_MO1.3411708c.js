const n=`date,value\r
2017-02-15,58.37638840113154\r
2017-02-25,35.9421498426971\r
2017-03-17,40.98883853058436\r
2017-03-27,42.290698659114696\r
2017-04-03,64.43631513862137\r
2017-04-23,62.13646366492338\r
2017-05-16,100.0\r
2017-05-26,40.98883853058436\r
2017-06-25,33.51689444150862\r
2017-07-05,46.9713669416214\r
2017-07-07,34.721246469050946\r
2017-07-17,60.62143272915231\r
2017-08-14,69.13337483992433\r
2017-08-21,63.66607020609947\r
2017-08-26,73.95860117464495\r
2017-08-29,66.76870277068859\r
2017-09-23,58.37638840113154\r
2017-10-05,79.74752386199113\r
2017-10-13,74.77513300837423\r
2017-10-15,76.41868673362583\r
2017-10-18,73.14557720448211\r
2017-11-04,46.290979100408485\r
2017-11-17,50.431166460599556\r
2017-11-22,52.552907341054386\r
2018-02-25,69.92873072246294\r
2018-02-27,22.413964512654342\r
2018-03-14,50.431166460599556\r
2018-04-18,60.62143272915231\r
2018-04-21,59.86940767409757\r
2018-05-11,51.13461490287303\r
2018-05-26,50.431166460599556\r
2018-06-20,62.89944984722189\r
2018-06-22,59.12105619602643\r
2018-06-25,59.12105619602643\r
2018-06-27,71.5300868495474\r
2018-07-07,55.43475993441417\r
2018-07-12,63.66607020609947\r
2018-07-27,75.59516430350463\r
2018-07-30,80.58837964130959\r
2018-08-06,90.0633219370251\r
2018-08-19,88.31007780232963\r
2018-08-26,77.24569204690458\r
2018-09-08,82.28041148181185\r
2018-09-10,80.58837964130959\r
2018-09-18,79.74752386199113\r
2018-09-25,97.2101395806192\r
2018-09-30,90.0633219370251\r
2018-10-05,78.91011868159961\r
2018-10-13,65.21017513730318\r
2018-10-18,65.21017513730318\r
2018-10-20,68.34157889422907\r
2018-10-23,44.273180967788704\r
2018-10-30,42.290698659114696\r
2018-11-09,66.76870277068859\r
2018-11-14,50.431166460599556\r
2018-11-22,58.37638840113154\r
2018-11-24,80.58837964130959\r
2019-02-05,61.377121359264954\r
2019-02-15,41.63778018309766\r
2019-02-17,48.34375090463115\r
2019-02-20,55.43475993441417\r
2019-02-22,46.290979100408485\r
2019-02-25,46.290979100408485\r
2019-02-27,57.63541450177423\r
2019-03-22,72.33606957701068\r
2019-03-24,62.13646366492338\r
2019-03-27,65.21017513730318\r
2019-04-18,62.89944984722189\r
2019-05-01,82.28041148181185\r
2019-05-23,83.13157195459796\r
2019-05-31,57.63541450177423\r
2019-06-02,73.14557720448211\r
2019-06-17,81.43267812381903\r
2019-06-27,66.76870277068859\r
2019-06-30,85.70553943943003\r
2019-07-02,63.66607020609947\r
2019-07-05,82.28041148181185\r
2019-07-10,85.70553943943003\r
2019-07-17,90.0633219370251\r
2019-07-22,94.50511052467593\r
2019-07-25,100.0\r
2019-08-04,95.40347102732231\r
2019-08-14,78.91011868159961\r
2019-08-24,73.14557720448211\r
2019-08-26,91.8300066401347\r
2019-09-03,91.8300066401347\r
2019-09-13,90.94498779563793\r
2019-09-15,88.31007780232963\r
2019-09-20,95.40347102732231\r
2019-10-03,83.98615184751453\r
2019-10-13,75.59516430350463\r
2019-11-04,51.841865659856346\r
2019-11-22,62.89944984722189\r
2019-11-24,56.16458978172139\r
2020-01-16,56.89814481843598\r
2020-01-21,44.94187352156824\r
2020-02-15,53.98631855277816\r
2020-02-20,36.55876924964839\r
2020-02-22,56.16458978172139\r
2020-03-18,42.290698659114696\r
2020-03-23,58.37638840113154\r
2020-03-26,55.43475993441417\r
2020-03-28,63.66607020609947\r
2020-03-31,60.62143272915231\r
2020-04-02,59.86940767409757\r
2020-04-05,46.9713669416214\r
2020-04-10,40.98883853058436\r
2020-04-15,74.77513300837423\r
2020-05-07,27.19473959504527\r
2020-05-17,35.32963710044578\r
2020-05-20,61.377121359264954\r
2020-05-25,38.43311622173161\r
2020-05-27,47.65562828176687\r
2020-05-30,74.77513300837423\r
2020-06-26,52.552907341054386\r
2020-07-04,73.95860117464495\r
2020-07-09,70.72763765886128\r
2020-07-11,59.12105619602643\r
2020-07-19,100.0\r
2020-07-24,87.43851398447406\r
2020-07-29,85.70553943943003\r
2020-07-31,78.91011868159961\r
2020-08-08,68.34157889422907\r
2020-08-10,79.74752386199113\r
2020-08-20,87.43851398447406\r
2020-08-25,71.5300868495474\r
2020-09-04,79.74752386199113\r
2020-09-09,84.84414353095701\r
2020-09-14,76.41868673362583\r
2020-09-17,73.95860117464495\r
2020-11-11,51.841865659856346\r
2020-11-18,69.92873072246294\r
2020-11-21,53.98631855277816\r
2020-11-23,68.34157889422907\r
2020-11-28,65.21017513730318\r
2021-02-14,40.34388736884868\r
2021-02-21,40.98883853058436\r
2021-02-24,67.55335185315485\r
2021-03-01,43.60841228718861\r
2021-03-06,49.73153185431697\r
2021-03-23,53.98631855277816\r
2021-03-28,70.72763765886128\r
2021-03-31,73.95860117464495\r
2021-04-02,78.07617206493258\r
2021-04-22,74.77513300837423\r
2021-05-05,38.43311622173161\r
2021-05-27,31.15836075271799\r
2021-06-01,47.65562828176687\r
2021-06-14,73.14557720448211\r
2021-06-16,66.76870277068859\r
2021-06-26,34.11699361715481\r
2021-07-04,46.290979100408485\r
2021-07-19,60.62143272915231\r
2021-07-21,51.841865659856346\r
2021-08-10,46.290979100408485\r
2021-08-20,53.98631855277816\r
2021-09-07,72.33606957701068\r
2021-09-22,35.9421498426971\r
2021-09-24,66.76870277068859\r
2021-10-14,56.89814481843598\r
2021-10-19,52.552907341054386\r
2021-10-24,59.86940767409757\r
2021-10-27,49.0357227387218\r
2022-01-15,47.65562828176687\r
2022-01-25,52.552907341054386\r
2022-02-09,42.94758046706338\r
2022-02-26,46.9713669416214\r
2022-03-06,42.94758046706338\r
2022-03-08,65.98764078847555\r
2022-03-23,56.16458978172139\r
2022-03-26,49.0357227387218\r
2022-04-17,77.24569204690458\r
2022-05-02,62.89944984722189\r
2022-05-10,42.290698659114696\r
2022-05-17,53.98631855277816\r
2022-05-30,40.34388736884868\r
2022-06-01,45.61447712210233\r
2022-06-11,41.63778018309766\r
2022-06-16,40.98883853058436\r
2022-06-29,62.13646366492338\r
2022-07-11,59.12105619602643\r
2022-07-14,62.13646366492338\r
2022-07-16,81.43267812381903\r
2022-07-19,62.89944984722189\r
2022-07-21,34.721246469050946\r
2022-07-24,70.72763765886128\r
2022-08-03,73.14557720448211\r
2022-08-08,73.14557720448211\r
2022-08-10,71.5300868495474\r
2022-08-13,81.43267812381903\r
2022-08-25,64.43631513862137\r
2022-09-04,88.31007780232963\r
2022-09-12,83.13157195459796\r
2022-09-19,60.62143272915231\r
2022-09-22,76.41868673362583\r
2022-10-04,75.59516430350463\r
2022-10-09,85.70553943943003\r
2022-10-22,83.13157195459796\r
2022-11-11,48.34375090463115\r
2023-01-15,59.12105619602643\r
2023-02-11,56.16458978172139\r
2023-02-14,62.89944984722189\r
2023-03-01,53.26772868420198\r
2023-04-05,56.89814481843598\r
2023-04-20,40.98883853058436\r
2023-06-01,44.94187352156824\r
2023-06-14,76.41868673362583\r
2023-06-19,76.41868673362583\r
2023-06-24,66.76870277068859\r
2023-07-09,80.58837964130959\r
2023-07-14,61.377121359264954\r
2023-07-31,73.14557720448211\r
2023-08-08,100.0\r
2023-08-18,76.41868673362583\r
2023-08-20,99.94490991346126\r
2023-08-23,100.0\r
2023-09-04,92.7183713859726\r
2023-09-07,81.43267812381903\r
2023-09-09,83.13157195459796\r
2023-09-24,53.26772868420198\r
2023-10-02,71.5300868495474\r
2023-10-07,65.98764078847555\r
2023-10-09,67.55335185315485\r
2023-11-08,49.0357227387218\r
`;export{n as default};