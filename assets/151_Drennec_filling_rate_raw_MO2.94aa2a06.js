const n=`date,value\r
2017-01-25,48.49017085859618\r
2017-02-01,48.49017085859618\r
2017-03-16,85.86825624501597\r
2017-04-12,95.47318886557494\r
2017-04-22,96.0299457486688\r
2017-05-02,88.17293530459021\r
2017-05-22,82.29785471195541\r
2017-05-25,97.69273056656182\r
2017-06-01,96.47613568191417\r
2017-06-21,92.05947300590694\r
2017-06-24,91.52430209311648\r
2017-07-01,92.05947300590694\r
2017-07-06,95.22300421762556\r
2017-07-09,95.22300421762556\r
2017-10-02,60.03336122248637\r
2017-10-04,79.48375648815546\r
2017-10-07,79.01360532952431\r
2017-10-14,77.47915676529277\r
2017-10-22,71.74660493772686\r
2018-02-24,87.64549839327907\r
2018-02-26,88.55226474922463\r
2018-03-03,88.57938069145582\r
2018-04-20,99.05520489468138\r
2018-04-22,99.05520489468138\r
2018-04-25,99.05520489468138\r
2018-04-30,99.041126367258\r
2018-05-05,94.0584036948537\r
2018-05-07,95.26468630293012\r
2018-05-15,94.15526927388203\r
2018-05-17,95.96029152244817\r
2018-05-20,96.6017520710805\r
2018-05-22,96.71345729187041\r
2018-05-25,93.96157170359466\r
2018-06-01,93.54695815646772\r
2018-06-26,97.44060014988149\r
2018-06-29,97.62267232814773\r
2018-07-01,97.4265993400655\r
2018-07-14,97.94508034280116\r
2018-07-19,97.86093938884271\r
2018-07-24,97.79084053494796\r
2018-08-03,89.38055768920955\r
2018-08-05,89.01361584633582\r
2018-09-17,61.52625317578712\r
2018-09-27,63.69760468822959\r
2018-09-29,62.162958835083906\r
2018-10-04,62.19906476010376\r
2018-10-07,59.487093134386235\r
2018-10-09,56.12872218445252\r
2018-10-12,56.12872218445252\r
2018-10-19,56.10546924274911\r
2018-11-18,41.489067591653\r
2018-11-21,41.962561758443975\r
2018-11-26,42.078579784954925\r
2019-02-24,83.9567980601355\r
2019-02-26,83.69061831929787\r
2019-03-11,85.86825624501597\r
2019-03-26,86.78227383764752\r
2019-03-28,87.45642219369161\r
2019-03-31,87.45642219369161\r
2019-04-12,89.09511453387805\r
2019-04-17,88.93214228351731\r
2019-04-20,92.40308363898978\r
2019-04-22,92.40308363898978\r
2019-04-27,92.40308363898978\r
2019-04-30,92.03200278606332\r
2019-05-05,92.03200278606332\r
2019-05-12,83.69061831929787\r
2019-05-15,83.69061831929787\r
2019-05-22,86.75534446702319\r
2019-06-26,91.7848951035734\r
2019-06-29,91.7848951035734\r
2019-07-04,96.25295363376914\r
2019-07-06,91.62028100935176\r
2019-07-09,92.37557892409102\r
2019-07-11,92.37557892409102\r
2019-07-14,91.44206142266704\r
2019-07-16,91.73001268058654\r
2019-07-21,89.55741464625781\r
2019-07-24,90.90810445067615\r
2019-08-23,82.76123427590747\r
2019-08-25,82.76123427590747\r
2019-08-30,85.86825624501597\r
2019-09-04,87.18655202102441\r
2019-09-07,87.18655202102441\r
2019-09-14,86.58037218993502\r
2019-09-19,69.76051017686711\r
2019-09-24,69.76051017686711\r
2020-01-22,85.60004844915254\r
2020-02-04,85.68048111238542\r
2020-02-06,84.9307666208916\r
2020-02-11,76.61242361227832\r
2020-02-29,94.41835935169497\r
2020-03-02,94.41835935169497\r
2020-03-12,94.41835935169497\r
2020-03-25,86.41896495461394\r
2020-03-27,86.41896495461394\r
2020-04-01,86.8361410231982\r
2020-04-04,86.49965589190127\r
2020-04-09,89.40775878703683\r
2020-04-11,94.15526927388203\r
2020-04-14,89.25818725312783\r
2020-04-16,92.8022117767344\r
2020-04-21,94.48763466852537\r
2020-04-26,95.90458039929224\r
2020-05-06,97.28662851727383\r
2020-05-19,90.45711806156163\r
2020-05-21,90.45711806156163\r
2020-05-24,95.09799483195351\r
2020-05-26,90.97650159917528\r
2020-05-29,90.85339920798522\r
2020-05-31,90.19780211447039\r
2020-07-18,97.88898366721087\r
2020-07-20,97.88898366721087\r
2020-07-30,97.987159952495\r
2020-08-04,91.23656872181756\r
2020-08-07,91.19548887043982\r
2020-08-09,91.19548887043982\r
2020-08-14,91.19548887043982\r
2020-09-08,84.53004765717247\r
2020-09-13,84.53004765717247\r
2020-09-16,78.25811831186678\r
2020-09-26,78.67463643415856\r
2020-11-05,76.61242361227832\r
2020-11-12,76.56078230601088\r
2020-11-15,76.56078230601088\r
2021-02-28,95.87672892436436\r
2021-03-02,95.87672892436436\r
2021-03-07,95.83495682101159\r
2021-04-04,93.7403676239614\r
2021-04-14,100.0\r
2021-04-19,100.0\r
2021-04-21,100.0\r
2021-04-24,100.0\r
2021-04-26,96.92302174125045\r
2021-05-01,96.92302174125045\r
2021-06-13,100.0\r
2021-06-15,97.3846009765762\r
2021-06-23,100.0\r
2021-07-18,91.59285500452206\r
2021-07-20,89.97962535449726\r
2021-07-28,91.18179697143167\r
2021-08-12,88.56582237081089\r
2021-08-14,92.609456886908\r
2021-09-03,86.71495568957732\r
2021-09-06,89.23100149212527\r
2021-09-13,89.23100149212527\r
2021-09-16,89.08152967483369\r
2021-10-08,76.40592877459335\r
2021-10-11,76.41882920182395\r
2021-10-13,76.41882920182395\r
2021-10-31,64.42700745252448\r
2021-11-05,66.17665524662839\r
2021-11-07,66.59497390514788\r
2021-11-22,71.72134732469392\r
2021-11-25,71.72134732469392\r
2021-11-27,71.72134732469392\r
2021-12-02,71.62034683140092\r
2022-01-14,86.25765919318961\r
2022-01-21,90.79870505752886\r
2022-01-26,92.18312316053922\r
2022-02-05,92.29308132883625\r
2022-03-17,97.73477363429058\r
2022-03-22,95.80711215851252\r
2022-03-25,95.58445299550306\r
2022-03-27,94.61237335621948\r
2022-04-01,93.3812857324141\r
2022-05-19,93.00888461481051\r
2022-05-21,93.07780996536306\r
2022-05-24,93.07780996536306\r
2022-05-29,93.07780996536306\r
2022-05-31,89.01361584633582\r
2022-06-15,100.0\r
2022-06-25,100.0\r
2022-07-08,93.21571224830714\r
2022-07-10,90.82605074609148\r
2022-07-13,92.25184184192888\r
2022-07-15,94.16910995494396\r
2022-07-18,93.57457984228542\r
2022-07-23,95.37586856329355\r
2022-08-07,82.5625357361948\r
2022-08-09,80.67637473903652\r
2022-08-12,82.708232270117\r
2022-09-18,63.346063967537916\r
2022-09-21,63.39451337660028\r
2022-10-11,57.16675688763756\r
2023-01-21,89.04077928425126\r
2023-02-08,89.99325618754581\r
2023-02-13,91.88096594448221\r
2023-02-15,86.029316522107\r
2023-02-23,87.10564576294028\r
`;export{n as default};
