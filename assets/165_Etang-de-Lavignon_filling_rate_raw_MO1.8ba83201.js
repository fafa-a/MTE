const n=`date,value\r
2017-01-19,70.0807034236214\r
2017-01-26,81.82323354798372\r
2017-02-15,88.99462737044604\r
2017-02-18,78.81551001582658\r
2017-02-25,94.47951729951404\r
2017-03-27,100.0\r
2017-04-09,93.3970047617836\r
2017-04-19,88.14243266545452\r
2017-05-16,100.0\r
2017-05-26,84.75620575372335\r
2017-06-15,93.61323446192733\r
2017-06-18,86.55062699977096\r
2017-08-02,79.95274541473042\r
2017-08-14,74.3115234778353\r
2017-08-22,77.27193720062753\r
2017-08-24,75.43071698499554\r
2017-08-27,74.61630451254264\r
2017-08-29,70.0807034236214\r
2017-09-18,60.86349271694614\r
2017-09-21,57.334714599944206\r
2017-10-13,62.11689945004972\r
2017-10-16,62.988716955121724\r
2017-10-28,65.72210968082621\r
2017-10-31,63.18290434135403\r
2017-11-07,72.2883990803525\r
2018-02-08,88.8879805807847\r
2018-02-10,87.92973442423059\r
2018-02-25,100.0\r
2018-03-20,98.8433873394503\r
2018-04-19,92.85702884328676\r
2018-04-21,96.87298620775506\r
2018-04-24,85.17749767616681\r
2018-05-04,98.95317137642758\r
2018-05-06,100.0\r
2018-05-16,92.53345429704099\r
2018-05-19,88.67479186457867\r
2018-05-21,88.46174309285142\r
2018-06-20,93.28894116137883\r
2018-06-23,95.13065768697301\r
2018-06-25,92.4256647241976\r
2018-06-28,96.87298620775506\r
2018-07-03,92.53345429704099\r
2018-07-15,94.58795581473981\r
2018-07-25,97.52858151473144\r
2018-07-28,93.0729165496448\r
2018-08-04,95.23929979736928\r
2018-08-07,86.55062699977096\r
2018-08-12,82.55382738343798\r
2018-08-19,81.09441771847808\r
2018-08-22,78.09413809987159\r
2018-09-01,69.38219324857484\r
2018-09-08,73.19691659777324\r
2018-09-11,71.58392290813195\r
2018-09-16,70.68094491472998\r
2018-09-26,65.72210968082621\r
2018-09-28,69.98079927293264\r
2018-10-06,68.8844300301538\r
2018-10-08,69.28256229436145\r
2018-10-18,72.89373306385082\r
2018-10-21,71.18221274676304\r
2018-10-23,71.2825823699387\r
2018-12-10,81.5106657719284\r
2019-02-13,88.67479186457867\r
2019-02-15,85.49384080843734\r
2019-02-20,92.85702884328676\r
2019-02-23,86.6565004952439\r
2019-02-25,86.55062699977096\r
2019-03-22,83.70547852613329\r
2019-03-30,79.12522345831687\r
2019-04-11,96.76383786077652\r
2019-04-19,90.7057135136305\r
2019-05-06,89.63524095483554\r
2019-05-14,89.9560180123417\r
2019-06-30,82.86748153916605\r
2019-07-05,81.82323354798372\r
2019-07-23,65.82031555918813\r
2019-07-25,56.956693086086915\r
2019-08-22,32.252028849506495\r
2019-09-03,19.792922155244742\r
2019-09-06,20.289766539565026\r
2019-09-13,18.879220137682783\r
2019-09-16,15.412469703521161\r
2019-09-18,17.565337756124666\r
2019-09-21,16.749025945906705\r
2019-10-11,23.265898821112575\r
2019-11-22,42.682339866147586\r
2019-12-02,44.172817891119195\r
2019-12-05,47.01588372568821\r
2020-01-06,53.86431696784415\r
2020-01-16,59.904102614188595\r
2020-01-19,59.33047294053897\r
2020-01-21,64.93790772688924\r
2020-01-24,60.6712817564332\r
2020-02-15,70.18064650125562\r
2020-03-19,88.0360659943353\r
2020-03-24,74.21000557957606\r
2020-03-26,92.4256647241976\r
2020-03-31,83.28619207057034\r
2020-04-05,91.242249532616\r
2020-04-10,89.10130908913551\r
2020-04-15,98.73363660763059\r
2020-05-15,91.88723224641407\r
2020-05-18,81.30246896330308\r
2020-05-20,93.0729165496448\r
2020-05-25,88.46174309285142\r
2020-05-28,88.8879805807847\r
2020-05-30,96.87298620775506\r
2020-06-02,89.5283848750872\r
2020-06-24,90.7057135136305\r
2020-07-07,83.28619207057034\r
2020-07-09,92.4256647241976\r
2020-07-14,94.69642830655908\r
2020-07-19,93.50510253460772\r
2020-07-22,93.18091175134163\r
2020-07-24,92.53345429704099\r
2020-07-29,85.91612954781294\r
2020-08-06,80.05635089360122\r
2020-08-08,76.75927121162404\r
2020-09-07,56.86229454152153\r
2020-09-10,53.771348133663686\r
2020-09-12,64.05876390685046\r
2020-09-15,53.492705148852096\r
2020-09-17,58.85360241128237\r
2020-11-14,56.7679387947945\r
2020-11-19,60.57523859762091\r
2020-11-21,63.57176848663308\r
2020-11-29,58.94889237083001\r
2021-02-24,99.72259077423122\r
2021-02-27,96.43659465619203\r
2021-03-01,97.20063284437754\r
2021-03-06,94.15440579033498\r
2021-03-09,95.45668561365717\r
2021-03-24,97.52858151473144\r
2021-03-29,92.7491363746944\r
2021-03-31,95.67420677395384\r
2021-04-03,96.87298620775506\r
2021-04-08,94.58795581473981\r
2021-04-23,93.3970047617836\r
2021-04-25,94.37111277856353\r
2021-05-03,92.21018860120867\r
2021-05-28,92.85702884328676\r
2021-06-14,94.8049347573141\r
2021-07-19,100.0\r
2021-07-22,98.95317137642758\r
2021-08-26,91.242249532616\r
2021-09-02,90.38420729760584\r
2021-09-07,88.14243266545452\r
2021-09-22,81.61481870991099\r
2021-10-15,82.65834265660824\r
2021-10-22,82.44934824997388\r
2021-10-27,83.07676473215379\r
2021-11-06,83.28619207057034\r
2021-11-09,78.60921888776222\r
2021-11-29,83.81038997445852\r
2021-12-09,82.13612789561432\r
2022-01-05,94.15440579033498\r
2022-01-20,91.34966041862695\r
2022-02-09,90.92022416508297\r
2022-02-12,91.88723224641407\r
2022-03-24,95.45668561365717\r
2022-03-26,95.78301806444917\r
2022-04-15,93.61323446192733\r
2022-05-03,100.0\r
2022-05-08,91.242249532616\r
2022-05-10,97.7473815303885\r
2022-05-13,86.86835352672902\r
2022-05-18,88.78136873915282\r
2022-05-28,83.49576338990462\r
2022-06-02,86.6565004952439\r
2022-06-12,73.50044362906364\r
2022-06-17,75.32878340957936\r
2022-06-19,76.55446612582922\r
2022-06-29,74.41307928172472\r
2022-07-02,69.58157244417713\r
2022-07-04,71.78500941145901\r
2022-07-12,69.68132063470513\r
2022-07-14,70.58080757882011\r
2022-07-17,65.72210968082621\r
2022-07-19,66.21353930396569\r
2022-08-03,54.88986153929759\r
2022-08-06,49.45193831422683\r
2022-08-08,46.836778566441836\r
2022-08-11,41.72540593119876\r
2022-08-13,38.805564087156064\r
2022-08-18,38.55072731459636\r
2022-08-31,34.3721805277331\r
2022-09-20,32.009783111490925\r
2022-09-22,30.965849950938352\r
2022-10-20,40.17239673009768\r
2022-10-27,38.46588375199849\r
2022-12-16,58.47286423178948\r
2023-01-15,70.58080757882011\r
2023-02-07,81.71900797560099\r
2023-02-09,79.74564448346948\r
2023-02-14,81.09441771847808\r
2023-02-27,85.38835750047393\r
2023-03-01,88.14243266545452\r
2023-03-04,85.70491411636631\r
2023-04-05,96.98216816545592\r
2023-04-20,99.17283929881924\r
2023-05-03,84.65097199967533\r
2023-05-28,83.70547852613329\r
2023-06-02,90.92022416508297\r
2023-06-07,88.2488344183698\r
2023-06-14,84.02032052954617\r
2023-06-24,78.50612873960485\r
2023-06-27,79.84917660416515\r
2023-07-07,65.72210968082621\r
2023-07-22,72.99475603556141\r
2023-08-08,64.35144793601793\r
2023-08-21,48.54577973848814\r
2023-08-23,59.999854030454294\r
2023-09-05,57.90302536280309\r
2023-09-07,52.47440937442679\r
2023-09-10,52.844079814887124\r
2023-09-15,56.7679387947945\r
2023-09-25,58.85360241128237\r
2023-10-02,51.461484327813565\r
2023-10-07,54.236630584442025\r
2023-10-10,51.55334524577726\r
2023-11-04,62.69774237476322\r
2023-12-24,75.8388275511922\r
`;export{n as default};
