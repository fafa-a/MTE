const r=`date,value\r
2017-02-19,86.97298155497987\r
2017-03-01,93.67681746709671\r
2017-03-11,97.7455871661581\r
2017-04-10,96.79223240637128\r
2017-04-20,95.60893668508383\r
2017-05-30,86.25382459062129\r
2017-06-09,79.58478443231454\r
2017-06-19,83.57739747331283\r
2017-06-29,77.1461791549677\r
2017-07-04,88.70335362834486\r
2017-07-14,89.66154927587272\r
2017-07-29,91.13979781734672\r
2017-08-03,81.007723064844\r
2017-08-13,84.82695525606717\r
2017-08-18,86.36421540299686\r
2017-09-02,80.74299746699292\r
2017-09-07,86.58526824596123\r
2017-09-27,87.30619028625117\r
2017-10-05,87.02845971155794\r
2017-10-07,91.02553668059593\r
2017-10-12,78.80122550295127\r
2017-10-15,86.30900869942431\r
2017-10-17,88.03094315415993\r
2017-10-27,82.17911503598086\r
2017-11-14,85.7581837078178\r
2017-11-16,87.30619028625117\r
2017-11-21,82.3932530200391\r
2017-11-26,85.7581837078178\r
2017-12-06,79.27076528232858\r
2017-12-16,58.47823135902467\r
2017-12-21,74.85667294666068\r
2018-01-05,87.58448755148216\r
2018-02-04,86.08840779233518\r
2018-02-09,81.4324384742486\r
2018-02-14,93.79319744439184\r
2018-03-26,86.91752604174698\r
2018-04-05,91.99968370626948\r
2018-04-15,90.91136728056905\r
2018-04-20,80.74299746699292\r
2018-04-25,92.22986015104104\r
2018-04-30,86.36421540299686\r
2018-05-05,90.11474739854759\r
2018-05-25,57.366512315074814\r
2018-06-09,91.54043468832866\r
2018-06-14,44.63166587838727\r
2018-07-09,87.1950300818286\r
2018-07-14,84.66329595191459\r
2018-07-19,88.81574061386611\r
2018-07-24,84.66329595191459\r
2018-07-29,91.25415072307648\r
2018-08-08,80.37331293303083\r
2018-08-28,84.44539815225197\r
2018-09-02,87.52878273892112\r
2018-09-07,83.95644144060883\r
2018-09-27,86.58526824596123\r
2018-10-02,86.64058798411381\r
2018-10-22,84.22785966421424\r
2018-11-26,78.80122550295127\r
2018-12-06,81.96533363479304\r
2018-12-11,85.37394843355696\r
2019-01-05,55.266814237271234\r
2019-01-10,61.00768086826645\r
2019-01-15,65.71648625539676\r
2019-01-25,71.3336009216328\r
2019-01-30,77.24896130708564\r
2019-02-04,66.50760091826822\r
2019-02-14,84.11922508092331\r
2019-03-01,80.53161619186135\r
2019-03-11,86.36421540299686\r
2019-03-16,81.06073475897635\r
2019-03-21,77.55783357515085\r
2019-03-26,74.25357856201789\r
2019-03-31,61.09612868758569\r
2019-04-05,75.31104505001666\r
2019-04-15,76.17411218317991\r
2019-04-30,90.17150003489522\r
2019-05-05,81.21990306375257\r
2019-05-10,80.47882628403549\r
2019-05-30,76.63358145285102\r
2019-06-04,82.9301597372563\r
2019-06-19,75.56423498465934\r
2019-06-24,64.65578007168745\r
2019-06-29,70.16719525359993\r
2019-07-04,66.2276919117051\r
2019-07-14,71.08958418846953\r
2019-07-19,72.36432479124252\r
2019-07-24,75.46289373410919\r
2019-07-29,70.84610243641781\r
2019-08-03,72.2657525958554\r
2019-08-08,63.969957109166245\r
2019-08-18,83.90222507350548\r
2019-08-23,68.4405957045336\r
2019-09-02,70.16719525359993\r
2019-09-07,76.27606363759854\r
2019-09-12,67.6348071030741\r
2019-09-17,72.80896469607785\r
2019-10-27,68.10806050777158\r
2019-11-06,70.26392587773975\r
2019-11-16,67.2577239628022\r
2019-12-06,73.5040963001468\r
2019-12-21,56.942559253481015\r
2019-12-26,73.95320155870579\r
2020-01-05,63.969957109166245\r
2020-02-04,55.5161353998252\r
2020-02-07,72.36432479124252\r
2020-02-09,78.74916459988899\r
2020-02-14,81.11376865412569\r
2020-02-19,83.79385958445177\r
2020-02-24,68.58342829728618\r
2020-03-20,87.30619028625117\r
2020-04-04,65.99501135599391\r
2020-04-09,79.06186048730888\r
2020-04-14,88.42278454600205\r
2020-04-24,94.55192366488141\r
2020-05-04,85.59337620285122\r
2020-05-19,78.0226223848586\r
2020-05-24,80.37331293303083\r
2020-06-08,76.27606363759854\r
2020-06-23,74.10329263681294\r
2020-06-28,75.97047105209334\r
2020-07-03,73.25534958679596\r
2020-07-08,68.39302719123955\r
2020-07-13,87.1950300818286\r
2020-07-18,72.61113170810847\r
2020-07-23,77.19755928138183\r
2020-08-02,75.6149382605589\r
2020-08-07,65.25395196155695\r
2020-08-22,74.20346159710773\r
2020-08-27,63.42466507253776\r
2020-09-06,67.77656135961763\r
2020-09-16,73.35478350351707\r
2020-10-11,77.50630006792628\r
2020-10-31,83.95644144060883\r
2020-11-05,54.03095869582234\r
2020-11-10,77.81583011117323\r
2020-11-20,72.11805552656712\r
2020-12-30,76.58244194893543\r
2021-01-09,91.76987530465215\r
2021-01-14,83.8480311228059\r
2021-01-19,91.99968370626948\r
2021-01-24,88.31071618079007\r
2021-01-29,82.5004558119394\r
2021-02-03,92.17228152170264\r
2021-02-23,86.86209316781243\r
2021-02-28,91.59776037664193\r
2021-03-10,98.70493144224707\r
2021-03-15,89.43549844016646\r
2021-03-20,95.37339466913362\r
2021-03-30,97.68582718995718\r
2021-04-19,96.49553476604174\r
2021-04-24,95.0207786455877\r
2021-05-04,100.0\r
2021-06-13,97.14903958738775\r
2021-07-03,95.90388740719405\r
2021-07-18,88.31071618079007\r
2021-07-28,89.26619995015328\r
2021-08-02,87.139483970936\r
2021-08-17,90.39873935740545\r
2021-08-22,90.56940917823286\r
2021-08-27,87.58448755148216\r
2021-09-01,88.87196826977059\r
2021-09-06,86.86209316781243\r
2021-09-11,86.69593034132747\r
2021-10-06,84.01068022817428\r
2021-10-11,88.98449192806676\r
2021-10-26,85.813164645939\r
2021-11-05,80.90176626335145\r
2021-11-20,79.68963413473672\r
2021-11-30,83.8480311228059\r
2021-12-20,84.01068022817428\r
2022-01-14,88.36673899117127\r
2022-01-24,93.2122220138371\r
2022-01-29,86.08840779233518\r
2022-02-08,85.7581837078178\r
2022-02-18,87.75173813242377\r
2022-02-23,97.38737811690098\r
2022-02-28,93.50242088693068\r
2022-03-25,100.0\r
2022-04-09,92.74910414484685\r
2022-05-14,100.0\r
2022-05-29,99.91255955157727\r
2022-06-13,92.92260032211492\r
2022-06-18,93.44433491365666\r
2022-06-28,89.49197690719394\r
2022-07-03,91.65510903944694\r
2022-07-08,95.4322453090421\r
2022-07-13,94.61044936608617\r
2022-07-18,93.73499589401057\r
2022-08-02,94.25964277493534\r
2022-08-07,98.40449195873543\r
2022-08-12,90.51249634141762\r
2022-08-22,89.49197690719394\r
2022-08-27,92.22986015104104\r
2022-09-11,90.22827554491988\r
2022-09-16,90.22827554491988\r
2022-09-26,87.91919301317878\r
2022-10-26,86.4746966106467\r
2022-11-05,83.03780907053243\r
2022-11-10,84.88155332277574\r
2022-11-20,78.80122550295127\r
2022-11-25,79.27076528232858\r
2022-11-30,78.12615029313854\r
2022-12-05,88.87196826977059\r
2022-12-10,83.25337598689919\r
2022-12-25,86.80668292912924\r
2023-01-04,84.39097985491848\r
2023-01-09,84.28221061495627\r
2023-01-19,84.93617387890455\r
2023-01-29,91.3113615993873\r
2023-02-03,90.85431697174646\r
2023-02-08,87.08396051552782\r
2023-02-13,95.31456726524966\r
2023-02-18,93.96794087656473\r
2023-03-05,100.0\r
2023-03-20,97.08951335616123\r
2023-03-30,100.0\r
2023-04-14,100.0\r
2023-04-19,100.0\r
2023-04-29,93.96794087656473\r
2023-05-04,100.0\r
2023-05-24,92.17228152170264\r
2023-06-18,94.84478404895181\r
2023-06-23,89.26619995015328\r
2023-06-28,94.96209057348219\r
2023-07-03,94.08455218909221\r
2023-07-08,95.31456726524966\r
2023-07-13,93.50242088693068\r
2023-07-23,93.09630410355564\r
2023-08-02,94.08455218909221\r
2023-08-12,97.44702117048529\r
2023-08-17,88.64719429064772\r
2023-08-22,89.15344834232116\r
`;export{r as default};
