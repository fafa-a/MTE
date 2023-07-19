const n=`date,value\r
2017-03-13,73.80152450179163\r
2017-03-16,73.80152450179163\r
2017-04-12,91.03732514819825\r
2017-04-19,91.03732514819825\r
2017-04-22,91.03732514819825\r
2017-06-21,86.99277405678025\r
2017-06-24,86.99277405678025\r
2017-07-01,98.38244794508209\r
2017-07-06,84.94162631732397\r
2017-07-09,84.94162631732397\r
2017-08-25,89.29488507739734\r
2017-08-27,89.29488507739734\r
2017-09-02,81.45545464273638\r
2017-11-13,83.81062989797708\r
2017-11-15,83.81062989797708\r
2017-11-16,83.81062989797708\r
2017-11-23,83.81062989797708\r
2018-02-11,78.02835745872598\r
2018-02-21,83.58516366870163\r
2018-02-24,73.05292074065034\r
2018-02-26,99.83049895034036\r
2018-02-28,99.83049895034036\r
2018-03-05,99.70950273410092\r
2018-04-22,68.00284292850563\r
2018-04-24,68.00284292850563\r
2018-05-07,76.50013210532782\r
2018-05-09,76.50013210532782\r
2018-05-14,76.50013210532782\r
2018-05-15,76.50013210532782\r
2018-05-17,85.9647365952686\r
2018-05-19,79.34793665018266\r
2018-05-20,79.34793665018266\r
2018-05-22,99.95155425130054\r
2018-05-24,99.95155425130054\r
2018-06-26,100.0\r
2018-06-28,100.0\r
2018-06-29,100.0\r
2018-07-01,98.14193499617512\r
2018-07-04,98.14193499617512\r
2018-07-06,98.14193499617512\r
2018-07-16,76.50013210532782\r
2018-07-18,76.50013210532782\r
2018-07-19,76.50013210532782\r
2018-07-21,82.9102333954814\r
2018-07-23,82.12560227938714\r
2018-07-24,82.12560227938714\r
2018-07-26,82.12560227938714\r
2018-07-31,77.91879503789623\r
2018-08-05,88.02572731657023\r
2018-09-04,72.09495169795885\r
2018-09-06,72.09495169795885\r
2018-09-09,72.09495169795885\r
2018-09-11,72.09495169795885\r
2018-09-14,72.09495169795885\r
2018-10-04,81.12121045526443\r
2018-10-07,81.12121045526443\r
2018-10-09,100.0\r
2018-10-12,100.0\r
2018-10-19,81.3439784212536\r
2018-11-03,70.72022369943632\r
2018-11-06,70.72022369943632\r
2018-11-08,71.77676110371961\r
2018-11-11,71.77676110371961\r
2018-11-18,63.401589494736534\r
2018-11-20,60.90169814037011\r
2018-11-21,60.90169814037011\r
2019-02-16,83.92345471631066\r
2019-02-19,83.92345471631066\r
2019-02-21,100.0\r
2019-02-23,100.0\r
2019-02-24,100.0\r
2019-02-26,66.14677232205052\r
2019-03-11,28.41601362890392\r
2019-03-13,28.41601362890392\r
2019-03-28,45.08598972432015\r
2019-03-30,45.08598972432015\r
2019-03-31,45.08598972432015\r
2019-04-09,32.08123252574716\r
2019-04-12,48.02320602622178\r
2019-04-14,43.6888636943135\r
2019-04-17,43.6888636943135\r
2019-04-19,43.6888636943135\r
2019-04-20,43.6888636943135\r
2019-04-22,46.946495667034014\r
2019-04-25,46.946495667034014\r
2019-04-27,46.946495667034014\r
2019-04-30,44.29792688772284\r
2019-05-05,44.29792688772284\r
2019-05-12,46.85721398807354\r
2019-05-14,46.85721398807354\r
2019-05-15,46.85721398807354\r
2019-05-22,46.85721398807354\r
2019-05-24,46.85721398807354\r
2019-05-25,46.85721398807354\r
2019-05-27,60.70345892929742\r
2019-06-01,63.70429342325519\r
2019-06-06,63.70429342325519\r
2019-06-08,63.70429342325519\r
2019-06-21,41.71164645932229\r
2019-06-26,50.757809331332716\r
2019-06-28,50.757809331332716\r
2019-06-29,50.757809331332716\r
2019-07-03,50.757809331332716\r
2019-07-04,50.757809331332716\r
2019-07-06,45.43803420946402\r
2019-07-08,48.83717920453461\r
2019-07-09,48.83717920453461\r
2019-07-11,45.43803420946402\r
2019-07-13,54.59307524989211\r
2019-07-14,54.59307524989211\r
2019-07-16,43.25589981021243\r
2019-07-23,56.98657360665435\r
2019-07-24,56.98657360665435\r
2019-07-29,45.702790745079135\r
2019-08-20,45.5262175578311\r
2019-08-22,45.5262175578311\r
2019-08-23,45.5262175578311\r
2019-08-25,45.5262175578311\r
2019-08-27,45.5262175578311\r
2019-08-30,51.86867119541835\r
2019-09-01,51.86867119541835\r
2019-09-02,51.86867119541835\r
2019-09-04,47.035845774514975\r
2019-09-07,51.03461653865834\r
2019-09-11,51.03461653865834\r
2019-09-14,45.43803420946402\r
2019-09-16,48.29391816647355\r
2019-09-19,41.71164645932229\r
2019-09-21,46.41183290977244\r
2019-09-24,46.41183290977244\r
2019-09-27,46.41183290977244\r
2019-10-09,32.92850159894531\r
2019-10-17,32.92850159894531\r
2019-10-21,32.92850159894531\r
2019-10-22,32.92850159894531\r
2019-12-03,27.61795479342132\r
2019-12-05,27.61795479342132\r
2019-12-08,27.61795479342132\r
2019-12-13,58.442463449128525\r
2019-12-20,58.442463449128525\r
2019-12-23,58.637698415136086\r
2019-12-25,58.637698415136086\r
2019-12-28,51.682855317924655\r
2019-12-30,63.30081724271685\r
2020-01-17,45.96816636376408\r
2020-01-19,45.96816636376408\r
2020-01-20,45.96816636376408\r
2020-01-22,48.20361270057209\r
2020-02-04,31.54670098337413\r
2020-02-06,63.401589494736534\r
2020-02-11,61.39843417034455\r
2020-03-17,52.52113962001395\r
2020-03-24,34.88703691468651\r
2020-03-25,34.88703691468651\r
2020-03-27,35.284197574019174\r
2020-03-30,33.39439046582997\r
2020-04-01,50.02262399743307\r
2020-04-03,44.647486120473744\r
2020-04-04,44.647486120473744\r
2020-04-08,44.647486120473744\r
2020-04-09,44.647486120473744\r
2020-04-11,45.7911805321242\r
2020-04-14,45.879639080292165\r
2020-04-16,43.6888636943135\r
2020-04-18,48.29391816647355\r
2020-04-21,48.29391816647355\r
2020-04-23,48.29391816647355\r
2020-04-26,46.678856017163994\r
2020-05-26,54.59307524989211\r
2020-05-28,54.59307524989211\r
2020-05-29,54.59307524989211\r
2020-05-31,62.19658797825288\r
2020-06-02,62.19658797825288\r
2020-06-08,62.19658797825288\r
2020-06-25,32.08123252574716\r
2020-07-07,32.08123252574716\r
2020-07-10,32.08123252574716\r
2020-07-20,40.863520625711594\r
2020-07-22,40.863520625711594\r
2020-07-30,41.03258428090176\r
2020-08-02,41.03258428090176\r
2020-08-04,41.03258428090176\r
2020-08-06,32.69654650900312\r
2020-08-07,32.69654650900312\r
2020-08-09,34.88703691468651\r
2020-08-11,34.88703691468651\r
2020-08-14,34.88703691468651\r
2020-08-21,34.0981570090133\r
2020-09-08,25.140006299206608\r
2020-09-13,29.741598347844462\r
2020-09-16,29.741598347844462\r
2020-09-26,26.68663436198954\r
2020-11-12,8.228641266307388\r
2020-11-15,8.228641266307388\r
2020-11-19,8.228641266307388\r
2020-12-17,15.104073860588386\r
2020-12-19,15.104073860588386\r
2020-12-29,14.375882191038475\r
2021-01-01,73.37337455998856\r
2021-01-09,73.37337455998856\r
2021-02-10,54.97325320351464\r
2021-02-18,54.97325320351464\r
2021-04-01,76.50013210532782\r
2021-04-03,76.50013210532782\r
2021-04-04,76.50013210532782\r
2021-04-06,76.50013210532782\r
2021-04-08,76.50013210532782\r
2021-04-16,50.20601527976031\r
2021-04-18,50.20601527976031\r
2021-04-19,50.20601527976031\r
2021-04-21,57.47022642695748\r
2021-04-23,57.47022642695748\r
2021-04-24,57.47022642695748\r
2021-04-26,66.24934428874855\r
2021-05-21,56.89004064332702\r
2021-05-24,56.89004064332702\r
2021-05-28,56.89004064332702\r
2021-05-31,56.98657360665435\r
2021-06-05,49.474073049466085\r
2021-06-08,49.474073049466085\r
2021-06-15,53.553072214653554\r
2021-07-15,47.483621855040035\r
2021-07-17,47.483621855040035\r
2021-07-18,47.483621855040035\r
2021-07-20,51.21949134484676\r
2021-07-22,51.21949134484676\r
2021-07-28,45.5262175578311\r
2021-07-30,45.5262175578311\r
2021-08-14,40.526237160966204\r
2021-08-22,40.526237160966204\r
2021-09-13,32.92850159894531\r
2021-09-16,32.92850159894531\r
2021-09-21,32.92850159894531\r
2021-09-23,36.89088560573638\r
2021-10-08,37.95063128157533\r
2021-10-11,37.95063128157533\r
2021-10-15,37.95063128157533\r
2021-11-22,38.52626024518527\r
2021-11-24,38.52626024518527\r
2021-12-17,48.746465792709394\r
2021-12-27,48.746465792709394\r
2022-02-05,58.05278056545893\r
2022-02-10,58.05278056545893\r
2022-02-12,58.05278056545893\r
2022-03-07,55.92834007918297\r
2022-03-09,55.92834007918297\r
2022-03-14,55.92834007918297\r
2022-03-17,76.82658384266188\r
2022-03-22,77.59047986585395\r
2022-03-24,77.59047986585395\r
2022-03-25,77.59047986585395\r
2022-03-27,75.41600694681316\r
2022-04-01,78.57709902659182\r
2022-04-03,78.57709902659182\r
2022-04-16,67.89918569364556\r
2022-04-21,71.77676110371961\r
2022-04-26,71.77676110371961\r
2022-05-01,65.32850264150449\r
2022-05-31,67.27858037415396\r
2022-06-03,67.27858037415396\r
2022-06-08,67.27858037415396\r
2022-06-15,85.05506156296985\r
2022-06-17,85.05506156296985\r
2022-06-25,85.05506156296985\r
2022-07-10,81.79025206458171\r
2022-07-12,81.79025206458171\r
2022-07-13,81.79025206458171\r
2022-07-15,87.91071232828345\r
2022-07-17,87.91071232828345\r
2022-07-18,87.91071232828345\r
2022-07-20,77.8092946208242\r
2022-07-23,83.81062989797708\r
2022-07-28,64.21008935125687\r
2022-07-30,66.86611925897338\r
2022-08-02,60.30776175954943\r
2022-08-04,60.30776175954943\r
2022-08-06,60.30776175954943\r
2022-08-07,60.30776175954943\r
2022-08-09,74.44562892941747\r
2022-08-11,69.25169047292604\r
2022-08-12,69.25169047292604\r
2022-08-16,69.25169047292604\r
2022-09-18,42.99695559430466\r
2022-09-21,42.99695559430466\r
2022-11-12,47.12526428520161\r
2022-11-15,47.12526428520161\r
2022-11-17,47.12526428520161\r
2022-11-19,47.12526428520161\r
2022-11-20,47.12526428520161\r
2022-11-22,48.92796052113304\r
2022-12-07,51.31202967724436\r
2022-12-09,51.31202967724436\r
2022-12-10,51.31202967724436\r
2022-12-17,51.31202967724436\r
2022-12-27,43.42887697015563\r
2022-12-29,43.42887697015563\r
2023-01-21,54.59307524989211\r
2023-01-23,54.59307524989211\r
2023-01-31,54.59307524989211\r
2023-02-15,68.52208374662004\r
2023-05-16,37.215673441675015\r
2023-05-19,37.215673441675015\r
2023-05-21,37.215673441675015\r
2023-05-23,37.215673441675015\r
2023-05-26,37.7050023658062\r
2023-06-05,74.01597551716398\r
2023-06-07,74.66083104429806\r
2023-06-08,74.66083104429806\r
2023-06-12,74.2306770400932\r
2023-06-13,74.2306770400932\r
2023-06-15,87.10730409293399\r
2023-06-20,80.34346130850079\r
2023-06-22,80.34346130850079\r
2023-06-23,80.34346130850079\r
2023-06-25,60.90169814037011\r
2023-07-03,53.553072214653554\r
`;export{n as default};