const n=`date,value\r
2017-01-26,85.37391427570459\r
2017-02-15,84.41428236165359\r
2017-02-25,74.91680065522148\r
2017-03-14,94.66673221153266\r
2017-03-17,89.9993317524671\r
2017-03-27,80.99305096585125\r
2017-04-03,79.51882710840025\r
2017-04-23,89.9993317524671\r
2017-05-16,100.0\r
2017-05-26,92.69799945015733\r
2017-06-02,93.0543904419843\r
2017-07-05,95.22370592801948\r
2017-08-29,92.21312925116553\r
2017-10-05,86.46398118909008\r
2017-10-15,87.43532592113175\r
2017-10-18,86.29222053071177\r
2017-11-22,83.38344407253464\r
2018-02-22,87.48246604081696\r
2018-02-25,88.74428895659277\r
2018-03-14,90.46228627892046\r
2018-03-24,92.52006399595388\r
2018-04-18,92.50389664175131\r
2018-05-06,88.77595193270375\r
2018-05-11,94.1277244232019\r
2018-05-18,87.40390633237953\r
2018-06-22,88.69680523122206\r
2018-06-27,99.10194446098515\r
2018-08-19,96.0952341142592\r
2018-09-20,86.63591503640217\r
2018-09-25,87.57678493215225\r
2018-09-30,83.41412237154299\r
2018-10-05,84.5841382642928\r
2018-10-10,81.09887814937717\r
2018-10-13,81.28045920094861\r
2018-10-18,78.59324600887632\r
2018-10-20,76.905709980027\r
2018-10-23,76.14212436840096\r
2018-11-19,67.96988141261784\r
2019-02-15,80.52522997125992\r
2019-02-17,81.99363449530424\r
2019-02-25,75.16396927844865\r
2019-02-27,76.8174067640275\r
2019-03-19,85.04826163366461\r
2019-03-22,87.34108433323514\r
2019-03-29,89.45809127961644\r
2019-04-11,86.65155397420705\r
2019-05-01,88.080689434462\r
2019-05-13,98.18333505220733\r
2019-05-23,94.33987452325543\r
2019-06-27,98.76740277862572\r
2019-06-30,97.40177861195288\r
2019-07-02,100.0\r
2019-07-10,97.36859114626175\r
2019-07-15,93.41147490973123\r
2019-07-17,95.89755436678381\r
2019-07-25,92.85990938984612\r
2019-08-01,90.51024687198823\r
2019-08-21,76.24468970030809\r
2019-08-24,82.92395624873582\r
2019-08-26,82.84750011338447\r
2019-08-31,73.02599392214508\r
2019-09-03,75.73256311099613\r
2019-09-10,76.75856653182142\r
2019-09-13,68.8577785632127\r
2019-09-15,75.03306387736222\r
2019-09-20,73.09771227381535\r
2019-10-13,65.68053611920199\r
2020-01-21,83.70585161836192\r
2020-01-23,82.74052160263396\r
2020-02-07,83.55224553154883\r
2020-02-15,87.78131933028905\r
2020-03-13,82.37427024651936\r
2020-03-23,98.75069075183684\r
2020-03-26,84.8160389700347\r
2020-03-28,85.48260539825287\r
2020-03-31,85.03277010603856\r
2020-04-02,83.81346100301863\r
2020-04-05,83.8749835549159\r
2020-04-07,86.13622476145936\r
2020-04-10,87.62396370399875\r
2020-04-15,85.79353785922892\r
2020-04-20,86.60464145484991\r
2020-04-22,90.92644530997597\r
2020-05-07,88.71263170784435\r
2020-05-12,86.63591503640217\r
2020-05-20,95.68363423621517\r
2020-05-27,99.75595067349762\r
2020-05-30,99.9744374978532\r
2020-06-01,96.19415139410243\r
2020-06-24,96.73911889401734\r
2020-07-04,95.27293021211399\r
2020-07-06,91.4882414646298\r
2020-07-09,98.78411623942424\r
2020-07-19,97.51797990446056\r
2020-07-29,99.18566951039132\r
2020-07-31,95.91401979522665\r
2020-08-05,97.40177861195288\r
2020-08-08,96.65644771255867\r
2020-08-10,96.80528164376143\r
2020-08-20,95.552111482201\r
2020-09-04,94.51957531257436\r
2020-09-07,92.01954219652515\r
2020-09-09,90.25460599287189\r
2020-09-12,91.03866416740395\r
2020-09-14,92.89230857077993\r
2020-09-17,91.66516837492004\r
2020-09-22,88.34898499206781\r
2020-11-06,90.73423341106553\r
2020-11-18,87.43532592113175\r
2020-11-23,89.20396269041852\r
2021-02-14,91.71345125086647\r
2021-02-21,87.0586687742578\r
2021-02-24,91.85837723448648\r
2021-03-01,85.03277010603856\r
2021-03-06,86.07386652858877\r
2021-03-08,89.76034512144875\r
2021-03-23,91.53647706865563\r
2021-03-28,88.34898499206781\r
2021-03-31,81.52288760480701\r
2021-04-02,99.75595067349762\r
2021-04-25,100.0\r
2021-04-27,98.83426522591176\r
2021-05-30,94.02989067581031\r
2021-06-01,95.35499935123359\r
2021-06-14,99.8903754191594\r
2021-06-16,99.16892163233314\r
2021-07-19,95.043327247307\r
2021-07-21,97.66748479652217\r
2021-09-02,95.25652068414135\r
2021-09-07,93.39522875261402\r
2021-09-22,91.11886346479827\r
2021-09-24,91.61689839144364\r
2021-10-14,89.76034512144875\r
2021-10-19,89.34686491462034\r
2021-10-22,85.77797764044325\r
2021-10-24,88.52280848834839\r
2021-11-11,82.86278847954237\r
2022-01-25,82.32854675654463\r
2022-02-09,84.1829396867045\r
2022-02-26,84.33713236659123\r
2022-03-06,85.88692922634567\r
2022-03-08,88.9185062020895\r
2022-03-23,88.01762119954846\r
2022-03-26,82.16100409396282\r
2022-03-28,88.080689434462\r
2022-04-17,93.49272718857476\r
2022-04-22,97.03703190325311\r
2022-05-15,96.32612137524602\r
2022-06-11,92.39076527720995\r
2022-06-16,100.0\r
2022-06-21,94.71581030775394\r
2022-06-29,91.92282602863092\r
2022-07-06,99.08520375335225\r
2022-07-11,99.18566951039132\r
2022-07-14,96.77219740169795\r
2022-07-16,100.0\r
2022-07-19,99.38675590750512\r
2022-07-24,99.68877272185534\r
2022-08-03,96.77219740169795\r
2022-08-08,98.15001280885912\r
2022-08-10,99.00152172624074\r
2022-08-13,96.14468630359376\r
2022-08-25,97.41837449538757\r
2022-09-22,94.61766701365868\r
2022-10-09,96.9542316967777\r
2022-10-19,92.22927081764776\r
2022-10-22,91.71345125086647\r
2022-11-11,85.98037211586814\r
2022-11-13,87.3253824122528\r
2023-02-09,82.63361318258933\r
2023-02-11,85.88692922634567\r
2023-02-14,80.97793851676923\r
2023-03-01,85.70019801372499\r
2023-04-05,100.0\r
2023-04-20,98.91787555057014\r
`;export{n as default};