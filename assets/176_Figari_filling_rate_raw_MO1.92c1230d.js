const r=`date,value\r
2017-02-23,87.15239760950396\r
2017-02-26,74.87087687227412\r
2017-03-05,87.06100556203555\r
2017-03-08,81.96859856622763\r
2017-03-15,86.72619658533097\r
2017-03-28,89.84853037593689\r
2017-04-04,90.28017954359855\r
2017-04-17,89.32538608583332\r
2017-05-04,86.42222764698927\r
2017-05-07,94.54326421602552\r
2017-05-14,79.5967016520937\r
2017-05-17,90.34190443568225\r
2017-05-27,92.51181372307771\r
2017-06-03,83.76390468365365\r
2017-06-06,91.2695969009404\r
2017-06-13,83.13395660923423\r
2017-06-16,90.43452022148468\r
2017-07-01,79.27252830053962\r
2017-07-06,77.83427529590546\r
2017-07-08,65.54334113322136\r
2017-07-11,74.0071857035611\r
2017-07-13,62.624531103862665\r
2017-07-18,57.167411557537605\r
2017-07-23,57.92849570854381\r
2017-07-26,59.01067425181802\r
2017-07-28,51.285998886740245\r
2017-07-31,53.8004248868001\r
2017-08-02,46.55861460421378\r
2017-08-05,48.44462287188621\r
2017-08-07,43.29385208754825\r
2017-08-12,39.082938754070376\r
2017-08-15,36.82360222297618\r
2017-08-17,38.37737495423301\r
2017-08-20,35.27105229046722\r
2017-08-22,33.63447017496941\r
2017-08-25,32.111109284812024\r
2017-08-27,31.137767708011875\r
2017-08-30,27.27330902730217\r
2017-09-01,29.65671444654588\r
2017-09-21,20.457995384794966\r
2017-09-24,22.07218262024703\r
2017-10-16,14.139364373726504\r
2017-10-24,9.990082508409523\r
2017-10-26,10.64056827987579\r
2017-11-03,8.680838051377624\r
2017-11-18,5.005996917005399\r
2017-12-05,5.652619651583931\r
2017-12-23,7.935224387127506\r
2018-01-17,27.59499404239899\r
2018-02-08,58.79895203790589\r
2018-02-11,48.099711101838324\r
2018-04-02,88.86470137480858\r
2018-04-17,90.15677528881226\r
2018-04-19,92.262887328259\r
2018-04-22,93.353719605989\r
2018-04-24,89.23318061012425\r
2018-04-29,94.54326421602552\r
2018-05-19,92.85448123103859\r
2018-06-03,92.9168333608742\r
2018-06-16,100.0\r
2018-06-18,93.82262943745508\r
2018-06-21,100.0\r
2018-06-26,98.2714981222164\r
2018-07-01,93.69750419819523\r
2018-07-06,99.64294487239574\r
2018-07-08,96.1166906060784\r
2018-07-11,100.0\r
2018-07-13,92.48068473211492\r
2018-07-18,88.19058178655533\r
2018-07-21,86.24003061127888\r
2018-07-26,91.82784695268982\r
2018-07-28,88.49677088550939\r
2018-07-31,93.76005931018913\r
2018-08-02,89.01816773824264\r
2018-08-07,88.52741078498457\r
2018-08-12,77.33750590704112\r
2018-09-01,71.21101741351296\r
2018-09-11,64.06431934982496\r
2018-09-14,59.966805805686896\r
2018-09-24,52.62672297097173\r
2018-09-26,52.855627142836894\r
2018-09-29,52.24601080254405\r
2018-10-14,50.83349531722365\r
2018-10-19,48.12431825168401\r
2018-10-21,51.336366053703664\r
2018-10-24,45.9278830196547\r
2018-11-18,52.49970845818987\r
2018-11-28,48.86463464357502\r
2018-12-05,49.95776479480894\r
2018-12-08,50.70805602973504\r
2018-12-10,56.436013270759354\r
2018-12-25,58.00743503396162\r
2019-01-02,60.47365584644451\r
2019-01-07,52.855627142836894\r
2019-01-12,51.46236175018332\r
2019-01-29,75.68023561889879\r
2019-02-06,82.95428578468476\r
2019-02-13,65.76348668307094\r
2019-02-16,72.60425978327721\r
2019-02-18,89.04887243907478\r
2019-02-21,82.5057208053333\r
2019-02-23,93.82262943745508\r
2019-02-26,91.88995029085436\r
2019-02-28,89.97178277379693\r
2019-03-03,75.65127607684178\r
2019-03-18,84.30522025615184\r
2019-03-20,90.6198541687495\r
2019-03-23,86.20967788670815\r
2019-03-28,89.29464712156432\r
2019-03-30,70.64514206765601\r
2019-04-17,85.603430996513\r
2019-04-19,75.56442137341014\r
2019-04-29,89.7869269694163\r
2019-05-02,95.2344209146757\r
2019-05-07,90.58895570073169\r
2019-05-09,85.96699448126685\r
2019-05-29,100.0\r
2019-06-01,99.16375690776974\r
2019-06-03,88.09879950826009\r
2019-06-11,87.48779673956267\r
2019-06-13,87.64040401843754\r
2019-06-16,98.87664314421386\r
2019-06-18,98.81288075791753\r
2019-06-21,98.43061724404006\r
2019-06-23,93.19760418990651\r
2019-06-26,99.99487714994878\r
2019-06-28,80.6016963493495\r
2019-07-01,41.20393174316467\r
2019-07-03,81.13558632249459\r
2019-07-06,99.00421229324546\r
2019-07-08,91.54856887536928\r
2019-07-11,75.53547778127435\r
2019-07-13,70.8430137049679\r
2019-07-18,75.21736160664959\r
2019-07-21,52.06868559264159\r
2019-07-23,62.570430216715444\r
2019-07-26,77.80502190600416\r
2019-07-31,69.4340197679371\r
2019-08-05,60.71427785164486\r
2019-08-07,64.11888119946693\r
2019-08-10,56.853540395754756\r
2019-08-15,59.38184626315641\r
2019-08-17,60.821331245633324\r
2019-08-20,49.58412985956457\r
2019-08-27,49.75836727626268\r
2019-09-04,36.60033879567161\r
2019-09-06,52.24601080254405\r
2019-09-09,32.6232049415224\r
2019-09-11,29.141420557734026\r
2019-09-16,38.24134886573532\r
2019-09-26,31.728953566257122\r
2019-09-29,32.004789884857985\r
2019-10-01,33.82938091986788\r
2019-10-06,30.759835816214604\r
2019-10-09,25.842609395156174\r
2019-10-19,24.420566058818803\r
2019-11-20,39.517661963900984\r
2019-11-30,26.375870489243177\r
2019-12-10,36.689585558769835\r
2019-12-23,43.554731771596025\r
2019-12-25,40.8089774252792\r
2019-12-28,55.29353430377668\r
2019-12-30,44.41245295494701\r
2020-01-09,55.47472980082963\r
2020-01-27,89.66376575581972\r
2020-02-06,66.70206299\r
2020-02-11,75.56442137341014\r
2020-02-16,76.6672291688302\r
2020-02-26,66.01146763479623\r
2020-02-28,62.678648806924755\r
2020-03-04,66.97902434177236\r
2020-03-19,84.48593735073622\r
2020-03-22,85.72455724245833\r
2020-03-24,86.33111184106315\r
2020-03-29,94.22970106798005\r
2020-04-01,93.44743395921677\r
2020-04-08,95.8012583969625\r
2020-04-11,84.18481953754299\r
2020-04-26,99.32339390358736\r
2020-05-03,86.33111184106315\r
2020-05-21,78.36151223879939\r
2020-05-23,97.16025987730484\r
2020-05-26,97.47729259485519\r
2020-05-28,94.07306004304826\r
2020-06-15,100.0\r
2020-06-17,88.55805449926348\r
2020-06-20,95.45471393374828\r
2020-06-22,87.21334479977152\r
2020-06-25,86.81746210307269\r
2020-06-27,90.37277257162309\r
2020-06-30,100.0\r
2020-07-02,91.67265469037271\r
2020-07-05,100.0\r
2020-07-07,78.09773373612462\r
2020-07-12,85.21019635183902\r
2020-07-15,99.32339390358736\r
2020-07-17,86.36147993508389\r
2020-07-20,88.61935337075066\r
2020-07-22,77.3958899706216\r
2020-07-25,83.91414429692028\r
2020-07-27,69.74312443851963\r
2020-07-30,67.20089047615795\r
2020-08-09,57.32458009661795\r
2020-08-11,55.68207132529926\r
2020-08-14,62.84110277085843\r
2020-08-16,57.92849570854381\r
2020-08-19,54.15948370733319\r
2020-08-21,44.50812627488504\r
2020-08-24,55.57836578558404\r
2020-08-26,47.094723300711756\r
2020-09-03,29.223649147507285\r
2020-09-05,33.63447017496941\r
2020-09-08,43.1754568695768\r
2020-09-13,30.697008679673132\r
2020-09-15,28.608969857864412\r
2020-09-18,28.03952169795813\r
2020-09-30,39.563522854667085\r
2020-10-08,22.239744438706595\r
2020-10-28,33.288963643713906\r
2020-11-02,31.89859737071935\r
2020-11-07,30.133647406498827\r
2020-11-17,33.85106266665968\r
2020-11-19,50.73313496867081\r
2020-11-22,43.104475730205806\r
2020-12-27,52.27136067330327\r
2021-01-13,84.06448072344772\r
2021-01-23,88.71133027975105\r
2021-01-26,84.66679359099108\r
2021-02-02,86.66537209057702\r
2021-02-15,87.91533810180796\r
2021-02-25,90.21846982700448\r
2021-03-04,91.45554419285708\r
2021-03-14,92.5429464820039\r
2021-03-22,93.2600390783269\r
2021-03-24,90.09509593193599\r
2021-04-23,87.09146574563262\r
2021-05-03,88.77266728261411\r
2021-05-06,93.38495396580585\r
2021-05-08,87.48779673956267\r
2021-05-18,94.35508136407498\r
2021-05-26,93.72877987710744\r
2021-06-05,96.71703851751263\r
2021-06-10,96.62215737182\r
2021-06-12,87.27430731342878\r
2021-06-15,90.31104009288615\r
2021-06-22,88.43550253245277\r
2021-06-25,90.71257231060963\r
2021-06-27,77.68804790610878\r
2021-06-30,88.77266728261411\r
2021-07-05,88.37424944305994\r
2021-07-10,86.81746210307269\r
2021-07-12,70.19361210076416\r
2021-07-20,71.83535360885993\r
2021-07-22,70.08089239570094\r
2021-07-30,67.84022410954161\r
2021-08-01,58.45548764765993\r
2021-08-06,55.65613842158339\r
2021-08-11,55.397048479626\r
2021-08-14,51.71468622242307\r
2021-08-16,51.91686522010319\r
2021-08-19,51.46236175018332\r
2021-08-21,45.95208467534885\r
2021-08-26,43.104475730205806\r
2021-08-29,39.95411213296912\r
2021-08-31,39.862084636506026\r
2021-09-18,29.512104809846257\r
2021-09-23,29.223649147507285\r
2021-10-08,25.665727661138572\r
2021-10-10,20.34954914378267\r
2021-10-13,18.941142705134926\r
2021-10-15,18.1899189624112\r
2021-10-20,17.39846255728736\r
2021-11-04,13.604485243028176\r
2021-11-19,18.783006029705955\r
2021-11-24,17.262114279028175\r
2021-12-07,26.4155269837687\r
2021-12-12,31.158812566241366\r
2021-12-14,29.429584938793994\r
2021-12-17,31.348446292029614\r
2021-12-19,32.19625608322802\r
2022-01-13,46.89951928652857\r
2022-01-16,50.282397033247804\r
2022-01-23,53.23792748357706\r
2022-01-28,57.613125280621226\r
2022-02-02,51.61370316767873\r
2022-02-10,55.11255212618772\r
2022-02-12,57.639382493245364\r
2022-02-20,57.71817994685644\r
2022-02-22,56.1235949972848\r
2022-02-27,57.71817994685644\r
2022-03-02,57.8495950556968\r
2022-03-07,58.64034008058887\r
2022-03-09,56.331804541647024\r
2022-03-22,70.53216196253842\r
2022-03-24,70.72991982197371\r
2022-03-29,78.919427674848\r
2022-04-11,87.97647661898081\r
2022-04-16,88.09879950826009\r
2022-04-18,87.33528514747123\r
2022-04-26,92.76098126759202\r
2022-04-28,90.40364450034508\r
2022-05-11,98.78100511299571\r
2022-05-13,93.29126216189651\r
2022-05-16,96.97021861600057\r
2022-05-18,94.73158189032908\r
2022-05-21,100.0\r
2022-05-23,96.02202178623979\r
2022-05-26,100.0\r
2022-05-28,97.50901629416227\r
2022-06-02,95.04574408169677\r
2022-06-07,90.24932278818333\r
2022-06-10,90.43452022148468\r
2022-06-12,91.42454352512488\r
2022-06-15,89.14100939122585\r
2022-06-17,88.37424944305994\r
2022-06-20,88.7419968750762\r
2022-07-05,87.42678061768943\r
2022-07-10,81.01683456333488\r
2022-07-12,75.88306400880332\r
2022-07-15,80.18732577900488\r
2022-07-17,68.39793418582566\r
2022-07-20,76.34740447047288\r
2022-07-22,61.81478575790765\r
2022-07-25,67.00674317464454\r
2022-07-30,61.03564145241885\r
2022-08-01,53.90292545086018\r
2022-08-04,56.67073607640859\r
2022-08-06,53.54448065095302\r
2022-08-09,53.9798469151761\r
2022-08-14,52.601311237480665\r
2022-08-16,47.31467618244635\r
2022-08-24,43.86377023046234\r
2022-08-26,42.60878532782167\r
2022-09-10,34.329323542539484\r
2022-09-18,27.736157428285544\r
2022-09-20,30.508804677388067\r
2022-09-23,26.336235428970284\r
2022-10-05,23.15998850482299\r
2022-10-08,25.020909805695336\r
2022-10-13,21.886538022899384\r
2022-10-15,20.621053085069867\r
2022-10-18,22.651254914470403\r
2022-10-20,20.820977323050897\r
2022-10-23,19.596252254317722\r
2022-10-25,19.56063638814676\r
2022-10-28,18.81810629328163\r
2022-10-30,16.40201092508686\r
2022-11-02,14.028636373762959\r
2022-11-04,15.198654829618643\r
2022-11-27,24.45913950442887\r
2022-12-29,65.46085502311773\r
2023-01-21,68.9012759795893\r
2023-01-26,84.78744167974843\r
2023-02-10,85.45210983788473\r
2023-02-12,82.47584758638553\r
2023-02-15,82.56547891574041\r
2023-03-12,84.30522025615184\r
2023-03-24,85.93667636018037\r
2023-03-27,84.57634808287595\r
2023-04-06,86.574164131612\r
2023-04-26,90.6198541687495\r
`;export{r as default};
