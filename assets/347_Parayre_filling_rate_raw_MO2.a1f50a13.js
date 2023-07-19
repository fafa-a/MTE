const r=`date,value\r
2017-02-25,45.050660995613214\r
2017-03-17,50.06270159715934\r
2017-03-27,50.06270159715934\r
2017-04-06,62.28980362082708\r
2017-05-06,62.211813842780174\r
2017-05-13,62.211813842780174\r
2017-05-16,62.836741493434765\r
2017-05-26,82.71697996602391\r
2017-06-02,82.71697996602391\r
2017-06-05,88.95096627496413\r
2017-06-12,87.88561473956996\r
2017-07-05,84.45608888974787\r
2017-07-07,84.45608888974787\r
2017-08-14,69.86168782037814\r
2017-08-17,69.86168782037814\r
2017-08-19,69.86168782037814\r
2017-08-21,69.86168782037814\r
2017-08-22,69.86168782037814\r
2017-08-24,69.86168782037814\r
2017-08-26,55.192707071961586\r
2017-08-29,56.91832781406265\r
2017-09-03,56.91832781406265\r
2017-09-05,44.22295822734488\r
2017-09-08,44.22295822734488\r
2017-10-08,42.584625165501166\r
2017-10-10,42.584625165501166\r
2017-10-11,42.584625165501166\r
2017-10-13,43.742753584218605\r
2017-10-15,43.742753584218605\r
2017-10-16,43.742753584218605\r
2017-10-18,41.90874720291728\r
2017-10-20,42.85609297243058\r
2017-10-23,39.64079396922893\r
2017-10-25,38.45907010688673\r
2017-10-26,38.45907010688673\r
2017-10-28,38.328583969815455\r
2017-10-30,39.11395321285649\r
2017-10-31,39.11395321285649\r
2017-11-02,39.11395321285649\r
2017-11-07,39.048281268480665\r
2017-11-14,37.61384265907316\r
2017-11-15,37.61384265907316\r
2017-11-17,38.00308571694891\r
2017-11-19,37.35517024912174\r
2017-11-22,38.133161997116886\r
2017-11-24,38.133161997116886\r
2017-11-25,38.133161997116886\r
2017-11-27,36.45502026507686\r
2017-11-30,37.226081378053635\r
2017-12-07,38.328583969815455\r
2017-12-09,37.03275765873877\r
2017-12-12,37.03275765873877\r
2017-12-14,37.03275765873877\r
2017-12-15,37.03275765873877\r
2018-02-10,76.31526205427875\r
2018-02-12,76.31526205427875\r
2018-02-15,76.31526205427875\r
2018-02-25,93.53133171387157\r
2018-02-27,93.53133171387157\r
2018-03-02,93.53133171387157\r
2018-03-07,93.53133171387157\r
2018-03-22,71.08637127356805\r
2018-04-01,71.08637127356805\r
2018-04-21,91.18563194461096\r
2018-04-23,91.18563194461096\r
2018-04-24,91.18563194461096\r
2018-04-26,91.18563194461096\r
2018-05-06,99.6767334851358\r
2018-05-11,100.0\r
2018-05-19,100.0\r
2018-05-21,100.0\r
2018-06-20,100.0\r
2018-06-22,100.0\r
2018-06-23,100.0\r
2018-06-25,100.0\r
2018-06-28,100.0\r
2018-07-02,98.65789807650185\r
2018-07-03,98.65789807650185\r
2018-07-07,93.25955221283107\r
2018-07-08,93.25955221283107\r
2018-07-10,98.19606995291686\r
2018-07-12,96.08198852907638\r
2018-07-15,96.08198852907638\r
2018-07-18,96.08198852907638\r
2018-07-25,84.36881635586955\r
2018-07-27,84.36881635586955\r
2018-07-30,89.48541772340862\r
2018-08-01,89.48541772340862\r
2018-08-02,89.48541772340862\r
2018-08-04,82.11145348656437\r
2018-08-06,87.17801701530715\r
2018-08-11,77.24223672246396\r
2018-08-12,77.24223672246396\r
2018-08-19,74.39043356377235\r
2018-08-21,74.39043356377235\r
2018-08-22,74.39043356377235\r
2018-08-26,74.39043356377235\r
2018-08-27,74.39043356377235\r
2018-09-03,58.43475549602959\r
2018-09-05,58.43475549602959\r
2018-09-08,66.55451697770724\r
2018-09-10,66.55451697770724\r
2018-09-11,66.55451697770724\r
2018-09-16,65.35942763515395\r
2018-09-18,65.35942763515395\r
2018-09-23,54.52281706465578\r
2018-09-25,54.52281706465578\r
2018-09-26,54.52281706465578\r
2018-09-28,58.206353488971544\r
2018-09-30,58.206353488971544\r
2018-10-03,54.15196267994331\r
2018-10-05,57.069307428089054\r
2018-10-06,57.069307428089054\r
2018-10-23,51.72786492808261\r
2018-10-25,51.72786492808261\r
2018-11-12,51.364162836095694\r
2018-11-15,51.364162836095694\r
2018-11-17,53.04501918274337\r
2018-11-22,53.04501918274337\r
2018-11-24,51.001409250763984\r
2018-11-27,51.50952995024133\r
2018-11-29,49.201930894599535\r
2018-12-05,49.201930894599535\r
2019-01-11,49.55991533113398\r
2019-01-16,53.78204378425452\r
2019-01-19,53.78204378425452\r
2019-01-23,53.78204378425452\r
2019-01-26,49.775165668692814\r
2019-01-28,57.75054124790358\r
2019-02-15,79.27903181569735\r
2019-02-17,79.27903181569735\r
2019-02-18,79.27903181569735\r
2019-02-20,80.39045002301286\r
2019-02-22,80.39045002301286\r
2019-02-23,80.39045002301286\r
2019-02-25,69.37401797061338\r
2019-02-27,69.37401797061338\r
2019-03-07,68.48323755703301\r
2019-03-12,66.87455632711317\r
2019-03-22,56.240749327356454\r
2019-03-24,52.16555700646502\r
2019-03-25,52.16555700646502\r
2019-03-27,55.79069705522139\r
2019-03-29,55.79069705522139\r
2019-03-30,55.79069705522139\r
2019-04-01,55.79069705522139\r
2019-04-08,52.23863802143326\r
2019-04-09,52.23863802143326\r
2019-05-01,51.07388400301029\r
2019-05-06,54.52281706465578\r
2019-05-11,52.604609417287705\r
2019-05-13,52.604609417287705\r
2019-05-14,52.604609417287705\r
2019-05-16,53.56054217924247\r
2019-05-23,56.54152536986993\r
2019-05-31,54.003882769240086\r
2019-07-05,45.60560564658955\r
2019-07-08,45.60560564658955\r
2019-07-10,45.60560564658955\r
2019-07-12,45.60560564658955\r
2019-07-13,45.60560564658955\r
2019-07-15,41.43801241491359\r
2019-07-17,41.43801241491359\r
2019-07-22,43.33269252806318\r
2019-07-23,43.33269252806318\r
2019-07-25,36.39103446092389\r
2019-07-28,39.11395321285649\r
2019-08-02,27.10245989315576\r
2019-08-04,31.7726236702375\r
2019-08-09,30.56448857982727\r
2019-08-14,34.993884810990664\r
2019-08-16,34.993884810990664\r
2019-08-17,34.993884810990664\r
2019-08-21,40.36944081923814\r
2019-08-22,40.36944081923814\r
2019-08-24,39.048281268480665\r
2019-08-26,40.70226159175072\r
2019-08-29,40.70226159175072\r
2019-08-31,40.50244803028196\r
2019-09-03,40.569012202114564\r
2019-09-06,40.569012202114564\r
2019-09-08,40.569012202114564\r
2019-09-11,30.265163878075235\r
2019-09-13,30.985367676962582\r
2019-09-15,30.985367676962582\r
2019-09-16,30.985367676962582\r
2019-09-20,28.31707130917904\r
2019-09-21,28.31707130917904\r
2019-10-08,22.65859284079688\r
2019-10-11,22.65859284079688\r
2019-10-13,25.907625062712896\r
2019-10-15,25.907625062712896\r
2019-10-25,24.29056388630288\r
2019-11-27,28.492188386496075\r
2019-12-05,28.492188386496075\r
2019-12-10,28.492188386496075\r
2019-12-27,64.33016570300859\r
2019-12-29,64.33016570300859\r
2019-12-30,64.33016570300859\r
2020-01-06,66.23504491266576\r
2020-01-09,66.23504491266576\r
2020-01-11,68.48323755703301\r
2020-01-14,68.48323755703301\r
2020-01-16,65.83650366325323\r
2020-01-19,65.83650366325323\r
2020-01-28,62.445891388666496\r
2020-02-05,71.49634333965261\r
2020-02-07,71.49634333965261\r
2020-02-08,71.49634333965261\r
2020-02-15,71.49634333965261\r
2020-02-18,71.49634333965261\r
2020-02-20,74.6404676070223\r
2020-02-22,73.80822660782972\r
2020-03-21,95.07692335750133\r
2020-03-24,95.07692335750133\r
2020-03-26,95.07692335750133\r
2020-03-28,95.07692335750133\r
2020-03-29,95.07692335750133\r
2020-03-31,95.07692335750133\r
2020-04-03,95.07692335750133\r
2020-04-05,97.18286783774596\r
2020-04-08,90.91639190493771\r
2020-04-10,96.44843362672745\r
2020-04-12,96.44843362672745\r
2020-04-15,93.07852817383706\r
2020-04-25,94.53035252137384\r
2020-04-28,95.44194999029885\r
2020-05-05,92.53623579928006\r
2020-05-07,92.53623579928006\r
2020-05-08,92.53623579928006\r
2020-05-17,79.3643225702357\r
2020-05-18,79.3643225702357\r
2020-05-20,90.37879437169832\r
2020-05-22,83.58486418516448\r
2020-05-25,88.50649379687113\r
2020-05-27,88.50649379687113\r
2020-05-28,88.50649379687113\r
2020-05-30,83.3241477547286\r
2020-06-12,83.3241477547286\r
2020-06-14,83.3241477547286\r
2020-07-19,74.557088504439\r
2020-07-21,74.557088504439\r
2020-07-22,74.557088504439\r
2020-07-24,75.30873827616135\r
2020-07-27,75.30873827616135\r
2020-07-29,75.30873827616135\r
2020-07-31,75.30873827616135\r
2020-08-03,65.59780549534344\r
2020-08-05,67.03478851111755\r
2020-08-06,67.03478851111755\r
2020-08-08,65.35942763515395\r
2020-08-10,73.7251921409109\r
2020-08-15,73.7251921409109\r
2020-08-20,67.99915117530392\r
2020-08-21,67.99915117530392\r
2020-08-23,67.99915117530392\r
2020-09-02,31.408368503744335\r
2020-09-04,31.408368503744335\r
2020-09-05,31.408368503744335\r
2020-09-07,31.408368503744335\r
2020-09-10,31.408368503744335\r
2020-09-12,31.408368503744335\r
2020-09-14,31.408368503744335\r
2020-09-17,31.711806806555497\r
2020-09-19,21.173565793434776\r
2020-09-29,21.173565793434776\r
2020-09-30,21.173565793434776\r
2020-10-17,19.420805985813498\r
2020-10-24,19.420805985813498\r
2020-10-30,19.420805985813498\r
2020-11-01,19.420805985813498\r
2020-11-11,19.67504851014839\r
2020-11-14,19.67504851014839\r
2020-11-16,19.67504851014839\r
2020-11-18,19.67504851014839\r
2020-11-19,19.67504851014839\r
2020-11-21,20.135754185574704\r
2020-11-23,20.135754185574704\r
2020-11-26,18.465875538903827\r
2020-11-29,18.915994610014657\r
2021-02-24,100.0\r
2021-02-27,99.49120326361607\r
2021-03-01,98.65789807650185\r
2021-03-04,99.6767334851358\r
2021-03-09,80.39045002301286\r
2021-03-31,64.40912538730707\r
2021-04-02,64.40912538730707\r
2021-04-03,64.40912538730707\r
2021-04-05,68.48323755703301\r
2021-04-07,68.80666578504434\r
2021-04-15,68.07974416067641\r
2021-04-17,67.19516224979067\r
2021-04-20,67.19516224979067\r
2021-04-22,67.19516224979067\r
2021-04-23,67.19516224979067\r
2021-05-20,62.133860151069264\r
2021-05-27,62.133860151069264\r
2021-05-28,62.133860151069264\r
2021-05-30,62.133860151069264\r
2021-06-09,64.25124179049561\r
2021-06-11,64.25124179049561\r
2021-06-14,66.31485970701443\r
2021-06-16,66.31485970701443\r
2021-06-19,66.31485970701443\r
2021-06-21,63.621139655371294\r
2021-09-12,39.9713894998924\r
2021-09-17,39.9713894998924\r
2021-09-22,40.03763021029717\r
2021-09-24,34.17782554937293\r
2021-09-25,34.17782554937293\r
2021-09-27,34.17782554937293\r
2021-09-30,34.17782554937293\r
2021-10-12,35.68993499327136\r
2021-10-14,35.68993499327136\r
2021-10-17,36.263187424534934\r
2021-10-19,36.263187424534934\r
2021-10-20,36.263187424534934\r
2021-10-24,27.852044804829625\r
2021-10-27,30.56448857982727\r
2021-12-16,41.169903626473804\r
2021-12-18,41.169903626473804\r
2021-12-19,41.169903626473804\r
2021-12-21,41.169903626473804\r
2021-12-23,38.65510618159863\r
2022-01-15,87.70851731788059\r
2022-01-22,87.70851731788059\r
2022-01-23,87.70851731788059\r
2022-01-25,87.88561473956996\r
2022-01-27,63.69977697912431\r
2022-02-01,63.69977697912431\r
2022-02-09,52.89806529331167\r
2022-03-21,58.05426906215985\r
2022-03-23,58.05426906215985\r
2022-03-24,58.05426906215985\r
2022-03-26,58.05426906215985\r
2022-04-05,62.133860151069264\r
2022-04-10,63.69977697912431\r
2022-04-15,63.463972646246845\r
2022-07-14,57.069307428089054\r
2022-07-16,57.069307428089054\r
2022-07-17,57.069307428089054\r
2022-07-19,57.069307428089054\r
2022-07-21,57.069307428089054\r
2022-07-22,57.069307428089054\r
2022-07-24,58.51096287941701\r
2022-07-26,53.56054217924247\r
2022-07-27,53.56054217924247\r
2022-07-31,53.56054217924247\r
2022-08-01,53.56054217924247\r
2022-08-03,53.56054217924247\r
2022-08-13,23.414963111805413\r
2022-08-15,23.414963111805413\r
2022-08-18,23.414963111805413\r
2022-08-20,23.414963111805413\r
2022-08-23,23.414963111805413\r
2022-08-28,15.615756515836898\r
2022-08-30,15.615756515836898\r
2022-09-04,15.615756515836898\r
2022-09-05,15.615756515836898\r
2022-09-22,7.389863625947927\r
2022-10-02,7.389863625947927\r
2022-10-22,6.387066090463557\r
2022-10-24,6.387066090463557\r
2022-11-01,6.387066090463557\r
2022-11-06,6.420741411679061\r
2022-11-08,6.420741411679061\r
2022-11-11,6.420741411679061\r
2022-11-13,6.420741411679061\r
2022-11-16,6.219672843953161\r
2022-11-24,5.9552749454991085\r
2022-12-21,7.639930387864887\r
2022-12-28,7.639930387864887\r
2023-02-04,44.01691918783713\r
2023-02-06,44.01691918783713\r
2023-02-09,47.991969838077544\r
2023-02-11,47.991969838077544\r
2023-02-12,47.991969838077544\r
2023-02-14,45.5361004167346\r
2023-02-16,48.9876005477216\r
2023-02-17,48.9876005477216\r
2023-02-19,42.38144263589721\r
2023-02-21,47.074232577978634\r
2023-02-24,47.074232577978634\r
2023-02-26,42.11109121702528\r
2023-03-01,45.5361004167346\r
2023-03-03,45.18916188986803\r
2023-03-04,45.18916188986803\r
2023-03-09,45.18916188986803\r
2023-03-16,44.498229237569035\r
2023-04-05,46.44271675265431\r
2023-04-07,46.44271675265431\r
2023-04-08,46.44271675265431\r
2023-04-15,46.44271675265431\r
2023-06-24,77.58034214097437\r
`;export{r as default};
