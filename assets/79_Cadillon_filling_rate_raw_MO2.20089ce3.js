const n=`date,value\r
2017-01-26,40.04387179434167\r
2017-01-29,40.04387179434167\r
2017-02-15,58.54946488399098\r
2017-02-18,60.55988906733602\r
2017-02-25,59.18605431705708\r
2017-03-10,67.72264399463357\r
2017-03-17,67.72264399463357\r
2017-03-30,68.10890735967313\r
2017-04-06,80.01822268822279\r
2017-04-09,82.30760434975224\r
2017-04-19,84.62403019015753\r
2017-04-29,93.6046998218508\r
2017-05-06,94.49032581727963\r
2017-05-09,87.07453364216975\r
2017-05-16,87.39632693882143\r
2017-05-19,96.27206557283677\r
2017-05-26,96.94381639509548\r
2017-06-05,94.71227903359134\r
2017-06-18,93.6046998218508\r
2017-06-25,93.6046998218508\r
2017-06-28,93.6046998218508\r
2017-07-05,92.61255798182655\r
2017-07-18,92.06328654824428\r
2017-08-02,85.04809466104336\r
2017-08-04,98.18044688809476\r
2017-08-07,96.60769592756584\r
2017-08-12,87.28900715173684\r
2017-08-14,92.94277885626589\r
2017-08-17,92.39268485249463\r
2017-08-22,83.77857208568689\r
2017-08-24,87.82615938115083\r
2017-08-27,85.89889086950743\r
2017-08-29,84.09520130448654\r
2017-09-01,84.09520130448654\r
2017-09-03,80.22522755540541\r
2017-09-06,82.20295392589053\r
2017-09-08,79.70813638896821\r
2017-09-13,75.62207915784798\r
2017-09-21,71.03520155125447\r
2017-09-23,71.03520155125447\r
2017-09-26,67.81912338833371\r
2017-09-28,71.72542538479414\r
2017-10-03,68.01225508401072\r
2017-10-06,68.01225508401072\r
2017-10-08,69.0785960122144\r
2017-10-11,68.98136831512848\r
2017-10-13,68.39920974036\r
2017-10-16,68.59303249117994\r
2017-10-18,68.59303249117994\r
2017-10-23,65.5195571989503\r
2017-10-26,62.412204800774326\r
2017-10-28,64.47673561524306\r
2017-10-31,62.412204800774326\r
2017-11-05,65.5195571989503\r
2017-11-07,64.47673561524306\r
2017-11-15,62.692070219498184\r
2017-11-17,63.53481709664995\r
2017-11-20,62.87893905199833\r
2017-11-22,60.651948171014205\r
2017-11-25,60.651948171014205\r
2017-11-27,61.11312365764029\r
2017-11-30,59.00387682990903\r
2017-12-05,59.551116150164994\r
2017-12-07,59.551116150164994\r
2017-12-12,64.28788659143243\r
2017-12-15,64.28788659143243\r
2017-12-20,64.57124729923544\r
2017-12-25,66.47366317531011\r
2017-12-27,66.47366317531011\r
2018-02-15,98.85774357904297\r
2018-02-25,98.85774357904297\r
2018-03-02,99.08394329723077\r
2018-03-07,98.5188509468105\r
2018-03-15,99.65039155073381\r
2018-03-17,99.65039155073381\r
2018-03-22,99.87735022692836\r
2018-03-30,100.0\r
2018-04-04,91.1873065592028\r
2018-04-06,92.83265042132619\r
2018-04-09,92.83265042132619\r
2018-04-19,90.75063536913852\r
2018-04-21,98.85774357904297\r
2018-04-24,96.16029774921539\r
2018-04-26,96.16029774921539\r
2018-05-06,91.40597198210365\r
2018-05-11,99.1971245154594\r
2018-05-21,100.0\r
2018-05-24,97.95511574533042\r
2018-06-20,96.04858442317177\r
2018-06-23,96.49576467216343\r
2018-06-25,96.16029774921539\r
2018-07-08,97.05596541764291\r
2018-07-10,97.05596541764291\r
2018-07-13,99.65039155073381\r
2018-07-15,93.71521161169521\r
2018-07-18,93.3838404539574\r
2018-07-23,94.60127510503223\r
2018-07-25,92.39268485249463\r
2018-07-30,91.84396206094037\r
2018-08-02,91.95359685937117\r
2018-08-04,90.75063536913852\r
2018-08-12,82.93667988946781\r
2018-08-19,80.84758833815332\r
2018-08-22,72.0220927195835\r
2018-08-27,66.85692545192305\r
2018-09-01,66.66517871452818\r
2018-09-03,56.74658982057681\r
2018-09-08,58.18699754548127\r
2018-09-11,54.790835310638656\r
2018-09-16,53.21213903625453\r
2018-09-18,53.21213903625453\r
2018-09-23,47.50728085201526\r
2018-09-26,41.054870809735604\r
2018-09-28,39.50387605229879\r
2018-10-03,40.04387179434167\r
2018-10-06,39.50387605229879\r
2018-10-13,39.12005040210976\r
2018-10-16,37.29964307172281\r
2018-12-07,35.58937698619385\r
2018-12-10,35.58937698619385\r
2019-01-16,41.60363109093603\r
2019-01-19,41.60363109093603\r
2019-01-24,41.60363109093603\r
2019-01-26,41.60363109093603\r
2019-02-13,56.92581164494164\r
2019-02-15,71.03520155125447\r
2019-02-18,71.03520155125447\r
2019-02-20,69.85848543490386\r
2019-02-23,75.31926865611956\r
2019-02-25,72.91517604476877\r
2019-02-28,75.11767835683789\r
2019-03-12,75.31926865611956\r
2019-03-20,77.04192986010334\r
2019-03-22,71.03520155125447\r
2019-03-25,71.03520155125447\r
2019-03-27,74.21333018063689\r
2019-03-30,74.11313094878734\r
2019-04-01,74.11313094878734\r
2019-04-09,74.21333018063689\r
2019-04-16,77.04192986010334\r
2019-04-19,77.04192986010334\r
2019-05-01,85.26046043828734\r
2019-05-06,88.36469402914851\r
2019-05-09,87.93375576075529\r
2019-05-11,87.93375576075529\r
2019-05-14,89.22922151344792\r
2019-05-16,89.22922151344792\r
2019-05-29,89.87993398858319\r
2019-06-08,92.50259399816042\r
2019-06-13,97.50510557198152\r
2019-06-23,97.39273894394724\r
2019-06-25,97.39273894394724\r
2019-06-28,100.0\r
2019-07-05,95.60227629837202\r
2019-07-08,95.60227629837202\r
2019-07-10,92.06328654824428\r
2019-07-13,92.06328654824428\r
2019-07-15,88.90460973938252\r
2019-07-20,88.90460973938252\r
2019-07-23,90.8597206832157\r
2019-07-25,87.39632693882143\r
2019-07-28,81.99382075175285\r
2019-08-02,81.6805403460802\r
2019-08-04,74.41389906966876\r
2019-08-09,75.82423605224173\r
2019-08-14,76.8384156079435\r
2019-08-17,75.92539943097862\r
2019-08-22,79.70813638896821\r
2019-08-24,75.82423605224173\r
2019-08-29,76.02661941457801\r
2019-09-03,77.65382756955125\r
2019-09-06,77.65382756955125\r
2019-09-08,80.84758833815332\r
2019-09-11,78.47284917558467\r
2019-09-13,66.28237894109954\r
2019-09-16,62.412204800774326\r
2019-09-18,62.87893905199833\r
2019-09-21,62.87893905199833\r
2019-09-26,63.53481709664995\r
2019-10-08,44.96012260158793\r
2019-10-11,51.48080960871228\r
2019-10-13,49.18176740055277\r
2019-10-26,52.6034404316012\r
2019-12-05,95.93692560487918\r
2019-12-07,95.93692560487918\r
2019-12-10,96.16029774921539\r
2019-12-15,93.05296208741825\r
2019-12-17,93.05296208741825\r
2019-12-20,93.05296208741825\r
2019-12-25,88.04140742621294\r
2019-12-27,88.14911436666321\r
2019-12-30,88.79651617725554\r
2020-01-09,98.06775415373234\r
2020-01-11,98.29319393840001\r
2020-01-14,98.29319393840001\r
2020-01-16,97.50510557198152\r
2020-01-19,97.6175265761932\r
2020-01-29,93.93639935133268\r
2020-01-31,93.93639935133268\r
2020-02-03,93.3838404539574\r
2020-02-05,74.41389906966876\r
2020-02-10,74.41389906966876\r
2020-02-15,96.94381639509548\r
2020-02-18,96.94381639509548\r
2020-02-20,93.16320010435935\r
2020-02-23,93.6046998218508\r
2020-03-11,98.63176088492284\r
2020-03-21,99.08394329723077\r
2020-03-24,98.85774357904297\r
2020-03-26,98.97081631510866\r
2020-03-31,98.18044688809476\r
2020-04-03,99.1971245154594\r
2020-04-05,98.40599529463881\r
2020-04-08,99.31035995985295\r
2020-04-10,96.60769592756584\r
2020-04-15,96.49576467216343\r
2020-04-25,95.49083561299196\r
2020-05-05,98.85774357904297\r
2020-05-08,98.85774357904297\r
2020-05-18,97.6175265761932\r
2020-05-20,97.16816885669591\r
2020-05-25,98.74472509899208\r
2020-05-28,96.27206557283677\r
2020-05-30,98.5188509468105\r
2020-06-12,98.85774357904297\r
2020-06-14,95.71377153228407\r
2020-06-24,92.06328654824428\r
2020-07-04,92.06328654824428\r
2020-07-07,98.85774357904297\r
2020-07-09,95.3794494863611\r
2020-07-19,92.06328654824428\r
2020-07-22,92.17303111705277\r
2020-07-24,85.04809466104336\r
2020-07-27,82.51707281397968\r
2020-07-29,82.51707281397968\r
2020-08-03,82.51707281397968\r
2020-08-06,77.04192986010334\r
2020-08-08,73.51312931238523\r
2020-08-18,63.722735260304866\r
2020-08-21,63.722735260304866\r
2020-09-02,58.731052714029175\r
2020-09-05,58.821935117856995\r
2020-09-07,58.821935117856995\r
2020-09-10,61.298004237886715\r
2020-09-12,56.74658982057681\r
2020-09-17,55.58743648469283\r
2020-09-30,50.36836091034057\r
2020-10-12,47.34117263348905\r
2020-10-17,62.50543487771545\r
2020-10-30,62.50543487771545\r
2020-11-11,76.53356798214355\r
2020-11-14,78.67816787093773\r
2020-11-21,75.11767835683789\r
2020-11-26,76.12789599093172\r
2020-11-29,75.21844516150078\r
2020-12-26,93.93639935133268\r
2021-01-03,97.84253167291527\r
2021-01-08,97.84253167291527\r
2021-01-10,97.84253167291527\r
2021-01-18,99.4236496204783\r
2021-02-14,99.87735022692836\r
2021-02-17,99.87735022692836\r
2021-02-19,99.87735022692836\r
2021-02-24,99.76384380053956\r
2021-02-27,100.0\r
2021-03-01,100.0\r
2021-03-04,100.0\r
2021-03-09,98.06775415373234\r
2021-03-14,96.71968163994032\r
2021-03-21,97.05596541764291\r
2021-03-24,97.05596541764291\r
2021-03-29,97.05596541764291\r
2021-03-31,99.65039155073381\r
2021-04-03,98.85774357904297\r
2021-04-05,99.08394329723077\r
2021-04-08,99.99091082000888\r
2021-04-15,99.4236496204783\r
2021-04-20,99.65039155073381\r
2021-04-23,100.0\r
2021-05-03,98.18044688809476\r
2021-05-08,92.28283055529901\r
2021-05-20,83.25197121672514\r
2021-05-28,96.49576467216343\r
2021-05-30,93.93639935133268\r
2021-06-07,95.15684095026036\r
2021-06-09,95.15684095026036\r
2021-06-14,96.16029774921539\r
2021-06-22,96.16029774921539\r
2021-07-02,93.49424276581206\r
2021-07-09,93.49424276581206\r
2021-07-22,92.28283055529901\r
2021-08-11,87.82615938115083\r
2021-08-26,66.66517871452818\r
2021-08-28,66.85692545192305\r
2021-08-31,66.85692545192305\r
2021-09-05,61.76123065769396\r
2021-09-12,54.26245138196379\r
2021-09-17,54.879108160834456\r
2021-09-22,52.6034404316012\r
2021-09-25,50.7095661924231\r
2021-09-27,50.7095661924231\r
2021-09-30,51.56680478252421\r
2021-10-07,53.99906572560995\r
2021-10-12,54.26245138196379\r
2021-10-15,51.652860189168784\r
2021-10-17,51.652860189168784\r
2021-10-20,52.86395133557982\r
2021-10-27,44.07048858429983\r
2021-11-09,48.42523611552071\r
2021-11-11,48.42523611552071\r
2021-11-19,49.097465375041196\r
2021-12-14,92.94277885626589\r
2021-12-16,92.94277885626589\r
2021-12-19,94.49032581727963\r
2021-12-21,94.49032581727963\r
2022-01-13,87.39632693882143\r
2022-01-15,90.20603411079946\r
2022-01-23,89.66280934858727\r
2022-01-25,91.07805628884358\r
2022-02-09,92.83265042132619\r
2022-03-09,98.63176088492284\r
2022-03-19,98.63176088492284\r
2022-03-21,99.76384380053956\r
2022-03-24,99.76384380053956\r
2022-03-26,99.76384380053956\r
2022-04-05,96.3838878838714\r
2022-04-10,98.74472509899208\r
2022-05-08,96.3838878838714\r
2022-05-10,99.08394329723077\r
2022-05-15,96.27206557283677\r
2022-05-28,91.95359685937117\r
2022-05-30,91.95359685937117\r
2022-06-17,93.6046998218508\r
2022-06-19,93.6046998218508\r
2022-06-22,93.93639935133268\r
2022-06-24,93.93639935133268\r
2022-07-02,95.04561856126918\r
2022-07-04,95.04561856126918\r
2022-07-07,95.04561856126918\r
2022-07-12,96.83172179915717\r
2022-07-14,97.84253167291527\r
2022-07-17,95.04561856126918\r
2022-07-24,95.93692560487918\r
2022-07-27,94.26859120539201\r
2022-08-01,84.51815311326024\r
2022-08-03,84.62403019015753\r
2022-08-06,84.62403019015753\r
2022-08-08,84.62403019015753\r
2022-08-11,79.91480444327777\r
2022-08-13,80.84758833815332\r
2022-08-18,68.69003017645437\r
2022-08-28,60.10047430452956\r
2022-09-05,60.10047430452956\r
2022-09-10,50.7095661924231\r
2022-09-12,50.7095661924231\r
2022-09-15,47.590426516554125\r
2022-09-20,47.75690087051073\r
2022-09-22,47.00968911981217\r
2022-10-02,47.09246833976408\r
2022-10-05,43.82915731568501\r
2022-10-07,43.268215784082095\r
2022-10-12,43.268215784082095\r
2022-10-15,44.96012260158793\r
2022-10-17,44.71675525523543\r
2022-10-22,46.34965765416742\r
2022-10-30,39.50387605229879\r
2022-11-01,39.50387605229879\r
2022-11-06,46.67918375710131\r
2022-11-11,43.58838248118646\r
2022-11-16,41.44653042706648\r
2022-12-21,59.4597623709073\r
2022-12-24,59.4597623709073\r
2023-01-10,67.72264399463357\r
2023-01-18,86.96737994155693\r
2023-01-20,86.96737994155693\r
2023-02-02,97.39273894394724\r
2023-02-04,97.50510557198152\r
2023-02-09,95.26811792870559\r
2023-02-12,96.71968163994032\r
2023-02-14,95.04561856126918\r
2023-02-17,95.15684095026036\r
2023-02-19,95.15684095026036\r
2023-02-24,96.3838878838714\r
2023-03-09,95.60227629837202\r
2023-03-16,99.53699348741071\r
2023-04-05,98.18044688809476\r
2023-04-08,98.40599529463881\r
2023-04-10,98.40599529463881\r
2023-04-20,96.16029774921539\r
2023-05-05,91.29661179381357\r
2023-05-10,91.29661179381357\r
2023-05-28,94.82333759266865\r
2023-05-30,95.3794494863611\r
2023-06-02,95.3794494863611\r
2023-06-04,95.3794494863611\r
2023-06-24,100.0\r
2023-06-27,100.0\r
2023-07-07,96.60769592756584\r
2023-07-09,96.60769592756584\r
2023-07-14,97.73000194652177\r
2023-07-17,97.73000194652177\r
2023-07-22,96.71968163994032\r
2023-07-27,95.26811792870559\r
2023-07-29,93.6046998218508\r
2023-08-08,93.71521161169521\r
2023-08-11,93.16320010435935\r
2023-08-16,93.16320010435935\r
2023-08-18,91.5153871135102\r
2023-08-21,88.25687657125539\r
2023-08-23,82.93667988946781\r
2023-08-28,82.93667988946781\r
2023-08-31,81.05549035023041\r
2023-09-05,75.62207915784798\r
2023-09-07,72.71631394610695\r
2023-09-10,72.71631394610695\r
2023-09-15,72.5176798424871\r
2023-09-20,67.62622225459172\r
2023-09-25,71.33066874019906\r
2023-09-27,71.33066874019906\r
2023-09-30,70.74024928157013\r
2023-10-02,74.41389906966876\r
2023-10-05,72.71631394610695\r
2023-10-07,72.81571650231004\r
2023-10-10,72.91517604476877\r
2023-10-12,70.34778116915396\r
2023-10-15,70.34778116915396\r
`;export{n as default};
