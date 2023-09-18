const r=`date,value\r
2017-06-12,53.23929906745741\r
2017-06-19,53.23929906745741\r
2017-06-22,53.23929906745741\r
2017-07-07,76.10111612763043\r
2017-07-09,76.10111612763043\r
2017-07-12,98.15311421256499\r
2017-07-14,98.15311421256499\r
2017-07-17,98.15311421256499\r
2017-07-22,85.43194534022109\r
2017-08-21,82.96186774684492\r
2017-08-23,82.96186774684492\r
2017-08-26,100.0\r
2017-09-05,78.09764175608679\r
2017-10-05,80.51702233992305\r
2017-10-07,80.51702233992305\r
2017-10-10,80.51702233992305\r
2017-10-12,80.51702233992305\r
2017-10-15,84.19376680148837\r
2017-10-17,80.11201747111815\r
2017-10-22,80.11201747111815\r
2017-10-25,80.11201747111815\r
2018-03-14,64.88080192907864\r
2018-03-16,64.88080192907864\r
2018-03-19,64.88080192907864\r
2018-03-21,64.88080192907864\r
2018-03-24,64.88080192907864\r
2018-04-18,82.96186774684492\r
2018-04-20,82.96186774684492\r
2018-04-25,82.96186774684492\r
2018-06-27,82.55263507700697\r
2018-06-29,82.55263507700697\r
2018-07-02,77.6969041178279\r
2018-07-04,76.89757533500074\r
2018-07-07,96.85362294972954\r
2018-07-09,96.85362294972954\r
2018-07-12,96.85362294972954\r
2018-07-17,96.85362294972954\r
2018-07-19,70.22008190902513\r
2018-07-22,70.22008190902513\r
2018-07-24,70.22008190902513\r
2018-07-27,87.50945460426524\r
2018-07-29,87.50945460426524\r
2018-08-01,92.14047631580432\r
2018-08-03,92.14047631580432\r
2018-08-06,92.14047631580432\r
2018-08-11,81.7362766368991\r
2018-08-16,79.70772103824363\r
2018-08-18,79.70772103824363\r
2018-08-21,87.92702900865862\r
2018-08-23,81.7362766368991\r
2018-08-26,99.45859626639796\r
2018-08-28,99.45859626639796\r
2018-08-31,99.45859626639796\r
2018-09-02,82.55263507700697\r
2018-09-05,86.26087242750985\r
2018-09-07,16.28674280107618\r
2018-09-10,100.0\r
2018-09-12,100.0\r
2018-09-17,82.96186774684492\r
2018-09-20,94.27271129767185\r
2018-09-25,100.0\r
2018-09-27,100.0\r
2018-10-02,87.09256969793493\r
2018-10-05,90.44689886416651\r
2018-10-10,76.89757533500074\r
2018-10-12,76.89757533500074\r
2018-10-15,76.89757533500074\r
2018-10-20,76.49898646275875\r
2018-10-22,76.49898646275875\r
2018-10-25,76.49898646275875\r
2018-10-30,76.49898646275875\r
2018-11-04,83.78243466563899\r
2018-11-09,83.78243466563899\r
2018-11-11,83.78243466563899\r
2018-11-14,83.78243466563899\r
2019-02-12,6.0460537598045105\r
2019-02-14,6.0460537598045105\r
2019-02-17,13.795257325599017\r
2019-02-19,13.795257325599017\r
2019-02-22,5.2397132392941055\r
2019-02-24,5.2397132392941055\r
2019-02-27,26.757404404859088\r
2019-03-04,70.22008190902513\r
2019-03-24,61.52640875540136\r
2019-03-26,61.52640875540136\r
2019-03-29,61.52640875540136\r
2019-03-31,61.52640875540136\r
2019-04-05,61.52640875540136\r
2019-05-23,99.89508404030859\r
2019-05-25,99.89508404030859\r
2019-05-30,84.60579665451606\r
2019-06-02,84.60579665451606\r
2019-06-04,84.60579665451606\r
2019-06-07,100.0\r
2019-06-12,85.84606209910636\r
2019-06-27,42.74607819436046\r
2019-06-29,42.74607819436046\r
2019-07-02,42.74607819436046\r
2019-07-04,42.74607819436046\r
2019-07-07,66.39135290956534\r
2019-07-09,66.39135290956534\r
2019-07-12,58.23424349480371\r
2019-07-14,87.50945460426524\r
2019-07-17,61.52640875540136\r
2019-07-19,61.52640875540136\r
2019-07-22,63.009628663969764\r
2019-07-24,55.71736822237754\r
2019-07-29,62.6376763138772\r
2019-08-01,51.49330975466739\r
2019-08-03,54.65055555033782\r
2019-08-06,54.65055555033782\r
2019-08-08,49.424915208714914\r
2019-08-11,49.424915208714914\r
2019-08-13,49.424915208714914\r
2019-08-16,49.424915208714914\r
2019-08-26,45.70995656887581\r
2019-08-28,45.70995656887581\r
2019-08-31,45.70995656887581\r
2019-09-02,45.70995656887581\r
2019-09-07,45.70995656887581\r
2019-09-15,30.437179671579973\r
2019-09-17,30.437179671579973\r
2019-09-20,40.488872968957246\r
2019-09-22,40.488872968957246\r
2019-09-27,40.488872968957246\r
2019-09-30,21.170537297234443\r
2019-10-30,4.7754226495425955\r
2020-07-31,1.2505732677634556\r
2020-08-05,1.347531017894446\r
2020-08-07,1.347531017894446\r
2020-08-10,1.347531017894446\r
2020-08-15,1.347531017894446\r
2020-08-25,1.4469698706862315\r
2020-08-27,1.4469698706862315\r
2020-09-01,1.4469698706862315\r
2020-09-09,1.2505732677634556\r
2023-05-27,52.88848854399946\r
2023-05-29,52.88848854399946\r
2023-06-01,54.65055555033782\r
2023-06-03,54.65055555033782\r
2023-06-06,54.65055555033782\r
`;export{r as default};
