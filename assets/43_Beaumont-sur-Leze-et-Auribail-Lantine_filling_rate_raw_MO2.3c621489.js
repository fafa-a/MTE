const n=`date,value\r
2017-02-25,20.526580787255654\r
2017-03-17,17.87417465670174\r
2017-03-27,17.87417465670174\r
2017-04-06,30.472961318688096\r
2017-05-16,49.788373496086486\r
2017-05-26,53.76819826914168\r
2017-06-02,51.755173893150506\r
2017-06-05,52.03991012813036\r
2017-06-12,25.020202543328864\r
2017-07-05,60.399877113577574\r
2017-07-07,60.399877113577574\r
2017-08-14,37.51706970588954\r
2017-08-17,37.51706970588954\r
2017-08-19,37.51706970588954\r
2017-08-21,37.51706970588954\r
2017-08-22,37.51706970588954\r
2017-08-24,37.51706970588954\r
2017-08-26,23.935367267420943\r
2017-08-29,28.848605477362078\r
2017-09-03,28.848605477362078\r
2017-09-05,11.42797370215797\r
2017-09-08,12.970287475869585\r
2017-09-23,34.54859964925522\r
2017-09-28,34.54859964925522\r
2017-10-03,34.54859964925522\r
2017-10-08,22.879450480749664\r
2017-10-10,22.879450480749664\r
2017-10-11,22.879450480749664\r
2017-10-13,27.665449141684544\r
2017-10-15,27.665449141684544\r
2017-10-16,27.665449141684544\r
2017-10-18,27.665449141684544\r
2017-10-20,25.759624516382683\r
2017-10-23,25.759624516382683\r
2017-10-28,27.277699913270247\r
2017-10-30,27.277699913270247\r
2017-10-31,27.277699913270247\r
2017-11-02,27.277699913270247\r
2017-11-07,27.471161179206977\r
2017-11-14,23.05343984084543\r
2017-11-15,23.05343984084543\r
2017-11-17,24.293752560950068\r
2017-11-19,22.53385783723722\r
2017-11-22,24.293752560950068\r
2017-11-24,24.293752560950068\r
2017-11-25,24.293752560950068\r
2017-11-27,19.72340627065734\r
2017-11-30,21.183116341364503\r
2017-12-07,33.228118090998535\r
2017-12-09,33.01105513334981\r
2017-12-12,33.01105513334981\r
2017-12-14,33.01105513334981\r
2017-12-15,33.01105513334981\r
2018-02-25,34.99568490711482\r
2018-02-27,34.99568490711482\r
2018-03-02,58.544947882632925\r
2018-03-07,58.544947882632925\r
2018-03-09,57.32770041142579\r
2018-04-21,62.92771088831982\r
2018-04-23,62.92771088831982\r
2018-04-24,62.92771088831982\r
2018-04-26,62.92771088831982\r
2018-05-11,84.6906739101054\r
2018-05-19,84.6906739101054\r
2018-05-21,85.45832769456563\r
2018-06-20,87.39580678028595\r
2018-06-22,87.39580678028595\r
2018-06-23,87.39580678028595\r
2018-06-25,96.23485370044432\r
2018-06-28,96.23485370044432\r
2018-07-02,91.75102496227396\r
2018-07-03,91.75102496227396\r
2018-07-07,63.89183229785957\r
2018-07-08,63.89183229785957\r
2018-07-10,72.62213823599062\r
2018-07-15,65.19113200645774\r
2018-07-18,65.19113200645774\r
2018-07-22,51.188530395684886\r
2018-07-23,51.188530395684886\r
2018-07-25,58.544947882632925\r
2018-07-30,81.28786101953531\r
2018-08-01,81.28786101953531\r
2018-08-02,81.28786101953531\r
2018-08-04,68.17256221881269\r
2018-08-06,84.6906739101054\r
2018-08-11,49.788373496086486\r
2018-08-12,49.788373496086486\r
2018-08-19,66.17599642187155\r
2018-08-21,66.17599642187155\r
2018-08-22,66.17599642187155\r
2018-08-26,66.17599642187155\r
2018-08-27,66.17599642187155\r
2018-09-03,45.991955008308665\r
2018-09-05,45.991955008308665\r
2018-09-08,72.27381748782322\r
2018-09-10,72.27381748782322\r
2018-09-11,72.27381748782322\r
2018-09-23,61.340479401234205\r
2018-09-25,61.340479401234205\r
2018-09-26,61.340479401234205\r
2018-09-28,81.66179245926303\r
2018-09-30,81.66179245926303\r
2018-10-03,60.399877113577574\r
2018-10-05,80.54310640549734\r
2018-10-06,80.54310640549734\r
2018-11-12,47.05810557024247\r
2018-11-15,47.05810557024247\r
2018-11-17,55.53071807025323\r
2018-11-22,55.53071807025323\r
2018-11-24,38.69834848914226\r
2018-11-27,51.188530395684886\r
2018-11-29,50.06652900129033\r
2018-12-05,50.06652900129033\r
2018-12-17,38.69834848914226\r
2018-12-19,38.69834848914226\r
2019-01-11,27.665449141684544\r
2019-01-16,46.52318503042261\r
2019-01-19,46.52318503042261\r
2019-01-23,46.52318503042261\r
2019-01-26,38.22318129585696\r
2019-01-28,42.628305126895256\r
2019-02-03,31.515599391046145\r
2019-02-15,54.05956811822952\r
2019-02-17,54.05956811822952\r
2019-02-18,54.05956811822952\r
2019-02-20,60.399877113577574\r
2019-02-22,60.399877113577574\r
2019-02-23,60.399877113577574\r
2019-02-25,53.18831014615534\r
2019-02-27,53.18831014615534\r
2019-03-07,69.86383290514394\r
2019-03-12,60.71243559968793\r
2019-03-22,55.82781568034566\r
2019-03-24,55.82781568034566\r
2019-03-25,55.82781568034566\r
2019-03-27,69.86383290514394\r
2019-03-29,69.86383290514394\r
2019-03-30,69.86383290514394\r
2019-04-01,63.89183229785957\r
2019-04-08,58.239186805776136\r
2019-04-09,58.239186805776136\r
2019-05-01,59.159374790054045\r
2019-05-06,59.159374790054045\r
2019-05-11,59.159374790054045\r
2019-05-13,59.159374790054045\r
2019-05-14,59.159374790054045\r
2019-05-16,100.0\r
2019-05-23,88.57091263029137\r
2019-05-31,88.57091263029137\r
2019-06-30,75.80270229731451\r
2019-07-03,75.80270229731451\r
2019-07-05,83.92720138470219\r
2019-07-08,83.92720138470219\r
2019-07-10,63.89183229785957\r
2019-07-12,63.89183229785957\r
2019-07-13,63.89183229785957\r
2019-07-15,70.89063775213157\r
2019-07-17,62.92771088831982\r
2019-07-22,91.75102496227396\r
2019-07-23,91.75102496227396\r
2019-07-25,66.83753564064804\r
2019-07-28,97.48020618414971\r
2019-08-02,70.20509560918022\r
2019-08-04,75.80270229731451\r
2019-08-09,67.8373094864676\r
2019-08-14,65.19113200645774\r
2019-08-16,65.19113200645774\r
2019-08-17,65.19113200645774\r
2019-08-21,72.27381748782322\r
2019-08-22,72.27381748782322\r
2019-08-24,57.32770041142579\r
2019-08-26,60.71243559968793\r
2019-08-29,60.71243559968793\r
2019-08-31,59.77768172818878\r
2019-09-03,59.77768172818878\r
2019-09-06,59.77768172818878\r
2019-09-08,59.77768172818878\r
2019-09-13,50.90662097134556\r
2019-09-15,50.90662097134556\r
2019-09-16,50.90662097134556\r
2019-09-20,50.90662097134556\r
2019-09-21,50.90662097134556\r
2019-10-08,39.17706724705194\r
2019-10-11,39.17706724705194\r
2019-10-13,59.77768172818878\r
2019-10-15,59.77768172818878\r
2019-10-25,50.90662097134556\r
2019-11-27,27.085064127173652\r
2019-12-05,27.085064127173652\r
2019-12-10,27.085064127173652\r
2019-12-27,73.32181780960913\r
2019-12-29,73.32181780960913\r
2019-12-30,73.32181780960913\r
2020-01-06,65.84671672672067\r
2020-01-09,65.84671672672067\r
2020-01-11,69.86383290514394\r
2020-01-14,69.86383290514394\r
2020-01-16,60.399877113577574\r
2020-01-19,60.399877113577574\r
2020-01-28,49.234868691914535\r
2020-02-05,47.86742535280623\r
2020-02-07,47.86742535280623\r
2020-02-08,47.86742535280623\r
2020-02-15,47.86742535280623\r
2020-02-18,47.86742535280623\r
2020-02-20,57.93439257293627\r
2020-02-22,53.76819826914168\r
2020-03-21,50.62565165350434\r
2020-03-24,50.62565165350434\r
2020-03-26,50.62565165350434\r
2020-03-28,50.62565165350434\r
2020-03-29,50.62565165350434\r
2020-03-31,50.62565165350434\r
2020-04-03,50.62565165350434\r
2020-04-05,66.50626904960613\r
2020-04-08,55.234577756051515\r
2020-04-10,90.9496388808421\r
2020-04-12,90.9496388808421\r
2020-04-15,64.5395066237182\r
2020-04-25,88.96472351729243\r
2020-04-28,61.340479401234205\r
2020-05-05,66.83753564064804\r
2020-05-07,66.83753564064804\r
2020-05-08,66.83753564064804\r
2020-05-17,66.83753564064804\r
2020-05-18,66.83753564064804\r
2020-05-20,100.0\r
2020-05-22,100.0\r
2020-05-25,100.0\r
2020-05-27,100.0\r
2020-05-28,100.0\r
2020-05-30,92.15331187548986\r
2020-06-12,89.75551455390952\r
2020-06-14,89.75551455390952\r
2020-07-19,79.80248952344743\r
2020-07-21,79.80248952344743\r
2020-07-22,79.80248952344743\r
2020-07-24,85.07397765274773\r
2020-07-27,85.07397765274773\r
2020-07-29,85.07397765274773\r
2020-07-31,85.07397765274773\r
2020-08-03,85.07397765274773\r
2020-08-05,58.544947882632925\r
2020-08-06,58.544947882632925\r
2020-08-08,86.61766544463751\r
2020-08-10,71.23491922888245\r
2020-08-15,71.23491922888245\r
2020-08-20,71.23491922888245\r
2020-08-21,71.23491922888245\r
2020-08-23,71.23491922888245\r
2020-09-02,51.188530395684886\r
2020-09-04,51.188530395684886\r
2020-09-05,51.188530395684886\r
2020-09-07,75.80270229731451\r
2020-09-10,75.80270229731451\r
2020-09-12,43.90376336537864\r
2020-09-14,43.90376336537864\r
2020-09-17,55.234577756051515\r
2020-09-19,48.68509823534944\r
2020-09-29,47.596725431095635\r
2020-09-30,47.596725431095635\r
2020-10-17,38.22318129585696\r
2020-10-24,38.22318129585696\r
2020-10-30,38.22318129585696\r
2020-11-01,60.399877113577574\r
2020-11-08,45.72772118518081\r
2020-11-11,47.326952536067665\r
2020-11-14,47.326952536067665\r
2020-11-16,47.326952536067665\r
2020-11-18,37.98692668278819\r
2020-11-19,37.98692668278819\r
2020-11-21,40.880682832844975\r
2020-11-23,40.880682832844975\r
2020-11-26,34.32635832512779\r
2020-11-29,36.12863416650586\r
2021-02-24,52.325590793322576\r
2021-02-27,52.325590793322576\r
2021-03-01,68.84606601624037\r
2021-03-04,68.84606601624037\r
2021-03-09,45.46440668165026\r
2021-03-31,66.50626904960613\r
2021-04-02,64.86482491507233\r
2021-04-03,64.86482491507233\r
2021-04-05,89.3595905001078\r
2021-04-07,89.3595905001078\r
2021-04-15,90.5505377711211\r
2021-04-17,90.15249665306142\r
2021-04-20,90.15249665306142\r
2021-04-22,90.15249665306142\r
2021-04-23,90.15249665306142\r
2021-05-30,80.17228124504541\r
2021-06-01,80.17228124504541\r
2021-06-09,100.0\r
2021-06-11,88.57091263029137\r
2021-06-14,97.89747521409052\r
2021-06-16,97.89747521409052\r
2021-06-19,97.89747521409052\r
2021-06-21,83.54703063103166\r
2021-09-12,77.96899763534074\r
2021-09-17,77.96899763534074\r
2021-09-22,79.80248952344743\r
2021-09-24,61.655966810631504\r
2021-09-25,61.655966810631504\r
2021-09-27,61.655966810631504\r
2021-09-30,61.655966810631504\r
2021-10-12,78.69930503526965\r
2021-10-14,78.69930503526965\r
2021-10-17,90.15249665306142\r
2021-10-19,90.15249665306142\r
2021-10-20,90.15249665306142\r
2021-10-24,53.477779302671394\r
2021-10-27,56.42488704764287\r
2021-12-16,49.234868691914535\r
2021-12-18,49.234868691914535\r
2021-12-19,49.234868691914535\r
2021-12-21,49.234868691914535\r
2021-12-23,49.234868691914535\r
2022-01-15,75.08878606825436\r
2022-01-22,75.08878606825436\r
2022-01-23,75.08878606825436\r
2022-01-25,78.3336371082538\r
2022-01-27,55.53071807025323\r
2022-02-01,55.53071807025323\r
2022-02-09,60.71243559968793\r
2022-03-21,8.689255975505498\r
2022-03-23,8.689255975505498\r
2022-03-24,8.689255975505498\r
2022-03-26,10.755575455344664\r
2022-04-05,100.0\r
2022-04-10,100.0\r
2022-04-15,100.0\r
2022-05-10,88.57091263029137\r
2022-05-15,88.57091263029137\r
2022-05-17,88.57091263029137\r
2022-07-14,74.73335759658293\r
2022-07-16,74.73335759658293\r
2022-07-17,74.73335759658293\r
2022-07-19,74.73335759658293\r
2022-07-21,74.73335759658293\r
2022-07-22,74.73335759658293\r
2022-07-24,83.16790223471293\r
2022-07-26,80.17228124504541\r
2022-07-27,80.17228124504541\r
2022-07-31,80.17228124504541\r
2022-08-01,80.17228124504541\r
2022-08-03,80.17228124504541\r
2022-08-28,67.50305483075009\r
2022-08-30,67.50305483075009\r
2022-09-04,67.50305483075009\r
2022-09-05,67.50305483075009\r
2022-09-22,34.32635832512779\r
2022-10-02,34.32635832512779\r
2022-10-22,26.134224696363983\r
2022-10-24,26.134224696363983\r
2022-11-01,26.134224696363983\r
2022-11-06,37.751556534436354\r
2022-11-08,37.751556534436354\r
2022-11-11,39.17706724705194\r
2022-11-13,39.17706724705194\r
2022-11-16,33.66482558199865\r
2022-11-24,30.88747394139103\r
2022-12-21,27.277699913270247\r
2022-12-28,27.277699913270247\r
2023-02-04,44.1615852143575\r
2023-02-06,44.1615852143575\r
2023-02-09,64.21517609682857\r
2023-02-11,64.21517609682857\r
2023-02-12,64.21517609682857\r
2023-02-14,53.18831014615534\r
2023-02-16,67.8373094864676\r
2023-02-17,67.8373094864676\r
2023-02-19,43.646853070370305\r
2023-02-21,56.724862931912625\r
2023-02-24,56.724862931912625\r
2023-02-26,38.93726335254633\r
2023-03-01,68.50881405373566\r
2023-03-03,68.50881405373566\r
2023-03-04,68.50881405373566\r
2023-03-09,68.50881405373566\r
2023-03-16,64.86482491507233\r
2023-04-05,65.19113200645774\r
2023-04-07,65.19113200645774\r
2023-04-08,65.19113200645774\r
2023-04-15,65.19113200645774\r
2023-06-24,94.58940860203205\r
2023-07-14,94.18072392511286\r
2023-07-16,94.18072392511286\r
2023-07-17,94.18072392511286\r
2023-07-19,94.18072392511286\r
2023-07-22,94.18072392511286\r
2023-07-29,76.88123994124861\r
2023-07-31,76.52070428039187\r
2023-08-03,76.52070428039187\r
2023-08-05,76.52070428039187\r
2023-08-06,76.52070428039187\r
2023-08-08,89.3595905001078\r
2023-08-10,99.57733456894803\r
2023-08-11,99.57733456894803\r
2023-08-13,99.57733456894803\r
2023-08-15,99.57733456894803\r
2023-08-18,99.57733456894803\r
2023-08-23,82.78981520819411\r
`;export{n as default};
