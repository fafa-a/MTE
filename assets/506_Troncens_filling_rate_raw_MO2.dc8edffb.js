const n=`date,value\r
2017-01-26,32.130709519320924\r
2017-01-29,48.175469082834184\r
2017-02-15,35.98420181025053\r
2017-02-18,43.56244153855347\r
2017-02-25,39.41486225685228\r
2017-03-10,51.988984463955035\r
2017-03-17,51.988984463955035\r
2017-03-30,41.17347049514298\r
2017-04-06,64.76261879244393\r
2017-04-09,56.24111802433368\r
2017-04-19,63.02265482104694\r
2017-04-29,63.36923521648077\r
2017-05-06,60.27559020967214\r
2017-05-09,62.33161954935758\r
2017-05-16,58.91921603521625\r
2017-05-19,58.91921603521625\r
2017-05-26,59.93541964972798\r
2017-06-05,64.41321556245279\r
2017-06-18,50.70580878597816\r
2017-06-25,50.70580878597816\r
2017-06-28,50.70580878597816\r
2017-07-05,64.0645165711092\r
2017-07-18,54.26313548396679\r
2017-08-02,45.386894655842006\r
2017-08-04,45.386894655842006\r
2017-08-07,49.43461102029351\r
2017-08-12,46.30953569654981\r
2017-08-14,53.2840618524875\r
2017-08-17,53.2840618524875\r
2017-08-22,39.70597644674507\r
2017-08-24,50.0687078352979\r
2017-08-27,55.57886243637182\r
2017-08-29,39.997887485852175\r
2017-09-01,39.997887485852175\r
2017-09-03,42.660702461499476\r
2017-09-06,40.87838685508058\r
2017-09-08,42.96050163795966\r
2017-09-13,47.86257662100881\r
2017-09-16,54.26313548396679\r
2017-09-21,51.66707181115216\r
2017-09-23,47.55044388356765\r
2017-09-26,53.2840618524875\r
2017-09-28,53.2840618524875\r
2017-10-03,44.16749428341652\r
2017-10-08,44.16749428341652\r
2017-10-11,47.55044388356765\r
2017-10-13,42.96050163795966\r
2017-10-16,42.96050163795966\r
2017-10-18,42.96050163795966\r
2017-10-23,38.83503042971353\r
2017-10-26,35.703586729879426\r
2017-10-28,42.361685661879264\r
2017-10-31,37.1148172505306\r
2017-11-05,47.2390721409016\r
2017-11-07,45.69367333336821\r
2017-11-17,39.41486225685228\r
2017-11-20,44.47118454678934\r
2017-11-22,38.25840411304402\r
2017-11-25,38.25840411304402\r
2017-11-27,39.997887485852175\r
2017-11-30,40.87838685508058\r
2017-12-05,37.1148172505306\r
2017-12-07,37.1148172505306\r
2017-12-12,43.86457949267077\r
2017-12-15,43.86457949267077\r
2017-12-20,39.997887485852175\r
2017-12-25,30.529400785940496\r
2017-12-27,30.529400785940496\r
2018-01-09,46.92846267077787\r
2018-01-11,46.92846267077787\r
2018-01-19,45.386894655842006\r
2018-01-24,72.2610837370865\r
2018-01-29,72.2610837370865\r
2018-01-31,72.2610837370865\r
2018-02-25,86.59113453558575\r
2018-03-02,90.52067217612264\r
2018-03-07,90.52067217612264\r
2018-03-22,96.53581646285264\r
2018-03-30,99.39193008821594\r
2018-04-04,75.5675237381412\r
2018-04-06,75.5675237381412\r
2018-04-09,75.5675237381412\r
2018-04-19,80.44001859971407\r
2018-04-21,100.0\r
2018-04-24,83.8792675708522\r
2018-04-26,83.8792675708522\r
2018-05-11,91.31435060354137\r
2018-05-21,93.30980759844559\r
2018-05-24,91.71215646616896\r
2018-06-20,96.53581646285264\r
2018-06-23,98.57273559215368\r
2018-06-25,90.12480104898609\r
2018-07-08,99.39193008821594\r
2018-07-10,90.12480104898609\r
2018-07-13,79.30555082426478\r
2018-07-15,87.37184191862136\r
2018-07-18,87.37184191862136\r
2018-07-23,78.17709336664555\r
2018-07-25,77.05466826342999\r
2018-07-30,80.0611962103354\r
2018-08-02,80.81950638211006\r
2018-08-04,84.65080661026562\r
2018-08-12,74.45926142174584\r
2018-08-19,73.35710698658937\r
2018-08-22,67.22807899862056\r
2018-08-27,62.67678260004082\r
2018-09-01,70.80929766563587\r
2018-09-03,62.67678260004082\r
2018-09-08,76.6818709348396\r
2018-09-11,67.58308152279082\r
2018-09-16,68.29517259629375\r
2018-09-18,68.29517259629375\r
2018-09-23,63.71652279526678\r
2018-09-26,56.57333996588786\r
2018-09-28,67.58308152279082\r
2018-10-03,61.30039545133822\r
2018-10-06,63.36923521648077\r
2018-10-13,71.8971092121143\r
2018-10-16,67.22807899862056\r
2018-10-23,50.70580878597816\r
2018-11-15,71.53381943364994\r
2018-11-17,77.80228030768465\r
2018-11-22,77.80228030768465\r
2018-11-27,60.61647704959397\r
2018-12-07,64.41321556245279\r
2018-12-10,61.987166669752135\r
2018-12-27,59.93541964972798\r
2019-01-16,56.57333996588786\r
2019-01-19,56.57333996588786\r
2019-01-24,56.57333996588786\r
2019-01-26,56.57333996588786\r
2019-02-03,99.39193008821594\r
2019-02-13,99.39193008821594\r
2019-02-15,78.92872944280779\r
2019-02-18,78.92872944280779\r
2019-02-20,68.29517259629375\r
2019-02-23,75.5675237381412\r
2019-02-25,70.44806746076267\r
2019-02-28,75.93829783313217\r
2019-03-12,78.55257668488653\r
2019-03-22,70.08752557181207\r
2019-03-25,72.62574212616356\r
2019-03-27,71.17121528804617\r
2019-03-30,71.8971092121143\r
2019-04-01,71.8971092121143\r
2019-04-09,73.35710698658937\r
2019-05-01,54.919531946985934\r
2019-05-06,72.99108350086223\r
2019-05-09,72.99108350086223\r
2019-05-11,72.99108350086223\r
2019-05-14,65.11272528889229\r
2019-05-16,65.11272528889229\r
2019-05-29,83.49448514168787\r
2019-06-08,96.94193278155399\r
2019-06-13,91.71215646616896\r
2019-06-28,78.55257668488653\r
2019-07-05,89.72957627597054\r
2019-07-08,89.72957627597054\r
2019-07-10,72.99108350086223\r
2019-07-13,72.99108350086223\r
2019-07-15,69.3685103556178\r
2019-07-20,69.3685103556178\r
2019-07-23,61.30039545133822\r
2019-07-25,62.67678260004082\r
2019-07-28,52.95918082463365\r
2019-08-02,54.26313548396679\r
2019-08-04,47.2390721409016\r
2019-08-09,46.30953569654981\r
2019-08-14,47.55044388356765\r
2019-08-17,47.86257662100881\r
2019-08-22,43.86457949267077\r
2019-08-24,40.5840941648208\r
2019-08-29,43.56244153855347\r
2019-09-03,43.26108179339849\r
2019-09-06,43.26108179339849\r
2019-09-08,44.47118454678934\r
2019-09-11,42.361685661879264\r
2019-09-13,46.618616758413445\r
2019-09-16,44.16749428341652\r
2019-09-18,44.16749428341652\r
2019-09-21,44.16749428341652\r
2019-09-26,41.4693436335839\r
2019-10-08,43.26108179339849\r
2019-10-11,43.56244153855347\r
2019-10-13,41.17347049514298\r
2019-10-26,39.124546414976315\r
2019-12-05,76.30974717898759\r
2019-12-07,76.30974717898759\r
2019-12-10,76.30974717898759\r
2019-12-15,65.11272528889229\r
2019-12-17,68.65225928617271\r
2019-12-20,68.65225928617271\r
2019-12-25,52.95918082463365\r
2019-12-27,56.57333996588786\r
2019-12-30,57.57436924938756\r
2020-01-09,96.94193278155399\r
2020-01-11,100.0\r
2020-01-14,89.72957627597054\r
2020-01-16,96.94193278155399\r
2020-01-19,87.76317322533926\r
2020-01-29,83.8792675708522\r
2020-01-31,81.9619541115707\r
2020-02-03,85.42497277151591\r
2020-02-05,96.53581646285264\r
2020-02-10,96.53581646285264\r
2020-02-15,91.71215646616896\r
2020-02-18,91.71215646616896\r
2020-02-20,68.29517259629375\r
2020-02-23,68.29517259629375\r
2020-03-11,88.54778735389024\r
2020-03-21,88.54778735389024\r
2020-03-24,81.19965875828764\r
2020-03-26,81.9619541115707\r
2020-03-31,67.58308152279082\r
2020-04-03,74.8280046824345\r
2020-04-05,69.01003884563796\r
2020-04-08,69.3685103556178\r
2020-04-10,69.3685103556178\r
2020-04-15,68.29517259629375\r
2020-04-25,66.167254724232\r
2020-05-03,78.55257668488653\r
2020-05-05,94.91770913893835\r
2020-05-08,94.91770913893835\r
2020-05-18,83.8792675708522\r
2020-05-20,84.26470831713443\r
2020-05-25,87.37184191862136\r
2020-05-28,91.71215646616896\r
2020-05-30,86.20175995422076\r
2020-06-12,94.91770913893835\r
2020-06-14,85.03756168308445\r
2020-06-24,72.62574212616356\r
2020-07-04,72.62574212616356\r
2020-07-07,90.52067217612264\r
2020-07-09,75.93829783313217\r
2020-07-19,75.19742573851927\r
2020-07-22,77.05466826342999\r
2020-07-24,72.62574212616356\r
2020-07-27,66.87377306301197\r
2020-07-29,66.87377306301197\r
2020-08-03,66.87377306301197\r
2020-08-06,52.6350401418097\r
2020-08-08,51.66707181115216\r
2020-08-18,53.93604032819231\r
2020-08-21,47.2390721409016\r
2020-08-23,46.92846267077787\r
2020-08-31,42.361685661879264\r
2020-09-02,44.47118454678934\r
2020-09-05,40.29059388505672\r
2020-09-07,40.29059388505672\r
2020-09-10,44.16749428341652\r
2020-09-12,38.25840411304402\r
2020-09-17,36.83094334849371\r
2020-09-30,41.76600482814813\r
2020-10-12,41.17347049514298\r
2020-11-09,19.977912803705852\r
2020-11-11,25.415657081619546\r
2020-11-14,19.52835229517797\r
2020-11-21,26.66126821692561\r
2020-11-26,28.700011552077747\r
2020-11-29,28.700011552077747\r
2020-12-26,34.86666068008857\r
2021-01-03,68.65225928617271\r
2021-01-08,68.65225928617271\r
2021-01-10,68.65225928617271\r
2021-02-02,100.0\r
2021-02-14,96.13033525494585\r
2021-02-17,100.0\r
2021-02-19,94.51477522995442\r
2021-02-24,96.13033525494585\r
2021-02-27,91.31435060354137\r
2021-03-01,88.94106869836482\r
2021-03-04,90.9171889343786\r
2021-03-09,81.58047493232094\r
2021-03-14,73.35710698658937\r
2021-03-24,64.76261879244393\r
2021-03-29,91.71215646616896\r
2021-03-31,86.98116210670511\r
2021-04-03,86.98116210670511\r
2021-04-05,87.76317322533926\r
2021-04-08,87.76317322533926\r
2021-04-15,95.32128090614087\r
2021-04-20,91.71215646616896\r
2021-04-23,94.11247987249413\r
2021-05-03,88.15515528380577\r
2021-05-08,84.26470831713443\r
2021-05-20,70.44806746076267\r
2021-05-28,70.44806746076267\r
2021-05-30,100.0\r
2021-06-07,100.0\r
2021-06-09,92.5096979157948\r
2021-06-14,80.0611962103354\r
2021-06-22,83.8792675708522\r
2021-07-02,70.44806746076267\r
2021-07-09,70.44806746076267\r
2021-07-22,87.37184191862136\r
2021-08-11,77.42813833108416\r
2021-08-26,61.30039545133822\r
2021-08-28,61.643424966879955\r
2021-08-31,60.61647704959397\r
2021-09-05,61.643424966879955\r
2021-09-12,70.44806746076267\r
2021-09-17,70.44806746076267\r
2021-09-22,70.44806746076267\r
2021-10-07,66.167254724232\r
2021-10-12,70.08752557181207\r
2021-10-15,65.46353408423282\r
2021-10-17,65.81504421548824\r
2021-10-20,62.33161954935758\r
2021-10-27,57.90949654879351\r
2021-11-19,58.245347490543075\r
2021-12-14,94.51477522995442\r
2021-12-16,100.0\r
2021-12-19,92.5096979157948\r
2021-12-21,92.5096979157948\r
2022-01-13,64.0645165711092\r
2022-01-15,78.17709336664555\r
2022-01-23,77.42813833108416\r
2022-01-25,84.26470831713443\r
2022-02-09,77.80228030768465\r
2022-03-01,97.75606803189987\r
2022-03-09,98.57273559215368\r
2022-03-21,97.75606803189987\r
2022-03-24,100.0\r
2022-03-26,94.91770913893835\r
2022-04-05,86.98116210670511\r
2022-04-10,81.58047493232094\r
2022-05-08,64.0645165711092\r
2022-05-10,92.11060580757183\r
2022-05-15,64.41321556245279\r
2022-06-17,78.92872944280779\r
2022-06-19,78.92872944280779\r
2022-06-22,93.30980759844559\r
2022-06-24,88.94106869836482\r
2022-06-29,96.94193278155399\r
2022-07-02,100.0\r
2022-07-04,90.52067217612264\r
2022-07-12,77.05466826342999\r
2022-07-14,86.98116210670511\r
2022-07-17,72.99108350086223\r
2022-07-24,79.6830400165434\r
2022-07-27,67.58308152279082\r
2022-08-01,58.91921603521625\r
2022-08-03,61.30039545133822\r
2022-08-06,61.30039545133822\r
2022-08-08,61.30039545133822\r
2022-08-11,61.30039545133822\r
2022-08-13,55.90962514735577\r
2022-08-28,59.93541964972798\r
2022-09-05,60.27559020967214\r
2022-09-10,44.16749428341652\r
2022-09-12,44.16749428341652\r
2022-09-15,44.16749428341652\r
2022-09-20,50.0687078352979\r
2022-09-22,50.38688340148665\r
2022-10-02,48.175469082834184\r
2022-10-05,39.124546414976315\r
2022-10-07,37.1148172505306\r
2022-10-12,37.1148172505306\r
2022-10-15,43.56244153855347\r
2022-10-17,43.56244153855347\r
2022-11-11,40.87838685508058\r
2022-11-16,46.30953569654981\r
2022-12-04,39.41486225685228\r
2022-12-11,41.17347049514298\r
2022-12-14,41.17347049514298\r
2022-12-21,42.361685661879264\r
2022-12-24,43.86457949267077\r
2023-01-10,39.70597644674507\r
2023-01-18,52.6350401418097\r
2023-01-20,52.6350401418097\r
2023-02-02,56.57333996588786\r
2023-02-04,63.71652279526678\r
2023-02-09,53.2840618524875\r
2023-02-12,58.58192100681479\r
2023-02-14,53.2840618524875\r
2023-02-17,50.38688340148665\r
2023-02-19,50.38688340148665\r
2023-02-24,49.11869221983363\r
2023-03-01,48.175469082834184\r
2023-03-09,49.11869221983363\r
2023-03-16,60.958079138707475\r
2023-04-05,55.24883099857504\r
2023-04-08,55.57886243637182\r
2023-04-10,54.59096640050517\r
2023-04-18,53.2840618524875\r
2023-04-20,55.57886243637182\r
2023-05-05,63.71652279526678\r
2023-05-10,63.71652279526678\r
2023-05-28,63.36923521648077\r
2023-05-30,54.919531946985934\r
2023-06-02,67.22807899862056\r
2023-06-04,67.22807899862056\r
2023-06-24,62.67678260004082\r
2023-06-27,69.72767290124263\r
`;export{n as default};
