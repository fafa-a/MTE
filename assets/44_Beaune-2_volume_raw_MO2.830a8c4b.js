const n=`date,value\r
2017-01-26,623403.2895176174\r
2017-01-29,653946.8352849841\r
2017-02-15,672336.9190276439\r
2017-02-18,672336.9190276439\r
2017-02-25,688213.453500119\r
2017-02-28,653946.8352849841\r
2017-03-17,791822.68211823\r
2017-03-27,900115.8872692316\r
2017-03-30,900115.8872692316\r
2017-04-06,900115.8872692316\r
2017-05-16,577422.0259280715\r
2017-05-19,577422.0259280715\r
2017-05-26,830749.117489005\r
2017-06-05,818179.7964813861\r
2017-06-25,882983.8248826646\r
2017-07-03,906564.2360890489\r
2017-07-05,906564.2360890489\r
2017-08-14,833549.6110599849\r
2017-08-17,833549.6110599849\r
2017-08-19,833549.6110599849\r
2017-08-22,833549.6110599849\r
2017-08-24,833549.6110599849\r
2017-09-28,696190.6894367887\r
2017-10-03,696190.6894367887\r
2017-10-06,696190.6894367887\r
2017-10-31,815393.9486619894\r
2017-11-02,837053.954280997\r
2017-11-05,837053.954280997\r
2017-11-07,805664.5791039502\r
2017-11-15,789062.4171250196\r
2017-11-17,789062.4171250196\r
2017-11-20,726334.103517739\r
2017-11-22,754789.4936810023\r
2017-11-25,754789.4936810023\r
2017-11-27,746628.022514922\r
2017-12-05,770501.8370646087\r
2017-12-07,770501.8370646087\r
2018-02-10,885120.261116474\r
2018-02-18,885120.261116474\r
2018-02-25,835651.720583848\r
2018-03-02,835651.720583848\r
2018-04-21,888684.2142375205\r
2018-04-26,888684.2142375205\r
2018-05-06,880137.5046659404\r
2018-05-11,899400.2041274784\r
2018-05-19,837755.3191520023\r
2018-05-21,839158.5446362259\r
2018-06-20,798043.1815474407\r
2018-06-23,798043.1815474407\r
2018-06-25,825854.6423057242\r
2018-06-28,825854.6423057242\r
2018-07-08,732405.7427893354\r
2018-07-10,746628.022514922\r
2018-07-15,727682.1271577447\r
2018-07-18,727682.1271577447\r
2018-07-20,722967.1240639958\r
2018-07-23,678278.3952526826\r
2018-07-25,678278.3952526826\r
2018-08-19,498190.6089556237\r
2018-08-22,498190.6089556237\r
2018-09-08,452151.53762140055\r
2018-09-11,452151.53762140055\r
2018-09-16,452151.53762140055\r
2018-09-28,500616.3001371797\r
2018-10-06,500616.3001371797\r
2018-10-13,510352.1138052036\r
2018-10-16,510352.1138052036\r
2018-10-18,576159.0022949752\r
2018-10-21,576159.0022949752\r
2018-10-23,515851.62875497807\r
2019-02-15,671018.5904424802\r
2019-02-18,671018.5904424802\r
2019-02-20,729030.8538609203\r
2019-02-23,729030.8538609203\r
2019-02-25,668384.1191860866\r
2019-03-05,727008.0274192374\r
2019-03-07,727008.0274192374\r
2019-03-12,616314.4710597605\r
2019-03-22,614385.1212377059\r
2019-03-25,614385.1212377059\r
2019-03-27,645457.5574882883\r
2019-03-30,645457.5574882883\r
2019-04-01,640248.9341483231\r
2019-04-09,696856.6256811436\r
2019-04-14,691534.1574924125\r
2019-05-06,718932.566294043\r
2019-05-14,718932.566294043\r
2019-05-16,718932.566294043\r
2019-05-31,800119.7223211756\r
2019-06-13,800119.7223211756\r
2019-06-25,888684.2142375205\r
2019-06-28,888684.2142375205\r
2019-06-30,888684.2142375205\r
2019-07-03,888684.2142375205\r
2019-07-05,902980.2208826315\r
2019-07-08,902980.2208826315\r
2019-07-10,835651.720583848\r
2019-07-13,851112.583882486\r
2019-07-15,820270.9359052819\r
2019-07-23,839158.5446362259\r
2019-07-25,750705.6371053393\r
2019-07-28,778735.6327563345\r
2019-08-02,642200.7760409694\r
2019-08-04,642200.7760409694\r
2019-08-09,642200.7760409694\r
2019-09-13,466961.2631400452\r
2019-09-16,498796.7208782726\r
2019-09-18,489123.8840747724\r
2019-09-21,538633.7718928512\r
2019-10-13,555432.0884845151\r
2019-10-16,555432.0884845151\r
2019-10-26,555432.0884845151\r
2020-01-06,871614.0857061414\r
2020-01-11,871614.0857061414\r
2020-01-16,878715.3147676291\r
2020-01-19,878715.3147676291\r
2020-01-21,878004.4625710436\r
2020-01-24,879426.3288183367\r
2020-02-15,897254.1162211756\r
2020-02-18,897254.1162211756\r
2020-02-20,897254.1162211756\r
2020-02-23,903696.7042696769\r
2020-03-21,820968.3160598542\r
2020-03-24,820968.3160598542\r
2020-03-26,887971.101271419\r
2020-03-31,847591.7530051754\r
2020-04-03,847591.7530051754\r
2020-04-05,885832.7292855062\r
2020-04-08,874452.631406614\r
2020-04-10,878715.3147676291\r
2020-04-13,845481.2271173259\r
2020-04-15,862406.7798462624\r
2020-04-25,851817.2426814043\r
2020-05-20,789062.4171250196\r
2020-05-25,817483.0838936442\r
2020-05-28,817483.0838936442\r
2020-05-30,732405.7427893354\r
2020-06-02,732405.7427893354\r
2020-07-09,285610.4684054513\r
2020-07-12,285610.4684054513\r
2020-07-14,285610.4684054513\r
2020-07-19,289244.2574922878\r
2020-07-24,273762.53863200574\r
2020-07-27,319307.4664909051\r
2020-07-29,264589.56253534206\r
2020-08-06,314505.3174157871\r
2020-08-08,157464.54206991082\r
2020-08-11,157464.54206991082\r
2020-09-17,61021.624597684015\r
2020-11-21,2169.2008704600485\r
2020-11-26,2169.2008704600485\r
2020-11-29,2169.2008704600485\r
2021-01-10,195449.72540522786\r
2021-01-18,195449.72540522786\r
2021-02-14,720949.0510116549\r
2021-02-17,720949.0510116549\r
2021-02-19,720949.0510116549\r
2021-02-24,856048.6388527114\r
2021-02-27,855342.9965275953\r
2021-03-01,889397.4882614146\r
2021-03-04,889397.4882614146\r
2021-03-06,865236.8656472155\r
2021-03-09,921660.6074648205\r
2021-03-14,893680.5114589226\r
2021-03-31,872323.478631593\r
2021-04-03,872323.478631593\r
2021-04-05,872323.478631593\r
2021-04-08,872323.478631593\r
2021-04-15,824457.7166453003\r
2021-04-18,824457.7166453003\r
2021-04-23,824457.7166453003\r
2021-06-14,830049.4086324528\r
2021-06-19,830049.4086324528\r
2021-07-19,865944.7946225124\r
2021-07-22,865944.7946225124\r
2021-07-29,873742.7515395132\r
2021-08-28,737814.6754167338\r
2021-08-31,737814.6754167338\r
2021-09-02,737814.6754167338\r
2021-09-05,725660.3555245623\r
2021-09-22,714904.369654338\r
2021-09-30,706198.5071690829\r
2021-10-02,706198.5071690829\r
2021-10-12,729705.4806833456\r
2021-10-15,729705.4806833456\r
2021-10-17,729705.4806833456\r
2021-12-16,768447.2407498347\r
2021-12-19,768447.2407498347\r
2021-12-21,844778.0476194427\r
2022-01-05,885120.261116474\r
2022-01-13,885120.261116474\r
2022-01-15,889397.4882614146\r
2022-01-18,834950.8518789397\r
2022-01-23,834950.8518789397\r
2022-01-25,860285.9287366393\r
2022-01-28,839158.5446362259\r
2022-01-30,839158.5446362259\r
2022-02-09,834950.8518789397\r
2022-03-06,848999.5924946276\r
2022-03-09,848999.5924946276\r
2022-03-26,820968.3160598542\r
2022-04-10,814697.9046363946\r
2022-04-15,874452.631406614\r
2022-05-30,756152.1637553509\r
2022-06-02,756152.1637553509\r
2022-06-14,670359.6992717531\r
2022-06-17,670359.6992717531\r
2022-06-19,670359.6992717531\r
2022-06-29,521367.6918123755\r
2022-07-02,549816.5324313815\r
2022-07-07,549816.5324313815\r
2022-07-14,456284.70872095216\r
2022-07-17,456284.70872095216\r
2022-07-19,456284.70872095216\r
2022-07-22,456284.70872095216\r
2022-07-24,385800.194735778\r
2022-07-27,385800.194735778\r
2022-08-01,339262.61918363423\r
2022-08-03,349092.54452666774\r
2022-08-06,332212.61518975516\r
2022-08-08,340895.446013307\r
2022-08-11,340895.446013307\r
2022-08-13,329512.1978907889\r
2022-08-18,360106.73017501767\r
2022-09-12,354037.01159014757\r
2022-09-20,354037.01159014757\r
2022-09-22,355138.435548337\r
2022-09-30,331131.7041210146\r
2022-10-22,457467.55658903887\r
2022-11-01,457467.55658903887\r
2022-11-11,534302.4298344048\r
2022-12-06,651985.0021471229\r
2022-12-16,659842.2712448646\r
2023-02-09,837755.3191520023\r
2023-02-12,837755.3191520023\r
2023-02-14,871614.0857061414\r
2023-04-05,789062.4171250196\r
2023-04-08,789062.4171250196\r
2023-04-30,918779.703303962\r
2023-05-03,918779.703303962\r
2023-05-25,794585.6573955588\r
2023-05-28,794585.6573955588\r
2023-05-30,892966.2722726286\r
2023-06-02,892966.2722726286\r
2023-06-07,848999.5924946276\r
2023-06-14,843372.182680033\r
2023-06-17,843372.182680033\r
2023-06-24,849703.7587296366\r
2023-06-27,827252.2331846264\r
2023-06-29,827252.2331846264\r
`;export{n as default};
