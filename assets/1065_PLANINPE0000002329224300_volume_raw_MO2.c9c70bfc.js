const r=`date,value\r
2017-03-10,55573.4272553453\r
2017-03-13,55573.4272553453\r
2017-03-30,74381.95283897576\r
2017-04-02,74381.95283897576\r
2017-04-09,74987.15911063258\r
2017-04-12,71524.60423744604\r
2017-04-19,67957.02215496571\r
2017-04-22,67957.02215496571\r
2017-04-29,74230.84895964098\r
2017-05-02,74230.84895964098\r
2017-05-19,55854.017983964295\r
2017-05-22,74684.39797932509\r
2017-06-01,75290.2356140564\r
2017-06-18,74533.13587148287\r
2017-06-21,78032.01527666087\r
2017-06-28,78032.01527666087\r
2017-07-01,74987.15911063258\r
2017-08-02,28230.52970267617\r
2017-08-05,28230.52970267617\r
2017-08-07,25901.243640062527\r
2017-08-20,14899.95758105276\r
2017-08-27,17241.454885348674\r
2017-10-14,13227.613176699104\r
2017-10-16,13227.613176699104\r
2017-10-19,14106.58634832207\r
2017-10-21,13034.279837150776\r
2017-10-26,12554.179353307767\r
2017-10-31,13518.982266457788\r
2017-11-05,14303.878044097703\r
2017-11-08,13034.279837150776\r
2017-11-13,14303.878044097703\r
2017-11-15,14303.878044097703\r
2017-11-23,13324.554308065244\r
2017-11-25,14899.95758105276\r
2017-11-28,15100.036923787176\r
2017-12-08,15401.440087871604\r
2017-12-15,18497.24545662771\r
2017-12-18,18497.24545662771\r
2018-01-17,57403.74561608965\r
2018-01-19,65897.85445738281\r
2018-01-27,65897.85445738281\r
2018-02-08,73928.87897280976\r
2018-02-21,87665.15233296661\r
2018-02-26,87822.8702863242\r
2018-02-28,87822.8702863242\r
2018-03-05,75593.62687381417\r
2018-03-08,75593.62687381417\r
2018-03-20,76353.47806841986\r
2018-04-17,76201.35121435345\r
2018-04-19,80181.85688531863\r
2018-04-22,74684.39797932509\r
2018-04-24,74684.39797932509\r
2018-05-04,77115.28317635313\r
2018-05-07,77115.28317635313\r
2018-05-09,77115.28317635313\r
2018-05-19,74079.82431151012\r
2018-05-22,74079.82431151012\r
2018-06-13,68400.38931784617\r
2018-06-21,68400.38931784617\r
2018-06-23,74835.73908485868\r
2018-06-26,75593.62687381417\r
2018-06-28,75593.62687381417\r
2018-07-01,73175.34467245024\r
2018-07-08,72273.7372399611\r
2018-07-11,71524.60423744604\r
2018-07-13,71375.01932061609\r
2018-07-16,74381.95283897576\r
2018-07-18,69734.93301751325\r
2018-07-21,72874.48887832343\r
2018-07-23,67514.39924766964\r
2018-07-26,69586.32258676426\r
2018-07-28,75290.2356140564\r
2018-08-02,69883.62511478167\r
2018-08-05,61541.07836164782\r
2018-08-22,30490.293885133426\r
2018-09-01,30490.293885133426\r
2018-09-04,14008.205924015838\r
2018-09-09,14008.205924015838\r
2018-09-11,13324.554308065244\r
2018-09-14,11328.073054037903\r
2018-09-24,11235.11501683066\r
2018-09-26,2857.628339801069\r
2018-09-29,1636.0415632251727\r
2018-10-01,1636.0415632251727\r
2018-10-04,1636.0415632251727\r
2018-10-21,29.912082104849848\r
2018-10-24,29.912082104849848\r
2018-11-15,2988.8933202076005\r
2018-11-18,4306.833508772695\r
2019-01-09,72273.7372399611\r
2019-01-14,72273.7372399611\r
2019-01-17,78644.71773737743\r
2019-01-22,78644.71773737743\r
2019-01-24,75745.44034571681\r
2019-02-03,78032.01527666087\r
2019-02-13,74835.73908485868\r
2019-02-16,74835.73908485868\r
2019-02-18,74835.73908485868\r
2019-02-23,75593.62687381417\r
2019-02-26,72273.7372399611\r
2019-03-13,72123.74978818769\r
2019-03-23,65166.41169395998\r
2019-03-30,73476.51959850022\r
2019-04-09,73325.89228371669\r
2019-04-12,68400.38931784617\r
2019-04-14,68400.38931784617\r
2019-04-17,71225.51515556625\r
2019-04-19,67809.3983746329\r
2019-04-27,70926.7494093657\r
2019-05-12,80335.99176835542\r
2019-05-14,80181.85688531863\r
2019-05-24,73476.51959850022\r
2019-05-27,73476.51959850022\r
2019-06-01,78185.07506966004\r
2019-06-26,72273.7372399611\r
2019-06-28,68400.38931784617\r
2019-07-01,71824.01599915167\r
2019-07-03,69140.98213937713\r
2019-07-06,71375.01932061609\r
2019-07-08,71824.01599915167\r
2019-07-11,71824.01599915167\r
2019-07-13,68696.37974469227\r
2019-07-16,67219.73194959953\r
2019-07-23,59820.08814285889\r
2019-07-28,55854.017983964295\r
2019-07-31,55854.017983964295\r
2019-08-02,38162.722369895135\r
2019-08-07,38162.722369895135\r
2019-08-22,14899.95758105276\r
2019-08-25,14899.95758105276\r
2019-08-27,14899.95758105276\r
2019-09-01,11049.793145754391\r
2019-09-06,11049.793145754391\r
2019-09-11,4525.821495533293\r
2019-09-16,4599.4353799414275\r
2019-09-19,3948.185081622842\r
2019-09-21,3948.185081622842\r
2019-09-24,3121.6613748856576\r
2019-10-21,6940.312500160641\r
2019-10-26,6940.312500160641\r
2019-11-18,43076.027875235966\r
2019-11-23,49358.2902338351\r
2019-12-03,49358.2902338351\r
2019-12-13,59106.737472171335\r
2019-12-20,73175.34467245024\r
2019-12-23,73175.34467245024\r
2019-12-25,73175.34467245024\r
2019-12-30,75138.65797938776\r
2020-01-19,66925.39718446505\r
2020-01-22,67219.73194959953\r
2020-02-06,72573.95285384114\r
2020-02-11,68104.72863020872\r
2020-02-13,68104.72863020872\r
2020-02-18,68104.72863020872\r
2020-03-19,67661.85737639495\r
2020-03-24,73778.01302196237\r
2020-03-27,68696.37974469227\r
2020-03-29,70926.7494093657\r
2020-04-01,69140.98213937713\r
2020-04-08,74533.13587148287\r
2020-04-11,73024.8768441144\r
2020-04-13,71973.84268090395\r
2020-04-16,70628.30765808333\r
2020-04-18,79566.08131747143\r
2020-04-23,79105.05380603472\r
2020-04-26,79105.05380603472\r
2020-04-28,77267.87784035996\r
2020-05-13,84370.05965406095\r
2020-05-18,84995.18322819158\r
2020-05-21,84995.18322819158\r
2020-05-26,80027.79832746767\r
2020-05-28,80027.79832746767\r
2020-05-31,73928.87897280976\r
2020-06-02,71824.01599915167\r
2020-06-22,59106.737472171335\r
2020-06-25,63129.63312704432\r
2020-07-07,66631.39566010305\r
2020-07-12,73627.22653758702\r
2020-07-17,60966.018234672534\r
2020-07-20,62406.26957480367\r
2020-07-22,62117.52674513137\r
2020-07-27,66337.72808817767\r
2020-07-30,61541.07836164782\r
2020-08-04,61109.65277245724\r
2020-08-06,46658.10353217969\r
2020-08-09,36769.514481286875\r
2020-08-11,31092.35177171708\r
2020-08-14,31092.35177171708\r
2020-08-21,28820.844271853955\r
2020-09-08,22174.501435159873\r
2020-09-10,22174.501435159873\r
2020-09-13,16110.631353654022\r
2020-09-15,16110.631353654022\r
2020-11-04,49766.674996533955\r
2020-11-12,50449.23796450558\r
2020-11-14,50449.23796450558\r
2020-11-19,50449.23796450558\r
2020-11-22,37908.4205276802\r
2020-11-29,42813.64403421532\r
2020-12-04,42290.118912748636\r
2020-12-12,44791.52501359186\r
2020-12-17,53341.904557474314\r
2020-12-29,72123.74978818769\r
2021-01-08,73476.51959850022\r
2021-02-27,78491.42637315214\r
2021-03-02,77879.03282063102\r
2021-03-07,77879.03282063102\r
2021-03-09,79258.65291250098\r
2021-03-14,78798.08614603551\r
2021-03-19,79258.65291250098\r
2021-03-22,75441.8919377611\r
2021-03-24,75441.8919377611\r
2021-03-29,75593.62687381417\r
2021-04-01,73928.87897280976\r
2021-04-03,71824.01599915167\r
2021-04-08,71824.01599915167\r
2021-04-13,73476.51959850022\r
2021-04-18,75290.2356140564\r
2021-04-21,72573.95285384114\r
2021-04-23,75441.8919377611\r
2021-04-26,76201.35121435345\r
2021-04-28,74684.39797932509\r
2021-05-01,75897.33227715852\r
2021-05-03,75441.8919377611\r
2021-05-08,74684.39797932509\r
2021-05-11,69289.34706289995\r
2021-05-28,76049.30259201619\r
2021-05-31,74230.84895964098\r
2021-06-05,73175.34467245024\r
2021-06-10,71375.01932061609\r
2021-06-12,67809.3983746329\r
2021-06-15,69140.98213937713\r
2021-07-17,63274.5633224748\r
2021-07-20,65312.53182750026\r
2021-07-22,65312.53182750026\r
2021-08-11,57262.41041834897\r
2021-08-14,58395.59879689864\r
2021-08-26,37908.4205276802\r
2021-09-03,37908.4205276802\r
2021-09-05,37908.4205276802\r
2021-09-23,9507.444230035377\r
2021-09-30,12078.765283859066\r
2021-10-03,11421.228105438151\r
2021-10-08,12458.718854086488\r
2021-10-15,12268.362971410332\r
2021-10-28,13910.003249393258\r
2021-11-09,15502.248066646256\r
2021-11-17,19882.912688336466\r
2021-11-19,18708.739283133244\r
2021-11-22,18814.718153950813\r
2021-11-24,18708.739283133244\r
2021-12-17,30610.46251276848\r
2022-01-01,55854.017983964295\r
2022-01-06,66337.72808817767\r
2022-01-11,66337.72808817767\r
2022-01-13,69586.32258676426\r
2022-01-21,69586.32258676426\r
2022-02-05,73476.51959850022\r
2022-02-07,73476.51959850022\r
2022-02-12,73476.51959850022\r
2022-03-07,70032.39879432658\r
2022-03-09,70032.39879432658\r
2022-03-12,70032.39879432658\r
2022-03-14,75441.8919377611\r
2022-03-22,75290.2356140564\r
2022-03-24,70330.19056437198\r
2022-03-27,70330.19056437198\r
2022-04-01,70330.19056437198\r
2022-04-03,68252.51771340934\r
2022-04-11,71824.01599915167\r
2022-04-13,72874.48887832343\r
2022-04-16,71674.26982417997\r
2022-04-21,72273.7372399611\r
2022-04-26,70628.30765808333\r
2022-05-01,70926.7494093657\r
2022-05-03,68104.72863020872\r
2022-05-06,67957.02215496571\r
2022-05-08,67514.39924766964\r
2022-05-11,70330.19056437198\r
2022-05-13,70330.19056437198\r
2022-05-16,70330.19056437198\r
2022-05-21,70926.7494093657\r
2022-05-28,70926.7494093657\r
2022-05-31,68992.69922156054\r
2022-06-02,70777.48799302429\r
2022-06-12,72273.7372399611\r
2022-06-15,67514.39924766964\r
2022-06-17,72874.48887832343\r
2022-06-27,69883.62511478167\r
2022-07-02,60392.35269396196\r
2022-07-05,53619.552751707655\r
2022-07-10,51271.464887378264\r
2022-07-12,51271.464887378264\r
2022-07-15,46390.249839491014\r
2022-07-17,40470.95926593485\r
2022-07-20,40470.95926593485\r
2022-07-30,8802.807468622608\r
2022-08-06,8802.807468622608\r
2022-08-09,6614.254149851881\r
2022-08-11,5351.971675222224\r
2022-09-18,2286.4703619808624\r
2022-09-20,2857.628339801069\r
2022-09-25,2857.628339801069\r
2022-09-30,2536.2636538059396\r
2022-11-02,6614.254149851881\r
2022-11-04,6614.254149851881\r
2022-11-12,6776.777899246622\r
2022-11-19,6858.419577055793\r
2022-11-22,6858.419577055793\r
2022-11-29,14205.143920557173\r
2022-12-07,14205.143920557173\r
2022-12-09,15603.225277472666\r
2022-12-27,50859.92319570602\r
2022-12-29,55713.67709442813\r
2023-01-11,70777.48799302429\r
2023-01-13,70777.48799302429\r
2023-01-16,70777.48799302429\r
2023-01-18,70777.48799302429\r
2023-01-21,70777.48799302429\r
2023-02-10,9329.978291642921\r
2023-02-12,66778.35472279857\r
2023-02-15,66337.72808817767\r
2023-02-20,70032.39879432658\r
2023-02-27,78185.07506966004\r
2023-03-02,76353.47806841986\r
2023-03-04,75745.44034571681\r
2023-03-07,75745.44034571681\r
2023-03-14,67514.39924766964\r
2023-03-17,71375.01932061609\r
2023-03-24,71375.01932061609\r
2023-03-27,71375.01932061609\r
2023-05-26,70777.48799302429\r
2023-05-28,70926.7494093657\r
2023-05-31,71076.0918243833\r
2023-06-02,71674.26982417997\r
2023-06-05,71375.01932061609\r
2023-06-07,69734.93301751325\r
2023-06-12,70032.39879432658\r
2023-06-15,70479.20848748136\r
2023-06-22,73175.34467245024\r
2023-06-25,73175.34467245024\r
2023-07-07,57545.17055535142\r
2023-07-10,57545.17055535142\r
2023-07-15,57545.17055535142\r
2023-07-17,57545.17055535142\r
2023-07-22,45589.08122659038\r
2023-08-09,30130.520561882968\r
2023-08-14,30130.520561882968\r
2023-08-16,30130.520561882968\r
2023-08-19,30250.322675812113\r
2023-08-21,19240.170201165998\r
2023-09-03,12937.888937502765\r
2023-09-05,12937.888937502765\r
2023-09-08,9954.845590481611\r
2023-09-10,9954.845590481611\r
2023-09-13,9954.845590481611\r
2023-09-15,9954.845590481611\r
2023-09-18,161.741185343709\r
2023-09-30,5505.944883725301\r
2023-10-03,5505.944883725301\r
2023-10-05,5505.944883725301\r
2023-10-08,5583.351638048413\r
2023-10-10,5199.131815251395\r
2023-11-02,49222.35491617653\r
2023-11-07,49222.35491617653\r
2023-11-17,65458.73626177569\r
2023-11-22,65458.73626177569\r
`;export{r as default};
