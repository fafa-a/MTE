const n=`date,value\r
2017-01-19,75.55923438299173\r
2017-01-26,76.1153287222018\r
2017-01-29,71.4729935918281\r
2017-02-08,67.77923469706961\r
2017-02-15,84.52162846280588\r
2017-02-18,95.96203435062245\r
2017-02-25,88.27893763932931\r
2017-03-10,90.02156811349047\r
2017-03-30,88.98499174263772\r
2017-04-06,93.27556343946087\r
2017-04-09,93.66515489461942\r
2017-04-16,98.39842329810156\r
2017-04-19,97.88615725124407\r
2017-04-29,100.0\r
2017-05-06,100.0\r
2017-05-09,97.6588782259751\r
2017-05-16,92.9422223986889\r
2017-05-19,95.84939789910052\r
2017-05-26,96.0747316379896\r
2017-06-05,92.88671892233508\r
2017-06-18,94.39066270408478\r
2017-06-25,94.39066270408478\r
2017-06-28,94.39066270408478\r
2017-07-05,90.40485606915809\r
2017-07-18,87.14385548104535\r
2017-07-23,87.14385548104535\r
2017-07-28,87.14385548104535\r
2017-08-02,82.46091109351993\r
2017-08-04,88.27893763932931\r
2017-08-07,91.39389148388788\r
2017-08-12,90.95370918951718\r
2017-08-14,91.22870858894797\r
2017-08-17,90.07627768037972\r
2017-08-22,89.8575311384125\r
2017-08-24,94.9504970658269\r
2017-08-27,85.85489571647503\r
2017-08-29,85.80138080263656\r
2017-09-01,85.80138080263656\r
2017-09-03,78.87241803741708\r
2017-09-06,78.87241803741708\r
2017-09-08,78.87241803741708\r
2017-09-13,76.87666034011797\r
2017-09-21,85.48061361409444\r
2017-09-23,85.48061361409444\r
2017-09-26,83.51476710293879\r
2017-09-28,83.51476710293879\r
2017-10-08,82.61859707527105\r
2017-10-11,82.93438461957223\r
2017-10-13,82.1459548169442\r
2017-10-16,86.44457239052613\r
2017-10-23,85.48061361409444\r
2017-10-26,83.0397702463696\r
2017-10-28,84.20307277295102\r
2017-10-31,82.51345769346064\r
2017-11-02,82.51345769346064\r
2017-11-05,85.64092814065246\r
2017-11-07,82.56601968763971\r
2017-11-15,81.4132130981653\r
2017-11-17,81.6745599385364\r
2017-11-20,83.30350356150824\r
2017-11-22,80.2678653513456\r
2017-11-25,80.2678653513456\r
2017-11-27,80.2678653513456\r
2017-11-30,80.7355146268173\r
2017-12-05,81.6745599385364\r
2017-12-12,85.90842597562296\r
2017-12-15,82.72379802774753\r
2017-12-20,86.76699645909896\r
2017-12-25,90.89875513010563\r
2017-12-27,90.8438163459124\r
2017-12-30,90.8438163459124\r
2018-01-24,98.91191879650832\r
2018-01-29,99.48391067565984\r
2018-02-15,95.84939789910052\r
2018-02-25,96.30030869736021\r
2018-03-02,94.89444511923885\r
2018-03-07,94.89444511923885\r
2018-03-15,99.14053352253973\r
2018-03-17,99.14053352253973\r
2018-03-22,99.31215384685296\r
2018-03-30,99.14053352253973\r
2018-04-04,88.82182660064049\r
2018-04-19,92.77575771657763\r
2018-04-21,99.19772512897643\r
2018-04-24,97.14838896274051\r
2018-05-06,88.98499174263772\r
2018-05-11,97.4318422022817\r
2018-05-21,96.24389162372586\r
2018-05-24,91.11866301165986\r
2018-05-29,91.11866301165986\r
2018-06-03,95.28712837986374\r
2018-06-20,95.28712837986374\r
2018-06-23,96.5826221212999\r
2018-06-25,95.06264662395665\r
2018-07-03,95.28712837986374\r
2018-07-08,97.6588782259751\r
2018-07-10,97.6588782259751\r
2018-07-13,99.14053352253973\r
2018-07-15,99.14053352253973\r
2018-07-23,98.39842329810156\r
2018-07-25,90.07627768037972\r
2018-08-02,94.44657762118077\r
2018-08-04,94.67038956622122\r
2018-08-12,93.55376684668924\r
2018-08-17,94.83840839526299\r
2018-08-19,95.39946056612656\r
2018-08-22,88.06221072299205\r
2018-08-27,86.65946043219846\r
2018-09-01,82.46091109351993\r
2018-09-03,81.20441301586689\r
2018-09-08,80.47555522501352\r
2018-09-11,81.46545164777092\r
2018-09-18,83.77919255936762\r
2018-09-23,74.70350604461274\r
2018-09-26,79.74972076302132\r
2018-09-28,75.00501594535707\r
2018-10-03,77.94837612330156\r
2018-10-11,81.93629195039499\r
2018-10-16,78.51247331716378\r
2018-10-21,78.51247331716378\r
2018-11-10,64.12899810692491\r
2018-11-15,70.6389349174816\r
2018-11-17,68.45288810904538\r
2018-11-22,79.12998492681436\r
2018-11-25,79.12998492681436\r
2018-12-07,76.92753966675089\r
2018-12-12,76.92753966675089\r
2018-12-20,80.16411298134753\r
2018-12-27,80.16411298134753\r
2019-02-15,84.68111374005329\r
2019-02-18,82.1459548169442\r
2019-02-20,84.41538176625927\r
2019-02-23,82.40837988860406\r
2019-02-25,84.04400240222344\r
2019-02-28,84.62793661767972\r
2019-03-05,84.78751407080442\r
2019-03-07,87.4135003214275\r
2019-03-12,87.14385548104535\r
2019-03-20,95.45564948381858\r
2019-03-22,92.49862159351345\r
2019-03-25,86.49827139752036\r
2019-03-27,86.65946043219846\r
2019-03-30,84.89397584440496\r
2019-04-04,84.89397584440496\r
2019-04-09,81.4132130981653\r
2019-04-16,84.09701048860302\r
2019-04-19,84.09701048860302\r
2019-05-01,82.56601968763971\r
2019-05-06,89.8575311384125\r
2019-05-09,89.8575311384125\r
2019-05-11,89.8575311384125\r
2019-05-14,83.1452174187314\r
2019-05-16,83.1452174187314\r
2019-05-29,69.90674159823854\r
2019-05-31,82.61859707527105\r
2019-06-03,82.61859707527105\r
2019-06-08,90.13100253362568\r
2019-06-13,85.1603990503106\r
2019-06-23,43.76614423798373\r
2019-06-25,44.08074735315791\r
2019-06-28,91.89026459161013\r
2019-07-03,91.89026459161013\r
2019-07-05,86.76699645909896\r
2019-07-08,86.76699645909896\r
2019-07-10,90.24049809620998\r
2019-07-15,89.8575311384125\r
2019-07-23,93.16438877689708\r
2019-07-25,93.16438877689708\r
2019-07-28,90.67909165205026\r
2019-08-09,78.05080009923991\r
2019-08-12,78.05080009923991\r
2019-08-14,84.2561269693659\r
2019-08-17,75.50877335545711\r
2019-08-22,75.76123351798309\r
2019-08-24,75.15598032535819\r
2019-08-27,80.94375973380863\r
2019-08-29,80.94375973380863\r
2019-09-03,83.25072613039454\r
2019-09-06,83.25072613039454\r
2019-09-08,83.0397702463696\r
2019-09-11,59.79915898707948\r
2019-09-13,80.47555522501352\r
2019-09-16,70.78579453095082\r
2019-09-18,71.1290123852213\r
2019-09-26,70.6389349174816\r
2019-10-08,76.77494813319366\r
2019-10-11,72.60858852331859\r
2019-10-13,73.20433960617471\r
2019-10-21,73.20433960617471\r
2019-10-26,80.06042233110688\r
2019-12-05,75.05532189399851\r
2019-12-10,87.68352824146612\r
2019-12-15,80.00860015289749\r
2019-12-20,80.00860015289749\r
2019-12-25,85.48061361409444\r
2019-12-27,87.57547110995934\r
2019-12-30,87.03610482845266\r
2020-01-09,92.38787391618779\r
2020-01-11,93.10882431288596\r
2020-01-14,91.39389148388788\r
2020-01-16,90.8438163459124\r
2020-01-19,87.46747526209701\r
2020-01-24,87.46747526209701\r
2020-01-29,79.3363164714334\r
2020-01-31,73.95217569217503\r
2020-02-03,72.0150770613203\r
2020-02-15,92.66485751162674\r
2020-02-18,90.73398460614371\r
2020-02-20,88.38739296702184\r
2020-02-23,88.82182660064049\r
2020-03-11,95.68055730156271\r
2020-03-21,95.68055730156271\r
2020-03-24,93.16438877689708\r
2020-03-26,88.87619967874907\r
2020-03-29,87.79164665055744\r
2020-03-31,87.79164665055744\r
2020-04-03,84.94722977034147\r
2020-04-05,84.94722977034147\r
2020-04-08,78.92390051842371\r
2020-04-10,86.71322077911235\r
2020-04-13,88.71312635585001\r
2020-04-15,88.71312635585001\r
2020-04-18,88.71312635585001\r
2020-04-23,88.71312635585001\r
2020-04-30,90.67909165205026\r
2020-05-03,90.67909165205026\r
2020-05-05,90.67909165205026\r
2020-05-18,66.48870430096767\r
2020-05-20,90.51450446183163\r
2020-05-25,90.51450446183163\r
2020-05-28,85.58747461572787\r
2020-05-30,92.44324012755396\r
2020-06-02,92.44324012755396\r
2020-06-07,96.24389162372586\r
2020-06-12,96.24389162372586\r
2020-06-14,95.23098511273066\r
2020-06-24,83.93803234493922\r
2020-06-27,83.93803234493922\r
2020-07-04,83.93803234493922\r
2020-07-07,83.93803234493922\r
2020-07-09,83.93803234493922\r
2020-07-19,80.2678653513456\r
2020-07-22,88.82182660064049\r
2020-07-24,82.35586407949972\r
2020-07-27,81.72687553035396\r
2020-07-29,81.72687553035396\r
2020-08-01,81.72687553035396\r
2020-08-06,79.9567934070303\r
2020-08-08,74.60312687530994\r
2020-08-16,44.27790044760719\r
2020-08-18,44.27790044760719\r
2020-08-31,43.29618342730329\r
2020-09-02,60.20768821117254\r
2020-09-05,60.20768821117254\r
2020-09-07,60.20768821117254\r
2020-09-10,55.916116310604046\r
2020-09-12,54.21442571838313\r
2020-09-15,51.89823090033141\r
2020-09-17,52.494258778440525\r
2020-09-25,50.84168628501649\r
2020-09-30,44.47545809703929\r
2020-10-10,49.13061400567513\r
2020-10-12,34.60112653770588\r
2020-10-15,34.60112653770588\r
2020-10-30,56.66544230683501\r
2020-11-01,56.66544230683501\r
2020-11-04,56.66544230683501\r
2020-11-11,73.75241095699282\r
2020-11-14,70.78579453095082\r
2020-11-21,74.8541911775959\r
2020-11-26,74.8541911775959\r
2020-11-29,72.41050244989091\r
2020-12-06,75.15598032535819\r
2020-12-26,83.19796408254155\r
2021-01-03,49.83681349991057\r
2021-01-08,49.83681349991057\r
2021-01-10,49.83681349991057\r
2021-01-18,97.31841533019839\r
2021-02-17,98.39842329810156\r
2021-02-19,99.14053352253973\r
2021-02-24,92.83123069472109\r
2021-02-27,94.27887855795146\r
2021-03-09,92.55401831333361\r
2021-03-21,92.49862159351345\r
2021-03-29,98.68354682373469\r
2021-03-31,94.72638061803266\r
2021-04-03,96.69565390357813\r
2021-04-05,95.3432868645687\r
2021-04-08,95.3432868645687\r
2021-04-15,96.18748975547605\r
2021-04-18,97.14838896274051\r
2021-04-20,95.17485706388874\r
2021-04-23,100.0\r
2021-05-03,99.48391067565984\r
2021-05-08,94.55845313981519\r
2021-05-20,88.98499174263772\r
2021-05-23,88.98499174263772\r
2021-05-28,99.14053352253973\r
2021-05-30,94.67038956622122\r
2021-06-02,97.99988787531215\r
2021-06-07,94.39066270408478\r
2021-06-09,94.83840839526299\r
2021-06-14,97.99988787531215\r
2021-06-22,97.94301497124805\r
2021-07-22,87.89982633117813\r
2021-08-11,44.79239145021175\r
2021-08-16,44.79239145021175\r
2021-08-21,44.79239145021175\r
2021-08-26,79.2847104190808\r
2021-08-28,81.30878223220478\r
2021-08-31,77.4882338264694\r
2021-09-05,80.68349190096072\r
2021-09-12,82.56601968763971\r
2021-09-15,82.56601968763971\r
2021-09-17,81.20441301586689\r
2021-09-20,81.20441301586689\r
2021-09-22,81.20441301586689\r
2021-09-25,75.45832783206843\r
2021-09-30,75.35748330105308\r
2021-10-07,78.4097710578557\r
2021-10-10,78.4097710578557\r
2021-10-12,77.18216849877729\r
2021-10-15,77.18216849877729\r
2021-10-17,77.18216849877729\r
2021-10-20,70.54110644334742\r
2021-10-27,75.71071048216713\r
2021-11-01,65.91879936042876\r
2021-11-04,65.91879936042876\r
2021-11-06,65.91879936042876\r
2021-11-09,61.165895171250526\r
2021-11-11,76.21663824077291\r
2021-11-19,73.90221121117497\r
2021-12-14,96.01837539018334\r
2021-12-16,99.54119328299102\r
2021-12-19,96.01837539018334\r
2022-01-13,99.02619581817694\r
2022-01-15,99.31215384685296\r
2022-01-23,98.17059768479804\r
2022-01-25,86.22992973907712\r
2022-02-02,100.0\r
2022-02-09,86.55198574063941\r
2022-03-09,91.83505096653184\r
2022-03-19,100.0\r
2022-03-21,100.0\r
2022-03-24,100.0\r
2022-03-26,100.0\r
2022-04-03,82.72379802774753\r
2022-04-05,94.05549303818627\r
2022-04-15,94.05549303818627\r
2022-05-10,95.68055730156271\r
2022-05-15,96.52612903145594\r
2022-05-18,96.52612903145594\r
2022-05-28,91.06366313103422\r
2022-05-30,94.27887855795146\r
2022-06-09,92.22186681697939\r
2022-06-17,88.658799190671\r
2022-06-19,88.658799190671\r
2022-06-22,88.658799190671\r
2022-06-24,88.658799190671\r
2022-07-02,90.24049809620998\r
2022-07-07,90.29526880406013\r
2022-07-12,94.39066270408478\r
2022-07-14,92.22186681697939\r
2022-07-17,87.14385548104535\r
2022-07-24,83.8850703755899\r
2022-07-27,85.80138080263656\r
2022-08-01,82.09351599870993\r
2022-08-03,77.5392988712087\r
2022-08-06,75.9128956220944\r
2022-08-08,75.9128956220944\r
2022-08-11,75.9128956220944\r
2022-08-13,75.25670079659726\r
2022-08-16,71.07993452042751\r
2022-09-05,54.73544632248737\r
2022-09-10,56.44457613225997\r
2022-09-12,55.21506112256323\r
2022-09-15,55.21506112256323\r
2022-09-20,53.05051477140326\r
2022-09-22,43.452577749655845\r
2022-09-25,43.49171684975528\r
2022-09-30,43.49171684975528\r
2022-10-02,42.828557047876195\r
2022-10-05,39.433391334821685\r
2022-10-07,39.433391334821685\r
2022-10-12,39.433391334821685\r
2022-10-15,36.6365271539695\r
2022-10-17,39.32119668345785\r
2022-10-20,39.32119668345785\r
2022-10-22,37.472958394516205\r
2022-11-01,39.059981016794005\r
2022-11-04,35.06062908247491\r
2022-11-06,39.92126638717461\r
2022-11-11,37.94956253104591\r
2022-11-16,37.326868443996446\r
2022-11-19,40.79118355707402\r
2022-12-04,67.0130985872827\r
2022-12-11,67.0130985872827\r
2022-12-14,70.19919788259286\r
2022-12-21,77.4882338264694\r
2022-12-24,74.90445058632119\r
2022-12-26,78.6152373993566\r
2023-01-03,70.6389349174816\r
2023-01-10,73.55289475678683\r
2023-02-02,97.31841533019839\r
2023-02-04,100.0\r
2023-02-07,100.0\r
2023-02-09,96.8087464845581\r
2023-02-12,96.9218998585409\r
2023-02-14,89.63902922585254\r
2023-02-17,89.52987002052436\r
2023-02-19,89.52987002052436\r
2023-02-24,97.88615725124407\r
2023-03-01,89.31173514165909\r
2023-03-04,89.31173514165909\r
2023-04-05,93.16438877689708\r
2023-04-08,98.17059768479804\r
2023-04-18,98.34144412539398\r
2023-04-20,96.9218998585409\r
2023-05-20,96.13110309332559\r
2023-05-25,96.13110309332559\r
2023-05-28,98.11367923279363\r
2023-05-30,99.65580399004605\r
2023-06-02,90.56935157915234\r
2023-06-24,95.9057085200228\r
2023-07-02,97.6588782259751\r
`;export{n as default};