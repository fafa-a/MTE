const n=`date,value\r
2017-01-03,52.182758746144984\r
2017-02-25,83.80962497121004\r
2017-03-14,71.94654679470483\r
2017-03-17,83.08379211988012\r
2017-03-27,72.80992319235368\r
2017-04-23,83.62796045353382\r
2017-05-16,100.0\r
2017-05-26,88.76620742890002\r
2017-06-25,89.6949452164303\r
2017-07-05,79.66628445347051\r
2017-07-07,100.0\r
2017-07-17,71.2584349477403\r
2017-08-04,76.82742129272926\r
2017-08-06,68.52914393814483\r
2017-08-14,74.72194930885112\r
2017-08-19,53.5757278530474\r
2017-08-21,53.73129063048901\r
2017-08-24,59.43518567715661\r
2017-08-26,49.88973915790626\r
2017-08-29,47.63288949315784\r
2017-09-20,44.973134713615394\r
2017-09-23,48.38112278259545\r
2017-10-05,40.66013262360123\r
2017-10-10,42.36712825115595\r
2017-10-15,42.223945498491986\r
2017-10-18,43.085572085621415\r
2017-10-25,31.204105133095727\r
2017-10-28,35.68819231801722\r
2017-10-30,37.457498818758275\r
2017-11-17,36.773466331553614\r
2017-11-22,41.36840564201682\r
2017-11-27,41.93808738955844\r
2017-12-19,52.02877539908657\r
2017-12-24,80.20255915369118\r
2018-02-02,71.7743027473899\r
2018-02-10,66.00437557816963\r
2018-02-12,64.33963444707122\r
2018-02-25,70.57263193750039\r
2018-03-14,90.62704781372427\r
2018-04-06,98.58813874253632\r
2018-04-21,100.0\r
2018-04-26,89.50892813584197\r
2018-05-06,85.08511836890719\r
2018-05-11,87.28725231874623\r
2018-06-22,66.50668300352937\r
2018-06-25,64.50544071233595\r
2018-07-02,69.54827131652516\r
2018-07-07,69.20797956825278\r
2018-07-10,94.01031630109607\r
2018-07-20,86.55102893171191\r
2018-07-25,77.53376737405439\r
2018-07-27,82.36016324334115\r
2018-07-30,72.80992319235368\r
2018-08-06,67.0103165667148\r
2018-08-11,58.791553380832895\r
2018-08-19,59.27404861521951\r
2018-08-21,50.19339616949791\r
2018-08-26,47.185904480511965\r
2018-09-03,50.497694990218875\r
2018-09-08,41.93808738955844\r
2018-09-10,45.85379444003685\r
2018-09-20,36.36516085172952\r
2018-09-23,37.87002369131086\r
2018-09-28,32.501113593817394\r
2018-10-03,30.81860523874559\r
2018-10-05,27.179373297456287\r
2018-10-20,19.295684728174574\r
2018-10-23,18.217368919609513\r
2018-10-25,22.198725748564204\r
2018-10-30,23.236272992716597\r
2018-11-12,12.593755088690648\r
2018-11-22,20.5065726282231\r
2018-11-29,23.004280891318835\r
2018-12-27,31.332975977980237\r
2019-01-03,23.004280891318835\r
2019-01-16,30.17982824365276\r
2019-02-12,70.91524441639832\r
2019-02-15,69.71863529527515\r
2019-02-17,67.34680752387041\r
2019-02-20,67.68388563955864\r
2019-02-22,72.63696077084911\r
2019-02-25,79.30946538419546\r
2019-02-27,70.57263193750039\r
2019-03-12,48.832010964256575\r
2019-03-22,85.6338115700651\r
2019-03-24,83.08379211988012\r
2019-03-27,72.29146643345598\r
2019-03-29,88.02564699452998\r
2019-04-01,78.5975044165652\r
2019-04-13,73.15627802467074\r
2019-05-01,92.31327831213514\r
2019-05-06,93.25474676564326\r
2019-05-13,87.84084507045364\r
2019-05-16,100.0\r
2019-05-23,88.95168529341771\r
2019-05-31,98.20376116078667\r
2019-06-02,69.20797956825278\r
2019-06-17,80.20255915369118\r
2019-06-27,46.44420118912394\r
2019-06-30,90.62704781372427\r
2019-07-05,98.97303950316845\r
2019-07-10,97.24511018249102\r
2019-07-15,75.24640376300718\r
2019-07-22,52.182758746144984\r
2019-07-25,75.24640376300718\r
2019-08-04,53.10998396808252\r
2019-08-09,66.00437557816963\r
2019-08-14,53.5757278530474\r
2019-08-24,46.88873162204598\r
2019-08-26,53.10998396808252\r
2019-08-29,39.53579815277462\r
2019-09-03,35.958447435985086\r
2019-09-05,37.73234040587578\r
2019-09-13,26.69002035907106\r
2019-10-08,23.12017549637608\r
2019-10-13,31.850307602971622\r
2019-10-25,31.980101426644257\r
2019-12-02,79.1312653530971\r
2019-12-29,71.60220268729502\r
2020-01-06,56.875372631334066\r
2020-01-11,80.7400869061606\r
2020-01-16,65.83723499305357\r
2020-02-05,61.217727672000045\r
2020-02-20,65.83723499305357\r
2020-02-22,63.34792643835758\r
2020-03-13,79.1312653530971\r
2020-03-18,83.44643341207664\r
2020-03-28,94.01031630109607\r
2020-04-05,88.39565683579538\r
2020-04-10,90.44035861568369\r
2020-05-07,46.29635270298968\r
2020-05-17,66.50668300352937\r
2020-05-20,74.72194930885112\r
2020-05-22,100.0\r
2020-05-25,91.93762432990731\r
2020-06-19,86.73488091604264\r
2020-06-21,79.30946538419546\r
2020-06-24,93.06618671732392\r
2020-06-26,65.00375135195752\r
2020-07-04,95.33766849609678\r
2020-07-09,91.37514548521747\r
2020-07-19,70.23059835918174\r
2020-07-29,71.08676747836941\r
2020-07-31,38.42250228841253\r
2020-08-05,30.17982824365276\r
2020-08-08,45.55957985824228\r
2020-08-20,30.05263339416617\r
2020-08-25,29.545730469014696\r
2020-09-02,24.52664938440769\r
2020-09-04,25.720656425904448\r
2020-09-14,15.215027720858618\r
2020-09-17,23.004280891318835\r
2020-11-06,75.77213570198418\r
2020-11-11,43.085572085621415\r
2020-11-18,45.266026184561845\r
2020-11-21,48.231151016228026\r
2020-11-23,51.261242273642104\r
2021-01-10,54.0428875803348\r
2021-01-17,76.29914243592182\r
2021-02-14,70.23059835918174\r
2021-02-24,61.707055281495414\r
2021-03-01,60.081257170199244\r
2021-03-06,89.13729808946705\r
2021-03-23,83.99142687482436\r
2021-03-28,95.90851725862211\r
2021-03-31,94.19954061481207\r
2021-04-02,90.06738306932542\r
2021-04-15,100.0\r
2021-04-17,85.81698240834027\r
2021-05-27,80.02366156678474\r
2021-06-11,77.71070579185661\r
2021-06-14,81.63874418608263\r
2021-06-16,70.91524441639832\r
2021-07-01,72.9830289779701\r
2021-07-11,84.90249403516002\r
2021-07-19,71.43024671910386\r
2021-08-10,84.90249403516002\r
2021-08-20,65.67024220838665\r
2021-08-28,63.34792643835758\r
2021-08-30,67.0103165667148\r
2021-09-22,57.35234087879449\r
2021-09-24,63.34792643835758\r
2021-10-07,57.67109045054063\r
2021-10-12,58.31043472299962\r
2021-10-14,60.405205121469876\r
2021-10-24,53.88701058546565\r
2021-10-27,59.59647518848368\r
2021-11-18,79.84490330192628\r
2021-12-16,71.7743027473899\r
2021-12-18,65.33670049539627\r
2021-12-21,68.86827015275324\r
2022-01-12,65.00375135195752\r
2022-01-15,67.68388563955864\r
2022-01-17,66.17166385032972\r
2022-01-22,72.11893472479551\r
2022-01-25,65.67024220838665\r
2022-01-27,68.52914393814483\r
2022-02-09,74.37302405632403\r
2022-03-01,77.88778477426078\r
2022-03-23,84.35544247967593\r
2022-03-26,68.86827015275324\r
2022-04-05,100.0\r
2022-04-10,85.81698240834027\r
2022-04-15,83.44643341207664\r
2022-04-17,81.45873539559926\r
2022-05-15,84.90249403516002\r
2022-05-17,73.67688370449213\r
2022-05-22,78.95320511784469\r
2022-05-27,82.72170182062445\r
2022-06-01,88.95168529341771\r
2022-06-04,76.12333204603208\r
2022-06-06,86.3673130011386\r
2022-06-11,71.7743027473899\r
2022-06-16,65.33670049539627\r
2022-06-19,64.50544071233595\r
2022-06-29,73.67688370449213\r
2022-07-06,72.29146643345598\r
2022-07-11,65.83723499305357\r
2022-07-14,70.74386586747727\r
2022-07-16,65.83723499305357\r
2022-07-19,62.19773944427143\r
2022-07-21,50.34546542720795\r
2022-07-24,60.24315523208795\r
2022-07-26,56.875372631334066\r
2022-07-31,49.5867251355576\r
2022-08-03,45.119497592520574\r
2022-08-08,36.90992101997154\r
2022-08-10,36.09384134456256\r
2022-08-13,40.09659145337165\r
2022-08-28,15.516816222853533\r
2022-08-30,17.265520135286433\r
2022-09-04,16.848221604960585\r
2022-09-12,14.617681136739336\r
2022-09-19,13.256690035684157\r
2022-09-22,9.37753935087124\r
2022-10-04,9.12468328011999\r
2022-10-07,10.41276867792519\r
2022-10-09,9.37753935087124\r
2022-10-19,7.5803217252001485\r
2022-10-22,4.088797593148026\r
2022-10-24,5.0093832754380525\r
2022-11-11,6.433354146220714\r
2022-12-28,16.95221233737707\r
2023-01-20,5.634804783655209\r
2023-02-04,36.63718794174366\r
2023-02-06,35.958447435985086\r
2023-02-09,38.83868862217241\r
2023-02-11,37.457498818758275\r
2023-02-14,39.53579815277462\r
2023-02-16,39.81585058918727\r
2023-02-19,44.973134713615394\r
2023-03-16,74.89662535070057\r
2023-03-28,69.88914453351178\r
2023-04-05,69.3780527048908\r
2023-04-07,64.50544071233595\r
2023-05-17,96.86256861737745\r
2023-06-16,58.15036833479215\r
2023-06-24,60.081257170199244\r
2023-07-06,64.0084685335522\r
2023-07-09,81.09913363055269\r
2023-07-14,83.44643341207664\r
2023-07-31,54.19892147783305\r
2023-08-08,49.88973915790626\r
2023-08-10,67.51527324242133\r
2023-08-13,52.95505128485157\r
2023-08-20,38.561057345923636\r
2023-08-23,34.747914169894244\r
2023-09-04,31.332975977980237\r
2023-09-07,32.63182473177314\r
2023-09-14,37.04655180942835\r
2023-09-24,31.591272600301178\r
2023-09-27,30.69047693029063\r
2023-09-29,33.81642425279806\r
2023-10-02,25.84114224368034\r
2023-10-04,28.043168923481236\r
2023-10-07,30.69047693029063\r
2023-10-09,24.172320462741542\r
2023-10-12,23.585779762469507\r
`;export{n as default};
