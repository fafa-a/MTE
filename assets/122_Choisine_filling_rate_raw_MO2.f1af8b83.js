const n=`date,value\r
2017-02-19,52.06337910768486\r
2017-02-22,55.05072551006391\r
2017-03-11,42.35621248240048\r
2017-03-14,42.90749848319561\r
2017-04-03,78.22909644167486\r
2017-04-10,86.57485805728365\r
2017-04-20,79.5992613671471\r
2017-04-23,70.18640828202145\r
2017-04-30,55.05072551006391\r
2017-05-10,16.63673694097946\r
2017-05-23,55.65522532766018\r
2017-05-30,55.65522532766018\r
2017-06-02,55.65522532766018\r
2017-06-09,68.87610177547074\r
2017-06-12,71.50540443502325\r
2017-06-19,63.088573209119026\r
2017-06-22,65.63867196612085\r
2017-07-02,79.5992613671471\r
2017-07-04,75.51406008737203\r
2017-07-07,82.36467023476457\r
2017-07-09,78.22909644167486\r
2017-07-12,78.22909644167486\r
2017-07-14,78.22909644167486\r
2017-07-17,85.16323980119118\r
2017-07-27,73.50008812234161\r
2017-07-29,62.45663620029222\r
2017-08-03,70.84482313948043\r
2017-08-06,55.05072551006391\r
2017-08-13,48.5569327402103\r
2017-08-18,47.407397723324216\r
2017-08-21,31.873450559591067\r
2017-08-23,39.101769371367176\r
2017-08-26,30.39328818728302\r
2017-09-15,19.068777431249448\r
2017-09-20,31.873450559591067\r
2017-09-22,20.754181380145774\r
2017-09-27,18.65534543576378\r
2017-10-05,17.03391261639242\r
2017-10-07,11.091516790540343\r
2017-10-10,9.103318716008372\r
2017-10-12,9.103318716008372\r
2017-10-15,7.856614302066727\r
2017-10-17,7.856614302066727\r
2017-10-22,6.1117581555090625\r
2017-10-25,8.78559306659782\r
2017-10-27,6.676151196083239\r
2017-10-30,2.287405010149353\r
2017-11-16,6.964887252886825\r
2017-11-21,8.162197024199077\r
2017-11-26,8.162197024199077\r
2017-11-29,4.280137637350241\r
2018-01-15,21.1833532903418\r
2018-01-23,21.1833532903418\r
2018-02-24,4.037658147940063\r
2018-02-27,40.17637049836613\r
2018-03-04,40.17637049836613\r
2018-03-14,42.90749848319561\r
2018-03-16,96.68278196680734\r
2018-03-19,65.63867196612085\r
2018-03-21,66.28175185535659\r
2018-03-24,66.28175185535659\r
2018-03-31,53.84873348222163\r
2018-04-05,39.63778487018306\r
2018-04-10,39.63778487018306\r
2018-04-18,72.8330427582896\r
2018-04-20,94.48375227750743\r
2018-04-25,94.48375227750743\r
2018-04-30,100.0\r
2018-05-05,97.4197518400496\r
2018-05-08,97.4197518400496\r
2018-05-20,78.22909644167486\r
2018-05-25,78.22909644167486\r
2018-06-14,42.90749848319561\r
2018-06-19,59.33081058884364\r
2018-06-22,55.05072551006391\r
2018-06-24,59.33081058884364\r
2018-06-27,65.63867196612085\r
2018-06-29,65.63867196612085\r
2018-07-02,77.54716750734234\r
2018-07-04,80.97780003169368\r
2018-07-07,83.75983044877475\r
2018-07-09,80.97780003169368\r
2018-07-12,86.57485805728365\r
2018-07-17,78.22909644167486\r
2018-07-19,70.18640828202145\r
2018-07-22,96.68278196680734\r
2018-07-24,80.97780003169368\r
2018-07-27,84.46050651210362\r
2018-07-29,90.1395591726958\r
2018-08-01,90.1395591726958\r
2018-08-03,70.18640828202145\r
2018-08-06,77.54716750734234\r
2018-08-11,81.670196301947\r
2018-08-18,63.722751846973516\r
2018-08-21,59.33081058884364\r
2018-08-23,59.33081058884364\r
2018-08-26,59.33081058884364\r
2018-08-28,61.19951373346658\r
2018-08-31,46.83628330774118\r
2018-09-02,42.90749848319561\r
2018-09-05,44.01759366573451\r
2018-09-07,40.17637049836613\r
2018-09-10,38.56833431909143\r
2018-09-12,38.56833431909143\r
2018-09-17,39.101769371367176\r
2018-09-20,33.378277678488\r
2018-09-22,35.940236382462835\r
2018-09-25,31.873450559591067\r
2018-09-27,32.37233579492262\r
2018-10-02,31.37730572832843\r
2018-10-05,22.930764222852986\r
2018-10-10,17.434383520101008\r
2018-10-12,17.434383520101008\r
2018-10-15,17.434383520101008\r
2018-10-17,28.458708851417402\r
2018-10-20,28.458708851417402\r
2018-10-22,20.754181380145774\r
2018-10-25,20.754181380145774\r
2018-10-30,21.615615674848158\r
2018-11-04,26.569467088051013\r
2018-11-09,26.569467088051013\r
2018-11-11,26.569467088051013\r
2018-11-14,26.569467088051013\r
2018-12-11,47.98095040504358\r
2018-12-14,39.101769371367176\r
2019-01-03,6.1117581555090625\r
2019-01-10,6.1117581555090625\r
2019-01-15,6.391756172458754\r
2019-02-04,52.06337910768486\r
2019-02-12,55.05072551006391\r
2019-02-14,39.63778487018306\r
2019-02-17,40.71751606956606\r
2019-02-19,40.17637049836613\r
2019-02-22,36.46060966034339\r
2019-02-24,36.46060966034339\r
2019-02-27,46.26761586942747\r
2019-03-04,49.71615240122272\r
2019-03-16,36.98361703626951\r
2019-03-19,36.98361703626951\r
2019-03-21,58.71246526547343\r
2019-03-24,55.05072551006391\r
2019-03-26,61.19951373346658\r
2019-03-29,53.84873348222163\r
2019-03-31,64.99780772118076\r
2019-04-05,65.63867196612085\r
2019-04-13,72.16814626032124\r
2019-04-15,72.16814626032124\r
2019-04-18,59.9514384155046\r
2019-04-20,76.18964383460181\r
2019-04-23,91.57960056858126\r
2019-04-30,90.85857312260072\r
2019-05-03,98.89960502853171\r
2019-05-13,87.99464560350816\r
2019-05-15,85.86802530649294\r
2019-05-23,78.91312952270066\r
2019-05-25,78.91312952270066\r
2019-05-30,100.0\r
2019-06-02,100.0\r
2019-06-04,100.0\r
2019-06-07,98.15869432100881\r
2019-06-12,100.0\r
2019-06-17,72.8330427582896\r
2019-06-19,96.68278196680734\r
2019-06-24,78.91312952270066\r
2019-06-27,80.28748663555768\r
2019-06-29,72.8330427582896\r
2019-07-02,77.54716750734234\r
2019-07-04,74.16927659565852\r
2019-07-07,70.84482313948043\r
2019-07-09,70.84482313948043\r
2019-07-12,55.65522532766018\r
2019-07-14,57.48265038744326\r
2019-07-17,70.84482313948043\r
2019-07-19,69.53016582297974\r
2019-07-22,69.53016582297974\r
2019-07-24,72.16814626032124\r
2019-07-29,64.35916552632513\r
2019-08-01,64.99780772118076\r
2019-08-03,59.33081058884364\r
2019-08-06,64.35916552632513\r
2019-08-08,61.19951373346658\r
2019-08-11,45.13765727289597\r
2019-08-13,45.13765727289597\r
2019-08-16,58.0964094925818\r
2019-08-18,58.0964094925818\r
2019-08-21,45.13765727289597\r
2019-08-23,45.13765727289597\r
2019-08-26,39.101769371367176\r
2019-08-28,36.98361703626951\r
2019-08-31,33.88530987386509\r
2019-09-02,32.37233579492262\r
2019-09-07,34.90743693534581\r
2019-09-12,31.873450559591067\r
2019-09-15,24.273087686729482\r
2019-09-17,20.32811861372517\r
2019-09-20,19.90518402623714\r
2019-09-22,19.90518402623714\r
2019-09-27,18.24512167082223\r
2019-09-30,17.83812719611431\r
2019-10-07,17.434383520101008\r
2019-10-25,36.98361703626951\r
2019-10-30,39.101769371367176\r
2019-12-06,42.35621248240048\r
2019-12-14,42.35621248240048\r
2019-12-19,42.35621248240048\r
2019-12-21,70.84482313948043\r
2019-12-29,68.87610177547074\r
2020-02-12,20.754181380145774\r
2020-02-14,20.754181380145774\r
2020-02-22,31.873450559591067\r
2020-02-24,27.982112854267594\r
2020-03-08,28.938138169920663\r
2020-03-15,26.569467088051013\r
2020-03-18,26.569467088051013\r
2020-03-20,54.44855904035476\r
2020-03-23,54.44855904035476\r
2020-03-25,88.70759064709021\r
2020-03-28,79.5992613671471\r
2020-04-02,89.42256343149315\r
2020-04-04,82.36467023476457\r
2020-04-07,87.28373312115268\r
2020-04-09,85.86802530649294\r
2020-04-12,85.86802530649294\r
2020-04-14,83.75983044877475\r
2020-04-17,83.75983044877475\r
2020-04-22,87.28373312115268\r
2020-04-24,83.06121666008306\r
2020-04-27,92.30263683303657\r
2020-05-04,74.8406024704738\r
2020-05-07,74.8406024704738\r
2020-05-09,65.63867196612085\r
2020-05-17,55.65522532766018\r
2020-05-19,62.45663620029222\r
2020-05-22,70.84482313948043\r
2020-05-24,70.84482313948043\r
2020-05-27,75.51406008737203\r
2020-05-29,58.0964094925818\r
2020-06-01,58.0964094925818\r
2020-06-21,80.28748663555768\r
2020-06-23,100.0\r
2020-06-26,100.0\r
2020-06-28,100.0\r
2020-07-01,80.28748663555768\r
2020-07-08,74.16927659565852\r
2020-07-11,71.50540443502325\r
2020-07-13,73.50008812234161\r
2020-07-18,66.92704104180787\r
2020-07-21,61.826947470546614\r
2020-07-23,61.826947470546614\r
2020-07-28,38.56833431909143\r
2020-07-31,39.101769371367176\r
2020-08-05,35.940236382462835\r
2020-08-07,28.458708851417402\r
2020-08-10,30.39328818728302\r
2020-08-15,26.569467088051013\r
2020-08-20,17.03391261639242\r
2020-08-25,16.63673694097946\r
2020-08-27,16.63673694097946\r
2020-09-01,16.63673694097946\r
2020-09-04,7.856614302066727\r
2020-09-09,10.750596297171038\r
2020-10-31,9.42500678289175\r
2020-11-10,9.42500678289175\r
2020-11-18,4.280137637350241\r
2020-11-23,10.750596297171038\r
2020-11-25,10.750596297171038\r
2020-11-28,10.750596297171038\r
2020-12-13,4.037658147940063\r
2020-12-28,4.779858994467555\r
2021-01-24,23.822655447543912\r
2021-01-29,23.822655447543912\r
2021-02-21,61.826947470546614\r
2021-02-23,72.16814626032124\r
2021-02-26,72.16814626032124\r
2021-02-28,84.46050651210362\r
2021-03-05,91.57960056858126\r
2021-03-10,91.57960056858126\r
2021-03-20,93.75471727948336\r
2021-03-23,95.21477772523482\r
2021-03-25,88.70759064709021\r
2021-03-28,88.70759064709021\r
2021-03-30,87.28373312115268\r
2021-04-02,85.86802530649294\r
2021-04-04,83.06121666008306\r
2021-04-07,78.91312952270066\r
2021-04-09,88.70759064709021\r
2021-04-14,64.35916552632513\r
2021-04-17,72.8330427582896\r
2021-04-19,74.16927659565852\r
2021-04-22,87.99464560350816\r
2021-04-24,80.97780003169368\r
2021-04-27,100.0\r
2021-05-12,63.722751846973516\r
2021-05-17,63.722751846973516\r
2021-05-22,63.722751846973516\r
2021-05-27,53.25125647835789\r
2021-05-29,53.25125647835789\r
2021-06-01,49.135336212716716\r
2021-06-03,49.135336212716716\r
2021-06-11,68.2242222061855\r
2021-06-13,68.87610177547074\r
2021-06-16,56.26205100709066\r
2021-06-18,57.48265038744326\r
2021-06-21,57.48265038744326\r
2021-06-26,76.86734814740213\r
2021-07-11,46.26761586942747\r
2021-07-18,46.26761586942747\r
2021-07-21,58.0964094925818\r
2021-07-23,45.70140421987394\r
2021-08-02,42.90749848319561\r
2021-08-10,35.940236382462835\r
2021-08-12,35.940236382462835\r
2021-08-15,46.26761586942747\r
2021-08-17,46.26761586942747\r
2021-08-20,45.13765727289597\r
2021-08-25,51.47299443408534\r
2021-08-27,60.574341767198334\r
2021-09-01,59.9514384155046\r
2021-09-04,72.16814626032124\r
2021-09-06,78.22909644167486\r
2021-09-24,41.26121152548022\r
2021-09-26,41.26121152548022\r
2021-09-29,41.26121152548022\r
2021-10-01,44.57638404665459\r
2021-10-11,55.05072551006391\r
2021-10-14,63.722751846973516\r
2021-10-16,53.25125647835789\r
2021-10-21,53.25125647835789\r
2021-10-24,56.26205100709066\r
2021-11-30,39.101769371367176\r
2021-12-03,39.101769371367176\r
2021-12-23,35.940236382462835\r
2022-01-14,14.701109085279276\r
2022-01-19,14.701109085279276\r
2022-01-22,14.701109085279276\r
2022-01-24,27.037477512895407\r
2022-01-27,26.104347836071696\r
2022-01-29,26.104347836071696\r
2022-02-01,76.86734814740213\r
2022-02-08,66.28175185535659\r
2022-02-11,66.28175185535659\r
2022-02-13,12.13657700871982\r
2022-02-18,12.13657700871982\r
2022-02-26,37.50924749421712\r
2022-02-28,41.26121152548022\r
2022-03-03,41.26121152548022\r
2022-03-05,41.26121152548022\r
2022-03-08,41.26121152548022\r
2022-03-10,56.26205100709066\r
2022-03-23,68.2242222061855\r
2022-03-25,76.18964383460181\r
2022-03-28,76.18964383460181\r
2022-04-04,67.57453323620093\r
2022-04-14,57.48265038744326\r
2022-04-17,62.45663620029222\r
2022-04-19,62.45663620029222\r
2022-04-27,63.088573209119026\r
2022-05-02,55.65522532766018\r
2022-05-04,55.65522532766018\r
2022-05-07,55.65522532766018\r
2022-05-09,70.18640828202145\r
2022-05-12,70.18640828202145\r
2022-05-14,70.18640828202145\r
2022-05-17,70.18640828202145\r
2022-05-19,73.50008812234161\r
2022-05-27,75.51406008737203\r
2022-05-29,70.18640828202145\r
2022-06-06,80.97780003169368\r
2022-06-11,99.64247961244452\r
2022-06-13,99.64247961244452\r
2022-06-16,73.50008812234161\r
2022-06-18,65.63867196612085\r
2022-06-21,71.50540443502325\r
2022-06-23,63.722751846973516\r
2022-06-28,63.722751846973516\r
2022-07-01,75.51406008737203\r
2022-07-03,70.18640828202145\r
2022-07-06,72.8330427582896\r
2022-07-08,70.18640828202145\r
2022-07-11,68.2242222061855\r
2022-07-13,68.2242222061855\r
2022-07-16,62.45663620029222\r
2022-07-18,53.84873348222163\r
2022-07-21,43.46129536328062\r
2022-07-26,41.26121152548022\r
2022-07-28,46.26761586942747\r
2022-07-31,37.50924749421712\r
2022-08-02,22.48933894770689\r
2022-08-05,22.48933894770689\r
2022-08-07,18.24512167082223\r
2022-08-10,18.24512167082223\r
2022-08-12,18.24512167082223\r
2022-08-15,17.434383520101008\r
2022-08-17,17.434383520101008\r
2022-08-22,17.03391261639242\r
2022-08-25,12.492254707936896\r
2022-08-30,12.492254707936896\r
2022-09-01,11.436175926740928\r
2022-09-04,11.784540190364117\r
2022-09-06,12.851542471887209\r
2022-09-09,11.436175926740928\r
2022-09-11,12.492254707936896\r
2022-09-19,12.492254707936896\r
2022-09-21,13.214410303703522\r
2022-10-04,10.413448951739039\r
2022-10-06,12.492254707936896\r
2022-10-09,12.492254707936896\r
2022-10-11,11.784540190364117\r
2022-10-16,13.214410303703522\r
2022-10-26,9.750616979331555\r
2022-10-31,9.750616979331555\r
2022-11-20,30.39328818728302\r
2022-11-23,30.39328818728302\r
2022-12-05,22.050950218190977\r
2023-01-17,18.24512167082223\r
2023-01-24,18.24512167082223\r
2023-02-03,45.13765727289597\r
2023-02-08,45.70140421987394\r
2023-02-11,40.71751606956606\r
2023-02-13,40.71751606956606\r
2023-02-16,37.50924749421712\r
2023-02-21,40.71751606956606\r
2023-02-26,47.407397723324216\r
2023-03-03,58.0964094925818\r
2023-03-05,61.19951373346658\r
2023-03-15,55.65522532766018\r
2023-03-28,65.63867196612085\r
2023-04-04,65.63867196612085\r
2023-04-07,65.63867196612085\r
2023-04-09,35.42250836804397\r
2023-04-19,85.86802530649294\r
2023-05-02,72.16814626032124\r
2023-05-04,72.16814626032124\r
2023-05-17,76.86734814740213\r
2023-05-27,83.06121666008306\r
2023-05-29,100.0\r
2023-06-01,86.57485805728365\r
2023-06-03,87.28373312115268\r
2023-06-06,87.28373312115268\r
2023-06-08,85.86802530649294\r
2023-06-16,80.97780003169368\r
2023-06-23,98.15869432100881\r
2023-06-26,84.46050651210362\r
2023-06-28,63.722751846973516\r
2023-07-08,90.85857312260072\r
2023-07-11,94.48375227750743\r
2023-07-13,89.42256343149315\r
2023-07-16,84.46050651210362\r
2023-07-18,81.670196301947\r
2023-07-21,86.57485805728365\r
2023-07-23,75.51406008737203\r
2023-07-26,67.57453323620093\r
2023-07-28,72.8330427582896\r
2023-07-31,75.51406008737203\r
2023-08-02,70.84482313948043\r
2023-08-05,75.51406008737203\r
2023-08-07,76.18964383460181\r
2023-08-12,76.18964383460181\r
2023-08-15,86.57485805728365\r
2023-08-17,86.57485805728365\r
2023-08-22,86.57485805728365\r
2023-08-25,38.56833431909143\r
`;export{n as default};
