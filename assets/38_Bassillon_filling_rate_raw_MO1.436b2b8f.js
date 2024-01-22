const n=`date,value\r
2017-01-26,33.35887919691038\r
2017-02-15,51.7540012153315\r
2017-02-18,51.012257389198915\r
2017-02-25,53.17879243213224\r
2017-03-10,57.02533269562024\r
2017-03-30,59.081262083534234\r
2017-04-06,71.20567492332863\r
2017-04-09,71.33776261510599\r
2017-04-19,70.06629070471962\r
2017-05-09,74.00649067859936\r
2017-05-16,77.69089052963099\r
2017-05-26,76.6351588206638\r
2017-06-18,77.78305130012855\r
2017-07-05,73.33448953158704\r
2017-07-18,72.08868474660942\r
2017-08-02,61.5009805041808\r
2017-08-12,54.85391844124613\r
2017-08-14,60.24443352113333\r
2017-08-22,45.83715277423903\r
2017-08-24,50.459633265643276\r
2017-10-08,40.524631634376334\r
2017-10-11,38.45726566151605\r
2017-10-13,38.7765509745252\r
2017-10-16,36.663750860432344\r
2017-10-23,38.17109225250314\r
2017-10-26,35.67653498344829\r
2017-10-31,37.00637101485371\r
2017-11-07,37.886039509925915\r
2017-11-17,37.25659916694278\r
2017-11-20,33.29976734515006\r
2017-11-22,36.975154667016994\r
2017-12-05,33.47726784206745\r
2017-12-12,38.075950173356546\r
2017-12-25,41.48010972581765\r
2018-01-11,74.27619129743746\r
2018-02-15,99.66689466911224\r
2018-02-25,100.0\r
2018-03-02,95.9248797686188\r
2018-03-15,99.98211997734879\r
2018-03-30,93.62422557900801\r
2018-04-19,92.05635981246463\r
2018-04-21,100.0\r
2018-05-06,87.73031645625426\r
2018-05-11,99.61440786480757\r
2018-05-21,94.94991998430396\r
2018-06-20,95.87343587499161\r
2018-06-23,89.35837745192543\r
2018-06-25,86.70244820508104\r
2018-07-08,80.9035682914267\r
2018-07-13,86.84889763280498\r
2018-07-23,85.00344494959016\r
2018-07-25,85.87501585475084\r
2018-08-02,75.45084064555111\r
2018-08-04,70.67860767917897\r
2018-08-12,62.64762283187339\r
2018-08-19,58.00899442777211\r
2018-08-22,53.784777325291586\r
2018-08-27,44.86454455545959\r
2018-09-01,41.215363229732645\r
2018-09-03,39.87248118183458\r
2018-09-08,43.39217902762668\r
2018-09-11,41.38072561759591\r
2018-09-16,37.44485066448087\r
2018-09-23,37.476274289276965\r
2018-09-26,36.63268643441626\r
2018-10-03,36.81928012528442\r
2018-10-06,37.539163008424254\r
2018-11-15,34.162272195569415\r
2018-12-07,32.24514997594705\r
2018-12-20,39.35475410719565\r
2019-01-16,38.13936439147986\r
2019-02-03,71.6023231368192\r
2019-02-13,59.72154124624568\r
2019-02-15,70.45960231347075\r
2019-02-20,72.13298505725608\r
2019-02-23,70.85406860395781\r
2019-02-25,68.6771961902462\r
2019-02-28,74.05140505546015\r
2019-03-12,67.73065166097336\r
2019-03-20,68.7203846379006\r
2019-03-22,65.98500856528351\r
2019-03-25,74.90749378739898\r
2019-03-27,70.32837016146934\r
2019-03-30,63.93008208360001\r
2019-05-01,71.16167421862404\r
2019-05-06,74.77197880540338\r
2019-05-14,80.24619955396122\r
2019-06-08,86.0693315141925\r
2019-06-13,77.73696375295656\r
2019-06-18,83.94452141168142\r
2019-06-23,82.65444378897395\r
2019-06-28,88.17277636919003\r
2019-07-05,74.95269404342852\r
2019-07-15,77.46073925619746\r
2019-07-25,56.12815222946851\r
2019-08-14,49.87364570232823\r
2019-08-17,47.423206337207915\r
2019-08-22,48.280676219748784\r
2019-08-24,51.530888467130595\r
2019-09-11,46.11705049986913\r
2019-09-13,47.743813335611065\r
2019-09-16,42.98588244746436\r
2019-10-08,43.73229091225149\r
2019-10-11,40.590151875551655\r
2019-10-13,44.451059897690385\r
2019-12-05,90.05381386334773\r
2019-12-10,86.89774291119346\r
2019-12-15,76.6809027100661\r
2019-12-25,80.99770771333652\r
2019-12-30,81.280470454158\r
2020-01-09,93.5734325096745\r
2020-01-11,92.40918044101379\r
2020-01-16,93.42114002409045\r
2020-01-19,89.95429270568025\r
2020-01-29,85.82647292484144\r
2020-02-05,91.00214348377492\r
2020-02-15,84.23262843474177\r
2020-02-20,86.31254998280427\r
2020-02-23,88.02516003646164\r
2020-03-11,97.11208422178194\r
2020-03-21,97.06030738799099\r
2020-03-24,89.40795772869927\r
2020-03-26,86.45865382662862\r
2020-04-03,96.59496743011739\r
2020-04-05,85.58397416514894\r
2020-04-08,89.80511916475021\r
2020-04-10,89.259260162575\r
2020-04-15,93.21828571465613\r
2020-05-18,89.16020055621833\r
2020-05-20,90.45247560448531\r
2020-05-28,92.8638470338264\r
2020-05-30,91.40299892319354\r
2020-06-24,85.34183518545292\r
2020-07-07,95.97633813374729\r
2020-07-09,85.24508032083779\r
2020-07-19,74.45627754557822\r
2020-07-22,72.13298505725608\r
2020-07-24,63.47345592747846\r
2020-07-27,61.82745927294155\r
2020-08-06,46.152100546372864\r
2020-08-08,49.291246503633815\r
2020-08-21,36.539576000001496\r
2020-08-31,33.86355019158244\r
2020-09-02,33.8039708674029\r
2020-09-05,34.79406821389796\r
2020-09-10,33.447650061588504\r
2020-09-12,33.2702320348941\r
2020-09-17,32.332355131426354\r
2020-09-30,30.526959650590946\r
2020-10-30,43.256524124665304\r
2020-11-09,45.907043438500615\r
2020-11-11,46.39784189638749\r
2020-11-14,43.69821705883587\r
2020-11-21,48.24478741566\r
2020-11-26,47.31658904376089\r
2020-11-29,45.03742243430213\r
2020-12-26,80.24619955396122\r
2021-01-03,96.59496743011739\r
2021-02-14,100.0\r
2021-02-19,95.15474065962714\r
2021-02-24,100.0\r
2021-02-27,100.0\r
2021-03-01,99.82444207476601\r
2021-03-04,97.83848048576967\r
2021-03-21,100.0\r
2021-03-24,89.11069238318629\r
2021-03-29,91.70424686496831\r
2021-03-31,96.23384704515777\r
2021-04-05,90.80206220105143\r
2021-04-08,95.10351379302865\r
2021-04-15,99.45703443941773\r
2021-04-23,96.28539224724186\r
2021-05-03,86.26387749636217\r
2021-05-20,80.76246679583521\r
2021-05-30,83.99250330245096\r
2021-06-07,83.13102871825662\r
2021-06-09,81.61101347830501\r
2021-06-14,91.5033571498494\r
2021-07-02,84.52125313891442\r
2021-07-17,85.1483830098823\r
2021-07-22,77.73696375295656\r
2021-08-11,67.77352698416331\r
2021-08-26,55.81783791383271\r
2021-08-28,51.16015698783157\r
2021-09-05,43.42612755750016\r
2021-09-12,44.14226364858844\r
2021-09-17,40.885679931603754\r
2021-10-07,42.246209224984824\r
2021-10-12,40.81990987141374\r
2021-10-20,38.075950173356546\r
2021-10-27,38.90465275689519\r
2021-11-19,38.968786735308264\r
2021-12-14,83.75273762087346\r
2021-12-16,83.32206504980199\r
2021-12-19,84.08851021847687\r
2022-01-13,77.92139988886402\r
2022-01-15,83.70482761423389\r
2022-01-23,96.07929828002261\r
2022-01-25,88.76453889821742\r
2022-02-09,91.05219988938347\r
2022-02-22,100.0\r
2022-03-09,92.3587341616589\r
2022-03-21,97.78650089511488\r
2022-03-24,96.74995044807763\r
2022-03-26,88.17277636919003\r
2022-04-05,90.95210151252476\r
2022-05-08,89.75542350170204\r
2022-05-10,95.052301391862\r
2022-05-15,77.50674086650665\r
2022-06-17,82.94022231950338\r
2022-07-12,85.82647292484144\r
2022-07-14,83.94452141168142\r
2022-07-17,79.3119787397431\r
2022-08-01,58.96161259924647\r
2022-08-03,53.67088087672302\r
2022-08-11,40.39375765760028\r
2022-08-28,26.999505941809005\r
2022-09-05,19.02462867095721\r
2022-09-10,17.15883051566263\r
2022-09-20,17.854663496695977\r
2022-09-22,17.28426697807296\r
2022-10-02,15.810606984603599\r
2022-10-05,15.631236447692961\r
2022-10-07,16.806027988967077\r
2022-10-17,15.53204978915447\r
2022-10-30,15.472696700345152\r
2022-11-01,16.011166654221917\r
2022-11-06,16.600291850356744\r
2022-11-11,16.071593113085367\r
2022-11-16,16.355161990652906\r
2022-12-04,32.042151521378464\r
2022-12-14,35.46246447985592\r
2022-12-21,2.5711050366158306\r
2023-01-10,49.98324497618062\r
2023-01-18,73.87183328347469\r
2023-02-02,89.06119862973092\r
2023-02-04,86.65366053033623\r
2023-02-09,84.71395725164781\r
2023-02-12,87.97598341465807\r
2023-02-14,86.94660259148061\r
2023-02-17,89.85482925283638\r
2023-02-24,81.46926604314685\r
2023-03-09,89.259260162575\r
2023-03-16,98.09859572833396\r
2023-04-05,93.52265389433224\r
2023-04-08,87.53404224667665\r
2023-04-10,89.60642305889004\r
2023-04-18,67.04658118375163\r
2023-04-20,85.1483830098823\r
2023-05-28,90.30286923654309\r
2023-06-24,96.28539224724186\r
2023-07-07,89.65607544916158\r
2023-07-14,93.67503310271542\r
2023-07-17,93.5734325096745\r
2023-07-22,86.6048872555141\r
2023-07-27,85.9235731782438\r
2023-07-29,86.3612368663987\r
2023-08-08,85.63244513309768\r
2023-08-11,81.3276478178497\r
2023-08-21,72.97740306230878\r
2023-08-23,70.85406860395781\r
2023-08-31,63.05983046067094\r
2023-09-10,62.31887726747756\r
2023-09-20,58.04852441798993\r
2023-09-25,59.481012437981605\r
2023-09-27,64.68099182692849\r
2023-09-30,60.52698111301431\r
2023-10-02,57.5750964019486\r
2023-10-05,60.123553907666995\r
2023-10-07,58.12762676257081\r
2023-10-10,56.71242367961389\r
2023-10-12,58.96161259924647\r
2023-11-06,73.20047499353215\r
2023-11-19,75.63241392525192\r
2023-11-26,71.73479598993852\r
2023-12-06,78.29095981125477\r
`;export{n as default};
