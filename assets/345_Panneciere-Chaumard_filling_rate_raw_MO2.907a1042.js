const r=`date,value\r
2017-02-25,57.665661323714644\r
2017-03-14,77.8718357264625\r
2017-03-17,78.73053008400875\r
2017-03-27,84.938748201608\r
2017-04-03,88.04933858339024\r
2017-04-06,87.17886488881959\r
2017-04-23,92.03839174307045\r
2017-05-26,92.57639904009915\r
2017-06-02,93.22813084847947\r
2017-06-05,93.61440775952975\r
2017-06-12,92.80825924782778\r
2017-06-15,92.65821058017526\r
2017-06-22,91.78676349161555\r
2017-07-05,93.45709979475428\r
2017-08-21,77.11254747333862\r
2017-08-24,77.11254747333862\r
2017-08-26,74.93194474058636\r
2017-08-29,77.04510064557746\r
2017-08-31,77.06758079516788\r
2017-09-03,70.06463133843272\r
2017-10-05,43.68203422666534\r
2017-10-13,44.263017859267066\r
2017-10-15,41.09210395019123\r
2017-10-18,37.72572336565416\r
2017-10-25,37.809824057266326\r
2017-10-28,35.06932815651175\r
2018-02-22,84.02885262391405\r
2018-02-25,86.30453693550285\r
2018-02-27,83.71856324845088\r
2018-03-14,87.81470449270428\r
2018-03-24,91.35204234075543\r
2018-04-18,94.12111060703285\r
2018-04-21,95.87051093858979\r
2018-05-01,95.90498481112726\r
2018-05-06,92.63775549843571\r
2018-05-08,92.63775549843571\r
2018-05-11,95.88774737251039\r
2018-05-18,95.11998020587036\r
2018-05-21,94.88969703736669\r
2018-06-22,97.14525462972404\r
2018-06-25,96.78888276323609\r
2018-06-27,96.89263655740035\r
2018-07-02,97.01718867773566\r
2018-07-07,96.60567250505818\r
2018-07-12,94.50858168447634\r
2018-07-15,94.5188755589191\r
2018-07-17,94.5188755589191\r
2018-07-27,93.07444800533682\r
2018-08-01,92.31407859809605\r
2018-08-04,91.38598082697825\r
2018-08-06,88.51921531347229\r
2018-08-11,88.7712683372092\r
2018-08-16,85.82853437544225\r
2018-08-19,75.64272410398863\r
2018-08-21,75.78641854949497\r
2018-08-26,74.88103082876732\r
2018-09-08,62.574989342076016\r
2018-09-10,62.574989342076016\r
2018-09-18,62.574989342076016\r
2018-09-20,53.3437349659715\r
2018-09-25,54.852748035860635\r
2018-09-28,49.90324815677151\r
2018-09-30,50.21039581722378\r
2018-10-05,48.09530453460301\r
2018-10-08,46.134989932032724\r
2018-10-10,41.81705483179515\r
2018-10-13,37.16407156718394\r
2018-10-15,37.16407156718394\r
2018-10-18,34.94251565380604\r
2018-10-20,35.22618439725391\r
2018-10-23,30.05348755774805\r
2019-02-15,73.23561217524616\r
2019-02-17,76.15723838165775\r
2019-02-20,76.15723838165775\r
2019-02-22,75.58207967086584\r
2019-02-25,77.88472579648501\r
2019-02-27,77.21214680640598\r
2019-03-04,79.59551738960286\r
2019-03-22,92.9652124576006\r
2019-03-24,92.62071071562363\r
2019-03-27,92.94132272658851\r
2019-03-29,93.9601021248938\r
2019-04-01,93.9601021248938\r
2019-04-06,94.95154637553016\r
2019-04-11,97.2872295151776\r
2019-04-13,98.17175168727867\r
2019-04-21,98.97526221688193\r
2019-05-01,96.82346335636811\r
2019-05-13,100.0\r
2019-05-16,99.02751161593241\r
2019-05-23,98.36982310542514\r
2019-05-28,98.96829630593075\r
2019-05-31,98.5958519354931\r
2019-06-02,99.92061166447044\r
2019-06-05,99.92061166447044\r
2019-06-27,99.9765166939748\r
2019-06-30,100.0\r
2019-07-02,99.91362424872288\r
2019-07-05,100.0\r
2019-07-07,100.0\r
2019-07-10,99.3167865154705\r
2019-07-15,98.62020353289236\r
2019-07-17,97.36343887192493\r
2019-07-20,97.44659841675191\r
2019-07-22,96.08776341280844\r
2019-07-25,95.82225426913669\r
2019-08-01,92.9788646262808\r
2019-08-04,88.32109698072884\r
2019-08-09,88.32109698072884\r
2019-08-14,83.50751548551881\r
2019-08-24,73.4030974180645\r
2019-08-26,72.62991304994357\r
2019-08-29,72.62991304994357\r
2019-08-31,68.81337564455067\r
2019-09-03,68.23216924168555\r
2019-09-10,64.7453286921443\r
2019-09-13,61.805062294543966\r
2019-09-15,61.55706987132267\r
2019-09-18,59.145115949274384\r
2019-09-20,56.819913249592894\r
2019-09-30,55.33954564781928\r
2019-10-03,56.07380004829029\r
2019-10-13,34.11077973234697\r
2020-02-15,79.8617834141844\r
2020-02-22,78.90198780033938\r
2020-03-18,92.19492184591704\r
2020-03-23,92.62752850671056\r
2020-03-26,92.89013715021935\r
2020-03-28,92.34132143319607\r
2020-03-31,92.81167035965076\r
2020-04-02,92.6820766928978\r
2020-04-05,93.122251635134\r
2020-04-07,93.27596005330231\r
2020-04-10,93.66572237912534\r
2020-04-12,94.265066132525\r
2020-04-15,95.09935045510186\r
2020-04-20,96.6160398915394\r
2020-04-22,97.15564075615498\r
2020-04-25,98.0015832708132\r
2020-04-27,97.74824466634404\r
2020-05-07,99.03796256864813\r
2020-05-10,97.41887601065086\r
2020-05-12,97.47432338033722\r
2020-05-15,97.47432338033722\r
2020-05-17,96.6920784138285\r
2020-05-20,97.44659841675191\r
2020-05-25,96.93760772708526\r
2020-05-27,97.8453905005744\r
2020-05-30,98.99616090354344\r
2020-06-01,98.87427206932735\r
2020-06-24,96.92376972343631\r
2020-07-04,97.52978097893792\r
2020-07-06,95.85327550942894\r
2020-07-09,95.86361664635072\r
2020-07-11,93.39214980390705\r
2020-07-14,93.39214980390705\r
2020-07-19,92.5729907344711\r
2020-07-21,91.50140224987022\r
2020-07-24,90.37975210235382\r
2020-07-29,88.95961940045324\r
2020-07-31,89.44454463791031\r
2020-08-05,87.46313423496186\r
2020-08-08,84.37258491532236\r
2020-08-10,84.70683703961379\r
2020-08-15,82.43845866042952\r
2020-08-20,80.55477124177396\r
2020-08-25,75.65230098240322\r
2020-09-02,74.79513905148349\r
2020-09-04,73.69412091134878\r
2020-09-07,67.40948490316431\r
2020-09-09,65.77690923912739\r
2020-09-12,64.90018412160082\r
2020-09-14,62.719131140692156\r
2020-09-17,61.97555748880568\r
2020-09-19,62.1042774082729\r
2020-09-22,59.42829178576137\r
2020-11-06,22.82571810665788\r
2020-11-18,24.59401610821683\r
2020-11-21,24.43894392786606\r
2021-02-21,89.14809985927188\r
2021-02-24,88.45875717505386\r
2021-03-01,88.81834396691474\r
2021-03-06,89.06057498902713\r
2021-03-08,90.97559978226786\r
2021-03-23,93.45026226416314\r
2021-03-28,95.92567106357718\r
2021-03-31,94.59094285789234\r
2021-04-02,96.39840054968928\r
2021-04-07,96.33969974481946\r
2021-04-25,100.0\r
2021-04-27,99.25054281572746\r
2021-06-01,99.1320372336898\r
2021-06-11,98.0328315173929\r
2021-06-14,99.88567617021373\r
2021-06-16,100.0\r
2021-06-19,100.0\r
2021-06-21,100.0\r
2021-07-19,94.8141211499423\r
2021-07-21,96.61949576719606\r
2021-09-02,71.65541118877611\r
2021-09-04,70.66645164475894\r
2021-09-07,68.32789637315284\r
2021-09-17,65.70065353721377\r
2021-09-22,56.630905578113875\r
2021-09-24,55.868239820670276\r
2021-09-27,55.74675609922538\r
2021-10-02,56.04483309512276\r
2021-10-04,55.39436152762946\r
2021-10-14,35.81328109485579\r
2021-10-17,35.81328109485579\r
2021-10-19,36.295281259083524\r
2021-10-22,28.446682893230207\r
2021-10-24,29.1749905448857\r
2022-02-09,72.61101124765425\r
2022-02-26,82.37938000089275\r
2022-03-06,86.87152348281964\r
2022-03-08,86.59788556439347\r
2022-03-23,92.9515609389601\r
2022-03-26,92.99251744496716\r
2022-03-28,92.7468661869498\r
2022-04-17,98.1995433747556\r
2022-04-22,97.89397514996222\r
2022-04-27,96.79234064230589\r
2022-05-07,95.11998020587036\r
2022-05-20,98.25513440117858\r
2022-05-25,98.25513440117858\r
2022-06-11,95.19907435675697\r
2022-06-16,99.63076710662327\r
2022-06-19,98.26208399672939\r
2022-06-21,99.01706102083419\r
2022-06-29,95.28163010712096\r
2022-07-06,95.21283203708322\r
2022-07-11,95.55353994975609\r
2022-07-14,93.71362424976168\r
2022-07-16,94.14509824035386\r
2022-07-19,93.72388996946025\r
2022-07-24,93.33746643201518\r
2022-07-31,90.31888472789804\r
2022-08-03,87.57357846335209\r
2022-08-05,85.2305851889612\r
2022-08-08,84.09491964658625\r
2022-08-10,83.24065593440201\r
2022-08-13,82.78335773489113\r
2022-08-20,83.03987053936847\r
2022-09-12,62.34098840668629\r
2022-09-19,62.93253795351236\r
2022-09-22,57.90846501411012\r
2022-09-24,56.601845603845454\r
2022-10-09,41.6170207308666\r
2022-10-12,41.6170207308666\r
2022-10-19,41.6170207308666\r
2022-10-22,26.615858695184112\r
2022-10-24,34.03190620145467\r
2022-11-01,34.03190620145467\r
2023-02-14,74.70292053088293\r
2023-02-16,74.70292053088293\r
2023-03-01,77.48545549692813\r
2023-04-05,99.69011062460388\r
2023-04-20,98.51933103948741\r
`;export{r as default};