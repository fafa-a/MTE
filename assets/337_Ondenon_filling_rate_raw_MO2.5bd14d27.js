const n=`date,value\r
2017-02-22,56.87381668733559\r
2017-03-04,56.87381668733559\r
2017-03-14,49.49419948697067\r
2017-06-12,47.26308174427953\r
2017-06-19,47.26308174427953\r
2017-06-22,47.26308174427953\r
2017-07-07,54.06415021079162\r
2017-07-09,54.06415021079162\r
2017-07-12,68.60397662866727\r
2017-07-14,68.60397662866727\r
2017-07-17,68.60397662866727\r
2017-07-22,62.15382319521676\r
2017-08-21,54.99512144662057\r
2017-08-23,54.99512144662057\r
2017-08-26,70.12415198655462\r
2017-09-05,52.219101457300546\r
2017-10-05,51.76137981056693\r
2017-10-07,51.76137981056693\r
2017-10-10,51.76137981056693\r
2017-10-12,51.76137981056693\r
2017-10-15,53.60077094729363\r
2017-10-17,48.15117024905026\r
2017-10-22,48.15117024905026\r
2017-10-25,48.15117024905026\r
2018-03-14,42.91102894463402\r
2018-03-16,42.91102894463402\r
2018-03-19,42.91102894463402\r
2018-03-21,42.91102894463402\r
2018-03-24,42.91102894463402\r
2018-04-18,66.59543303301704\r
2018-04-20,66.59543303301704\r
2018-04-25,66.59543303301704\r
2018-06-22,52.67824296049598\r
2018-06-24,52.67824296049598\r
2018-06-27,52.67824296049598\r
2018-06-29,52.67824296049598\r
2018-07-02,52.219101457300546\r
2018-07-17,47.26308174427953\r
2018-07-19,47.26308174427953\r
2018-07-22,47.26308174427953\r
2018-07-24,47.26308174427953\r
2018-07-27,75.79780843174177\r
2018-07-29,75.79780843174177\r
2018-08-01,75.79780843174177\r
2018-08-03,75.79780843174177\r
2018-08-06,75.79780843174177\r
2018-08-11,60.21471340544491\r
2018-08-16,65.59908018846032\r
2018-08-18,65.59908018846032\r
2018-08-21,55.46270637230296\r
2018-08-23,61.667014572105494\r
2018-08-26,53.60077094729363\r
2018-08-28,64.60803789165985\r
2018-08-31,64.60803789165985\r
2018-09-02,55.46270637230296\r
2018-09-05,55.93168618555312\r
2018-09-07,3.3929928852158104\r
2018-09-10,56.87381668733559\r
2018-09-12,56.87381668733559\r
2018-09-17,49.94476595358178\r
2018-09-20,59.25331500571745\r
2018-09-22,56.4020574327155\r
2018-09-25,65.1028937386979\r
2018-09-27,65.1028937386979\r
2018-10-02,60.21471340544491\r
2018-10-05,60.697456515841864\r
2018-10-10,53.60077094729363\r
2018-10-12,53.60077094729363\r
2018-10-15,53.60077094729363\r
2018-10-20,47.706396923816584\r
2018-10-22,47.706396923816584\r
2018-10-25,47.706396923816584\r
2018-10-30,47.706396923816584\r
2019-02-22,36.26262921617807\r
2019-02-24,36.26262921617807\r
2019-02-27,30.77673110769153\r
2019-03-04,35.06049381639371\r
2019-03-16,2.883253049970752\r
2019-03-19,2.883253049970752\r
2019-03-24,53.13880066542895\r
2019-03-26,53.13880066542895\r
2019-03-29,53.13880066542895\r
2019-03-31,53.13880066542895\r
2019-04-05,53.13880066542895\r
2019-04-13,58.297388631908674\r
2019-04-15,58.297388631908674\r
2019-04-18,58.297388631908674\r
2019-04-20,58.297388631908674\r
2019-04-23,58.297388631908674\r
2019-05-23,71.65604377402475\r
2019-05-25,71.65604377402475\r
2019-05-30,71.65604377402475\r
2019-06-02,74.75468088531974\r
2019-06-04,74.75468088531974\r
2019-06-07,68.09986822463597\r
2019-06-12,74.75468088531974\r
2019-06-27,70.63348445763694\r
2019-06-29,70.63348445763694\r
2019-07-02,70.63348445763694\r
2019-07-04,70.63348445763694\r
2019-07-07,74.23503210881395\r
2019-07-09,74.23503210881395\r
2019-07-12,63.62232999712445\r
2019-07-14,70.12415198655462\r
2019-07-17,49.045075457514265\r
2019-07-19,49.045075457514265\r
2019-07-22,49.94476595358178\r
2019-07-24,9.396309361874497\r
2019-07-29,13.12350224516759\r
2019-08-01,13.12350224516759\r
2019-08-11,67.59707290868117\r
2019-08-13,67.59707290868117\r
2019-08-16,67.59707290868117\r
2019-08-18,67.59707290868117\r
2019-08-21,67.59707290868117\r
2019-08-23,67.59707290868117\r
2019-08-26,68.60397662866727\r
2019-08-28,48.15117024905026\r
2019-08-31,50.39677101401436\r
2019-09-02,50.39677101401436\r
2019-09-07,50.39677101401436\r
2019-09-20,1.0451129449811098\r
2019-09-22,1.0451129449811098\r
2019-09-27,1.0451129449811098\r
2019-09-30,1.0451129449811098\r
2019-10-30,17.269483789774032\r
2020-02-22,55.46270637230296\r
2020-02-24,55.46270637230296\r
2020-03-08,48.597397741579776\r
2020-03-18,1.9554330364781387\r
2020-03-20,1.9554330364781387\r
2020-03-23,1.9554330364781387\r
2020-03-25,1.9554330364781387\r
2020-03-28,73.71666349289994\r
2020-04-02,68.09986822463597\r
2020-04-04,74.23503210881395\r
2020-04-07,71.65604377402475\r
2020-04-09,71.65604377402475\r
2020-04-12,76.32128200017762\r
2020-04-14,73.71666349289994\r
2020-04-17,73.71666349289994\r
2020-04-22,80.0210080250911\r
2020-04-24,76.8460253258709\r
2020-04-27,95.4254389227453\r
2020-05-17,46.82122872386238\r
2020-05-19,46.82122872386238\r
2020-05-22,76.8460253258709\r
2020-05-24,76.8460253258709\r
2020-05-27,66.59543303301704\r
2020-05-29,66.59543303301704\r
2020-06-01,66.59543303301704\r
2020-06-21,56.87381668733559\r
2020-06-23,56.87381668733559\r
2020-06-26,56.87381668733559\r
2020-06-28,56.87381668733559\r
2020-07-01,56.87381668733559\r
2020-07-31,100.0\r
2020-08-05,79.48869932363074\r
2020-08-07,79.48869932363074\r
2020-08-10,79.48869932363074\r
2020-08-15,68.60397662866727\r
2020-08-20,62.15382319521676\r
2020-08-25,54.06415021079162\r
2020-08-27,54.06415021079162\r
2020-09-01,54.528934889728895\r
2020-09-04,39.953853307036034\r
2020-09-09,48.15117024905026\r
2020-09-14,67.59707290868117\r
2020-09-16,67.59707290868117\r
2020-09-19,67.59707290868117\r
2021-02-21,56.87381668733559\r
2021-02-23,56.87381668733559\r
2021-02-26,67.09559354877406\r
2021-02-28,67.09559354877406\r
2021-03-05,59.25331500571745\r
2021-03-23,68.09986822463597\r
2021-03-25,68.09986822463597\r
2021-03-28,71.65604377402475\r
2021-03-30,71.65604377402475\r
2021-04-02,68.60397662866727\r
2021-04-04,84.32435256088426\r
2021-04-07,84.32435256088426\r
2021-04-09,76.32128200017762\r
2021-04-22,68.60397662866727\r
2021-04-24,68.60397662866727\r
2021-04-27,68.60397662866727\r
2021-05-12,64.1145156397803\r
2021-05-17,64.1145156397803\r
2021-05-22,64.1145156397803\r
2021-05-27,56.4020574327155\r
2021-05-29,56.4020574327155\r
2021-06-01,57.346960549800386\r
2021-06-03,57.346960549800386\r
2021-06-11,44.63403899685453\r
2021-06-16,61.667014572105494\r
2021-06-18,61.667014572105494\r
2021-06-21,61.667014572105494\r
2021-06-26,61.667014572105494\r
2021-07-11,36.26262921617807\r
2021-07-18,36.26262921617807\r
2021-07-21,48.15117024905026\r
2021-07-23,40.37173521134612\r
2021-08-15,45.50448328796989\r
2021-08-17,45.50448328796989\r
2021-08-20,53.13880066542895\r
2021-08-25,53.13880066542895\r
2021-08-27,50.85021085749693\r
2021-09-24,40.37173521134612\r
2021-09-26,40.37173521134612\r
2021-09-29,40.37173521134612\r
2021-10-01,40.37173521134612\r
2021-10-14,43.76954276560846\r
2021-10-16,43.76954276560846\r
2021-10-21,43.76954276560846\r
2021-10-24,45.94192539234489\r
2022-02-26,25.973668504443616\r
2022-02-28,25.973668504443616\r
2022-03-03,25.973668504443616\r
2022-03-05,25.973668504443616\r
2022-03-08,47.26308174427953\r
2022-03-10,44.63403899685453\r
2022-03-23,26.332861450680117\r
2022-03-25,26.332861450680117\r
2022-03-28,26.332861450680117\r
2022-04-17,54.99512144662057\r
2022-04-19,54.99512144662057\r
2022-04-27,59.73333182832001\r
2022-05-02,57.82148564698548\r
2022-05-04,57.82148564698548\r
2022-05-07,57.82148564698548\r
2022-05-17,39.953853307036034\r
2022-05-19,39.953853307036034\r
2022-05-27,39.953853307036034\r
2022-06-11,48.15117024905026\r
2022-06-13,48.15117024905026\r
2022-06-16,100.0\r
2022-06-18,100.0\r
2022-06-21,100.0\r
2022-07-11,45.06851975726881\r
2022-07-13,45.06851975726881\r
2022-07-16,54.06415021079162\r
2022-07-18,54.06415021079162\r
2022-07-21,40.37173521134612\r
2022-07-26,50.85021085749693\r
2022-07-28,38.70944442094414\r
2022-07-31,38.70944442094414\r
2022-08-05,41.21208916890571\r
2022-08-07,41.21208916890571\r
2022-08-10,46.380841911534326\r
2022-08-12,46.380841911534326\r
2022-08-15,46.380841911534326\r
2022-08-17,42.91102894463402\r
2022-08-25,43.339535882070074\r
2022-08-30,45.50448328796989\r
2022-09-01,45.50448328796989\r
2022-09-04,42.48402634766799\r
2022-09-06,45.50448328796989\r
2022-09-09,45.50448328796989\r
2022-09-11,44.63403899685453\r
2022-10-04,28.524254563742176\r
2022-10-06,28.524254563742176\r
2022-10-09,31.540894230300115\r
2022-10-11,31.540894230300115\r
2022-10-16,26.693791328263504\r
2023-02-21,15.44364957748645\r
2023-02-26,24.55440817926101\r
2023-03-03,19.488975892352233\r
2023-03-28,2.5599972779539826\r
2023-04-04,2.5599972779539826\r
2023-04-07,2.5599972779539826\r
`;export{n as default};
