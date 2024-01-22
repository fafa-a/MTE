const n=`date,value\r
2017-01-19,100.0\r
2017-01-26,100.0\r
2017-01-29,99.90036940972226\r
2017-02-15,100.0\r
2017-02-18,100.0\r
2017-02-25,100.0\r
2017-03-10,98.73961479598454\r
2017-03-17,98.73961479598454\r
2017-03-30,97.29867828307232\r
2017-04-06,98.59768195273728\r
2017-04-09,97.36943757597433\r
2017-04-19,96.82723209988156\r
2017-04-29,96.49751253203216\r
2017-05-09,92.30327308416018\r
2017-05-16,91.65082924510138\r
2017-05-19,91.58098351422105\r
2017-05-26,92.86329985627142\r
2017-06-05,94.80563905876528\r
2017-06-18,96.82723209988156\r
2017-06-25,96.82723209988156\r
2017-06-28,96.82723209988156\r
2017-07-05,98.5503807453489\r
2017-08-02,93.26042479048317\r
2017-08-04,93.26042479048317\r
2017-08-07,95.36888279162213\r
2017-08-12,89.9776969429137\r
2017-08-14,90.25609232237919\r
2017-08-17,90.58112001115369\r
2017-08-22,88.9122290972351\r
2017-08-24,89.02790874366885\r
2017-08-27,88.21883025155243\r
2017-08-29,89.30567151476355\r
2017-09-01,88.05720503202367\r
2017-09-03,88.95849708177114\r
2017-09-13,87.41134130148103\r
2017-09-16,73.82461253179743\r
2017-09-21,76.00977534825685\r
2017-09-23,76.00977534825685\r
2017-09-26,80.60174813575057\r
2017-09-28,80.60174813575057\r
2017-10-08,80.33003968373372\r
2017-10-11,81.69054551076603\r
2017-10-13,80.10376653008267\r
2017-10-16,81.10039098609163\r
2017-10-18,81.10039098609163\r
2017-10-23,80.0585283448352\r
2017-10-26,80.39794833223726\r
2017-10-28,81.46345433157663\r
2017-10-31,80.44322760584015\r
2017-11-05,82.75968658508815\r
2017-11-07,81.25918836789762\r
2017-11-15,80.51115677374943\r
2017-11-17,85.34229887620512\r
2017-11-20,85.41109520249329\r
2017-11-22,84.56344026605231\r
2017-11-25,84.56344026605231\r
2017-11-27,84.56344026605231\r
2017-11-30,84.54055588321033\r
2017-12-05,88.86596627987186\r
2017-12-07,88.86596627987186\r
2017-12-12,95.36888279162213\r
2017-12-15,93.86849473734009\r
2017-12-20,95.97987016267562\r
2017-12-25,95.8858176183246\r
2017-12-27,95.2280047430379\r
2018-01-29,93.56435373874514\r
2018-01-31,93.56435373874514\r
2018-02-25,97.39302646018939\r
2018-03-02,97.55818297776102\r
2018-03-07,97.55818297776102\r
2018-03-30,97.08646668178184\r
2018-04-04,94.19626789236229\r
2018-04-06,94.19626789236229\r
2018-04-09,94.19626789236229\r
2018-04-19,96.92148200655888\r
2018-04-21,100.0\r
2018-04-24,96.35627808780363\r
2018-04-26,96.35627808780363\r
2018-05-06,94.03235066125497\r
2018-05-11,100.0\r
2018-05-21,100.0\r
2018-05-24,99.66324438999473\r
2018-06-03,96.12098607416638\r
2018-06-20,96.54460054452932\r
2018-06-23,96.80367269884997\r
2018-06-25,93.77489032998596\r
2018-07-08,94.57116573743794\r
2018-07-10,94.57116573743794\r
2018-07-13,92.58319558407706\r
2018-07-15,92.58319558407706\r
2018-07-18,92.58319558407706\r
2018-07-23,94.75873442621003\r
2018-07-25,92.8399508985467\r
2018-07-30,92.8399508985467\r
2018-08-02,93.96211918330296\r
2018-08-04,94.99330738822192\r
2018-08-12,92.02353267093089\r
2018-08-19,90.23288565864725\r
2018-08-22,83.90033369499498\r
2018-08-27,81.12307224387442\r
2018-09-01,76.83832625448068\r
2018-09-03,73.46915519171448\r
2018-09-08,73.84684083573659\r
2018-09-11,74.33622644139956\r
2018-09-16,71.47660785344975\r
2018-09-18,71.47660785344975\r
2018-09-23,71.71950940380327\r
2018-09-26,67.22212241201116\r
2018-09-28,68.90404399072206\r
2018-10-03,64.72693124212881\r
2018-10-06,65.96114620908187\r
2018-10-13,59.79844837720726\r
2018-11-17,55.770649600186296\r
2018-11-22,55.770649600186296\r
2018-11-27,53.375042594461256\r
2018-12-07,56.90326968094812\r
2018-12-10,56.90326968094812\r
2018-12-20,77.7362187851209\r
2018-12-27,77.7362187851209\r
2019-01-16,76.47979740151702\r
2019-01-19,76.47979740151702\r
2019-01-24,76.47979740151702\r
2019-01-26,76.47979740151702\r
2019-02-13,93.05013686765152\r
2019-02-15,97.8650614510491\r
2019-02-18,97.8650614510491\r
2019-02-20,97.20434973827261\r
2019-02-23,97.62898272315849\r
2019-02-25,97.06289375545224\r
2019-02-28,97.27509430591824\r
2019-03-12,96.92148200655888\r
2019-03-20,94.1025933997099\r
2019-03-22,95.36888279162213\r
2019-03-25,94.94638283878282\r
2019-03-27,95.83879876929332\r
2019-03-30,94.80563905876528\r
2019-04-01,94.80563905876528\r
2019-04-09,95.43933857351658\r
2019-04-16,90.88315576384024\r
2019-04-19,90.88315576384024\r
2019-05-01,91.3017149560224\r
2019-05-06,93.16695091297942\r
2019-05-09,93.073497160063\r
2019-05-11,93.073497160063\r
2019-05-14,93.98552842449027\r
2019-05-16,93.98552842449027\r
2019-06-08,93.42405246627858\r
2019-06-13,100.0\r
2019-06-28,100.0\r
2019-07-05,99.68695144823961\r
2019-07-08,99.68695144823961\r
2019-07-10,98.73961479598454\r
2019-07-13,98.43214904656323\r
2019-07-15,98.1721466050175\r
2019-07-20,98.1721466050175\r
2019-07-23,99.56842826185164\r
2019-07-25,99.66324438999473\r
2019-07-28,98.9289267197846\r
2019-08-09,96.47397037493319\r
2019-08-14,93.63452131631715\r
2019-08-17,90.74372783210195\r
2019-08-22,92.95670828668537\r
2019-08-24,92.070143414845\r
2019-08-29,93.05013686765152\r
2019-09-03,93.28379640297621\r
2019-09-06,93.28379640297621\r
2019-09-08,94.1025933997099\r
2019-09-11,90.90639821860293\r
2019-09-13,84.35752869991082\r
2019-09-16,84.4261539156813\r
2019-09-18,84.4261539156813\r
2019-09-21,79.58385895292525\r
2019-09-26,79.58385895292525\r
2019-10-08,71.41039268836079\r
2019-10-11,71.49868250184281\r
2019-10-13,69.23272588555082\r
2019-10-26,70.26476267376918\r
2019-12-05,95.86230757506932\r
2019-12-07,95.86230757506932\r
2019-12-10,96.00338639073072\r
2019-12-15,92.76991158797522\r
2019-12-17,92.76991158797522\r
2019-12-20,92.76991158797522\r
2019-12-25,89.62996257273034\r
2019-12-27,90.14007181528422\r
2019-12-30,89.95450566322836\r
2020-01-09,92.23332089791586\r
2020-01-11,93.44743287321059\r
2020-01-14,93.44743287321059\r
2020-01-16,93.0267778339276\r
2020-01-19,93.073497160063\r
2020-01-29,94.43054159385844\r
2020-01-31,94.1728473938698\r
2020-02-03,94.5477252614112\r
2020-02-05,96.56814639958428\r
2020-02-10,96.56814639958428\r
2020-02-15,95.69777193140703\r
2020-02-18,94.87600534715102\r
2020-02-20,94.45397583176953\r
2020-02-23,93.35391878105985\r
2020-03-11,94.92292243039316\r
2020-03-21,96.02690385522686\r
2020-03-24,96.02690385522686\r
2020-03-26,95.0167715289205\r
2020-03-31,95.69777193140703\r
2020-04-03,95.69777193140703\r
2020-04-05,94.75873442621003\r
2020-04-08,96.3327433312538\r
2020-04-10,97.41661657074565\r
2020-04-15,97.29867828307232\r
2020-04-25,97.11004083666121\r
2020-05-18,95.7212733086675\r
2020-05-20,96.82723209988156\r
2020-05-25,93.70470018167264\r
2020-05-28,93.70470018167264\r
2020-05-30,94.80563905876528\r
2020-06-12,95.41585207204638\r
2020-06-14,95.32191847571525\r
2020-06-24,91.46459936865999\r
2020-07-04,91.46459936865999\r
2020-07-07,92.41988534860778\r
2020-07-09,93.68130597265394\r
2020-07-19,93.77489032998596\r
2020-07-22,91.34824700046568\r
2020-07-24,90.53467213433515\r
2020-07-27,87.04273518834444\r
2020-07-29,87.04273518834444\r
2020-08-03,87.04273518834444\r
2020-08-06,82.69135448417981\r
2020-08-08,77.7362187851209\r
2020-08-18,69.62758662690892\r
2020-08-21,69.62758662690892\r
2020-08-31,53.60320795492234\r
2020-09-02,49.52865876546867\r
2020-09-05,49.52865876546867\r
2020-09-07,49.52865876546867\r
2020-09-10,49.671521417133214\r
2020-09-12,46.85139170766568\r
2020-09-17,48.81567431489843\r
2020-09-30,26.457016610763663\r
2020-10-12,26.457016610763663\r
2020-10-30,89.83856851702\r
2020-11-09,89.83856851702\r
2020-11-11,91.86043497734903\r
2020-11-14,90.65080141207996\r
2020-11-21,90.55789543357315\r
2020-11-26,91.06913110673518\r
2020-11-29,89.76902163787386\r
2020-12-26,94.21968964077865\r
2021-01-03,96.56814639958428\r
2021-01-08,96.56814639958428\r
2021-01-10,96.56814639958428\r
2021-01-18,95.65077289313906\r
2021-02-14,97.8650614510491\r
2021-02-17,99.47363150934072\r
2021-02-19,97.74700678954484\r
2021-02-24,98.5503807453489\r
2021-02-27,98.05401249472506\r
2021-03-01,97.29867828307232\r
2021-03-04,97.93590892484197\r
2021-03-09,95.74477592444751\r
2021-03-14,98.24304172186037\r
2021-03-21,96.37981407820806\r
2021-03-24,97.27509430591824\r
2021-03-29,96.00338639073072\r
2021-03-31,97.08646668178184\r
2021-04-03,96.70944740240147\r
2021-04-05,97.81783591638245\r
2021-04-08,96.7330018800199\r
2021-04-15,97.41661657074565\r
2021-04-20,97.27509430591824\r
2021-04-23,97.51098927299387\r
2021-05-03,95.60377881103295\r
2021-05-08,93.51758162707321\r
2021-05-20,92.8399508985467\r
2021-05-28,93.49419745378714\r
2021-05-30,93.05013686765152\r
2021-06-07,93.63452131631715\r
2021-06-09,95.60377881103295\r
2021-06-14,96.80367269884997\r
2021-06-22,96.00338639073072\r
2021-08-11,82.16787803809247\r
2021-08-26,67.78904564138021\r
2021-08-28,67.78904564138021\r
2021-08-31,65.15941899961827\r
2021-09-05,65.15941899961827\r
2021-09-12,54.184932824103214\r
2021-09-17,49.28395709065358\r
2021-09-22,49.28395709065358\r
2021-09-25,44.08714535865698\r
2021-09-27,44.08714535865698\r
2021-09-30,44.84470594599692\r
2021-10-07,47.659305850520646\r
2021-10-12,47.5783811956815\r
2021-10-15,47.618839833369634\r
2021-10-17,46.6498775490569\r
2021-10-20,45.164505130866715\r
2021-10-27,45.06451550343474\r
2021-11-19,47.436834128778074\r
2021-12-14,96.78011452841517\r
2021-12-16,97.67618867694901\r
2021-12-19,95.76827977857353\r
2021-12-21,95.76827977857353\r
2022-01-13,93.073497160063\r
2022-01-15,94.24311263894155\r
2022-01-23,93.79828955258101\r
2022-01-25,94.66494011071673\r
2022-02-09,94.94638283878282\r
2022-03-09,91.4878736563212\r
2022-03-19,95.60377881103295\r
2022-03-24,96.75655758874815\r
2022-03-26,95.58028362897505\r
2022-04-05,95.32191847571525\r
2022-04-10,95.2280047430379\r
2022-04-25,90.3489317832321\r
2022-04-30,90.3489317832321\r
2022-05-05,90.3489317832321\r
2022-05-08,82.75968658508815\r
2022-05-10,98.5503807453489\r
2022-05-15,93.44743287321059\r
2022-05-28,91.39478413298225\r
2022-05-30,91.39478413298225\r
2022-06-17,89.62996257273034\r
2022-06-19,89.62996257273034\r
2022-06-22,88.77345615280515\r
2022-06-24,88.77345615280515\r
2022-07-02,96.66234214117867\r
2022-07-04,96.66234214117867\r
2022-07-07,96.66234214117867\r
2022-07-12,96.99218234946497\r
2022-07-14,93.16695091297942\r
2022-07-17,90.20968027588368\r
2022-07-24,90.0704748901741\r
2022-07-27,85.68639941087345\r
2022-08-01,62.91727384615709\r
2022-08-03,62.91727384615709\r
2022-08-06,57.977429616920276\r
2022-08-08,57.977429616920276\r
2022-08-11,58.167433743080736\r
2022-08-13,50.77656009319287\r
2022-08-28,21.53451684845192\r
2022-09-05,21.53451684845192\r
2022-09-10,17.24922286109191\r
2022-09-12,16.794984578837983\r
2022-09-15,16.794984578837983\r
2022-09-20,16.811162467329005\r
2022-09-22,16.924501166884433\r
2022-10-02,17.038003009780365\r
2022-10-05,27.17241205338974\r
2022-10-07,27.333938544584203\r
2022-10-12,27.333938544584203\r
2022-10-15,27.046922604602567\r
2022-10-17,27.064842032918268\r
2022-10-22,26.689070369698875\r
2022-10-30,26.10086303247943\r
2022-11-01,27.89187345193522\r
2022-11-06,27.873837850514604\r
2022-11-11,26.011986831904476\r
2022-11-16,25.976454580977617\r
2022-12-04,95.74477592444751\r
2022-12-11,95.74477592444751\r
2022-12-14,95.74477592444751\r
2022-12-21,94.19626789236229\r
2022-12-24,96.00338639073072\r
2023-01-18,97.58178166796306\r
2023-01-20,96.3327433312538\r
2023-01-30,96.05042255599126\r
2023-02-04,97.84144807215064\r
2023-02-09,98.45579294911718\r
2023-02-12,97.41661657074565\r
2023-02-14,96.99218234946497\r
2023-02-17,97.11004083666121\r
2023-02-19,97.11004083666121\r
2023-02-24,97.74700678954484\r
2023-04-05,99.56842826185164\r
2023-04-08,99.56842826185164\r
2023-04-10,99.56842826185164\r
2023-04-18,81.82686530962053\r
2023-04-20,93.79828955258101\r
2023-05-05,89.88493952430399\r
2023-05-10,89.88493952430399\r
2023-05-28,90.37214484898752\r
2023-05-30,90.67403110116048\r
2023-06-02,90.67403110116048\r
2023-06-04,90.67403110116048\r
2023-06-09,99.87665146599016\r
2023-06-24,98.59768195273728\r
2023-06-27,98.59768195273728\r
2023-07-14,98.59768195273728\r
2023-07-17,99.68695144823961\r
2023-07-22,98.38486489842931\r
2023-07-27,97.74700678954484\r
2023-07-29,96.89791768484848\r
2023-08-08,97.58178166796306\r
2023-08-11,97.20434973827261\r
2023-08-16,97.20434973827261\r
2023-08-18,97.20434973827261\r
2023-08-21,95.86230757506932\r
2023-08-23,88.35741676208988\r
2023-08-28,88.19573704019005\r
2023-08-31,85.20474193288038\r
2023-09-05,81.14575486284407\r
2023-09-07,81.14575486284407\r
2023-09-10,81.39535344779297\r
2023-09-20,81.53156743680232\r
2023-09-25,82.78246664385574\r
2023-09-27,82.78246664385574\r
2023-09-30,84.49479110624603\r
2023-10-02,84.40327751295072\r
2023-10-05,84.40327751295072\r
2023-10-07,84.06029127603817\r
2023-10-10,81.50886171081567\r
2023-10-12,80.94166031310462\r
2023-10-15,80.94166031310462\r
2023-11-19,92.44321159296356\r
2023-11-26,93.00342005907164\r
2023-12-06,88.21883025155243\r
`;export{n as default};
