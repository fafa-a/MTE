const r=`date,value\r
2017-02-15,77.76311970807721\r
2017-02-25,79.96907066867416\r
2017-03-17,90.01950465199201\r
2017-03-27,90.2333010763123\r
2017-04-03,90.26003658298733\r
2017-04-06,90.09966005088016\r
2017-04-23,91.49249570506183\r
2017-05-16,100.0\r
2017-05-23,100.0\r
2017-05-26,100.0\r
2017-06-02,91.62676774894157\r
2017-06-05,91.62676774894157\r
2017-06-15,92.32595652743683\r
2017-06-22,95.1933201378886\r
2017-06-25,95.1933201378886\r
2017-07-02,95.35642765869979\r
2017-07-05,98.85639430496977\r
2017-07-07,98.85639430496977\r
2017-07-17,95.05746275600667\r
2017-07-18,95.05746275600667\r
2017-07-22,97.26567067927355\r
2017-08-14,96.03696480069355\r
2017-08-19,95.24767977908584\r
2017-08-21,96.28232186732266\r
2017-08-22,96.30959563392084\r
2017-08-24,96.30959563392084\r
2017-08-26,96.58246377825373\r
2017-08-27,96.58246377825373\r
2017-08-29,94.46039909765193\r
2017-09-03,94.78592690867576\r
2017-10-05,84.09702545228957\r
2017-10-06,84.09702545228957\r
2017-10-11,84.09702545228957\r
2017-10-13,84.3587709086754\r
2017-10-15,81.70073824352347\r
2017-10-16,82.55782699651088\r
2017-10-18,81.18262991196829\r
2017-10-25,82.21985797593308\r
2017-10-26,78.94068911340825\r
2017-10-28,78.94068911340825\r
2017-11-22,62.222504148875046\r
2017-11-27,62.222504148875046\r
2018-02-25,82.40178836870739\r
2018-02-27,78.94068911340825\r
2018-03-05,80.38156659292774\r
2018-03-14,88.04929641199202\r
2018-03-17,88.04929641199202\r
2018-03-19,88.58046336623855\r
2018-03-20,88.58046336623855\r
2018-03-24,88.58046336623855\r
2018-04-18,92.67616267687919\r
2018-04-19,92.67616267687919\r
2018-04-21,91.6804935025024\r
2018-04-26,91.6804935025024\r
2018-05-06,91.0900427892109\r
2018-05-08,93.64808684969084\r
2018-05-11,89.32574360146418\r
2018-05-18,88.60704746728045\r
2018-05-19,91.0900427892109\r
2018-05-21,90.87562424220481\r
2018-05-24,89.565705018549\r
2018-05-26,89.565705018549\r
2018-06-20,94.9216650019775\r
2018-06-22,96.99221038734612\r
2018-06-23,96.99221038734612\r
2018-06-25,96.39143117134154\r
2018-06-27,94.10813250725234\r
2018-06-28,94.10813250725234\r
2018-07-03,96.2005148087825\r
2018-07-07,91.6804935025024\r
2018-07-08,96.55516629220031\r
2018-07-12,91.59990850075891\r
2018-07-25,92.27211482453882\r
2018-07-27,97.32039111494501\r
2018-07-28,97.32039111494501\r
2018-07-30,97.32039111494501\r
2018-08-01,97.32039111494501\r
2018-08-02,97.32039111494501\r
2018-08-04,97.32039111494501\r
2018-08-06,95.27486317473016\r
2018-08-07,93.8915541562685\r
2018-08-11,94.43328731471469\r
2018-08-12,94.43328731471469\r
2018-08-14,94.43328731471469\r
2018-08-16,94.43328731471469\r
2018-08-19,95.24767977908584\r
2018-08-22,94.84021498460307\r
2018-08-26,96.2005148087825\r
2018-09-01,93.94568437040006\r
2018-09-03,94.02689766061046\r
2018-09-05,94.02689766061046\r
2018-09-08,91.30461651333806\r
2018-09-10,93.62104691762812\r
2018-09-11,93.62104691762812\r
2018-09-18,92.21828277211692\r
2018-09-20,91.6804935025024\r
2018-09-25,92.51447845375925\r
2018-09-26,92.51447845375925\r
2018-09-28,92.51447845375925\r
2018-09-30,93.29675494358455\r
2018-10-05,88.66022302092779\r
2018-10-06,95.24767977908584\r
2018-10-10,94.32486409741047\r
2018-10-11,89.08598006701641\r
2018-10-13,93.86449264380387\r
2018-10-16,87.38671982039308\r
2018-10-18,92.73007668926716\r
2018-10-20,90.04622068294083\r
2018-10-21,89.75247835305505\r
2018-10-23,89.75247835305505\r
2018-10-25,91.65362941628052\r
2018-10-30,89.96607989752935\r
2018-11-04,86.75209492596227\r
2018-11-09,90.60781949120422\r
2018-11-14,90.60781949120422\r
2018-11-19,85.98715561060396\r
2018-11-22,71.85798648392061\r
2018-11-24,71.85798648392061\r
2018-11-27,70.09482041849408\r
2019-01-28,77.20186007991522\r
2019-02-03,64.86283090393997\r
2019-02-05,88.34131678137803\r
2019-02-13,79.96907066867416\r
2019-02-15,80.14945740359502\r
2019-02-17,78.58172304204776\r
2019-02-18,78.58172304204776\r
2019-02-20,80.94981179343836\r
2019-02-22,80.48479240114051\r
2019-02-23,80.48479240114051\r
2019-02-25,77.63545104927181\r
2019-02-27,80.20101940075764\r
2019-03-07,81.20851126950181\r
2019-03-22,84.69941333069666\r
2019-03-24,85.22430125584657\r
2019-03-27,84.83054189473154\r
2019-03-29,85.56601216093506\r
2019-03-30,85.56601216093506\r
2019-04-01,84.80431119650426\r
2019-04-08,85.64492815926693\r
2019-04-09,85.53971179543566\r
2019-04-11,86.62006039819545\r
2019-04-13,85.80282718771393\r
2019-04-14,86.96347863104624\r
2019-05-13,91.86860981183199\r
2019-05-14,91.86860981183199\r
2019-05-16,95.492416106388\r
2019-05-23,93.35077959474084\r
2019-05-28,93.81037680940881\r
2019-05-29,93.8915541562685\r
2019-05-31,94.89451260940605\r
2019-06-02,93.29675494358455\r
2019-06-08,91.3582841742986\r
2019-06-27,93.72922103814939\r
2019-06-28,93.72922103814939\r
2019-06-30,97.75849478345174\r
2019-07-02,93.70217391021843\r
2019-07-03,93.70217391021843\r
2019-07-05,96.39143117134154\r
2019-07-07,95.92797897261563\r
2019-07-08,95.92797897261563\r
2019-07-10,96.44600005838744\r
2019-07-12,96.77361254081951\r
2019-07-13,96.69167742511715\r
2019-07-15,96.91021843789332\r
2019-07-17,96.11872911757023\r
2019-07-20,95.65568081108974\r
2019-07-22,95.22049876671791\r
2019-07-23,95.22049876671791\r
2019-07-25,94.89451260940605\r
2019-08-02,95.1389700318954\r
2019-08-04,97.6215224519883\r
2019-08-09,98.30697366300677\r
2019-08-12,98.2246417441611\r
2019-08-14,97.51198707902947\r
2019-08-24,93.51291118361803\r
2019-08-26,93.56697425124042\r
2019-08-29,93.56697425124042\r
2019-08-31,93.51291118361803\r
2019-09-03,93.05376296162021\r
2019-09-06,93.05376296162021\r
2019-09-10,92.6492092833875\r
2019-09-13,89.80586411370103\r
2019-09-15,89.88596103860509\r
2019-09-16,89.37905126705947\r
2019-09-18,89.27244570784862\r
2019-09-20,89.16587924555385\r
2019-09-21,89.16587924555385\r
2019-10-03,91.54619726295643\r
2019-10-13,83.10467571197093\r
2019-10-21,83.10467571197093\r
2019-11-07,79.94331133046029\r
2019-11-09,79.94331133046029\r
2019-11-20,79.94331133046029\r
2019-11-22,81.33795606689105\r
2019-11-24,74.56562470158407\r
2019-12-04,74.56562470158407\r
2019-12-05,74.56562470158407\r
2020-01-06,63.08289682816761\r
2020-01-13,63.08289682816761\r
2020-01-16,65.34649890588517\r
2020-01-18,65.24967701598864\r
2020-01-19,65.24967701598864\r
2020-01-21,62.60445269164347\r
2020-01-24,63.874771121788264\r
2020-02-07,75.297896746556\r
2020-02-12,75.297896746556\r
2020-02-15,82.5318142608942\r
2020-02-18,82.5318142608942\r
2020-02-20,82.5318142608942\r
2020-02-22,79.1717182620961\r
2020-03-18,90.90241806951381\r
2020-03-19,90.90241806951381\r
2020-03-21,90.90241806951381\r
2020-03-23,90.1798373637165\r
2020-03-24,90.1798373637165\r
2020-03-26,90.1798373637165\r
2020-03-28,90.50076560437682\r
2020-03-31,89.77917001426276\r
2020-04-02,90.87562424220481\r
2020-04-05,90.52752543070103\r
2020-04-07,90.52752543070103\r
2020-04-08,89.27244570784862\r
2020-04-10,90.63458903762589\r
2020-04-12,91.81485020729359\r
2020-04-13,90.60781949120422\r
2020-04-15,91.38512163775829\r
2020-04-17,91.92237908316653\r
2020-04-22,94.02689766061046\r
2020-04-23,94.02689766061046\r
2020-04-27,96.69167742511715\r
2020-05-07,97.59413506696484\r
2020-05-17,94.73164838373233\r
2020-05-18,94.73164838373233\r
2020-05-20,93.81037680940881\r
2020-05-25,97.70369877061802\r
2020-05-27,92.67616267687919\r
2020-05-28,92.67616267687919\r
2020-05-30,96.22778145449422\r
2020-06-01,95.68289992446198\r
2020-06-02,97.84070649822215\r
2020-06-24,100.0\r
2020-06-26,100.0\r
2020-06-29,100.0\r
2020-07-04,99.07642580201752\r
2020-07-06,99.29660752865414\r
2020-07-07,99.29660752865414\r
2020-07-09,98.14233102179321\r
2020-07-11,96.80092898383118\r
2020-07-12,98.25208336228364\r
2020-07-14,98.25208336228364\r
2020-07-17,98.36187338134388\r
2020-07-19,98.2246417441611\r
2020-07-21,99.35167641861871\r
2020-07-22,98.1148988258498\r
2020-07-24,100.0\r
2020-07-27,100.0\r
2020-07-29,99.90288085006327\r
2020-07-31,99.90288085006327\r
2020-08-05,99.93046565645017\r
2020-08-06,99.93046565645017\r
2020-08-08,100.0\r
2020-08-10,100.0\r
2020-08-15,98.96639126675043\r
2020-08-20,98.3344223451003\r
2020-08-25,97.92293944150022\r
2020-09-04,99.15897635138602\r
2020-09-07,98.58156639031246\r
2020-09-09,96.85556897497435\r
2020-09-10,96.85556897497435\r
2020-09-12,97.42986034716395\r
2020-09-14,96.33687177362937\r
2020-09-15,96.33687177362937\r
2020-09-17,96.17325053721825\r
2020-11-18,78.30003115288568\r
2020-11-19,78.30003115288568\r
2020-11-21,74.6412749760588\r
2020-11-23,74.6412749760588\r
2020-11-28,72.05749500260795\r
2020-11-29,72.05749500260795\r
2020-12-04,73.38352050484437\r
2020-12-11,70.98713836428503\r
2020-12-13,70.98713836428503\r
2020-12-18,73.35843247304543\r
2020-12-24,73.35843247304543\r
2021-01-10,52.277897307471754\r
2021-02-14,79.86604861580288\r
2021-02-17,79.86604861580288\r
2021-02-21,82.29781301641715\r
2021-02-24,82.1419256364342\r
2021-02-27,86.56726389002363\r
2021-03-01,83.91395239321061\r
2021-03-04,88.66022302092779\r
2021-03-06,86.3034297588786\r
2021-03-08,85.40824723577349\r
2021-03-09,85.40824723577349\r
2021-03-14,88.07583144105777\r
2021-03-23,88.20854342523782\r
2021-03-24,88.20854342523782\r
2021-03-28,92.40673717167958\r
2021-03-29,92.40673717167958\r
2021-03-31,90.52752543070103\r
2021-04-02,92.91885157103614\r
2021-04-03,91.41196152283858\r
2021-04-05,91.41196152283858\r
2021-04-07,91.41196152283858\r
2021-04-08,92.6222582987241\r
2021-04-22,89.40570876364716\r
2021-04-23,89.40570876364716\r
2021-04-25,89.40570876364716\r
2021-04-27,95.35642765869979\r
2021-05-03,93.13473865554704\r
2021-05-05,93.13473865554704\r
2021-06-14,96.22778145449422\r
2021-06-16,98.49916386594934\r
2021-06-26,94.18938890314972\r
2021-07-19,94.18938890314972\r
2021-07-21,96.17325053721825\r
2021-07-22,96.17325053721825\r
2021-07-29,95.98246713420366\r
2021-08-10,90.90241806951381\r
2021-08-11,90.90241806951381\r
2021-08-15,91.06323198169694\r
2021-08-20,92.78400033372799\r
2021-08-25,89.565705018549\r
2021-08-26,89.80586411370103\r
2021-09-02,94.65024850902688\r
2021-09-05,94.2977642730198\r
2021-09-07,95.1933201378886\r
2021-09-12,95.1933201378886\r
2021-09-17,91.19731026293661\r
2021-09-22,88.28820007656508\r
2021-09-24,90.92921432339315\r
2021-09-25,90.92921432339315\r
2021-09-27,90.92921432339315\r
2021-09-30,90.92921432339315\r
2021-10-02,90.12638338731367\r
2021-10-04,94.10813250725234\r
2021-10-09,93.16173536183891\r
2021-10-14,84.8567750850745\r
2021-10-15,84.8567750850745\r
2021-10-17,84.8567750850745\r
2021-10-19,87.28085034686546\r
2021-10-22,83.41765823806865\r
2021-10-24,86.27705995692682\r
2021-10-27,83.31329057063297\r
2021-11-01,87.22793039838209\r
2021-11-11,76.61642609589285\r
2021-12-18,60.34720486272581\r
2021-12-21,60.34720486272581\r
2021-12-23,62.46113784271521\r
2022-01-15,56.76592437959825\r
2022-01-25,56.76592437959825\r
2022-02-09,58.536447997081034\r
2022-02-26,53.95899731080209\r
2022-02-27,53.95899731080209\r
2022-03-06,54.98924483723391\r
2022-03-08,52.34573149801184\r
2022-03-09,53.48026862713954\r
2022-03-23,54.370377786098636\r
2022-03-24,54.370377786098636\r
2022-03-26,55.63330080149178\r
2022-04-17,61.79367150556394\r
2022-04-20,61.79367150556394\r
2022-04-22,62.17481109807059\r
2022-06-11,72.15731296814283\r
2022-06-14,72.15731296814283\r
2022-06-16,73.10769717628621\r
2022-06-21,72.25717337425121\r
2022-06-29,76.64185126541032\r
2022-07-02,71.38483555370166\r
2022-07-04,71.38483555370166\r
2022-07-06,75.0704046797762\r
2022-07-11,80.35576650113089\r
2022-07-12,80.35576650113089\r
2022-07-14,78.24884784686353\r
2022-07-16,79.0946855002894\r
2022-07-17,78.76114324810611\r
2022-07-19,79.81455289252078\r
2022-07-21,79.81455289252078\r
2022-07-24,79.58294846730608\r
2022-07-31,81.96017183919238\r
2022-08-03,77.86530102512833\r
2022-08-06,81.67480878559815\r
2022-08-08,76.03236323852674\r
2022-08-10,77.55888079633621\r
2022-08-11,76.05772870984066\r
2022-08-13,76.36231701089608\r
2022-08-18,74.76741112526845\r
2022-09-02,66.39011390129052\r
2022-09-04,64.95947616423017\r
2022-09-12,63.01105889064157\r
2022-09-19,61.1046945793872\r
2022-09-20,61.1046945793872\r
2022-09-22,61.31826095365555\r
2022-10-09,61.365751226416556\r
2022-10-19,61.365751226416556\r
2022-10-22,59.404436538427696\r
2022-11-11,57.672395829723136\r
2022-11-13,57.672395829723136\r
2022-12-11,61.41325279313226\r
2022-12-16,61.41325279313226\r
2023-02-09,74.91886084324723\r
2023-02-11,77.15089844854053\r
2023-02-12,77.15089844854053\r
2023-02-14,72.23220429515814\r
2023-02-16,72.23220429515814\r
2023-03-01,76.0070003667878\r
2023-03-04,76.0070003667878\r
2023-04-05,84.7256340574886\r
2023-04-08,84.7256340574886\r
2023-04-13,84.7256340574886\r
2023-04-20,86.62006039819545\r
`;export{r as default};
