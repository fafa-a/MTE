const n=`date,value\r
2017-02-19,63.12592993842876\r
2017-02-22,69.2983509421852\r
2017-03-04,46.495026120382356\r
2017-03-11,65.417956698544\r
2017-03-14,69.2983509421852\r
2017-04-03,95.25418135144918\r
2017-04-10,95.25418135144918\r
2017-04-20,86.95414847984905\r
2017-04-23,86.39112906504945\r
2017-04-30,86.39112906504945\r
2017-05-23,85.26877270764098\r
2017-05-30,85.26877270764098\r
2017-06-02,92.36351471524709\r
2017-06-09,94.67366296278577\r
2017-06-12,88.65054020344374\r
2017-06-19,84.43023805340357\r
2017-06-22,79.45775147989261\r
2017-07-02,78.36655247710948\r
2017-07-04,65.67431278485458\r
2017-07-07,66.9611199151971\r
2017-07-09,66.9611199151971\r
2017-07-12,66.9611199151971\r
2017-07-14,60.11280571302672\r
2017-07-17,61.86446453507203\r
2017-07-22,53.99630169727649\r
2017-07-24,53.99630169727649\r
2017-07-27,42.222224494440795\r
2017-07-29,42.222224494440795\r
2017-08-03,39.37924571194636\r
2017-08-06,42.00118451222769\r
2017-08-13,34.51493246929953\r
2017-08-18,33.69110759189453\r
2017-08-21,27.3462585481979\r
2017-08-23,28.8906946343984\r
2017-08-26,27.922088522485616\r
2017-09-05,14.96651189810195\r
2017-09-15,12.537093927822927\r
2017-09-20,10.8119988232913\r
2017-09-22,12.537093927822927\r
2017-09-27,10.256235005707426\r
2017-10-05,7.136508909161354\r
2017-10-07,3.42408246451716\r
2017-10-10,3.142058323662654\r
2017-10-12,3.42408246451716\r
2017-10-15,2.9586043330426786\r
2017-10-17,2.2629426699920803\r
2017-10-22,2.1804537889864304\r
2017-10-25,3.911813579300856\r
2017-10-27,3.142058323662654\r
2017-10-30,2.9586043330426786\r
2017-11-21,1.558879560835753\r
2017-11-26,1.558879560835753\r
2017-11-29,1.558879560835753\r
2018-01-13,12.98156972494772\r
2018-01-15,17.371468771891248\r
2018-01-23,11.663857777205095\r
2018-01-28,2.5164809895682003\r
2018-02-02,2.5164809895682003\r
2018-02-24,31.06019393645521\r
2018-02-27,31.06019393645521\r
2018-03-04,4.420839227608394\r
2018-03-14,64.90625332347378\r
2018-03-16,96.12718514989355\r
2018-03-19,74.0526604723018\r
2018-03-21,74.0526604723018\r
2018-03-24,74.0526604723018\r
2018-04-18,87.23611734448299\r
2018-04-20,100.0\r
2018-04-25,100.0\r
2018-04-30,100.0\r
2018-05-05,96.71066835502873\r
2018-05-08,96.71066835502873\r
2018-05-18,92.9392581258703\r
2018-05-20,98.17454152501726\r
2018-05-25,85.54890066125387\r
2018-06-02,81.93135593113394\r
2018-06-14,79.45775147989261\r
2018-06-19,90.35787787103567\r
2018-06-22,80.27946196345488\r
2018-06-24,88.08385665008609\r
2018-06-27,88.08385665008609\r
2018-06-29,88.08385665008609\r
2018-07-02,91.21562991986467\r
2018-07-04,88.65054020344374\r
2018-07-07,86.11007917144941\r
2018-07-09,85.26877270764098\r
2018-07-12,85.26877270764098\r
2018-07-17,74.58741168710078\r
2018-07-19,71.13468134360339\r
2018-07-22,77.55147707073712\r
2018-07-24,71.39832530213451\r
2018-07-27,72.72143553553337\r
2018-07-29,71.13468134360339\r
2018-08-01,71.13468134360339\r
2018-08-03,58.87198055140722\r
2018-08-06,60.61155853319021\r
2018-08-11,71.13468134360339\r
2018-08-16,38.303590798042904\r
2018-08-18,50.198705022059265\r
2018-08-21,46.72370994603387\r
2018-08-23,46.72370994603387\r
2018-08-26,47.642195172342404\r
2018-08-28,47.18220378122213\r
2018-08-31,35.763105783523635\r
2018-09-02,29.870305046959526\r
2018-09-05,31.86206096208845\r
2018-09-07,27.53775503429417\r
2018-09-10,25.64308577046036\r
2018-09-12,25.64308577046036\r
2018-09-17,23.067727722857605\r
2018-09-20,18.871042837786526\r
2018-09-22,20.934130125249148\r
2018-09-25,16.880924444581407\r
2018-09-27,16.880924444581407\r
2018-10-02,16.234230979559342\r
2018-10-05,16.234230979559342\r
2018-10-10,20.759480827615885\r
2018-10-12,20.759480827615885\r
2018-10-15,9.845907270664743\r
2018-10-17,12.68467574943744\r
2018-10-20,12.68467574943744\r
2018-10-22,10.8119988232913\r
2018-10-25,10.8119988232913\r
2018-10-30,12.243671789201098\r
2018-11-04,14.345717937914678\r
2018-11-09,14.345717937914678\r
2018-11-11,14.345717937914678\r
2018-11-14,14.345717937914678\r
2018-11-24,56.41649292242333\r
2018-12-11,69.2983509421852\r
2018-12-14,69.2983509421852\r
2019-01-03,55.44415255614804\r
2019-01-10,55.44415255614804\r
2019-01-15,55.92961482415324\r
2019-02-04,66.44539344216253\r
2019-02-12,69.2983509421852\r
2019-02-14,54.23671799643166\r
2019-02-17,59.86394751601718\r
2019-02-19,59.86394751601718\r
2019-02-22,57.88558193778046\r
2019-02-24,57.88558193778046\r
2019-02-27,57.88558193778046\r
2019-03-04,64.65090690675812\r
2019-03-16,57.88558193778046\r
2019-03-19,57.88558193778046\r
2019-03-21,73.25295447733741\r
2019-03-24,71.92659249516024\r
2019-03-26,77.55147707073712\r
2019-03-29,76.19937840358011\r
2019-03-31,80.82884037862637\r
2019-04-05,82.20776584575228\r
2019-04-13,89.21843996190083\r
2019-04-15,89.21843996190083\r
2019-04-18,87.51839187799165\r
2019-04-20,94.38384990945923\r
2019-04-23,90.35787787103567\r
2019-04-30,87.23611734448299\r
2019-05-03,89.50284511746592\r
2019-05-10,93.2275790067001\r
2019-05-13,94.38384990945923\r
2019-05-15,90.64349349634557\r
2019-05-23,88.65054020344374\r
2019-05-25,88.65054020344374\r
2019-05-30,76.73926160917053\r
2019-06-02,88.36704624050249\r
2019-06-04,88.36704624050249\r
2019-06-07,96.41877888261045\r
2019-06-12,95.54488608726794\r
2019-06-17,78.91152007155291\r
2019-06-19,93.51619892984986\r
2019-06-24,86.39112906504945\r
2019-06-27,90.35787787103567\r
2019-06-29,80.82884037862637\r
2019-07-02,86.39112906504945\r
2019-07-04,84.43023805340357\r
2019-07-07,79.18447797902994\r
2019-07-09,79.18447797902994\r
2019-07-12,76.46916038246424\r
2019-07-14,72.98703290888973\r
2019-07-17,73.25295447733741\r
2019-07-19,70.60837469677817\r
2019-07-22,67.73721015690187\r
2019-07-24,62.87295484948591\r
2019-07-29,62.87295484948591\r
2019-08-01,58.62485765791637\r
2019-08-03,56.90478280759337\r
2019-08-06,51.84873274849886\r
2019-08-08,49.497041251149085\r
2019-08-11,41.120921734547686\r
2019-08-13,47.18220378122213\r
2019-08-16,45.35726234340293\r
2019-08-18,45.35726234340293\r
2019-08-21,44.90480753911569\r
2019-08-23,40.02941328253661\r
2019-08-26,41.56027233435487\r
2019-08-28,38.94778647266091\r
2019-08-31,34.929338633419796\r
2019-09-02,32.467939166601745\r
2019-09-07,32.06359537444034\r
2019-09-12,34.10218658754037\r
2019-09-15,24.528191479071193\r
2019-09-17,17.536026928946633\r
2019-09-20,12.832835084678287\r
2019-09-22,12.832835084678287\r
2019-09-27,10.8119988232913\r
2019-09-30,10.952468296235375\r
2019-10-07,10.8119988232913\r
2019-10-25,19.721941673494406\r
2019-10-30,19.721941673494406\r
2019-12-06,72.45616274747245\r
2019-12-14,72.45616274747245\r
2019-12-19,72.45616274747245\r
2019-12-21,98.17454152501726\r
2019-12-29,96.12718514989355\r
2020-02-12,58.62485765791637\r
2020-02-14,58.62485765791637\r
2020-02-22,64.39589792146813\r
2020-02-24,62.368026775838345\r
2020-03-08,64.65090690675812\r
2020-03-20,75.1234504360764\r
2020-03-23,78.09454351342606\r
2020-03-25,77.8228515897086\r
2020-03-28,93.51619892984986\r
2020-04-02,92.07609279985886\r
2020-04-04,95.25418135144918\r
2020-04-07,99.94088768187838\r
2020-04-09,97.29533334059826\r
2020-04-12,98.17454152501726\r
2020-04-14,95.83588745258072\r
2020-04-17,95.83588745258072\r
2020-04-22,96.41877888261045\r
2020-04-24,93.51619892984986\r
2020-04-27,98.76215072011256\r
2020-05-04,88.36704624050249\r
2020-05-07,88.36704624050249\r
2020-05-09,84.15134402186573\r
2020-05-17,78.36655247710948\r
2020-05-19,84.43023805340357\r
2020-05-22,88.08385665008609\r
2020-05-24,88.08385665008609\r
2020-05-27,89.50284511746592\r
2020-05-29,80.00524382881635\r
2020-06-01,80.00524382881635\r
2020-06-21,84.98895273214264\r
2020-06-23,99.05639557058079\r
2020-06-26,99.05639557058079\r
2020-06-28,99.05639557058079\r
2020-07-01,81.65525807876286\r
2020-07-08,79.18447797902994\r
2020-07-11,77.00968171250202\r
2020-07-13,78.09454351342606\r
2020-07-18,72.19121493633074\r
2020-07-21,68.51629092026283\r
2020-07-23,68.51629092026283\r
2020-07-28,53.51654389415338\r
2020-07-31,57.14945591619416\r
2020-08-05,43.33323651482261\r
2020-08-07,39.81229455309125\r
2020-08-10,37.450281408979016\r
2020-08-15,42.66546887943031\r
2020-08-20,32.670746791519115\r
2020-08-25,21.814692717958042\r
2020-08-27,21.63760914343003\r
2020-09-01,13.431203766205591\r
2020-09-04,14.038640414969676\r
2020-09-09,8.519410169117352\r
2020-09-14,7.2588114382758935\r
2020-09-16,7.505495569277955\r
2020-09-19,6.773806519745443\r
2020-10-31,1.783766366246999\r
2020-11-10,1.783766366246999\r
2020-11-23,3.235162729485092\r
2020-11-25,3.235162729485092\r
2020-11-28,3.235162729485092\r
2020-12-13,3.616561086790495\r
2020-12-28,23.430023218625955\r
2021-01-24,50.4333273228919\r
2021-01-29,50.4333273228919\r
2021-02-21,79.73134021559493\r
2021-02-23,89.50284511746592\r
2021-02-26,89.50284511746592\r
2021-02-28,87.51839187799165\r
2021-03-05,95.83588745258072\r
2021-03-10,95.25418135144918\r
2021-03-20,100.0\r
2021-03-23,100.0\r
2021-03-25,99.35093353889728\r
2021-03-28,100.0\r
2021-03-30,98.76215072011256\r
2021-04-02,94.67366296278577\r
2021-04-04,94.96377354352072\r
2021-04-07,93.51619892984986\r
2021-04-09,97.29533334059826\r
2021-04-14,86.67248561078706\r
2021-04-17,89.50284511746592\r
2021-04-19,90.07256438898342\r
2021-04-22,90.07256438898342\r
2021-04-24,91.50215009209388\r
2021-04-27,92.36351471524709\r
2021-05-27,66.70308969362561\r
2021-05-29,71.6622958184499\r
2021-06-01,79.73134021559493\r
2021-06-03,84.43023805340357\r
2021-06-11,85.26877270764098\r
2021-06-13,83.59448426201183\r
2021-06-16,81.10399995298587\r
2021-06-18,84.15134402186573\r
2021-06-21,84.15134402186573\r
2021-06-26,90.07256438898342\r
2021-07-11,79.45775147989261\r
2021-07-18,79.45775147989261\r
2021-07-21,82.48448747601952\r
2021-07-23,79.73134021559493\r
2021-08-02,87.51839187799165\r
2021-08-10,86.67248561078706\r
2021-08-12,72.98703290888973\r
2021-08-15,72.19121493633074\r
2021-08-17,72.19121493633074\r
2021-08-20,76.73926160917053\r
2021-08-25,80.27946196345488\r
2021-08-27,79.45775147989261\r
2021-09-01,76.46916038246424\r
2021-09-04,76.46916038246424\r
2021-09-06,70.0833790865229\r
2021-09-24,56.17287714803272\r
2021-09-26,56.17287714803272\r
2021-09-29,59.615435424974905\r
2021-10-01,59.615435424974905\r
2021-10-11,63.379245126967774\r
2021-10-14,71.13468134360339\r
2021-10-16,62.87295484948591\r
2021-10-21,66.9611199151971\r
2021-10-24,69.82137392929495\r
2021-11-30,64.65090690675812\r
2021-12-03,64.65090690675812\r
2021-12-23,61.11169012134391\r
2022-01-14,49.03110704565941\r
2022-01-19,49.03110704565941\r
2022-01-22,49.03110704565941\r
2022-01-24,54.47749186051178\r
2022-01-27,50.4333273228919\r
2022-01-29,50.4333273228919\r
2022-02-01,87.8009717547273\r
2022-02-08,84.70944106896336\r
2022-02-11,84.70944106896336\r
2022-02-13,31.06019393645521\r
2022-02-18,31.06019393645521\r
2022-02-26,62.116074698389276\r
2022-02-28,66.18803158762535\r
2022-03-03,66.18803158762535\r
2022-03-05,65.67431278485458\r
2022-03-08,69.0373339294843\r
2022-03-10,77.8228515897086\r
2022-03-23,85.54890066125387\r
2022-03-25,89.21843996190083\r
2022-03-28,89.21843996190083\r
2022-04-04,83.59448426201183\r
2022-04-14,80.5539942646201\r
2022-04-17,85.54890066125387\r
2022-04-19,85.54890066125387\r
2022-04-27,85.54890066125387\r
2022-05-02,73.51919985208329\r
2022-05-04,73.51919985208329\r
2022-05-07,73.51919985208329\r
2022-05-19,84.15134402186573\r
2022-05-27,84.15134402186573\r
2022-05-29,78.09454351342606\r
2022-06-06,77.00968171250202\r
2022-06-11,85.82933625986684\r
2022-06-13,79.45775147989261\r
2022-06-16,78.09454351342606\r
2022-06-18,75.39195168546654\r
2022-06-21,72.45616274747245\r
2022-06-23,75.9299160450211\r
2022-06-28,69.82137392929495\r
2022-07-01,83.59448426201183\r
2022-07-03,70.34571281061665\r
2022-07-06,65.417956698544\r
2022-07-08,66.18803158762535\r
2022-07-11,66.9611199151971\r
2022-07-13,61.36227178554439\r
2022-07-16,57.63985597600079\r
2022-07-18,58.13165786468346\r
2022-07-21,56.17287714803272\r
2022-07-26,53.75624348756762\r
2022-07-28,48.79869415915923\r
2022-07-31,43.78034128416289\r
2022-08-02,36.18245394722741\r
2022-08-05,36.18245394722741\r
2022-08-07,32.26555506933849\r
2022-08-10,24.160264601537172\r
2022-08-12,19.38007424295513\r
2022-08-15,16.07388421384126\r
2022-08-17,16.07388421384126\r
2022-08-22,12.832835084678287\r
2022-08-25,9.845907270664743\r
2022-08-30,9.845907270664743\r
2022-09-01,8.910588759810466\r
2022-09-04,9.845907270664743\r
2022-09-06,15.280197543931648\r
2022-09-09,15.280197543931648\r
2022-09-11,13.733796943543714\r
2022-09-19,16.71845854321384\r
2022-09-21,13.733796943543714\r
2022-10-04,11.9525868621186\r
2022-10-06,13.13087748692241\r
2022-10-09,13.13087748692241\r
2022-10-11,12.09783602025688\r
2022-10-16,13.885938415971722\r
2022-11-18,72.72143553553337\r
2022-11-20,76.19937840358011\r
2022-11-23,76.19937840358011\r
2022-12-05,58.37808326720933\r
2023-01-17,45.35726234340293\r
2023-01-24,45.35726234340293\r
2023-02-03,50.4333273228919\r
2023-02-08,51.37547339107108\r
2023-02-11,51.37547339107108\r
2023-02-13,48.3349797186807\r
2023-02-16,48.10367933298671\r
2023-02-21,54.23671799643166\r
2023-02-26,60.362009542577354\r
2023-03-03,57.63985597600079\r
2023-03-05,60.8614522153204\r
2023-03-15,60.8614522153204\r
2023-03-28,75.1234504360764\r
2023-04-04,77.00968171250202\r
2023-04-07,77.00968171250202\r
2023-04-09,61.613196744100286\r
2023-04-19,81.93135593113394\r
2023-05-27,98.17454152501726\r
2023-05-29,100.0\r
2023-06-01,95.83588745258072\r
2023-06-03,98.46819927535314\r
2023-06-06,97.58810826677067\r
2023-06-08,96.71066835502873\r
2023-06-16,100.0\r
2023-06-23,94.09433468467216\r
2023-06-26,100.0\r
2023-06-28,100.0\r
2023-07-06,72.98703290888973\r
2023-07-08,72.98703290888973\r
2023-07-11,99.05639557058079\r
2023-07-13,84.43023805340357\r
2023-07-16,90.07256438898342\r
2023-07-18,91.50215009209388\r
2023-07-21,91.50215009209388\r
2023-07-23,87.23611734448299\r
2023-07-26,82.20776584575228\r
2023-07-28,85.54890066125387\r
2023-07-31,80.00524382881635\r
2023-08-02,68.2562657501798\r
2023-08-05,68.77664711803016\r
2023-08-07,68.77664711803016\r
2023-08-12,66.18803158762535\r
2023-08-22,23.977000944101995\r
2023-08-25,33.07762915248489\r
2023-09-01,23.24863903435498\r
2023-09-04,24.71285237653571\r
2023-09-06,23.794205370640615\r
2023-09-11,23.977000944101995\r
2023-09-14,23.611879064632475\r
2023-09-19,16.556519865184114\r
2023-09-26,43.33323651482261\r
2023-09-29,44.90480753911569\r
2023-10-01,42.222224494440795\r
2023-10-06,45.35726234340293\r
2023-10-09,44.22898104646431\r
2023-10-11,45.58405899843074\r
2023-10-16,49.03110704565941\r
2023-10-21,88.9343382174044\r
2023-11-08,49.96444953167789\r
2023-12-03,48.566651522581374\r
2023-12-15,42.00118451222769\r
2023-12-25,46.95276936817536\r
2023-12-30,54.47749186051178\r
`;export{n as default};
