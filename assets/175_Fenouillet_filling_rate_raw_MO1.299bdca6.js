const n=`date,value\r
2017-02-19,56.52146718333303\r
2017-03-01,46.39675980324618\r
2017-03-11,53.91179980941339\r
2017-04-10,82.29055946402521\r
2017-04-20,64.65895987860895\r
2017-05-30,85.40125584167184\r
2017-06-19,59.18279902560401\r
2017-06-29,53.91179980941339\r
2017-07-04,56.52146718333303\r
2017-07-14,61.89541816510579\r
2017-07-24,46.39675980324618\r
2017-07-29,53.91179980941339\r
2017-08-18,41.65260687747555\r
2017-09-02,28.73841457225947\r
2017-09-12,28.73841457225947\r
2017-09-17,32.81923356425545\r
2017-09-27,48.84903413748331\r
2017-10-07,26.78400783801183\r
2017-10-12,23.050448744460496\r
2017-10-17,32.81923356425545\r
2017-10-22,41.65260687747555\r
2017-10-27,26.78400783801183\r
2017-11-01,37.125426265471454\r
2017-11-16,26.78400783801183\r
2017-11-21,32.81923356425545\r
2017-11-26,43.99779982154533\r
2017-12-01,37.125426265471454\r
2017-12-16,30.7503620938611\r
2017-12-21,32.81923356425545\r
2018-01-05,21.27270463046676\r
2018-02-04,39.36165206466289\r
2018-02-09,32.81923356425545\r
2018-02-14,41.65260687747555\r
2018-03-26,59.18279902560401\r
2018-04-05,79.22852767636468\r
2018-04-15,85.40125584167184\r
2018-04-20,85.40125584167184\r
2018-04-25,73.25164533779557\r
2018-04-30,82.29055946402521\r
2018-05-20,85.40125584167184\r
2018-06-09,100.0\r
2018-06-19,95.02250361474373\r
2018-06-29,46.39675980324618\r
2018-07-09,82.29055946402521\r
2018-07-14,56.52146718333303\r
2018-07-19,64.65895987860895\r
2018-07-24,64.65895987860895\r
2018-07-29,67.47307117606633\r
2018-08-08,56.52146718333303\r
2018-08-23,76.21545522752041\r
2018-09-02,53.91179980941339\r
2018-09-07,51.35418730197585\r
2018-09-27,37.125426265471454\r
2018-10-02,28.73841457225947\r
2018-10-22,41.65260687747555\r
2018-12-01,70.3374101435331\r
2018-12-06,79.22852767636468\r
2018-12-11,67.47307117606633\r
2019-01-05,53.91179980941339\r
2019-01-10,39.36165206466289\r
2019-01-15,39.36165206466289\r
2019-01-25,39.36165206466289\r
2019-01-30,59.18279902560401\r
2019-02-04,48.84903413748331\r
2019-02-14,56.52146718333303\r
2019-03-01,41.65260687747555\r
2019-03-11,46.39675980324618\r
2019-03-16,43.99779982154533\r
2019-03-21,39.36165206466289\r
2019-03-31,26.78400783801183\r
2019-04-05,61.89541816510579\r
2019-04-15,53.91179980941339\r
2019-04-30,70.3374101435331\r
2019-05-05,64.65895987860895\r
2019-05-10,53.91179980941339\r
2019-05-30,88.56033011861113\r
2019-06-04,82.29055946402521\r
2019-06-19,73.25164533779557\r
2019-06-24,51.35418730197585\r
2019-06-29,85.40125584167184\r
2019-07-04,100.0\r
2019-07-14,100.0\r
2019-07-19,85.40125584167184\r
2019-07-24,59.18279902560401\r
2019-07-29,48.84903413748331\r
2019-08-03,56.52146718333303\r
2019-08-08,39.36165206466289\r
2019-08-18,70.3374101435331\r
2019-08-23,51.35418730197585\r
2019-09-02,56.52146718333303\r
2019-09-07,28.73841457225947\r
2019-09-12,34.94444168530427\r
2019-09-17,59.18279902560401\r
2019-09-27,4.931244134726778\r
2019-10-02,46.39675980324618\r
2019-10-07,32.81923356425545\r
2019-10-27,46.39675980324618\r
2019-11-06,43.99779982154533\r
2019-11-16,41.65260687747555\r
2019-12-21,41.65260687747555\r
2019-12-26,24.887791031569787\r
2020-01-05,70.3374101435331\r
2020-02-04,59.18279902560401\r
2020-02-14,46.39675980324618\r
2020-02-19,61.89541816510579\r
2020-02-24,61.89541816510579\r
2020-03-15,64.65895987860895\r
2020-04-04,46.39675980324618\r
2020-04-09,85.40125584167184\r
2020-04-14,51.35418730197585\r
2020-04-24,79.22852767636468\r
2020-04-29,56.52146718333303\r
2020-05-04,91.76750327737624\r
2020-05-09,79.22852767636468\r
2020-05-24,88.56033011861113\r
2020-06-03,100.0\r
2020-06-08,64.65895987860895\r
2020-06-23,82.29055946402521\r
2020-06-28,85.40125584167184\r
2020-07-03,67.47307117606633\r
2020-07-08,64.65895987860895\r
2020-07-13,100.0\r
2020-08-02,70.3374101435331\r
2020-08-07,43.99779982154533\r
2020-08-22,67.47307117606633\r
2020-08-27,37.125426265471454\r
2020-09-01,10.568526548405952\r
2020-09-06,73.25164533779557\r
2020-09-16,26.78400783801183\r
2020-09-26,28.73841457225947\r
2020-10-16,39.36165206466289\r
2020-11-05,32.81923356425545\r
2020-11-10,41.65260687747555\r
2020-11-20,32.81923356425545\r
2020-11-25,43.99779982154533\r
2020-12-25,39.36165206466289\r
2021-01-14,53.91179980941339\r
2021-01-19,43.99779982154533\r
2021-01-24,51.35418730197585\r
2021-02-23,46.39675980324618\r
2021-02-28,51.35418730197585\r
2021-03-05,67.47307117606633\r
2021-03-10,56.52146718333303\r
2021-03-15,61.89541816510579\r
2021-03-30,67.47307117606633\r
2021-04-14,59.18279902560401\r
2021-04-19,56.52146718333303\r
2021-05-04,82.29055946402521\r
2021-06-08,85.40125584167184\r
2021-06-13,98.32506640644291\r
2021-06-18,73.25164533779557\r
2021-06-28,64.65895987860895\r
2021-07-03,73.25164533779557\r
2021-07-13,64.65895987860895\r
2021-07-18,61.89541816510579\r
2021-07-23,95.02250361474373\r
2021-07-28,61.89541816510579\r
2021-08-02,67.47307117606633\r
2021-08-17,51.35418730197585\r
2021-08-22,70.3374101435331\r
2021-08-27,41.65260687747555\r
2021-09-01,41.65260687747555\r
2021-09-06,39.36165206466289\r
2021-09-11,41.65260687747555\r
2021-09-21,37.125426265471454\r
2021-10-01,32.81923356425545\r
2021-10-06,46.39675980324618\r
2021-10-11,37.125426265471454\r
2021-10-16,51.35418730197585\r
2021-10-26,43.99779982154533\r
2021-11-20,39.36165206466289\r
2021-11-30,48.84903413748331\r
2021-12-05,61.89541816510579\r
2021-12-20,39.36165206466289\r
2022-01-09,56.52146718333303\r
2022-01-14,48.84903413748331\r
2022-01-24,53.91179980941339\r
2022-02-08,41.65260687747555\r
2022-02-18,43.99779982154533\r
2022-02-23,51.35418730197585\r
2022-02-28,56.52146718333303\r
2022-03-25,46.39675980324618\r
2022-04-09,48.84903413748331\r
2022-04-14,56.52146718333303\r
2022-04-29,53.91179980941339\r
2022-05-09,61.89541816510579\r
2022-05-14,73.25164533779557\r
2022-05-24,82.29055946402521\r
2022-05-29,82.29055946402521\r
2022-07-03,85.40125584167184\r
2022-07-08,82.29055946402521\r
2022-07-13,67.47307117606633\r
2022-07-18,67.47307117606633\r
2022-08-02,73.25164533779557\r
2022-08-07,53.91179980941339\r
2022-08-22,53.91179980941339\r
2022-08-27,43.99779982154533\r
2022-09-01,34.94444168530427\r
2022-09-11,46.39675980324618\r
2022-09-16,53.91179980941339\r
2022-09-26,41.65260687747555\r
2022-10-06,41.65260687747555\r
2022-11-05,41.65260687747555\r
2022-11-20,28.73841457225947\r
2022-11-25,34.94444168530427\r
2022-11-30,37.125426265471454\r
2022-12-05,51.35418730197585\r
2023-01-04,43.99779982154533\r
2023-01-09,46.39675980324618\r
2023-01-19,39.36165206466289\r
2023-01-24,51.35418730197585\r
2023-01-29,39.36165206466289\r
2023-02-03,53.91179980941339\r
2023-02-08,51.35418730197585\r
2023-02-18,46.39675980324618\r
2023-03-05,53.91179980941339\r
2023-03-25,43.99779982154533\r
2023-04-14,51.35418730197585\r
2023-04-19,53.91179980941339\r
2023-04-24,53.91179980941339\r
2023-04-29,61.89541816510579\r
`;export{n as default};
