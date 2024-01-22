const r=`date,value\r
2017-01-19,29.685199242273345\r
2017-01-29,29.685199242273345\r
2017-02-08,35.393236364264496\r
2017-02-11,41.81356756815445\r
2017-02-18,38.52017337471686\r
2017-02-21,44.25683490736198\r
2017-02-28,38.72743960062243\r
2017-03-13,90.39683747823055\r
2017-03-23,90.11445432419784\r
2017-04-09,87.68065329241841\r
2017-04-12,85.732673132004\r
2017-04-19,80.52621450032264\r
2017-04-22,76.50042194358025\r
2017-04-29,71.76956545575082\r
2017-05-02,78.01243073277789\r
2017-05-09,64.63182200460321\r
2017-05-22,86.19503078478375\r
2017-06-01,90.86819098515979\r
2017-06-18,67.65748205148272\r
2017-06-21,77.47754968696199\r
2017-06-28,77.47754968696199\r
2017-07-01,83.6175275018946\r
2017-08-05,57.05204643234117\r
2017-08-07,57.05204643234117\r
2017-08-20,47.34417236803633\r
2017-08-22,51.1940125625848\r
2017-08-25,50.05034106217132\r
2017-08-27,50.05034106217132\r
2017-10-14,43.89436622672848\r
2017-10-16,43.89436622672848\r
2017-10-19,47.121139422972874\r
2017-10-21,47.121139422972874\r
2017-10-26,47.56758879860003\r
2017-11-05,41.88470508332366\r
2017-11-13,48.240134119094456\r
2017-11-15,48.240134119094456\r
2017-11-18,45.497329153774444\r
2017-11-23,45.497329153774444\r
2017-12-08,41.17531552373573\r
2017-12-15,52.26990873298815\r
2017-12-18,52.26990873298815\r
2017-12-20,51.11747515361047\r
2017-12-25,51.11747515361047\r
2018-01-17,83.06892202118237\r
2018-01-19,83.34306028967342\r
2018-01-22,82.79511299055861\r
2018-01-24,82.61275669238735\r
2018-01-27,80.79726832424214\r
2018-01-29,81.43101676218156\r
2018-02-01,81.43101676218156\r
2018-02-08,67.06521430071469\r
2018-02-11,67.06521430071469\r
2018-02-13,67.06521430071469\r
2018-02-21,75.17527280270347\r
2018-02-26,78.99652338003739\r
2018-03-03,78.99652338003739\r
2018-03-20,81.15918938530187\r
2018-03-25,82.15750728078075\r
2018-03-30,82.15750728078075\r
2018-04-17,74.64757884407807\r
2018-04-19,82.24848382387174\r
2018-04-27,82.24848382387174\r
2018-05-04,82.70391652861987\r
2018-05-07,84.44289987269076\r
2018-05-09,84.07570304554852\r
2018-05-14,84.07570304554852\r
2018-05-17,77.03284057866784\r
2018-05-19,86.56556888019803\r
2018-05-22,86.56556888019803\r
2018-05-24,86.56556888019803\r
2018-06-21,79.71504640083684\r
2018-06-23,88.3335176613433\r
2018-06-26,88.3335176613433\r
2018-06-28,82.15750728078075\r
2018-07-01,86.10248677757576\r
2018-07-03,88.24014330859131\r
2018-07-06,99.89440066054084\r
2018-07-08,85.27122223177727\r
2018-07-11,77.65569437233498\r
2018-07-13,69.36010294093492\r
2018-07-16,80.43593699432672\r
2018-07-18,80.43593699432672\r
2018-07-21,78.72768882396308\r
2018-07-23,74.2965358780969\r
2018-07-26,76.50042194358025\r
2018-07-28,96.88330879517848\r
2018-07-31,96.40079927330407\r
2018-08-02,60.758137614383635\r
2018-08-05,49.293136312262725\r
2018-08-07,43.749683069971965\r
2018-08-10,43.749683069971965\r
2018-08-15,46.08540404358591\r
2018-08-17,36.80878321042452\r
2018-08-22,28.19269966721566\r
2018-09-01,28.254325905029994\r
2018-09-09,25.94725615018249\r
2018-09-11,24.527374130584167\r
2018-09-14,19.737842580694096\r
2018-09-24,19.253158763939105\r
2018-09-26,23.424085165093366\r
2018-09-29,23.19417827469644\r
2018-10-01,23.19417827469644\r
2018-10-04,23.136830739989716\r
2018-10-09,23.07953494980028\r
2018-10-16,22.793833387944314\r
2018-10-19,23.136830739989716\r
2018-10-21,27.946685440124376\r
2018-10-24,27.946685440124376\r
2018-11-10,18.086984639729607\r
2018-11-13,18.086984639729607\r
2018-11-15,29.559754967611134\r
2018-11-18,24.879611897112746\r
2018-11-20,24.879611897112746\r
2018-11-25,23.88637219606842\r
2019-01-09,76.14622420388594\r
2019-01-17,86.10248677757576\r
2019-01-22,83.6175275018946\r
2019-01-24,83.6175275018946\r
2019-01-27,83.98399496835877\r
2019-02-03,87.7738115647341\r
2019-02-11,86.28761100919048\r
2019-02-13,82.88634606725512\r
2019-02-16,71.16439149213937\r
2019-02-21,71.16439149213937\r
2019-02-23,54.133192451416775\r
2019-02-26,57.6105240618211\r
2019-02-28,57.6105240618211\r
2019-03-03,57.6105240618211\r
2019-03-05,57.6105240618211\r
2019-03-08,57.6105240618211\r
2019-03-10,57.6105240618211\r
2019-03-13,48.61525501262183\r
2019-03-23,51.57732499935843\r
2019-03-25,53.74304919986853\r
2019-03-28,76.41181636624219\r
2019-03-30,57.85047792538827\r
2019-04-02,57.85047792538827\r
2019-04-04,76.6777453124904\r
2019-04-07,76.6777453124904\r
2019-04-09,86.10248677757576\r
2019-04-12,84.99478748527103\r
2019-04-19,80.88769333017542\r
2019-04-22,71.07809056717127\r
2019-04-24,71.07809056717127\r
2019-04-27,70.389058065309\r
2019-05-12,84.07570304554852\r
2019-05-14,84.07570304554852\r
2019-05-19,84.07570304554852\r
2019-05-24,93.04789389204915\r
2019-05-27,93.04789389204915\r
2019-06-01,100.0\r
2019-06-03,100.0\r
2019-06-06,100.0\r
2019-06-08,100.0\r
2019-06-13,100.0\r
2019-06-18,91.52958510523126\r
2019-06-21,91.52958510523126\r
2019-06-26,91.15143159586823\r
2019-07-01,90.96256883330308\r
2019-07-03,72.7243196290327\r
2019-07-06,76.23471748461374\r
2019-07-08,76.23471748461374\r
2019-07-11,76.23471748461374\r
2019-07-13,56.099276955647795\r
2019-07-16,56.099276955647795\r
2019-07-21,45.13118157625408\r
2019-07-23,45.13118157625408\r
2019-07-28,21.832190243793683\r
2019-08-22,53.27623605613243\r
2019-08-25,49.82273814464343\r
2019-08-27,54.68111826593375\r
2019-09-01,57.6105240618211\r
2019-09-04,57.6105240618211\r
2019-09-06,47.0468804118515\r
2019-09-11,59.94524836722618\r
2019-09-16,37.08069873981075\r
2019-09-19,26.487184309372658\r
2019-09-21,26.487184309372658\r
2019-09-24,37.012651506234214\r
2019-10-01,37.012651506234214\r
2019-10-04,25.174538886809156\r
2019-10-11,32.16975926674856\r
2019-10-21,46.82435954579712\r
2019-10-24,46.82435954579712\r
2019-10-26,44.839040396977936\r
2019-11-03,49.74695452978634\r
2019-11-05,49.74695452978634\r
2019-11-08,47.49307407583531\r
2019-11-10,47.49307407583531\r
2019-12-20,89.26923823713483\r
2019-12-25,95.5344963970681\r
2019-12-30,79.35548858105341\r
2020-01-19,71.94281504885603\r
2020-01-22,74.2965358780969\r
2020-01-24,74.2965358780969\r
2020-02-01,74.2965358780969\r
2020-02-03,70.6471586273169\r
2020-02-06,50.126292667968016\r
2020-02-11,42.455389287999104\r
2020-02-18,44.03922335573803\r
2020-02-21,56.33692102192078\r
2020-03-19,69.70247441307477\r
2020-03-24,71.2507305667671\r
2020-03-27,71.16439149213937\r
2020-03-29,74.38424009000096\r
2020-04-01,72.37660446608149\r
2020-04-03,72.37660446608149\r
2020-04-08,73.50889621534486\r
2020-04-11,92.47746172313391\r
2020-04-13,90.58527169394851\r
2020-04-16,82.97761574777189\r
2020-04-26,100.0\r
2020-04-28,100.0\r
2020-05-06,100.0\r
2020-05-18,80.97815518310864\r
2020-05-21,80.97815518310864\r
2020-05-23,55.94105101521044\r
2020-05-26,95.82294738388438\r
2020-05-28,68.16664867046096\r
2020-05-31,79.98510323469182\r
2020-06-02,68.08169099684581\r
2020-06-05,80.25549270265134\r
2020-06-07,80.25549270265134\r
2020-06-15,86.10248677757576\r
2020-06-22,65.1325914217323\r
2020-06-25,65.1325914217323\r
2020-06-30,65.1325914217323\r
2020-07-07,65.1325914217323\r
2020-07-12,61.65691461653352\r
2020-07-15,61.65691461653352\r
2020-07-17,61.73885988200528\r
2020-07-20,51.04097947689079\r
2020-07-22,86.38022744025032\r
2020-07-27,84.71867993592787\r
2020-07-30,78.01243073277789\r
2020-08-01,78.01243073277789\r
2020-08-04,84.71867993592787\r
2020-08-06,76.41181636624219\r
2020-08-09,58.01064896645847\r
2020-08-11,58.01064896645847\r
2020-08-14,58.01064896645847\r
2020-08-16,52.192788840236894\r
2020-08-21,58.49212939332917\r
2020-09-03,54.6027200930549\r
2020-09-05,54.6027200930549\r
2020-09-08,63.46884747132536\r
2020-09-10,55.46735106561525\r
2020-09-13,56.81330617760597\r
2020-09-20,50.27832172588573\r
2020-09-25,57.21140916333821\r
2020-11-04,79.53519345906503\r
2020-11-09,80.70688017649117\r
2020-11-12,80.61652889811631\r
2020-11-14,80.61652889811631\r
2020-11-17,80.61652889811631\r
2020-11-19,80.43593699432672\r
2020-11-22,78.45918833492297\r
2020-11-29,57.21140916333821\r
2020-12-04,57.21140916333821\r
2020-12-12,80.07519611305095\r
2020-12-17,84.81067941265015\r
2020-12-29,82.33949704757578\r
2021-01-08,79.89504731566993\r
2021-01-18,79.89504731566993\r
2021-02-07,63.38607255587028\r
2021-02-17,67.65748205148272\r
2021-02-27,83.34306028967342\r
2021-03-02,87.58753106979287\r
2021-03-04,87.58753106979287\r
2021-03-07,87.58753106979287\r
2021-03-09,84.07570304554852\r
2021-03-12,84.2592285769997\r
2021-03-19,82.06656742931719\r
2021-03-22,70.13130187220068\r
2021-03-24,70.13130187220068\r
2021-03-27,70.13130187220068\r
2021-03-29,68.59201574292871\r
2021-04-01,81.06865387187071\r
2021-04-03,84.3510460096991\r
2021-04-06,76.23471748461374\r
2021-04-08,76.23471748461374\r
2021-04-11,76.85521822210518\r
2021-04-13,79.71504640083684\r
2021-04-16,74.7354337614249\r
2021-04-18,79.89504731566993\r
2021-04-21,66.39066325753345\r
2021-04-23,67.99677193396319\r
2021-04-26,61.82084479625319\r
2021-04-28,63.38607255587028\r
2021-05-01,63.38607255587028\r
2021-05-03,69.1891476517328\r
2021-05-08,67.1497077793082\r
2021-05-11,62.31358610805828\r
2021-05-13,62.31358610805828\r
2021-05-16,62.31358610805828\r
2021-05-31,80.07519611305095\r
2021-06-02,80.07519611305095\r
2021-06-05,80.07519611305095\r
2021-06-07,80.07519611305095\r
2021-06-10,80.07519611305095\r
2021-06-12,91.62421258754661\r
2021-06-15,96.88330879517848\r
2021-06-22,96.88330879517848\r
2021-06-25,83.70908962052953\r
2021-07-17,71.07809056717127\r
2021-07-20,71.94281504885603\r
2021-07-22,71.94281504885603\r
2021-07-25,71.94281504885603\r
2021-07-30,69.87389039088542\r
2021-08-11,84.44289987269076\r
2021-08-14,88.89451893872479\r
2021-08-16,88.89451893872479\r
2021-08-19,88.89451893872479\r
2021-08-24,70.90560321646858\r
2021-08-26,69.7881632258312\r
2021-08-29,69.7881632258312\r
2021-08-31,69.7881632258312\r
2021-09-03,69.7881632258312\r
2021-09-05,63.22064083863591\r
2021-09-08,55.546199104222325\r
2021-09-10,55.546199104222325\r
2021-09-15,55.546199104222325\r
2021-09-23,47.34417236803633\r
2021-09-28,47.34417236803633\r
2021-09-30,47.121139422972874\r
2021-10-03,52.192788840236894\r
2021-10-08,52.965852408679105\r
2021-10-10,50.73541443206201\r
2021-10-13,50.73541443206201\r
2021-10-15,58.25120792353147\r
2021-10-20,53.820995576772354\r
2021-10-23,48.165237049053985\r
2021-10-25,48.165237049053985\r
2021-10-28,53.977011772980724\r
2021-10-30,53.977011772980724\r
2021-11-04,53.820995576772354\r
2021-11-09,59.29781390949046\r
2021-11-12,59.62121093046277\r
2021-11-17,57.6105240618211\r
2021-11-19,57.291151251199025\r
2021-11-22,58.81392122746879\r
2021-11-24,58.49212939332917\r
2021-11-27,58.49212939332917\r
2021-12-02,55.70401757208504\r
2021-12-17,55.30977745768173\r
2021-12-19,55.30977745768173\r
2021-12-24,55.30977745768173\r
2022-01-01,64.88203068100182\r
2022-01-06,75.08722977378356\r
2022-01-13,70.21718231888293\r
2022-01-16,70.21718231888293\r
2022-01-21,75.79262575702721\r
2022-01-23,75.79262575702721\r
2022-01-31,74.03364952967286\r
2022-03-07,72.11621679091937\r
2022-03-12,73.68366285390374\r
2022-03-14,73.68366285390374\r
2022-03-22,89.45681317438604\r
2022-03-24,89.5506544292592\r
2022-03-27,80.25549270265134\r
2022-03-29,80.25549270265134\r
2022-04-01,80.25549270265134\r
2022-04-03,80.79726832424214\r
2022-04-16,72.89840481529305\r
2022-04-21,72.89840481529305\r
2022-04-26,72.37660446608149\r
2022-05-03,78.36976246253788\r
2022-05-06,72.46347632480918\r
2022-05-08,75.43962736019387\r
2022-05-11,75.43962736019387\r
2022-05-13,75.43962736019387\r
2022-05-16,65.38350385886457\r
2022-05-18,65.38350385886457\r
2022-05-21,60.59524072882335\r
2022-05-23,60.59524072882335\r
2022-05-26,60.59524072882335\r
2022-05-28,75.08722977378356\r
2022-05-31,73.68366285390374\r
2022-06-02,80.43593699432672\r
2022-06-05,80.43593699432672\r
2022-06-07,80.43593699432672\r
2022-06-15,94.67104638001955\r
2022-06-17,100.0\r
2022-06-20,100.0\r
2022-06-25,100.0\r
2022-06-27,88.70737474140962\r
2022-07-02,90.20854627278659\r
2022-07-05,78.10170787821119\r
2022-07-07,78.10170787821119\r
2022-07-10,74.82332632506414\r
2022-07-12,69.1891476517328\r
2022-07-15,63.551661739420936\r
2022-07-20,59.5403015993806\r
2022-07-25,53.665143992002015\r
2022-07-30,30.37859469947287\r
2022-08-04,30.37859469947287\r
2022-08-06,30.252089195065345\r
2022-08-09,18.879226757799632\r
2022-08-11,14.508535786631127\r
2022-08-16,14.508535786631127\r
2022-09-18,13.411940072421782\r
2022-09-20,14.219445525179525\r
2022-09-30,14.75105986438007\r
2022-10-03,14.219445525179525\r
2022-10-05,14.219445525179525\r
2022-10-08,14.995045569825532\r
2022-10-18,13.553189038526975\r
2022-11-12,21.10705717966479\r
2022-11-14,21.10705717966479\r
2022-11-17,21.10705717966479\r
2022-11-19,23.944389276344065\r
2022-11-22,23.770491966058216\r
2022-11-29,25.649050212147294\r
2022-12-09,35.52717770150102\r
2023-01-03,36.94464982498444\r
2023-01-11,36.94464982498444\r
2023-01-13,46.23285236064423\r
2023-02-07,49.671212955997504\r
2023-02-10,77.21061228861797\r
2023-02-12,57.69046830305605\r
2023-02-15,63.22064083863591\r
2023-02-20,63.05536669939198\r
2023-02-27,59.45943230901065\r
2023-03-02,60.67666925366457\r
2023-03-04,60.513852054375015\r
2023-03-07,60.513852054375015\r
2023-03-24,71.94281504885603\r
2023-03-27,71.94281504885603\r
2023-04-01,71.94281504885603\r
2023-04-18,27.701457774739076\r
2023-04-21,68.76243239106529\r
2023-04-23,68.76243239106529\r
2023-05-01,68.76243239106529\r
2023-05-26,73.50889621534486\r
2023-05-28,74.12124058584754\r
2023-05-31,70.73326861530677\r
2023-06-02,76.50042194358025\r
2023-06-05,76.50042194358025\r
2023-06-07,82.52163349282043\r
2023-06-10,86.47288006742788\r
2023-06-15,95.24636239413252\r
2023-07-07,76.6777453124904\r
2023-07-10,81.70317516041385\r
2023-07-15,81.70317516041385\r
2023-07-17,60.18869615143141\r
2023-07-25,49.14220055244662\r
2023-08-09,31.911593940325428\r
2023-08-14,31.911593940325428\r
2023-08-16,31.911593940325428\r
2023-08-19,32.23441895953336\r
2023-08-21,26.90992291389613\r
2023-08-24,26.90992291389613\r
2023-08-26,26.90992291389613\r
2023-09-03,26.728450616637623\r
2023-09-05,24.527374130584167\r
2023-09-10,27.946685440124376\r
2023-09-13,27.946685440124376\r
2023-09-15,25.708590890940698\r
2023-09-30,21.10705717966479\r
2023-10-03,21.10705717966479\r
2023-10-05,21.10705717966479\r
2023-10-08,25.233676133341348\r
2023-10-10,22.0007931762191\r
2023-11-17,74.2965358780969\r
2023-11-22,74.2965358780969\r
2023-12-02,65.4672194292566\r
2023-12-04,65.4672194292566\r
`;export{r as default};