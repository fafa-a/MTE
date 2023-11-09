const r=`date,value\r
2017-02-25,45.3703048045313\r
2017-03-17,50.49546089228561\r
2017-04-06,62.82825821174015\r
2017-05-06,62.74959426309722\r
2017-05-16,57.41034951162873\r
2017-05-26,83.43201412924414\r
2017-06-05,88.64532836814072\r
2017-07-05,85.18615651157036\r
2017-08-14,70.465596395284\r
2017-08-24,55.6698119074291\r
2017-08-29,44.60523676246792\r
2017-10-08,42.95274138340187\r
2017-10-13,43.0895683034833\r
2017-10-18,38.06969311887649\r
2017-10-28,39.05524697139575\r
2017-11-07,37.9389897150014\r
2017-11-17,37.67808125133678\r
2017-11-22,37.15826190875938\r
2017-11-27,35.87042298873211\r
2017-12-07,37.35288161509126\r
2018-02-10,76.97495755532735\r
2018-02-25,94.33984887122394\r
2018-03-22,71.70086643551468\r
2018-04-21,91.97387206244412\r
2018-05-06,100.0\r
2018-05-11,100.0\r
2018-06-20,100.0\r
2018-06-25,98.30127840828952\r
2018-07-10,96.91255444548972\r
2018-07-25,85.09812956374635\r
2018-07-30,87.75351838533079\r
2018-08-04,77.90994531292256\r
2018-08-19,75.03349018209559\r
2018-09-03,58.93988571858178\r
2018-09-08,65.92441711696108\r
2018-09-23,54.99413113937477\r
2018-09-28,56.34853468774755\r
2018-10-03,54.097972297724226\r
2018-10-23,52.17501847055011\r
2018-11-12,51.808172411978425\r
2018-11-17,51.442283059281316\r
2018-11-27,49.62724939027587\r
2019-01-11,49.988328368005234\r
2019-01-16,51.515384308334546\r
2019-02-15,79.96434716689286\r
2019-02-20,66.16485559776149\r
2019-02-25,67.45264310498781\r
2019-03-22,52.616494110531875\r
2019-03-27,52.690206863051536\r
2019-05-01,51.515384308334546\r
2019-05-06,53.20726214214528\r
2019-05-16,54.470710996556996\r
2019-07-05,45.999836263870975\r
2019-07-10,40.050071525886715\r
2019-07-15,39.319629584057864\r
2019-07-25,27.336742923542907\r
2019-08-04,31.43580746654549\r
2019-08-09,34.97895335482746\r
2019-08-14,38.98925427929395\r
2019-08-24,40.852565189390035\r
2019-09-03,30.526786414792262\r
2019-09-13,28.56185386043663\r
2019-10-08,22.854461548507462\r
2019-10-13,24.500539915767742\r
2019-11-27,28.738484710293434\r
2019-12-27,64.88625788894385\r
2020-01-06,66.80760353284792\r
2020-01-11,66.08467352492463\r
2020-01-16,62.98569525619136\r
2020-02-05,72.1143824418318\r
2020-02-20,74.44625042800517\r
2020-03-21,95.89880114320397\r
2020-04-05,91.70230461881401\r
2020-04-10,96.63568596053341\r
2020-04-15,93.33615100362464\r
2020-05-05,80.05037520419137\r
2020-05-20,84.3074006395305\r
2020-05-25,81.60471079689671\r
2020-05-30,84.04443048616189\r
2020-07-19,75.20158574566813\r
2020-07-24,64.64754770404572\r
2020-08-08,68.58695933972542\r
2020-09-02,31.679873296356593\r
2020-09-17,21.356597414097376\r
2020-10-17,19.588686144915442\r
2020-11-11,19.845126429501224\r
2020-11-21,19.028866220549176\r
2020-11-26,17.190263962178864\r
2021-02-24,100.0\r
2021-03-01,81.08537285731742\r
2021-03-31,64.09182186885698\r
2021-04-05,68.09996856389338\r
2021-04-15,67.77602045606783\r
2021-05-20,62.67096671273303\r
2021-06-09,64.80665173085367\r
2021-06-14,64.17110277509933\r
2021-09-12,40.31691600552093\r
2021-09-22,34.47327048585902\r
2021-10-12,35.99845112640122\r
2021-10-17,28.092807506262552\r
2021-10-27,30.58708105063652\r
2021-12-16,38.98925427929395\r
2022-01-15,88.46670005513039\r
2022-01-25,64.25041986705726\r
2022-02-09,53.35533445217734\r
2022-03-21,58.55611022847508\r
2022-04-05,62.67096671273303\r
2022-07-14,57.56263424561992\r
2022-07-24,54.02353801727339\r
2022-08-13,23.617370145553007\r
2022-08-28,15.750744512230607\r
2022-09-22,7.45374416119307\r
2022-10-22,6.442278097228103\r
2022-11-06,6.476244519558957\r
2022-11-11,5.679456103083813\r
2022-11-16,6.006754400372224\r
2022-12-21,7.705972586627363\r
2023-02-04,44.397416650292065\r
2023-02-09,40.7184082180444\r
2023-02-14,46.985458988440534\r
2023-02-19,42.47511404381398\r
2023-03-01,45.57979262338631\r
2023-03-16,44.88288731044278\r
2023-04-05,46.844183647656386\r
2023-06-24,78.25097343152554\r
2023-07-14,62.356820732953125\r
2023-08-08,46.56210456273529\r
2023-08-18,38.135107048447225\r
2023-08-23,31.253215904231862\r
2023-09-07,24.77897944044802\r
2023-09-27,15.421582508499961\r
2023-10-02,13.501183938253858\r
2023-10-07,13.057962158691325\r
2023-10-12,11.803825601196365\r
2023-11-06,17.434680087276874\r
`;export{r as default};
