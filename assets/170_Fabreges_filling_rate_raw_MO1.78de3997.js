const r=`date,value\r
2017-02-15,4.352253135517478\r
2017-02-18,4.809131099731752\r
2017-02-25,9.79756105682323\r
2017-03-10,69.93091290002114\r
2017-03-17,22.328586398354595\r
2017-03-20,9.402389542585098\r
2017-03-30,15.144551641591498\r
2017-04-06,15.896035902522174\r
2017-04-09,12.978909442079937\r
2017-04-16,22.755320348677813\r
2017-04-19,39.76553783384938\r
2017-05-06,22.52890530574355\r
2017-05-26,36.95882660701049\r
2017-05-29,83.28529640906466\r
2017-06-05,81.76041034300565\r
2017-06-18,90.66857643244835\r
2017-07-05,86.13328690898358\r
2017-08-04,35.782514049929226\r
2017-08-12,23.033568477613795\r
2017-08-14,21.218262587715174\r
2017-08-17,14.633265949081837\r
2017-08-22,10.560158028027045\r
2017-08-24,9.467693393321195\r
2017-09-01,21.072333120942115\r
2017-09-08,8.1584125256236\r
2017-09-13,16.23579777628433\r
2017-09-26,16.47144268922317\r
2017-09-28,19.61696272172601\r
2017-10-08,23.5694073348313\r
2017-10-11,13.538978353634375\r
2017-10-13,12.132982832747663\r
2017-10-16,12.207035914408754\r
2017-10-26,23.82670779813896\r
2017-10-31,18.21305650624237\r
2017-11-17,44.44612992776424\r
2018-01-29,70.54700369098332\r
2018-01-31,69.40495970073582\r
2018-02-25,54.81143253608355\r
2018-03-02,68.4892612769016\r
2018-03-22,35.123238532388555\r
2018-04-01,1.537732621412218\r
2018-04-21,39.69911325442472\r
2018-04-24,75.43497707490333\r
2018-05-06,100.0\r
2018-05-11,100.0\r
2018-06-23,100.0\r
2018-06-25,96.80841292987111\r
2018-07-08,94.55275624320457\r
2018-07-15,95.26761589411562\r
2018-07-18,100.0\r
2018-07-23,93.33347050953316\r
2018-08-02,97.89423553779226\r
2018-08-04,96.9631641847547\r
2018-08-19,99.97901657489031\r
2018-08-27,92.07169401780136\r
2018-09-01,92.12200219702082\r
2018-09-03,94.09460806720408\r
2018-09-16,44.83309567013272\r
2018-09-18,34.81142641677965\r
2018-09-23,25.800430603622697\r
2018-09-26,17.25436825172948\r
2018-10-03,16.428473411004944\r
2018-10-16,37.247798047249006\r
2018-10-21,26.50275783459678\r
2018-10-23,23.878333474739986\r
2018-11-17,16.107971152249085\r
2019-01-26,2.592843952439449\r
2019-02-13,5.6121781707817\r
2019-02-15,5.984381578885202\r
2019-02-18,3.347749710647313\r
2019-02-20,7.947056497907785\r
2019-02-23,5.203001784394646\r
2019-02-25,7.812631938370748\r
2019-02-28,4.4643609232621575\r
2019-03-10,57.84974866774548\r
2019-03-15,61.01004214845589\r
2019-03-22,92.1723239502982\r
2019-03-27,87.59955500332877\r
2019-04-29,84.96907546648504\r
2019-05-01,77.3154209458787\r
2019-05-06,69.09905943170818\r
2019-05-14,68.09865812676918\r
2019-05-16,58.12997333598601\r
2019-05-31,68.70673983243658\r
2019-06-18,92.42413632441378\r
2019-06-25,85.84150040203768\r
2019-06-28,87.45237806818382\r
2019-06-30,95.21646629209953\r
2019-07-05,94.45085054670895\r
2019-07-13,95.26761589411562\r
2019-07-20,91.2686092955225\r
2019-07-23,88.04181924490679\r
2019-07-25,76.39527422425452\r
2019-08-02,79.92077622098034\r
2019-08-09,66.41879735506804\r
2019-08-14,61.421211559624155\r
2019-08-17,55.632034559739864\r
2019-08-22,40.23204566802295\r
2019-08-24,44.0258753139274\r
2019-09-03,36.03525942795961\r
2019-09-08,33.85353809737132\r
2019-09-11,77.8701207844167\r
2019-09-26,17.741661117457987\r
2019-09-28,18.989210594409855\r
2019-10-03,16.708764662786567\r
2019-10-08,9.272451672383697\r
2019-10-11,6.5579867583287\r
2019-10-26,61.092166898533954\r
2020-01-24,86.08462186117094\r
2020-02-05,96.39633982304213\r
2020-02-10,91.3688048351459\r
2020-02-15,100.0\r
2020-02-18,98.72554396170958\r
2020-02-20,95.3187790646716\r
2020-02-23,95.67730117027303\r
2020-03-11,87.10944061522325\r
2020-03-19,84.38990453229435\r
2020-04-03,25.96167913595654\r
2020-04-05,23.697885077928202\r
2020-05-03,75.66307500987517\r
2020-05-05,92.5753866318375\r
2020-05-08,77.9164341844357\r
2020-05-18,87.35432802432456\r
2020-05-20,78.00910178922243\r
2020-05-30,88.23873425321243\r
2020-06-02,95.16533025871156\r
2020-06-22,92.12200219702082\r
2020-06-24,95.01200357119927\r
2020-07-04,90.319460101014\r
2020-07-07,89.97100905760918\r
2020-07-19,85.79291686684839\r
2020-07-24,78.05545599379434\r
2020-07-27,76.76267992370262\r
2020-08-03,54.81143253608355\r
2020-08-06,44.903631091352594\r
2020-08-21,23.749372770028522\r
2020-08-23,16.795479305605344\r
2020-08-26,27.26952814071966\r
2020-08-31,26.312753211361034\r
2020-09-02,27.963270965894004\r
2020-09-05,35.908776900454185\r
2020-09-12,20.781966650962218\r
2020-09-20,27.490589226624284\r
2020-09-30,7.114839281860283\r
2020-10-17,29.893789324635016\r
2020-10-30,30.299149091263526\r
2020-11-09,22.932194073197586\r
2020-11-11,19.61696272172601\r
2021-02-19,43.503330507159696\r
2021-02-24,40.73485760630259\r
2021-02-27,35.24834792462962\r
2021-03-01,47.081267059202055\r
2021-03-04,39.69911325442472\r
2021-03-24,39.0049671059754\r
2021-03-26,29.23369636203896\r
2021-03-29,40.06512721179695\r
2021-03-31,27.46290837907468\r
2021-04-05,67.1484963035533\r
2021-04-08,65.09830941785202\r
2021-04-15,37.05502690042742\r
2021-04-18,25.7467913700901\r
2021-04-23,18.73635125746244\r
2021-05-08,40.03178465483876\r
2021-06-07,95.57479844246302\r
2021-06-09,86.76716874190164\r
2021-06-14,86.47432262159487\r
2021-07-09,92.92877907543394\r
2021-07-19,87.45237806818382\r
2021-08-13,63.95888018175524\r
2021-08-18,50.76131204208934\r
2021-08-26,25.08095391877666\r
2021-09-30,14.491660345845492\r
2021-10-02,11.208322488920437\r
2021-10-07,16.342701181630357\r
2021-10-12,11.119618413551226\r
2021-10-17,17.674817385154622\r
2021-10-22,13.971652485201416\r
2021-10-25,11.031262490908107\r
2021-10-27,6.764179758783727\r
2022-01-23,84.82409929737891\r
2022-01-25,76.90068153091568\r
2022-01-28,74.16391540236859\r
2022-01-30,76.67074687242781\r
2022-02-09,67.49324668934392\r
2022-02-22,72.94835400410363\r
2022-03-09,37.376586621554914\r
2022-04-05,55.47526503390501\r
2022-04-15,87.35432802432456\r
2022-04-18,85.25939466063778\r
2022-05-10,75.84579827455276\r
2022-05-28,77.0388055721227\r
2022-06-09,85.93870822933287\r
2022-06-19,94.19632378122954\r
2022-07-07,92.5753866318375\r
2022-07-09,82.23544207989923\r
2022-07-12,86.18196554190784\r
2022-07-14,75.34383314885133\r
2022-07-17,74.16391540236859\r
2022-07-24,58.93430059992944\r
2022-07-27,66.29043577567771\r
2022-08-08,82.14032698761281\r
2022-08-11,76.53294932779062\r
2022-09-07,12.411829446443098\r
2022-09-10,8.79314126530692\r
2022-09-20,18.78220114477308\r
2022-09-22,18.32619338028966\r
2022-10-05,31.620352875196645\r
2022-10-15,15.144551641591498\r
2022-10-17,30.06718471675426\r
2022-11-01,66.84755508624983\r
2023-01-20,49.49475014706246\r
2023-01-30,99.299082583047\r
2023-02-02,34.346283597327776\r
2023-02-04,33.09066503922922\r
2023-02-09,15.664508656473085\r
2023-02-12,16.99139784979868\r
2023-02-17,16.385559574555312\r
2023-02-19,16.752094269859352\r
2023-03-16,96.13923504308028\r
2023-04-18,49.309824393371336\r
2023-04-20,52.15758791365792\r
`;export{r as default};
