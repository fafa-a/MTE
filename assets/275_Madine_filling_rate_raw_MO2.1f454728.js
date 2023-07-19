const n=`date,value\r
2017-06-02,88.74474710036819\r
2017-06-12,92.7041519830763\r
2017-06-19,92.18234045463326\r
2017-06-22,94.62268240756853\r
2017-09-25,84.15437954483491\r
2017-09-27,84.15437954483491\r
2017-10-15,83.58449679028233\r
2017-10-17,83.58449679028233\r
2017-10-20,85.10830145482461\r
2017-10-30,85.04538713212358\r
2018-02-22,92.20128180015183\r
2018-02-24,92.1681361096175\r
2018-02-27,92.1681361096175\r
2018-03-04,92.1681361096175\r
2018-03-24,84.77609758381001\r
2018-04-18,97.39401677530444\r
2018-04-20,97.39401677530444\r
2018-05-08,98.77947589496178\r
2018-05-15,98.77947589496178\r
2018-05-18,100.0\r
2018-05-25,99.48943464032122\r
2018-05-28,99.48943464032122\r
2018-06-27,91.20558329604907\r
2018-06-29,91.20558329604907\r
2018-07-02,94.91677575005819\r
2018-07-04,94.91677575005819\r
2018-07-07,93.88286060819522\r
2018-07-09,94.05066971864252\r
2018-08-06,89.79269180377153\r
2018-08-11,87.06459371810979\r
2018-08-16,88.03984199605938\r
2018-09-20,85.30172791213857\r
2018-09-22,85.30172791213857\r
2018-09-25,89.65777249657296\r
2018-09-27,89.65777249657296\r
2018-09-30,85.44585893456083\r
2018-10-05,86.10094134499437\r
2018-10-07,87.82862549757917\r
2018-10-10,86.95515002884697\r
2018-10-12,86.13264854053374\r
2018-10-15,86.26862270016514\r
2018-10-17,85.53151176404678\r
2018-10-20,85.8068805376322\r
2018-10-22,86.51827179703037\r
2019-02-17,86.6273569446401\r
2019-02-24,86.6273569446401\r
2019-02-27,87.98930362566448\r
2019-03-29,90.1655687010835\r
2019-03-31,90.1655687010835\r
2019-04-18,90.86742950234681\r
2019-04-20,90.86742950234681\r
2019-04-30,90.86742950234681\r
2019-05-13,98.38868059610607\r
2019-05-15,98.38868059610607\r
2019-05-23,98.59631950634919\r
2019-05-25,98.59631950634919\r
2019-06-02,95.53582444450541\r
2019-06-04,95.53582444450541\r
2019-06-07,95.53582444450541\r
2019-06-27,92.78021179249552\r
2019-06-29,92.78021179249552\r
2019-07-02,92.42403261102793\r
2019-07-04,94.2426907469152\r
2019-07-09,94.2426907469152\r
2019-07-12,94.2426907469152\r
2019-07-17,94.18505764070255\r
2019-07-22,88.4540483998363\r
2019-07-24,88.4540483998363\r
2019-07-29,88.4540483998363\r
2019-08-01,90.27762818221967\r
2019-08-08,89.3001796748202\r
2019-08-11,89.3001796748202\r
2019-08-13,89.3001796748202\r
2019-08-31,87.1741271283321\r
2019-09-02,87.1741271283321\r
2019-09-10,88.02605692876064\r
2019-09-12,86.01944348358033\r
2019-09-15,87.47123093586549\r
2019-09-20,87.1832589634942\r
2019-11-19,84.3195816465529\r
2019-12-04,88.60624163351606\r
2019-12-14,87.21522529533361\r
2019-12-19,89.48582595214168\r
2019-12-29,89.3001796748202\r
2020-02-07,90.2496048089827\r
2020-02-19,90.2496048089827\r
2020-02-22,90.2496048089827\r
2020-03-28,92.26285868782146\r
2020-03-30,92.26285868782146\r
2020-04-02,91.08337778250875\r
2020-04-04,93.00863517508927\r
2020-04-07,91.7757146099103\r
2020-04-12,93.7822688571187\r
2020-04-14,93.61477205731646\r
2020-04-17,94.53601437138472\r
2020-04-19,93.49047213837636\r
2020-04-22,95.27434346813521\r
2020-04-24,94.58415689131583\r
2020-04-27,96.00183330141829\r
2020-05-07,96.75736553878477\r
2020-05-12,97.30570274642241\r
2020-05-17,96.44005953327483\r
2020-05-19,96.44005953327483\r
2020-05-27,96.58642406506048\r
2020-05-29,97.39401677530444\r
2020-06-01,95.84633282224738\r
2020-06-03,99.18617987159307\r
2020-07-21,92.56639716152786\r
2020-07-23,92.56639716152786\r
2020-07-31,92.0356309940626\r
2020-08-05,90.80177239900397\r
2020-08-07,92.76119302938088\r
2020-08-10,92.76119302938088\r
2020-08-12,92.76119302938088\r
2020-08-17,88.63854696727952\r
2020-08-20,88.71703472881924\r
2020-11-18,83.9626530733741\r
2020-11-25,83.9626530733741\r
2020-11-28,84.15884169091558\r
2020-11-30,84.15884169091558\r
2021-02-21,92.07347692329132\r
2021-02-23,91.65772909839343\r
2021-02-28,91.65772909839343\r
2021-03-03,91.79932358158685\r
2021-03-23,96.2256531088595\r
2021-03-28,97.23705014624898\r
2021-03-30,97.23705014624898\r
2021-04-02,95.67644220588942\r
2021-04-04,99.26069478898332\r
2021-04-09,97.57571515650268\r
2021-04-27,100.0\r
2021-06-01,96.09910452997849\r
2021-06-11,96.16723258772043\r
2021-06-13,92.15866733867625\r
2021-06-16,95.5115936227368\r
2021-06-18,95.5115936227368\r
2021-06-21,95.17278250667293\r
2021-07-21,91.2102856405058\r
2021-07-23,91.2102856405058\r
2021-09-04,92.02617109591048\r
2021-09-06,91.7757146099103\r
2021-10-09,89.87650132639716\r
2021-10-14,92.21075342388309\r
2021-10-19,92.21075342388309\r
2021-10-24,91.11156957857928\r
2021-10-29,93.7822688571187\r
2021-11-23,90.45056428491054\r
2022-01-12,92.8610698831049\r
2022-01-14,92.8610698831049\r
2022-02-26,95.6909965635283\r
2022-02-28,95.6909965635283\r
2022-03-03,97.64943954034418\r
2022-03-05,97.64943954034418\r
2022-03-08,96.2548720396048\r
2022-03-10,98.41832583513883\r
2022-03-23,96.11856647904413\r
2022-03-25,96.11856647904413\r
2022-03-28,98.56663933979708\r
2022-04-04,96.23539211016002\r
2022-04-17,99.58899378494964\r
2022-04-22,100.0\r
2022-05-17,99.11170141455568\r
2022-07-16,95.95322175592918\r
2022-07-18,95.95322175592918\r
2022-07-31,94.11304856093726\r
2022-08-02,94.11304856093726\r
2022-08-07,94.11304856093726\r
2022-08-10,94.14184788624279\r
2022-08-12,91.04579756404635\r
2022-08-17,91.04579756404635\r
2022-08-20,91.62471087668837\r
2022-08-22,90.22158710473688\r
2022-08-25,91.77099329040918\r
2022-08-30,91.77099329040918\r
2022-09-01,88.56933064783381\r
2022-09-04,90.71740155822316\r
2022-09-06,90.51137682478763\r
2022-10-09,86.80025832052067\r
2022-11-13,88.0076790270102\r
2022-11-20,88.0076790270102\r
2022-11-23,88.9620225200468\r
2023-02-21,93.49525091463963\r
2023-03-03,96.99211995904574\r
2023-05-27,98.73985574399202\r
2023-05-29,98.73985574399202\r
2023-06-01,100.0\r
2023-06-03,100.0\r
2023-06-06,100.0\r
2023-06-08,100.0\r
2023-06-11,99.5690767648041\r
`;export{n as default};
