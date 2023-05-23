const n=`date,value\r
2017-01-19,75.94159053338527\r
2017-01-26,76.50049890442787\r
2017-01-29,71.83467193478685\r
2017-02-08,68.12222132824735\r
2017-02-15,84.94933746155276\r
2017-02-18,96.44763580407624\r
2017-02-25,88.72565993650763\r
2017-03-10,90.47710873029709\r
2017-03-30,89.43528692049853\r
2017-04-06,93.74757041059726\r
2017-04-09,94.13913333476602\r
2017-04-16,98.89635373167839\r
2017-04-19,98.3814954394752\r
2017-04-29,100.0\r
2017-05-06,100.0\r
2017-05-09,98.15306630285482\r
2017-05-16,93.41254254758366\r
2017-05-19,96.33442937271862\r
2017-05-26,96.56090337912971\r
2017-06-05,93.35675820422892\r
2017-06-18,94.86831246747033\r
2017-06-25,94.86831246747033\r
2017-06-28,94.86831246747033\r
2017-07-05,90.86233625706302\r
2017-07-18,87.58483386554423\r
2017-07-23,87.58483386554423\r
2017-07-28,87.58483386554423\r
2017-08-02,82.87819214170852\r
2017-08-04,88.72565993650763\r
2017-08-07,91.85637653687473\r
2017-08-12,91.4139667661549\r
2017-08-14,91.69035775871902\r
2017-08-17,90.5320951467277\r
2017-08-22,90.31224167075855\r
2017-08-24,95.43097978686694\r
2017-08-27,86.28935151379288\r
2017-08-29,86.23556579577529\r
2017-09-01,86.23556579577529\r
2017-09-03,79.27154005578159\r
2017-09-06,79.27154005578159\r
2017-09-08,79.27154005578159\r
2017-09-13,77.26568312658198\r
2017-09-21,85.9131754130811\r
2017-09-23,85.9131754130811\r
2017-09-26,83.93738103108733\r
2017-09-28,83.93738103108733\r
2017-10-08,83.03667606967292\r
2017-10-11,83.35406160938479\r
2017-10-13,82.56164207622746\r
2017-10-16,86.88201215803517\r
2017-10-23,85.9131754130811\r
2017-10-26,83.459980524309\r
2017-10-28,84.62916976850262\r
2017-10-31,82.93100464582142\r
2017-11-02,82.93100464582142\r
2017-11-05,86.07430118720838\r
2017-11-07,82.98383262207291\r
2017-11-15,81.82519242809867\r
2017-11-17,82.08786177487971\r
2017-11-20,83.7250484222545\r
2017-11-22,80.67404882113146\r
2017-11-25,80.67404882113146\r
2017-11-27,80.67404882113146\r
2017-11-30,81.14406456548238\r
2017-12-05,82.08786177487971\r
2017-12-12,86.3431526547726\r
2017-12-15,83.14240937575958\r
2017-12-20,87.20606780515244\r
2017-12-25,91.35873461998429\r
2017-12-27,91.30351782632998\r
2017-12-30,91.30351782632998\r
2018-01-24,99.41244769688564\r
2018-01-29,99.98733405498146\r
2018-02-15,96.33442937271862\r
2018-02-25,96.78762193730908\r
2018-03-02,95.37464419782678\r
2018-03-07,95.37464419782678\r
2018-03-15,99.6422192933814\r
2018-03-17,99.6422192933814\r
2018-03-22,99.81470807655438\r
2018-03-30,99.6422192933814\r
2018-04-04,89.27129610582102\r
2018-04-19,93.24523549596523\r
2018-04-21,99.69970030934763\r
2018-04-24,97.63999378542104\r
2018-05-06,89.43528692049853\r
2018-05-11,97.92488139748296\r
2018-05-21,96.73091937355208\r
2018-05-24,91.57975531232492\r
2018-05-29,91.57975531232492\r
2018-06-03,95.76931457307879\r
2018-06-20,95.76931457307879\r
2018-06-23,97.07136396590396\r
2018-06-25,95.54369686098154\r
2018-07-03,95.76931457307879\r
2018-07-08,98.15306630285482\r
2018-07-10,98.15306630285482\r
2018-07-13,99.6422192933814\r
2018-07-15,99.6422192933814\r
2018-07-23,98.89635373167839\r
2018-07-25,90.5320951467277\r
2018-08-02,94.92451033360125\r
2018-08-04,95.14945484535464\r
2018-08-12,94.02718162435892\r
2018-08-17,95.31832390843057\r
2018-08-19,95.88221519948868\r
2018-08-22,88.50783630618042\r
2018-08-27,87.09798760834853\r
2018-09-01,82.87819214170852\r
2018-09-03,81.61533574436271\r
2018-09-08,80.88278967819302\r
2018-09-11,81.87769532303405\r
2018-09-18,84.2031445728\r
2018-09-23,75.08153191035056\r
2018-09-26,80.15328223998583\r
2018-09-28,75.38456755663607\r
2018-10-03,78.34282216642666\r
2018-10-11,82.35091824225067\r
2018-10-16,78.90977388936469\r
2018-10-21,78.90977388936469\r
2018-11-10,64.4535132644035\r
2018-11-15,70.99639263186293\r
2018-11-17,68.79928366207635\r
2018-11-22,79.53041032371495\r
2018-11-25,79.53041032371495\r
2018-12-07,77.31681992040107\r
2018-12-12,77.31681992040107\r
2018-12-20,80.56977142785715\r
2018-12-27,80.56977142785715\r
2019-02-15,85.1096297900779\r
2019-02-18,82.56164207622746\r
2019-02-20,84.84255311956528\r
2019-02-23,82.82539511052467\r
2019-02-25,84.46929444606941\r
2019-02-28,85.05618357286814\r
2019-03-05,85.21656854371273\r
2019-03-07,87.85584320311834\r
2019-03-12,87.58483386554423\r
2019-03-20,95.93868845275449\r
2019-03-22,92.96669696719889\r
2019-03-25,86.93598290078428\r
2019-03-27,87.09798760834853\r
2019-03-30,85.32356905111928\r
2019-04-04,85.32356905111928\r
2019-04-09,81.82519242809867\r
2019-04-16,84.52257077190394\r
2019-04-19,84.52257077190394\r
2019-05-01,82.98383262207291\r
2019-05-06,90.31224167075855\r
2019-05-09,90.31224167075855\r
2019-05-11,90.31224167075855\r
2019-05-14,83.56596129623973\r
2019-05-16,83.56596129623973\r
2019-05-29,70.2604941583634\r
2019-05-31,83.03667606967292\r
2019-06-03,83.03667606967292\r
2019-06-08,90.58709692686934\r
2019-06-13,85.59134045161976\r
2019-06-23,43.98761623363131\r
2019-06-25,44.3038113505906\r
2019-06-28,92.35526146611261\r
2019-07-03,92.35526146611261\r
2019-07-05,87.20606780515244\r
2019-07-08,87.20606780515244\r
2019-07-10,90.69714657529289\r
2019-07-15,90.31224167075855\r
2019-07-23,93.63583316536112\r
2019-07-25,93.63583316536112\r
2019-07-28,91.13795956790972\r
2019-08-09,78.44576444350274\r
2019-08-12,78.44576444350274\r
2019-08-14,84.68249243770536\r
2019-08-17,75.89087415540419\r
2019-08-22,76.14461185464239\r
2019-08-24,75.53629586919493\r
2019-08-27,81.35336346554212\r
2019-08-29,81.35336346554212\r
2019-09-03,83.67200391888214\r
2019-09-06,83.67200391888214\r
2019-09-08,83.459980524309\r
2019-09-11,60.10176364438947\r
2019-09-13,80.88278967819302\r
2019-09-16,71.14399540633573\r
2019-09-18,71.48895006297825\r
2019-09-26,70.99639263186293\r
2019-10-08,77.16345622032004\r
2019-10-11,72.97601337376854\r
2019-10-13,73.57477916544873\r
2019-10-21,73.57477916544873\r
2019-10-26,80.46555606666381\r
2019-12-05,75.43512807097053\r
2019-12-10,88.12723755886593\r
2019-12-15,80.41347165010954\r
2019-12-20,80.41347165010954\r
2019-12-25,85.9131754130811\r
2019-12-27,88.01863362048421\r
2019-12-30,87.47653795696708\r
2020-01-09,92.8553888678955\r
2020-01-11,93.57998752573022\r
2020-01-14,91.85637653687473\r
2020-01-16,91.30351782632998\r
2020-01-19,87.91009127586362\r
2020-01-24,87.91009127586362\r
2020-01-29,79.73778597810761\r
2020-01-31,74.32639956357588\r
2020-02-03,72.37949853621097\r
2020-02-15,93.1337740971935\r
2020-02-18,91.19313029954793\r
2020-02-20,88.83466408608705\r
2020-02-23,89.27129610582102\r
2020-03-11,96.16473438271069\r
2020-03-21,96.16473438271069\r
2020-03-24,93.63583316536112\r
2020-03-26,89.32594433072008\r
2020-03-29,88.23590308491819\r
2020-03-31,88.23590308491819\r
2020-04-03,85.37709246054487\r
2020-04-05,85.37709246054487\r
2020-04-08,79.32328305614645\r
2020-04-10,87.15202000141879\r
2020-04-13,89.16204579977747\r
2020-04-15,89.16204579977747\r
2020-04-18,89.16204579977747\r
2020-04-23,89.16204579977747\r
2020-04-30,91.13795956790972\r
2020-05-03,91.13795956790972\r
2020-05-05,91.13795956790972\r
2020-05-18,66.82516039701957\r
2020-05-20,90.97253950894951\r
2020-05-25,90.97253950894951\r
2020-05-28,86.02057716875402\r
2020-05-30,92.91103525165376\r
2020-06-02,92.91103525165376\r
2020-06-07,96.73091937355208\r
2020-06-12,96.73091937355208\r
2020-06-14,95.71288720137973\r
2020-06-24,84.3627881432357\r
2020-06-27,84.3627881432357\r
2020-07-04,84.3627881432357\r
2020-07-07,84.3627881432357\r
2020-07-09,84.3627881432357\r
2020-07-19,80.67404882113146\r
2020-07-22,89.27129610582102\r
2020-07-24,82.77261355306055\r
2020-07-27,82.14044210188757\r
2020-07-29,82.14044210188757\r
2020-08-01,82.14044210188757\r
2020-08-06,80.36140274399052\r
2020-08-08,74.98064478734672\r
2020-08-16,44.50196210864575\r
2020-08-18,44.50196210864575\r
2020-08-31,43.51527725689512\r
2020-09-02,60.51236016922642\r
2020-09-05,60.51236016922642\r
2020-09-07,60.51236016922642\r
2020-09-10,56.19907141400161\r
2020-09-12,54.48876967227241\r
2020-09-15,52.160854098426604\r
2020-09-17,52.75989808604056\r
2020-09-25,51.09896299786565\r
2020-09-30,44.700519468873416\r
2020-10-10,49.37923209439823\r
2020-10-12,34.77622033861944\r
2020-10-15,34.77622033861944\r
2020-10-30,56.952189261826206\r
2020-11-01,56.952189261826206\r
2020-11-04,56.952189261826206\r
2020-11-11,74.12562394897233\r
2020-11-14,71.14399540633573\r
2020-11-21,75.23297956280392\r
2020-11-26,75.23297956280392\r
2020-11-29,72.77692491553508\r
2020-12-06,75.53629586919493\r
2020-12-26,83.6189748766152\r
2021-01-03,50.0890052050451\r
2021-01-08,50.0890052050451\r
2021-01-10,50.0890052050451\r
2021-01-18,97.81088054575953\r
2021-02-17,98.89635373167839\r
2021-02-19,99.6422192933814\r
2021-02-24,93.30098918677797\r
2021-02-27,94.75596265446464\r
2021-03-09,93.02237401379456\r
2021-03-21,92.96669696719889\r
2021-03-29,99.182920082064\r
2021-03-31,95.20572923146933\r
2021-04-03,97.18496772852976\r
2021-04-05,95.825757239356\r
2021-04-08,95.825757239356\r
2021-04-15,96.67423209212419\r
2021-04-18,97.63999378542104\r
2021-04-20,95.65647512498168\r
2021-04-23,100.0\r
2021-05-03,99.98733405498146\r
2021-05-08,95.03695198148485\r
2021-05-20,89.43528692049853\r
2021-05-23,89.43528692049853\r
2021-05-28,99.6422192933814\r
2021-05-30,95.14945484535464\r
2021-06-02,98.49580158027469\r
2021-06-07,94.86831246747033\r
2021-06-09,95.31832390843057\r
2021-06-14,98.49580158027469\r
2021-06-22,98.43864087942656\r
2021-07-22,88.3446301925552\r
2021-08-11,45.01905661565021\r
2021-08-16,45.01905661565021\r
2021-08-21,45.01905661565021\r
2021-08-26,79.68591878108255\r
2021-08-28,81.72023310543504\r
2021-08-31,77.88035138865254\r
2021-09-05,81.09177858643967\r
2021-09-12,82.98383262207291\r
2021-09-15,82.98383262207291\r
2021-09-17,81.61533574436271\r
2021-09-20,81.61533574436271\r
2021-09-22,81.61533574436271\r
2021-09-25,75.84017336002546\r
2021-09-30,75.73881852041605\r
2021-10-07,78.8065519207077\r
2021-10-10,78.8065519207077\r
2021-10-12,77.57273726336578\r
2021-10-15,77.57273726336578\r
2021-10-17,77.57273726336578\r
2021-10-20,70.89806911143728\r
2021-10-27,76.0938331545964\r
2021-11-01,66.2523715381756\r
2021-11-04,66.2523715381756\r
2021-11-06,66.2523715381756\r
2021-11-09,61.4754159916245\r
2021-11-11,76.6023210845927\r
2021-11-19,74.27618224482848\r
2021-12-14,96.50426194900076\r
2021-12-16,100.0\r
2021-12-19,96.50426194900076\r
2022-01-13,99.52730300024862\r
2022-01-15,99.81470807655438\r
2022-01-23,98.66737524109685\r
2022-01-25,86.66628333970544\r
2022-02-02,100.0\r
2022-02-09,86.98996905726439\r
2022-03-09,92.29976844078223\r
2022-03-19,100.0\r
2022-03-21,100.0\r
2022-03-24,100.0\r
2022-03-26,100.0\r
2022-04-03,83.14240937575958\r
2022-04-05,94.53144672584753\r
2022-04-15,94.53144672584753\r
2022-05-10,96.16473438271069\r
2022-05-15,97.01458500126876\r
2022-05-18,97.01458500126876\r
2022-05-28,91.52447711306887\r
2022-05-30,94.75596265446464\r
2022-06-09,92.68854171470946\r
2022-06-17,89.1074437201435\r
2022-06-19,89.1074437201435\r
2022-06-22,89.1074437201435\r
2022-06-24,89.1074437201435\r
2022-07-02,90.69714657529289\r
2022-07-07,90.75219444207906\r
2022-07-12,94.86831246747033\r
2022-07-14,92.68854171470946\r
2022-07-17,87.58483386554423\r
2022-07-24,84.30955816779975\r
2022-07-27,86.23556579577529\r
2022-08-01,82.50893789923414\r
2022-08-03,77.93167484037657\r
2022-08-06,76.29704142203946\r
2022-08-08,76.29704142203946\r
2022-08-11,76.29704142203946\r
2022-08-13,75.63752602124222\r
2022-08-16,71.4396238470252\r
2022-09-05,55.01242682284365\r
2022-09-10,56.73020542716696\r
2022-09-12,55.494468641537765\r
2022-09-15,55.494468641537765\r
2022-09-20,53.31896892886036\r
2022-09-22,43.67246298921267\r
2022-09-25,43.711800146846244\r
2022-09-30,43.711800146846244\r
2022-10-02,43.04528452445081\r
2022-10-05,39.63293808553808\r
2022-10-07,39.63293808553808\r
2022-10-12,39.63293808553808\r
2022-10-15,36.82192079381736\r
2022-10-17,39.520175690001864\r
2022-10-20,39.520175690001864\r
2022-10-22,37.66258466895619\r
2022-11-01,39.25763818071291\r
2022-11-04,35.23804812696126\r
2022-11-06,40.12328195627454\r
2022-11-11,38.14160058909373\r
2022-11-16,37.51575545219653\r
2022-11-19,40.997601211279225\r
2022-12-04,67.3522083018134\r
2022-12-11,67.3522083018134\r
2022-12-14,70.55443037379375\r
2022-12-21,77.88035138865254\r
2022-12-24,75.28349330171396\r
2022-12-26,79.01305799375186\r
2023-01-03,71.68641149263804\r
2023-01-10,74.12562394897233\r
2023-02-02,97.63999378542104\r
2023-02-04,97.69694076894953\r
2023-02-07,97.69694076894953\r
2023-02-09,93.07806639070468\r
2023-02-12,93.97122874445755\r
2023-02-14,92.07794974590601\r
2023-02-17,93.97122874445755\r
2023-02-19,93.97122874445755\r
2023-02-24,98.61016876181989\r
2023-03-01,90.58709692686934\r
2023-03-04,90.58709692686934\r
2023-04-05,93.41254254758366\r
2023-04-08,98.21015069210979\r
2023-04-18,98.5529775413092\r
2023-04-20,98.09599717805258\r
`;export{n as default};
