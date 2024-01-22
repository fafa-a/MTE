const r=`date,value\r
2017-02-11,48.6043426422963\r
2017-03-13,94.39202503391144\r
2017-03-30,95.0381704064163\r
2017-04-09,83.26394171987668\r
2017-04-12,100.0\r
2017-04-19,77.02453190685111\r
2017-04-22,82.28673026038746\r
2017-06-18,87.60082754470736\r
2017-06-21,70.87453034084668\r
2017-08-20,62.20266483829795\r
2017-08-27,76.51375004489722\r
2017-10-11,49.42152093477398\r
2017-10-14,45.54986917278779\r
2017-10-26,44.255175301005586\r
2017-11-13,37.091780336784964\r
2018-03-20,90.75683404766062\r
2018-04-17,92.91829558613111\r
2018-04-19,96.6090044901825\r
2018-04-22,91.93512494066354\r
2018-05-04,93.93338738718184\r
2018-05-19,97.95563673308588\r
2018-06-21,73.47160475017918\r
2018-06-23,93.10389818342783\r
2018-06-28,100.0\r
2018-07-08,86.51013014379069\r
2018-07-11,89.62566248314762\r
2018-07-16,100.0\r
2018-07-26,98.47848380993784\r
2018-08-02,92.47617473246936\r
2018-08-05,81.3268387582103\r
2018-09-11,75.06790053607429\r
2018-09-26,63.55347632774138\r
2018-09-29,53.60693337668362\r
2018-10-04,49.80824397201304\r
2018-10-09,48.39490411643105\r
2018-10-19,38.70691325932453\r
2018-10-21,46.385063271995065\r
2018-10-24,39.91594675368877\r
2018-11-18,35.815355671465696\r
2018-12-10,78.68515182390539\r
2018-12-25,76.74212571490237\r
2019-01-09,10.794621416219968\r
2019-01-17,37.713732092294464\r
2019-02-13,21.282942255343585\r
2019-02-23,11.713595096765504\r
2019-02-26,5.565113918287314\r
2019-03-23,61.86324950958839\r
2019-03-28,80.84822204628036\r
2019-04-09,65.51355914791719\r
2019-04-12,76.6077611847266\r
2019-04-19,49.737860267191486\r
2019-05-12,76.64806277523827\r
2019-05-14,64.20052159434879\r
2019-06-01,84.99316426870848\r
2019-06-18,65.84632336604469\r
2019-06-26,68.35885634873998\r
2019-07-01,76.93036029719619\r
2019-07-03,71.11060524911159\r
2019-07-08,48.26705388576504\r
2019-07-23,59.35493214857287\r
2019-08-22,40.75046204460448\r
2019-08-25,77.65776344806238\r
2019-09-04,51.092308089570395\r
2019-09-06,23.81611107986008\r
2019-09-16,43.87131595904737\r
2019-09-19,37.541834768687025\r
2019-10-11,25.995809859815765\r
2020-01-19,41.42418222863332\r
2020-02-06,25.78564722360035\r
2020-03-19,1.5417736957929429\r
2020-03-24,43.03950000323791\r
2020-03-27,70.44236759568044\r
2020-04-01,57.47989773423726\r
2020-04-11,63.41418778334319\r
2020-05-06,67.32449886298512\r
2020-05-18,55.90350139611861\r
2020-05-26,58.67428354098772\r
2020-05-28,68.54037772315294\r
2020-05-31,72.87577970263031\r
2020-06-02,70.52088085159711\r
2020-07-17,21.390816262303073\r
2020-07-20,94.86572957569862\r
2020-07-22,84.60484844577108\r
2020-07-30,55.599595355890905\r
2020-08-04,58.64957919696958\r
2020-08-06,45.789641721288675\r
2020-09-08,53.48690226318871\r
2020-09-10,47.31734599295547\r
2020-11-04,28.4212380950471\r
2020-11-19,61.913496432941926\r
2020-11-22,39.380789101984895\r
2020-11-29,15.664470825680766\r
2021-01-08,78.26557325001599\r
2021-02-27,99.5413817172155\r
2021-03-17,81.98466883747567\r
2021-03-22,74.7877712233743\r
2021-03-24,87.04095917384214\r
2021-03-29,97.53509091091131\r
2021-04-03,83.52606313839848\r
2021-04-13,90.70016967270331\r
2021-04-23,79.25473615898069\r
2021-04-28,100.0\r
2021-05-31,80.26142393262194\r
2021-07-17,71.07124230410409\r
2021-07-20,71.9124683136943\r
2021-08-11,83.02963157834381\r
2021-08-14,68.04802899767681\r
2021-08-26,75.3082731248518\r
2021-09-23,53.84724905168168\r
2021-09-30,41.74569040385449\r
2021-10-23,43.319959091717806\r
2021-10-28,37.89664311755372\r
2021-11-04,34.95125141914172\r
2021-11-19,39.2065359793925\r
2021-12-17,41.690202256157214\r
2022-01-06,82.82305971127526\r
2022-01-13,71.85980062711027\r
2022-01-21,71.00565261624274\r
2022-03-07,78.54972689089081\r
2022-03-22,86.27298456224702\r
2022-03-24,73.4450912817873\r
2022-03-27,84.21709182052192\r
2022-04-11,77.1052792346325\r
2022-04-16,93.8904261068881\r
2022-04-21,86.00818168244619\r
2022-05-06,79.63517543417112\r
2022-05-11,70.02409472105495\r
2022-05-21,74.8011032509625\r
2022-05-28,65.89756485953589\r
2022-05-31,97.99917391115738\r
2022-06-02,99.97922727479232\r
2022-06-15,100.0\r
2022-06-17,100.0\r
2022-07-02,95.19632758139632\r
2022-07-07,68.65714987544791\r
2022-07-10,70.11552501774442\r
2022-07-12,72.82289129360043\r
2022-08-06,52.876060675234385\r
2022-08-09,54.582293762161136\r
2022-08-11,59.988278636699356\r
2022-09-18,43.151614948904346\r
2022-09-20,38.306506869396536\r
2022-11-12,25.757030239650724\r
2022-11-19,27.02556706644799\r
2022-12-09,28.934200047801344\r
2023-01-11,69.34607326892558\r
2023-01-13,74.54792246244479\r
2023-02-05,76.97071512594546\r
2023-02-10,86.84527189026902\r
2023-02-12,79.36337467637156\r
2023-02-15,69.854395088215\r
2023-02-27,75.82990785323796\r
2023-03-04,79.01047053537908\r
2023-05-26,75.50876796315562\r
2023-05-28,90.51608727160477\r
2023-05-31,92.04894724392828\r
2023-06-02,66.66768795795991\r
2023-06-05,100.0\r
2023-06-15,87.29276035770982\r
2023-06-25,68.59226874673455\r
2023-07-07,89.27308670521789\r
2023-08-09,67.51806321751904\r
2023-09-03,61.13611174034214\r
2023-09-05,60.923497670701124\r
2023-09-15,61.46173597130036\r
2023-09-30,62.35370327885826\r
2023-10-05,44.889699423374665\r
2023-10-08,48.301911590961794\r
2023-10-10,46.01836391492588\r
`;export{r as default};