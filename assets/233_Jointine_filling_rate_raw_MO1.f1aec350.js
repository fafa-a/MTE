const n=`date,value\r
2017-02-19,63.230452445917805\r
2017-02-22,46.57201154809187\r
2017-03-11,65.52627429284496\r
2017-03-14,64.50252321363136\r
2017-04-03,95.41190110137414\r
2017-04-10,81.7904610347016\r
2017-04-20,85.69055062377745\r
2017-04-23,77.40837951967295\r
2017-05-23,85.40995884054404\r
2017-06-09,88.51336242564965\r
2017-06-12,81.23829014800947\r
2017-06-19,82.34388363173423\r
2017-06-22,76.86632476775009\r
2017-07-04,65.78305484784815\r
2017-07-07,58.72192739026837\r
2017-07-14,53.60515539445794\r
2017-07-22,42.292135112474135\r
2017-08-03,39.44444898909181\r
2017-08-06,36.66404390032805\r
2017-08-13,26.628783589287114\r
2017-08-18,30.712604598973392\r
2017-08-21,24.01670152773204\r
2017-08-23,21.85081299983283\r
2017-08-26,14.991293114845691\r
2017-09-15,10.829901089904737\r
2017-09-22,10.135590478527718\r
2017-09-27,5.5085984787888895\r
2017-10-05,3.334685990578056\r
2017-10-07,3.334685990578056\r
2017-10-10,2.8730223223943763\r
2017-10-12,2.1024729151748125\r
2017-10-15,2.607288583961956\r
2017-10-17,2.350336711582482\r
2017-10-27,2.8730223223943763\r
2017-10-30,1.2094016523129367\r
2017-11-21,1.5614607188595777\r
2018-01-13,13.00306431869262\r
2018-01-15,15.940421720664622\r
2018-01-23,2.5206477226893558\r
2018-02-24,4.428159154645132\r
2018-03-14,65.013723650734\r
2018-03-19,67.5899094366342\r
2018-04-18,87.38056096277657\r
2018-04-20,100.0\r
2018-05-05,96.87079972366391\r
2018-05-18,93.09314487752629\r
2018-05-20,81.23829014800947\r
2018-05-25,82.06701604374142\r
2018-06-14,79.58931585339522\r
2018-06-19,81.23829014800947\r
2018-06-22,78.2238507175686\r
2018-06-24,74.97921399802567\r
2018-06-27,87.38056096277657\r
2018-07-02,95.99457037849962\r
2018-07-04,86.53417357058777\r
2018-07-07,77.13719262666002\r
2018-07-09,75.24783817053776\r
2018-07-17,68.89052595705046\r
2018-07-19,69.67487314203214\r
2018-07-24,81.51421895295358\r
2018-07-27,63.484187068098706\r
2018-07-29,55.53595574790183\r
2018-08-01,66.55541224331833\r
2018-08-03,52.64837220163137\r
2018-08-16,38.36701302976213\r
2018-08-18,48.87949394905035\r
2018-08-21,40.969558082847996\r
2018-08-26,34.98717385362898\r
2018-08-28,35.61291625337072\r
2018-09-02,21.85081299983283\r
2018-09-05,27.009258648382566\r
2018-09-10,22.56514437817515\r
2018-09-17,18.73334383853515\r
2018-09-20,16.74614059415539\r
2018-09-25,15.62187923685254\r
2018-09-27,10.970603149070548\r
2018-10-02,20.793853913167094\r
2018-10-05,9.862209904422983\r
2018-10-17,12.70567875275652\r
2018-10-20,8.147627375283712\r
2018-10-22,8.663469881476662\r
2018-11-04,14.36947125785886\r
2018-11-24,56.50990609367865\r
2018-12-11,69.41309360676689\r
2019-01-03,55.53595574790183\r
2019-02-04,66.55541224331833\r
2019-02-12,20.96879239121382\r
2019-02-14,55.53595574790183\r
2019-02-17,56.50990609367865\r
2019-02-22,62.72400564138964\r
2019-02-27,73.90794147651152\r
2019-03-16,57.981427593876155\r
2019-03-21,68.89052595705046\r
2019-03-24,82.89855515704984\r
2019-03-29,86.81599598022137\r
2019-03-31,82.89855515704984\r
2019-04-05,81.23829014800947\r
2019-04-13,88.22970393622275\r
2019-04-15,89.65104193307253\r
2019-04-20,86.53417357058777\r
2019-04-23,88.51336242564965\r
2019-05-03,93.38194315364285\r
2019-05-13,86.81599598022137\r
2019-05-15,85.69055062377745\r
2019-05-23,91.65365731230582\r
2019-05-30,62.72400564138964\r
2019-06-02,99.51543659976295\r
2019-06-07,96.57842694716446\r
2019-06-12,91.07996984195815\r
2019-06-17,79.04218000726706\r
2019-06-19,84.01163395690476\r
2019-06-24,91.07996984195815\r
2019-06-27,84.29067994126237\r
2019-06-29,60.21233915659667\r
2019-07-02,87.09812522038268\r
2019-07-04,73.37424508629034\r
2019-07-14,67.33078420421518\r
2019-07-17,71.78095265025694\r
2019-07-19,63.230452445917805\r
2019-07-22,59.71414533391006\r
2019-07-24,59.21734013406489\r
2019-07-29,37.299620068830635\r
2019-08-03,53.845251877115196\r
2019-08-06,49.578997348586455\r
2019-08-08,39.87821486285366\r
2019-08-11,38.79678742653949\r
2019-08-13,42.51393009422379\r
2019-08-23,27.39153787345599\r
2019-08-26,36.452999697939276\r
2019-08-28,43.40498672179085\r
2019-08-31,27.775612917207276\r
2019-09-02,29.919763632140235\r
2019-09-12,16.74614059415539\r
2019-09-15,13.15261930113098\r
2019-09-17,9.862209904422983\r
2019-09-20,9.323018943780786\r
2019-09-27,9.4568631273862\r
2019-10-25,19.754596824844683\r
2019-12-06,72.57613404644242\r
2019-12-21,96.28635040004559\r
2020-02-12,57.981427593876155\r
2020-02-22,69.67487314203214\r
2020-02-24,60.96222525107885\r
2020-03-20,74.97921399802567\r
2020-03-23,100.0\r
2020-03-25,72.31074754062166\r
2020-03-28,100.0\r
2020-04-04,99.51543659976295\r
2020-04-07,93.09314487752629\r
2020-04-09,87.94635064636074\r
2020-04-14,97.45643278448227\r
2020-04-24,88.51336242564965\r
2020-05-04,73.90794147651152\r
2020-05-09,90.5074904308139\r
2020-05-17,77.67988507757075\r
2020-05-19,73.64093130419216\r
2020-05-22,84.84970107300859\r
2020-05-27,93.38194315364285\r
2020-05-29,87.38056096277657\r
2020-06-21,85.12967554536846\r
2020-06-23,85.12967554536846\r
2020-07-01,79.04218000726706\r
2020-07-08,77.95170893242084\r
2020-07-11,69.41309360676689\r
2020-07-13,64.24743042132866\r
2020-07-18,61.96689833626877\r
2020-07-21,67.84936791937471\r
2020-07-23,49.812904173230244\r
2020-07-28,36.24236404783678\r
2020-07-31,57.24408271123419\r
2020-08-05,33.95256328000457\r
2020-08-07,28.93853120249701\r
2020-08-10,36.03213773196343\r
2020-08-20,17.565062691394754\r
2020-08-25,18.062667226703258\r
2020-09-01,7.148325381514809\r
2020-09-04,8.275591808310171\r
2020-09-14,6.785022437568436\r
2020-09-16,5.286240739379545\r
2020-10-31,1.7867198868296914\r
2020-11-23,3.054919084098037\r
2020-12-13,3.622549308011907\r
2021-01-24,50.51683370193369\r
2021-02-21,79.86335759122684\r
2021-02-23,82.62106345150775\r
2021-02-28,95.41190110137414\r
2021-03-20,100.0\r
2021-03-23,93.67104096722699\r
2021-03-25,100.0\r
2021-03-28,92.80464644516651\r
2021-03-30,100.0\r
2021-04-02,100.0\r
2021-04-04,81.51421895295358\r
2021-04-07,90.22170453305873\r
2021-04-14,88.79732579157465\r
2021-04-17,92.22855034161107\r
2021-04-19,89.93622159482035\r
2021-04-24,98.04324723068878\r
2021-05-27,66.81353518248963\r
2021-06-01,85.69055062377745\r
2021-06-03,91.65365731230582\r
2021-06-11,82.06701604374142\r
2021-06-13,79.58931585339522\r
2021-06-16,92.22855034161107\r
2021-06-18,80.68737377248651\r
2021-06-26,91.36666272636299\r
2021-07-11,79.58931585339522\r
2021-07-21,70.46218967363066\r
2021-07-23,79.31558987236207\r
2021-08-02,86.25265832083952\r
2021-08-10,72.31074754062166\r
2021-08-12,67.5899094366342\r
2021-08-15,77.95170893242084\r
2021-08-20,82.34388363173423\r
2021-08-25,82.62106345150775\r
2021-08-27,75.78605110291467\r
2021-09-01,69.41309360676689\r
2021-09-06,69.93698260367864\r
2021-09-24,56.26588694571987\r
2021-10-11,63.484187068098706\r
2021-10-14,63.738261903146444\r
2021-10-16,56.50990609367865\r
2021-10-21,65.26983041517661\r
2021-10-24,62.21892511008515\r
2021-11-30,64.75795443711412\r
2021-12-23,61.21287749544844\r
2022-01-14,49.11229165962668\r
2022-01-24,50.51683370193369\r
2022-02-01,84.84970107300859\r
2022-02-08,31.11162271313226\r
2022-02-26,62.21892511008515\r
2022-02-28,62.9770584864624\r
2022-03-05,78.2238507175686\r
2022-03-23,85.69055062377745\r
2022-03-25,82.34388363173423\r
2022-04-04,80.41238690685731\r
2022-04-14,74.17527521661289\r
2022-04-17,85.69055062377745\r
2022-04-27,73.64093130419216\r
2022-05-19,84.29067994126237\r
2022-05-27,68.62973866729516\r
2022-05-29,77.95170893242084\r
2022-06-11,74.97921399802567\r
2022-06-13,77.95170893242084\r
2022-06-16,67.07199264474956\r
2022-06-18,70.1994215832049\r
2022-06-21,79.86335759122684\r
2022-06-28,68.62973866729516\r
2022-07-03,69.41309360676689\r
2022-07-06,61.21287749544844\r
2022-07-08,59.21734013406489\r
2022-07-11,64.24743042132866\r
2022-07-13,55.77891126438713\r
2022-07-16,54.809224643009536\r
2022-07-18,54.56769447703606\r
2022-07-21,45.65953606708846\r
2022-07-26,22.744926898067845\r
2022-07-28,43.85283179724064\r
2022-07-31,32.11668556084899\r
2022-08-02,24.01670152773204\r
2022-08-07,17.89628187066104\r
2022-08-10,18.22956765523568\r
2022-08-12,12.70567875275652\r
2022-08-22,8.404222616987704\r
2022-08-25,9.323018943780786\r
2022-09-01,8.663469881476662\r
2022-09-04,14.991293114845691\r
2022-09-11,15.780881207128102\r
2022-09-19,11.396342237088797\r
2022-09-21,14.215399554561287\r
2022-10-04,11.972377688978938\r
2022-10-06,11.82747795913126\r
2022-10-11,12.70567875275652\r
2022-11-18,72.84184606727193\r
2022-11-20,56.26588694571987\r
2022-12-05,58.474744396026665\r
2023-01-17,50.75221133808371\r
2023-02-03,44.07733123438419\r
2023-02-08,43.40498672179085\r
2023-02-13,50.51683370193369\r
2023-02-16,49.345459652214366\r
2023-02-21,57.981427593876155\r
2023-03-05,58.96945946433701\r
2023-03-28,73.90794147651152\r
2023-04-04,66.04017164599036\r
2023-04-19,76.05563910725876\r
`;export{n as default};
