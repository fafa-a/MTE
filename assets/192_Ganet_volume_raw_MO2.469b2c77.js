const n=`date,value\r
2017-01-19,212798.53795174145\r
2017-01-26,241191.016851832\r
2017-01-29,235585.7166821653\r
2017-02-15,266569.5902086419\r
2017-02-18,273934.42899063276\r
2017-02-25,259284.75590172366\r
2017-03-07,223621.4042349114\r
2017-03-10,298034.4110724837\r
2017-03-17,318730.00402997265\r
2017-03-27,352980.7728192176\r
2017-03-30,353526.9248148285\r
2017-04-06,351889.4759726252\r
2017-04-09,346453.1624251211\r
2017-04-16,382950.5907679445\r
2017-04-19,422644.25858996506\r
2017-04-29,422644.25858996506\r
2017-05-09,539173.4673281128\r
2017-05-16,545649.9573127558\r
2017-05-19,547598.8942299648\r
2017-05-26,545000.9255744278\r
2017-06-05,534014.4299482339\r
2017-06-18,556076.1664303514\r
2017-06-25,563947.2162634154\r
2017-07-05,516113.4706105045\r
2017-07-18,491586.07595834753\r
2017-07-28,491586.07595834753\r
2017-08-02,343207.54181534157\r
2017-08-04,389174.09012874536\r
2017-08-07,388606.67034695455\r
2017-08-14,348080.5232416305\r
2017-08-17,314025.4108794167\r
2017-08-19,314025.4108794167\r
2017-08-22,295486.40106378676\r
2017-08-24,295486.40106378676\r
2017-08-27,310904.482355582\r
2017-08-29,248746.0068413844\r
2017-09-21,230032.9330210719\r
2017-09-28,220442.7067606306\r
2017-10-08,230493.65290375563\r
2017-10-11,233265.65994499382\r
2017-10-13,227734.8338697679\r
2017-10-16,228652.972874395\r
2017-10-18,225902.96393742593\r
2017-10-23,228652.972874395\r
2017-10-26,218634.43813202062\r
2017-10-28,215484.23149429387\r
2017-10-31,207467.40299443688\r
2017-11-02,207467.40299443688\r
2017-11-07,196967.12815874073\r
2017-11-15,192656.19661511705\r
2017-11-17,194376.0182771978\r
2017-11-22,194376.0182771978\r
2017-11-25,194376.0182771978\r
2017-11-27,194376.0182771978\r
2017-11-30,189661.14744423243\r
2018-01-09,258801.9559918536\r
2018-01-11,258801.9559918536\r
2018-01-14,258801.9559918536\r
2018-01-19,258801.9559918536\r
2018-01-24,298034.4110724837\r
2018-01-26,298034.4110724837\r
2018-02-10,301616.2179363083\r
2018-02-18,301616.2179363083\r
2018-03-15,487854.85212053993\r
2018-03-17,487854.85212053993\r
2018-03-22,498455.96559978405\r
2018-04-19,468757.41054539004\r
2018-04-21,550853.2569500216\r
2018-04-24,550853.2569500216\r
2018-04-26,550853.2569500216\r
2018-05-06,487854.85212053993\r
2018-05-11,551505.0490019415\r
2018-05-19,570539.9723017359\r
2018-05-21,547598.8942299648\r
2018-05-26,553462.2628357671\r
2018-06-03,567899.2153671486\r
2018-06-20,532727.7526830761\r
2018-06-23,541113.1863509457\r
2018-06-25,541113.1863509457\r
2018-06-28,541113.1863509457\r
2018-07-03,563289.6165801265\r
2018-07-05,557384.9533898411\r
2018-07-08,554115.2797592565\r
2018-07-10,562632.3219008754\r
2018-07-13,552809.5520189919\r
2018-07-15,543055.673110651\r
2018-07-18,558694.9630044465\r
2018-07-20,551505.0490019415\r
2018-07-23,552809.5520189919\r
2018-07-25,543055.673110651\r
2018-07-30,548249.1535204982\r
2018-08-02,546299.2960513461\r
2018-08-04,549550.5921308121\r
2018-08-12,533370.9370974938\r
2018-08-19,560662.2686179536\r
2018-08-22,545649.9573127558\r
2018-08-27,545649.9573127558\r
2018-09-01,543703.7833983401\r
2018-09-03,516113.4706105045\r
2018-09-08,535946.7583563272\r
2018-09-11,546299.2960513461\r
2018-09-16,538527.5097253371\r
2018-09-18,538527.5097253371\r
2018-09-23,475499.2129984982\r
2018-09-26,504104.9365918737\r
2018-09-28,545000.9255744278\r
2018-10-03,504734.16123207606\r
2018-10-06,508516.0571550953\r
2018-10-11,513576.02437826275\r
2018-10-13,513576.02437826275\r
2018-10-16,476729.103753706\r
2018-10-23,405771.99474395375\r
2018-11-17,437407.7689980614\r
2018-11-22,462661.75109601696\r
2018-11-27,442771.8559701315\r
2018-11-30,459625.82465804205\r
2018-12-05,445164.2298439021\r
2018-12-10,470592.2881257702\r
2018-12-12,470592.2881257702\r
2019-01-06,493455.92310570617\r
2019-01-09,493455.92310570617\r
2019-01-11,493455.92310570617\r
2019-01-16,493455.92310570617\r
2019-02-13,564605.1208777851\r
2019-02-15,541760.3745117013\r
2019-02-18,541760.3745117013\r
2019-02-20,534014.4299482339\r
2019-02-23,535302.3406537827\r
2019-02-25,532727.7526830761\r
2019-03-05,541113.1863509457\r
2019-03-20,578491.4283772615\r
2019-03-22,582483.5446954241\r
2019-03-25,532727.7526830761\r
2019-03-27,562632.3219008754\r
2019-03-30,558694.9630044465\r
2019-04-01,563289.6165801265\r
2019-04-09,563289.6165801265\r
2019-05-01,556076.1664303514\r
2019-05-11,498455.96559978405\r
2019-05-14,532727.7526830761\r
2019-05-16,532727.7526830761\r
2019-05-29,523117.0508994381\r
2019-05-31,522478.81189629465\r
2019-06-08,573847.76254924\r
2019-06-13,573847.76254924\r
2019-06-18,581151.6268340808\r
2019-06-25,581151.6268340808\r
2019-07-03,583816.6742198799\r
2019-07-05,569879.3265794129\r
2019-07-08,569218.9851346341\r
2019-07-10,568558.9480397424\r
2019-07-13,567239.7871893315\r
2019-07-15,571200.9222293276\r
2019-07-20,565263.3303503472\r
2019-07-23,560662.2686179536\r
2019-07-25,560006.194685803\r
2019-07-28,550201.7713015267\r
2019-08-02,537881.8599510074\r
2019-08-04,530158.1009161012\r
2019-08-09,520565.95366093144\r
2019-08-12,532084.8767812988\r
2019-08-14,532084.8767812988\r
2019-08-17,521840.88263708254\r
2019-08-22,527593.3902491255\r
2019-08-24,501591.15908968094\r
2019-08-29,501591.15908968094\r
2019-09-03,473656.7454698168\r
2019-09-06,474270.5853871471\r
2019-09-08,469368.71980641724\r
2019-09-11,435625.51909450325\r
2019-09-13,425580.8309433888\r
2019-09-16,423817.9176492963\r
2019-09-18,423817.9176492963\r
2019-09-21,410978.9620567849\r
2019-10-08,396580.45313285646\r
2019-10-11,400591.45148136053\r
2019-10-13,392016.1224879655\r
2019-12-05,426757.72187313484\r
2019-12-10,486613.6230029668\r
2019-12-15,485993.4798433051\r
2019-12-17,507884.9620321602\r
2019-12-20,495328.5908078365\r
2019-12-25,507884.9620321602\r
2019-12-27,515478.6430713159\r
2019-12-30,512942.4397171784\r
2020-01-06,535946.7583563272\r
2020-01-11,535946.7583563272\r
2020-01-14,535946.7583563272\r
2020-01-16,492832.32721995004\r
2020-01-19,492832.32721995004\r
2020-02-03,558039.8054020532\r
2020-02-05,556076.1664303514\r
2020-02-15,526952.9852048625\r
2020-02-18,526952.9852048625\r
2020-02-20,509779.1817288677\r
2020-03-21,568558.9480397424\r
2020-03-24,572523.7344115544\r
2020-03-26,572523.7344115544\r
2020-03-31,572523.7344115544\r
2020-04-03,569879.3265794129\r
2020-04-05,571200.9222293276\r
2020-04-08,572523.7344115544\r
2020-04-10,569218.9851346341\r
2020-04-13,569218.9851346341\r
2020-04-15,561318.6478466598\r
2020-04-18,563289.6165801265\r
2020-04-25,556730.4070413904\r
2020-05-03,557384.9533898411\r
2020-05-05,560006.194685803\r
2020-05-08,560006.194685803\r
2020-05-15,557384.9533898411\r
2020-05-18,574510.2324214077\r
2020-05-20,574510.2324214077\r
2020-05-25,563947.2162634154\r
2020-05-28,580486.1224548069\r
2020-05-30,568558.9480397424\r
2020-06-02,568558.9480397424\r
2020-06-14,577163.1489226868\r
2020-06-24,556730.4070413904\r
2020-06-27,556730.4070413904\r
2020-07-04,556730.4070413904\r
2020-07-07,558039.8054020532\r
2020-07-09,585818.6391330822\r
2020-07-12,586486.5659879004\r
2020-07-14,586486.5659879004\r
2020-07-19,591840.8645671906\r
2020-07-24,578491.4283772615\r
2020-07-27,567899.2153671486\r
2020-07-29,581151.6268340808\r
2020-08-06,570539.9723017359\r
2020-08-08,567899.2153671486\r
2020-08-11,579156.023155091\r
2020-08-18,575173.0060666074\r
2020-08-23,573185.5965219762\r
2020-09-02,521203.26319940254\r
2020-09-05,519928.9540994231\r
2020-09-07,519928.9540994231\r
2020-09-10,532727.7526830761\r
2020-09-12,519292.264592708\r
2020-09-15,519292.264592708\r
2020-09-17,516748.6086730927\r
2020-09-30,529516.4598295514\r
2020-10-30,515478.6430713159\r
2020-11-06,515478.6430713159\r
2020-11-11,515478.6430713159\r
2020-11-14,536591.4841906654\r
2020-11-19,542407.870123366\r
2020-11-21,504104.9365918737\r
2020-11-26,509147.463747077\r
2020-11-29,488475.93791432667\r
2020-12-26,523755.59956898924\r
2021-01-03,564605.1208777851\r
2021-01-08,564605.1208777851\r
2021-01-10,567239.7871893315\r
2021-01-18,578491.4283772615\r
2021-01-25,578491.4283772615\r
2021-02-14,576499.4643889515\r
2021-02-17,585151.0148396295\r
2021-02-19,576499.4643889515\r
2021-02-24,577827.1369426362\r
2021-02-27,576499.4643889515\r
2021-03-01,571862.1762899806\r
2021-03-04,572523.7344115544\r
2021-03-06,572523.7344115544\r
2021-03-09,573847.76254924\r
2021-03-14,578491.4283772615\r
2021-03-16,587823.3270989632\r
2021-03-21,585151.0148396295\r
2021-03-24,521840.88263708254\r
2021-03-26,521840.88263708254\r
2021-03-29,520565.95366093144\r
2021-03-31,567239.7871893315\r
2021-04-03,581151.6268340808\r
2021-04-05,589161.2976081289\r
2021-04-08,589161.2976081289\r
2021-04-13,596541.7282632225\r
2021-04-15,595197.1161121584\r
2021-04-20,595869.2714337461\r
2021-04-23,580486.1224548069\r
2021-05-03,581817.4342713337\r
2021-05-08,585151.0148396295\r
2021-05-28,594525.2623682427\r
2021-05-30,594525.2623682427\r
2021-06-09,583816.6742198799\r
2021-06-12,581151.6268340808\r
2021-06-14,581151.6268340808\r
2021-07-17,572523.7344115544\r
2021-07-19,590500.4769517445\r
2021-07-22,569218.9851346341\r
2021-08-11,580486.1224548069\r
2021-08-21,581151.6268340808\r
2021-08-26,584483.6931782909\r
2021-08-28,579820.9212047191\r
2021-08-31,583149.9580352763\r
2021-09-05,586486.5659879004\r
2021-09-07,581817.4342713337\r
2021-09-12,587823.3270989632\r
2021-09-17,575836.0834130347\r
2021-09-22,552809.5520189919\r
2021-09-25,552809.5520189919\r
2021-09-27,552809.5520189919\r
2021-09-30,559350.4261235101\r
2021-10-07,561975.3322986882\r
2021-10-10,563947.2162634154\r
2021-10-12,543703.7833983401\r
2021-10-15,543703.7833983401\r
2021-10-17,543703.7833983401\r
2021-10-20,543703.7833983401\r
2021-11-06,514209.91987670533\r
2021-11-09,494079.8323863817\r
2021-11-11,494079.8323863817\r
2021-12-14,572523.7344115544\r
2021-12-16,575173.0060666074\r
2021-12-19,552809.5520189919\r
2021-12-21,552809.5520189919\r
2022-01-23,573185.5965219762\r
2022-01-25,577163.1489226868\r
2022-02-09,516748.6086730927\r
2022-03-09,583816.6742198799\r
2022-03-19,590500.4769517445\r
2022-03-24,592511.5113013133\r
2022-03-26,581817.4342713337\r
2022-04-05,597214.4865308683\r
2022-04-15,595869.2714337461\r
2022-04-30,585151.0148396295\r
2022-05-03,585151.0148396295\r
2022-05-05,585151.0148396295\r
2022-05-08,590500.4769517445\r
2022-05-28,584483.6931782909\r
2022-05-30,594525.2623682427\r
2022-06-17,471817.1222784246\r
2022-06-19,585151.0148396295\r
2022-06-22,588492.1612140357\r
2022-06-29,589161.2976081289\r
2022-07-02,587823.3270989632\r
2022-07-04,587823.3270989632\r
2022-07-07,587823.3270989632\r
2022-07-12,581151.6268340808\r
2022-07-14,580486.1224548069\r
2022-07-17,578491.4283772615\r
2022-07-19,579820.9212047191\r
2022-07-22,579820.9212047191\r
2022-07-24,567899.2153671486\r
2022-07-27,563289.6165801265\r
2022-08-03,496578.60183583276\r
2022-08-06,389174.09012874536\r
2022-08-11,359006.8837947544\r
2022-08-13,360657.39935085835\r
2022-08-18,319254.4520411648\r
2022-08-28,264619.1264297433\r
2022-08-31,264619.1264297433\r
2022-09-05,269505.95037185977\r
2022-09-10,269505.95037185977\r
2022-09-12,254472.8713168001\r
2022-09-15,258319.51381628923\r
2022-09-20,252558.16102028132\r
2022-09-22,246375.12714200167\r
2022-10-05,224989.23544428838\r
2022-10-07,227734.8338697679\r
2022-10-12,227734.8338697679\r
2022-10-15,217732.525124244\r
2022-10-22,208352.18983564695\r
2022-11-06,182465.35751570232\r
2022-11-11,201752.8439404869\r
2022-11-16,188808.84795956442\r
2022-12-21,223621.4042349114\r
2022-12-26,221349.0598818926\r
2023-01-30,299056.0486398508\r
2023-02-02,321881.8297373941\r
2023-02-04,311943.4149983085\r
2023-02-09,322408.33199918113\r
2023-02-12,321881.8297373941\r
2023-02-14,317682.1364589767\r
2023-02-17,313504.3958782771\r
2023-02-19,312463.3978204036\r
2023-02-27,333543.70008723764\r
2023-03-01,345369.9398671268\r
2023-03-09,339974.0754499895\r
2023-04-05,389741.83893821615\r
2023-04-08,390309.91667703347\r
2023-04-15,390309.91667703347\r
2023-05-23,483516.051784226\r
2023-05-25,483516.051784226\r
2023-05-28,590500.4769517445\r
2023-05-30,590500.4769517445\r
2023-06-02,569879.3265794129\r
2023-06-04,572523.7344115544\r
2023-06-07,572523.7344115544\r
2023-06-14,553462.2628357671\r
2023-06-24,579156.023155091\r
`;export{n as default};
