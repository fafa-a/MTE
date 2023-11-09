const r=`date,value\r
2017-02-22,66.8832963525673\r
2017-02-25,67.91548556783388\r
2017-03-07,63.91131184658156\r
2017-03-17,92.95970000856761\r
2017-03-27,92.70204861399432\r
2017-04-23,98.56166355570109\r
2017-05-03,98.56166355570109\r
2017-05-16,98.64067011954832\r
2017-05-23,98.64067011954832\r
2017-05-26,99.93436048776823\r
2017-06-02,95.52442177409418\r
2017-06-05,95.52442177409418\r
2017-06-12,99.61697261056331\r
2017-06-15,99.72272783564426\r
2017-06-22,99.06242650534442\r
2017-06-25,97.72035829503429\r
2017-07-02,97.19587347327528\r
2017-07-05,98.69335393111307\r
2017-07-07,97.56290524724844\r
2017-07-10,97.56290524724844\r
2017-07-12,97.56290524724844\r
2017-07-17,92.88237732791546\r
2017-07-22,90.95691794557867\r
2017-07-27,96.82934425835037\r
2017-08-04,97.06491246352866\r
2017-08-06,97.06491246352866\r
2017-08-11,90.8035145688267\r
2017-08-14,96.14998224046381\r
2017-08-19,95.99345314963603\r
2017-08-21,95.86308299169717\r
2017-08-24,95.0822141227345\r
2017-08-26,93.78592771391392\r
2017-08-29,93.9928991745544\r
2017-09-03,91.87931066493567\r
2017-09-20,89.35087901571566\r
2017-09-23,88.41250066582191\r
2017-09-28,92.16182641645632\r
2017-10-03,89.07152598987561\r
2017-10-05,77.38778879501054\r
2017-10-08,78.01577768629731\r
2017-10-10,76.49729414902127\r
2017-10-13,76.90597562375561\r
2017-10-15,74.46577856530838\r
2017-10-18,71.7255408705962\r
2017-10-25,67.57078489778011\r
2017-10-28,64.54241899978354\r
2017-10-30,67.66264279927444\r
2017-11-07,60.15022404704945\r
2017-11-17,60.48069151413442\r
2017-11-19,66.17557720139756\r
2017-11-22,63.125599373279805\r
2017-11-24,63.125599373279805\r
2017-11-27,63.125599373279805\r
2017-11-29,65.40251719156464\r
2018-02-25,86.87331481662166\r
2018-02-27,86.89846817719136\r
2018-03-02,86.89846817719136\r
2018-03-14,90.01242956529819\r
2018-03-19,97.43176481172733\r
2018-03-22,97.43176481172733\r
2018-04-01,93.70835613378968\r
2018-04-18,96.2021791795754\r
2018-04-21,99.98729410092159\r
2018-04-23,99.98729410092159\r
2018-04-26,98.58799652293453\r
2018-05-06,98.50900528431526\r
2018-05-11,98.48267998053667\r
2018-05-18,98.48267998053667\r
2018-05-21,98.48267998053667\r
2018-06-20,95.83701668070697\r
2018-06-22,95.83701668070697\r
2018-06-25,99.45841618245598\r
2018-06-27,97.35311129740221\r
2018-07-02,98.35109178826652\r
2018-07-07,96.12388762833679\r
2018-07-10,95.52442177409418\r
2018-07-12,95.31623125186809\r
2018-07-15,92.95970000856761\r
2018-07-17,92.95970000856761\r
2018-07-20,93.29503482731982\r
2018-07-22,92.70204861399432\r
2018-07-25,94.27775532824879\r
2018-07-27,95.70672373928466\r
2018-07-30,96.12388762833679\r
2018-08-01,97.14348137582347\r
2018-08-04,93.65665469600802\r
2018-08-06,95.73277717845936\r
2018-08-11,93.96701868294089\r
2018-08-16,96.3327165217757\r
2018-08-19,98.0881071117208\r
2018-08-21,93.83765504734957\r
2018-08-26,96.59398395831921\r
2018-08-31,93.44995257055376\r
2018-09-03,88.43781492381973\r
2018-09-08,96.2282815061778\r
2018-09-10,96.2282815061778\r
2018-09-13,96.2282815061778\r
2018-09-20,93.57912196670097\r
2018-09-23,94.32958097615133\r
2018-09-25,93.0370460491977\r
2018-09-28,95.26420939568796\r
2018-09-30,92.6762977576738\r
2018-10-03,90.16534658777877\r
2018-10-05,91.340837537376\r
2018-10-23,83.57636241020732\r
2018-10-25,92.31605862019524\r
2018-10-30,92.31605862019524\r
2018-11-04,87.40209033264979\r
2019-02-12,85.16910044888174\r
2019-02-15,87.65429747523082\r
2019-02-17,86.06980452286915\r
2019-02-20,85.81926391228643\r
2019-02-22,86.32061021967566\r
2019-02-25,86.32061021967566\r
2019-02-27,86.47122079130106\r
2019-03-12,92.18752528068835\r
2019-03-22,91.0080732952652\r
2019-03-24,89.24925934907797\r
2019-03-27,90.2673436188277\r
2019-03-29,89.17307215734809\r
2019-04-01,86.87331481662166\r
2019-04-08,86.82301602806926\r
2019-04-13,84.86963091761424\r
2019-05-01,84.22209533171878\r
2019-05-06,92.49611451077138\r
2019-05-11,92.49611451077138\r
2019-05-13,86.34570536096595\r
2019-05-16,86.34570536096595\r
2019-05-23,83.05612749240996\r
2019-06-02,96.515576750063\r
2019-06-12,96.30660391187979\r
2019-06-17,90.95691794557867\r
2019-06-22,91.41769189523244\r
2019-06-25,91.41769189523244\r
2019-06-27,93.29503482731982\r
2019-06-30,93.2434163214432\r
2019-07-02,93.2434163214432\r
2019-07-05,97.03872795589004\r
2019-07-07,97.03872795589004\r
2019-07-10,96.46331812263459\r
2019-07-12,96.7247140050261\r
2019-07-15,98.93055745314942\r
2019-07-17,98.93055745314942\r
2019-07-22,98.53533314276571\r
2019-07-25,98.6143320442792\r
2019-08-01,99.69628520973096\r
2019-08-04,96.56784565353922\r
2019-08-09,98.11439407296092\r
2019-08-11,95.34224604678852\r
2019-08-14,97.66786370256071\r
2019-08-16,95.75883319238078\r
2019-08-21,95.10820571031097\r
2019-08-24,97.22207336820986\r
2019-08-26,94.90034524814888\r
2019-08-29,95.75883319238078\r
2019-08-31,94.3554976779661\r
2019-09-03,91.49456972030038\r
2019-09-05,91.49456972030038\r
2019-09-13,88.21008135106852\r
2019-09-15,86.62192667245218\r
2019-09-18,82.98190453823801\r
2019-09-20,86.54656182102705\r
2019-10-08,73.72982417362402\r
2019-10-13,73.72982417362402\r
2019-10-25,69.95051955766866\r
2019-10-30,75.68230606314083\r
2019-11-04,74.84666348891055\r
2019-11-09,74.84666348891055\r
2020-02-20,82.11775217339454\r
2020-02-22,86.17009500307971\r
2020-03-01,86.17009500307971\r
2020-03-08,91.82797800726341\r
2020-03-11,96.2021791795754\r
2020-03-13,92.0590569783791\r
2020-03-18,92.80507801256431\r
2020-03-21,92.49611451077138\r
2020-03-28,92.21322674640818\r
2020-03-31,90.88020450463665\r
2020-04-05,89.70687836776065\r
2020-04-07,99.80207098936795\r
2020-04-10,94.48511995789846\r
2020-04-12,94.48511995789846\r
2020-04-15,94.48511995789846\r
2020-04-25,95.44633100084586\r
2020-05-07,92.36749016085561\r
2020-05-17,92.36749016085561\r
2020-05-20,93.2434163214432\r
2020-05-22,89.55424428051084\r
2020-05-25,92.54758244588353\r
2020-05-27,94.09644701615463\r
2020-05-30,94.09644701615463\r
2020-06-14,90.49698998564774\r
2020-06-19,95.78489178085704\r
2020-06-21,97.19587347327528\r
2020-06-24,97.19587347327528\r
2020-06-26,97.19587347327528\r
2020-07-01,97.19587347327528\r
2020-07-04,93.83765504734957\r
2020-07-09,100.0\r
2020-07-11,100.0\r
2020-07-14,97.64162024724561\r
2020-07-19,99.77562072564757\r
2020-07-21,98.00926157476347\r
2020-07-24,94.64075196406704\r
2020-07-26,95.81095294369636\r
2020-07-29,96.0456192239645\r
2020-07-31,94.17413506079893\r
2020-08-03,94.17413506079893\r
2020-08-05,90.24184043577259\r
2020-08-08,93.19180818911967\r
2020-08-10,92.16182641645632\r
2020-08-15,91.9820072251797\r
2020-08-20,91.57147100717926\r
2020-08-23,89.63054952692967\r
2020-08-25,83.67558845139288\r
2020-09-02,76.28125362170299\r
2020-09-04,74.77519382843741\r
2020-09-07,66.22115397534706\r
2020-09-12,65.24376753047079\r
2020-09-14,67.31840939641411\r
2020-09-17,66.19836416416882\r
2020-09-19,68.16867058554486\r
2020-11-11,47.78545523287915\r
2020-11-18,51.85454312599704\r
2020-11-21,48.88321375729048\r
2020-11-23,48.88321375729048\r
2020-11-26,48.88321375729048\r
2021-02-11,81.35510674232022\r
2021-02-14,81.35510674232022\r
2021-02-19,81.35510674232022\r
2021-03-23,89.60511182291707\r
2021-03-26,89.60511182291707\r
2021-03-28,96.30660391187979\r
2021-03-31,96.30660391187979\r
2021-04-02,96.30660391187979\r
2021-04-05,100.0\r
2021-04-07,96.80318284444962\r
2021-04-15,100.0\r
2021-04-17,100.0\r
2021-04-20,100.0\r
2021-04-22,100.0\r
2021-05-27,99.96082602211564\r
2021-05-30,99.98729410092159\r
2021-06-09,94.56292433555095\r
2021-06-11,97.01254601346369\r
2021-06-14,94.97827356994308\r
2021-06-16,96.1760794242737\r
2021-06-19,95.0822141227345\r
2021-06-21,95.91522333484986\r
2021-06-26,92.5733203116075\r
2021-07-01,89.24925934907797\r
2021-07-19,91.85364303406276\r
2021-07-21,87.88150942895736\r
2021-07-26,87.88150942895736\r
2021-07-29,94.61480683812239\r
2021-08-05,94.07055617487269\r
2021-08-10,92.90814895891792\r
2021-08-13,92.90814895891792\r
2021-08-18,95.60253573389136\r
2021-08-20,93.01126144042964\r
2021-08-23,94.7186028382099\r
2021-08-25,90.0633914340838\r
2021-08-28,88.89392130939558\r
2021-08-30,88.91928552565322\r
2021-09-04,87.02427463459351\r
2021-09-07,87.45251064994306\r
2021-09-17,88.7417911972031\r
2021-09-22,87.80574838150869\r
2021-09-24,89.30006393388827\r
2021-09-29,89.40170459292526\r
2021-10-12,82.0192011712616\r
2021-10-14,84.17235952030299\r
2021-10-17,79.17997509581915\r
2021-10-24,79.37461619543859\r
2021-10-27,77.38778879501054\r
2022-01-22,82.73466876255561\r
2022-01-25,83.79968110814545\r
2022-01-27,84.2967190482539\r
2022-01-30,83.84933686470006\r
2022-02-01,83.84933686470006\r
2022-02-06,83.35326016743466\r
2022-02-09,85.84430603843636\r
2022-02-26,83.22940806533306\r
2022-03-01,90.0633914340838\r
2022-03-03,86.421006675233\r
2022-03-08,89.24925934907797\r
2022-03-26,86.39590358895535\r
2022-04-05,90.90577304020421\r
2022-04-15,95.99345314963603\r
2022-04-17,95.18619594846024\r
2022-04-27,94.97827356994308\r
2022-05-17,95.78489178085704\r
2022-05-20,95.78489178085704\r
2022-05-22,95.31623125186809\r
2022-05-27,99.45841618245598\r
2022-05-30,94.45919033311193\r
2022-06-01,98.64067011954832\r
2022-06-04,96.0456192239645\r
2022-06-06,100.0\r
2022-06-11,100.0\r
2022-06-14,97.7991193855282\r
2022-06-16,97.82537820208208\r
2022-06-19,95.94129736662913\r
2022-06-29,95.94129736662913\r
2022-07-11,89.27466032925378\r
2022-07-14,93.21761095848903\r
2022-07-16,90.54805127854688\r
2022-07-19,92.23893081341726\r
2022-07-21,90.49698998564774\r
2022-07-24,90.49698998564774\r
2022-07-26,89.22386099356538\r
2022-07-29,90.95691794557867\r
2022-07-31,89.7323265569565\r
2022-08-03,89.68143279955515\r
2022-08-05,87.52816092025726\r
2022-08-08,86.97394412155978\r
2022-08-10,87.85625311041254\r
2022-08-13,87.22570238476074\r
2022-08-15,85.39395384659879\r
2022-08-20,83.37803861145231\r
2022-08-23,86.17009500307971\r
2022-08-28,83.27894088170532\r
2022-08-30,82.1916936203589\r
2022-09-02,84.69511729540957\r
2022-09-04,82.61115134985886\r
2022-09-12,83.7004016407756\r
2022-09-19,80.49716513698921\r
2022-09-22,78.88833893712831\r
2022-10-02,76.52131234437246\r
2022-10-04,77.31544717981966\r
2022-10-07,77.31544717981966\r
2022-10-09,73.65874371077157\r
2022-10-12,73.65874371077157\r
2022-10-22,70.06680047496938\r
2022-10-24,70.06680047496938\r
2022-10-27,70.06680047496938\r
2022-11-01,72.26589590847162\r
2022-11-06,70.67259072285722\r
2022-11-08,69.48609764101175\r
2022-11-11,69.48609764101175\r
2022-11-13,70.18315150366709\r
2022-11-16,70.18315150366709\r
2023-02-06,53.76488609794669\r
2023-02-09,53.17441725456919\r
2023-02-11,54.50629576985487\r
2023-02-14,54.31529553941936\r
2023-02-16,54.336505763653165\r
2023-02-19,53.617046978691505\r
2023-02-21,54.272884112179895\r
2023-02-26,52.52345010310289\r
2023-03-01,52.08412871089073\r
2023-03-13,56.98977407841873\r
2023-03-16,57.378732642249474\r
2023-03-28,65.03986673901677\r
2023-04-05,70.27628278543017\r
2023-04-07,66.86042405401663\r
2023-04-15,72.78413380029433\r
2023-04-17,69.83430878365753\r
2023-05-02,82.41366290248862\r
2023-05-27,89.47796263400699\r
2023-05-30,89.47796263400699\r
2023-06-04,92.13613015391071\r
2023-06-16,90.98249431498346\r
2023-06-24,88.43781492381973\r
2023-06-26,88.43781492381973\r
2023-07-09,93.32084796984931\r
2023-07-11,93.32084796984931\r
2023-07-14,99.72272783564426\r
2023-07-16,97.19587347327528\r
2023-07-19,97.19587347327528\r
2023-07-21,100.0\r
2023-07-26,98.40371939910175\r
2023-07-29,97.37932657282104\r
2023-07-31,97.56290524724844\r
2023-08-03,97.56290524724844\r
2023-08-05,97.56290524724844\r
2023-08-08,96.30660391187979\r
2023-08-10,97.16967614241673\r
2023-08-13,96.85550823898106\r
2023-08-15,96.2282815061778\r
2023-08-18,96.2282815061778\r
2023-08-20,96.25438640388995\r
2023-08-23,94.66669967285905\r
2023-09-04,97.58914101940097\r
2023-09-07,98.32478181644677\r
2023-09-14,91.54583463835161\r
2023-09-19,85.94450106858342\r
2023-09-24,83.7748572352606\r
2023-09-27,86.421006675233\r
2023-09-29,84.34648152303711\r
2023-10-02,85.74415345255566\r
2023-10-04,83.05612749240996\r
2023-10-07,82.38898891576105\r
2023-10-12,81.79761857382755\r
`;export{r as default};
