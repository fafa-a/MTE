const n=`date,value\r
2017-01-26,33.35431867476069\r
2017-02-15,51.746925879632\r
2017-02-18,51.005283457959926\r
2017-02-25,53.17152231195378\r
2017-03-10,57.017536711489115\r
2017-03-30,59.07318503146145\r
2017-04-06,71.1959403319548\r
2017-04-09,71.32800996590592\r
2017-04-19,70.05671187957928\r
2017-05-09,73.99637318520375\r
2017-05-16,77.6802693386432\r
2017-05-26,76.62468195970024\r
2017-06-18,77.77241750975956\r
2017-07-05,73.32446390806803\r
2017-07-18,72.07882943817451\r
2017-08-02,61.49257265024299\r
2017-08-12,54.846419313095815\r
2017-08-14,60.23619745085512\r
2017-08-22,45.830886336171034\r
2017-08-24,50.45273488414147\r
2017-10-08,40.51909147581509\r
2017-10-11,38.45200813440219\r
2017-10-13,38.77124979763123\r
2017-10-16,36.65873852632775\r
2017-10-23,38.16587384841146\r
2017-10-26,35.67165761250739\r
2017-10-31,37.00131184084201\r
2017-11-07,37.88086007564909\r
2017-11-17,37.251505784017056\r
2017-11-20,33.295214904234385\r
2017-11-22,36.970099760620066\r
2017-12-05,33.472691134900415\r
2017-12-12,38.07074477622343\r
2017-12-25,41.47443894299371\r
2018-01-11,74.26603693302953\r
2018-02-15,99.65326911898372\r
2018-02-25,100.0\r
2018-03-02,95.91176579268729\r
2018-03-15,99.96845133248704\r
2018-03-30,93.61142612756423\r
2018-04-19,92.04377470534921\r
2018-04-21,100.0\r
2018-05-06,87.71832276638729\r
2018-05-11,99.60078949019692\r
2018-05-21,94.93693929599476\r
2018-06-20,95.86032893200071\r
2018-06-23,89.3461611883866\r
2018-06-25,86.69059503600012\r
2018-07-08,80.89250789239459\r
2018-07-13,86.83702444249207\r
2018-07-23,84.99182405276075\r
2018-07-25,85.86327580468506\r
2018-08-02,75.44052569378235\r
2018-08-04,70.66894514363851\r
2018-08-12,62.63905821943953\r
2018-08-19,58.0010639663676\r
2018-08-22,53.77742436037751\r
2018-08-27,44.85841108352928\r
2018-09-01,41.20972864063848\r
2018-09-03,39.86703017934378\r
2018-09-08,43.386246844101855\r
2018-09-11,41.37506842166211\r
2018-09-16,37.43973154552489\r
2018-09-23,37.471150874369194\r
2018-09-26,36.62767834715708\r
2018-10-03,36.814246528635216\r
2018-10-06,37.53403099594356\r
2018-11-15,34.157601840845814\r
2018-12-07,32.24074171271323\r
2018-12-20,39.34937388363533\r
2019-01-16,38.13415032493237\r
2019-02-03,71.59253431931407\r
2019-02-13,59.713376661037074\r
2019-02-15,70.44996971834932\r
2019-02-20,72.12312369248616\r
2019-02-23,70.84438208099773\r
2019-02-25,68.66780726945679\r
2019-02-28,74.04128142177997\r
2019-03-12,67.72139214313138\r
2019-03-20,68.71098981277993\r
2019-03-22,65.97598769586722\r
2019-03-25,74.89725311706415\r
2019-03-27,70.31875550721254\r
2019-03-30,63.92134214501717\r
2019-05-01,71.15194564262582\r
2019-05-06,74.7617566614427\r
2019-05-14,80.23522902439595\r
2019-06-08,86.05756489905949\r
2019-06-13,77.72633626325728\r
2019-06-18,83.93304528123402\r
2019-06-23,82.64314402618982\r
2019-06-28,88.16072219023343\r
2019-07-05,74.94244719372635\r
2019-07-15,77.45014952939567\r
2019-07-25,56.120478899679696\r
2019-08-14,49.86682743170923\r
2019-08-17,47.41672306834168\r
2019-08-22,48.274075725409574\r
2019-08-24,51.52384363337404\r
2019-09-11,46.11074579673323\r
2019-09-13,47.737286236275914\r
2019-09-16,42.98000580910765\r
2019-10-08,43.72631223172735\r
2019-10-11,40.58460275965975\r
2019-10-13,44.4449829536167\r
2019-12-05,90.04150252607637\r
2019-12-10,86.88586304319894\r
2019-12-15,76.6704195954146\r
2019-12-25,80.98663444442003\r
2019-12-30,81.26935852849483\r
2020-01-09,93.56064000219656\r
2020-01-11,92.39654709947531\r
2020-01-16,93.40836833665415\r
2020-01-19,89.94199497403518\r
2020-01-29,85.81473951112294\r
2020-02-05,90.98970249951472\r
2020-02-15,84.2211129169261\r
2020-02-20,86.30075011705732\r
2020-02-23,88.01312603826567\r
2020-03-11,97.09880794206998\r
2020-03-21,97.04703818673619\r
2020-03-24,89.39573468699655\r
2020-03-26,86.44683398689477\r
2020-04-03,96.58176184590359\r
2020-04-05,85.57227390365232\r
2020-04-08,89.79284182675309\r
2020-04-10,89.24705744944927\r
2020-04-15,93.20554175961352\r
2020-05-18,89.1480113856198\r
2020-05-20,90.44010976581151\r
2020-05-28,92.8511515344122\r
2020-05-30,91.39050313762841\r
2020-06-24,85.33016802699234\r
2020-07-07,95.96321712289675\r
2020-07-09,85.2334263898211\r
2020-07-19,74.44609856141855\r
2020-07-22,72.12312369248616\r
2020-07-24,63.46477841466499\r
2020-07-27,61.81900678579987\r
2020-08-06,46.145791051513825\r
2020-08-08,49.28450785332909\r
2020-08-21,36.534580641952914\r
2020-08-31,33.85892067541063\r
2020-09-02,33.79934949637368\r
2020-09-05,34.78931148577677\r
2020-09-10,33.443077403494684\r
2020-09-12,33.26568363177705\r
2020-09-17,32.3279349462979\r
2020-09-30,30.522786282690085\r
2020-10-30,43.250610486643346\r
2020-11-09,45.900767445617525\r
2020-11-11,46.39149880600915\r
2020-11-14,43.692243036578645\r
2020-11-21,48.23819182771122\r
2020-11-26,47.310120350640005\r
2020-11-29,45.0312653280827\r
2020-12-26,80.23522902439595\r
2021-01-03,96.58176184590359\r
2021-02-14,100.0\r
2021-02-19,95.14173197010061\r
2021-02-24,100.0\r
2021-02-27,100.0\r
2021-03-01,99.81079498619106\r
2021-03-04,97.82510489977612\r
2021-03-21,100.0\r
2021-03-24,89.09850998089429\r
2021-03-29,91.6917098955282\r
2021-03-31,96.22069083003412\r
2021-04-05,90.78964857008198\r
2021-04-08,95.09051210677278\r
2021-04-15,99.44343757946851\r
2021-04-23,96.27222898532762\r
2021-05-03,86.2520842846743\r
2021-05-20,80.7514256869145\r
2021-05-30,83.98102061235645\r
2021-06-07,83.11966380112143\r
2021-06-09,81.59985636380999\r
2021-06-14,91.49084764422156\r
2021-07-02,84.50969816295783\r
2021-07-17,85.13674229844129\r
2021-07-22,77.72633626325728\r
2021-08-11,67.76426160479762\r
2021-08-26,55.81020700739096\r
2021-08-28,51.15316283710646\r
2021-09-05,43.42019073284151\r
2021-09-12,44.136228920325586\r
2021-09-17,40.88009041380754\r
2021-10-07,42.240433708014564\r
2021-10-12,40.81432934510115\r
2021-10-20,38.07074477622343\r
2021-10-27,38.8993340670922\r
2021-11-19,38.96345927769185\r
2021-12-14,83.74128770935928\r
2021-12-16,83.3106740159194\r
2021-12-19,84.07701440319119\r
2022-01-13,77.91074718473598\r
2022-01-15,83.69338425253949\r
2022-01-23,96.06616319339858\r
2022-01-25,88.75240381887731\r
2022-02-09,91.03975206186739\r
2022-02-22,100.0\r
2022-03-09,92.3461077166763\r
2022-03-21,97.77313241529757\r
2022-03-24,96.7367236759971\r
2022-03-26,88.16072219023343\r
2022-04-05,90.93966736954712\r
2022-05-08,89.74315295764337\r
2022-05-10,95.0393067068992\r
2022-05-15,77.49614485078365\r
2022-06-17,82.92888348768126\r
2022-07-12,85.81473951112294\r
2022-07-14,83.93304528123402\r
2022-07-17,79.30113592833918\r
2022-08-01,58.95355190456147\r
2022-08-03,53.663543482694074\r
2022-08-11,40.38823539093722\r
2022-08-28,26.995814815253123\r
2022-09-05,19.02202779699105\r
2022-09-10,17.156484716627613\r
2022-09-20,17.852222569713053\r
2022-09-22,17.281904030507206\r
2022-10-02,15.808445502410878\r
2022-10-05,15.629099487406439\r
2022-10-07,16.803730421880385\r
2022-10-17,15.529926388764567\r
2022-10-30,15.470581414168993\r
2022-11-01,16.008977753337753\r
2022-11-06,16.59802240964119\r
2022-11-11,16.069395951246076\r
2022-11-16,16.352926061859264\r
2022-12-04,32.037771010244555\r
2022-12-14,35.45761637468463\r
2022-12-21,2.5707535385514193\r
2023-01-10,49.97641172214707\r
2023-01-18,73.86173419921175\r
2023-02-02,89.04902299377413\r
2023-02-04,86.64181403106184\r
2023-02-09,84.70237593093997\r
2023-02-12,87.96395613944195\r
2023-02-14,86.9347160438356\r
2023-02-17,89.84254511892874\r
2023-02-24,81.45812830707018\r
2023-03-09,89.24705744944927\r
2023-03-16,98.08518458175342\r
2023-04-05,93.50986832884412\r
2023-04-08,87.52207538963206\r
2023-04-10,89.59417288481488\r
2023-04-18,67.03741518579515\r
2023-04-20,85.13674229844129\r
2023-05-28,90.29052385068937\r
2023-06-24,96.27222898532762\r
2023-07-07,89.64381848706384\r
2023-07-14,93.66222670532972\r
2023-07-17,93.56064000219656\r
2023-07-22,86.59304742407767\r
2023-07-27,85.91182648986297\r
2023-07-29,86.34943034462444\r
2023-08-08,85.62073824509177\r
2023-08-11,81.31652944252701\r
2023-08-21,72.9674262563997\r
2023-08-23,70.84438208099773\r
2023-08-31,60.9640497987138\r
2023-09-10,62.72137508475824\r
`;export{n as default};
