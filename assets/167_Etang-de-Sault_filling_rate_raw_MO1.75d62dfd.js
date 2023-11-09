const n=`date,value\r
2017-01-26,78.51271922338992\r
2017-02-15,81.01529702486413\r
2017-02-25,79.96920380645402\r
2017-03-17,80.38706772185797\r
2017-03-27,79.76055897868221\r
2017-04-03,83.05124861072564\r
2017-04-23,86.60298522063128\r
2017-05-23,83.96966735009873\r
2017-05-26,87.24783265635097\r
2017-06-02,88.6146871356731\r
2017-06-15,88.6146871356731\r
2017-06-22,89.91647399484421\r
2017-07-05,91.4436369057441\r
2017-07-07,84.18211378890994\r
2017-07-17,94.00892098335983\r
2017-08-14,91.88162704556301\r
2017-08-21,96.37606475775851\r
2017-08-26,95.78234072085704\r
2017-08-29,91.3707100724633\r
2017-10-18,89.40943094709746\r
2017-11-07,81.99595312866298\r
2017-11-22,79.76055897868221\r
2017-12-12,79.8300859710557\r
2018-01-13,81.43507046212652\r
2018-02-25,85.247171713695\r
2018-02-27,81.92576883032261\r
2018-04-18,87.39136025427455\r
2018-04-21,84.7495591405278\r
2018-05-06,82.91026867818793\r
2018-05-11,88.6146871356731\r
2018-05-18,88.470456323303\r
2018-06-20,92.02778712477335\r
2018-06-22,89.40943094709746\r
2018-06-25,90.13408644516375\r
2018-06-27,88.39837188230368\r
2018-07-12,88.6146871356731\r
2018-08-06,92.46675692032171\r
2018-08-19,90.351883675729\r
2018-08-26,94.15626078756813\r
2018-09-08,90.351883675729\r
2018-09-10,89.91647399484421\r
2018-09-18,91.22491775523243\r
2018-09-25,91.88162704556301\r
2018-09-28,86.53143931982892\r
2018-09-30,93.1265866593861\r
2018-10-05,85.53198109979809\r
2018-10-13,83.68669900791004\r
2018-10-18,82.27690143554621\r
2018-11-09,80.66606856763995\r
2018-11-14,79.06646096620157\r
2018-11-22,85.60323559277472\r
2018-11-24,73.65858676614498\r
2018-11-27,85.88846199568091\r
2019-02-15,76.92834760578882\r
2019-02-17,82.06615854372363\r
2019-02-22,84.04046186872692\r
2019-02-25,77.54696710604917\r
2019-02-27,84.46566901422176\r
2019-03-07,84.11127735007956\r
2019-03-22,82.98074812349203\r
2019-04-01,79.06646096620157\r
2019-04-13,88.6146871356731\r
2019-05-01,88.470456323303\r
2019-05-23,94.30368165768115\r
2019-05-28,88.11024066963067\r
2019-05-31,89.91647399484421\r
2019-06-02,90.56986555405322\r
2019-06-27,88.03825952935064\r
2019-06-30,98.68889069810227\r
2019-07-02,88.18224248008127\r
2019-07-05,95.18990715602364\r
2019-07-07,98.3893794835613\r
2019-07-10,96.22751289650117\r
2019-07-15,100.0\r
2019-07-17,96.22751289650117\r
2019-07-20,89.2647466547799\r
2019-07-22,95.26389069766567\r
2019-08-04,100.0\r
2019-08-14,97.56737479041168\r
2019-08-26,99.06372935102779\r
2019-08-29,99.13875698788142\r
2019-09-03,100.0\r
2019-09-13,97.94071285216309\r
2019-09-15,100.0\r
2019-09-18,97.94071285216309\r
2019-09-20,97.1945380603855\r
2019-10-13,87.75054177041697\r
2019-11-04,88.97562519413104\r
2019-11-22,82.83981028012762\r
2019-11-24,84.18211378890994\r
2019-12-04,79.6910532772076\r
2020-01-06,76.72252827688772\r
2020-01-16,79.96920380645402\r
2020-01-21,79.13577480077218\r
2020-02-15,78.09831117847749\r
2020-02-22,80.52652568372626\r
2020-03-18,81.22508845111408\r
2020-03-23,83.61600938175057\r
2020-03-26,82.69895664701676\r
2020-03-28,90.0615284240342\r
2020-03-31,85.7458071183339\r
2020-04-02,87.96629906426232\r
2020-04-05,81.85560565407715\r
2020-04-07,83.26287627092486\r
2020-04-10,79.13577480077218\r
2020-04-15,87.10438798115686\r
2020-05-20,87.75054177041697\r
2020-05-27,89.48180396640569\r
2020-05-30,92.46675692032171\r
2020-06-01,93.71448472366704\r
2020-06-26,85.53198109979809\r
2020-07-04,92.39354432016489\r
2020-07-06,92.61324324331615\r
2020-07-09,88.90339634209174\r
2020-07-19,94.45118355601628\r
2020-07-24,92.46675692032171\r
2020-07-29,93.64092638396839\r
2020-08-08,93.20000280251521\r
2020-08-15,87.53497073443044\r
2020-08-20,94.59876644494666\r
2020-08-25,89.62661172657967\r
2020-09-04,94.08258074986855\r
2020-09-07,85.88846199568091\r
2020-09-09,94.74643028690089\r
2020-09-12,82.1363850701343\r
2020-09-14,89.69904645756021\r
2020-09-17,83.68669900791004\r
2020-11-11,82.55818726675918\r
2020-11-18,84.5366101618869\r
2020-11-21,83.82814122202318\r
2020-11-28,84.04046186872692\r
2020-12-11,89.91647399484421\r
2020-12-18,78.02931812423583\r
2021-02-24,82.48783418478153\r
2021-03-01,76.31147130092151\r
2021-03-08,86.96102626925249\r
2021-03-28,86.45991420056666\r
2021-03-31,83.75740962309013\r
2021-04-02,88.83118810524562\r
2021-04-05,81.64524291172197\r
2021-04-22,87.53497073443044\r
2021-04-27,92.10089777377924\r
2021-05-27,83.3334608728191\r
2021-05-30,91.66254004608531\r
2021-06-01,83.82814122202318\r
2021-06-14,90.49718441969323\r
2021-06-16,92.68651695657046\r
2021-06-26,84.5366101618869\r
2021-07-19,86.45991420056666\r
2021-07-21,86.8893765372263\r
2021-07-29,86.96102626925249\r
2021-08-10,91.58955189739737\r
2021-08-20,93.78806335818685\r
2021-09-07,88.39837188230368\r
2021-09-22,83.61600938175057\r
2021-09-24,88.6146871356731\r
2021-10-09,78.16732565729609\r
2021-10-14,85.17602153947156\r
2021-10-19,84.89162968720254\r
2021-10-24,84.6785552302554\r
2021-10-27,82.48783418478153\r
2021-12-23,78.02931812423583\r
2022-01-15,80.03879463846748\r
2022-01-25,81.71534268939129\r
2022-02-09,80.73587184170941\r
2022-02-26,76.92834760578882\r
2022-03-06,80.59628651315943\r
2022-03-08,81.08520631515793\r
2022-03-23,82.1363850701343\r
2022-03-26,82.41750218202326\r
2022-04-15,83.82814122202318\r
2022-04-17,88.39837188230368\r
2022-05-15,96.30177876151757\r
2022-05-17,92.68651695657046\r
2022-05-30,91.07920726947039\r
2022-06-11,94.15626078756813\r
2022-06-29,90.49718441969323\r
2022-07-06,86.24546358311773\r
2022-07-11,92.83312546266194\r
2022-07-14,91.73554862356372\r
2022-07-16,92.5399898963033\r
2022-07-19,91.9546968804284\r
2022-07-21,82.98074812349203\r
2022-07-24,94.22996109174302\r
2022-08-03,96.52469712546653\r
2022-08-08,94.08258074986855\r
2022-08-10,96.37606475775851\r
2022-08-13,93.56738834382743\r
2022-08-18,94.96807775470099\r
2022-09-04,92.10089777377924\r
2022-09-12,94.59876644494666\r
2022-09-19,89.04787465638873\r
2022-09-22,90.56986555405322\r
2022-10-04,88.32630809142921\r
2022-10-09,90.71528932306876\r
2022-10-22,90.42452379195325\r
2022-11-11,86.10260050626741\r
2022-11-13,89.1924353916785\r
2022-12-16,81.22508845111408\r
2022-12-28,82.27690143554621\r
2023-01-15,69.04647784067963\r
2023-02-11,79.6910532772076\r
2023-02-14,82.55818726675918\r
2023-04-05,83.05124861072564\r
2023-04-20,79.20510997605939\r
2023-05-27,87.03269675225597\r
2023-06-01,86.53143931982892\r
2023-06-14,94.08258074986855\r
2023-06-24,89.98899093895497\r
2023-07-09,93.64092638396839\r
2023-07-14,91.9546968804284\r
2023-07-31,92.75981103127994\r
2023-08-08,100.0\r
2023-08-20,100.0\r
2023-08-23,99.9653772533259\r
2023-09-04,94.22996109174302\r
2023-09-07,95.5600267792312\r
2023-09-09,95.93065084105409\r
2023-10-02,88.75900048857149\r
2023-10-07,92.5399898963033\r
2023-10-09,88.25426495568526\r
2023-11-06,73.92915736857107\r
`;export{n as default};
