const r=`date,value\r
2017-02-25,58.29713981687586\r
2017-03-07,57.64716010188293\r
2017-03-17,90.39647592947338\r
2017-03-27,90.48510922898762\r
2017-04-03,89.76043960693804\r
2017-04-06,89.67760987600776\r
2017-04-23,78.59337757047524\r
2017-05-03,82.28398175368177\r
2017-05-16,100.0\r
2017-05-23,100.0\r
2017-05-26,100.0\r
2017-06-02,91.44009416772005\r
2017-06-05,91.4067137366115\r
2017-06-22,89.10966632388052\r
2017-06-25,89.61688737564867\r
2017-07-02,91.71288215275447\r
2017-07-05,90.4740281801179\r
2017-07-07,90.57931990268672\r
2017-07-12,90.57931990268672\r
2017-07-17,90.71793572934504\r
2017-08-14,93.40687167084842\r
2017-08-19,95.92267948952295\r
2017-08-21,91.06206611097261\r
2017-08-24,92.5834975126189\r
2017-08-26,93.60333966804359\r
2017-08-29,92.4884642079778\r
2017-09-03,90.96210398738057\r
2017-09-13,87.93425376006772\r
2017-09-20,87.93973192143454\r
2017-09-23,91.47347943881739\r
2017-09-28,91.47347943881739\r
2017-10-05,88.19187382205665\r
2017-10-10,88.19187382205665\r
2017-10-13,92.39905650768426\r
2017-10-15,86.99402789450227\r
2017-10-18,88.15348590952088\r
2017-10-25,85.93293497594112\r
2017-10-28,83.27339837475746\r
2017-10-30,83.10727677058061\r
2017-11-04,83.10727677058061\r
2017-11-07,83.03765208332891\r
2017-11-17,61.576002510699745\r
2017-11-19,62.74541376336603\r
2017-11-22,58.861237178994806\r
2017-11-27,59.53067587248695\r
2017-11-29,56.67762540116853\r
2017-12-07,57.23546475377263\r
2018-02-25,79.70192190262497\r
2018-02-27,79.29666761104667\r
2018-03-14,81.6500306616645\r
2018-03-17,82.9519919767421\r
2018-03-22,87.52924603168024\r
2018-04-06,91.63490980118317\r
2018-04-16,92.36553747399456\r
2018-04-18,98.13286411726155\r
2018-04-21,96.22340642199616\r
2018-04-23,96.7576901992602\r
2018-04-26,96.17231323564559\r
2018-05-06,95.67330347701744\r
2018-05-08,94.30071622295989\r
2018-05-11,97.72121660779233\r
2018-05-13,97.72121660779233\r
2018-05-18,93.50789187950133\r
2018-05-21,93.50789187950133\r
2018-05-26,97.00818401251884\r
2018-06-02,97.00818401251884\r
2018-06-20,89.67208897375039\r
2018-06-22,92.24267567630129\r
2018-06-25,88.38940219627291\r
2018-06-27,89.23636438948326\r
2018-07-02,88.62007372277799\r
2018-07-07,87.86852639549153\r
2018-07-10,89.00505663244164\r
2018-07-12,89.96488276070882\r
2018-07-15,93.51911902384623\r
2018-07-17,93.51911902384623\r
2018-07-25,94.06990457411615\r
2018-08-06,91.56253048781355\r
2018-08-11,91.15651481465589\r
2018-08-16,93.50789187950133\r
2018-08-19,93.35076807204057\r
2018-08-21,89.27493885894447\r
2018-08-26,87.87400293038542\r
2018-09-03,90.79559735714035\r
2018-09-05,90.79559735714035\r
2018-09-08,89.4844586244302\r
2018-09-10,84.57474183754832\r
2018-09-13,84.57474183754832\r
2018-09-18,88.56513027581856\r
2018-09-20,84.5262013623856\r
2018-09-23,65.0471717622527\r
2018-09-25,65.69482168704748\r
2018-09-28,60.35872222196063\r
2018-09-30,58.064672006856156\r
2018-10-05,45.39591894311461\r
2018-10-08,44.20151732936983\r
2018-10-13,35.62026748803359\r
2018-10-18,31.997173310444655\r
2018-10-20,31.205444118782626\r
2018-10-23,27.576634342702675\r
2018-10-25,24.807250662562364\r
2018-10-30,24.807250662562364\r
2018-11-04,24.026742394300438\r
2018-11-14,25.547319611406184\r
2018-11-19,26.84090572911262\r
2018-11-22,25.296330282775493\r
2018-11-29,26.54746840319558\r
2019-02-15,62.391283136897556\r
2019-02-17,65.23195454038195\r
2019-02-20,64.81405958602666\r
2019-02-22,63.610131736285425\r
2019-02-25,62.71188083884728\r
2019-02-27,64.03459183138865\r
2019-03-12,70.82139489440262\r
2019-03-22,77.47016997448218\r
2019-03-24,76.80452214166347\r
2019-03-27,77.63693820980237\r
2019-03-29,78.2897404494963\r
2019-04-01,77.66822310724102\r
2019-04-13,81.51709525903665\r
2019-04-18,81.42143504164112\r
2019-05-06,87.75355047761101\r
2019-05-13,88.57611788262035\r
2019-05-16,92.06408356282034\r
2019-05-23,92.27059310916789\r
2019-05-31,96.04179072668549\r
2019-06-02,93.26103016029008\r
2019-06-17,83.525511369387\r
2019-06-25,83.525511369387\r
2019-06-27,86.91767461287228\r
2019-06-30,86.56897020548422\r
2019-07-02,86.65064785014727\r
2019-07-05,91.54583079498012\r
2019-07-07,91.56809732090781\r
2019-07-10,91.3733381458553\r
2019-07-15,93.02002939331125\r
2019-07-17,92.77927633896576\r
2019-07-20,92.74570259076658\r
2019-07-22,92.60586392272018\r
2019-07-25,94.46974508012582\r
2019-08-04,90.97320873675531\r
2019-08-09,94.41902380090713\r
2019-08-14,90.75676324427427\r
2019-08-16,89.9980531082629\r
2019-08-21,96.87151913817374\r
2019-08-24,92.85203601384266\r
2019-08-26,91.81317101460385\r
2019-08-29,91.41784000918206\r
2019-08-31,89.19228738879852\r
2019-09-03,85.43952950848356\r
2019-09-13,84.22980565400408\r
2019-09-15,85.58580680442111\r
2019-09-18,85.73218345341715\r
2019-09-20,86.1501733531468\r
2019-09-30,89.35210765824199\r
2019-10-03,87.29970719965011\r
2020-02-07,88.29610303867473\r
2020-02-12,88.29610303867473\r
2020-02-15,86.25887421038236\r
2020-02-20,86.3839474806127\r
2020-02-22,86.10127572793593\r
2020-03-13,89.60584867600203\r
2020-03-18,89.60584867600203\r
2020-03-21,93.23299409229006\r
2020-03-23,93.23299409229006\r
2020-03-26,92.656196189795\r
2020-03-28,88.24123946179786\r
2020-03-31,83.4825771464656\r
2020-04-02,83.4825771464656\r
2020-04-05,83.55771778944133\r
2020-04-07,81.14002795520378\r
2020-04-10,82.74334259248512\r
2020-04-12,82.75938513569464\r
2020-04-15,84.47767195478164\r
2020-05-07,89.00505663244164\r
2020-05-17,89.00505663244164\r
2020-05-20,96.95123101627141\r
2020-05-22,96.95123101627141\r
2020-05-25,100.0\r
2020-05-27,93.49666527046455\r
2020-05-30,97.26463683599934\r
2020-06-01,97.26463683599934\r
2020-06-26,100.0\r
2020-06-29,100.0\r
2020-07-01,100.0\r
2020-07-04,98.63118793648665\r
2020-07-09,100.0\r
2020-07-11,100.0\r
2020-07-14,99.96494671808198\r
2020-07-19,96.92845353706409\r
2020-07-21,95.08489460893071\r
2020-07-24,97.60128222690273\r
2020-07-29,95.95670528151648\r
2020-07-31,92.02503486205781\r
2020-08-05,88.59260030777283\r
2020-08-08,90.01464010300418\r
2020-08-10,89.18126948993643\r
2020-08-15,87.62769308003932\r
2020-08-20,89.62240692797639\r
2020-08-25,93.33393960285288\r
2020-09-04,86.40026669092674\r
2020-09-07,85.92207877541937\r
2020-09-09,86.61252780927606\r
2020-09-12,89.19779654093198\r
2020-09-14,86.64520172218724\r
2020-09-17,86.3839474806127\r
2020-11-06,80.77954426296635\r
2020-11-08,80.77954426296635\r
2020-11-11,84.72042965532054\r
2020-11-18,79.70192190262497\r
2020-11-21,80.1924780497333\r
2020-11-23,80.52546911254962\r
2020-11-28,79.08121769899428\r
2021-02-14,82.29998887014895\r
2021-02-19,90.62366780847753\r
2021-02-21,85.78099774216908\r
2021-02-24,88.85098394214818\r
2021-02-26,92.14778150169724\r
2021-03-01,89.08213272662714\r
2021-03-06,88.4717574753013\r
2021-03-21,91.40115080200675\r
2021-03-23,92.25942573342671\r
2021-03-26,92.25942573342671\r
2021-03-28,88.58161188901295\r
2021-03-31,89.08763917574727\r
2021-04-02,87.83567003275397\r
2021-04-05,87.51284246325966\r
2021-04-07,85.33124003131776\r
2021-04-15,82.46012803416343\r
2021-04-17,81.92148554644785\r
2021-04-22,78.32636153903691\r
2021-05-27,83.63288527674663\r
2021-05-30,83.63288527674663\r
2021-06-01,84.70963455038188\r
2021-06-09,86.80864468797263\r
2021-06-11,86.56897020548422\r
2021-06-16,90.72348211321474\r
2021-06-26,90.16951058543047\r
2021-07-01,94.32324645795481\r
2021-07-11,89.27493885894447\r
2021-07-19,95.58268521851042\r
2021-07-21,85.31500131417103\r
2021-07-29,89.50100796494921\r
2021-08-20,92.28176102168617\r
2021-08-25,92.71772815369734\r
2021-08-28,91.00097296541402\r
2021-08-30,91.00097296541402\r
2021-09-22,83.13941905731758\r
2021-09-24,84.79601068515568\r
2021-09-27,84.79601068515568\r
2021-10-02,84.77441337404869\r
2021-10-07,91.24544322832865\r
2021-10-09,90.9398961037148\r
2021-10-12,86.24256561173584\r
2021-10-14,85.13104831170565\r
2021-10-17,85.49369469816696\r
2021-10-19,86.4437905699125\r
2021-10-22,86.63975573016947\r
2021-10-24,85.98722414866629\r
2021-10-27,84.06292850374568\r
2021-11-06,83.53087876364397\r
2022-01-25,84.10598099215154\r
2022-01-27,83.8477973996401\r
2022-01-30,83.8477973996401\r
2022-02-09,79.10747961421296\r
2022-02-11,80.1555128746097\r
2022-02-19,79.7440732808514\r
2022-03-06,58.39488626803296\r
2022-03-08,54.685604655486365\r
2022-03-23,41.67557223255247\r
2022-03-26,45.67009510630374\r
2022-04-10,53.142927533901826\r
2022-04-15,56.57183535054716\r
2022-04-17,54.89897843010555\r
2022-04-22,58.16226355705005\r
2022-04-27,65.6606713398458\r
2022-04-30,66.69315448044995\r
2022-05-02,66.69315448044995\r
2022-05-15,83.91769099456886\r
2022-05-17,80.18719689604261\r
2022-05-27,82.07067171275023\r
2022-05-30,82.9198784893294\r
2022-06-01,82.17729924700092\r
2022-06-04,83.55771778944133\r
2022-06-06,83.55771778944133\r
2022-06-11,84.40220376673743\r
2022-06-14,84.48845531105988\r
2022-06-19,85.1148247356181\r
2022-06-21,85.13645644327637\r
2022-06-29,91.8354633392811\r
2022-07-01,90.5848629194574\r
2022-07-04,91.35109044128201\r
2022-07-06,89.27493885894447\r
2022-07-11,83.69733591371063\r
2022-07-14,87.52924603168024\r
2022-07-16,83.92844590802314\r
2022-07-19,86.57985879066608\r
2022-07-21,82.88776994028719\r
2022-07-24,85.55329215135991\r
2022-07-26,83.78330076448717\r
2022-07-31,85.37454927720592\r
2022-08-03,86.69966911889925\r
2022-08-08,85.33124003131776\r
2022-08-10,85.73760671834667\r
2022-08-13,86.48188110444262\r
2022-08-30,81.67662806410219\r
2022-09-02,81.67662806410219\r
2022-09-04,82.96805057221441\r
2022-09-12,84.83381123658225\r
2022-09-19,81.74579740952986\r
2022-09-22,78.72439956044667\r
2022-10-04,67.1847150848717\r
2022-10-09,69.39448663911992\r
2022-10-12,68.77726186641812\r
2022-10-19,71.5820735115658\r
2022-10-22,71.96109273806577\r
2022-10-24,70.6606061396381\r
2022-11-11,71.80433508529292\r
2022-11-13,71.80433508529292\r
2023-02-04,47.70641878927662\r
2023-02-06,47.70641878927662\r
2023-02-09,61.390658107510035\r
2023-02-11,55.65523455164176\r
2023-02-14,56.49828857209324\r
2023-02-16,55.934167442762764\r
2023-02-26,57.90680466589085\r
2023-03-01,56.42018675868044\r
2023-03-06,61.49518408070194\r
2023-03-13,60.76498635778146\r
2023-03-16,65.53388894248717\r
2023-04-05,74.22625223580052\r
2023-04-07,73.92432584633538\r
`;export{r as default};
