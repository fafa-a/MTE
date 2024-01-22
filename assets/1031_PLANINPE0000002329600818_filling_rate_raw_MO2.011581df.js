const r=`date,value\r
2017-02-22,75.03667450360987\r
2017-02-25,76.54269277018845\r
2017-03-07,70.58901411386498\r
2017-03-17,97.16327100657061\r
2017-03-27,83.7239701075635\r
2017-04-03,91.15395882749831\r
2017-04-06,91.15395882749831\r
2017-04-23,80.10194128853482\r
2017-05-03,80.10194128853482\r
2017-05-16,83.7239701075635\r
2017-05-23,83.7239701075635\r
2017-05-26,88.47213716595203\r
2017-06-02,89.0060011301455\r
2017-06-05,81.64658792556565\r
2017-06-12,84.24649199808012\r
2017-06-15,96.05955678568921\r
2017-06-22,100.0\r
2017-06-25,97.16327100657061\r
2017-07-02,96.61079916809092\r
2017-07-05,87.93952668886725\r
2017-07-07,89.0060011301455\r
2017-07-10,89.0060011301455\r
2017-07-12,89.0060011301455\r
2017-07-17,84.77028094266768\r
2017-07-22,82.68273443851682\r
2017-07-27,92.77800830253888\r
2017-08-04,91.69406552572623\r
2017-08-06,91.69406552572623\r
2017-08-11,81.64658792556565\r
2017-08-14,87.93952668886725\r
2017-08-19,87.40817136488927\r
2017-08-21,90.0774828973592\r
2017-08-24,84.77028094266768\r
2017-08-26,83.20271700631123\r
2017-08-29,90.0774828973592\r
2017-09-03,76.54269277018845\r
2017-09-05,72.05978286110883\r
2017-09-08,68.16410636403654\r
2017-09-10,69.13010132594513\r
2017-09-13,69.13010132594513\r
2017-09-20,87.40817136488927\r
2017-09-23,86.34923288224758\r
2017-09-28,86.34923288224758\r
2017-10-03,78.56882543931755\r
2017-10-05,75.53738338804227\r
2017-10-08,80.61554470537867\r
2017-10-10,78.56882543931755\r
2017-10-13,83.20271700631123\r
2017-10-15,81.13042751453408\r
2017-10-18,83.7239701075635\r
2017-10-25,80.10194128853482\r
2017-10-28,77.04728949909119\r
2017-10-30,77.04728949909119\r
2017-11-07,66.7250752948796\r
2017-11-17,66.7250752948796\r
2017-11-19,66.7250752948796\r
2017-11-22,66.7250752948796\r
2017-11-24,66.7250752948796\r
2017-11-27,66.7250752948796\r
2017-12-14,39.76464687335168\r
2017-12-19,78.06035768748225\r
2017-12-24,78.06035768748225\r
2017-12-27,78.06035768748225\r
2018-02-10,79.58961906394208\r
2018-02-12,79.58961906394208\r
2018-02-25,85.82165309780292\r
2018-02-27,85.82165309780292\r
2018-03-02,85.82165309780292\r
2018-04-01,81.64658792556565\r
2018-04-21,83.7239701075635\r
2018-04-23,83.7239701075635\r
2018-04-26,83.7239701075635\r
2018-05-11,87.93952668886725\r
2018-05-18,87.93952668886725\r
2018-05-21,87.93952668886725\r
2018-05-23,10.704185531042361\r
2018-06-20,95.50954540781686\r
2018-06-22,95.50954540781686\r
2018-06-25,100.0\r
2018-06-27,100.0\r
2018-07-02,85.82165309780292\r
2018-07-07,83.7239701075635\r
2018-07-10,83.7239701075635\r
2018-07-12,77.04728949909119\r
2018-07-15,72.55266446714302\r
2018-07-17,72.55266446714302\r
2018-07-20,85.29533521505284\r
2018-07-22,85.29533521505284\r
2018-07-25,85.82165309780292\r
2018-07-27,100.0\r
2018-07-30,81.64658792556565\r
2018-08-01,89.54111692376252\r
2018-08-04,80.61554470537867\r
2018-08-06,90.0774828973592\r
2018-08-11,72.05978286110883\r
2018-08-16,68.16410636403654\r
2018-08-19,83.20271700631123\r
2018-08-21,73.04685546766551\r
2018-08-26,78.06035768748225\r
2018-08-31,89.0060011301455\r
2018-09-03,97.71697076000048\r
2018-09-08,97.71697076000048\r
2018-09-10,97.71697076000048\r
2018-09-13,97.71697076000048\r
2018-09-20,80.61554470537867\r
2018-09-23,86.34923288224758\r
2018-09-25,80.61554470537867\r
2018-09-28,80.61554470537867\r
2018-09-30,84.24649199808012\r
2018-10-03,86.34923288224758\r
2018-10-05,97.16327100657061\r
2018-10-23,81.64658792556565\r
2018-10-25,96.61079916809092\r
2018-10-30,96.61079916809092\r
2018-11-04,86.87807286840179\r
2018-11-12,87.40817136488927\r
2018-11-17,89.54111692376252\r
2018-11-19,89.54111692376252\r
2018-11-22,89.54111692376252\r
2018-11-27,82.16402415745529\r
2018-11-29,82.16402415745529\r
2018-12-17,77.55317842447285\r
2018-12-19,81.64658792556565\r
2018-12-27,79.07857984113214\r
2018-12-29,83.20271700631123\r
2019-01-03,63.88308143089656\r
2019-01-11,63.88308143089656\r
2019-01-16,81.13042751453408\r
2019-01-23,80.10194128853482\r
2019-01-28,80.10194128853482\r
2019-02-12,61.55176470509879\r
2019-02-15,61.55176470509879\r
2019-02-17,61.55176470509879\r
2019-02-20,66.24806295280217\r
2019-02-22,61.55176470509879\r
2019-02-25,64.82504946148399\r
2019-02-27,62.94649967467218\r
2019-03-12,76.54269277018845\r
2019-03-22,80.61554470537867\r
2019-03-24,72.55266446714302\r
2019-03-27,79.58961906394208\r
2019-03-29,77.55317842447285\r
2019-04-01,77.04728949909119\r
2019-04-08,88.47213716595203\r
2019-04-13,77.04728949909119\r
2019-05-01,79.58961906394208\r
2019-05-06,96.61079916809092\r
2019-05-11,96.61079916809092\r
2019-05-13,86.87807286840179\r
2019-05-16,86.87807286840179\r
2019-05-23,76.54269277018845\r
2019-06-02,84.77028094266768\r
2019-06-12,84.77028094266768\r
2019-06-17,65.29804791062001\r
2019-06-22,65.29804791062001\r
2019-06-25,65.29804791062001\r
2019-06-27,65.77238645167752\r
2019-06-30,65.77238645167752\r
2019-07-02,65.77238645167752\r
2019-07-05,85.29533521505284\r
2019-07-07,85.29533521505284\r
2019-07-10,92.23541588716739\r
2019-07-12,84.77028094266768\r
2019-07-15,86.34923288224758\r
2019-07-17,88.47213716595203\r
2019-07-22,82.16402415745529\r
2019-07-25,85.82165309780292\r
2019-08-01,84.24649199808012\r
2019-08-04,85.29533521505284\r
2019-08-09,74.53726535347529\r
2019-08-11,81.64658792556565\r
2019-08-14,75.03667450360987\r
2019-08-16,79.07857984113214\r
2019-08-21,72.55266446714302\r
2019-08-24,83.7239701075635\r
2019-08-26,79.07857984113214\r
2019-08-29,85.29533521505284\r
2019-08-31,84.77028094266768\r
2019-09-03,80.61554470537867\r
2019-09-05,80.61554470537867\r
2019-09-13,81.13042751453408\r
2019-09-15,77.55317842447285\r
2019-09-18,80.61554470537867\r
2019-09-20,87.40817136488927\r
2019-10-05,82.68273443851682\r
2019-10-08,71.5682126143595\r
2019-10-13,71.5682126143595\r
2019-11-04,73.54235390894121\r
2019-11-09,73.54235390894121\r
2019-11-19,73.54235390894121\r
2019-11-27,82.16402415745529\r
2019-12-02,82.16402415745529\r
2019-12-29,76.03939010676008\r
2020-01-01,85.29533521505284\r
2020-01-06,100.0\r
2020-01-11,85.29533521505284\r
2020-01-16,85.29533521505284\r
2020-01-18,90.0774828973592\r
2020-02-05,89.54111692376252\r
2020-02-07,89.54111692376252\r
2020-02-15,89.54111692376252\r
2020-02-20,90.0774828973592\r
2020-02-22,79.07857984113214\r
2020-03-01,79.07857984113214\r
2020-03-08,63.88308143089656\r
2020-03-11,44.148312113852654\r
2020-03-13,44.148312113852654\r
2020-03-18,72.55266446714302\r
2020-03-21,72.55266446714302\r
2020-03-28,72.55266446714302\r
2020-03-31,72.55266446714302\r
2020-04-05,73.54235390894121\r
2020-04-07,82.68273443851682\r
2020-04-10,75.03667450360987\r
2020-04-12,75.03667450360987\r
2020-04-15,83.20271700631123\r
2020-04-25,95.50954540781686\r
2020-05-05,83.7239701075635\r
2020-05-07,84.77028094266768\r
2020-05-17,69.13010132594513\r
2020-05-20,75.53738338804227\r
2020-05-22,74.53726535347529\r
2020-05-25,77.04728949909119\r
2020-05-27,74.53726535347529\r
2020-05-30,78.06035768748225\r
2020-06-14,81.64658792556565\r
2020-07-04,87.93952668886725\r
2020-07-09,97.71697076000048\r
2020-07-11,97.71697076000048\r
2020-07-14,84.77028094266768\r
2020-07-19,86.34923288224758\r
2020-07-21,79.58961906394208\r
2020-07-24,73.54235390894121\r
2020-07-26,79.07857984113214\r
2020-07-29,76.54269277018845\r
2020-07-31,72.05978286110883\r
2020-08-03,72.05978286110883\r
2020-08-05,68.64644112901861\r
2020-08-08,76.03939010676008\r
2020-08-10,74.03915784818895\r
2020-08-15,75.53738338804227\r
2020-08-20,76.54269277018845\r
2020-08-23,71.5682126143595\r
2020-08-25,69.6150849094461\r
2020-09-02,64.82504946148399\r
2020-09-04,70.58901411386498\r
2020-09-07,64.35339324899725\r
2020-09-12,64.82504946148399\r
2020-09-14,74.03915784818895\r
2020-09-17,68.16410636403654\r
2020-09-19,77.55317842447285\r
2020-10-17,76.54269277018845\r
2020-10-24,76.54269277018845\r
2020-11-01,76.54269277018845\r
2020-11-08,59.711135461970876\r
2020-11-11,65.29804791062001\r
2020-11-18,63.41411617806511\r
2020-11-21,66.7250752948796\r
2020-11-23,66.7250752948796\r
2020-11-26,66.7250752948796\r
2021-02-11,81.64658792556565\r
2021-02-14,81.64658792556565\r
2021-02-19,81.64658792556565\r
2021-03-23,70.10138984600998\r
2021-03-26,70.10138984600998\r
2021-03-28,85.29533521505284\r
2021-03-31,77.55317842447285\r
2021-04-02,77.55317842447285\r
2021-04-05,100.0\r
2021-04-07,100.0\r
2021-04-15,100.0\r
2021-04-17,99.94401835365649\r
2021-04-20,91.15395882749831\r
2021-04-22,100.0\r
2021-05-27,93.86691289702081\r
2021-05-30,93.86691289702081\r
2021-06-09,92.23541588716739\r
2021-06-11,93.32184117038693\r
2021-06-14,93.32184117038693\r
2021-06-16,90.0774828973592\r
2021-06-19,94.96076659030945\r
2021-06-21,82.16402415745529\r
2021-06-26,80.10194128853482\r
2021-07-01,79.07857984113214\r
2021-07-19,79.58961906394208\r
2021-07-21,96.61079916809092\r
2021-07-26,96.61079916809092\r
2021-07-29,89.0060011301455\r
2021-08-05,91.15395882749831\r
2021-08-10,81.64658792556565\r
2021-08-13,81.64658792556565\r
2021-08-18,81.64658792556565\r
2021-08-20,85.29533521505284\r
2021-08-23,79.07857984113214\r
2021-08-25,85.29533521505284\r
2021-08-28,76.03939010676008\r
2021-08-30,80.61554470537867\r
2021-09-04,76.03939010676008\r
2021-09-07,89.54111692376252\r
2021-09-12,85.82165309780292\r
2021-09-14,85.82165309780292\r
2021-09-17,85.82165309780292\r
2021-09-22,89.54111692376252\r
2021-09-24,83.7239701075635\r
2021-09-29,83.7239701075635\r
2021-10-07,75.03667450360987\r
2021-10-12,82.16402415745529\r
2021-10-14,77.55317842447285\r
2021-10-17,84.24649199808012\r
2021-10-24,73.54235390894121\r
2021-10-27,76.03939010676008\r
2021-12-16,67.20342137140392\r
2021-12-18,77.55317842447285\r
2021-12-21,68.16410636403654\r
2021-12-23,68.16410636403654\r
2022-01-15,80.61554470537867\r
2022-01-17,80.61554470537867\r
2022-01-22,81.13042751453408\r
2022-01-25,75.03667450360987\r
2022-01-27,65.29804791062001\r
2022-01-30,65.29804791062001\r
2022-02-01,68.64644112901861\r
2022-02-06,67.68309908834819\r
2022-02-09,71.5682126143595\r
2022-02-26,75.03667450360987\r
2022-03-01,75.03667450360987\r
2022-03-03,75.03667450360987\r
2022-03-08,75.03667450360987\r
2022-03-23,76.54269277018845\r
2022-03-26,76.54269277018845\r
2022-04-05,87.40817136488927\r
2022-04-10,87.40817136488927\r
2022-04-15,87.40817136488927\r
2022-04-17,77.55317842447285\r
2022-04-27,77.55317842447285\r
2022-05-07,90.0774828973592\r
2022-05-12,90.0774828973592\r
2022-05-15,90.0774828973592\r
2022-05-17,92.77800830253888\r
2022-05-20,87.40817136488927\r
2022-05-22,87.40817136488927\r
2022-05-27,87.40817136488927\r
2022-06-01,77.04728949909119\r
2022-06-04,77.04728949909119\r
2022-06-06,77.04728949909119\r
2022-06-11,91.69406552572623\r
2022-06-14,91.15395882749831\r
2022-06-16,92.77800830253888\r
2022-06-19,92.77800830253888\r
2022-07-11,62.94649967467218\r
2022-07-14,82.16402415745529\r
2022-07-16,70.10138984600998\r
2022-07-19,76.03939010676008\r
2022-07-21,70.58901411386498\r
2022-07-24,71.5682126143595\r
2022-07-26,72.55266446714302\r
2022-07-29,70.58901411386498\r
2022-07-31,68.16410636403654\r
2022-08-03,71.07795570286208\r
2022-08-05,79.07857984113214\r
2022-08-08,74.53726535347529\r
2022-08-10,75.03667450360987\r
2022-08-13,74.53726535347529\r
2022-08-15,72.55266446714302\r
2022-08-20,69.6150849094461\r
2022-08-23,68.16410636403654\r
2022-08-28,71.07795570286208\r
2022-08-30,69.6150849094461\r
2022-09-02,73.04685546766551\r
2022-09-04,74.53726535347529\r
2022-09-12,73.04685546766551\r
2022-09-19,67.68309908834819\r
2022-09-22,66.24806295280217\r
2022-10-02,71.5682126143595\r
2022-10-04,70.58901411386498\r
2022-10-07,70.58901411386498\r
2022-10-09,64.82504946148399\r
2022-10-12,64.82504946148399\r
2022-10-22,74.53726535347529\r
2022-10-24,74.53726535347529\r
2022-10-27,74.53726535347529\r
2022-11-01,74.53726535347529\r
2022-11-06,62.01532172016151\r
2022-11-08,69.13010132594513\r
2022-11-11,62.01532172016151\r
2022-11-13,63.41411617806511\r
2022-11-16,59.25438922628854\r
2022-12-06,60.16924841621386\r
2023-02-04,57.89237400869381\r
2023-02-06,58.799012019556216\r
2023-02-09,52.13425523117474\r
2023-02-11,56.542743329518366\r
2023-02-14,56.542743329518366\r
2023-02-16,55.64990160720481\r
2023-02-19,57.441117900035835\r
2023-02-21,58.799012019556216\r
2023-02-26,58.345006166969156\r
2023-03-01,54.762612138330105\r
2023-03-13,64.35339324899725\r
2023-03-16,71.5682126143595\r
2023-03-28,74.53726535347529\r
2023-04-05,84.24649199808012\r
2023-04-07,79.07857984113214\r
2023-04-15,84.24649199808012\r
2023-04-17,87.40817136488927\r
2023-04-20,83.20271700631123\r
2023-05-27,76.03939010676008\r
2023-05-30,71.07795570286208\r
2023-06-04,89.54111692376252\r
2023-06-11,81.64658792556565\r
2023-07-11,65.29804791062001\r
2023-07-14,78.06035768748225\r
2023-07-16,73.04685546766551\r
2023-07-19,83.7239701075635\r
2023-07-21,83.7239701075635\r
2023-07-26,86.34923288224758\r
2023-07-29,85.82165309780292\r
2023-07-31,84.24649199808012\r
2023-08-03,84.24649199808012\r
2023-08-05,84.24649199808012\r
2023-08-08,86.34923288224758\r
2023-08-10,84.24649199808012\r
2023-08-13,84.24649199808012\r
2023-08-15,84.24649199808012\r
2023-08-18,84.24649199808012\r
2023-08-20,76.54269277018845\r
2023-08-23,82.16402415745529\r
2023-09-07,82.16402415745529\r
2023-09-14,82.16402415745529\r
2023-09-19,77.55317842447285\r
2023-09-24,77.04728949909119\r
2023-09-27,83.20271700631123\r
2023-09-29,78.06035768748225\r
2023-10-02,81.13042751453408\r
2023-10-04,77.55317842447285\r
2023-10-07,79.58961906394208\r
2023-10-12,81.13042751453408\r
2023-11-08,67.20342137140392\r
2023-11-18,80.10194128853482\r
2023-11-26,80.61554470537867\r
2023-12-03,68.16410636403654\r
2023-12-06,68.16410636403654\r
`;export{r as default};
