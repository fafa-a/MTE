const n=`date,value\r
2017-04-20,43.28408795985324\r
2017-04-23,42.92120670801579\r
2017-04-30,42.92120670801579\r
2017-05-30,64.74557487276869\r
2017-06-02,64.74557487276869\r
2017-06-09,65.31282532215896\r
2017-07-04,100.0\r
2017-07-07,100.0\r
2017-07-12,100.0\r
2017-08-18,59.328506291658286\r
2017-08-21,59.328506291658286\r
2017-08-23,50.849691400769125\r
2017-08-26,51.933477729159975\r
2018-04-20,5.385342369138733\r
2018-04-25,5.339432485612129\r
2018-04-28,18.859544004289187\r
2018-04-30,18.859544004289187\r
2018-05-05,41.32143505527974\r
2018-05-08,39.7298427364915\r
2018-05-25,40.67820754864406\r
2018-05-28,40.67820754864406\r
2018-06-02,40.67820754864406\r
2018-06-09,42.07241090161546\r
2018-06-14,52.07700662773897\r
2018-06-19,54.97808943787136\r
2018-06-22,58.79018824255845\r
2018-06-24,58.79018824255845\r
2018-06-27,58.132476276000176\r
2018-06-29,75.17643877623419\r
2018-07-04,100.0\r
2018-07-07,100.0\r
2018-07-09,100.0\r
2018-07-12,100.0\r
2018-07-14,100.0\r
2018-07-17,98.01652880816785\r
2018-07-19,98.01652880816785\r
2018-07-24,90.89048125293945\r
2018-07-27,90.89048125293945\r
2018-07-29,90.89048125293945\r
2018-08-01,90.89048125293945\r
2018-08-03,91.43576991528882\r
2019-04-30,11.972523474356818\r
2019-05-10,13.418857225700515\r
2019-05-13,13.418857225700515\r
2019-05-15,13.199930831181058\r
2019-05-23,17.009675629745598\r
2019-05-30,26.887586582724037\r
2019-06-02,25.40632922812498\r
2019-06-04,40.314896345472896\r
2019-06-07,40.314896345472896\r
2019-06-12,40.314896345472896\r
2019-06-29,79.64828860398221\r
2019-07-02,79.64828860398221\r
2019-07-04,81.79921305592426\r
2019-07-07,82.83090184303254\r
2019-07-09,82.83090184303254\r
2019-07-12,82.83090184303254\r
2019-07-14,82.0564762567622\r
2019-07-17,83.81380011289893\r
2019-07-19,81.57905125714363\r
2019-07-22,83.34938342149721\r
2019-07-24,80.44668535161122\r
2019-07-29,82.57232053009689\r
2019-08-01,79.7206912496133\r
2019-08-03,80.68340401296558\r
2019-08-06,79.77501670569085\r
2019-08-08,79.77501670569085\r
2019-08-11,86.51618108882654\r
2019-08-16,76.7814789288286\r
2019-08-18,82.55386725499172\r
2019-08-23,86.3837368155292\r
2019-08-26,86.3837368155292\r
2019-08-31,86.3837368155292\r
2020-04-29,43.42710298094082\r
2020-05-04,59.143639577945365\r
2020-05-07,59.143639577945365\r
2020-05-09,59.29767339005494\r
2020-05-14,59.159033157779504\r
2020-05-17,60.6313617573997\r
2020-05-19,60.148754565341825\r
2020-05-22,61.55566832065974\r
2020-05-24,75.98547377607952\r
2020-05-27,82.20368100687038\r
2020-05-29,80.97526923147471\r
2020-06-01,80.97526923147471\r
2020-06-03,80.97526923147471\r
2020-06-18,64.64860200274244\r
2020-06-21,64.64860200274244\r
2020-06-23,73.20899691541867\r
2020-06-28,73.20899691541867\r
2020-07-01,73.20899691541867\r
2020-07-06,71.40623915061146\r
2020-07-08,81.83593805343595\r
2020-07-13,88.42029453874059\r
2020-07-18,81.52406120888851\r
2020-07-21,81.52406120888851\r
2020-07-23,82.75697661489801\r
2020-07-26,81.59738575303437\r
2020-07-28,81.59738575303437\r
2020-07-31,83.55355392702059\r
2020-08-02,83.55355392702059\r
2020-08-05,81.450772501547\r
2020-08-07,82.6646205410062\r
2020-08-10,79.05233113703969\r
2020-08-12,83.55355392702059\r
2020-08-15,83.55355392702059\r
2020-08-20,83.55355392702059\r
2020-08-22,82.48007657670107\r
2020-08-25,84.42897893618331\r
2020-08-27,81.72578994606214\r
2021-06-13,86.85725869011266\r
2021-06-16,86.28920129864377\r
2021-06-18,88.17148508059874\r
2021-06-21,88.17148508059874\r
2021-07-18,85.64785187984886\r
2021-07-21,85.64785187984886\r
2021-07-23,86.04367230109773\r
2021-08-02,96.90581381464864\r
2021-08-10,96.90581381464864\r
2021-08-12,97.14756473756962\r
2021-08-15,92.31584300268804\r
2021-08-17,97.04679538919537\r
2021-08-20,97.04679538919537\r
2021-08-25,94.94376434134993\r
2021-08-27,95.54207472566397\r
2022-05-14,45.256417780501955\r
2022-05-19,58.48377528444728\r
2022-05-29,86.80036175485732\r
2022-06-06,86.5729766912017\r
2022-06-13,85.12163438707977\r
2022-06-16,85.12163438707977\r
2022-06-18,86.45940574954484\r
2022-06-21,86.45940574954484\r
2022-06-23,86.45940574954484\r
2022-06-26,83.31229068686183\r
2022-06-28,83.31229068686183\r
2022-07-03,86.7055785708518\r
2022-07-06,86.7055785708518\r
2022-07-08,88.7654293133188\r
2022-07-11,88.7654293133188\r
2022-07-13,88.30541203937176\r
2022-07-16,94.76466962771994\r
2022-07-18,90.36634611692938\r
2022-07-21,97.97601857876415\r
2022-07-28,94.68513098419949\r
2022-08-02,95.60201816256917\r
2022-08-05,95.60201816256917\r
2022-08-07,96.98636107030974\r
2022-08-10,98.60495041930564\r
2022-08-12,97.99627255542349\r
2022-08-22,100.0\r
`;export{n as default};
