const r=`date,value\r
2017-07-06,35.57170281891494\r
2017-07-11,35.57170281891494\r
2017-07-14,35.57170281891494\r
2017-07-26,29.80253184085855\r
2017-07-29,29.80253184085855\r
2017-07-31,32.177037635344455\r
2017-08-03,32.177037635344455\r
2017-08-05,26.759530293679155\r
2017-08-08,28.986339550452\r
2017-08-13,34.498912664567335\r
2017-08-15,25.78901622027356\r
2017-08-18,34.01047528625631\r
2017-08-20,23.070582687975723\r
2017-08-23,26.970327785953312\r
2017-08-25,25.24415836333665\r
2017-08-30,22.1215313090232\r
2017-09-02,29.727764881647616\r
2017-09-04,26.549733726984503\r
2017-09-07,23.71674319510393\r
2017-09-12,28.183833314747943\r
2017-09-14,28.183833314747943\r
2017-09-17,23.134712674787135\r
2017-09-19,23.134712674787135\r
2017-09-22,23.26329624905856\r
2017-10-04,20.414113277020334\r
2017-10-07,23.006560483748355\r
2017-10-09,21.014379070756956\r
2017-10-12,21.748653077808626\r
2017-10-14,20.414113277020334\r
2017-10-17,19.53338786851015\r
2017-10-19,20.058999488786604\r
2017-10-22,21.62521259304233\r
2017-10-24,22.498255424460158\r
2017-10-27,21.810532959014825\r
2017-10-29,25.99515697397888\r
2017-11-01,26.064091546180606\r
2017-11-03,23.45698155960726\r
2018-07-29,29.877412573799912\r
2018-07-31,61.85009835153766\r
2018-08-03,61.85009835153766\r
2018-08-05,61.85009835153766\r
2018-08-08,54.66785599993058\r
2018-08-10,63.49321240671372\r
2018-08-15,97.52662689952767\r
2018-08-18,97.52662689952767\r
2018-08-20,70.83325248028078\r
2018-08-28,100.0\r
2018-08-30,100.0\r
2018-09-02,100.0\r
2018-09-04,100.0\r
2018-09-07,100.0\r
2018-09-12,100.0\r
2018-09-14,100.0\r
2018-09-19,100.0\r
2018-09-22,94.78879671501109\r
2018-09-24,95.39312551221224\r
2018-09-27,90.33020826724287\r
2018-09-29,93.13886888307776\r
2018-10-02,88.0053010547466\r
2018-10-04,94.1867924303628\r
2018-10-09,93.73681279729253\r
2018-10-19,79.4757235720887\r
2018-10-22,77.1919181220725\r
2018-10-24,73.90634386971313\r
2018-11-01,88.29390801539577\r
2018-11-03,85.57519968928537\r
2019-07-06,8.366579354280745\r
2019-07-11,45.46079020768544\r
2019-07-14,63.13891890295964\r
2019-07-16,63.13891890295964\r
2019-07-19,61.153880089866\r
2019-07-21,50.243275582106314\r
2019-07-26,69.9517878779048\r
2019-07-29,69.9517878779048\r
2019-07-31,67.47004415037127\r
2019-08-03,67.47004415037127\r
2019-08-05,74.03610744635307\r
2019-08-08,77.05883107542327\r
2019-08-10,75.60404052775729\r
2019-08-15,78.3959677217349\r
2019-08-18,86.8565900725627\r
2019-08-20,86.8565900725627\r
2019-08-23,90.33020826724287\r
2019-09-04,12.500472150869287\r
2019-09-07,12.500472150869287\r
2019-09-12,37.432732622243705\r
2019-09-14,7.923243180641186\r
2019-09-17,12.324391007657159\r
2019-09-19,15.07716247585567\r
2019-09-24,26.829684828422078\r
2019-09-27,29.059972097074894\r
2019-09-29,28.8394137210486\r
2019-10-02,58.98058734207107\r
2019-10-04,54.66785599993058\r
2019-10-07,54.236701238916126\r
2019-10-14,51.693034592857146\r
2019-10-17,59.093785156079484\r
2019-10-19,59.889854223186376\r
2019-11-06,87.14291108174757\r
2019-11-08,75.73560067812454\r
2020-07-05,22.942645998840717\r
2020-07-08,22.942645998840717\r
2020-07-10,18.28394663784557\r
2020-07-15,34.66266326728872\r
2020-07-23,100.0\r
2020-07-30,100.0\r
2020-08-02,100.0\r
2020-08-04,100.0\r
2020-08-07,75.47261888114501\r
2020-08-09,67.96205281323866\r
2020-08-12,67.22485130207002\r
2020-08-14,65.76502875867472\r
2020-08-17,67.47004415037127\r
2020-08-19,67.47004415037127\r
2020-08-22,63.49321240671372\r
2020-08-24,61.26958507443076\r
2020-08-27,60.11848838475407\r
2020-09-01,69.45109242004843\r
2020-09-03,64.5633069470037\r
2020-09-06,64.5633069470037\r
2020-09-08,53.59384152738092\r
2020-09-13,48.01533547107132\r
2020-09-16,42.15458545645153\r
2020-09-18,42.15458545645153\r
2020-09-21,40.874229677867085\r
2020-09-23,40.874229677867085\r
2020-09-26,48.81841780720763\r
2020-09-28,49.42603166899794\r
2020-10-01,46.82580338806071\r
2020-10-03,49.83363900258419\r
2020-10-08,47.02280443958835\r
2020-10-13,61.153880089866\r
2020-10-16,66.85807521399143\r
2020-10-18,65.8859397359132\r
2020-10-21,65.8859397359132\r
2020-10-28,63.13891890295964\r
2021-06-25,1.680925409692861\r
2021-06-28,1.680925409692861\r
2021-06-30,74.68699472862009\r
2021-07-03,67.34738014592821\r
2021-07-05,80.97502029749215\r
2021-07-08,80.42785763507503\r
2021-07-10,80.42785763507503\r
2021-07-13,82.63001170617532\r
2021-07-15,83.32558446033393\r
2021-07-23,91.21152912234383\r
2021-07-25,93.2881376231224\r
2021-07-28,92.5432408733735\r
2021-07-30,92.09803779142037\r
2021-08-02,92.09803779142037\r
2021-08-09,86.71364352892898\r
2021-08-12,87.71726617637006\r
2021-08-14,83.04693157200184\r
2021-08-17,83.04693157200184\r
2021-08-19,83.04693157200184\r
2021-08-22,84.86829465473775\r
2021-08-24,81.66213585394144\r
2021-09-13,72.61628090488314\r
2021-09-18,72.61628090488314\r
2021-09-21,72.61628090488314\r
2021-09-23,77.1919181220725\r
2021-09-28,78.79982800871825\r
2021-10-01,78.79982800871825\r
2021-10-06,78.12742545963701\r
2021-10-11,81.24944458812811\r
2021-10-13,74.03610744635307\r
2021-10-16,76.39548076675854\r
2021-10-18,72.87319322768592\r
2021-10-23,69.82640976985947\r
2021-10-26,70.95972202026488\r
2021-10-28,67.59284336737448\r
2021-11-02,65.5236102019462\r
2021-11-05,68.95257363103082\r
2022-06-10,67.96205281323866\r
2022-06-13,67.96205281323866\r
2022-06-18,67.96205281323866\r
2022-06-20,68.33248104159597\r
2022-06-25,60.692383957911254\r
2022-07-03,68.08539339988971\r
2022-07-05,66.98019888812027\r
2022-07-08,70.95972202026488\r
2022-07-10,70.95972202026488\r
2022-07-13,70.95972202026488\r
2022-07-15,67.8388476468761\r
2022-07-18,60.57734061176401\r
2022-07-20,60.57734061176401\r
2022-07-23,60.57734061176401\r
2022-07-25,60.80755952582979\r
2022-09-08,51.17239550389277\r
2022-09-11,58.30415851650802\r
2022-09-16,58.30415851650802\r
2022-09-18,50.65494492049992\r
2022-09-26,52.216869014167045\r
2022-09-28,52.11184617605672\r
2022-10-01,53.91469108681021\r
2022-10-03,52.32201993817771\r
2022-10-06,51.380268136227144\r
2022-10-11,50.14067600321567\r
2022-10-13,52.63824177004069\r
2022-10-16,46.33549027162381\r
2022-10-18,39.79576151394374\r
2022-10-26,49.32444649310455\r
2022-10-28,44.97920200300431\r
2022-10-31,48.21534993518381\r
2022-11-02,48.21534993518381\r
2022-11-05,50.243275582106314\r
2023-06-23,3.0673750230881245\r
2023-06-25,8.160145995176237\r
2023-06-28,8.160145995176237\r
2023-07-05,56.52339143254363\r
2023-07-08,70.83325248028078\r
2023-07-10,67.71577784889587\r
2023-07-13,67.71577784889587\r
2023-07-15,67.71577784889587\r
2023-07-18,73.13065527592374\r
2023-07-20,78.26162683146897\r
2023-07-23,86.14328260267379\r
2023-07-25,86.14328260267379\r
2023-07-28,86.14328260267379\r
2023-07-30,85.29201149309746\r
2023-08-02,84.86829465473775\r
2023-08-04,84.86829465473775\r
2023-08-07,82.35277085614885\r
2023-08-09,82.49132074182538\r
2023-08-12,79.88294018188016\r
2023-08-14,85.15063053597929\r
2023-08-17,85.15063053597929\r
2023-08-19,79.61132240183379\r
2023-08-22,81.52443138773351\r
2023-08-24,81.52443138773351\r
2023-08-29,81.52443138773351\r
2023-09-01,76.13111266054369\r
2023-09-03,70.20295289097893\r
2023-09-06,68.33248104159597\r
2023-09-08,73.6472301875549\r
2023-09-11,72.23194225882695\r
2023-09-13,76.26322733463742\r
2023-09-26,73.6472301875549\r
2023-09-28,74.81758642223437\r
2023-10-01,68.70412945298395\r
2023-10-03,69.07699944654851\r
2023-10-06,67.34738014592821\r
2023-10-08,67.102457566804\r
2023-10-11,67.102457566804\r
2023-10-13,66.85807521399143\r
2023-10-21,70.83325248028078\r
`;export{r as default};
