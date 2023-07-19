const n=`date,value\r
2017-02-19,43.06718073120675\r
2017-03-11,90.9368907083171\r
2017-04-10,100.0\r
2017-04-20,99.74323448802176\r
2017-04-30,99.92962528692104\r
2017-05-10,100.0\r
2017-07-19,85.65727046849153\r
2017-08-23,36.937921430203794\r
2017-08-26,36.304341706651826\r
2017-09-22,29.387677501461212\r
2017-09-25,27.31656562686432\r
2017-10-05,27.82771814790158\r
2017-10-15,25.190111543195016\r
2018-03-24,97.70366111460139\r
2018-04-18,95.78821418896638\r
2018-07-02,94.9801621620128\r
2018-07-09,100.0\r
2018-07-19,100.0\r
2018-07-29,95.52720313774253\r
2018-08-16,76.43247375831513\r
2018-09-10,58.63056307399547\r
2018-09-25,43.35537504386553\r
2018-09-27,41.799150347642104\r
2018-09-30,38.47595295151851\r
2018-10-05,32.895465557226636\r
2018-10-20,29.764944511672255\r
2018-10-22,25.176111991479473\r
2018-11-14,27.3602053509028\r
2019-02-14,81.39457976144887\r
2019-02-17,80.93526816680425\r
2019-02-24,84.91508087044299\r
2019-02-27,81.73379610907098\r
2019-03-21,97.38757752179433\r
2019-03-24,93.1930716776807\r
2019-03-29,92.13868537560717\r
2019-04-15,97.59824679777932\r
2019-04-18,93.52855834398555\r
2019-04-20,98.7607249328538\r
2019-05-15,97.75638819105221\r
2019-06-02,87.05075360255556\r
2019-06-04,88.0023066617846\r
2019-06-17,80.64580183147572\r
2019-06-27,74.95830430539725\r
2019-06-29,75.51831241911621\r
2019-07-04,71.86738564888617\r
2019-07-09,73.636086353085\r
2019-07-17,62.31773694314748\r
2019-07-24,57.53460612225423\r
2019-08-01,55.55382233221481\r
2019-08-21,31.6226154324847\r
2019-08-23,22.94283799633974\r
2019-08-31,16.459058874192337\r
2019-09-12,15.563902030077688\r
2019-09-20,11.441089331750282\r
2019-10-12,10.25101717265424\r
2020-03-15,12.168377682871428\r
2020-03-25,16.470539626237628\r
2020-03-28,15.934986559097913\r
2020-04-02,16.70093912435758\r
2020-04-04,16.207428041454765\r
2020-04-07,14.313441789501367\r
2020-04-09,16.470539626237628\r
2020-04-14,18.126653098387486\r
2020-04-17,17.720535240683567\r
2020-04-22,17.224795657244073\r
2020-05-07,22.635517950352973\r
2020-05-09,23.71278744916692\r
2020-05-17,23.292571538349733\r
2020-05-19,22.079319887073044\r
2020-05-27,19.75646500988337\r
2020-06-01,19.569377613614076\r
2020-06-23,21.321866264445845\r
2020-07-01,23.97207181682648\r
2020-07-23,20.93492651071078\r
2020-07-31,19.93182933945435\r
2020-08-05,19.308851723895877\r
2020-08-07,15.83337697867971\r
2020-08-12,18.307187609803073\r
2020-09-04,14.410383843043714\r
2020-09-09,14.216805237841552\r
2020-09-14,12.8551058888692\r
2020-10-19,17.803796557406745\r
2020-11-18,13.759318255755302\r
2021-02-11,18.331321967506693\r
2021-02-21,36.4206692604682\r
2021-02-23,44.33465075700023\r
2021-02-28,44.82811530248596\r
2021-03-08,43.78934822261273\r
2021-03-30,63.196749955225265\r
2021-04-04,63.347399578067545\r
2021-04-24,66.46156215492009\r
2021-04-27,64.51517899897034\r
2021-05-09,71.84454757480616\r
2021-05-24,67.98912329974362\r
2021-06-13,70.27690679631104\r
2021-06-18,71.3429672759667\r
2021-07-18,66.94685103975586\r
2021-07-23,64.81956145070679\r
2021-09-24,17.578225493480478\r
2021-10-09,18.307187609803073\r
2021-10-14,17.342233276468924\r
2021-10-24,17.958907926375538\r
2021-10-29,18.707301436844546\r
2022-02-08,17.00269069615954\r
2022-02-13,14.270454486539249\r
2022-02-28,29.207387431269172\r
2022-03-03,28.87820107517291\r
2022-03-05,33.03833979270762\r
2022-03-08,30.817846208867415\r
2022-03-10,33.484685098074095\r
2022-03-20,39.85222835830658\r
2022-03-23,37.08872899398958\r
2022-03-25,39.8002107396277\r
2022-03-28,37.96567419012763\r
2022-04-17,53.14825095562329\r
2022-04-22,51.493959466451024\r
2022-06-18,65.25555335160252\r
2022-06-23,67.12372825834134\r
2022-07-03,62.93888302997838\r
2022-07-08,58.21586046395291\r
2022-07-11,63.97330262492039\r
2022-07-13,63.7571495262521\r
2022-07-16,62.168236020451864\r
2022-07-18,63.45510895168025\r
2022-08-07,56.16297561495088\r
2022-08-10,54.56554381749874\r
2022-08-12,54.76656075157603\r
2022-08-17,51.33768183248652\r
2022-08-25,51.16213454507606\r
2022-10-09,46.92098818125317\r
2022-11-10,21.64684144765622\r
2023-02-11,88.60577479471678\r
2023-02-13,81.37037522146221\r
2023-02-16,85.53336285565123\r
2023-02-21,86.55187619866956\r
2023-04-04,99.79647242748142\r
2023-06-01,98.97277473181482\r
2023-06-13,100.0\r
`;export{n as default};