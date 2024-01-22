const n=`date,value\r
2017-02-15,49.54881208875578\r
2017-03-27,95.84853529118212\r
2017-04-03,92.8985574768082\r
2017-05-16,99.58387743196711\r
2017-05-26,93.12198249730942\r
2017-08-14,80.0470155529333\r
2017-08-29,75.92031585325071\r
2017-10-15,40.69024047047567\r
2017-10-18,22.56952391429243\r
2017-11-22,9.48152826044711\r
2018-02-22,95.67458961867449\r
2018-03-24,100.0\r
2018-04-18,100.0\r
2018-05-06,94.31299762368938\r
2018-05-08,100.0\r
2018-06-20,96.72576579570001\r
2018-06-27,96.47725939914224\r
2018-07-27,93.38205237954585\r
2018-08-06,90.54003473674322\r
2018-09-20,47.51590471680428\r
2018-09-25,45.273911813447896\r
2018-09-30,37.9519401895063\r
2018-10-05,38.764716431220016\r
2018-10-10,42.19521492871381\r
2018-10-13,21.228785618045297\r
2018-10-20,19.80002839081654\r
2018-11-14,18.69302282054655\r
2019-02-15,70.65076767483419\r
2019-02-17,75.02376270947448\r
2019-02-25,78.11895480996927\r
2019-02-27,81.76341535428153\r
2019-03-22,87.00652200438593\r
2019-03-24,92.99013170928193\r
2019-03-29,92.10839280851674\r
2019-04-01,85.78170749986353\r
2019-04-11,90.39818906295807\r
2019-05-01,92.11876911344817\r
2019-05-13,96.78114296228897\r
2019-06-02,91.54533047674384\r
2019-06-27,88.61122533333392\r
2019-07-02,91.0195351725154\r
2019-07-05,92.08125870442001\r
2019-07-25,86.76607979045399\r
2019-08-24,70.40051558429782\r
2019-08-26,69.42734505277312\r
2019-08-31,67.66668119851053\r
2019-09-03,62.45253729887851\r
2019-09-15,52.18773217876637\r
2019-09-20,45.128998521084526\r
2019-12-04,18.46641011854484\r
2019-12-29,33.258220760520594\r
2020-01-16,41.795401284665914\r
2020-01-21,47.1850117981063\r
2020-01-23,48.38090313205799\r
2020-01-26,51.786289330772995\r
2020-02-07,77.43238016627099\r
2020-02-15,76.39519228180221\r
2020-03-26,88.30565737343373\r
2020-03-28,92.21458959042556\r
2020-04-02,93.47235171584835\r
2020-04-05,87.14303358138913\r
2020-04-17,94.9671812391798\r
2020-04-20,92.41124281490606\r
2020-04-22,93.33370322672566\r
2020-04-27,92.95156632822072\r
2020-05-07,91.39681143399697\r
2020-05-15,90.13383281860493\r
2020-05-17,86.86250621191196\r
2020-05-27,90.20301584200264\r
2020-05-30,93.21129827218017\r
2020-06-01,92.2018094391589\r
2020-06-24,89.63103375842213\r
2020-07-29,84.84519038965571\r
2020-07-31,88.21273984987636\r
2020-08-05,88.10597055660784\r
2020-08-08,77.2631696248937\r
2020-08-20,79.28957821847095\r
2020-09-17,47.62473556604393\r
2020-09-22,42.15625728502412\r
2020-11-21,19.823076812827324\r
2020-11-28,18.30020569950247\r
2021-02-21,89.5605977771027\r
2021-02-24,88.7448556333276\r
2021-03-01,89.42922246300895\r
2021-03-06,90.74204296077176\r
2021-03-23,98.41195239346474\r
2021-03-28,97.3967611693063\r
2021-03-31,92.75810763409034\r
2021-04-02,95.68360958316171\r
2021-04-25,98.19879338687171\r
2021-04-27,97.47982868895517\r
2021-06-01,100.0\r
2021-06-14,97.42333730415692\r
2021-06-16,100.0\r
2021-07-19,97.58040764174127\r
2021-08-25,85.02150392712758\r
2021-09-02,79.1827116967708\r
2021-09-24,51.22690776371084\r
2021-10-09,31.87560216830598\r
2021-10-14,33.86455673125591\r
2021-10-24,23.03982697770997\r
2021-10-29,15.67248828095907\r
2021-11-23,23.21872086022044\r
2021-12-18,18.62957857499238\r
2022-01-15,46.426492678330284\r
2022-02-09,66.25387537473193\r
2022-03-06,90.20380222934986\r
2022-03-08,91.83730714759251\r
2022-03-21,95.64999278464025\r
2022-03-23,96.53418587917893\r
2022-03-26,91.62005179971527\r
2022-03-28,96.1575949147126\r
2022-04-17,100.0\r
2022-04-22,100.0\r
2022-05-15,93.49977627909342\r
2022-06-04,89.97359892879302\r
2022-06-19,92.53129937346331\r
2022-06-21,96.18310743079455\r
2022-07-11,99.48436515691807\r
2022-07-16,99.94964254271059\r
2022-07-19,98.5165620230016\r
2022-07-24,94.60551865549341\r
2022-07-31,94.39906199972089\r
2022-08-03,91.59937986830363\r
2022-08-10,91.58507047161912\r
2022-08-13,86.05595002180844\r
2022-09-22,48.29203708738753\r
2022-10-09,31.87710490874713\r
2023-02-14,68.01354463555938\r
2023-03-01,73.1773072613914\r
2023-03-11,73.38153673317551\r
2023-04-05,94.38444336466965\r
2023-05-15,93.94905973624097\r
2023-05-25,96.38161064480433\r
2023-05-27,100.0\r
2023-06-01,99.29902239240586\r
2023-06-04,96.4607634276127\r
2023-06-06,92.3056845843486\r
2023-06-09,90.57946434633692\r
2023-06-14,95.81159410020553\r
2023-06-16,88.20886979382479\r
2023-06-24,93.51026365141946\r
2023-07-11,97.93426488249285\r
2023-07-14,91.66379180172038\r
2023-09-02,72.84975853326056\r
2023-09-07,67.68014680304101\r
2023-09-09,66.9429961467597\r
2023-09-24,49.901193504834616\r
2023-10-07,34.077198000259195\r
`;export{n as default};
