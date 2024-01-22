const r=`date,value\r
2017-02-25,38391.37432597528\r
2017-03-14,38391.37432597528\r
2017-03-17,41541.451324835696\r
2017-03-27,36445.92505664272\r
2017-04-03,33753.82985497946\r
2017-04-23,39567.35676479913\r
2017-05-16,44333.946705314294\r
2017-05-26,41541.451324835696\r
2017-06-02,36445.92505664272\r
2017-06-25,45137.79687070432\r
2017-07-05,49195.596434213236\r
2017-07-07,38782.651810921954\r
2017-08-04,37221.897885012564\r
2017-08-06,38782.651810921954\r
2017-08-14,37610.9926052871\r
2017-08-21,38391.37432597528\r
2017-08-24,41938.3495642935\r
2017-08-26,31100.19836383117\r
2017-08-29,34136.10504651424\r
2017-09-20,31100.19836383117\r
2017-09-23,39960.77513036809\r
2017-10-05,35672.941031841176\r
2017-10-08,34902.986895533475\r
2017-10-10,36445.92505664272\r
2017-10-13,32611.734780695857\r
2017-10-15,35287.58260925615\r
2017-10-18,31476.85821765096\r
2017-10-25,35287.58260925615\r
2017-10-28,28487.092177588653\r
2017-11-07,31476.85821765096\r
2017-11-14,32611.734780695857\r
2017-11-17,36059.05690602891\r
2017-11-22,31476.85821765096\r
2017-12-09,36059.05690602891\r
2018-02-02,33372.33926430018\r
2018-02-10,39174.64748548042\r
2018-03-14,37610.9926052871\r
2018-03-22,39960.77513036809\r
2018-04-21,46753.2925147409\r
2018-04-23,39567.35676479913\r
2018-04-26,45944.25522369079\r
2018-05-11,42734.19181416213\r
2018-05-21,41938.3495642935\r
2018-06-20,43532.73474637683\r
2018-06-25,44735.54390677961\r
2018-07-07,31476.85821765096\r
2018-07-10,38782.651810921954\r
2018-07-12,42734.19181416213\r
2018-07-15,39960.77513036809\r
2018-07-25,40354.89812853118\r
2018-07-27,39174.64748548042\r
2018-08-01,37610.9926052871\r
2018-08-04,41938.3495642935\r
2018-08-06,38782.651810921954\r
2018-08-11,36445.92505664272\r
2018-08-19,42335.931091859034\r
2018-08-21,36445.92505664272\r
2018-08-31,36445.92505664272\r
2018-09-08,42734.19181416213\r
2018-09-10,35287.58260925615\r
2018-09-13,38782.651810921954\r
2018-09-20,41938.3495642935\r
2018-09-23,40749.72136904336\r
2018-09-28,36445.92505664272\r
2018-10-05,37221.897885012564\r
2018-10-20,36059.05690602891\r
2018-11-19,32611.734780695857\r
2018-11-22,36059.05690602891\r
2018-11-29,30724.365107837166\r
2018-12-19,32611.734780695857\r
2019-01-03,19179.05912667852\r
2019-01-16,21618.301687400945\r
2019-02-12,20915.995523815676\r
2019-02-15,20566.433093931868\r
2019-02-17,20217.946318012568\r
2019-02-20,24468.383528213148\r
2019-02-22,20566.433093931868\r
2019-02-25,23749.896030366308\r
2019-02-27,22679.550017591348\r
2019-03-12,23035.33454013546\r
2019-03-22,27012.968680064525\r
2019-03-24,19524.247109766784\r
2019-03-27,21971.023272747854\r
2019-03-29,22679.550017591348\r
2019-04-01,25916.84435271853\r
2019-04-13,17132.016335160413\r
2019-05-01,14799.082297840067\r
2019-05-06,24468.383528213148\r
2019-05-13,17132.016335160413\r
2019-05-23,19870.54696684404\r
2019-05-31,23749.896030366308\r
2019-06-02,19179.05912667852\r
2019-06-17,24829.076336922997\r
2019-06-27,15459.268493395606\r
2019-06-30,32991.63897439373\r
2019-07-05,32232.63257668534\r
2019-07-12,27748.252630118077\r
2019-07-15,27380.162427873078\r
2019-07-22,22679.550017591348\r
2019-07-25,28487.092177588653\r
2019-08-04,20566.433093931868\r
2019-08-09,25916.84435271853\r
2019-08-14,30724.365107837166\r
2019-08-21,21618.301687400945\r
2019-08-24,23392.11979356422\r
2019-08-26,23392.11979356422\r
2019-09-03,19870.54696684404\r
2019-09-13,24108.65371731811\r
2019-09-15,24468.383528213148\r
2019-09-18,26281.301667115324\r
2019-09-20,24108.65371731811\r
2019-10-08,20566.433093931868\r
2019-10-13,22679.550017591348\r
2020-01-06,18150.295149774625\r
2020-01-11,24829.076336922997\r
2020-01-16,18834.995720703057\r
2020-02-05,16794.987045568334\r
2020-02-15,13494.784508184219\r
2020-02-20,18492.069931572547\r
2020-02-22,15128.521399242689\r
2020-03-18,20566.433093931868\r
2020-03-21,23035.33454013546\r
2020-03-28,28487.092177588653\r
2020-04-05,28487.092177588653\r
2020-04-10,27012.968680064525\r
2020-04-12,25553.315404199293\r
2020-05-17,24108.65371731811\r
2020-05-20,29601.88975569879\r
2020-05-22,26281.301667115324\r
2020-05-25,25553.315404199293\r
2020-05-27,24829.076336922997\r
2020-06-21,17809.685131520637\r
2020-06-24,31476.85821765096\r
2020-06-26,24829.076336922997\r
2020-07-04,25916.84435271853\r
2020-07-09,23035.33454013546\r
2020-07-19,21971.023272747854\r
2020-07-21,14470.969658701082\r
2020-07-24,26281.301667115324\r
2020-07-29,32991.63897439373\r
2020-07-31,20217.946318012568\r
2020-08-05,18834.995720703057\r
2020-08-08,27748.252630118077\r
2020-08-10,28487.092177588653\r
2020-08-15,21618.301687400945\r
2020-08-20,23392.11979356422\r
2020-08-25,14470.969658701082\r
2020-09-02,19179.05912667852\r
2020-09-04,13494.784508184219\r
2020-09-12,15791.305688157317\r
2020-09-14,19179.05912667852\r
2020-09-17,22324.776195353144\r
2020-10-17,20217.946318012568\r
2020-11-06,18834.995720703057\r
2020-11-08,15791.305688157317\r
2020-11-11,17132.016335160413\r
2020-11-18,16459.181533293948\r
2020-11-23,15459.268493395606\r
2020-12-18,23035.33454013546\r
2021-02-06,34519.159232068334\r
2021-02-14,40749.72136904336\r
2021-02-19,36059.05690602891\r
2021-02-24,35672.941031841176\r
2021-03-01,34519.159232068334\r
2021-03-23,38782.651810921954\r
2021-03-28,43133.12769344221\r
2021-03-31,39960.77513036809\r
2021-04-02,39174.64748548042\r
2021-04-05,41145.24052367131\r
2021-04-07,37610.9926052871\r
2021-04-15,44735.54390677961\r
2021-05-27,37221.897885012564\r
2021-05-30,39567.35676479913\r
2021-06-11,40354.89812853118\r
2021-06-16,38000.81968336803\r
2021-06-19,37610.9926052871\r
2021-06-21,39174.64748548042\r
2021-06-26,36833.540388604146\r
2021-07-01,36059.05690602891\r
2021-08-10,39960.77513036809\r
2021-08-20,35672.941031841176\r
2021-08-23,39174.64748548042\r
2021-08-25,33753.82985497946\r
2021-08-28,34136.10504651424\r
2021-08-30,34519.159232068334\r
2021-09-14,33753.82985497946\r
2021-09-17,32991.63897439373\r
2021-09-22,36445.92505664272\r
2021-09-24,36445.92505664272\r
2021-10-07,29975.204204303318\r
2021-10-12,34519.159232068334\r
2021-10-14,31100.19836383117\r
2021-10-24,29601.88975569879\r
2021-10-27,30724.365107837166\r
2021-12-16,32232.63257668534\r
2021-12-18,33753.82985497946\r
2021-12-21,37221.897885012564\r
2021-12-23,31100.19836383117\r
2022-01-05,33753.82985497946\r
2022-01-15,35287.58260925615\r
2022-01-22,30349.36487459489\r
2022-01-25,31100.19836383117\r
2022-01-27,31100.19836383117\r
2022-02-09,36445.92505664272\r
2022-02-26,36445.92505664272\r
2022-03-23,38000.81968336803\r
2022-03-26,38000.81968336803\r
2022-04-05,44735.54390677961\r
2022-04-10,41145.24052367131\r
2022-04-15,45540.70186951082\r
2022-04-17,35672.941031841176\r
2022-04-30,44333.946705314294\r
2022-05-15,43933.009042943624\r
2022-05-17,38391.37432597528\r
2022-05-27,37610.9926052871\r
2022-05-30,31476.85821765096\r
2022-06-01,32611.734780695857\r
2022-06-06,40749.72136904336\r
2022-06-16,34136.10504651424\r
2022-06-19,42335.931091859034\r
2022-06-29,44735.54390677961\r
2022-07-06,37610.9926052871\r
2022-07-11,32611.734780695857\r
2022-07-14,44735.54390677961\r
2022-07-16,37221.897885012564\r
2022-07-19,49195.596434213236\r
2022-07-21,38782.651810921954\r
2022-07-24,45137.79687070432\r
2022-07-26,40354.89812853118\r
2022-07-31,42335.931091859034\r
2022-08-03,45540.70186951082\r
2022-08-10,41938.3495642935\r
2022-08-13,40354.89812853118\r
2022-08-28,47971.62178824625\r
2022-09-04,47564.88023327716\r
2022-09-12,44735.54390677961\r
2022-09-19,41145.24052367131\r
2022-09-22,41541.451324835696\r
2022-10-04,37610.9926052871\r
2022-10-07,44735.54390677961\r
2022-10-09,37221.897885012564\r
2022-10-22,40749.72136904336\r
2022-10-24,32232.63257668534\r
2022-11-11,34519.159232068334\r
2022-11-16,35287.58260925615\r
2023-02-04,37610.9926052871\r
2023-02-06,32232.63257668534\r
2023-02-09,33372.33926430018\r
2023-02-11,36445.92505664272\r
2023-02-14,36833.540388604146\r
2023-02-16,32991.63897439373\r
2023-02-26,32232.63257668534\r
2023-03-01,41145.24052367131\r
2023-03-16,38391.37432597528\r
2023-03-28,38000.81968336803\r
2023-04-05,42734.19181416213\r
2023-04-07,40354.89812853118\r
2023-04-20,39174.64748548042\r
2023-05-02,38391.37432597528\r
2023-05-27,36833.540388604146\r
2023-05-30,36059.05690602891\r
2023-06-24,50014.67133879891\r
2023-06-29,50836.18946484458\r
2023-07-11,49604.82688413034\r
2023-07-14,44735.54390677961\r
2023-07-31,41938.3495642935\r
2023-08-08,49604.82688413034\r
2023-08-15,36445.92505664272\r
2023-08-20,39567.35676479913\r
2023-08-23,41145.24052367131\r
2023-09-07,48786.98323673749\r
2023-09-14,47564.88023327716\r
2023-09-24,37610.9926052871\r
2023-09-27,43133.12769344221\r
2023-09-29,41938.3495642935\r
2023-10-02,43133.12769344221\r
2023-10-07,38000.81968336803\r
2023-10-12,39960.77513036809\r
2023-11-26,35672.941031841176\r
2023-12-03,33372.33926430018\r
`;export{r as default};
