const r=`date,value\r
2017-02-19,57.83926662384127\r
2017-02-26,57.83926662384127\r
2017-03-01,65.3490482841552\r
2017-03-08,64.96550056820213\r
2017-03-11,74.39978334302458\r
2017-03-18,73.19459786953551\r
2017-03-21,73.19459786953551\r
2017-04-10,81.36629680568731\r
2017-04-17,81.36629680568731\r
2017-04-20,82.61963195837686\r
2017-06-19,70.41108394643479\r
2017-06-26,70.41108394643479\r
2017-06-29,70.41108394643479\r
2017-07-04,59.68466985972874\r
2017-07-06,59.68466985972874\r
2017-07-09,59.68466985972874\r
2017-07-11,57.472777929639896\r
2017-07-14,67.66791396219091\r
2017-07-19,65.3490482841552\r
2017-07-21,65.3490482841552\r
2017-07-24,65.3490482841552\r
2017-07-29,56.015509945123696\r
2017-07-31,56.015509945123696\r
2017-08-03,56.015509945123696\r
2017-08-05,56.015509945123696\r
2017-08-08,58.206621164552445\r
2017-08-10,53.49895732248549\r
2017-08-13,60.80222981898734\r
2017-08-15,60.80222981898734\r
2017-08-18,53.142971129060626\r
2017-08-20,60.80222981898734\r
2017-08-23,46.88803410218223\r
2017-08-25,62.304271366285235\r
2017-08-30,47.56858418144386\r
2017-09-02,48.940594566079405\r
2017-09-04,42.88196433493135\r
2017-09-07,42.88196433493135\r
2017-09-12,42.88196433493135\r
2017-09-17,39.965587630884706\r
2017-09-22,39.965587630884706\r
2017-09-24,39.965587630884706\r
2017-09-27,53.142971129060626\r
2017-09-29,53.142971129060626\r
2017-10-04,53.142971129060626\r
2017-10-07,53.142971129060626\r
2017-10-09,42.554158511294354\r
2017-10-12,49.632028457403955\r
2017-10-17,46.21113865461963\r
2017-10-19,54.57220978610708\r
2017-10-22,46.549128701482815\r
2017-10-24,54.57220978610708\r
2017-10-27,41.57636822416893\r
2017-10-29,44.20251732236126\r
2017-11-01,44.20251732236126\r
2017-11-03,35.582793154296816\r
2017-11-06,35.582793154296816\r
2017-11-16,32.56956896106483\r
2017-11-18,32.56956896106483\r
2017-11-21,40.929216022762894\r
2017-11-23,40.929216022762894\r
2017-11-26,38.06408292151476\r
2017-11-28,41.57636822416893\r
2017-12-01,41.57636822416893\r
2017-12-03,39.327924488593915\r
2017-12-06,39.327924488593915\r
2017-12-16,37.7505268638087\r
2017-12-21,43.87098324937146\r
2017-12-23,43.87098324937146\r
2017-12-26,43.87098324937146\r
2017-12-28,39.64627918113831\r
2018-01-05,35.27702198295074\r
2018-01-07,35.27702198295074\r
2018-01-12,35.27702198295074\r
2018-01-15,35.27702198295074\r
2018-02-04,44.868366363876504\r
2018-02-09,54.57220978610708\r
2018-02-11,54.57220978610708\r
2018-02-14,49.97909688058187\r
2018-02-16,52.78786976093214\r
2018-02-19,52.78786976093214\r
2018-02-21,49.97909688058187\r
2018-03-26,77.24024337828264\r
2018-03-31,77.24024337828264\r
2018-04-02,77.24024337828264\r
2018-04-05,80.12010223253476\r
2018-04-10,74.80313691610228\r
2018-04-15,74.80313691610228\r
2018-04-20,71.99674913411513\r
2018-04-22,71.99674913411513\r
2018-04-25,90.28805860559069\r
2018-04-30,80.53470528841359\r
2018-05-05,85.14761279925298\r
2018-05-07,78.88107651424762\r
2018-05-10,78.88107651424762\r
2018-05-20,76.8320424771761\r
2018-05-25,76.8320424771761\r
2018-05-30,76.8320424771761\r
2018-06-09,85.57169357693223\r
2018-06-11,85.57169357693223\r
2018-06-14,85.57169357693223\r
2018-06-16,85.57169357693223\r
2018-06-19,86.42220380911607\r
2018-06-21,84.72431624167326\r
2018-06-24,84.72431624167326\r
2018-06-26,84.72431624167326\r
2018-06-29,84.72431624167326\r
2018-07-04,80.9501038285302\r
2018-07-06,80.9501038285302\r
2018-07-09,85.14761279925298\r
2018-07-11,85.57169357693223\r
2018-07-14,80.12010223253476\r
2018-07-16,89.42354740704305\r
2018-07-19,74.80313691610228\r
2018-07-21,89.42354740704305\r
2018-07-24,78.4696659634898\r
2018-07-26,84.30180490554727\r
2018-07-29,76.42464670484017\r
2018-07-31,85.14761279925298\r
2018-08-03,85.14761279925298\r
2018-08-05,77.64924831654359\r
2018-08-08,78.05905620543602\r
2018-08-10,64.20092781045939\r
2018-08-15,64.20092781045939\r
2018-08-18,64.20092781045939\r
2018-08-23,75.20730115388248\r
2018-08-25,75.20730115388248\r
2018-08-28,75.20730115388248\r
2018-08-30,75.20730115388248\r
2018-09-02,75.20730115388248\r
2018-09-04,57.83926662384127\r
2018-09-07,71.20227459734097\r
2018-09-09,71.20227459734097\r
2018-09-12,71.20227459734097\r
2018-09-14,55.29210808331876\r
2018-09-17,55.29210808331876\r
2018-09-22,57.10715649231165\r
2018-09-24,57.10715649231165\r
2018-09-27,67.66791396219091\r
2018-09-29,67.66791396219091\r
2018-10-02,53.142971129060626\r
2018-10-04,60.42885318965173\r
2018-10-09,52.78786976093214\r
2018-10-12,52.78786976093214\r
2018-10-22,52.08032759056971\r
2018-10-24,52.08032759056971\r
2018-12-06,52.78786976093214\r
2018-12-08,52.78786976093214\r
2018-12-11,52.78786976093214\r
2019-01-05,60.056332751001406\r
2019-01-07,60.056332751001406\r
2019-01-10,64.58279331949282\r
2019-01-12,64.58279331949282\r
2019-01-15,55.65337179936613\r
2019-01-17,55.65337179936613\r
2019-01-22,60.056332751001406\r
2019-01-25,48.940594566079405\r
2019-01-27,51.025688826976825\r
2019-01-30,50.6759286558639\r
2019-02-04,55.65337179936613\r
2019-02-06,55.65337179936613\r
2019-02-09,55.65337179936613\r
2019-02-11,69.23047586386028\r
2019-02-14,65.3490482841552\r
2019-02-16,72.3952149446347\r
2019-02-21,72.3952149446347\r
2019-02-26,72.3952149446347\r
2019-03-01,72.79449823992604\r
2019-03-03,55.65337179936613\r
2019-03-08,55.65337179936613\r
2019-03-11,61.55154625978806\r
2019-03-13,61.55154625978806\r
2019-03-16,59.31386587997775\r
2019-03-18,70.41108394643479\r
2019-03-21,63.06039454624196\r
2019-03-23,63.06039454624196\r
2019-03-26,63.06039454624196\r
2019-03-28,78.05905620543602\r
2019-03-31,57.83926662384127\r
2019-04-05,59.68466985972874\r
2019-04-07,73.99724155770274\r
2019-04-10,73.99724155770274\r
2019-04-15,73.99724155770274\r
2019-04-17,73.19459786953551\r
2019-04-20,73.19459786953551\r
2019-04-30,84.30180490554727\r
2019-05-02,84.30180490554727\r
2019-05-05,92.4628395114059\r
2019-05-07,92.4628395114059\r
2019-05-10,85.57169357693223\r
2019-05-12,85.57169357693223\r
2019-05-15,85.57169357693223\r
2019-05-20,88.9924529948707\r
2019-05-25,85.57169357693223\r
2019-05-30,88.9924529948707\r
2019-06-01,88.9924529948707\r
2019-06-04,99.55057456788792\r
2019-06-06,99.55057456788792\r
2019-06-11,99.55057456788792\r
2019-06-14,99.55057456788792\r
2019-06-19,96.4257424778407\r
2019-06-21,96.4257424778407\r
2019-06-24,96.4257424778407\r
2019-06-26,96.4257424778407\r
2019-06-29,96.86987526091457\r
2019-07-01,96.86987526091457\r
2019-07-04,96.86987526091457\r
2019-07-06,88.56213398452564\r
2019-07-09,88.56213398452564\r
2019-07-11,88.56213398452564\r
2019-07-14,88.56213398452564\r
2019-07-19,100.0\r
2019-07-21,100.0\r
2019-07-24,100.0\r
2019-07-26,100.0\r
2019-07-29,84.72431624167326\r
2019-07-31,84.72431624167326\r
2019-08-03,84.72431624167326\r
2019-08-05,70.01672301485237\r
2019-08-08,70.01672301485237\r
2019-08-10,79.70629571287269\r
2019-08-15,58.5748401492978\r
2019-08-18,85.14761279925298\r
2019-08-23,86.42220380911607\r
2019-08-25,86.42220380911607\r
2019-08-28,86.42220380911607\r
2019-08-30,86.42220380911607\r
2019-09-02,65.7334352015367\r
2019-09-04,66.11866006108959\r
2019-09-07,63.06039454624196\r
2019-09-09,65.3490482841552\r
2019-09-12,53.49895732248549\r
2019-09-14,53.49895732248549\r
2019-09-17,59.31386587997775\r
2019-09-19,53.142971129060626\r
2019-09-24,63.43972713459044\r
2019-09-27,39.327924488593915\r
2019-09-29,63.43972713459044\r
2019-10-02,43.21070494785776\r
2019-10-04,43.54037852395713\r
2019-10-07,37.437936604253444\r
2019-10-09,37.437936604253444\r
2019-10-14,52.4336547383372\r
2019-10-17,52.4336547383372\r
2019-10-19,45.874065671166576\r
2019-10-27,47.910225495151224\r
2019-10-29,47.910225495151224\r
2019-11-03,47.910225495151224\r
2019-11-06,54.9317202563088\r
2019-11-16,54.9317202563088\r
2019-11-26,43.54037852395713\r
2019-11-28,43.54037852395713\r
2019-12-21,47.910225495151224\r
2019-12-23,47.910225495151224\r
2019-12-26,49.632028457403955\r
2019-12-28,49.632028457403955\r
2020-01-05,68.057309869271\r
2020-01-10,68.057309869271\r
2020-01-12,68.057309869271\r
2020-01-15,68.057309869271\r
2020-01-17,68.057309869271\r
2020-02-04,45.874065671166576\r
2020-02-09,45.874065671166576\r
2020-02-14,49.632028457403955\r
2020-02-19,49.632028457403955\r
2020-02-21,70.01672301485237\r
2020-02-24,60.80222981898734\r
2020-02-26,60.80222981898734\r
2020-03-07,67.27934979736922\r
2020-03-15,78.05905620543602\r
2020-03-20,78.05905620543602\r
2020-03-22,78.05905620543602\r
2020-03-30,78.05905620543602\r
2020-04-04,58.206621164552445\r
2020-04-06,58.206621164552445\r
2020-04-09,85.57169357693223\r
2020-04-11,85.57169357693223\r
2020-04-14,70.41108394643479\r
2020-04-24,86.84863128275781\r
2020-04-26,98.20682251841747\r
2020-04-29,82.61963195837686\r
2020-05-04,98.20682251841747\r
2020-05-06,98.20682251841747\r
2020-05-09,98.20682251841747\r
2020-05-14,79.29328678622532\r
2020-05-19,100.0\r
2020-05-21,79.29328678622532\r
2020-05-24,100.0\r
2020-05-26,100.0\r
2020-05-29,100.0\r
2020-05-31,100.0\r
2020-06-03,100.0\r
2020-06-05,100.0\r
2020-06-08,100.0\r
2020-06-23,93.33813332355066\r
2020-06-25,93.33813332355066\r
2020-06-28,99.55057456788792\r
2020-06-30,99.55057456788792\r
2020-07-03,88.9924529948707\r
2020-07-05,88.9924529948707\r
2020-07-08,93.33813332355066\r
2020-07-10,83.4591419252505\r
2020-07-13,83.4591419252505\r
2020-07-15,90.72147348650064\r
2020-07-18,90.72147348650064\r
2020-07-20,77.24024337828264\r
2020-07-23,77.24024337828264\r
2020-08-02,90.28805860559069\r
2020-08-04,90.28805860559069\r
2020-08-07,90.28805860559069\r
2020-08-09,90.28805860559069\r
2020-08-14,90.28805860559069\r
2020-08-17,90.28805860559069\r
2020-08-19,43.21070494785776\r
2020-08-22,78.88107651424762\r
2020-08-24,78.4696659634898\r
2020-08-27,82.20106190601972\r
2020-09-01,46.549128701482815\r
2020-09-03,46.549128701482815\r
2020-09-06,56.378521069625265\r
2020-09-08,47.22785315809784\r
2020-09-13,60.056332751001406\r
2020-09-16,40.929216022762894\r
2020-09-18,57.472777929639896\r
2020-09-21,57.472777929639896\r
2020-09-23,30.519858776273324\r
2020-09-26,46.21113865461963\r
2020-09-28,46.21113865461963\r
2020-10-03,46.21113865461963\r
2020-10-06,46.21113865461963\r
2020-10-08,46.21113865461963\r
2020-10-11,68.4475362975108\r
2020-10-13,67.66791396219091\r
2020-10-16,67.66791396219091\r
2020-10-18,67.66791396219091\r
2020-11-05,33.16426305815649\r
2020-11-07,33.16426305815649\r
2020-11-10,33.16426305815649\r
2020-11-17,33.16426305815649\r
2020-11-20,48.940594566079405\r
2020-11-22,48.940594566079405\r
2020-11-25,54.57220978610708\r
2020-11-27,54.57220978610708\r
2020-11-30,54.57220978610708\r
2020-12-02,54.57220978610708\r
2020-12-07,52.08032759056971\r
2020-12-25,52.08032759056971\r
2020-12-30,52.08032759056971\r
2021-01-14,49.632028457403955\r
2021-01-19,56.74240373018393\r
2021-01-21,56.74240373018393\r
2021-01-24,51.025688826976825\r
2021-01-26,57.83926662384127\r
2021-01-29,57.83926662384127\r
2021-01-31,51.72788985607293\r
2021-02-03,51.72788985607293\r
2021-02-23,62.681908854666005\r
2021-02-25,62.681908854666005\r
2021-02-28,67.27934979736922\r
2021-03-05,67.27934979736922\r
2021-03-07,57.10715649231165\r
2021-03-10,73.59551268858031\r
2021-03-15,80.12010223253476\r
2021-03-17,80.12010223253476\r
2021-03-20,80.12010223253476\r
2021-03-22,68.83859203197936\r
2021-03-25,68.83859203197936\r
2021-03-30,79.70629571287269\r
2021-04-01,79.70629571287269\r
2021-04-04,79.70629571287269\r
2021-04-09,79.70629571287269\r
2021-04-11,63.43972713459044\r
2021-04-14,63.43972713459044\r
2021-05-04,87.70382602526517\r
2021-05-06,87.70382602526517\r
2021-05-09,87.70382602526517\r
2021-05-11,87.70382602526517\r
2021-05-14,87.70382602526517\r
2021-05-19,79.29328678622532\r
2021-05-21,79.29328678622532\r
2021-05-26,79.29328678622532\r
2021-05-29,79.29328678622532\r
2021-06-03,86.42220380911607\r
2021-06-05,86.42220380911607\r
2021-06-08,88.13259133895937\r
2021-06-10,88.13259133895937\r
2021-06-13,87.70382602526517\r
2021-06-15,97.76041616907722\r
2021-06-18,97.76041616907722\r
2021-06-28,87.27583901470845\r
2021-06-30,98.20682251841747\r
2021-07-03,100.0\r
2021-07-05,100.0\r
2021-07-08,100.0\r
2021-07-10,93.77692968159896\r
2021-07-13,93.77692968159896\r
2021-07-15,79.70629571287269\r
2021-07-18,86.84863128275781\r
2021-07-20,86.84863128275781\r
2021-07-23,84.30180490554727\r
2021-07-25,92.90010295910359\r
2021-07-28,83.880079796658\r
2021-07-30,89.42354740704305\r
2021-08-02,83.880079796658\r
2021-08-07,84.72431624167326\r
2021-08-09,78.4696659634898\r
2021-08-12,78.4696659634898\r
2021-08-17,65.7334352015367\r
2021-08-19,65.7334352015367\r
2021-08-22,71.59910196443863\r
2021-08-24,71.59910196443863\r
2021-08-27,65.7334352015367\r
2021-08-29,70.01672301485237\r
2021-09-01,70.01672301485237\r
2021-09-06,62.304271366285235\r
2021-09-11,53.142971129060626\r
2021-09-13,53.142971129060626\r
2021-09-18,51.72788985607293\r
2021-09-21,51.72788985607293\r
2021-10-06,43.21070494785776\r
2021-10-08,43.21070494785776\r
2021-10-11,44.20251732236126\r
2021-10-13,44.20251732236126\r
2021-10-16,39.64627918113831\r
2021-10-18,41.57636822416893\r
2021-10-23,37.7505268638087\r
2021-10-26,42.88196433493135\r
2021-10-28,39.965587630884706\r
2021-11-02,39.965587630884706\r
2021-11-05,39.965587630884706\r
2021-11-20,35.88954485913484\r
2021-11-22,35.88954485913484\r
2021-11-30,50.32706414518948\r
2021-12-02,39.010525524152406\r
2021-12-05,45.53791147177273\r
2021-12-07,45.53791147177273\r
2021-12-10,40.28584788089508\r
2021-12-12,51.72788985607293\r
2021-12-15,51.72788985607293\r
2021-12-20,44.20251732236126\r
2021-12-22,41.252320069057774\r
2022-01-09,47.910225495151224\r
2022-01-11,47.910225495151224\r
2022-01-14,48.25277543275162\r
2022-01-16,48.25277543275162\r
2022-01-21,42.554158511294354\r
2022-01-24,52.4336547383372\r
2022-01-26,52.08032759056971\r
2022-01-29,52.08032759056971\r
2022-02-03,52.08032759056971\r
2022-02-08,47.56858418144386\r
2022-02-10,47.56858418144386\r
2022-02-13,47.56858418144386\r
2022-02-15,47.56858418144386\r
2022-02-18,61.55154625978806\r
2022-02-20,46.21113865461963\r
2022-02-23,51.72788985607293\r
2022-02-28,48.940594566079405\r
2022-03-02,57.472777929639896\r
2022-03-07,54.57220978610708\r
2022-03-25,63.06039454624196\r
2022-03-27,63.06039454624196\r
2022-04-01,63.06039454624196\r
2022-04-04,64.58279331949282\r
2022-04-09,71.59910196443863\r
2022-04-11,71.59910196443863\r
2022-04-14,63.81990532021031\r
2022-04-16,76.42464670484017\r
2022-05-04,86.84863128275781\r
2022-05-09,86.84863128275781\r
2022-05-11,86.84863128275781\r
2022-05-14,83.4591419252505\r
2022-05-16,84.72431624167326\r
2022-05-21,78.88107651424762\r
2022-05-24,78.88107651424762\r
2022-05-29,80.53470528841359\r
2022-05-31,80.53470528841359\r
2022-06-18,48.25277543275162\r
2022-06-20,48.25277543275162\r
2022-06-25,48.25277543275162\r
2022-06-28,48.25277543275162\r
2022-07-03,69.23047586386028\r
2022-07-05,69.23047586386028\r
2022-07-08,74.39978334302458\r
2022-07-10,74.39978334302458\r
2022-07-13,69.23047586386028\r
2022-07-15,79.29328678622532\r
2022-07-18,70.8062682002702\r
2022-07-20,79.70629571287269\r
2022-07-23,72.79449823992604\r
2022-07-25,76.42464670484017\r
2022-07-28,76.42464670484017\r
2022-07-30,73.99724155770274\r
2022-08-02,74.39978334302458\r
2022-08-04,63.43972713459044\r
2022-08-07,70.01672301485237\r
2022-08-09,70.01672301485237\r
2022-08-12,70.01672301485237\r
2022-08-14,65.3490482841552\r
2022-08-22,62.304271366285235\r
2022-08-24,62.304271366285235\r
2022-08-27,62.304271366285235\r
2022-08-29,62.304271366285235\r
2022-09-01,62.681908854666005\r
2022-09-03,43.21070494785776\r
2022-09-06,43.21070494785776\r
2022-09-08,43.21070494785776\r
2022-09-11,55.65337179936613\r
2022-09-16,61.927483394507156\r
2022-09-18,61.927483394507156\r
2022-09-21,61.927483394507156\r
2022-09-23,59.68466985972874\r
2022-09-26,60.056332751001406\r
2022-09-28,54.9317202563088\r
2022-10-01,54.9317202563088\r
2022-10-06,58.206621164552445\r
2022-10-11,56.378521069625265\r
2022-10-16,56.378521069625265\r
2022-11-05,51.72788985607293\r
2022-11-10,51.72788985607293\r
2022-11-20,51.025688826976825\r
2022-11-22,51.025688826976825\r
2022-11-25,55.29210808331876\r
2022-11-30,51.3763430825335\r
2022-12-02,54.9317202563088\r
2022-12-05,49.632028457403955\r
2022-12-07,53.85582682993483\r
2022-12-10,53.85582682993483\r
2023-01-09,39.327924488593915\r
2023-01-19,42.88196433493135\r
2023-01-21,41.252320069057774\r
2023-01-24,57.472777929639896\r
2023-01-26,57.472777929639896\r
2023-01-29,39.010525524152406\r
2023-01-31,54.57220978610708\r
2023-02-03,32.27372525196517\r
2023-02-05,35.27702198295074\r
2023-02-08,33.16426305815649\r
2023-02-10,36.50598127463822\r
2023-02-13,36.50598127463822\r
2023-02-15,35.582793154296816\r
2023-02-18,39.327924488593915\r
2023-03-05,44.20251732236126\r
2023-03-07,44.20251732236126\r
2023-03-10,46.549128701482815\r
2023-03-12,46.549128701482815\r
2023-03-17,38.69408427284882\r
2023-03-20,38.69408427284882\r
2023-03-25,68.057309869271\r
2023-03-27,68.057309869271\r
2023-03-30,75.20730115388248\r
2023-04-06,70.41108394643479\r
2023-04-09,70.41108394643479\r
2023-04-14,83.4591419252505\r
2023-04-16,83.4591419252505\r
2023-04-19,92.02634390745855\r
2023-04-24,84.72431624167326\r
2023-04-26,91.59061707814286\r
2023-04-29,88.9924529948707\r
2023-05-01,89.42354740704305\r
2023-05-04,89.42354740704305\r
2023-05-06,83.4591419252505\r
2023-05-24,82.61963195837686\r
2023-05-26,82.61963195837686\r
2023-05-29,82.61963195837686\r
2023-06-03,84.72431624167326\r
2023-06-08,92.4628395114059\r
2023-06-10,92.4628395114059\r
2023-06-13,92.4628395114059\r
2023-06-15,92.4628395114059\r
2023-06-18,92.90010295910359\r
2023-06-20,88.13259133895937\r
2023-06-23,94.6568167050068\r
2023-06-25,94.6568167050068\r
2023-06-28,94.6568167050068\r
2023-07-03,88.56213398452564\r
2023-07-05,88.56213398452564\r
2023-07-08,89.42354740704305\r
2023-07-10,89.42354740704305\r
2023-07-13,78.4696659634898\r
2023-07-15,79.29328678622532\r
2023-07-18,78.4696659634898\r
2023-07-20,88.13259133895937\r
2023-07-23,79.70629571287269\r
2023-07-25,90.28805860559069\r
2023-07-28,90.28805860559069\r
2023-07-30,81.36629680568731\r
2023-08-02,85.57169357693223\r
2023-08-04,78.4696659634898\r
2023-08-07,78.4696659634898\r
2023-08-09,78.4696659634898\r
2023-08-12,66.5047216100572\r
2023-08-14,67.66791396219091\r
2023-08-17,62.304271366285235\r
2023-08-19,65.7334352015367\r
2023-08-22,56.378521069625265\r
2023-08-24,58.5748401492978\r
2023-08-29,58.206621164552445\r
2023-09-01,66.11866006108959\r
2023-09-03,56.74240373018393\r
2023-09-06,57.10715649231165\r
2023-09-08,57.10715649231165\r
2023-09-11,49.28586048085589\r
2023-09-13,49.632028457403955\r
2023-09-26,40.60705798802596\r
2023-10-01,48.25277543275162\r
2023-10-03,48.25277543275162\r
2023-10-06,43.87098324937146\r
2023-10-08,47.56858418144386\r
2023-10-11,42.554158511294354\r
2023-10-13,45.20267778828561\r
2023-10-21,35.88954485913484\r
2023-10-31,37.437936604253444\r
2023-11-05,40.929216022762894\r
2023-11-07,40.929216022762894\r
2023-11-20,25.75180097437967\r
2023-11-22,25.75180097437967\r
2023-11-25,36.50598127463822\r
2023-12-02,34.972233514259834\r
2023-12-05,42.22728931546416\r
`;export{r as default};
