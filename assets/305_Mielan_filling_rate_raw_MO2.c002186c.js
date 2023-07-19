const n=`date,value\r
2017-01-26,26.191784509520772\r
2017-01-29,26.191784509520772\r
2017-02-15,36.23109570063704\r
2017-02-18,36.23109570063704\r
2017-02-25,37.817283381995146\r
2017-04-06,56.01185612364834\r
2017-04-09,56.01185612364834\r
2017-05-16,54.65758215457546\r
2017-05-19,54.2768988857787\r
2017-05-26,54.45587742664696\r
2017-06-05,56.21643366085255\r
2017-07-05,50.910900736359764\r
2017-08-14,40.24136437723303\r
2017-08-17,40.24136437723303\r
2017-08-22,40.24136437723303\r
2017-08-24,40.35684979884433\r
2017-08-27,35.450806293047435\r
2017-08-29,35.450806293047435\r
2017-09-01,35.450806293047435\r
2017-09-03,35.450806293047435\r
2017-10-08,28.197560600092658\r
2017-10-11,28.197560600092658\r
2017-10-13,28.975013523570297\r
2017-10-16,28.975013523570297\r
2017-10-18,28.975013523570297\r
2017-10-23,27.526003931051356\r
2017-10-26,26.45596399669275\r
2017-10-28,26.45596399669275\r
2017-10-31,26.45596399669275\r
2017-11-07,23.933324063457782\r
2017-11-15,23.933324063457782\r
2017-11-17,24.469619579846384\r
2017-11-20,23.977787290961793\r
2017-11-22,24.484601917039097\r
2017-11-25,24.484601917039097\r
2017-11-27,24.484601917039097\r
2017-11-30,23.711629890924492\r
2017-12-12,23.125512995943527\r
2017-12-15,23.125512995943527\r
2017-12-20,22.849689430875287\r
2018-02-15,95.40504041167974\r
2018-02-25,96.23783006008601\r
2018-03-02,95.8804749117701\r
2018-03-07,95.8804749117701\r
2018-03-22,99.02998146745242\r
2018-03-30,99.02998146745242\r
2018-04-21,98.1851122484325\r
2018-04-24,98.1851122484325\r
2018-04-26,98.1851122484325\r
2018-05-11,97.52383793444062\r
2018-05-21,97.64390262439592\r
2018-05-24,92.84064704421857\r
2018-06-20,94.69411509794843\r
2018-06-23,94.69411509794843\r
2018-06-25,95.85072546675867\r
2018-07-08,91.52801127511412\r
2018-07-10,91.52801127511412\r
2018-07-15,92.63584244557931\r
2018-07-18,92.63584244557931\r
2018-07-23,92.25609395514006\r
2018-07-25,92.75284581808015\r
2018-07-30,93.45642436628782\r
2018-08-02,93.45642436628782\r
2018-08-04,90.28248900992742\r
2018-08-12,88.10206977645055\r
2018-08-19,81.61169671164855\r
2018-08-22,81.61169671164855\r
2018-08-27,81.61169671164855\r
2018-09-03,74.1891501616917\r
2018-09-08,77.76222164176194\r
2018-09-11,77.76222164176194\r
2018-09-16,74.76566947366199\r
2018-09-18,74.76566947366199\r
2018-09-23,72.21478975507874\r
2018-09-26,72.21478975507874\r
2018-09-28,72.21478975507874\r
2018-10-03,72.62822103991202\r
2018-10-06,67.89530960699913\r
2018-10-13,67.89530960699913\r
2018-10-23,57.084336992469396\r
2018-11-12,55.83032401781889\r
2018-11-15,55.83032401781889\r
2018-11-17,58.282821008795736\r
2018-11-22,58.282821008795736\r
2018-11-27,53.475158911219786\r
2018-12-07,53.80848871930729\r
2018-12-10,52.92192188080848\r
2019-01-11,56.23918763049935\r
2019-01-16,56.80954049799437\r
2019-01-19,56.80954049799437\r
2019-01-24,56.80954049799437\r
2019-01-26,56.78667086387193\r
2019-02-15,87.41908043521813\r
2019-02-18,87.41908043521813\r
2019-02-20,90.0228834220491\r
2019-02-23,90.0228834220491\r
2019-02-25,88.04505199368184\r
2019-02-28,88.04505199368184\r
2019-03-12,88.18763122530311\r
2019-03-22,83.87719844996077\r
2019-03-25,83.87719844996077\r
2019-03-27,89.61979908075715\r
2019-03-30,89.61979908075715\r
2019-04-01,89.61979908075715\r
2019-04-09,89.18893155016066\r
2019-05-01,83.79376495722194\r
2019-05-06,85.02163750096496\r
2019-05-09,85.02163750096496\r
2019-05-11,85.02163750096496\r
2019-05-14,85.02163750096496\r
2019-05-16,84.99363163910715\r
2019-05-29,96.74522661078694\r
2019-05-31,96.74522661078694\r
2019-07-05,85.1897700245553\r
2019-07-08,85.1897700245553\r
2019-07-10,86.71047302757657\r
2019-07-13,86.71047302757657\r
2019-07-15,87.53272653142949\r
2019-07-20,86.96523787732676\r
2019-07-23,89.41859773166443\r
2019-07-25,85.35806943921177\r
2019-07-28,86.23027514350198\r
2019-08-02,79.43148523837054\r
2019-08-04,77.78900391234765\r
2019-08-09,76.53524620357264\r
2019-08-14,74.60821455799234\r
2019-08-17,74.60821455799234\r
2019-08-22,77.33433550358339\r
2019-08-24,71.93124361901444\r
2019-08-29,66.67513093372288\r
2019-09-03,67.27138031108417\r
2019-09-06,67.27138031108417\r
2019-09-08,67.27138031108417\r
2019-09-11,64.63366202472687\r
2019-09-13,65.00024094401515\r
2019-09-16,51.323013178248814\r
2019-09-18,51.323013178248814\r
2019-09-21,51.323013178248814\r
2019-09-26,51.323013178248814\r
2019-10-08,45.82843404619604\r
2019-10-11,45.82843404619604\r
2019-10-13,47.757902691557696\r
2019-10-26,43.77826954624396\r
2019-12-17,85.89211862134391\r
2019-12-20,85.89211862134391\r
2019-12-25,83.90501888521977\r
2019-12-27,83.90501888521977\r
2019-12-30,83.90501888521977\r
2020-01-11,91.93538048214552\r
2020-01-14,91.93538048214552\r
2020-01-16,93.7209550537085\r
2020-01-19,93.7209550537085\r
2020-01-29,91.76068237815014\r
2020-01-31,91.76068237815014\r
2020-02-05,91.03457064281505\r
2020-02-10,91.03457064281505\r
2020-02-15,91.2666110518619\r
2020-02-18,91.2666110518619\r
2020-02-20,86.28669946944571\r
2020-02-23,86.45608371517758\r
2020-03-21,98.42613232089965\r
2020-03-24,98.42613232089965\r
2020-03-26,94.9603990028983\r
2020-03-31,95.37536518236149\r
2020-04-03,95.37536518236149\r
2020-04-05,86.54083842660405\r
2020-04-08,86.99356826440638\r
2020-04-10,85.6108314854644\r
2020-04-15,87.58957739836976\r
2020-04-25,87.7317857044597\r
2020-05-05,93.89751755610622\r
2020-05-08,93.89751755610622\r
2020-05-18,93.89751755610622\r
2020-05-20,96.32727321575172\r
2020-05-25,98.39598857494391\r
2020-05-28,98.39598857494391\r
2020-05-30,93.3096252022261\r
2020-06-12,93.60333947936215\r
2020-06-14,93.60333947936215\r
2020-06-24,90.57138019525013\r
2020-07-04,90.57138019525013\r
2020-07-07,88.61606442074871\r
2020-07-09,92.1102455393373\r
2020-07-19,91.20857312520381\r
2020-07-22,91.23758976982475\r
2020-07-24,87.47589421039856\r
2020-07-27,88.24469537442332\r
2020-07-29,88.24469537442332\r
2020-08-03,88.24469537442332\r
2020-08-06,80.51788330634358\r
2020-08-08,84.37867552513359\r
2020-08-18,79.24212792922172\r
2020-08-21,79.24212792922172\r
2020-08-23,79.24212792922172\r
2020-08-31,69.22761158875772\r
2020-09-02,69.55638936431471\r
2020-09-05,60.12753905791241\r
2020-09-07,60.12753905791241\r
2020-09-10,60.12753905791241\r
2020-09-12,60.41027616350478\r
2020-09-17,60.41027616350478\r
2020-11-11,53.0323380273936\r
2020-11-14,53.0323380273936\r
2020-11-21,55.9210530600033\r
2020-11-26,53.364280243291\r
2020-11-29,55.694369243496475\r
2020-12-26,90.57138019525013\r
2021-02-14,100.0\r
2021-02-17,100.0\r
2021-02-19,100.0\r
2021-02-24,100.0\r
2021-02-27,100.0\r
2021-03-01,94.72368364536992\r
2021-03-04,100.0\r
2021-03-09,93.25093800212552\r
2021-03-31,98.69763479637987\r
2021-04-03,98.69763479637987\r
2021-04-05,99.24176707720353\r
2021-04-08,99.24176707720353\r
2021-04-15,97.52383793444062\r
2021-04-20,97.37386144777193\r
2021-04-23,97.37386144777193\r
2021-05-20,86.23027514350198\r
2021-05-28,86.23027514350198\r
2021-05-30,86.31491858664285\r
2021-06-09,86.23027514350198\r
2021-06-14,91.35370272254268\r
2021-06-22,91.2956369713225\r
2021-06-29,48.030798272721086\r
2021-07-02,50.88925685062251\r
2021-07-09,51.889661808456765\r
2021-09-12,80.38167803164497\r
2021-09-17,80.6542044456922\r
2021-09-22,79.83801556017586\r
2021-09-25,76.26980980159108\r
2021-09-27,76.26980980159108\r
2021-10-07,76.9875514651213\r
2021-10-12,78.19129403216198\r
2021-10-15,78.19129403216198\r
2021-10-17,76.61496747584691\r
2021-10-20,78.0570814787959\r
2021-10-27,74.60821455799234\r
2021-12-16,92.81137533103787\r
2021-12-19,92.81137533103787\r
2021-12-21,92.81137533103787\r
2022-01-15,86.82365548673174\r
2022-01-23,86.82365548673174\r
2022-01-25,90.4846641488552\r
2022-02-09,90.08054109271424\r
2022-03-01,100.0\r
2022-03-09,100.0\r
2022-03-21,99.2720407215409\r
2022-03-24,99.2720407215409\r
2022-03-26,99.7267021098622\r
2022-04-05,96.05906899143781\r
2022-04-10,95.55348613483197\r
2022-07-14,88.41599910187723\r
2022-07-17,88.41599910187723\r
2022-07-24,88.41599910187723\r
2022-08-28,42.12876588565459\r
2022-09-05,42.12876588565459\r
2022-09-22,28.76340429766303\r
2022-10-02,28.76340429766303\r
2022-10-05,23.652686512650767\r
2022-10-07,24.30511797606077\r
2022-10-12,24.30511797606077\r
2022-11-06,17.026848446477377\r
2022-11-11,17.039335548853103\r
2022-11-16,15.84949966508679\r
2022-12-21,25.97522513839059\r
2022-12-24,25.97522513839059\r
2023-01-10,33.89818403409031\r
2023-01-18,33.89818403409031\r
2023-01-20,37.14914249088063\r
2023-02-04,72.55061234608547\r
2023-02-09,74.13685050202271\r
2023-02-12,74.13685050202271\r
2023-02-14,71.69966820941247\r
2023-02-17,73.06879112751538\r
2023-02-19,73.06879112751538\r
2023-02-24,72.29221779358937\r
2023-03-01,69.00045469232815\r
2023-03-16,75.13371288703728\r
2023-04-05,77.0675090467264\r
2023-04-08,77.0675090467264\r
2023-04-10,77.49465379349557\r
2023-06-24,87.22037826980953\r
2023-06-27,87.22037826980953\r
`;export{n as default};
