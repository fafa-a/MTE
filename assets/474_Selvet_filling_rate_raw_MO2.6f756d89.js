const r=`date,value\r
2017-01-03,89.15916280332812\r
2017-01-13,89.15916280332812\r
2017-02-22,89.91536499543388\r
2017-02-25,93.04977130823741\r
2017-03-07,92.763829939794\r
2017-03-14,96.30417863073578\r
2017-03-17,96.78488100039569\r
2017-03-27,94.86531096940458\r
2017-04-03,95.53617640312837\r
2017-04-06,96.20810277945066\r
2017-04-23,96.97731251430388\r
2017-05-03,97.36243313850402\r
2017-05-23,6.447825361225807\r
2017-05-26,40.36658834690102\r
2017-06-02,97.4587668922175\r
2017-06-05,99.87404080133142\r
2017-06-12,90.76780470537135\r
2017-06-15,89.53708439134415\r
2017-06-22,89.53708439134415\r
2017-06-25,97.07356048837896\r
2017-07-02,93.8132473245617\r
2017-07-05,93.43133396502313\r
2017-07-07,98.80968281886113\r
2017-07-17,98.80968281886113\r
2017-07-27,91.43206100259172\r
2017-08-04,96.40027603865802\r
2017-08-06,97.65149863518226\r
2017-08-11,97.65149863518226\r
2017-08-14,96.68869748404725\r
2017-08-19,99.29316400168402\r
2017-08-21,95.72804728765398\r
2017-08-24,95.72804728765398\r
2017-08-26,92.57331236791813\r
2017-08-29,92.66856014485538\r
2017-09-03,90.67299992863862\r
2017-09-20,93.8132473245617\r
2017-09-23,97.65149863518226\r
2017-09-28,96.97731251430388\r
2017-10-03,97.65149863518226\r
2017-10-05,91.71707524765237\r
2017-10-08,91.71707524765237\r
2017-10-10,92.95443553390616\r
2017-10-13,91.43206100259172\r
2017-10-15,91.52704358646882\r
2017-10-18,91.6220483390399\r
2017-10-25,88.21593503057169\r
2017-10-28,82.32617402325543\r
2017-10-30,81.49231046761997\r
2017-11-07,82.23342832387353\r
2017-11-14,84.18600368539822\r
2017-11-17,84.18600368539822\r
2017-11-19,79.46205775887101\r
2017-11-22,76.89489541261804\r
2017-11-27,76.89489541261804\r
2017-12-02,76.07378190060336\r
2017-12-07,46.71501154179437\r
2017-12-09,61.90679442113096\r
2017-12-12,55.03676604215389\r
2017-12-14,55.03676604215389\r
2017-12-19,70.29279756393694\r
2018-01-28,77.71798525161266\r
2018-02-02,79.7382310810324\r
2018-02-10,8.949158360143906\r
2018-02-12,11.085294605747407\r
2018-02-22,6.975685977158745\r
2018-03-22,90.57821743526182\r
2018-03-29,90.57821743526182\r
2018-04-01,90.57821743526182\r
2018-04-06,93.7177361493718\r
2018-04-21,97.7478966011637\r
2018-04-23,97.7478966011637\r
2018-04-26,100.0\r
2018-05-06,99.97092761925555\r
2018-05-11,99.38992387506455\r
2018-05-18,99.38992387506455\r
2018-05-21,99.38992387506455\r
2018-05-23,100.0\r
2018-05-28,100.0\r
2018-06-10,96.78488100039569\r
2018-06-20,96.78488100039569\r
2018-06-22,94.76955989773937\r
2018-06-25,91.24216239161717\r
2018-06-27,92.09740419007127\r
2018-07-02,93.33591039163208\r
2018-07-07,95.72804728765398\r
2018-07-10,96.30417863073578\r
2018-07-12,93.7177361493718\r
2018-07-15,94.48243721935661\r
2018-07-17,94.48243721935661\r
2018-07-20,98.13370215764411\r
2018-07-22,94.76955989773937\r
2018-07-25,94.76955989773937\r
2018-07-27,94.09991201968062\r
2018-07-30,94.76955989773937\r
2018-08-01,93.8132473245617\r
2018-08-04,93.8132473245617\r
2018-08-06,94.00433527195358\r
2018-08-11,90.95748105767932\r
2018-08-16,93.7177361493718\r
2018-08-19,92.2877012698348\r
2018-08-21,89.82076123223155\r
2018-08-26,87.93340724054258\r
2018-08-31,87.08704910661777\r
2018-09-03,86.99312305269082\r
2018-09-08,82.32617402325543\r
2018-09-10,81.21478078806537\r
2018-09-13,82.23342832387353\r
2018-09-18,81.58486764369381\r
2018-09-20,78.9103585011785\r
2018-09-23,77.9011613301844\r
2018-09-25,79.92246623581075\r
2018-09-28,77.07763388109694\r
2018-09-30,77.07763388109694\r
2018-10-03,78.17610709636995\r
2018-10-05,72.71911010769718\r
2018-10-13,70.11380981685599\r
2018-10-20,64.5290272830176\r
2018-10-23,61.21168757133065\r
2018-10-25,58.87883778941918\r
2018-10-30,58.87883778941918\r
2018-11-04,56.737152403596994\r
2018-11-22,43.71577967044205\r
2018-11-29,44.60275783023078\r
2018-12-27,74.52822346257965\r
2018-12-29,74.52822346257965\r
2019-01-03,78.63483339406058\r
2019-01-06,78.63483339406058\r
2019-01-11,78.63483339406058\r
2019-01-16,87.93340724054258\r
2019-01-23,81.12231822710787\r
2019-01-28,75.16376571730144\r
2019-03-12,1.6392392568702747\r
2019-03-22,88.02756052557865\r
2019-03-24,90.19931055215157\r
2019-03-27,86.52383501282978\r
2019-03-29,89.15916280332812\r
2019-04-01,88.12173646002944\r
2019-04-13,89.34807866814774\r
2019-05-01,93.33591039163208\r
2019-05-06,96.78488100039569\r
2019-05-11,96.78488100039569\r
2019-05-13,94.3867732124823\r
2019-05-16,94.3867732124823\r
2019-05-23,95.53617640312837\r
2019-05-31,99.68033056425388\r
2019-06-02,93.90878036950421\r
2019-06-17,94.76955989773937\r
2019-06-27,94.76955989773937\r
2019-06-30,94.57812301060882\r
2019-07-02,95.34439212592306\r
2019-07-05,97.7478966011637\r
2019-07-07,97.36243313850402\r
2019-07-10,97.4587668922175\r
2019-07-12,97.4587668922175\r
2019-07-15,97.94075666406418\r
2019-07-17,96.8810860143979\r
2019-07-20,96.0160157941815\r
2019-07-22,92.57331236791813\r
2019-07-25,91.24216239161717\r
2019-08-04,86.89921979599204\r
2019-08-09,77.53490619864077\r
2019-08-14,74.3468631133059\r
2019-08-16,75.3455718251995\r
2019-08-21,74.9820584357499\r
2019-08-24,66.73271929376645\r
2019-08-26,66.0257295601091\r
2019-08-29,66.0257295601091\r
2019-08-31,66.73271929376645\r
2019-09-03,69.66678999902548\r
2019-09-05,69.66678999902548\r
2019-09-08,69.57746324590873\r
2019-09-13,70.74071522183058\r
2019-09-15,70.74071522183058\r
2019-09-18,60.60492096819555\r
2019-09-20,60.60492096819555\r
2019-10-03,60.60492096819555\r
2019-10-08,50.920819613576775\r
2019-10-13,54.106541649551566\r
2019-10-25,62.69089214228124\r
2019-12-29,82.23342832387353\r
2020-01-06,60.43180908184952\r
2020-01-11,60.43180908184952\r
2020-01-16,82.88314120167816\r
2020-01-18,75.43651189798189\r
2020-02-05,85.11940753468905\r
2020-02-07,88.49866642579664\r
2020-02-12,88.49866642579664\r
2020-02-15,88.49866642579664\r
2020-02-20,85.39987923089262\r
2020-02-22,80.75270504046465\r
2020-03-08,76.16491877620363\r
2020-03-18,90.57821743526182\r
2020-03-21,90.76780470537135\r
2020-03-28,89.53708439134415\r
2020-03-31,89.72617986848601\r
2020-04-02,89.72617986848601\r
2020-04-05,91.14724638991215\r
2020-04-07,91.05235260768616\r
2020-04-10,91.05235260768616\r
2020-04-12,91.05235260768616\r
2020-04-15,92.2877012698348\r
2020-04-25,98.90633659289779\r
2020-05-07,99.00301160960832\r
2020-05-17,92.2877012698348\r
2020-05-20,90.86263175264925\r
2020-05-22,98.03721873780444\r
2020-05-25,99.77717511256905\r
2020-05-30,99.77717511256905\r
2020-06-21,93.33591039163208\r
2020-06-24,93.33591039163208\r
2020-06-26,95.44027343262773\r
2020-06-29,95.44027343262773\r
2020-07-01,95.44027343262773\r
2020-07-04,98.42328037831855\r
2020-07-06,97.7478966011637\r
2020-07-09,97.07356048837896\r
2020-07-11,98.51984906718997\r
2020-07-14,98.51984906718997\r
2020-07-19,96.97731251430388\r
2020-07-21,95.34439212592306\r
2020-07-24,93.62224685619674\r
2020-07-26,98.03721873780444\r
2020-07-29,95.72804728765398\r
2020-07-31,93.33591039163208\r
2020-08-05,88.21593503057169\r
2020-08-08,92.38288291791883\r
2020-08-10,91.52704358646882\r
2020-08-15,88.31015622390092\r
2020-08-20,87.18099794423925\r
2020-08-25,88.02756052557865\r
2020-09-02,74.2562202137371\r
2020-09-04,74.3468631133059\r
2020-09-07,72.5387500490683\r
2020-09-12,69.8455207701073\r
2020-09-14,67.26407002573553\r
2020-09-17,62.08084646753229\r
2020-11-06,93.43133396502313\r
2020-11-08,94.57812301060882\r
2020-11-11,88.49866642579664\r
2020-11-18,88.59295540784821\r
2020-11-21,83.99960101401163\r
2020-11-23,82.23342832387353\r
2020-11-28,81.30726702501539\r
2021-01-07,41.158550414815764\r
2021-01-10,41.158550414815764\r
2021-01-17,41.158550414815764\r
2021-02-14,85.86779247946221\r
2021-02-19,91.6220483390399\r
2021-02-24,86.14881607306368\r
2021-02-26,89.15916280332812\r
2021-03-01,89.15916280332812\r
2021-03-06,82.97605109305553\r
2021-03-23,92.763829939794\r
2021-03-28,94.76955989773937\r
2021-03-31,95.53617640312837\r
2021-04-02,98.42328037831855\r
2021-04-05,97.36243313850402\r
2021-04-15,99.38992387506455\r
2021-04-17,99.58350716768595\r
2021-05-27,95.0568783085235\r
2021-05-30,95.0568783085235\r
2021-06-01,95.0568783085235\r
2021-06-14,97.55512206165776\r
2021-06-16,100.0\r
2021-06-19,100.0\r
2021-06-26,96.30417863073578\r
2021-07-01,98.23020691203156\r
2021-07-09,95.34439212592306\r
2021-07-11,99.29316400168402\r
2021-07-19,100.0\r
2021-07-21,100.0\r
2021-07-26,91.52704358646882\r
2021-07-29,91.52704358646882\r
2021-08-20,88.68726695965677\r
2021-08-23,87.74516867210248\r
2021-08-25,87.74516867210248\r
2021-08-28,93.14512905088537\r
2021-08-30,89.72617986848601\r
2021-09-04,94.3867732124823\r
2021-09-07,94.3867732124823\r
2021-09-22,87.08704910661777\r
2021-09-24,89.15916280332812\r
2021-10-07,89.91536499543388\r
2021-10-09,89.91536499543388\r
2021-10-12,90.76780470537135\r
2021-10-14,88.78160106801155\r
2021-10-17,90.10463966833885\r
2021-10-19,87.83927661826347\r
2021-10-24,87.65108341543971\r
2021-10-27,84.65241633474255\r
2021-11-06,85.58697553638147\r
2021-11-11,87.74516867210248\r
2021-11-18,87.74516867210248\r
2021-12-11,75.6184659993498\r
2021-12-16,89.06473860052449\r
2021-12-18,85.11940753468905\r
2021-12-21,84.74576834683084\r
2021-12-23,88.59295540784821\r
2022-01-15,92.38288291791883\r
2022-01-17,83.16194105572572\r
2022-01-22,78.54303987176759\r
2022-01-25,80.93746419257779\r
2022-01-27,82.32617402325543\r
2022-01-30,84.37249920660506\r
2022-02-09,89.72617986848601\r
2022-03-01,1.2653530607441985\r
2022-03-06,1.2653530607441985\r
2022-03-08,92.09740419007127\r
2022-03-23,94.29113100213308\r
2022-03-26,95.1526945518611\r
2022-03-28,92.00228878347242\r
2022-04-05,92.38288291791883\r
2022-04-15,90.86263175264925\r
2022-04-17,94.86531096940458\r
2022-04-22,94.86531096940458\r
2022-05-17,93.14512905088537\r
2022-05-20,93.04977130823741\r
2022-05-22,93.04977130823741\r
2022-05-27,98.23020691203156\r
2022-05-30,98.23020691203156\r
2022-06-01,100.0\r
2022-06-04,97.4587668922175\r
2022-06-06,99.77717511256905\r
2022-06-11,99.00301160960832\r
2022-06-14,96.11204849664617\r
2022-06-16,100.0\r
2022-06-19,94.57812301060882\r
2022-07-01,94.19551060047256\r
2022-07-04,94.19551060047256\r
2022-07-06,96.49639499138956\r
2022-07-11,93.14512905088537\r
2022-07-14,93.43133396502313\r
2022-07-16,94.57812301060882\r
2022-07-19,92.763829939794\r
2022-07-21,92.763829939794\r
2022-07-24,92.763829939794\r
2022-07-26,91.6220483390399\r
2022-07-31,90.48345723806946\r
2022-08-03,89.72617986848601\r
2022-08-05,85.58697553638147\r
2022-08-08,80.93746419257779\r
2022-08-10,81.02987935698913\r
2022-08-13,80.29122305521264\r
2022-08-20,86.80533935007439\r
2022-08-28,65.5847226794402\r
2022-08-30,69.22041420784049\r
2022-09-02,69.22041420784049\r
2022-09-04,66.29065224508655\r
2022-09-12,67.08684785782468\r
2022-09-19,68.77468472542213\r
2022-09-22,65.5847226794402\r
2022-10-04,67.26407002573553\r
2022-10-07,71.45871089716343\r
2022-10-09,67.53010020550512\r
2022-10-12,67.53010020550512\r
2022-10-19,66.37901278249291\r
2022-10-22,62.25500830704114\r
2022-10-24,62.51645655857985\r
2022-11-11,61.55902038732517\r
2022-11-13,61.55902038732517\r
2022-11-16,61.55902038732517\r
2022-12-06,69.8455207701073\r
2022-12-11,69.8455207701073\r
2022-12-16,69.8455207701073\r
2022-12-28,90.29400378364126\r
2023-01-20,77.53490619864077\r
2023-01-30,77.53490619864077\r
2023-02-06,64.44122684614987\r
2023-02-09,64.44122684614987\r
2023-02-11,78.17610709636995\r
2023-02-14,86.05511860364274\r
2023-02-16,88.49866642579664\r
2023-02-19,86.89921979599204\r
2023-02-26,88.31015622390092\r
2023-03-16,95.44027343262773\r
2023-03-28,91.90719548247787\r
2023-04-05,92.85912174028746\r
2023-04-07,91.14724638991215\r
2023-04-17,90.00999114512098\r
2023-05-27,90.19931055215157\r
2023-05-30,90.19931055215157\r
2023-06-04,90.76780470537135\r
2023-06-24,91.24216239161717\r
2023-06-26,91.43206100259172\r
2023-06-29,91.43206100259172\r
2023-07-09,97.36243313850402\r
2023-07-11,97.36243313850402\r
2023-07-14,99.19642532539662\r
2023-07-16,99.19642532539662\r
2023-07-19,99.68033056425388\r
2023-07-31,87.74516867210248\r
2023-08-08,88.02756052557865\r
2023-08-10,88.02756052557865\r
2023-08-13,90.48345723806946\r
2023-08-15,86.4300459459557\r
2023-08-18,86.4300459459557\r
2023-08-20,86.61764694489163\r
2023-08-23,87.08704910661777\r
2023-09-04,91.05235260768616\r
2023-09-07,91.05235260768616\r
2023-09-14,91.05235260768616\r
2023-09-24,86.05511860364274\r
2023-09-27,86.05511860364274\r
2023-09-29,85.21287504662718\r
2023-10-02,85.21287504662718\r
2023-10-04,83.16194105572572\r
2023-10-07,82.79025472283857\r
2023-10-09,84.09279073640226\r
2023-10-12,80.93746419257779\r
2023-11-26,76.25608017914116\r
2023-11-28,76.25608017914116\r
2023-12-03,82.88314120167816\r
2023-12-06,80.19899807444382\r
`;export{r as default};
