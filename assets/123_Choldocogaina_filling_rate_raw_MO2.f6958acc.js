const n=`date,value\r
2017-01-19,90.46952429591812\r
2017-01-26,90.46952429591812\r
2017-01-29,91.81406686454078\r
2017-02-08,79.92311994164304\r
2017-02-18,92.89381302149555\r
2017-02-25,92.89381302149555\r
2017-03-10,83.4402360837379\r
2017-04-09,100.0\r
2017-04-16,100.0\r
2017-04-19,100.0\r
2017-04-29,90.20130398146145\r
2017-06-18,92.89381302149555\r
2017-06-25,92.89381302149555\r
2017-06-28,92.89381302149555\r
2017-07-18,80.83075989479597\r
2017-07-23,80.83075989479597\r
2017-07-28,80.83075989479597\r
2017-08-17,79.92311994164304\r
2017-08-22,93.29965611312996\r
2017-08-24,93.29965611312996\r
2017-08-27,93.29965611312996\r
2017-08-29,88.33022003718821\r
2017-09-01,88.33022003718821\r
2017-09-21,87.13338010177107\r
2017-09-23,87.13338010177107\r
2017-09-26,87.13338010177107\r
2017-09-28,87.13338010177107\r
2017-10-11,80.4414090439905\r
2017-10-13,80.4414090439905\r
2017-10-16,88.06384844810857\r
2017-10-23,86.33811155637072\r
2017-10-26,88.19700520943906\r
2017-10-28,82.39357449415822\r
2017-10-31,83.9649947775315\r
2017-11-02,83.9649947775315\r
2017-11-05,83.9649947775315\r
2017-11-07,76.45013687622715\r
2017-11-20,73.65350843453744\r
2017-11-22,73.65350843453744\r
2017-11-25,73.65350843453744\r
2017-11-27,73.65350843453744\r
2017-11-30,73.65350843453744\r
2018-01-24,85.80910385245636\r
2018-01-29,88.73021254903956\r
2018-03-15,90.20130398146145\r
2018-03-17,90.20130398146145\r
2018-03-22,90.20130398146145\r
2018-04-19,90.06728008265688\r
2018-04-21,90.06728008265688\r
2018-04-24,90.06728008265688\r
2018-05-24,86.86805672522311\r
2018-05-29,86.86805672522311\r
2018-06-03,86.86805672522311\r
2018-06-23,94.9281223775082\r
2018-06-25,94.9281223775082\r
2018-07-03,93.84157391041411\r
2018-07-13,93.29965611312996\r
2018-07-15,93.29965611312996\r
2018-07-23,100.0\r
2018-07-25,91.81406686454078\r
2018-08-02,94.52024359025623\r
2018-08-04,92.89381302149555\r
2018-08-12,95.2003230734935\r
2018-08-17,93.97719485623652\r
2018-08-19,93.97719485623652\r
2018-08-22,94.38439673293455\r
2018-08-27,88.33022003718821\r
2018-09-01,88.19700520943906\r
2018-09-03,82.26301030044726\r
2018-09-11,89.66555385395094\r
2018-09-18,89.66555385395094\r
2018-09-26,86.33811155637072\r
2018-09-28,86.33811155637072\r
2018-10-03,86.33811155637072\r
2018-11-15,75.0480615524906\r
2018-11-17,75.0480615524906\r
2018-11-22,75.0480615524906\r
2018-11-25,75.0480615524906\r
2019-02-13,65.08131413072456\r
2019-02-15,65.08131413072456\r
2019-02-18,66.91866628540238\r
2019-02-20,66.91866628540238\r
2019-02-23,58.00026082902168\r
2019-02-25,58.00026082902168\r
2019-02-28,58.00026082902168\r
2019-03-05,55.42100141779513\r
2019-03-07,59.18378112790018\r
2019-03-12,54.028506161309885\r
2019-03-20,54.028506161309885\r
2019-03-30,57.29347212841653\r
2019-04-04,57.29347212841653\r
2019-04-09,57.29347212841653\r
2019-05-14,79.14750315939224\r
2019-05-16,71.51322528789542\r
2019-05-29,71.51322528789542\r
2019-06-08,92.35348436344239\r
2019-06-13,92.35348436344239\r
2019-06-28,94.24860630192123\r
2019-07-03,94.24860630192123\r
2019-07-05,94.24860630192123\r
2019-07-08,94.24860630192123\r
2019-07-10,94.24860630192123\r
2019-07-23,64.59385525837139\r
2019-07-25,64.59385525837139\r
2019-07-28,64.59385525837139\r
2019-08-02,64.59385525837139\r
2019-08-04,64.59385525837139\r
2019-08-07,64.59385525837139\r
2019-08-17,65.20334404080798\r
2019-08-22,73.27448911297245\r
2019-08-24,73.27448911297245\r
2019-08-27,73.27448911297245\r
2019-08-29,73.27448911297245\r
2019-09-06,90.60372063944787\r
2019-09-08,90.60372063944787\r
2019-09-11,90.60372063944787\r
2019-09-13,90.60372063944787\r
2019-09-16,87.93074979028262\r
2019-09-18,87.93074979028262\r
2019-09-26,86.86805672522311\r
2019-10-11,69.5155874690158\r
2019-10-13,69.5155874690158\r
2019-10-21,69.5155874690158\r
2019-10-26,69.5155874690158\r
2020-02-23,79.40579939413215\r
2020-04-03,77.4745191974953\r
2020-04-05,77.4745191974953\r
2020-04-08,76.19465724566471\r
2020-04-10,76.19465724566471\r
2020-04-13,76.19465724566471\r
2020-04-15,76.19465724566471\r
2020-04-18,76.19465724566471\r
2020-04-23,61.57138302489378\r
2020-05-03,68.52292051515226\r
2020-05-05,68.52292051515226\r
2020-05-18,68.52292051515226\r
2020-05-28,86.47051005610503\r
2020-05-30,86.47051005610503\r
2020-06-02,86.47051005610503\r
2020-06-07,86.47051005610503\r
2020-06-12,99.31016940695395\r
2020-06-27,80.7009159768418\r
2020-07-04,80.7009159768418\r
2020-07-07,80.7009159768418\r
2020-07-09,80.7009159768418\r
2020-07-27,87.66472693380625\r
2020-07-29,87.66472693380625\r
2020-08-01,87.66472693380625\r
2020-08-06,88.06384844810857\r
2020-08-08,88.06384844810857\r
2020-08-16,74.92097227095084\r
2020-08-18,74.92097227095084\r
2020-09-10,74.54007786897643\r
2020-09-12,74.54007786897643\r
2020-09-15,77.08991462328804\r
2020-09-17,77.08991462328804\r
2020-09-25,77.08991462328804\r
2020-09-30,65.8144821323196\r
2020-10-10,60.613072709822305\r
2020-10-12,60.613072709822305\r
2020-10-15,60.613072709822305\r
2020-10-30,59.421311805446855\r
2020-11-01,59.421311805446855\r
2020-11-04,59.421311805446855\r
2020-11-11,59.421311805446855\r
2020-11-14,59.421311805446855\r
2021-03-29,86.47051005610503\r
2021-03-31,86.47051005610503\r
2021-04-03,86.47051005610503\r
2021-04-05,86.47051005610503\r
2021-04-08,86.47051005610503\r
2021-04-23,96.83824038321721\r
2021-05-03,96.83824038321721\r
2021-06-02,82.91642847782089\r
2021-06-07,82.91642847782089\r
2021-06-09,82.91642847782089\r
2021-08-26,83.70249670234347\r
2021-08-28,83.70249670234347\r
2021-08-31,83.9649947775315\r
2021-09-05,86.73548267835966\r
2021-09-12,87.39893693797265\r
2021-09-15,87.39893693797265\r
2021-09-17,76.7058632339644\r
2021-09-20,76.7058632339644\r
2021-09-22,76.7058632339644\r
2021-09-25,76.7058632339644\r
2021-10-20,78.63164044060292\r
2021-10-27,78.63164044060292\r
2021-11-19,76.7058632339644\r
2022-01-13,87.26612935619076\r
2022-01-15,87.26612935619076\r
2022-01-23,89.79940498265758\r
2022-01-25,85.80910385245636\r
2022-02-02,100.0\r
2022-02-09,100.0\r
2022-03-19,90.33538539791238\r
2022-03-21,90.33538539791238\r
2022-03-24,92.62353493813501\r
2022-03-26,92.62353493813501\r
2022-04-03,91.14107975030508\r
2022-05-08,79.66433843264848\r
2022-05-10,79.66433843264848\r
2022-05-15,79.66433843264848\r
2022-05-18,96.97509710502753\r
2022-05-28,96.70143947902339\r
2022-07-02,93.43505059530534\r
2022-07-07,93.43505059530534\r
2022-07-12,96.2913720059562\r
2022-07-14,88.99716387863967\r
2022-07-17,95.06419459777877\r
2022-07-24,87.79770927311074\r
2022-07-27,87.79770927311074\r
2022-08-06,70.51236394341477\r
2022-08-08,70.51236394341477\r
2022-08-11,70.51236394341477\r
2022-08-13,70.51236394341477\r
2022-08-16,70.51236394341477\r
2022-09-05,74.79394520008681\r
2022-09-10,87.13338010177107\r
2022-09-12,87.13338010177107\r
2022-09-15,87.13338010177107\r
2022-09-20,87.00068921224855\r
2022-09-22,74.41323769824069\r
2022-09-25,75.30242656952093\r
2022-09-30,75.30242656952093\r
2022-10-05,80.57113234623405\r
2022-10-07,80.57113234623405\r
2022-10-12,80.57113234623405\r
2022-10-15,85.01735538099209\r
2022-10-17,82.91642847782089\r
2022-10-20,82.91642847782089\r
2022-10-22,82.91642847782089\r
2023-02-02,92.35348436344239\r
2023-02-04,92.35348436344239\r
2023-02-07,92.35348436344239\r
2023-02-09,92.35348436344239\r
2023-02-12,92.48848119467156\r
2023-02-14,80.4414090439905\r
2023-02-17,87.26612935619076\r
2023-02-19,87.26612935619076\r
2023-02-24,85.80910385245636\r
2023-04-08,91.81406686454078\r
2023-04-18,92.08366157830456\r
2023-04-20,80.05260151874906\r
2023-05-28,87.66472693380625\r
2023-05-30,89.39802462080398\r
2023-06-02,90.60372063944787\r
2023-07-27,85.01735538099209\r
2023-07-29,85.01735538099209\r
2023-08-06,85.01735538099209\r
2023-08-11,87.13338010177107\r
2023-08-16,87.13338010177107\r
2023-08-21,87.13338010177107\r
2023-09-05,100.0\r
2023-09-07,100.0\r
2023-09-10,100.0\r
`;export{n as default};
