const n=`date,value\r
2017-01-04,49.35214424749081\r
2017-01-07,51.1706648646549\r
2017-01-14,48.13237999352905\r
2017-02-03,60.998568219787806\r
2017-02-06,60.998568219787806\r
2017-02-16,67.87295077470775\r
2017-02-23,72.12908360013411\r
2017-02-26,67.55589863157401\r
2017-03-05,69.47130867437814\r
2017-03-08,65.36089518306014\r
2017-03-15,67.18710587404338\r
2017-03-18,68.24394735201868\r
2017-03-25,71.90992379111194\r
2017-03-28,73.2307635220748\r
2017-04-04,74.50983760259989\r
2017-04-07,73.61867025776299\r
2017-04-14,75.40730908701117\r
2017-04-17,76.02798448272358\r
2017-05-07,83.29220068602893\r
2017-05-14,83.29220068602893\r
2017-05-17,84.73163549727155\r
2017-05-24,84.55091372097186\r
2017-05-27,86.12470551820388\r
2017-06-03,85.88147379716517\r
2017-06-06,86.79567699793193\r
2017-06-13,84.19014981263932\r
2017-06-16,86.06385971123723\r
2017-06-23,86.06385971123723\r
2017-06-26,85.94224385383482\r
2017-07-01,83.11328915082447\r
2017-07-03,79.64049574041631\r
2017-07-06,81.39544466729612\r
2017-07-08,79.98968901244938\r
2017-07-11,79.11838728124107\r
2017-07-13,78.36778855702579\r
2017-07-18,77.96535950798315\r
2017-07-21,77.73594618875612\r
2017-07-23,79.11838728124107\r
2017-07-26,80.10628619650367\r
2017-07-28,73.89648364917618\r
2017-07-31,73.50771694098887\r
2017-08-02,73.2307635220748\r
2017-08-05,72.45855796868193\r
2017-08-07,71.0371982043462\r
2017-08-12,70.00895553291575\r
2017-08-15,67.3976994112606\r
2017-08-17,64.07451878086721\r
2017-08-20,61.44681401414825\r
2017-08-22,57.914642589116916\r
2017-08-25,56.052472222658224\r
2017-08-27,51.03629080988438\r
2017-08-30,45.161057978287076\r
2017-09-01,36.389593557757124\r
2017-09-04,34.368741433070205\r
2017-09-09,29.707893431751724\r
2017-09-11,27.199846352443203\r
2017-09-14,14.677182932909103\r
2017-09-16,14.677182932909103\r
2017-09-19,14.677182932909103\r
2017-09-21,13.03398524929555\r
2017-09-24,13.03398524929555\r
2017-10-06,1.690072651552967\r
2017-10-09,1.7760070718141712\r
2017-10-11,1.726595269455037\r
2017-10-14,1.726595269455037\r
2017-10-16,1.782241178183526\r
2017-10-19,1.7450287616222373\r
2017-10-21,1.782241178183526\r
2017-10-24,1.8199155858570029\r
2017-10-26,1.8644552215664092\r
2017-10-31,1.851665055228526\r
2017-11-03,1.8199155858570029\r
2017-11-05,1.955438522191526\r
2017-11-08,3.05186994945712\r
2017-11-18,6.441625435677069\r
2017-11-20,7.613731284666357\r
2017-11-23,7.599097986385727\r
2017-11-28,7.599097986385727\r
2017-11-30,9.375121462361031\r
2017-12-03,11.466859187410476\r
2017-12-05,12.854023030992781\r
2017-12-13,21.71876010428365\r
2017-12-18,21.71876010428365\r
2017-12-20,21.71876010428365\r
2017-12-23,33.803776666327394\r
2017-12-25,33.803776666327394\r
2017-12-28,42.260226286181116\r
2017-12-30,42.260226286181116\r
2018-01-02,47.78716495666291\r
2018-01-04,47.78716495666291\r
2018-01-14,65.82767047992398\r
2018-01-17,70.76575419949745\r
2018-01-19,70.76575419949745\r
2018-01-22,70.76575419949745\r
2018-01-24,70.76575419949745\r
2018-01-27,85.15420124633833\r
2018-02-03,79.40819853865108\r
2018-02-08,93.16370347730754\r
2018-02-11,87.96183790994694\r
2018-02-13,90.9487388202732\r
2018-02-16,90.9487388202732\r
2018-02-18,90.9487388202732\r
2018-02-26,91.32622508724776\r
2018-03-03,91.32622508724776\r
2018-03-13,92.21059979695447\r
2018-03-18,92.65466522753376\r
2018-03-23,92.97262217923287\r
2018-04-02,96.51246593594148\r
2018-04-07,96.77294311371186\r
2018-04-12,84.13011056009081\r
2018-04-17,92.84536263209014\r
2018-04-19,97.03383270140125\r
2018-04-22,93.80230593516869\r
2018-04-24,93.80230593516869\r
2018-04-27,96.44741105781469\r
2018-04-29,96.18744911958682\r
2018-05-07,100.0\r
2018-05-09,97.16443220956312\r
2018-05-19,96.83812683962807\r
2018-05-22,96.83812683962807\r
2018-05-29,96.38238194014936\r
2018-06-03,93.93033395733995\r
2018-06-08,93.93033395733995\r
2018-06-13,93.93033395733995\r
2018-06-16,100.0\r
2018-06-18,98.73968089235646\r
2018-06-21,98.87162356463956\r
2018-06-26,100.0\r
2018-06-28,97.4259407756481\r
2018-07-01,97.49138242435954\r
2018-07-03,100.0\r
2018-07-06,99.79812132409207\r
2018-07-08,99.26807261440021\r
2018-07-11,99.26807261440021\r
2018-07-13,99.86449399653353\r
2018-07-18,97.16443220956312\r
2018-07-21,94.70065685580282\r
2018-07-23,96.70778516341616\r
2018-07-26,97.6878622361604\r
2018-07-28,94.8294033607947\r
2018-07-31,96.57754657756257\r
2018-08-02,97.4259407756481\r
2018-08-05,97.22977065282318\r
2018-08-07,100.0\r
2018-08-10,96.51246593594148\r
2018-08-12,96.90333634419521\r
2018-08-15,96.51246593594148\r
2018-08-17,93.54655749473734\r
2018-08-20,93.41883702761048\r
2018-08-22,93.54655749473734\r
2018-08-25,93.03629034521693\r
2018-08-27,93.03629034521693\r
2018-08-30,90.50949827847357\r
2018-09-01,91.9574104923688\r
2018-09-06,88.20851083712571\r
2018-09-09,89.94659458128618\r
2018-09-11,87.7155705759456\r
2018-09-14,86.97920014750068\r
2018-09-16,86.97920014750068\r
2018-09-19,86.97920014750068\r
2018-09-21,86.67345468961142\r
2018-09-24,82.9346035145052\r
2018-09-26,85.51738346913801\r
2018-09-29,86.97920014750068\r
2018-10-01,86.97920014750068\r
2018-10-06,84.67136972481578\r
2018-10-09,82.51854838195392\r
2018-10-14,83.95014370923228\r
2018-10-19,91.26324693674314\r
2018-10-21,84.55091372097186\r
2018-10-24,85.27516112831317\r
2018-10-26,84.61112913375881\r
2018-11-05,76.70849537658881\r
2018-11-08,70.17072444435775\r
2018-11-10,70.17072444435775\r
2018-11-15,70.17072444435775\r
2018-11-18,70.17072444435775\r
2018-11-28,86.24647290424888\r
2018-12-03,90.25906422845429\r
2018-12-05,86.49031085200524\r
2018-12-08,88.27024246610169\r
2018-12-10,89.51020582666516\r
2018-12-15,88.146804570121\r
2018-12-18,87.83865355620125\r
2018-12-23,86.24647290424888\r
2018-12-25,85.0937591165284\r
2018-12-28,85.45679005401591\r
2019-01-02,84.85224259889213\r
2019-01-04,84.85224259889213\r
2019-01-07,87.16295099619678\r
2019-01-09,84.85224259889213\r
2019-01-12,84.85224259889213\r
2019-01-14,82.75614369220398\r
2019-01-17,84.73163549727155\r
2019-01-22,85.15420124633833\r
2019-01-24,84.67136972481578\r
2019-01-29,86.18557658150254\r
2019-02-03,89.82178488363888\r
2019-02-06,82.81560521443177\r
2019-02-08,84.37041852093485\r
2019-02-11,84.37041852093485\r
2019-02-13,80.45667638391123\r
2019-02-16,77.56414669943896\r
2019-02-18,81.69012209472541\r
2019-02-21,78.77143494028287\r
2019-02-23,78.88698622325741\r
2019-02-26,78.88698622325741\r
2019-02-28,79.11838728124107\r
2019-03-03,79.11838728124107\r
2019-03-08,78.5406307390775\r
2019-03-10,85.94224385383482\r
2019-03-18,72.95442388372021\r
2019-03-23,80.74935452049546\r
2019-03-25,85.0937591165284\r
2019-03-28,83.59088880592458\r
2019-03-30,83.95014370923228\r
2019-04-02,81.69012209472541\r
2019-04-07,81.69012209472541\r
2019-04-09,80.28136902233045\r
2019-04-12,80.98394653822032\r
2019-04-14,74.84564993353004\r
2019-04-17,78.65598312071191\r
2019-04-19,79.69863231674762\r
2019-04-27,82.51854838195392\r
2019-04-29,86.18557658150254\r
2019-05-02,86.18557658150254\r
2019-05-07,86.55133351870612\r
2019-05-09,88.33199946014683\r
2019-05-14,89.07506299103804\r
2019-05-19,86.97920014750068\r
2019-05-24,92.40076013636353\r
2019-05-29,91.45225794005427\r
2019-06-01,96.96857163044317\r
2019-06-03,97.95019678468641\r
2019-06-06,97.95019678468641\r
2019-06-11,96.38238194014936\r
2019-06-13,97.03383270140125\r
2019-06-18,100.0\r
2019-06-21,100.0\r
2019-06-23,100.0\r
2019-06-26,99.46664661946656\r
2019-06-28,99.46664661946656\r
2019-07-01,96.18744911958682\r
2019-07-03,96.18744911958682\r
2019-07-06,96.70778516341616\r
2019-07-08,92.65466522753376\r
2019-07-11,95.60404073955712\r
2019-07-13,91.0744655519469\r
2019-07-16,90.6348681486863\r
2019-07-18,87.90023305983723\r
2019-07-21,86.06385971123723\r
2019-07-23,80.45667638391123\r
2019-07-26,81.21893833832891\r
2019-07-28,76.76536542226219\r
2019-07-31,69.95508128504522\r
2019-08-02,65.72377403112041\r
2019-08-05,65.77571020787232\r
2019-08-07,59.71444717411194\r
2019-08-10,55.34575383633788\r
2019-08-12,55.34575383633788\r
2019-08-15,52.162422745255284\r
2019-08-17,52.20776846759808\r
2019-08-20,39.85780765195544\r
2019-08-22,30.49566315646152\r
2019-08-25,30.528749877769645\r
2019-08-27,19.15777045672249\r
2019-08-30,13.582713522519832\r
2019-09-04,11.429649859659872\r
2019-09-06,11.48549049130483\r
2019-09-09,9.015271789129867\r
2019-09-11,8.351127877867\r
2019-09-14,7.39596498994572\r
2019-09-16,7.4971274433459065\r
2019-09-19,8.742854901668132\r
2019-09-24,8.151586049481173\r
2019-09-26,9.259726257462207\r
2019-09-29,10.206515901700703\r
2019-10-01,11.299976123627523\r
2019-10-04,11.226266715271931\r
2019-10-06,12.187381062099258\r
2019-10-09,10.381302534550546\r
2019-10-11,10.381302534550546\r
2019-10-14,12.518095881439317\r
2019-10-16,12.518095881439317\r
2019-10-19,18.337594235825332\r
2019-10-26,19.895990601682644\r
2019-10-29,19.895990601682644\r
2019-11-05,19.741909637979017\r
2019-11-30,40.675554446554926\r
2019-12-08,59.420388154337466\r
2019-12-10,54.78416721857925\r
2019-12-13,54.78416721857925\r
2019-12-15,54.78416721857925\r
2019-12-23,59.5673110960808\r
2019-12-25,62.50022545605378\r
2019-12-28,65.41266278578594\r
2019-12-30,62.44982443962258\r
2020-01-02,61.44681401414825\r
2020-01-04,75.46361067325466\r
2020-01-09,69.6323471560332\r
2020-01-12,73.67418377535172\r
2020-01-14,72.56857877016417\r
2020-01-17,75.85841300547894\r
2020-01-22,77.90796895429901\r
2020-01-27,81.69012209472541\r
2020-02-01,88.95096516058555\r
2020-02-06,91.64149864483616\r
2020-02-08,92.21059979695447\r
2020-02-11,92.21059979695447\r
2020-02-13,91.76778676756645\r
2020-02-16,91.76778676756645\r
2020-02-18,94.1866977277013\r
2020-02-21,94.1866977277013\r
2020-02-26,90.19651938348314\r
2020-02-28,90.19651938348314\r
2020-03-04,90.32163453735814\r
2020-03-07,90.32163453735814\r
2020-03-14,95.47467744176359\r
2020-03-19,88.95096516058555\r
2020-03-22,95.66876096842026\r
2020-03-24,90.69759130587045\r
2020-03-29,88.76500890052019\r
2020-04-01,91.89417704124871\r
2020-04-03,91.89417704124871\r
2020-04-06,93.80230593516869\r
2020-04-08,92.21059979695447\r
2020-04-11,91.13736717216642\r
2020-04-23,92.0839540385065\r
2020-04-26,95.08720460892913\r
2020-04-28,98.01584498949418\r
2020-05-03,94.95825260371737\r
2020-05-06,97.8189778623274\r
2020-05-11,98.21294461468878\r
2020-05-21,100.0\r
2020-05-23,100.0\r
2020-05-26,98.27869617007971\r
2020-05-28,98.73968089235646\r
2020-05-31,98.73968089235646\r
2020-06-05,98.60784168535646\r
2020-06-10,99.73177456616814\r
2020-06-12,100.0\r
2020-06-15,100.0\r
2020-06-17,93.09998411022221\r
2020-06-20,99.33423805497188\r
2020-06-22,92.59115059141187\r
2020-06-25,95.34541700361359\r
2020-06-27,93.73833037915227\r
2020-06-30,96.25240097406942\r
2020-07-02,95.08720460892913\r
2020-07-05,97.09911956009844\r
2020-07-07,96.05762265256261\r
2020-07-10,98.6737483572042\r
2020-07-12,96.77294311371186\r
2020-07-15,100.0\r
2020-07-17,98.87162356463956\r
2020-07-20,97.4259407756481\r
2020-07-22,95.60404073955712\r
2020-07-25,97.29513489290615\r
2020-07-27,94.8294033607947\r
2020-07-30,94.1866977277013\r
2020-08-01,91.01158943567415\r
2020-08-04,91.20029429940718\r
2020-08-06,88.27024246610169\r
2020-08-09,85.33567888672569\r
2020-08-11,84.01010751152114\r
2020-08-14,84.37041852093485\r
2020-08-16,84.7919264542544\r
2020-08-19,86.55133351870612\r
2020-08-21,83.71053990690127\r
2020-08-24,86.61238146353753\r
2020-08-26,86.18557658150254\r
2020-09-03,82.81560521443177\r
2020-09-05,77.3925704001173\r
2020-09-08,80.33977985688247\r
2020-09-10,80.33977985688247\r
2020-09-13,75.46361067325466\r
2020-09-15,75.46361067325466\r
2020-09-18,75.29477994257198\r
2020-09-20,77.73594618875612\r
2020-09-25,80.86660056920861\r
2020-09-28,80.86660056920861\r
2020-09-30,77.6213883927304\r
2020-10-03,82.87509182081723\r
2020-10-08,79.81498022269984\r
2020-10-10,73.00964272838138\r
2020-10-15,73.00964272838138\r
2020-10-18,73.00964272838138\r
2020-10-20,73.00964272838138\r
2020-10-25,73.95212008466355\r
2020-10-28,71.25479297043223\r
2020-10-30,71.25479297043223\r
2020-11-02,69.09640348661908\r
2020-11-07,71.47277868458181\r
2020-11-09,71.47277868458181\r
2020-11-17,72.73379382288812\r
2020-11-19,75.40730908701117\r
2020-11-22,76.70849537658881\r
2020-11-24,79.29219935544374\r
2020-12-02,79.29219935544374\r
2020-12-07,80.98394653822032\r
2020-12-09,84.55091372097186\r
2020-12-12,84.07009646076264\r
2020-12-19,84.07009646076264\r
2020-12-22,82.34061512874473\r
2020-12-27,78.31022418770554\r
2021-01-03,79.69863231674762\r
2021-01-06,79.75679380978421\r
2021-01-13,76.93612409674982\r
2021-01-16,74.11917696370409\r
2021-01-18,71.5273362231967\r
2021-01-23,71.5273362231967\r
2021-01-26,77.6786548881049\r
2021-01-31,77.50692980503628\r
2021-02-02,77.50692980503628\r
2021-02-15,76.19777837183815\r
2021-02-17,76.19777837183815\r
2021-02-20,76.19777837183815\r
2021-02-25,80.8079650563963\r
2021-02-27,80.86660056920861\r
2021-03-02,89.57247077187215\r
2021-03-04,87.90023305983723\r
2021-03-22,96.44741105781469\r
2021-03-24,99.33423805497188\r
2021-03-29,95.9927480339501\r
2021-04-01,95.9927480339501\r
2021-04-03,98.73968089235646\r
2021-04-06,98.6737483572042\r
2021-04-08,98.6737483572042\r
2021-04-11,96.31737857991219\r
2021-04-13,96.31737857991219\r
2021-04-18,96.31737857991219\r
2021-04-23,93.48268445096241\r
2021-04-28,93.48268445096241\r
2021-05-03,94.05846454671295\r
2021-05-06,94.76501726758009\r
2021-05-08,93.03629034521693\r
2021-05-13,94.76501726758009\r
2021-05-18,94.57201306437554\r
2021-05-21,95.66876096842026\r
2021-05-23,95.66876096842026\r
2021-05-26,95.73350692131328\r
2021-05-28,95.73350692131328\r
2021-05-31,100.0\r
2021-06-05,95.53934623168482\r
2021-06-10,97.22977065282318\r
2021-06-12,97.22977065282318\r
2021-06-15,97.75340713873139\r
2021-06-17,97.75340713873139\r
2021-06-22,95.60404073955712\r
2021-06-25,96.44741105781469\r
2021-06-27,94.05846454671295\r
2021-06-30,97.6878622361604\r
2021-07-02,78.71369659916341\r
2021-07-05,93.80230593516869\r
2021-07-07,92.02066949043225\r
2021-07-10,96.31737857991219\r
2021-07-12,95.2808253493031\r
2021-07-15,96.83812683962807\r
2021-07-17,95.73350692131328\r
2021-07-20,95.92789915455585\r
2021-07-22,93.16370347730754\r
2021-07-27,91.13736717216642\r
2021-07-30,91.45225794005427\r
2021-08-01,90.76033994854394\r
2021-08-04,87.46970863663758\r
2021-08-06,87.46970863663758\r
2021-08-11,83.41160058410256\r
2021-08-14,75.97143594882529\r
2021-08-16,59.420388154337466\r
2021-08-19,55.25192243007883\r
2021-08-21,55.25192243007883\r
2021-08-24,55.25192243007883\r
2021-08-26,45.70447775802227\r
2021-08-29,39.27966573705517\r
2021-08-31,28.676316133079844\r
2021-09-03,28.772117732077252\r
2021-09-05,20.388562607607323\r
2021-09-08,20.388562607607323\r
2021-09-23,7.2386234844275394\r
2021-09-30,7.2386234844275394\r
2021-10-03,7.3385199529841545\r
2021-10-05,15.776835215605562\r
2021-10-08,15.776835215605562\r
2021-10-10,14.018717762349592\r
2021-10-13,14.313891481322353\r
2021-10-15,14.806681767972437\r
2021-10-18,14.081665293801157\r
2021-10-20,14.250335779644077\r
2021-10-23,14.018717762349592\r
2021-11-19,33.24430348477342\r
2021-11-22,33.24430348477342\r
2021-11-24,33.24430348477342\r
2021-11-27,33.24430348477342\r
2021-12-07,36.72071161365349\r
2021-12-09,36.68383371442614\r
2021-12-12,38.820720253561284\r
2021-12-14,36.831475909176795\r
2021-12-17,37.42553116046697\r
2021-12-19,37.27649388925606\r
2021-12-24,36.16982618079662\r
2021-12-29,36.68383371442614\r
2022-01-08,35.08269417238844\r
2022-01-11,38.744537180817645\r
2022-01-13,40.59725338035997\r
2022-01-16,42.260226286181116\r
2022-01-18,45.83042470727019\r
2022-01-21,51.440035739426506\r
2022-01-23,52.93644982874599\r
2022-01-26,58.88349271528563\r
2022-01-28,63.41153072201118\r
2022-01-31,63.41153072201118\r
2022-02-02,69.47130867437814\r
2022-02-05,83.35188807884482\r
2022-02-07,93.67438045577761\r
2022-02-10,90.82311407978435\r
2022-02-12,92.5276615328849\r
2022-02-15,92.46419804888991\r
2022-02-17,92.46419804888991\r
2022-02-20,91.89417704124871\r
2022-02-22,92.59115059141187\r
2022-02-25,93.80230593516869\r
2022-02-27,93.80230593516869\r
2022-03-02,91.89417704124871\r
2022-03-07,95.47467744176359\r
2022-03-09,92.7182054443129\r
2022-03-14,95.86307601134317\r
2022-03-22,93.86630712688026\r
2022-03-24,95.21625940078032\r
2022-03-29,95.21625940078032\r
2022-04-03,95.02271575951504\r
2022-04-11,95.60404073955712\r
2022-04-13,94.70065685580282\r
2022-04-16,93.99438642960017\r
2022-04-18,94.44347196213882\r
2022-04-23,94.37923991184783\r
2022-04-26,94.89381513849212\r
2022-04-28,94.37923991184783\r
2022-05-01,95.08720460892913\r
2022-05-08,97.22977065282318\r
2022-05-11,96.64265298571017\r
2022-05-13,97.4259407756481\r
2022-05-16,97.4259407756481\r
2022-05-18,97.6878622361604\r
2022-05-21,97.88457440997153\r
2022-05-23,97.22977065282318\r
2022-05-26,96.05762265256261\r
2022-05-28,96.18744911958682\r
2022-05-31,95.66876096842026\r
2022-06-02,95.92789915455585\r
2022-06-07,95.73350692131328\r
2022-06-10,96.25240097406942\r
2022-06-12,95.73350692131328\r
2022-06-15,96.44741105781469\r
2022-06-17,93.86630712688026\r
2022-06-20,94.6363221224168\r
2022-06-25,96.51246593594148\r
2022-06-27,94.25085279767833\r
2022-07-02,95.86307601134317\r
2022-07-05,96.12252301342961\r
2022-07-07,92.97262217923287\r
2022-07-10,94.89381513849212\r
2022-07-12,94.12256831172968\r
2022-07-15,94.1866977277013\r
2022-07-17,93.67438045577761\r
2022-07-20,93.3550152216257\r
2022-07-22,92.02066949043225\r
2022-07-25,91.76778676756645\r
2022-07-27,92.14726413965843\r
2022-07-30,92.14726413965843\r
2022-08-01,90.13399999936304\r
2022-08-04,90.0090376013474\r
2022-08-06,88.95096516058555\r
2022-08-09,87.96183790994694\r
2022-08-11,86.61238146353753\r
2022-08-14,87.28557810294846\r
2022-08-16,86.12470551820388\r
2022-08-19,86.85682608639986\r
2022-08-21,85.0937591165284\r
2022-08-24,87.04042512635175\r
2022-08-26,88.146804570121\r
2022-08-29,91.20029429940718\r
2022-09-05,92.0839540385065\r
2022-09-10,89.13715001266229\r
2022-09-13,87.96183790994694\r
2022-09-18,85.27516112831317\r
2022-09-20,85.27516112831317\r
2022-09-23,81.27774877806264\r
2022-10-05,63.71702198745627\r
2022-10-08,64.38187998760047\r
2022-10-10,64.38187998760047\r
2022-10-13,60.8992197120688\r
2022-10-15,61.34703725012389\r
2022-10-18,59.91096031552037\r
2022-10-20,59.22482228521052\r
2022-10-23,56.95521875829771\r
2022-10-25,57.818276474848105\r
2022-10-28,54.41164356857126\r
2022-10-30,47.61510446607471\r
2022-11-02,36.646977575143794\r
2022-11-04,30.561857672325022\r
2022-11-14,26.707648580948373\r
2022-11-27,21.990739339263605\r
2022-12-02,21.556525976710425\r
2022-12-04,25.440660737049797\r
2022-12-07,25.440660737049797\r
2022-12-09,25.292233399829524\r
2022-12-22,28.996384956804956\r
2022-12-27,28.548872467556947\r
2022-12-29,30.661307535351856\r
2023-01-18,45.119414508391074\r
2023-01-21,45.119414508391074\r
2023-01-26,45.119414508391074\r
2023-01-31,48.13237999352905\r
2023-02-02,49.176794037860574\r
2023-02-05,49.176794037860574\r
2023-02-10,49.13301375030426\r
2023-02-12,50.411953447427706\r
2023-02-15,51.35015315341235\r
2023-02-17,51.35015315341235\r
2023-02-20,51.35015315341235\r
2023-02-22,51.1706648646549\r
2023-03-07,54.45812740176217\r
2023-03-09,56.764462733719654\r
2023-03-12,55.95793874711221\r
2023-03-14,57.0985324845659\r
2023-03-17,57.0985324845659\r
2023-03-22,58.011102966428815\r
2023-03-24,67.45040828229774\r
2023-03-27,67.50314135463478\r
2023-04-01,67.50314135463478\r
2023-04-03,65.61997395022429\r
2023-04-06,64.22809140518886\r
2023-04-08,65.25743218038133\r
2023-04-16,74.9577845019863\r
2023-04-21,74.9577845019863\r
2023-04-23,74.9577845019863\r
2023-04-26,75.63266352666848\r
2023-04-28,74.34226392568462\r
2023-05-03,73.89648364917618\r
2023-05-06,75.46361067325466\r
2023-05-11,75.74548887332554\r
2023-05-23,96.31737857991219\r
2023-05-26,99.59915878183764\r
2023-05-28,97.22977065282318\r
2023-06-02,97.16443220956312\r
2023-06-05,95.9927480339501\r
2023-06-07,94.70065685580282\r
2023-06-10,97.88457440997153\r
2023-06-12,97.88457440997153\r
2023-06-15,100.0\r
2023-06-17,98.80563929382964\r
2023-06-20,98.80563929382964\r
2023-06-22,98.80563929382964\r
2023-06-25,98.47610591950678\r
2023-06-27,97.62234315159091\r
2023-07-02,93.16370347730754\r
2023-07-05,95.92789915455585\r
2023-07-07,93.22744844953138\r
2023-07-10,95.60404073955712\r
2023-07-12,94.57201306437554\r
2023-07-15,94.12256831172968\r
2023-07-17,91.0744655519469\r
2023-07-20,88.146804570121\r
2023-07-22,87.40830647145886\r
2023-07-25,86.36834134054445\r
2023-07-27,83.47133820494224\r
2023-07-30,78.5406307390775\r
2023-08-01,74.78961961826063\r
2023-08-06,73.00964272838138\r
2023-08-11,68.24394735201868\r
2023-08-14,69.68607531793553\r
2023-08-16,68.98950649841092\r
2023-08-19,69.09640348661908\r
2023-08-21,68.82934323402323\r
2023-08-24,68.77600405753117\r
2023-08-26,68.19087511501975\r
2023-08-29,68.77600405753117\r
2023-08-31,67.3976994112606\r
2023-09-03,65.67186194634553\r
2023-09-05,66.03575258756166\r
2023-09-08,65.20573677377214\r
2023-09-10,64.38187998760047\r
2023-09-15,64.2793302661945\r
2023-09-23,45.70447775802227\r
2023-09-25,46.67527888216506\r
2023-09-28,46.04078878391402\r
2023-09-30,46.760263103931536\r
2023-10-03,45.7884197733675\r
2023-10-05,46.37854879579617\r
2023-10-08,46.420870771297004\r
2023-10-10,46.293972849146336\r
2023-10-13,44.9530661989037\r
2023-10-15,44.70422004488768\r
2023-10-28,19.486669871979633\r
2023-11-07,19.007078644488605\r
2023-11-24,1.7573816728212492\r
2023-11-27,1.7573816728212492\r
2023-11-29,1.7760070718141712\r
2023-12-02,1.690072651552967\r
`;export{n as default};