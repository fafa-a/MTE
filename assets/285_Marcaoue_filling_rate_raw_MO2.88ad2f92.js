const r=`date,value\r
2017-02-15,61.99045079872649\r
2017-02-22,61.99045079872649\r
2017-02-25,64.80183745726413\r
2017-03-17,67.96311553522689\r
2017-03-27,67.96311553522689\r
2017-04-06,84.5145099719298\r
2017-05-16,92.30573948307762\r
2017-05-26,94.78751754258703\r
2017-06-02,94.01467537974504\r
2017-06-05,94.44373989958025\r
2017-07-05,90.439490562885\r
2017-07-07,90.439490562885\r
2017-08-14,73.4341902787047\r
2017-08-17,55.94306169131694\r
2017-08-19,55.94306169131694\r
2017-08-21,55.94306169131694\r
2017-08-22,55.94306169131694\r
2017-08-24,55.94306169131694\r
2017-08-26,45.99583548011131\r
2017-08-29,47.71369842868115\r
2017-09-03,47.71369842868115\r
2017-09-05,22.15346309884867\r
2017-09-08,37.58358556144203\r
2017-09-13,33.707418714336875\r
2017-09-15,33.707418714336875\r
2017-10-08,32.14410578262192\r
2017-10-10,32.14410578262192\r
2017-10-11,32.14410578262192\r
2017-10-13,35.179556601389436\r
2017-10-15,35.179556601389436\r
2017-10-16,35.179556601389436\r
2017-10-18,35.179556601389436\r
2017-10-20,32.71987045366328\r
2017-10-23,32.71987045366328\r
2017-10-28,33.765851448952645\r
2017-10-30,33.765851448952645\r
2017-10-31,33.765851448952645\r
2017-11-02,33.765851448952645\r
2017-11-07,36.254010834674574\r
2017-11-14,35.83473086936463\r
2017-11-15,35.83473086936463\r
2017-11-17,36.795761700114106\r
2017-11-19,35.894516248430456\r
2017-11-22,36.91655869191807\r
2017-11-24,36.91655869191807\r
2017-11-25,36.91655869191807\r
2017-11-27,34.942434351299276\r
2017-11-30,36.314056839068755\r
2017-12-07,35.29834259957913\r
2018-02-10,65.1004805811064\r
2018-02-12,65.1004805811064\r
2018-02-15,69.25863834798876\r
2018-02-25,67.65961830597999\r
2018-02-27,63.68650884026221\r
2018-03-02,72.88776551704572\r
2018-03-07,72.88776551704572\r
2018-03-09,72.03218703556497\r
2018-03-22,77.38141927324929\r
2018-04-01,77.38141927324929\r
2018-04-21,82.95453713083039\r
2018-04-23,82.95453713083039\r
2018-04-24,82.95453713083039\r
2018-04-26,82.95453713083039\r
2018-05-06,78.74102535909128\r
2018-05-11,90.18610825276212\r
2018-05-19,87.7504912343097\r
2018-05-21,89.17524154852224\r
2018-05-23,83.28204844139691\r
2018-06-20,93.58634223529123\r
2018-06-22,93.58634223529123\r
2018-06-23,93.58634223529123\r
2018-06-25,100.0\r
2018-06-28,100.0\r
2018-07-02,100.0\r
2018-07-03,100.0\r
2018-07-07,91.37083233734819\r
2018-07-08,91.37083233734819\r
2018-07-10,91.37083233734819\r
2018-07-15,81.73067591707589\r
2018-07-18,81.73067591707589\r
2018-07-22,81.73067591707589\r
2018-07-23,81.73067591707589\r
2018-07-25,86.91641915675021\r
2018-07-27,86.8331759443411\r
2018-07-30,88.00129364388717\r
2018-08-01,88.00129364388717\r
2018-08-02,88.00129364388717\r
2018-08-04,86.91641915675021\r
2018-08-06,83.20012535290441\r
2018-08-11,79.94802071661273\r
2018-08-12,79.94802071661273\r
2018-08-19,85.75373280413946\r
2018-08-21,85.75373280413946\r
2018-08-22,85.75373280413946\r
2018-08-26,85.75373280413946\r
2018-08-27,85.75373280413946\r
2018-09-03,59.58702609481011\r
2018-09-05,59.58702609481011\r
2018-09-08,70.25549548055189\r
2018-09-10,70.25549548055189\r
2018-09-11,70.25549548055189\r
2018-09-16,68.64784050954975\r
2018-09-18,68.64784050954975\r
2018-09-23,49.7249843188122\r
2018-09-25,49.7249843188122\r
2018-09-26,49.7249843188122\r
2018-09-28,57.79002080481115\r
2018-09-30,57.79002080481115\r
2018-10-03,49.58993346108883\r
2018-10-05,58.86575413039509\r
2018-10-06,58.86575413039509\r
2018-10-23,47.580719542035496\r
2018-10-25,47.580719542035496\r
2018-11-12,55.16842970658578\r
2018-11-15,55.16842970658578\r
2018-11-17,58.291105905727925\r
2018-11-22,58.291105905727925\r
2018-11-24,51.42468049012341\r
2018-11-27,52.52366689689486\r
2018-11-29,50.74223796876702\r
2018-12-05,50.74223796876702\r
2019-01-26,58.50635180287475\r
2019-01-28,58.50635180287475\r
2019-02-03,57.9330227934147\r
2019-02-15,55.731397760650346\r
2019-02-17,55.731397760650346\r
2019-02-18,55.731397760650346\r
2019-02-20,57.64715108597177\r
2019-02-22,57.64715108597177\r
2019-02-23,57.64715108597177\r
2019-02-25,55.30897119717778\r
2019-02-27,55.30897119717778\r
2019-03-07,54.467731342861946\r
2019-03-12,55.94306169131694\r
2019-03-20,55.028022040586286\r
2019-03-22,57.07699655978979\r
2019-03-24,50.60615911168903\r
2019-03-25,50.60615911168903\r
2019-03-27,58.93773337928712\r
2019-03-29,58.93773337928712\r
2019-03-30,58.93773337928712\r
2019-04-01,58.93773337928712\r
2019-04-08,58.291105905727925\r
2019-04-09,58.291105905727925\r
2019-05-01,72.26515169179915\r
2019-05-06,72.26515169179915\r
2019-05-11,72.26515169179915\r
2019-05-13,72.26515169179915\r
2019-05-14,72.26515169179915\r
2019-05-16,87.33308265818167\r
2019-05-23,86.08533097175476\r
2019-05-31,86.08533097175476\r
2019-07-05,93.67195031382283\r
2019-07-08,93.67195031382283\r
2019-07-10,95.47647375213363\r
2019-07-12,95.47647375213363\r
2019-07-13,95.47647375213363\r
2019-07-15,92.73187344067954\r
2019-07-17,92.73187344067954\r
2019-07-22,97.5545192612204\r
2019-07-23,97.5545192612204\r
2019-07-25,87.08299509100362\r
2019-07-28,93.84325430988648\r
2019-08-02,76.26840920796104\r
2019-08-04,76.42704111872246\r
2019-08-09,67.96311553522689\r
2019-08-14,59.22597931527898\r
2019-08-16,59.22597931527898\r
2019-08-17,59.22597931527898\r
2019-08-21,60.602317295569755\r
2019-08-22,60.602317295569755\r
2019-08-24,51.835781291869324\r
2019-08-26,54.537650319782216\r
2019-08-29,51.08303284888116\r
2019-08-31,47.98007252110238\r
2019-09-03,47.98007252110238\r
2019-09-06,47.98007252110238\r
2019-09-08,47.98007252110238\r
2019-09-13,48.11346753249005\r
2019-09-15,42.185784306187585\r
2019-09-16,42.185784306187585\r
2019-09-20,42.185784306187585\r
2019-09-21,42.185784306187585\r
2019-10-08,24.18388037195871\r
2019-10-11,24.18388037195871\r
2019-10-13,27.73174921160538\r
2019-10-15,27.73174921160538\r
2019-10-25,26.173827998210747\r
2019-12-27,60.02136496722306\r
2019-12-29,60.02136496722306\r
2019-12-30,60.02136496722306\r
2020-01-06,57.07699655978979\r
2020-01-09,57.07699655978979\r
2020-01-11,57.07699655978979\r
2020-01-14,57.07699655978979\r
2020-01-16,57.07699655978979\r
2020-01-19,57.07699655978979\r
2020-02-05,48.98390708624545\r
2020-02-07,48.98390708624545\r
2020-02-08,48.98390708624545\r
2020-02-15,48.98390708624545\r
2020-02-18,48.98390708624545\r
2020-02-20,50.87845349762766\r
2020-02-22,49.320244233008005\r
2020-03-21,70.17862503359616\r
2020-03-24,70.17862503359616\r
2020-03-26,71.41232505523185\r
2020-03-28,71.41232505523185\r
2020-03-29,71.41232505523185\r
2020-03-31,71.41232505523185\r
2020-04-03,71.41232505523185\r
2020-04-05,68.95298639220762\r
2020-04-08,75.47710115792044\r
2020-04-10,74.61023364074168\r
2020-04-12,87.08299509100362\r
2020-04-15,83.77422010148359\r
2020-04-25,91.96536130360148\r
2020-04-28,88.58754003939762\r
2020-05-20,93.15874130741106\r
2020-05-22,92.5613317409413\r
2020-05-25,94.87353495696401\r
2020-05-27,94.87353495696401\r
2020-05-28,94.87353495696401\r
2020-05-30,90.439490562885\r
2020-06-12,90.01733451500395\r
2020-06-14,90.01733451500395\r
2020-07-19,81.81205481544917\r
2020-07-21,81.81205481544917\r
2020-07-22,81.81205481544917\r
2020-07-24,82.62750888233369\r
2020-07-27,82.62750888233369\r
2020-07-29,82.62750888233369\r
2020-07-31,82.62750888233369\r
2020-08-03,82.62750888233369\r
2020-08-05,71.56710261042949\r
2020-08-06,71.56710261042949\r
2020-08-08,72.9657326920235\r
2020-08-10,53.14566036321891\r
2020-08-15,53.14566036321891\r
2020-08-20,53.14566036321891\r
2020-08-21,53.14566036321891\r
2020-08-23,53.14566036321891\r
2020-09-02,29.101655600667197\r
2020-09-04,29.101655600667197\r
2020-09-05,29.101655600667197\r
2020-09-07,29.879551377259205\r
2020-09-10,29.879551377259205\r
2020-09-12,29.879551377259205\r
2020-09-14,29.879551377259205\r
2020-09-17,29.879551377259205\r
2020-10-17,23.567772057007467\r
2020-10-24,23.567772057007467\r
2020-10-30,23.567772057007467\r
2020-11-01,23.567772057007467\r
2020-11-11,27.298615698282358\r
2020-11-14,27.298615698282358\r
2020-11-16,27.298615698282358\r
2020-11-18,27.298615698282358\r
2020-11-19,27.298615698282358\r
2020-11-21,29.212313158191694\r
2020-11-23,29.212313158191694\r
2020-11-26,26.22698717944494\r
2020-11-29,27.73174921160538\r
2020-12-26,49.7249843188122\r
2021-02-19,71.25767290706257\r
2021-02-24,75.00379986771001\r
2021-02-27,75.0826060465602\r
2021-03-01,68.11505465499853\r
2021-03-04,74.45302414793117\r
2021-03-09,66.224960387557\r
2021-03-26,75.24031127219217\r
2021-03-28,75.24031127219217\r
2021-03-29,75.24031127219217\r
2021-03-31,77.54091281584378\r
2021-04-02,77.54091281584378\r
2021-04-03,77.54091281584378\r
2021-04-05,76.10990064451299\r
2021-04-07,84.43213524292007\r
2021-04-15,86.16830530963954\r
2021-04-17,85.670908094558\r
2021-04-20,85.670908094558\r
2021-04-22,85.670908094558\r
2021-04-23,85.670908094558\r
2021-06-14,99.38650723470941\r
2021-06-16,99.38650723470941\r
2021-06-19,99.38650723470941\r
2021-06-21,99.38650723470941\r
2021-09-12,52.59264194111596\r
2021-09-17,56.013683026849705\r
2021-09-22,55.59045530960523\r
2021-10-07,56.43811056541118\r
2021-10-10,56.43811056541118\r
2021-10-12,59.009745532328594\r
2021-10-14,59.009745532328594\r
2021-10-17,57.14814988630288\r
2021-10-19,58.72189438556369\r
2021-10-20,58.72189438556369\r
2021-10-27,53.35359981864358\r
2021-12-16,69.25863834798876\r
2021-12-18,69.25863834798876\r
2021-12-19,69.25863834798876\r
2021-12-21,63.538346229238705\r
2021-12-23,65.62434118176725\r
2022-01-15,69.25863834798876\r
2022-01-22,69.25863834798876\r
2022-01-23,69.25863834798876\r
2022-01-25,69.94820266501303\r
2022-01-27,63.538346229238705\r
2022-02-01,63.538346229238705\r
2022-02-09,63.390312768018056\r
2022-03-21,38.01038002286165\r
2022-03-23,38.01038002286165\r
2022-03-24,38.01038002286165\r
2022-03-26,59.8764542223336\r
2022-04-05,73.2779131319417\r
2022-04-10,73.2779131319417\r
2022-04-15,83.6921161562225\r
2022-04-17,83.61004233513236\r
2022-04-25,83.61004233513236\r
2022-06-19,100.0\r
2022-06-22,100.0\r
2022-06-24,100.0\r
2022-06-27,100.0\r
2022-06-29,100.0\r
2022-07-14,86.33434368979431\r
2022-07-16,78.26015291904852\r
2022-07-17,78.26015291904852\r
2022-07-19,78.26015291904852\r
2022-07-21,78.26015291904852\r
2022-07-22,78.26015291904852\r
2022-07-24,79.30343493995495\r
2022-07-26,72.49839767191942\r
2022-07-27,72.49839767191942\r
2022-07-31,72.49839767191942\r
2022-08-01,72.49839767191942\r
2022-08-03,72.49839767191942\r
2022-08-13,34.76498669468194\r
2022-08-15,34.76498669468194\r
2022-08-18,37.401226098950175\r
2022-08-20,37.401226098950175\r
2022-08-23,40.48359459525852\r
2022-08-28,36.01419882777751\r
2022-08-30,32.31643350942863\r
2022-09-04,28.715593106041815\r
2022-09-05,28.715593106041815\r
2022-09-22,15.28298982097889\r
2022-10-02,15.28298982097889\r
2022-11-06,20.57755443122203\r
2022-11-08,20.57755443122203\r
2022-11-11,20.723443159635607\r
2022-11-13,20.723443159635607\r
2022-11-16,19.424397348601662\r
2022-11-24,21.606842390182777\r
2022-12-11,28.16742868505634\r
2022-12-21,34.76498669468194\r
2022-12-28,34.41110648243521\r
2023-02-04,49.185606051479866\r
2023-02-06,49.185606051479866\r
2023-02-09,51.56157799920237\r
2023-02-11,51.56157799920237\r
2023-02-12,51.56157799920237\r
2023-02-14,49.252907929679104\r
2023-02-16,52.11052834550538\r
2023-02-17,52.11052834550538\r
2023-02-19,43.914068507747295\r
2023-02-21,48.84961345272682\r
2023-02-24,48.648431755719784\r
2023-02-26,45.21094770383684\r
2023-03-01,53.90958874326284\r
2023-03-03,55.30897119717778\r
2023-03-04,55.30897119717778\r
2023-03-09,54.11864013496429\r
2023-03-16,53.63132472105203\r
2023-04-05,59.804048005191014\r
2023-04-07,59.804048005191014\r
2023-04-08,59.804048005191014\r
2023-04-15,59.804048005191014\r
2023-06-24,100.0\r
`;export{r as default};
