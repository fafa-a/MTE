const n=`date,value\r
2017-01-19,67.38600629606523\r
2017-01-26,78.67702037320569\r
2017-01-29,74.59692932561369\r
2017-02-05,78.67702037320569\r
2017-02-15,85.57266447584641\r
2017-02-18,85.57266447584641\r
2017-02-25,84.7532378013037\r
2017-02-28,90.84665302386693\r
2017-03-27,100.0\r
2017-03-30,100.0\r
2017-04-06,100.0\r
2017-04-09,91.89081023527088\r
2017-04-19,89.80576454644785\r
2017-04-29,86.08589828788317\r
2017-05-16,97.47873815191092\r
2017-05-19,97.47873815191092\r
2017-05-26,97.47873815191092\r
2017-05-29,81.49721586022099\r
2017-06-05,85.06027031410402\r
2017-06-15,93.25307360429122\r
2017-06-18,90.22172659824899\r
2017-06-25,90.22172659824899\r
2017-08-02,77.27715319951308\r
2017-08-04,76.67931739731341\r
2017-08-14,72.23637107034668\r
2017-08-19,71.45414563946517\r
2017-08-22,78.87756094289645\r
2017-08-24,72.04059665377828\r
2017-08-27,72.33431269263207\r
2017-08-29,75.68575061535266\r
2017-09-03,72.13846571662295\r
2017-09-06,76.08275239347167\r
2017-09-18,58.52320971484788\r
2017-09-21,59.72842127640848\r
2017-09-28,59.72842127640848\r
2017-10-13,60.84685601928711\r
2017-10-16,60.84685601928711\r
2017-10-18,60.84685601928711\r
2017-10-21,60.84685601928711\r
2017-10-26,60.56671622802566\r
2017-10-28,63.19500633394169\r
2017-10-31,66.42706764405725\r
2017-11-05,66.42706764405725\r
2017-11-07,65.94900957409794\r
2017-11-15,69.50881309104004\r
2017-11-17,69.50881309104004\r
2018-02-08,85.4701183984172\r
2018-02-10,86.59996947601903\r
2018-02-18,86.59996947601903\r
2018-02-25,98.4365296605152\r
2018-02-28,99.71755446649293\r
2018-03-10,97.26624344321542\r
2018-03-20,94.41002332297283\r
2018-03-25,91.99540508418528\r
2018-04-19,89.28655142691618\r
2018-04-21,98.96973994295476\r
2018-04-24,87.11487578201941\r
2018-05-04,95.14828909579744\r
2018-05-06,100.0\r
2018-05-09,100.0\r
2018-05-11,100.0\r
2018-05-16,99.93149799991977\r
2018-05-19,90.63821328486024\r
2018-05-21,86.80583191020442\r
2018-05-24,86.80583191020442\r
2018-06-20,89.70185613655026\r
2018-06-23,93.35808967098303\r
2018-06-25,90.11768685788925\r
2018-06-28,92.93821928129246\r
2018-07-03,93.67333151733936\r
2018-07-08,92.41410932629891\r
2018-07-10,95.46516916200518\r
2018-07-13,89.18280756858309\r
2018-07-15,90.95092193260733\r
2018-07-18,90.95092193260733\r
2018-07-23,90.95092193260733\r
2018-07-25,94.51539362663164\r
2018-07-28,94.93719573357853\r
2018-08-02,94.93719573357853\r
2018-08-04,90.95092193260733\r
2018-08-07,88.87177383729738\r
2018-08-12,85.98318446284465\r
2018-08-17,88.76816193285504\r
2018-08-19,83.01913622293799\r
2018-08-22,77.77631722502676\r
2018-09-01,75.19029751129696\r
2018-09-08,71.55179648635989\r
2018-09-11,67.96316769603726\r
2018-09-16,69.89670449156333\r
2018-09-26,70.96643857928171\r
2018-09-28,74.59692932561369\r
2018-10-01,74.59692932561369\r
2018-10-06,64.52051755591698\r
2018-10-08,67.00198031154035\r
2018-10-11,74.79457597551462\r
2018-10-13,74.79457597551462\r
2018-10-18,70.47964555857126\r
2018-10-21,71.16141187788936\r
2018-10-23,69.31508874133877\r
2018-11-02,68.54167138341576\r
2018-12-10,78.37647124775111\r
2018-12-12,78.37647124775111\r
2018-12-17,78.97788351312006\r
2018-12-20,78.97788351312006\r
2019-02-13,85.26512707454773\r
2019-02-15,87.01182781925377\r
2019-02-18,87.01182781925377\r
2019-02-20,85.98318446284465\r
2019-02-23,86.80583191020442\r
2019-02-25,83.83396383874373\r
2019-03-10,85.67524413923577\r
2019-03-22,80.4868905050967\r
2019-03-27,80.4868905050967\r
2019-03-30,84.34433346406931\r
2019-04-01,84.34433346406931\r
2019-04-04,84.34433346406931\r
2019-04-11,94.72623053406267\r
2019-04-14,94.72623053406267\r
2019-04-19,98.22346607203234\r
2019-05-06,86.1886456079146\r
2019-05-14,91.05522351149558\r
2019-05-16,91.05522351149558\r
2019-05-29,86.49708835692755\r
2019-06-30,79.6811156272603\r
2019-07-03,79.6811156272603\r
2019-07-05,83.52814871586935\r
2019-07-08,83.52814871586935\r
2019-07-10,83.52814871586935\r
2019-07-15,78.77727322288641\r
2019-07-20,76.5798015255083\r
2019-07-23,65.94900957409794\r
2019-07-25,63.85682225194802\r
2019-07-30,63.85682225194802\r
2019-08-02,60.9403143938488\r
2019-08-22,31.011895043010906\r
2019-08-24,31.011895043010906\r
2019-08-29,31.011895043010906\r
2019-09-01,31.011895043010906\r
2019-09-03,31.011895043010906\r
2019-09-06,20.266820235625126\r
2019-09-11,20.266820235625126\r
2019-09-13,18.692605174645703\r
2019-09-16,18.692605174645703\r
2019-09-18,17.818417654378297\r
2019-09-21,17.418831803228223\r
2019-10-11,22.371293777777172\r
2019-10-13,22.371293777777172\r
2019-10-21,22.371293777777172\r
2019-11-22,41.04114659873075\r
2019-12-02,44.52026630609343\r
2019-12-05,43.49400298559374\r
2019-12-10,46.679129336514784\r
2019-12-20,45.208059879239435\r
2020-01-06,51.79316166944997\r
2020-01-11,51.79316166944997\r
2020-01-16,57.96922888736739\r
2020-01-19,55.039184759976\r
2020-01-21,59.26408429435386\r
2020-01-24,60.28693001090524\r
2020-02-05,63.76216184992083\r
2020-02-15,67.4821064281943\r
2020-02-18,67.4821064281943\r
2020-03-19,84.6509610714826\r
2020-03-24,84.7532378013037\r
2020-03-26,84.1400840628913\r
2020-03-31,84.7532378013037\r
2020-04-05,86.29142640482232\r
2020-04-08,86.29142640482232\r
2020-04-10,87.63061496343018\r
2020-04-13,84.34433346406931\r
2020-04-15,89.39032823022043\r
2020-04-23,90.53404248866674\r
2020-05-15,88.35404481111159\r
2020-05-18,88.5610372377487\r
2020-05-20,84.34433346406931\r
2020-05-25,87.11487578201941\r
2020-05-28,84.44650888434634\r
2020-05-30,87.94045732545969\r
2020-06-02,88.66458306050662\r
2020-06-09,91.15955774355292\r
2020-06-14,93.77847662674608\r
2020-06-24,87.21795705975154\r
2020-07-07,88.35404481111159\r
2020-07-09,82.00366741255374\r
2020-07-12,87.94045732545969\r
2020-07-14,85.67524413923577\r
2020-07-19,86.90881318934399\r
2020-07-22,88.87177383729738\r
2020-07-24,90.11768685788925\r
2020-07-27,89.39032823022043\r
2020-07-29,88.5610372377487\r
2020-08-06,87.63061496343018\r
2020-08-08,82.10506052366718\r
2020-09-07,54.67586298073835\r
2020-09-10,56.49901697169815\r
2020-09-12,54.49444888075992\r
2020-09-15,58.15372917130816\r
2020-09-17,56.13308104357896\r
2020-09-22,56.13308104357896\r
2020-11-14,56.68222832232459\r
2020-11-19,60.56671622802566\r
2020-11-21,58.52320971484788\r
2020-11-29,60.84685601928711\r
2020-12-01,59.72842127640848\r
2020-12-04,59.72842127640848\r
2021-02-24,95.88812328483664\r
2021-02-27,96.09979178717529\r
2021-03-01,94.72623053406267\r
2021-03-06,94.72623053406267\r
2021-03-09,93.0431383929276\r
2021-03-24,93.77847662674608\r
2021-03-29,98.4365296605152\r
2021-03-31,90.63821328486024\r
2021-04-03,94.1993790970052\r
2021-04-08,93.98886348806967\r
2021-04-18,90.95092193260733\r
2021-04-23,89.80576454644785\r
2021-04-25,93.25307360429122\r
2021-05-03,89.18280756858309\r
2021-05-08,88.66458306050662\r
2021-05-28,89.28655142691618\r
2021-05-30,91.89081023527088\r
2021-06-14,91.15955774355292\r
2021-06-24,91.15955774355292\r
2021-07-19,96.20567384272435\r
2021-07-22,100.0\r
2021-08-26,87.73386254852602\r
2021-09-02,89.28655142691618\r
2021-09-05,89.28655142691618\r
2021-09-07,88.97541875636118\r
2021-09-17,84.7532378013037\r
2021-09-22,78.47661936544655\r
2021-09-30,78.47661936544655\r
2021-10-15,79.48001841549853\r
2021-10-17,79.48001841549853\r
2021-10-22,82.10506052366718\r
2021-10-27,88.97541875636118\r
2021-11-06,81.6996936035132\r
2021-11-09,84.7532378013037\r
2021-11-19,75.58658889137313\r
2021-11-29,80.58776796739383\r
2021-12-09,82.91743580069708\r
2021-12-16,78.97788351312006\r
2022-01-05,90.53404248866674\r
2022-01-20,87.83714334177446\r
2022-02-09,87.42421948868254\r
2022-02-12,95.04272640242321\r
2022-02-17,95.04272640242321\r
2022-02-19,95.04272640242321\r
2022-03-24,91.78624790451664\r
2022-03-26,95.57085979251066\r
2022-04-15,90.01367992434015\r
2022-05-03,99.71755446649293\r
2022-05-05,99.71755446649293\r
2022-05-08,99.71755446649293\r
2022-05-10,93.98886348806967\r
2022-05-13,93.98886348806967\r
2022-05-15,88.14718479340016\r
2022-05-18,89.39032823022043\r
2022-05-28,87.63061496343018\r
2022-05-30,80.28523919739132\r
2022-06-02,83.73199153936106\r
2022-06-04,83.73199153936106\r
2022-06-12,83.32444171785018\r
2022-06-14,70.67425289972539\r
2022-06-17,74.00484790730495\r
2022-06-19,72.53030465379656\r
2022-06-27,74.69573478957015\r
2022-06-29,74.79457597551462\r
2022-07-02,70.57693090270499\r
2022-07-04,68.7348033402927\r
2022-07-12,67.097930577538\r
2022-07-14,67.57824396628965\r
2022-07-17,66.0445456914158\r
2022-07-19,66.81019238584754\r
2022-08-03,52.779272675372944\r
2022-08-06,53.049092005786406\r
2022-08-08,49.747836431256125\r
2022-08-11,49.747836431256125\r
2022-08-13,45.639390046190584\r
2022-08-18,42.55903503067312\r
2022-08-31,33.050524042979475\r
2022-09-05,33.050524042979475\r
2022-09-20,30.77896397882855\r
2022-09-22,31.323214621724897\r
2022-09-30,31.323214621724897\r
2022-10-20,38.62771414577371\r
2022-10-27,39.95432402289186\r
2022-11-01,36.986818882617015\r
2022-12-16,56.22450410428146\r
2023-01-15,65.94900957409794\r
2023-01-18,68.7348033402927\r
2023-01-20,68.7348033402927\r
2023-02-07,76.18209145335219\r
2023-02-09,84.54871809299487\r
2023-02-12,84.54871809299487\r
2023-02-14,76.08275239347167\r
2023-02-27,80.08372617662768\r
2023-03-01,82.30794939288988\r
2023-03-04,80.28523919739132\r
2023-03-14,82.30794939288988\r
2023-04-05,90.42990443076697\r
2023-04-08,91.15955774355292\r
2023-04-13,91.15955774355292\r
2023-04-20,93.25307360429122\r
2023-04-30,93.25307360429122\r
`;export{n as default};
