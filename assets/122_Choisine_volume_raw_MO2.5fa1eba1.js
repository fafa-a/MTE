const n=`date,value\r
2017-02-19,42662.76737753103\r
2017-02-22,45110.71575939067\r
2017-03-11,34708.3357073763\r
2017-03-14,35160.08099962416\r
2017-04-03,64103.97866689727\r
2017-04-10,70942.82187103516\r
2017-04-20,65226.745350238525\r
2017-04-23,57513.485696096795\r
2017-04-30,45110.71575939067\r
2017-05-10,13632.792381111847\r
2017-05-23,45606.06653261896\r
2017-05-30,45606.06653261896\r
2017-06-02,45606.06653261896\r
2017-06-09,56439.7693403717\r
2017-06-12,58594.3226876986\r
2017-06-19,51697.24226762099\r
2017-06-22,53786.89284206174\r
2017-07-02,65226.745350238525\r
2017-07-04,61879.17177978409\r
2017-07-07,67492.82944322264\r
2017-07-09,64103.97866689727\r
2017-07-12,64103.97866689727\r
2017-07-14,64103.97866689727\r
2017-07-17,69786.08670866727\r
2017-07-27,60228.84444948833\r
2017-07-29,51179.40838770575\r
2017-08-03,58053.01655988464\r
2017-08-06,45110.71575939067\r
2017-08-13,39789.44819884417\r
2017-08-18,38847.47428439077\r
2017-08-21,26118.350941657452\r
2017-08-23,32041.517844819853\r
2017-08-26,24905.448051890322\r
2017-09-15,15625.701398302586\r
2017-09-20,26118.350941657452\r
2017-09-22,17006.787256372114\r
2017-09-27,15286.919065074622\r
2017-10-05,13958.253650406523\r
2017-10-07,9088.822293306657\r
2017-10-10,7459.6150960793775\r
2017-10-12,7459.6150960793775\r
2017-10-15,6438.016780485553\r
2017-10-17,6438.016780485553\r
2017-10-22,5008.2134683748145\r
2017-10-25,7199.258282845243\r
2017-10-27,5470.69918121552\r
2017-10-30,1874.3890527035815\r
2017-11-16,5707.300789409997\r
2017-11-21,6688.423204585691\r
2017-11-26,6688.423204585691\r
2017-11-29,3507.312039589366\r
2018-01-15,17358.467490799332\r
2018-01-23,17358.467490799332\r
2018-01-28,183.42026206343175\r
2018-02-02,183.42026206343175\r
2018-02-24,3308.614870334712\r
2018-02-27,32922.08800162748\r
2018-03-04,32922.08800162748\r
2018-03-14,35160.08099962416\r
2018-03-16,79225.64972071926\r
2018-03-19,53786.89284206174\r
2018-03-21,54313.85763362639\r
2018-03-24,54313.85763362639\r
2018-03-31,44125.75652024069\r
2018-04-05,32480.74989100408\r
2018-04-10,32480.74989100408\r
2018-04-18,59682.24141133456\r
2018-04-20,77423.67885945723\r
2018-04-25,77423.67885945723\r
2018-04-30,87201.44728651943\r
2018-05-05,79829.5516342188\r
2018-05-08,79829.5516342188\r
2018-05-20,64103.97866689727\r
2018-05-25,64103.97866689727\r
2018-06-14,35160.08099962416\r
2018-06-19,48617.98473043346\r
2018-06-22,45110.71575939067\r
2018-06-24,48617.98473043346\r
2018-06-27,53786.89284206174\r
2018-06-29,53786.89284206174\r
2018-07-02,63545.179449634365\r
2018-07-04,66356.37380260692\r
2018-07-07,68636.07824275969\r
2018-07-09,66356.37380260692\r
2018-07-12,70942.82187103516\r
2018-07-17,64103.97866689727\r
2018-07-19,57513.485696096795\r
2018-07-22,79225.64972071926\r
2018-07-24,66356.37380260692\r
2018-07-27,69210.23959012392\r
2018-07-29,73863.87726666556\r
2018-08-01,73863.87726666556\r
2018-08-03,57513.485696096795\r
2018-08-06,63545.179449634365\r
2018-08-11,66923.75036396668\r
2018-08-18,52216.91302596007\r
2018-08-21,48617.98473043346\r
2018-08-23,48617.98473043346\r
2018-08-26,48617.98473043346\r
2018-08-28,50149.27311246131\r
2018-08-31,38379.480814209404\r
2018-09-02,35160.08099962416\r
2018-09-05,36069.73637258062\r
2018-09-07,32922.08800162748\r
2018-09-10,31604.400317369502\r
2018-09-12,31604.400317369502\r
2018-09-17,32041.517844819853\r
2018-09-20,27351.465088630368\r
2018-09-22,29450.834167084708\r
2018-09-25,26118.350941657452\r
2018-09-27,26527.15699896335\r
2018-10-02,25711.790478535346\r
2018-10-05,18790.364294356506\r
2018-10-10,14286.415158537813\r
2018-10-12,14286.415158537813\r
2018-10-15,14286.415158537813\r
2018-10-17,23320.178144443405\r
2018-10-20,23320.178144443405\r
2018-10-22,17006.787256372114\r
2018-10-25,17006.787256372114\r
2018-10-30,17712.680180646224\r
2018-11-04,21772.059615607468\r
2018-11-09,21772.059615607468\r
2018-11-11,21772.059615607468\r
2018-11-14,21772.059615607468\r
2018-12-11,39317.465765126995\r
2018-12-14,32041.517844819853\r
2019-01-03,5008.2134683748145\r
2019-01-10,5008.2134683748145\r
2019-01-15,5237.654785247224\r
2019-01-23,435.5270880246116\r
2019-01-25,435.5270880246116\r
2019-01-28,435.5270880246116\r
2019-01-30,435.5270880246116\r
2019-02-04,42662.76737753103\r
2019-02-12,45110.71575939067\r
2019-02-14,32480.74989100408\r
2019-02-17,33365.523829596554\r
2019-02-19,32922.08800162748\r
2019-02-22,29877.248366166616\r
2019-02-24,29877.248366166616\r
2019-02-27,37913.49249282568\r
2019-03-04,40739.358089151945\r
2019-03-16,30305.82104812255\r
2019-03-19,30305.82104812255\r
2019-03-21,48111.288408718276\r
2019-03-24,45110.71575939067\r
2019-03-26,50149.27311246131\r
2019-03-29,44125.75652024069\r
2019-03-31,53261.74363601606\r
2019-04-05,53786.89284206174\r
2019-04-13,59137.39923802331\r
2019-04-15,59137.39923802331\r
2019-04-18,49126.55142454093\r
2019-04-20,62432.771502777294\r
2019-04-23,75043.90346050145\r
2019-04-30,74453.06539489955\r
2019-05-03,81042.20116667665\r
2019-05-13,72106.25126897739\r
2019-05-15,70363.61549337317\r
2019-05-23,64664.50210418664\r
2019-05-25,64664.50210418664\r
2019-05-30,90972.812148934\r
2019-06-02,87826.08983825575\r
2019-06-04,87826.08983825575\r
2019-06-07,80435.06997956733\r
2019-06-12,91606.83584845783\r
2019-06-17,59682.24141133456\r
2019-06-19,79225.64972071926\r
2019-06-24,64664.50210418664\r
2019-06-27,65790.70402969362\r
2019-06-29,59682.24141133456\r
2019-07-02,63545.179449634365\r
2019-07-04,60777.20363512233\r
2019-07-07,58053.01655988464\r
2019-07-09,58053.01655988464\r
2019-07-12,45606.06653261896\r
2019-07-14,47103.53003886088\r
2019-07-17,58053.01655988464\r
2019-07-19,56975.73498046523\r
2019-07-22,56975.73498046523\r
2019-07-24,59137.39923802331\r
2019-07-29,52738.41526464302\r
2019-08-01,53261.74363601606\r
2019-08-03,48617.98473043346\r
2019-08-06,52738.41526464302\r
2019-08-08,50149.27311246131\r
2019-08-11,36987.560262219675\r
2019-08-13,36987.560262219675\r
2019-08-16,47606.46823413646\r
2019-08-18,47606.46823413646\r
2019-08-21,36987.560262219675\r
2019-08-23,36987.560262219675\r
2019-08-26,32041.517844819853\r
2019-08-28,30305.82104812255\r
2019-08-31,27766.9470833651\r
2019-09-02,26527.15699896335\r
2019-09-07,28604.517940301554\r
2019-09-12,26118.350941657452\r
2019-09-15,19890.316596075463\r
2019-09-17,16657.654775853836\r
2019-09-20,16311.085647396123\r
2019-09-22,16311.085647396123\r
2019-09-27,14950.765681325984\r
2019-09-30,14617.258504189236\r
2019-10-07,14286.415158537813\r
2019-10-25,30305.82104812255\r
2019-10-30,32041.517844819853\r
2019-12-06,34708.3357073763\r
2019-12-14,34708.3357073763\r
2019-12-19,34708.3357073763\r
2019-12-21,58053.01655988464\r
2019-12-29,56439.7693403717\r
2020-02-12,17006.787256372114\r
2020-02-14,17006.787256372114\r
2020-02-22,26118.350941657452\r
2020-02-24,22929.63675992418\r
2020-03-08,23713.0412632004\r
2020-03-15,21772.059615607468\r
2020-03-18,21772.059615607468\r
2020-03-20,44617.27702260382\r
2020-03-23,44617.27702260382\r
2020-03-25,72690.46629820924\r
2020-03-28,65226.745350238525\r
2020-04-02,73276.34293750992\r
2020-04-04,67492.82944322264\r
2020-04-07,71523.70179984318\r
2020-04-09,70363.61549337317\r
2020-04-12,70363.61549337317\r
2020-04-14,68636.07824275969\r
2020-04-17,68636.07824275969\r
2020-04-22,71523.70179984318\r
2020-04-24,68063.60680382287\r
2020-04-27,75636.38763046234\r
2020-05-04,61327.314291069626\r
2020-05-07,61327.314291069626\r
2020-05-09,53786.89284206174\r
2020-05-17,45606.06653261896\r
2020-05-19,51179.40838770575\r
2020-05-22,58053.01655988464\r
2020-05-24,58053.01655988464\r
2020-05-27,61879.17177978409\r
2020-05-29,47606.46823413646\r
2020-06-01,47606.46823413646\r
2020-06-21,65790.70402969362\r
2020-06-23,82261.28783245245\r
2020-06-26,82261.28783245245\r
2020-06-28,82261.28783245245\r
2020-07-01,65790.70402969362\r
2020-07-08,60777.20363512233\r
2020-07-11,58594.3226876986\r
2020-07-13,60228.84444948833\r
2020-07-18,54842.63280966454\r
2020-07-21,50663.416835528056\r
2020-07-23,50663.416835528056\r
2020-07-28,31604.400317369502\r
2020-07-31,32041.517844819853\r
2020-08-05,29450.834167084708\r
2020-08-07,23320.178144443405\r
2020-08-10,24905.448051890322\r
2020-08-15,21772.059615607468\r
2020-08-20,13958.253650406523\r
2020-08-25,13632.792381111847\r
2020-08-27,13632.792381111847\r
2020-09-01,13632.792381111847\r
2020-09-04,6438.016780485553\r
2020-09-09,8809.458718522843\r
2020-09-14,258.9421903868566\r
2020-10-31,7723.2188690343955\r
2020-11-10,7723.2188690343955\r
2020-11-18,3507.312039589366\r
2020-11-23,8809.458718522843\r
2020-11-25,8809.458718522843\r
2020-11-28,8809.458718522843\r
2020-12-13,3308.614870334712\r
2020-12-28,3916.8032477605475\r
2021-01-24,19521.214817261458\r
2021-01-29,19521.214817261458\r
2021-02-21,50663.416835528056\r
2021-02-23,59137.39923802331\r
2021-02-26,59137.39923802331\r
2021-02-28,69210.23959012392\r
2021-03-05,75043.90346050145\r
2021-03-10,75043.90346050145\r
2021-03-20,76826.27909279113\r
2021-03-23,78022.70967839318\r
2021-03-25,72690.46629820924\r
2021-03-28,72690.46629820924\r
2021-03-30,71523.70179984318\r
2021-04-02,70363.61549337317\r
2021-04-04,68063.60680382287\r
2021-04-07,64664.50210418664\r
2021-04-09,72690.46629820924\r
2021-04-14,52738.41526464302\r
2021-04-17,59682.24141133456\r
2021-04-19,60777.20363512233\r
2021-04-22,72106.25126897739\r
2021-04-24,66356.37380260692\r
2021-04-27,83486.7834131655\r
2021-05-12,52216.91302596007\r
2021-05-17,52216.91302596007\r
2021-05-22,52216.91302596007\r
2021-05-27,43636.16051502287\r
2021-05-29,43636.16051502287\r
2021-06-01,40263.41460711088\r
2021-06-03,40263.41460711088\r
2021-06-11,55905.59374709991\r
2021-06-13,56439.7693403717\r
2021-06-16,46103.32320792441\r
2021-06-18,47103.53003886088\r
2021-06-21,47103.53003886088\r
2021-06-26,62988.10890006663\r
2021-07-11,37913.49249282568\r
2021-07-18,37913.49249282568\r
2021-07-21,47606.46823413646\r
2021-07-23,37449.51654071955\r
2021-08-02,35160.08099962416\r
2021-08-10,29450.834167084708\r
2021-08-12,29450.834167084708\r
2021-08-15,37913.49249282568\r
2021-08-17,37913.49249282568\r
2021-08-20,36987.560262219675\r
2021-08-25,42178.98310488635\r
2021-08-27,49636.9827727834\r
2021-09-01,49126.55142454093\r
2021-09-04,59137.39923802331\r
2021-09-06,64103.97866689727\r
2021-09-24,33811.04913274505\r
2021-09-26,33811.04913274505\r
2021-09-29,33811.04913274505\r
2021-10-01,36527.6310471596\r
2021-10-11,45110.71575939067\r
2021-10-14,52216.91302596007\r
2021-10-16,43636.16051502287\r
2021-10-21,43636.16051502287\r
2021-10-24,46103.32320792441\r
2021-11-30,32041.517844819853\r
2021-12-03,32041.517844819853\r
2021-12-23,29450.834167084708\r
2022-01-14,12046.66327553835\r
2022-01-19,12046.66327553835\r
2022-01-22,12046.66327553835\r
2022-01-24,22155.565646671992\r
2022-01-27,21390.92272457006\r
2022-01-29,21390.92272457006\r
2022-02-01,62988.10890006663\r
2022-02-08,54313.85763362639\r
2022-02-11,54313.85763362639\r
2022-02-13,9945.185475025723\r
2022-02-18,9945.185475025723\r
2022-02-26,30736.543185991894\r
2022-02-28,33811.04913274505\r
2022-03-03,33811.04913274505\r
2022-03-05,33811.04913274505\r
2022-03-08,33811.04913274505\r
2022-03-10,46103.32320792441\r
2022-03-23,55905.59374709991\r
2022-03-25,62432.771502777294\r
2022-03-28,62432.771502777294\r
2022-04-04,55373.21321649951\r
2022-04-14,47103.53003886088\r
2022-04-17,51179.40838770575\r
2022-04-19,51179.40838770575\r
2022-04-27,51697.24226762099\r
2022-05-02,45606.06653261896\r
2022-05-04,45606.06653261896\r
2022-05-07,45606.06653261896\r
2022-05-09,57513.485696096795\r
2022-05-12,57513.485696096795\r
2022-05-14,57513.485696096795\r
2022-05-17,57513.485696096795\r
2022-05-19,60228.84444948833\r
2022-05-27,61879.17177978409\r
2022-05-29,57513.485696096795\r
2022-06-06,66356.37380260692\r
2022-06-11,81650.94163084438\r
2022-06-13,81650.94163084438\r
2022-06-16,60228.84444948833\r
2022-06-18,53786.89284206174\r
2022-06-21,58594.3226876986\r
2022-06-23,52216.91302596007\r
2022-06-28,52216.91302596007\r
2022-07-01,61879.17177978409\r
2022-07-03,57513.485696096795\r
2022-07-06,59682.24141133456\r
2022-07-08,57513.485696096795\r
2022-07-11,55905.59374709991\r
2022-07-13,55905.59374709991\r
2022-07-16,51179.40838770575\r
2022-07-18,44125.75652024069\r
2022-07-21,35613.88380448247\r
2022-07-26,33811.04913274505\r
2022-07-28,37913.49249282568\r
2022-07-31,30736.543185991894\r
2022-08-02,18428.643173851273\r
2022-08-05,18428.643173851273\r
2022-08-07,14950.765681325984\r
2022-08-10,14950.765681325984\r
2022-08-12,14950.765681325984\r
2022-08-15,14286.415158537813\r
2022-08-17,14286.415158537813\r
2022-08-22,13958.253650406523\r
2022-08-25,10236.641680964412\r
2022-08-30,10236.641680964412\r
2022-09-01,9371.249458125392\r
2022-09-04,9656.712749143458\r
2022-09-06,10531.056115019903\r
2022-09-09,9371.249458125392\r
2022-09-11,10236.641680964412\r
2022-09-19,10236.641680964412\r
2022-09-21,10828.40419658696\r
2022-10-04,8533.18700860622\r
2022-10-06,10236.641680964412\r
2022-10-09,10236.641680964412\r
2022-10-11,9656.712749143458\r
2022-10-16,10828.40419658696\r
2022-10-26,7990.036588217228\r
2022-10-31,7990.036588217228\r
2022-11-20,24905.448051890322\r
2022-11-23,24905.448051890322\r
2022-12-05,18069.41031749777\r
2023-01-17,19521.214817261458\r
2023-01-24,19521.214817261458\r
2023-02-03,23320.178144443405\r
2023-02-08,27766.9470833651\r
2023-02-11,22929.63675992418\r
2023-02-13,27766.9470833651\r
2023-02-16,26527.15699896335\r
2023-02-21,29877.248366166616\r
2023-02-26,33811.04913274505\r
2023-03-03,52216.91302596007\r
2023-03-05,53786.89284206174\r
2023-03-15,43148.495335560605\r
2023-03-28,52738.41526464302\r
2023-04-04,54313.85763362639\r
2023-04-07,54313.85763362639\r
2023-04-09,34708.3357073763\r
2023-04-19,55905.59374709991\r
2023-05-02,66923.75036396668\r
`;export{n as default};
