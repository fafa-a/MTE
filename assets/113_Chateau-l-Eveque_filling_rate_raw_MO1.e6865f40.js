const r=`date,value\r
2017-01-19,63.03075680606505\r
2017-01-26,59.90905883225336\r
2017-02-15,60.94205817737265\r
2017-02-18,71.68563146435443\r
2017-02-25,49.051271069792854\r
2017-03-10,95.37807097399076\r
2017-03-17,63.03075680606505\r
2017-03-30,83.16943846445284\r
2017-04-06,87.966722232012\r
2017-04-09,81.98819898214553\r
2017-04-19,89.18405311018685\r
2017-04-29,90.40855984627056\r
2017-05-09,89.18405311018685\r
2017-05-16,84.3579249785632\r
2017-05-26,77.33600701872342\r
2017-06-18,59.90905883225336\r
2017-06-25,73.9236910069705\r
2017-07-05,77.33600701872342\r
2017-07-18,56.85568123031247\r
2017-08-02,37.44026296535674\r
2017-08-14,31.75274004176848\r
2017-08-19,34.953545810002645\r
2017-08-22,34.140987957208615\r
2017-09-21,71.68563146435443\r
2017-09-28,59.90905883225336\r
2017-10-11,94.12499767612958\r
2017-10-13,77.33600701872342\r
2017-10-16,100.0\r
2017-10-18,61.98263020246843\r
2017-10-26,70.57769491099074\r
2017-10-31,59.90905883225336\r
2017-11-02,64.08642010256642\r
2017-11-07,68.38408980807468\r
2017-11-17,49.051271069792854\r
2017-11-22,50.95593530142677\r
2017-11-27,57.865851695836\r
2017-12-05,59.90905883225336\r
2017-12-12,84.3579249785632\r
2017-12-20,64.08642010256642\r
2018-02-10,44.42664126061681\r
2018-02-25,61.98263020246843\r
2018-04-19,80.81422120008878\r
2018-04-21,76.1912257806492\r
2018-05-04,75.05378190439839\r
2018-05-06,67.29845443622453\r
2018-05-11,69.47717552702616\r
2018-06-20,73.9236910069705\r
2018-06-23,70.57769491099074\r
2018-06-25,58.88365048920563\r
2018-06-28,77.33600701872342\r
2018-07-08,68.38408980807468\r
2018-07-10,83.16943846445284\r
2018-07-15,60.94205817737265\r
2018-07-18,73.9236910069705\r
2018-07-23,100.0\r
2018-07-25,61.98263020246843\r
2018-08-02,77.33600701872342\r
2018-08-12,64.08642010256642\r
2018-08-19,69.47717552702616\r
2018-08-22,65.14960241766161\r
2018-09-01,76.1912257806492\r
2018-09-03,54.85830157974746\r
2018-09-08,57.865851695836\r
2018-09-11,54.85830157974746\r
2018-09-16,49.99970942692145\r
2018-09-26,50.95593530142677\r
2018-09-28,49.051271069792854\r
2018-10-06,52.89166657663039\r
2018-10-21,65.14960241766161\r
2018-10-23,48.1106413402977\r
2018-11-17,86.7565811659751\r
2018-12-25,52.89166657663039\r
2019-02-03,83.16943846445284\r
2019-02-13,70.57769491099074\r
2019-02-15,67.29845443622453\r
2019-02-18,80.81422120008878\r
2019-02-20,66.22028628387064\r
2019-02-23,59.90905883225336\r
2019-02-25,50.95593530142677\r
2019-03-20,49.99970942692145\r
2019-03-22,60.94205817737265\r
2019-03-25,63.03075680606505\r
2019-03-27,53.87113115165545\r
2019-03-30,56.85568123031247\r
2019-05-01,99.17988671215797\r
2019-05-31,70.57769491099074\r
2019-06-18,100.0\r
2019-06-25,68.38408980807468\r
2019-07-03,100.0\r
2019-07-05,50.95593530142677\r
2019-07-10,63.03075680606505\r
2019-07-15,75.05378190439839\r
2019-07-23,66.22028628387064\r
2019-07-25,39.99999554731037\r
2019-08-02,55.85315810657995\r
2019-08-14,44.42664126061681\r
2019-08-22,40.869347026321556\r
2019-08-24,53.87113115165545\r
2019-08-29,32.540557087860996\r
2019-09-03,39.13868113349906\r
2019-09-13,42.63206398832329\r
2019-09-16,48.1106413402977\r
2019-09-18,32.540557087860996\r
2019-10-08,66.22028628387064\r
2019-10-11,66.22028628387064\r
2019-10-13,55.85315810657995\r
2019-11-20,72.80096887425579\r
2019-12-05,68.38408980807468\r
2019-12-10,81.98819898214553\r
2019-12-25,91.64022862139885\r
2019-12-30,67.29845443622453\r
2020-01-06,67.29845443622453\r
2020-01-11,69.47717552702616\r
2020-01-16,71.68563146435443\r
2020-01-19,55.85315810657995\r
2020-02-15,78.48811016728463\r
2020-02-20,56.85568123031247\r
2020-03-19,58.88365048920563\r
2020-03-21,53.87113115165545\r
2020-03-31,69.47717552702616\r
2020-04-03,61.98263020246843\r
2020-04-05,71.68563146435443\r
2020-04-10,58.88365048920563\r
2020-04-13,64.08642010256642\r
2020-04-15,66.22028628387064\r
2020-04-25,100.0\r
2020-05-05,91.64022862139885\r
2020-05-18,58.88365048920563\r
2020-05-20,28.68480395700667\r
2020-05-25,3.448353852626212\r
2020-05-28,8.292979961634622\r
2020-05-30,5.461043537096808\r
2020-06-02,8.292979961634622\r
2020-07-04,41.746711180543\r
2020-07-07,49.99970942692145\r
2020-07-09,39.13868113349906\r
2020-07-12,50.95593530142677\r
2020-07-19,39.13868113349906\r
2020-07-24,64.08642010256642\r
2020-07-27,49.99970942692145\r
2020-07-29,27.201257564654295\r
2020-08-06,43.525381786447696\r
2020-08-11,37.44026296535674\r
2020-09-02,34.140987957208615\r
2020-09-05,39.13868113349906\r
2020-09-12,33.33664913447801\r
2020-09-17,27.938803117117384\r
2020-10-30,77.33600701872342\r
2020-11-06,56.85568123031247\r
2020-11-19,64.08642010256642\r
2020-11-21,57.865851695836\r
2020-11-26,55.85315810657995\r
2020-11-29,60.94205817737265\r
2021-01-08,76.1912257806492\r
2021-01-10,64.08642010256642\r
2021-01-18,79.64751993752053\r
2021-02-17,100.0\r
2021-02-19,86.7565811659751\r
2021-02-24,64.08642010256642\r
2021-02-27,78.48811016728463\r
2021-03-01,67.29845443622453\r
2021-03-06,70.57769491099074\r
2021-03-09,65.14960241766161\r
2021-03-21,84.3579249785632\r
2021-03-24,80.81422120008878\r
2021-03-29,81.98819898214553\r
2021-03-31,61.98263020246843\r
2021-04-03,67.29845443622453\r
2021-04-05,84.3579249785632\r
2021-04-08,54.85830157974746\r
2021-04-15,61.98263020246843\r
2021-04-23,70.57769491099074\r
2021-05-03,45.33581943628621\r
2021-05-08,81.98819898214553\r
2021-06-12,81.98819898214553\r
2021-06-14,61.98263020246843\r
2021-07-17,83.16943846445284\r
2021-07-19,81.98819898214553\r
2021-07-22,99.17988671215797\r
2021-08-11,64.08642010256642\r
2021-08-21,76.1912257806492\r
2021-08-23,75.05378190439839\r
2021-08-26,60.94205817737265\r
2021-08-28,68.38408980807468\r
2021-08-31,83.16943846445284\r
2021-09-05,67.29845443622453\r
2021-09-12,66.22028628387064\r
2021-09-22,51.91992786743563\r
2021-09-30,61.98263020246843\r
2021-10-10,53.87113115165545\r
2021-10-12,65.14960241766161\r
2021-10-15,56.85568123031247\r
2021-10-17,53.87113115165545\r
2021-10-27,49.051271069792854\r
2021-11-09,56.85568123031247\r
2021-11-19,51.91992786743563\r
2021-12-14,60.94205817737265\r
2021-12-16,60.94205817737265\r
2021-12-19,63.03075680606505\r
2021-12-21,59.90905883225336\r
2022-01-05,68.38408980807468\r
2022-01-13,77.33600701872342\r
2022-01-15,70.57769491099074\r
2022-01-18,72.80096887425579\r
2022-01-23,63.03075680606505\r
2022-01-25,58.88365048920563\r
2022-02-09,58.88365048920563\r
2022-02-24,66.22028628387064\r
2022-02-27,69.47717552702616\r
2022-03-01,92.87904574972471\r
2022-03-06,70.57769491099074\r
2022-03-24,87.966722232012\r
2022-03-26,69.47717552702616\r
2022-04-10,86.7565811659751\r
2022-04-15,80.81422120008878\r
2022-05-28,77.33600701872342\r
2022-05-30,65.14960241766161\r
2022-06-17,58.88365048920563\r
2022-06-19,65.14960241766161\r
2022-06-29,68.38408980807468\r
2022-07-02,63.03075680606505\r
2022-07-07,55.85315810657995\r
2022-07-12,54.85830157974746\r
2022-07-14,57.865851695836\r
2022-07-24,42.63206398832329\r
2022-08-01,54.85830157974746\r
2022-08-03,45.33581943628621\r
2022-08-06,49.99970942692145\r
2022-08-08,31.75274004176848\r
2022-08-11,38.285428553517036\r
2022-08-13,49.051271069792854\r
2022-08-28,17.782602294508283\r
2022-09-05,13.187008913466947\r
2022-09-20,3.7561419506727978\r
2022-09-22,3.1519311798960197\r
2022-12-16,5.098330522436633\r
2023-04-05,22.277958965133\r
2023-04-08,29.439228647457533\r
2023-05-03,61.98263020246843\r
2023-05-28,84.3579249785632\r
2023-06-04,33.33664913447801\r
2023-06-14,64.08642010256642\r
2023-06-24,45.33581943628621\r
2023-07-07,80.81422120008878\r
2023-07-14,71.68563146435443\r
2023-07-19,54.85830157974746\r
2023-07-22,73.9236910069705\r
2023-07-27,97.90552860705665\r
2023-08-08,65.14960241766161\r
2023-08-21,64.08642010256642\r
2023-08-23,37.44026296535674\r
2023-09-05,3.7561419506727978\r
2023-09-07,42.63206398832329\r
2023-09-10,56.85568123031247\r
`;export{r as default};
