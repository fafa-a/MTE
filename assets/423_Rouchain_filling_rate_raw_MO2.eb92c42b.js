const n=`date,value\r
2017-03-14,88.92070462325968\r
2017-03-17,90.06117156976016\r
2017-03-27,88.9681261913086\r
2017-04-23,87.36058391267034\r
2017-05-03,87.36058391267034\r
2017-07-17,97.34796857135585\r
2017-08-21,84.08221267467512\r
2017-08-24,84.08221267467512\r
2017-08-26,89.25283452717304\r
2017-08-29,89.25283452717304\r
2017-10-05,72.28225052776101\r
2017-10-10,72.28225052776101\r
2017-10-13,72.28225052776101\r
2017-10-15,73.25726461231203\r
2017-10-18,73.56841887061174\r
2017-10-25,73.56841887061174\r
2017-10-28,71.92879326911103\r
2018-03-14,79.97549437147843\r
2018-03-19,79.97549437147843\r
2018-03-24,79.97549437147843\r
2018-06-02,88.49429428247161\r
2018-06-10,80.02125116759032\r
2018-06-12,80.02125116759032\r
2018-06-22,92.98181981050367\r
2018-06-25,92.98181981050367\r
2018-06-27,94.236206911459\r
2018-07-02,93.22260780251564\r
2018-07-12,95.05944189830538\r
2018-07-15,94.28456564909278\r
2018-07-17,93.17443341022104\r
2018-07-20,95.49624850855552\r
2018-07-22,95.49624850855552\r
2018-07-25,89.72802938005098\r
2018-07-27,97.93520877811541\r
2018-07-30,99.80263907166137\r
2018-08-01,100.0\r
2018-08-04,100.0\r
2018-08-06,100.0\r
2018-08-11,91.11089554372451\r
2018-08-16,93.41538929874864\r
2018-08-19,93.41538929874864\r
2018-08-21,85.15472561857513\r
2018-08-26,88.16311984907675\r
2018-08-29,91.7810338516968\r
2018-09-03,86.9367145890401\r
2018-09-20,76.65918921707673\r
2018-09-25,83.24605709116558\r
2018-09-28,83.24605709116558\r
2018-09-30,83.24605709116558\r
2018-10-05,77.74425304783854\r
2018-10-10,70.95980285158244\r
2018-10-13,70.95980285158244\r
2018-10-15,70.95980285158244\r
2019-03-24,81.30601729748228\r
2019-03-27,79.79255544209914\r
2019-03-29,87.21921692141127\r
2019-04-08,86.27874525406986\r
2019-04-11,89.06299489440244\r
2019-04-13,92.35675441378736\r
2019-05-13,92.11672336029227\r
2019-05-16,93.36718133845639\r
2019-05-23,96.03103928725952\r
2019-05-31,96.66436149389376\r
2019-06-02,98.22927508580815\r
2019-06-05,95.30202889260705\r
2019-06-17,87.03084770052347\r
2019-06-25,87.03084770052347\r
2019-06-27,89.6329223684898\r
2019-06-30,89.6329223684898\r
2019-07-02,86.65452139575265\r
2019-07-05,90.82420060134181\r
2019-07-07,90.58552094266304\r
2019-07-10,90.58552094266304\r
2019-07-12,90.58552094266304\r
2019-07-15,87.59636701669497\r
2019-07-17,90.68096739744706\r
2019-07-20,87.07792713327319\r
2019-07-22,91.73311194350553\r
2019-07-25,91.73311194350553\r
2019-08-04,86.41959678556222\r
2019-08-26,73.30168799584415\r
2019-08-29,73.30168799584415\r
2019-08-31,82.22792223323138\r
2019-09-03,82.22792223323138\r
2019-09-10,82.22792223323138\r
2019-09-13,80.93823757586735\r
2019-09-15,79.7011389535013\r
2019-09-18,74.95171992503167\r
2019-09-20,74.86221277635275\r
2019-10-03,70.4331329592179\r
2020-03-18,85.4352645116666\r
2020-03-21,85.66928442857933\r
2020-03-23,85.66928442857933\r
2020-03-26,85.66928442857933\r
2020-03-28,86.27874525406986\r
2020-03-31,86.98377685194147\r
2020-04-02,85.85665568209232\r
2020-04-05,88.92070462325968\r
2020-04-07,86.3256871581282\r
2020-04-10,86.0910637378241\r
2020-04-12,87.59636701669497\r
2020-04-15,86.9367145890401\r
2020-04-17,86.9367145890401\r
2020-04-22,88.87329157951633\r
2020-04-25,86.88966091333315\r
2020-04-27,89.06299489440244\r
2020-05-17,92.69315147509882\r
2020-05-20,92.69315147509882\r
2020-05-25,94.52648475735378\r
2020-05-27,98.47455729230316\r
2020-05-30,98.47455729230316\r
2020-06-01,98.47455729230316\r
2020-06-26,95.15645168292446\r
2020-06-29,95.15645168292446\r
2020-07-04,94.38130821256787\r
2020-07-06,94.38130821256787\r
2020-07-09,95.69060138028341\r
2020-07-11,94.62331090398528\r
2020-07-31,94.47808421767604\r
2020-08-05,93.84963825353043\r
2020-08-08,93.60830501053148\r
2020-08-10,87.69074023136022\r
2020-08-15,87.69074023136022\r
2020-08-20,82.13557412893934\r
2020-08-25,77.74425304783854\r
2020-09-04,72.32647374161684\r
2020-09-07,77.83490690212804\r
2020-09-09,72.68058753403805\r
2020-09-12,74.63860271251932\r
2020-09-14,71.6199976711277\r
2020-09-17,71.6199976711277\r
2021-03-23,89.58538161524737\r
2021-03-28,92.64506951155455\r
2021-03-31,92.64506951155455\r
2021-04-02,91.54150870787264\r
2021-04-05,100.0\r
2021-04-07,100.0\r
2021-04-12,99.26084478774287\r
2021-04-17,83.19968665764264\r
2021-04-22,89.82317038859281\r
2021-04-27,99.26084478774287\r
2021-05-05,92.88556341213902\r
2021-05-17,88.73110360893506\r
2021-05-25,88.73110360893506\r
2021-05-27,88.73110360893506\r
2021-06-01,90.63323993430558\r
2021-06-11,90.77644773241677\r
2021-06-16,99.70405708137315\r
2021-06-19,99.70405708137315\r
2021-06-26,98.86743752337642\r
2021-07-21,89.6329223684898\r
2021-07-29,89.6329223684898\r
2021-08-10,98.37641966358872\r
2021-08-15,98.37641966358872\r
2021-08-20,95.98238034951608\r
2021-08-28,93.07810981364054\r
2021-09-24,85.4352645116666\r
2021-09-27,85.4352645116666\r
2021-10-02,85.4352645116666\r
2021-10-04,84.9678725757624\r
2021-10-14,78.56141851946788\r
2021-10-17,78.56141851946788\r
2021-10-19,84.4547407565204\r
2021-10-22,84.4547407565204\r
2021-10-24,77.02030575476114\r
2022-03-08,88.02131614068989\r
2022-03-23,88.87329157951633\r
2022-03-26,88.87329157951633\r
2022-03-28,88.87329157951633\r
2022-04-17,91.06309190237404\r
2022-04-22,99.80263907166137\r
2022-04-27,94.18785653842463\r
2022-05-02,100.0\r
2022-05-07,94.91398978184048\r
2022-06-11,91.35004057667072\r
2022-06-16,94.7201704643646\r
2022-06-19,94.7201704643646\r
2022-06-21,91.15870764208073\r
2022-06-29,87.87958940554229\r
2022-07-01,87.69074023136022\r
2022-07-06,82.32030531506742\r
2022-07-11,93.0299606121839\r
2022-07-14,93.0299606121839\r
2022-07-16,87.83236427264104\r
2022-07-19,97.73932976197142\r
2022-07-21,94.09118089174872\r
2022-07-24,93.9945387202616\r
2022-07-26,89.96594562007836\r
2022-08-10,81.3980500258966\r
2022-08-13,81.3980500258966\r
2022-08-25,80.7086608569835\r
2022-08-28,80.7086608569835\r
2022-09-04,81.4901178476233\r
2022-09-19,70.30167228711444\r
2022-09-22,70.30167228711444\r
2022-10-04,63.11581016080926\r
2022-10-09,66.95600185667209\r
2022-10-17,64.30233312954051\r
2022-10-19,64.30233312954051\r
2023-05-27,97.49466698094798\r
2023-06-01,94.67173650815262\r
2023-06-04,94.67173650815262\r
2023-06-06,100.0\r
2023-06-09,97.88622663019538\r
2023-06-14,97.88622663019538\r
2023-06-16,97.88622663019538\r
`;export{n as default};