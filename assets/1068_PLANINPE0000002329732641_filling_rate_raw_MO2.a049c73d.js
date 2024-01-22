const r=`date,value\r
2017-01-19,23.437489430989473\r
2017-01-29,23.437489430989473\r
2017-02-11,88.67125553378528\r
2017-02-18,62.29302165207291\r
2017-02-21,88.67125553378528\r
2017-03-10,13.44532835452476\r
2017-03-13,13.44532835452476\r
2017-03-30,76.50874811925452\r
2017-04-02,76.50874811925452\r
2017-04-09,77.61963829256453\r
2017-04-12,74.30543745823152\r
2017-04-19,73.94062230133964\r
2017-04-22,79.11035558315665\r
2017-04-29,89.06234605636301\r
2017-05-02,87.1135019789489\r
2017-05-22,87.50194772243007\r
2017-06-01,91.0276776357466\r
2017-06-18,90.63329636125054\r
2017-06-21,100.0\r
2017-06-28,100.0\r
2017-07-01,99.86891841462199\r
2017-08-05,35.977555964786255\r
2017-08-07,35.977555964786255\r
2017-08-20,18.07095747536152\r
2017-08-27,21.136632866726334\r
2017-09-11,12.510189000562239\r
2017-09-14,12.510189000562239\r
2017-09-16,12.510189000562239\r
2017-09-19,12.510189000562239\r
2017-09-21,12.510189000562239\r
2017-10-14,13.44532835452476\r
2017-10-16,13.44532835452476\r
2017-10-19,13.44532835452476\r
2017-10-21,16.608012935144604\r
2017-10-26,17.859073821323452\r
2017-10-31,17.229189791316017\r
2017-11-05,17.021159724359585\r
2017-11-08,18.07095747536152\r
2017-11-13,18.92803352475975\r
2017-11-15,16.814099847685448\r
2017-11-23,18.49759239410202\r
2017-11-25,20.24199243854305\r
2017-11-28,18.49759239410202\r
2017-12-08,21.136632866726334\r
2017-12-15,29.323167885617718\r
2017-12-18,29.323167885617718\r
2018-01-17,80.6119205729445\r
2018-01-19,87.1135019789489\r
2018-01-27,87.1135019789489\r
2018-02-08,100.0\r
2018-02-26,84.41298201775089\r
2018-02-28,84.41298201775089\r
2018-03-05,84.41298201775089\r
2018-03-08,84.41298201775089\r
2018-03-20,87.1135019789489\r
2018-04-17,92.21475568697609\r
2018-04-19,96.61761265539059\r
2018-04-22,84.41298201775089\r
2018-04-24,84.41298201775089\r
2018-05-04,85.18123071579727\r
2018-05-07,85.18123071579727\r
2018-05-09,92.61175757992928\r
2018-05-19,84.02985900760905\r
2018-05-22,76.50874811925452\r
2018-06-23,85.18123071579727\r
2018-06-26,89.06234605636301\r
2018-06-28,89.45409607396869\r
2018-07-01,92.21475568697609\r
2018-07-08,85.18123071579727\r
2018-07-11,98.23810885954595\r
2018-07-13,98.23810885954595\r
2018-07-16,90.63329636125054\r
2018-07-18,92.21475568697609\r
2018-07-21,90.23957189748005\r
2018-07-23,92.61175757992928\r
2018-07-26,87.50194772243007\r
2018-07-28,88.28082518358406\r
2018-08-02,84.79677282256037\r
2018-08-05,75.7715698275031\r
2018-08-22,36.25448204270797\r
2018-09-01,33.25335280294294\r
2018-09-04,19.80025333541597\r
2018-09-09,25.34311585620171\r
2018-09-11,20.24199243854305\r
2018-09-14,26.56293374884075\r
2018-09-26,17.43818730330186\r
2018-09-29,20.687458574799514\r
2018-10-01,20.687458574799514\r
2018-10-04,18.712338465370003\r
2018-10-09,21.362604766158796\r
2018-10-19,25.828404144028504\r
2018-10-21,31.658568209631007\r
2018-10-24,25.585318897886815\r
2018-11-15,40.794948473885455\r
2018-11-18,35.701444660859174\r
2019-01-17,76.8783625799667\r
2019-01-22,76.8783625799667\r
2019-01-24,87.89105568564953\r
2019-02-03,87.89105568564953\r
2019-02-13,79.48473172625403\r
2019-02-16,79.48473172625403\r
2019-02-18,79.48473172625403\r
2019-02-23,78.36363797851455\r
2019-02-26,74.30543745823152\r
2019-03-13,81.74518453076813\r
2019-03-20,73.94062230133964\r
2019-03-23,73.94062230133964\r
2019-03-30,89.06234605636301\r
2019-04-09,89.06234605636301\r
2019-04-12,84.02985900760905\r
2019-04-14,84.02985900760905\r
2019-04-17,85.18123071579727\r
2019-04-19,78.36363797851455\r
2019-04-27,86.72571914282084\r
2019-05-12,83.64740450110696\r
2019-05-14,97.4265690960863\r
2019-05-24,81.74518453076813\r
2019-05-27,81.74518453076813\r
2019-06-01,100.0\r
2019-06-18,84.02985900760905\r
2019-06-26,89.06234605636301\r
2019-06-28,80.98900119338967\r
2019-07-01,80.98900119338967\r
2019-07-03,87.89105568564953\r
2019-07-06,84.79677282256037\r
2019-07-08,82.50405913452404\r
2019-07-11,82.50405913452404\r
2019-07-13,81.36675608983104\r
2019-07-16,82.12428578758366\r
2019-07-23,79.11035558315665\r
2019-07-28,74.67094057463144\r
2019-07-31,60.59555222929376\r
2019-08-02,60.59555222929376\r
2019-08-07,60.59555222929376\r
2019-08-10,52.38118107553446\r
2019-08-12,52.38118107553446\r
2019-08-22,30.09400486500126\r
2019-08-25,30.09400486500126\r
2019-08-27,30.09400486500126\r
2019-09-01,28.560022253235513\r
2019-09-06,25.34311585620171\r
2019-09-11,11.601112832614161\r
2019-09-16,11.068368778755099\r
2019-09-19,5.5985906643916445\r
2019-09-21,5.5985906643916445\r
2019-09-24,5.734730795403321\r
2019-12-13,50.16406718792307\r
2019-12-20,67.49250791182743\r
2019-12-23,67.49250791182743\r
2019-12-25,67.49250791182743\r
2019-12-30,67.49250791182743\r
2020-01-19,61.9520903885273\r
2020-01-22,67.14091803866035\r
2020-02-06,68.1977975028979\r
2020-02-11,58.24942410036231\r
2020-02-13,58.24942410036231\r
2020-02-18,99.46025132059934\r
2020-02-26,99.46025132059934\r
2020-03-02,99.46025132059934\r
2020-03-19,54.95979092054951\r
2020-03-24,63.66390605267425\r
2020-03-27,59.58572092572126\r
2020-03-29,60.933606881061195\r
2020-04-01,60.933606881061195\r
2020-04-08,65.39355231899451\r
2020-04-11,75.7715698275031\r
2020-04-13,75.7715698275031\r
2020-04-16,79.85978510057893\r
2020-04-18,77.99129801843729\r
2020-04-23,84.41298201775089\r
2020-04-26,84.41298201775089\r
2020-04-28,80.98900119338967\r
2020-05-13,100.0\r
2020-05-18,100.0\r
2020-05-21,83.64740450110696\r
2020-05-26,93.80668171362723\r
2020-05-28,83.64740450110696\r
2020-05-31,83.26561920996694\r
2020-06-02,86.72571914282084\r
2020-06-22,52.70090587393202\r
2020-06-25,93.40772124487721\r
2020-07-07,71.76622299803869\r
2020-07-12,84.79677282256037\r
2020-07-17,76.50874811925452\r
2020-07-20,80.23551496289883\r
2020-07-22,76.8783625799667\r
2020-07-27,76.8783625799667\r
2020-07-30,74.30543745823152\r
2020-08-04,68.90589454651382\r
2020-08-06,57.91716787411687\r
2020-08-09,60.933606881061195\r
2020-08-11,39.354034186723425\r
2020-08-14,39.354034186723425\r
2020-08-21,36.25448204270797\r
2020-09-10,14.797486640254073\r
2020-09-13,20.911583367588914\r
2020-09-15,18.283797869484943\r
2020-11-04,29.323167885617718\r
2020-11-12,42.845424754782144\r
2020-11-14,36.810772706046116\r
2020-11-19,41.96193030034969\r
2020-11-22,47.983899780197135\r
2020-11-29,50.16406718792307\r
2020-12-04,51.74397179783621\r
2020-12-12,60.59555222929376\r
2020-12-17,68.90589454651382\r
2020-12-29,68.1977975028979\r
2021-01-08,72.48825712404422\r
2021-02-17,86.33859990426926\r
2021-02-27,88.67125553378528\r
2021-03-02,82.88450384867991\r
2021-03-07,82.88450384867991\r
2021-03-09,82.88450384867991\r
2021-03-22,72.12689368536994\r
2021-03-24,86.72571914282084\r
2021-03-29,86.33859990426926\r
2021-04-01,83.64740450110696\r
2021-04-03,81.36675608983104\r
2021-04-08,71.40624587258694\r
2021-04-13,70.33048402501898\r
2021-04-18,76.8783625799667\r
2021-04-21,75.7715698275031\r
2021-04-23,81.36675608983104\r
2021-04-26,87.50194772243007\r
2021-04-28,72.48825712404422\r
2021-05-01,72.48825712404422\r
2021-05-03,73.57649589421993\r
2021-05-08,67.84480135120128\r
2021-05-11,74.67094057463144\r
2021-05-28,84.41298201775089\r
2021-05-31,84.41298201775089\r
2021-06-05,82.88450384867991\r
2021-06-10,76.50874811925452\r
2021-06-15,92.21475568697609\r
2021-07-17,83.26561920996694\r
2021-07-20,88.28082518358406\r
2021-07-22,84.79677282256037\r
2021-08-11,59.921608309277\r
2021-08-14,68.90589454651382\r
2021-08-26,28.307357735859817\r
2021-09-03,28.307357735859817\r
2021-09-05,28.560022253235513\r
2021-09-23,13.44532835452476\r
2021-09-30,17.648149543157363\r
2021-10-03,17.648149543157363\r
2021-10-08,15.192886797845496\r
2021-10-15,10.031952653997207\r
2021-10-23,20.020655814266522\r
2021-10-28,21.362604766158796\r
2021-11-09,22.275670967642796\r
2021-11-17,33.52206401073895\r
2021-11-19,29.579261264485506\r
2021-11-22,36.25448204270797\r
2021-11-24,29.579261264485506\r
2021-12-17,50.16406718792307\r
2022-01-06,80.6119205729445\r
2022-01-11,80.6119205729445\r
2022-01-13,80.6119205729445\r
2022-01-21,78.36363797851455\r
2022-02-05,87.1135019789489\r
2022-02-07,87.1135019789489\r
2022-02-12,87.1135019789489\r
2022-03-07,73.57649589421993\r
2022-03-09,75.7715698275031\r
2022-03-12,75.7715698275031\r
2022-03-14,75.7715698275031\r
2022-03-22,92.21475568697609\r
2022-03-24,66.09037841230496\r
2022-03-27,62.29302165207291\r
2022-04-01,62.29302165207291\r
2022-04-03,63.66390605267425\r
2022-04-11,73.94062230133964\r
2022-04-13,73.94062230133964\r
2022-04-16,78.36363797851455\r
2022-04-21,74.30543745823152\r
2022-04-26,77.99129801843729\r
2022-05-01,89.84650491177908\r
2022-05-03,89.84650491177908\r
2022-05-06,89.84650491177908\r
2022-05-08,89.84650491177908\r
2022-05-11,80.23551496289883\r
2022-05-13,80.6119205729445\r
2022-05-16,80.6119205729445\r
2022-05-21,80.6119205729445\r
2022-05-28,85.9521449561433\r
2022-05-31,83.64740450110696\r
2022-06-02,87.89105568564953\r
2022-06-12,93.40772124487721\r
2022-06-15,93.40772124487721\r
2022-06-17,100.0\r
2022-06-27,93.40772124487721\r
2022-07-02,84.79677282256037\r
2022-07-05,87.1135019789489\r
2022-07-10,84.79677282256037\r
2022-07-12,86.72571914282084\r
2022-07-15,82.88450384867991\r
2022-07-17,80.23551496289883\r
2022-07-20,80.23551496289883\r
2022-07-30,54.63487053721534\r
2022-08-06,55.28544940215128\r
2022-08-09,37.37030511561928\r
2022-08-11,30.09400486500126\r
2022-08-24,12.326274322725713\r
2022-08-29,13.256236680110762\r
2022-09-05,10.545278831748679\r
2022-09-08,10.545278831748679\r
2022-09-18,12.326274322725713\r
2022-09-20,15.793451433654909\r
2022-09-25,15.793451433654909\r
2022-09-30,15.793451433654909\r
2022-10-08,11.961586755808264\r
2022-10-20,25.585318897886815\r
2022-10-23,25.585318897886815\r
2022-11-02,24.62181963288686\r
2022-11-04,24.62181963288686\r
2022-11-12,24.861364240159787\r
2022-11-19,21.136632866726334\r
2022-11-22,15.192886797845496\r
2022-11-29,15.793451433654909\r
2022-12-09,31.658568209631007\r
2023-01-11,82.12428578758366\r
2023-01-13,82.12428578758366\r
2023-01-16,82.12428578758366\r
2023-01-18,82.12428578758366\r
2023-01-21,74.67094057463144\r
2023-02-10,89.84650491177908\r
2023-02-12,89.84650491177908\r
2023-02-15,67.84480135120128\r
2023-02-20,72.48825712404422\r
2023-02-27,81.36675608983104\r
2023-03-02,70.68837556682396\r
2023-03-04,66.79003258937672\r
2023-03-07,66.79003258937672\r
2023-03-17,65.0462019890799\r
2023-03-24,65.0462019890799\r
2023-03-27,65.0462019890799\r
2023-04-18,71.76622299803869\r
2023-04-21,82.12428578758366\r
2023-05-26,85.56635499393512\r
2023-05-28,85.56635499393512\r
2023-05-31,88.28082518358406\r
2023-06-02,90.63329636125054\r
2023-06-05,88.28082518358406\r
2023-06-07,88.67125553378528\r
2023-06-12,88.67125553378528\r
2023-06-15,91.4227150560857\r
2023-06-22,100.0\r
2023-06-25,94.60655668325174\r
2023-06-27,92.21475568697609\r
2023-07-07,72.8503125069657\r
2023-07-10,76.8783625799667\r
2023-07-15,76.8783625799667\r
2023-07-17,74.30543745823152\r
2023-07-22,74.30543745823152\r
2023-08-09,29.067929092274543\r
2023-08-14,29.067929092274543\r
2023-08-16,29.067929092274543\r
2023-08-19,29.323167885617718\r
2023-08-21,20.687458574799514\r
2023-09-03,1.1317858961390406\r
2023-09-05,1.1317858961390406\r
2023-09-10,1.1317858961390406\r
2023-09-13,1.1317858961390406\r
2023-09-18,1.9531829583054745\r
2023-09-30,1.1317858961390406\r
2023-10-03,1.1317858961390406\r
2023-10-05,1.1317858961390406\r
2023-10-08,1.60423513226931\r
2023-10-10,1.2822367659609335\r
2023-11-17,62.29302165207291\r
2023-11-22,62.29302165207291\r
2023-12-24,91.0276776357466\r
`;export{r as default};
