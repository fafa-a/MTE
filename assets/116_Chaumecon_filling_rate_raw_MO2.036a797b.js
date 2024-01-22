const n=`date,value\r
2017-02-25,87.78414771462748\r
2017-03-14,93.843695392018\r
2017-03-17,94.26932995125287\r
2017-03-27,88.47112934692709\r
2017-04-03,88.97800000775248\r
2017-04-06,86.33941085179879\r
2017-04-23,92.63747746361453\r
2017-05-16,73.40754717844062\r
2017-05-23,73.40754717844062\r
2017-05-26,95.43038263532587\r
2017-06-02,92.53173250175568\r
2017-06-05,90.50549476170929\r
2017-06-12,89.17325602350863\r
2017-07-05,86.06958233598927\r
2017-07-22,75.8587361943188\r
2017-08-21,58.321256331362726\r
2017-08-24,58.321256331362726\r
2017-08-26,58.321256331362726\r
2017-08-29,57.24683013556218\r
2017-08-31,59.70317314886695\r
2017-09-03,53.23032558330437\r
2017-10-05,42.868178128708436\r
2017-10-13,42.93637247397005\r
2017-10-15,44.8731351109243\r
2017-10-18,44.90289057175194\r
2017-10-25,45.37008024536575\r
2017-10-28,42.73191847496871\r
2017-11-14,27.200968467672972\r
2017-11-17,27.241635708437546\r
2017-11-22,28.696727167508783\r
2017-11-27,26.136094533275823\r
2017-11-29,26.088092595412405\r
2017-12-02,26.088092595412405\r
2018-02-25,89.48601869586628\r
2018-02-27,86.1466420078238\r
2018-03-14,77.65021721536681\r
2018-03-24,83.5039255409071\r
2018-04-18,94.4691090992359\r
2018-04-21,96.2746608858916\r
2018-05-11,97.43192445239606\r
2018-05-18,95.81865221547031\r
2018-05-21,95.81865221547031\r
2018-06-22,87.74532550869986\r
2018-06-25,90.2567388682807\r
2018-06-27,95.99290705430079\r
2018-07-02,96.70462971007203\r
2018-07-07,95.28327160655833\r
2018-07-12,92.46566623267877\r
2018-07-15,92.45245522521131\r
2018-07-17,92.45245522521131\r
2018-07-27,88.51007860857592\r
2018-08-01,86.31369846413425\r
2018-08-04,90.61031532469144\r
2018-08-06,81.18234759079277\r
2018-08-11,85.40287844606581\r
2018-08-16,77.78586316072045\r
2018-08-19,68.64848416220131\r
2018-08-21,68.64848416220131\r
2018-08-26,63.81144512140735\r
2018-09-03,57.46545688796145\r
2018-09-05,57.46545688796145\r
2018-09-08,40.9093083139786\r
2018-09-10,40.9093083139786\r
2018-09-18,40.9093083139786\r
2018-09-25,34.32992727375974\r
2018-09-28,26.120089997934574\r
2018-09-30,26.650290239816677\r
2018-10-05,25.848608350761864\r
2018-10-08,24.586211338174365\r
2018-10-10,23.15037471058505\r
2018-10-13,21.26014888329599\r
2018-10-15,21.26014888329599\r
2018-10-18,20.841491628709157\r
2018-10-20,21.622682539550304\r
2018-10-23,21.98017126100839\r
2018-11-04,21.304410053366798\r
2018-11-09,21.304410053366798\r
2018-11-19,24.625281099171406\r
2019-02-15,66.22401404021167\r
2019-02-17,70.44201483050084\r
2019-02-20,71.32181070705495\r
2019-02-22,71.66777617162452\r
2019-02-25,68.74242268195661\r
2019-02-27,71.03599692114102\r
2019-03-04,70.26420619878117\r
2019-03-19,76.4948955897059\r
2019-03-22,80.9566326885956\r
2019-03-24,77.69953214695599\r
2019-03-27,78.29227958323727\r
2019-03-29,77.20694197843319\r
2019-04-01,77.20694197843319\r
2019-04-06,78.29227958323727\r
2019-04-11,79.5951359609424\r
2019-04-13,81.7728889004336\r
2019-04-21,80.14362830326154\r
2019-05-01,74.16859833988583\r
2019-05-13,88.44516695083449\r
2019-05-16,85.54374042060707\r
2019-05-23,85.33888072219881\r
2019-05-28,85.92837733317123\r
2019-05-31,85.47970083426502\r
2019-06-02,89.82533494748279\r
2019-06-05,89.82533494748279\r
2019-06-27,91.4637654002147\r
2019-06-30,91.4637654002147\r
2019-07-02,91.75334396039871\r
2019-07-05,91.34540612498874\r
2019-07-07,91.34540612498874\r
2019-07-10,90.88569824306502\r
2019-07-15,90.19132193849079\r
2019-07-17,87.26707864842177\r
2019-07-20,88.75691516201553\r
2019-07-22,84.95529417766258\r
2019-07-25,85.41568027455332\r
2019-08-01,83.84677386438126\r
2019-08-04,76.98568202435641\r
2019-08-09,76.98568202435641\r
2019-08-14,67.93387989185082\r
2019-08-21,55.466589126418086\r
2019-08-24,51.658418792519946\r
2019-08-26,52.56341349917778\r
2019-08-29,52.56341349917778\r
2019-08-31,48.28476545487164\r
2019-09-03,45.94925322158706\r
2019-09-10,45.91922455349696\r
2019-09-13,42.13055366100079\r
2019-09-15,41.09110716448205\r
2019-09-18,40.9475551791846\r
2019-09-20,41.5614312270095\r
2019-09-30,43.131450314887246\r
2019-10-03,45.969276659753376\r
2019-10-13,34.09838077687149\r
2020-01-21,60.997050339831915\r
2020-01-23,59.625446718946186\r
2020-01-26,59.625446718946186\r
2020-02-07,65.84254611395092\r
2020-02-10,64.47422168685192\r
2020-02-15,74.09598315755049\r
2020-02-22,71.72749249764226\r
2020-03-08,85.13421592288088\r
2020-03-28,89.85145729529309\r
2020-03-31,89.04306648053175\r
2020-04-02,85.86422364880355\r
2020-04-05,85.91554507571894\r
2020-04-07,84.45765708175811\r
2020-04-10,84.96806934987261\r
2020-04-12,86.00538684215554\r
2020-04-15,86.85429633110424\r
2020-04-20,88.27648506726932\r
2020-04-22,91.13513978619103\r
2020-04-25,93.71084132930969\r
2020-04-27,94.70906548480617\r
2020-05-07,98.26963014230911\r
2020-05-10,95.32338386723977\r
2020-05-12,92.92852308799867\r
2020-05-15,90.09976984976737\r
2020-05-17,94.84247891174836\r
2020-05-20,93.03444763763983\r
2020-05-25,94.40249740870786\r
2020-05-27,99.25960431227611\r
2020-05-30,100.0\r
2020-06-01,100.0\r
2020-06-24,99.0558636989894\r
2020-07-04,100.0\r
2020-07-06,99.12375878433132\r
2020-07-09,98.6082191322409\r
2020-07-11,95.5106629576988\r
2020-07-14,95.55081316069352\r
2020-07-19,92.33358985819748\r
2020-07-21,89.64256289340501\r
2020-07-24,85.90271357853256\r
2020-07-29,81.98690691084681\r
2020-07-31,82.39036608731759\r
2020-08-05,76.56843416472653\r
2020-08-08,70.79816667292786\r
2020-08-10,69.720038701638\r
2020-08-15,65.9580501311755\r
2020-08-20,61.569388038524764\r
2020-08-25,51.658418792519946\r
2020-09-02,51.25007139711529\r
2020-09-04,46.08948994880859\r
2020-09-07,42.97535997533826\r
2020-09-09,38.239496568718124\r
2020-09-12,34.96538909461118\r
2020-09-14,34.767991191138826\r
2020-09-17,33.716804040352116\r
2020-09-19,33.92956706097603\r
2020-09-22,32.29458476406274\r
2020-11-06,18.868409402866185\r
2020-11-18,19.21426584860311\r
2020-11-21,19.21426584860311\r
2020-11-23,22.975212212992727\r
2020-11-28,22.815742487164346\r
2021-02-21,78.15628381479706\r
2021-02-24,81.73514405487636\r
2021-03-01,80.66858211748222\r
2021-03-06,83.83406584206692\r
2021-03-08,84.21563879974495\r
2021-03-23,88.30242781132576\r
2021-03-28,95.09616962384843\r
2021-03-31,91.8323829421304\r
2021-04-02,96.90643916208245\r
2021-04-07,96.20754692914514\r
2021-04-27,100.0\r
2021-06-01,97.59383896553838\r
2021-06-11,95.59097005745197\r
2021-06-14,97.93150331033021\r
2021-06-16,100.0\r
2021-06-19,100.0\r
2021-06-21,100.0\r
2021-07-19,92.24118096222544\r
2021-07-21,95.97949837707341\r
2021-09-02,71.34564906977258\r
2021-09-04,71.30989271079899\r
2021-09-07,71.81112849770568\r
2021-09-17,66.97794452841416\r
2021-09-22,60.359890701237426\r
2021-09-24,63.378686453416655\r
2021-09-27,62.143844119098\r
2021-10-02,62.143844119098\r
2021-10-04,62.675116994785775\r
2021-10-14,65.18570786466597\r
2021-10-17,63.89129120316321\r
2021-10-19,66.98956989252781\r
2021-10-22,64.31399244524904\r
2021-10-24,66.89658939248831\r
2021-11-11,61.96339480422709\r
2022-01-25,73.32317823633215\r
2022-02-09,62.935755013023275\r
2022-02-26,67.5252013809313\r
2022-03-06,71.03599692114102\r
2022-03-08,69.92094855431628\r
2022-03-23,79.28415861239606\r
2022-03-26,74.07178436747522\r
2022-03-28,73.9266574842226\r
2022-04-17,80.71864860871497\r
2022-04-22,80.64355349314118\r
2022-04-27,79.65738937042579\r
2022-05-07,88.43218688635889\r
2022-05-15,91.3322588476122\r
2022-05-17,91.3322588476122\r
2022-05-20,90.61031532469144\r
2022-05-25,90.61031532469144\r
2022-06-11,84.17745057518033\r
2022-06-16,92.37320490669899\r
2022-06-19,90.88569824306502\r
2022-06-21,91.96417456606882\r
2022-06-29,85.69751303886814\r
2022-07-04,82.03729633565861\r
2022-07-06,85.97971396517033\r
2022-07-11,86.77698609958884\r
2022-07-14,87.39623230009921\r
2022-07-16,87.13800077855687\r
2022-07-19,86.30084340960028\r
2022-07-24,85.78726431969336\r
2022-07-31,82.06249565349925\r
2022-08-03,76.74013316402211\r
2022-08-05,74.25335171122113\r
2022-08-08,70.05107122743112\r
2022-08-10,68.91869472478841\r
2022-08-13,67.81701479198351\r
2022-08-20,68.28495391534493\r
2022-09-19,53.53843702393307\r
2022-09-22,52.28915305821998\r
2022-09-24,51.43837967659831\r
2022-10-09,54.34924420117787\r
2022-10-12,54.34924420117787\r
2022-10-19,54.34924420117787\r
2022-10-22,53.410857079102236\r
2022-10-24,53.410857079102236\r
2022-11-01,53.410857079102236\r
2022-11-13,55.898735986495154\r
2023-02-11,72.76971179650155\r
2023-02-14,70.82193545830194\r
2023-02-16,70.82193545830194\r
2023-03-01,76.36014768408545\r
2023-04-05,87.56424530301999\r
2023-04-20,93.93673765556628\r
2023-05-25,97.31055856752077\r
2023-06-01,96.05996158564653\r
2023-06-04,95.55081316069352\r
2023-06-06,96.7987866852571\r
2023-06-09,95.60435717710739\r
2023-06-14,99.1780881390995\r
2023-06-16,99.88544386322464\r
2023-06-19,99.70841799730204\r
2023-06-24,100.0\r
2023-09-02,69.53115663484397\r
2023-09-04,65.76174109262158\r
2023-09-07,65.93494290325015\r
2023-09-09,66.00427422211894\r
2023-09-14,65.40436364652794\r
2023-09-24,64.56585225070434\r
2023-10-02,66.27031196593045\r
2023-10-07,59.54776046238932\r
2023-10-09,57.10490007658847\r
2023-10-17,57.17038889050555\r
2023-10-19,56.277955080018174\r
2023-11-08,44.043163127847265\r
`;export{n as default};
