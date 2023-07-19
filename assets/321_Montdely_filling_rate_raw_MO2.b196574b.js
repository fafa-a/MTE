const n=`date,value\r
2017-01-26,50.74093892204865\r
2017-02-05,50.74093892204865\r
2017-02-15,53.94727338972996\r
2017-02-22,55.49279285727119\r
2017-02-25,55.79219254485961\r
2017-03-04,56.45334748610361\r
2017-03-07,55.852156916957995\r
2017-03-17,61.4262203305555\r
2017-04-06,70.6163700876968\r
2017-04-23,70.5831486608138\r
2017-05-16,69.72178973232356\r
2017-05-23,68.86505438234978\r
2017-05-26,69.92015475483139\r
2017-06-02,72.31970864521074\r
2017-06-05,72.6221374958367\r
2017-06-12,74.10860716687915\r
2017-07-05,69.16109293882222\r
2017-07-07,69.4906750810209\r
2017-07-12,69.4906750810209\r
2017-07-17,67.94759535300767\r
2017-07-22,67.16548339300405\r
2017-07-25,67.16548339300405\r
2017-07-27,67.26303104013634\r
2017-08-14,56.54376850872248\r
2017-08-16,56.54376850872248\r
2017-08-19,56.54376850872248\r
2017-08-21,57.208786526294965\r
2017-08-24,57.208786526294965\r
2017-08-26,54.24300715506889\r
2017-08-29,54.24300715506889\r
2017-09-05,47.78871530071426\r
2017-09-13,50.71218455846709\r
2017-09-20,52.4500310683474\r
2017-09-23,48.26600087944826\r
2017-09-28,51.693824085578356\r
2017-10-03,46.97930868672548\r
2017-10-08,42.35655567337772\r
2017-10-10,46.17594839037818\r
2017-10-13,43.29118167493892\r
2017-10-15,43.29118167493892\r
2017-10-18,43.29118167493892\r
2017-10-20,45.460845604360195\r
2017-10-23,42.9429948053179\r
2017-11-07,40.56624239260099\r
2017-11-12,40.56624239260099\r
2017-11-14,40.67061928246776\r
2017-11-17,41.115527512671555\r
2017-11-19,41.72082495145201\r
2017-11-22,39.73544909784828\r
2017-11-24,41.87936385087052\r
2017-11-27,42.3299830703208\r
2017-11-29,37.94433141934208\r
2017-12-02,44.66898882347396\r
2018-01-01,56.15240074031873\r
2018-01-03,56.15240074031873\r
2018-01-08,56.15240074031873\r
2018-01-11,56.15240074031873\r
2018-01-31,66.97057365302176\r
2018-02-02,66.97057365302176\r
2018-02-07,66.97057365302176\r
2018-02-10,64.04483618779079\r
2018-02-15,81.56039553904276\r
2018-02-22,81.56039553904276\r
2018-02-25,92.25132498710528\r
2018-02-27,97.04652329443526\r
2018-03-02,94.73007150572167\r
2018-03-07,94.73007150572167\r
2018-03-09,96.55080408160367\r
2018-04-18,97.54335110396535\r
2018-04-21,98.11799057342175\r
2018-04-26,98.11799057342175\r
2018-05-11,92.62504650015029\r
2018-05-13,92.62504650015029\r
2018-05-21,98.69410393919685\r
2018-05-23,98.69410393919685\r
2018-05-26,100.0\r
2018-06-02,92.40073438872022\r
2018-06-25,97.16107749578437\r
2018-06-27,97.16107749578437\r
2018-07-02,100.0\r
2018-07-07,98.80950338393076\r
2018-07-10,98.80950338393076\r
2018-07-25,98.23309536980811\r
2018-07-27,98.00294473287401\r
2018-08-06,94.57902758583944\r
2018-08-11,97.61988450214649\r
2018-08-14,98.07963540882567\r
2018-08-16,98.07963540882567\r
2018-08-26,90.68890782415606\r
2018-08-29,90.68890782415606\r
2018-08-31,88.66053789789542\r
2018-09-03,90.20766660445396\r
2018-09-05,83.1237415945295\r
2018-09-08,87.30728751311952\r
2018-09-10,82.94543584239557\r
2018-09-13,82.94543584239557\r
2018-09-23,76.94837418342631\r
2018-09-25,78.43789179645677\r
2018-09-28,77.67425451119502\r
2018-09-30,77.67425451119502\r
2018-10-03,79.72954396583415\r
2018-10-05,77.50115585358711\r
2018-10-10,83.44511334702663\r
2018-10-13,75.9508660720675\r
2018-10-23,77.19000347666305\r
2018-10-25,77.46655636696019\r
2018-11-04,71.6830590385133\r
2018-11-12,74.14254340485786\r
2018-11-14,74.14254340485786\r
2018-11-17,77.84752184139877\r
2018-11-22,77.84752184139877\r
2018-11-24,74.210436240485\r
2018-11-27,73.32994772356273\r
2018-11-29,75.12964492529962\r
2018-12-02,75.12964492529962\r
2018-12-04,75.12964492529962\r
2018-12-07,71.6830590385133\r
2018-12-09,76.63819432132883\r
2018-12-12,65.45235005515072\r
2018-12-17,65.45235005515072\r
2018-12-27,75.9508660720675\r
2018-12-29,75.12964492529962\r
2019-01-11,78.33356730032793\r
2019-01-16,79.3445767811138\r
2019-01-18,79.3445767811138\r
2019-01-23,81.91456266075332\r
2019-01-26,81.91456266075332\r
2019-01-31,79.44948710695073\r
2019-02-12,67.62123470411292\r
2019-02-15,84.55620422975446\r
2019-02-17,88.6238440525393\r
2019-02-20,86.57958903903284\r
2019-02-22,87.59911163381409\r
2019-02-25,88.22064976775431\r
2019-02-27,89.21174159288901\r
2019-03-02,91.46865912364743\r
2019-03-04,88.11082709472404\r
2019-03-07,93.0369022787545\r
2019-03-12,90.9856120705238\r
2019-03-14,93.0369022787545\r
2019-03-17,90.61479791711267\r
2019-03-22,91.17126717134974\r
2019-03-24,89.50632692008368\r
2019-03-27,89.43264081867527\r
2019-03-29,90.05981744801855\r
2019-04-01,90.61479791711267\r
2019-04-13,94.57902758583944\r
2019-05-01,88.11082709472404\r
2019-05-06,93.14936509173747\r
2019-05-13,92.17665989619508\r
2019-05-16,94.76784893601\r
2019-05-23,100.0\r
2019-05-28,100.0\r
2019-05-31,100.0\r
2019-06-02,98.50190245170936\r
2019-06-12,98.50190245170936\r
2019-06-15,98.50190245170936\r
2019-06-17,91.50586286168532\r
2019-06-22,91.50586286168532\r
2019-06-25,91.50586286168532\r
2019-06-27,94.6167786949561\r
2019-06-30,94.6167786949561\r
2019-07-05,98.38666012564684\r
2019-07-07,98.38666012564684\r
2019-07-10,94.80563294576237\r
2019-07-12,96.05619418298816\r
2019-07-15,95.94221104888587\r
2019-07-20,95.94221104888587\r
2019-07-22,91.99011271945724\r
2019-07-25,89.35898122849973\r
2019-08-01,88.18403557036947\r
2019-08-04,84.08948130873732\r
2019-08-06,84.08948130873732\r
2019-08-09,81.48964256794636\r
2019-08-14,77.63962128434521\r
2019-08-16,78.15982793920476\r
2019-08-21,73.80348649081692\r
2019-08-24,75.36876486472302\r
2019-08-26,75.12964492529962\r
2019-08-29,74.61836316033961\r
2019-08-31,73.66805384049441\r
2019-09-03,72.38686741024513\r
2019-09-05,72.38686741024513\r
2019-09-08,72.38686741024513\r
2019-09-13,71.71650559554126\r
2019-09-15,72.05134593965032\r
2019-09-18,69.88707682248389\r
2019-09-20,70.31762312400919\r
2019-09-28,70.31762312400919\r
2019-09-30,72.85774100081275\r
2019-10-03,68.4056529702792\r
2019-10-05,71.98432336789709\r
2019-10-08,67.32809715909316\r
2019-10-10,67.32809715909316\r
2019-10-13,59.74823469116721\r
2019-10-15,59.74823469116721\r
2019-10-25,59.31651827506437\r
2019-10-30,59.717352456437325\r
2019-11-04,58.33487772526903\r
2019-11-09,58.33487772526903\r
2019-11-12,60.39837198695499\r
2019-11-17,59.25495616339085\r
2019-11-19,59.56304591345404\r
2019-11-24,43.93721252907701\r
2019-11-27,66.38732968602203\r
2019-11-29,66.38732968602203\r
2019-12-02,66.38732968602203\r
2019-12-07,66.38732968602203\r
2019-12-09,66.38732968602203\r
2019-12-14,51.40425331892771\r
2019-12-17,51.40425331892771\r
2019-12-19,51.40425331892771\r
2019-12-22,51.40425331892771\r
2019-12-27,77.15546474643496\r
2019-12-29,77.46655636696019\r
2020-01-06,71.2488741699799\r
2020-01-08,75.09551203226938\r
2020-01-11,76.12244452769646\r
2020-01-16,74.41427759648307\r
2020-01-18,74.41427759648307\r
2020-01-23,76.22547277369591\r
2020-01-26,76.32856188644637\r
2020-01-28,73.93902779104023\r
2020-01-31,73.93902779104023\r
2020-02-15,79.3445767811138\r
2020-02-17,79.3445767811138\r
2020-02-20,82.05641717888307\r
2020-02-22,81.27754461407308\r
2020-02-27,81.27754461407308\r
2020-03-01,82.48262386672458\r
2020-03-08,87.0886986279246\r
2020-03-11,90.57775288865167\r
2020-03-18,89.3958077095109\r
2020-03-21,92.17665989619508\r
2020-03-26,93.97590509850292\r
2020-03-28,99.73481874048646\r
2020-04-05,95.6764803411909\r
2020-04-10,93.07438328872408\r
2020-04-15,88.51380233037916\r
2020-04-25,91.35708756480302\r
2020-05-07,91.31991026474374\r
2020-05-17,92.96196004356766\r
2020-05-20,97.12288620280202\r
2020-05-22,94.65453638486314\r
2020-05-25,97.77302995425944\r
2020-05-27,98.00294473287401\r
2020-05-30,97.77302995425944\r
2020-06-24,97.84964200299895\r
2020-06-26,97.84964200299895\r
2020-07-01,97.84964200299895\r
2020-07-04,97.88795785690438\r
2020-07-06,97.88795785690438\r
2020-07-09,100.0\r
2020-07-11,92.88704419028879\r
2020-07-14,96.01819323626731\r
2020-07-16,96.01819323626731\r
2020-07-19,87.85480661736389\r
2020-07-21,87.52611572557664\r
2020-07-24,88.03764518023355\r
2020-07-26,86.5069655554201\r
2020-07-31,86.39808024877298\r
2020-08-03,86.39808024877298\r
2020-08-05,83.23080532092204\r
2020-08-08,79.55445798180382\r
2020-08-10,74.48227898773763\r
2020-08-13,74.48227898773763\r
2020-08-15,72.42045700386231\r
2020-08-20,70.25131005423357\r
2020-08-23,72.05134593965032\r
2020-08-25,68.20917795015501\r
2020-08-30,64.14037828559249\r
2020-09-02,66.032000352745\r
2020-09-04,58.39602055340322\r
2020-09-07,60.58468983107127\r
2020-09-12,54.27261936972037\r
2020-09-14,50.05280043550484\r
2020-09-17,51.40425331892771\r
2020-09-19,51.40425331892771\r
2020-09-27,50.16720509130334\r
2020-09-29,51.25973445871406\r
2020-10-17,40.38386483163177\r
2020-10-19,40.38386483163177\r
2020-10-24,43.667525024292964\r
2020-10-27,43.667525024292964\r
2020-10-29,43.667525024292964\r
2020-11-01,40.56624239260099\r
2020-11-08,42.409722731304356\r
2020-11-11,38.73308835931447\r
2020-11-13,38.73308835931447\r
2020-11-16,38.73308835931447\r
2020-11-18,42.54276781810508\r
2020-11-21,41.43085276230792\r
2020-11-23,42.70266215905932\r
2020-11-26,41.87936385087052\r
2020-12-03,43.42542665330809\r
2020-12-11,42.78270757199533\r
2021-02-11,90.6518495623947\r
2021-02-14,91.95282309547731\r
2021-02-16,91.95282309547731\r
2021-02-19,87.34374226395906\r
2021-02-24,87.89136104587314\r
2021-03-01,88.99108104277157\r
2021-03-23,92.10202121548471\r
2021-03-26,92.10202121548471\r
2021-03-28,92.6998699955785\r
2021-03-31,91.3942714748666\r
2021-04-02,91.3942714748666\r
2021-04-05,88.66053789789542\r
2021-04-07,91.76647405102317\r
2021-04-12,93.90063331560287\r
2021-04-15,90.76304419575017\r
2021-04-20,91.72922405959162\r
2021-04-22,92.66245494878112\r
2021-05-27,97.77302995425944\r
2021-05-30,97.31390825210619\r
2021-06-09,94.013550869785\r
2021-06-14,97.88795785690438\r
2021-06-16,94.50354511130466\r
2021-06-19,94.50354511130466\r
2021-06-21,100.0\r
2021-06-24,100.0\r
2021-06-26,93.63738958694935\r
2021-06-29,92.10202121548471\r
2021-07-01,92.02740894767723\r
2021-07-16,93.07438328872408\r
2021-07-19,92.3260164855137\r
2021-07-21,87.70865533412376\r
2021-07-24,88.0742328171602\r
2021-07-29,88.14742801257663\r
2021-08-05,80.11532483674442\r
2021-08-10,82.98108361194339\r
2021-08-13,82.98108361194339\r
2021-08-15,82.98108361194339\r
2021-08-30,67.98026916531897\r
2021-10-04,54.27261936972037\r
2021-10-07,58.54900001965483\r
2021-10-09,58.54900001965483\r
2021-10-12,57.42109519502243\r
2021-10-14,58.51839014014961\r
2021-10-17,58.4877872533096\r
2021-10-19,60.49149957358232\r
2021-10-22,60.49149957358232\r
2021-10-24,59.87183336867693\r
2021-10-27,59.03970871772949\r
2021-11-06,54.83659220438529\r
2021-12-16,68.37288999093607\r
2021-12-18,72.4876566113016\r
2021-12-21,73.60037826692471\r
2021-12-23,73.80348649081692\r
2021-12-26,73.4989158549323\r
2022-01-12,94.31495411203747\r
2022-01-15,97.50509423798009\r
2022-01-17,97.50509423798009\r
2022-01-20,97.50509423798009\r
2022-01-22,88.73394549347952\r
2022-01-25,88.6238440525393\r
2022-01-27,87.70865533412376\r
2022-01-30,93.2618872489122\r
2022-02-01,93.2618872489122\r
2022-02-06,92.81215472160527\r
2022-02-09,94.27725566119682\r
2022-02-11,97.16107749578437\r
2022-02-14,97.16107749578437\r
2022-02-24,93.29940782067074\r
2022-02-26,94.12652769896057\r
2022-03-01,90.91139632166383\r
2022-03-03,92.0647117797991\r
2022-04-05,100.0\r
2022-04-10,100.0\r
2022-04-12,100.0\r
2022-04-15,100.0\r
2022-04-25,96.62699638999331\r
2022-04-27,96.62699638999331\r
2022-05-15,93.82538788114465\r
2022-05-17,96.39849823530112\r
2022-05-20,95.10814184474505\r
2022-05-22,95.60061642074355\r
2022-05-27,94.88122070233406\r
2022-05-30,90.17069438360771\r
2022-06-29,92.73729164020594\r
2022-07-01,93.82538788114465\r
2022-07-04,93.82538788114465\r
2022-07-09,93.82538788114465\r
2022-07-11,86.9431057014837\r
2022-07-14,89.06460803535069\r
2022-07-16,85.16823618814115\r
2022-07-19,85.384707708367\r
2022-07-21,84.66406974615155\r
2022-07-24,84.55620422975446\r
2022-07-26,84.34065342964614\r
2022-07-31,81.84367561070317\r
2022-08-03,69.82094147087716\r
2022-08-05,69.82094147087716\r
2022-08-08,70.6163700876968\r
2022-08-10,67.6864519185326\r
2022-08-13,67.6864519185326\r
2022-08-15,66.16111463457419\r
2022-08-20,63.47289064291618\r
2022-08-23,57.29973388899\r
2022-08-25,54.30223864389889\r
2022-08-28,51.89694628557173\r
2022-08-30,52.3333793500848\r
2022-09-04,50.971230100614186\r
2022-09-09,51.89694628557173\r
2022-09-22,37.16267251690281\r
2022-10-02,38.375997786153306\r
2022-10-04,38.88656928873234\r
2022-10-07,38.27423735291945\r
2022-10-09,38.7586501005527\r
2022-10-12,38.7586501005527\r
2022-10-14,39.47736733049521\r
2022-10-22,36.04067492105239\r
2022-11-01,36.04067492105239\r
2022-11-06,34.25259124735558\r
2022-11-08,34.25259124735558\r
2022-11-11,32.955541595663654\r
2022-11-13,32.78900851106618\r
2022-11-16,33.721523867915366\r
2022-11-18,32.599136416041844\r
2022-11-26,32.26801994920736\r
2022-12-21,34.81166998893388\r
2022-12-23,34.81166998893388\r
2022-12-26,39.06596539022833\r
2022-12-28,34.543791190972314\r
2023-02-04,37.11248709166494\r
2023-02-06,37.11248709166494\r
2023-02-09,37.96966449983027\r
2023-02-11,37.94433141934208\r
2023-02-14,37.817776820451535\r
2023-02-16,38.63091506948552\r
2023-02-19,38.63091506948552\r
2023-02-21,38.35054661301338\r
2023-02-24,38.07107067005466\r
2023-03-16,38.19799449481204\r
2023-03-23,38.19799449481204\r
2023-03-28,42.4895279390703\r
2023-04-02,42.4895279390703\r
2023-04-05,45.323885038308276\r
2023-04-07,43.103543812184554\r
2023-04-10,45.29651458913949\r
2023-04-12,45.29651458913949\r
2023-04-15,45.29651458913949\r
2023-04-17,44.77784898492272\r
2023-04-20,43.42542665330809\r
2023-04-27,43.42542665330809\r
2023-05-02,54.30223864389889\r
2023-05-05,54.30223864389889\r
2023-05-10,54.30223864389889\r
2023-06-24,71.48252283959235\r
2023-07-06,71.51592849653944\r
2023-07-09,71.51592849653944\r
`;export{n as default};
