const n=`date,value\r
2017-02-22,42.36215228736378\r
2017-03-14,57.468111565193006\r
2017-04-03,77.60761121588904\r
2017-04-23,89.76785300620116\r
2017-05-23,96.18904027484609\r
2017-06-02,97.42985689052843\r
2017-06-12,100.0\r
2017-07-02,100.0\r
2017-07-07,100.0\r
2017-07-12,97.63712810085524\r
2017-07-17,98.60314376877612\r
2017-07-27,89.04812792509786\r
2017-08-21,63.58038668394468\r
2017-09-05,53.42890486571604\r
2017-09-20,39.55019142649344\r
2017-10-05,27.7065298523043\r
2017-10-25,13.43059229317788\r
2017-10-30,12.083876351482012\r
2018-02-07,35.74948033950094\r
2018-02-22,47.02712224299642\r
2018-02-27,46.493535278781074\r
2018-04-18,87.32623644144196\r
2018-06-22,98.63026986407782\r
2018-07-07,100.0\r
2018-07-12,100.0\r
2018-07-17,99.61738415659781\r
2018-08-01,96.9977215372411\r
2018-08-11,91.3627170578998\r
2018-08-26,77.08682750042082\r
2018-08-31,71.28977876883124\r
2018-09-20,40.2029007503486\r
2018-09-25,36.70377986886954\r
2018-10-05,28.951458093564813\r
2018-10-25,12.203639624601644\r
2019-02-17,33.283561486061885\r
2019-02-27,28.14438336683393\r
2019-03-24,42.69845127373233\r
2019-03-29,55.756520562066\r
2019-05-13,92.71748511723246\r
2019-05-23,96.13520124749584\r
2019-06-02,100.0\r
2019-06-12,97.29475201326214\r
2019-06-17,95.33766382649458\r
2019-06-27,95.54357586072183\r
2019-07-02,97.97084455842037\r
2019-07-12,91.85787795139416\r
2019-08-01,73.01690908022688\r
2019-08-16,62.01124677852672\r
2019-08-31,41.07357904950982\r
2019-09-05,40.182239377752346\r
2019-09-30,20.70094154320935\r
2019-10-05,19.589499267230508\r
2019-10-10,11.213554210286523\r
2019-10-15,8.180292531368805\r
2019-10-25,9.342793417316795\r
2019-10-30,11.33533337314815\r
2019-11-04,8.457921358490744\r
2020-02-22,17.610843263229974\r
2020-03-08,29.03878568920581\r
2020-05-07,76.03174483057548\r
2020-05-17,85.74454901455483\r
2020-05-22,83.44869997224646\r
2020-05-27,90.52457146584666\r
2020-06-21,92.77961250702414\r
2020-07-06,94.82794132158881\r
2020-07-11,95.36451427577562\r
2020-07-16,96.3326557006322\r
2020-07-21,92.73523451203302\r
2020-07-31,92.41590313765074\r
2020-08-05,85.02614798408486\r
2020-08-10,84.83603605685383\r
2020-08-15,82.53909571345883\r
2020-08-20,73.43824306799674\r
2020-08-25,63.857593138773616\r
2020-09-04,52.657262217899635\r
2020-09-14,44.207547978547076\r
2020-10-24,7.204531998581684\r
2021-02-11,33.19903969799336\r
2021-03-13,53.098854606068414\r
2021-03-23,64.11135887141145\r
2021-03-28,66.1123758553695\r
2021-04-07,72.95913633899825\r
2021-04-12,75.83962695211294\r
2021-05-12,94.73860181587808\r
2021-05-27,99.94405781595535\r
2021-06-21,98.42236098236754\r
2021-07-11,92.29180897494295\r
2021-07-16,90.15477059342528\r
2021-07-21,87.01268001127023\r
2021-08-10,69.16077654562388\r
2021-08-15,61.61886460119362\r
2021-08-20,57.03108538090505\r
2021-08-30,48.179835564212866\r
2021-09-04,42.1384015863255\r
2021-09-19,33.11458312538281\r
2021-10-14,5.794720869869802\r
2021-10-24,5.074197692828672\r
2022-02-26,40.182239377752346\r
2022-03-03,41.34421879974083\r
2022-04-17,81.137759113092\r
2022-05-17,88.82028964880494\r
2022-05-22,89.75906529227393\r
2022-06-01,89.04812792509786\r
2022-06-16,78.61859446193809\r
2022-07-11,80.26987630331138\r
2022-07-16,73.0499283017483\r
2022-07-21,68.43928614013394\r
2022-07-26,58.584392001249384\r
2022-07-31,54.03811635628646\r
2022-08-10,44.96090533629355\r
2022-08-20,40.9557767240193\r
2022-08-30,33.8835739140696\r
2022-10-04,22.226770502770375\r
2022-10-09,19.8280814501118\r
2023-02-11,21.23236816065894\r
2023-02-26,30.81466338939687\r
2023-03-03,29.68999456191556\r
2023-03-28,41.36505956044319\r
2023-04-07,42.145388353880094\r
2023-04-17,44.172107727079045\r
2023-04-27,45.13201201477576\r
2023-05-02,48.631609124232575\r
2023-05-17,57.66010863805241\r
2023-06-16,90.00521987941059\r
2023-06-26,89.62728090133487\r
`;export{n as default};