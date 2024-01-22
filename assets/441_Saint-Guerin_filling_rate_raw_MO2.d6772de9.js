const n=`date,value\r
2017-04-20,31.293730126419728\r
2017-04-30,36.90507979011751\r
2017-05-10,60.77356506583074\r
2017-05-17,60.69927655039331\r
2017-05-30,82.98433095141046\r
2017-06-06,82.98433095141046\r
2017-06-09,82.98433095141046\r
2017-06-19,95.97612576413952\r
2017-06-26,95.97612576413952\r
2017-07-04,95.42706004166341\r
2017-07-06,95.42706004166341\r
2017-07-14,95.42706004166341\r
2017-08-13,95.33568954310306\r
2017-08-15,95.33568954310306\r
2017-08-18,95.93031511791952\r
2017-08-20,95.93031511791952\r
2017-08-23,95.38136977526437\r
2017-09-22,90.95246269663943\r
2017-09-24,90.95246269663943\r
2017-09-27,95.01620891010995\r
2017-09-29,95.01620891010995\r
2017-10-02,95.01620891010995\r
2017-10-07,83.0271956210637\r
2018-04-25,11.232410776216422\r
2018-04-27,11.18107221783708\r
2018-04-30,11.18107221783708\r
2018-05-05,39.73140230514121\r
2018-05-07,39.639724666976726\r
2018-05-12,39.639724666976726\r
2018-05-15,39.639724666976726\r
2018-06-19,100.0\r
2018-06-21,100.0\r
2018-06-24,100.0\r
2018-06-26,100.0\r
2018-06-29,100.0\r
2018-07-29,93.06448042508903\r
2018-07-31,93.06448042508903\r
2018-08-03,96.9404654396811\r
2018-08-05,96.9404654396811\r
2018-08-08,95.10743890981014\r
2018-08-10,99.02178377151446\r
2018-08-15,96.71045978759824\r
2018-08-18,96.71045978759824\r
2018-08-28,88.3327125792305\r
2018-08-30,88.3327125792305\r
2018-09-02,92.97415456997463\r
2018-09-04,92.97415456997463\r
2018-09-07,92.97415456997463\r
2018-09-17,89.43848936294584\r
2018-09-19,89.43848936294584\r
2018-09-22,89.43848936294584\r
2018-09-24,84.10211007133897\r
2018-09-27,91.98322553413769\r
2018-09-29,88.3327125792305\r
2018-10-02,98.32575853138266\r
2018-10-04,98.32575853138266\r
2018-10-07,98.32575853138266\r
2019-04-17,2.144116004567271\r
2019-04-20,2.0254209117831454\r
2019-04-27,14.106675044164394\r
2019-04-30,13.728677982453306\r
2019-05-02,17.63468928919146\r
2019-05-05,17.63468928919146\r
2019-05-07,17.340879370348404\r
2019-05-10,23.259311579089267\r
2019-05-12,23.259311579089267\r
2019-05-15,52.22697317924771\r
2019-05-30,54.78523547729729\r
2019-06-04,64.35018735098993\r
2019-06-14,64.35018735098993\r
2019-06-29,92.38801706962268\r
2019-07-01,92.38801706962268\r
2019-07-04,91.31038472347423\r
2019-07-06,92.70341835003296\r
2019-07-09,92.70341835003296\r
2019-07-14,92.7936235292067\r
2019-07-16,92.97415456997463\r
2019-07-19,92.61325340265589\r
2019-07-21,93.10965843491235\r
2019-07-24,91.44477165934848\r
2019-07-26,91.44477165934848\r
2019-07-29,91.44477165934848\r
2019-07-31,91.98322553413769\r
2019-08-03,91.53441329736887\r
2019-08-05,90.41678858504937\r
2019-08-08,90.41678858504937\r
2019-09-12,85.13999002813621\r
2019-09-14,85.13999002813621\r
2019-09-17,89.92702893254993\r
2019-09-19,89.92702893254993\r
2019-09-22,89.92702893254993\r
2019-09-27,87.76020251739601\r
2019-09-29,88.3327125792305\r
2019-10-02,88.3327125792305\r
2019-10-04,85.44380429146085\r
2019-10-07,85.44380429146085\r
2020-04-11,2.233125190072801\r
2020-04-14,2.128111013481477\r
2020-04-16,2.128111013481477\r
2020-04-24,26.641638381322263\r
2020-04-29,26.59075005040424\r
2020-05-04,70.38639622295717\r
2020-05-06,70.38639622295717\r
2020-05-09,71.86391666393432\r
2020-05-14,71.86391666393432\r
2020-05-19,70.30693135138569\r
2020-05-21,77.831134754132\r
2020-05-24,77.49851788762841\r
2020-05-26,84.92328370591945\r
2020-05-29,84.92328370591945\r
2020-05-31,84.92328370591945\r
2020-06-03,84.92328370591945\r
2020-06-05,84.4474214257498\r
2020-07-08,91.71381739254302\r
2020-07-10,91.71381739254302\r
2020-07-13,91.71381739254302\r
2020-07-18,91.71381739254302\r
2020-07-20,91.71381739254302\r
2020-07-23,93.24525278859382\r
2020-08-07,93.24525278859382\r
2020-08-09,90.2830968021626\r
2020-08-12,90.2830968021626\r
2020-08-14,90.2830968021626\r
2020-08-19,90.2830968021626\r
2020-08-22,90.2830968021626\r
2020-08-27,86.97031541517339\r
2020-09-01,86.97031541517339\r
2020-09-03,86.97031541517339\r
2020-09-06,86.97031541517339\r
2020-09-08,86.97031541517339\r
2020-09-11,86.97031541517339\r
2021-04-09,8.434398192766347\r
2021-04-14,12.804329288761899\r
2021-04-16,12.804329288761899\r
2021-04-19,12.659178511585653\r
2021-04-24,13.152100930866006\r
2021-05-09,58.23471732986909\r
2021-05-14,58.23471732986909\r
2021-05-19,58.23471732986909\r
2021-07-18,97.5858138698132\r
2021-07-20,97.5858138698132\r
2021-07-23,98.0017173643936\r
2021-08-12,96.0219464394289\r
2021-08-14,96.0219464394289\r
2021-08-17,96.0219464394289\r
2021-08-19,96.0219464394289\r
2021-08-27,93.42618600157635\r
2021-08-29,93.42618600157635\r
2021-09-01,94.56066122123785\r
2021-09-06,93.20004461706898\r
2021-09-11,93.56199145323693\r
2021-09-13,95.24435918308728\r
2021-09-18,93.8792225809938\r
2021-09-21,94.01532949837603\r
2021-10-01,90.59518539671004\r
2022-04-14,12.58688777758708\r
2022-04-16,12.58688777758708\r
2022-04-19,26.71805452307044\r
2022-04-29,26.53990633859778\r
2022-05-14,59.40597646007739\r
2022-05-19,59.40597646007739\r
2022-05-21,55.35343853078706\r
2022-06-18,97.3089955421944\r
2022-06-20,97.3089955421944\r
2022-06-23,97.3089955421944\r
2022-06-25,97.3089955421944\r
2022-07-08,99.72005971761725\r
2022-07-10,99.72005971761725\r
2022-07-13,100.0\r
2022-07-15,100.0\r
2022-07-18,99.2542924066053\r
2022-07-20,100.0\r
2022-07-25,98.46478345983691\r
2022-07-28,99.76669144032823\r
2022-07-30,91.48958744388756\r
2022-08-02,100.0\r
2022-08-04,100.0\r
2022-08-07,100.0\r
2022-08-09,99.06826549381755\r
2022-08-12,99.44047933845617\r
2022-08-22,96.52663567281033\r
2022-09-01,74.5751995275894\r
2022-09-06,91.2208437851023\r
2022-09-08,92.0281621190323\r
2022-09-11,91.57924921938367\r
2022-09-13,96.3429719470867\r
2022-09-16,96.3429719470867\r
2022-09-18,95.88451450116575\r
2022-09-21,95.88451450116575\r
2022-09-23,90.41678858504937\r
2022-09-26,90.41678858504937\r
2022-10-01,90.41678858504937\r
2023-04-09,4.63616964514567\r
2023-04-14,9.78753935650045\r
2023-04-16,9.78753935650045\r
2023-04-19,9.771462800309735\r
2023-04-24,12.858956414670125\r
2023-05-04,45.57177781674596\r
2023-05-06,45.57177781674596\r
2023-05-11,45.57177781674596\r
2023-06-28,100.0\r
2023-07-03,97.21680290302226\r
2023-07-08,98.69669182498993\r
2023-07-10,98.69669182498993\r
2023-07-13,98.69669182498993\r
2023-08-22,96.2512002380351\r
2023-08-24,96.2512002380351\r
2023-08-27,96.2512002380351\r
2023-08-29,96.2512002380351\r
2023-09-01,97.17072161083775\r
2023-09-03,92.38801706962268\r
2023-09-06,94.97060896620255\r
2023-09-08,94.97060896620255\r
2023-09-11,91.39996594416053\r
2023-09-26,91.62409520952328\r
2023-09-28,91.62409520952328\r
2023-10-01,92.65833084716711\r
2023-10-03,92.65833084716711\r
2023-10-06,88.24452300399489\r
`;export{n as default};