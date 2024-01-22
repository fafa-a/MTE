const r=`date,value\r
2017-02-01,9.124134003810465\r
2017-02-04,9.124134003810465\r
2017-02-14,3.357885631838828\r
2017-03-13,47.22477982749629\r
2017-03-16,69.52006312129913\r
2017-04-02,33.06273114654712\r
2017-04-05,33.851105720148276\r
2017-04-12,33.851105720148276\r
2017-04-22,84.25852424217899\r
2017-05-02,78.2153803997472\r
2017-05-05,67.15161794299884\r
2017-05-12,67.15161794299884\r
2017-05-22,57.566752004984345\r
2017-05-25,71.7136775125655\r
2017-06-01,58.504203443898874\r
2017-06-04,73.52431041721175\r
2017-06-11,48.814591107110985\r
2017-06-14,64.03416502625603\r
2017-06-21,65.58706733324046\r
2017-06-24,65.00335840092846\r
2017-07-01,69.91730641034857\r
2017-08-25,43.58035106191857\r
2017-09-22,5.7917183038721785\r
2017-10-04,22.80706881837354\r
2017-10-07,23.650566689862266\r
2017-10-12,23.650566689862266\r
2017-10-14,25.800897299943582\r
2017-10-22,30.120867640598505\r
2017-11-08,35.284802953357826\r
2017-11-13,28.607554110264132\r
2017-11-23,28.45757689791525\r
2017-11-28,25.22173825145442\r
2017-12-01,42.216416814278524\r
2017-12-08,42.216416814278524\r
2017-12-16,31.194670277238\r
2017-12-18,31.194670277238\r
2018-01-10,28.009135916438808\r
2018-01-12,28.009135916438808\r
2018-01-17,31.349033422429624\r
2018-02-04,48.814591107110985\r
2018-02-06,48.814591107110985\r
2018-02-09,50.42085294249388\r
2018-02-11,50.42085294249388\r
2018-02-21,57.75386115272718\r
2018-02-24,65.78200124838163\r
2018-02-26,62.10957635145886\r
2018-03-03,64.61513180809382\r
2018-03-13,47.75287667053799\r
2018-04-15,57.379833885943896\r
2018-04-17,79.86830263170172\r
2018-04-20,72.7178324559069\r
2018-04-25,72.7178324559069\r
2018-04-30,74.3335795276725\r
2018-05-07,51.86229257375688\r
2018-05-15,86.58744478766975\r
2018-05-17,86.58744478766975\r
2018-05-20,93.03944325096137\r
2018-05-22,93.03944325096137\r
2018-05-25,91.30468568904378\r
2018-06-21,55.70620543953474\r
2018-06-24,55.70620543953474\r
2018-06-26,55.70620543953474\r
2018-06-29,77.80385140286823\r
2018-07-01,68.53007513793219\r
2018-07-04,84.89170283756245\r
2018-07-06,72.31564372880098\r
2018-07-09,73.92859678917421\r
2018-07-11,77.39300569236174\r
2018-07-14,77.18783948920121\r
2018-07-16,77.18783948920121\r
2018-07-19,80.07568089269\r
2018-07-21,83.20654550199393\r
2018-07-24,78.83395213543622\r
2018-07-26,45.30431472819337\r
2018-07-31,45.30431472819337\r
2018-08-03,56.44811682441059\r
2018-08-05,70.315260634307\r
2018-08-08,70.315260634307\r
2018-08-10,70.315260634307\r
2018-08-13,70.315260634307\r
2018-09-02,74.13100120095386\r
2018-09-04,65.78200124838163\r
2018-09-07,65.78200124838163\r
2018-09-09,68.13533203296775\r
2018-09-12,68.13533203296775\r
2018-09-14,58.504203443898874\r
2018-09-17,48.814591107110985\r
2018-09-19,49.883616759501194\r
2018-09-24,47.57663926376743\r
2018-09-27,47.04915836364204\r
2018-09-29,47.04915836364204\r
2018-10-04,42.04688620093105\r
2018-10-07,47.04915836364204\r
2018-10-09,60.58326730534402\r
2018-10-12,60.58326730534402\r
2018-10-17,50.95989507677577\r
2018-10-19,52.04336882364204\r
2018-10-24,44.61220698214974\r
2018-10-27,44.61220698214974\r
2018-10-29,44.61220698214974\r
2018-11-03,35.284802953357826\r
2018-11-11,44.267411826643205\r
2018-11-13,44.267411826643205\r
2019-01-10,80.69882906587132\r
2019-01-17,63.64777163305837\r
2019-01-20,65.9771169645916\r
2019-01-25,65.9771169645916\r
2019-01-27,65.58706733324046\r
2019-02-11,65.39231541952265\r
2019-02-14,78.00953057421741\r
2019-02-19,78.00953057421741\r
2019-02-21,78.00953057421741\r
2019-02-24,78.00953057421741\r
2019-02-26,53.31644115338546\r
2019-03-01,68.92553448536569\r
2019-03-08,53.31644115338546\r
2019-03-11,53.31644115338546\r
2019-03-13,79.66109353993485\r
2019-03-21,100.0\r
2019-03-23,100.0\r
2019-03-26,63.26211440118146\r
2019-03-28,67.15161794299884\r
2019-03-31,66.75939385489453\r
2019-04-02,66.75939385489453\r
2019-04-07,66.75939385489453\r
2019-04-10,58.69226430186919\r
2019-04-12,80.28322816016627\r
2019-04-20,96.5395799439909\r
2019-04-25,85.7382556122549\r
2019-04-27,85.7382556122549\r
2019-04-30,95.44142520071495\r
2019-05-05,95.00327078864193\r
2019-05-12,100.0\r
2019-05-15,75.3490737409895\r
2019-05-17,75.3490737409895\r
2019-05-22,75.3490737409895\r
2019-05-25,75.3490737409895\r
2019-05-27,69.32170854732472\r
2019-05-30,91.95401635176995\r
2019-06-01,85.52636987778726\r
2019-06-14,60.39331988622476\r
2019-06-21,98.96937258353817\r
2019-06-26,95.88021299984926\r
2019-07-01,93.47473394736704\r
2019-07-04,94.12886646137302\r
2019-07-06,86.58744478766975\r
2019-07-09,80.07568089269\r
2019-07-11,86.58744478766975\r
2019-07-14,91.30468568904378\r
2019-07-16,85.10309333845669\r
2019-07-21,78.83395213543622\r
2019-07-24,89.1507349528841\r
2019-07-29,94.56575084623222\r
2019-08-20,74.73925722220028\r
2019-08-23,75.14562847035532\r
2019-08-25,75.14562847035532\r
2019-08-28,75.14562847035532\r
2019-08-30,59.82460446892887\r
2019-09-02,64.61513180809382\r
2019-09-04,64.61513180809382\r
2019-09-07,59.25758394041293\r
2019-09-12,53.31644115338546\r
2019-09-14,54.415314625205646\r
2019-09-17,66.17241428214243\r
2019-09-19,58.12865161538816\r
2019-09-22,56.82022801221919\r
2019-09-24,55.70620543953474\r
2019-10-02,68.53007513793219\r
2019-10-04,70.315260634307\r
2019-10-09,90.44116574943672\r
2019-10-17,93.91066294444532\r
2019-10-22,54.967388027214405\r
2019-10-24,54.967388027214405\r
2019-11-03,54.967388027214405\r
2019-11-08,69.32170854732472\r
2019-11-16,69.32170854732472\r
2019-11-18,80.28322816016627\r
2019-12-03,81.94967115142978\r
2019-12-11,76.16458175683097\r
2019-12-13,80.07568089269\r
2020-01-10,80.07568089269\r
2020-01-12,86.80015288888424\r
2020-01-17,86.80015288888424\r
2020-01-20,73.32242881169974\r
2020-01-22,67.34800070900123\r
2020-01-25,67.34800070900123\r
2020-02-04,57.379833885943896\r
2020-02-06,54.23167995732848\r
2020-02-29,98.30481980436348\r
2020-03-02,98.30481980436348\r
2020-03-12,98.30481980436348\r
2020-03-17,90.87260320716902\r
2020-03-25,91.08856389113343\r
2020-03-27,91.08856389113343\r
2020-03-30,87.22606101276988\r
2020-04-01,76.57336951398544\r
2020-04-04,55.521210429843336\r
2020-04-06,55.521210429843336\r
2020-04-09,58.12865161538816\r
2020-04-11,61.9181354583681\r
2020-04-14,65.00335840092846\r
2020-04-16,58.69226430186919\r
2020-04-21,65.39231541952265\r
2020-04-26,99.85762954312158\r
2020-05-14,79.0404829140136\r
2020-05-16,86.58744478766975\r
2020-05-19,84.04779619078325\r
2020-05-24,91.30468568904378\r
2020-05-26,82.99664898513663\r
2020-05-29,84.04779619078325\r
2020-05-31,83.20654550199393\r
2020-06-08,89.58023047333766\r
2020-06-13,96.5395799439909\r
2020-06-15,100.0\r
2020-07-08,100.0\r
2020-07-10,100.0\r
2020-07-13,87.01302501359888\r
2020-07-18,100.0\r
2020-07-20,91.73741206047674\r
2020-07-28,86.37490085938578\r
2020-07-30,86.37490085938578\r
2020-08-02,86.37490085938578\r
2020-08-04,94.78443144086059\r
2020-08-07,100.0\r
2020-08-09,100.0\r
2020-08-14,100.0\r
2020-08-17,100.0\r
2020-09-01,81.11510405581154\r
2020-09-03,93.91066294444532\r
2020-09-08,81.32349393022781\r
2020-09-11,81.32349393022781\r
2020-09-13,80.07568089269\r
2020-09-16,78.62759134649231\r
2020-09-28,82.78691924232092\r
2020-10-16,78.62759134649231\r
2020-10-18,78.62759134649231\r
2020-10-21,78.62759134649231\r
2020-10-26,78.62759134649231\r
2020-11-12,74.13100120095386\r
2020-11-17,74.13100120095386\r
2020-11-20,74.53633159327188\r
2020-11-22,76.36888963252542\r
2020-11-27,76.36888963252542\r
2020-11-30,73.1207218304732\r
2020-12-05,69.32170854732472\r
2020-12-07,78.2153803997472\r
2020-12-10,69.71859580510979\r
2020-12-12,69.71859580510979\r
2020-12-15,69.71859580510979\r
2020-12-17,47.929318827809226\r
2020-12-20,47.929318827809226\r
2021-01-01,48.282816274656085\r
2021-01-06,48.282816274656085\r
2021-01-09,68.53007513793219\r
2021-01-14,64.42129292897481\r
2021-02-23,51.139975878888954\r
2021-02-28,62.49301508180389\r
2021-03-02,50.78001414485478\r
2021-03-07,65.39231541952265\r
2021-03-17,66.95541559295172\r
2021-03-20,67.9382295514444\r
2021-03-22,70.7139242971862\r
2021-03-25,67.15161794299884\r
2021-03-27,67.74130670775324\r
2021-03-30,65.19774570821274\r
2021-04-01,68.53007513793219\r
2021-04-04,70.7139242971862\r
2021-04-06,70.7139242971862\r
2021-04-11,52.224643389163816\r
2021-04-14,75.96044605800132\r
2021-04-16,75.96044605800132\r
2021-04-21,48.814591107110985\r
2021-04-24,66.95541559295172\r
2021-04-29,48.63712937675122\r
2021-05-01,53.31644115338546\r
2021-05-06,56.26234975069878\r
2021-05-19,58.69226430186919\r
2021-05-21,58.69226430186919\r
2021-05-24,58.69226430186919\r
2021-05-26,58.69226430186919\r
2021-05-31,48.814591107110985\r
2021-06-05,48.814591107110985\r
2021-06-08,74.53633159327188\r
2021-06-13,86.80015288888424\r
2021-06-15,62.685012495318325\r
2021-06-18,62.685012495318325\r
2021-06-23,76.77802123059499\r
2021-07-20,52.58778644501512\r
2021-07-25,52.58778644501512\r
2021-07-28,54.23167995732848\r
2021-07-30,51.86229257375688\r
2021-08-12,66.56355292546951\r
2021-08-14,53.13398203240389\r
2021-08-22,58.12865161538816\r
2021-08-24,39.03235794393305\r
2021-08-29,26.971532407229855\r
2021-09-01,29.81624658259947\r
2021-09-03,29.81624658259947\r
2021-09-06,29.81624658259947\r
2021-09-11,42.55612071913455\r
2021-09-13,41.708469254035194\r
2021-09-16,41.708469254035194\r
2021-09-23,29.968435411738987\r
2021-09-26,27.414711137527448\r
2021-10-01,27.414711137527448\r
2021-10-03,34.168086872647756\r
2021-10-06,32.43625336169253\r
2021-10-08,36.73705710359984\r
2021-10-11,36.73705710359984\r
2021-10-13,28.15836731337173\r
2021-10-16,28.15836731337173\r
2021-10-21,18.47560096260939\r
2021-10-23,46.523530406528714\r
2021-10-28,46.69853336697475\r
2021-10-31,46.69853336697475\r
2021-11-05,30.120867640598505\r
2021-11-07,30.120867640598505\r
2021-11-10,35.44525328056597\r
2021-11-15,32.280223753126066\r
2021-11-17,34.96458994233239\r
2021-11-22,37.55178140482519\r
2021-11-25,37.55178140482519\r
2021-11-27,45.30431472819337\r
2021-11-30,40.86620029484302\r
2021-12-02,41.539583565248364\r
2021-12-05,40.86620029484302\r
2021-12-17,34.32692540342493\r
2021-12-27,70.7139242971862\r
2022-01-21,49.883616759501194\r
2022-01-31,64.22763726675095\r
2022-02-05,65.78200124838163\r
2022-02-10,65.78200124838163\r
2022-03-07,45.651622533248904\r
2022-03-10,45.651622533248904\r
2022-03-12,51.139975878888954\r
2022-03-15,51.139975878888954\r
2022-03-17,57.379833885943896\r
2022-03-20,70.51450387903098\r
2022-03-22,61.9181354583681\r
2022-03-25,65.9771169645916\r
2022-03-27,62.87719499304541\r
2022-04-01,60.20356012745217\r
2022-04-14,48.105965455509725\r
2022-04-16,48.105965455509725\r
2022-04-19,47.57663926376743\r
2022-04-21,61.15423334254143\r
2022-04-24,61.15423334254143\r
2022-04-26,62.87719499304541\r
2022-04-29,62.87719499304541\r
2022-05-01,63.45485089330379\r
2022-05-04,57.94116109924289\r
2022-05-09,12.779589895926982\r
2022-05-11,12.779589895926982\r
2022-05-21,68.33261395928122\r
2022-05-24,68.33261395928122\r
2022-05-29,63.840876412977195\r
2022-05-31,59.63540901000145\r
2022-06-03,56.07677533758908\r
2022-06-05,59.63540901000145\r
2022-06-08,48.99225592372506\r
2022-06-10,58.69226430186919\r
2022-06-13,44.095329984736736\r
2022-06-15,66.56355292546951\r
2022-06-18,66.56355292546951\r
2022-06-20,72.7178324559069\r
2022-06-23,72.7178324559069\r
2022-06-25,74.3335795276725\r
2022-07-05,60.773402166224635\r
2022-07-08,55.336409031270165\r
2022-07-10,62.685012495318325\r
2022-07-13,61.53581168088914\r
2022-07-18,66.17241428214243\r
2022-07-28,64.61513180809382\r
2022-07-30,74.3335795276725\r
2022-08-02,69.32170854732472\r
2022-08-07,69.32170854732472\r
2022-08-09,61.53581168088914\r
2022-08-12,54.23167995732848\r
2022-08-17,47.75287667053799\r
2022-09-18,30.120867640598505\r
2022-09-21,30.733021431957003\r
2022-09-28,32.1244309231402\r
2022-10-06,24.07591139147436\r
2022-10-08,26.092022847883822\r
2022-10-11,23.509315850667427\r
2022-10-21,37.55178140482519\r
2022-10-23,37.55178140482519\r
2022-11-07,36.25092777144194\r
2022-11-10,39.03235794393305\r
2022-11-12,34.64529638038732\r
2022-11-15,34.64529638038732\r
2022-11-22,30.426460468359135\r
2022-12-17,35.12458171152023\r
2022-12-27,43.23809035735298\r
2023-01-09,80.9068823808498\r
2023-01-16,80.9068823808498\r
2023-01-21,48.45987100734598\r
2023-01-26,48.45987100734598\r
2023-01-31,50.24157319997193\r
2023-02-08,57.00657165764611\r
2023-02-13,60.20356012745217\r
2023-02-15,50.60033334560613\r
2023-02-20,53.31644115338546\r
2023-02-23,44.439704260245286\r
2023-02-28,51.86229257375688\r
2023-03-02,49.34819372217776\r
2023-03-17,32.43625336169253\r
2023-05-14,63.45485089330379\r
2023-05-16,72.91918965215942\r
2023-05-19,72.7178324559069\r
2023-05-26,71.11329591192606\r
2023-05-29,61.34492922440808\r
2023-05-31,59.44640209307539\r
2023-06-03,59.44640209307539\r
2023-06-05,60.01398824833889\r
2023-06-10,58.69226430186919\r
2023-06-13,65.19774570821274\r
2023-06-15,74.73925722220028\r
2023-06-20,60.39331988622476\r
2023-06-23,58.504203443898874\r
2023-06-25,60.01398824833889\r
2023-06-28,58.88051482067017\r
2023-07-10,56.07677533758908\r
2023-07-13,56.07677533758908\r
2023-07-15,59.44640209307539\r
2023-07-18,59.44640209307539\r
2023-07-20,59.44640209307539\r
2023-07-25,86.58744478766975\r
2023-07-28,86.58744478766975\r
2023-08-09,50.95989507677577\r
2023-08-14,50.95989507677577\r
2023-08-17,65.19774570821274\r
2023-08-19,65.19774570821274\r
2023-09-03,58.31633247280153\r
2023-09-06,58.31633247280153\r
2023-09-13,58.31633247280153\r
2023-09-16,36.73705710359984\r
2023-09-18,36.73705710359984\r
2023-10-06,43.923459039168726\r
2023-10-08,47.04915836364204\r
2023-10-16,48.45987100734598\r
2023-11-25,58.504203443898874\r
2023-11-30,65.58706733324046\r
2023-12-02,54.04824059658727\r
2023-12-05,58.504203443898874\r
`;export{r as default};
