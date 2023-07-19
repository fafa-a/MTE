const r=`date,value\r
2017-02-18,2483800\r
2017-02-25,2523900\r
2017-02-28,2514200\r
2017-03-10,2597600\r
2017-03-17,2651000\r
2017-03-27,2680100\r
2017-03-30,2754700\r
2017-04-06,2751900\r
2017-04-09,2746800\r
2017-04-19,2666000\r
2017-04-29,2738600\r
2017-05-09,2828500\r
2017-05-16,3006000\r
2017-05-19,3003400\r
2017-05-26,3001600\r
2017-05-29,2708200\r
2017-06-05,2708200\r
2017-06-18,2867400\r
2017-06-25,2858000\r
2017-07-05,2823900\r
2017-08-02,2939800\r
2017-08-04,2939800\r
2017-08-07,2939800\r
2017-08-09,2941200\r
2017-08-17,2794600\r
2017-08-22,2792600\r
2017-08-24,2792600\r
2017-08-27,2896500\r
2017-08-29,2872100\r
2017-09-21,1852200\r
2017-09-28,1567400\r
2017-10-11,29400\r
2017-10-13,24200\r
2017-10-16,27500\r
2017-10-18,27300\r
2017-10-26,51700\r
2017-10-28,50500\r
2017-10-31,51200\r
2017-11-02,49400\r
2017-11-05,49400\r
2017-11-07,58500\r
2017-11-15,80000\r
2017-11-17,67600\r
2017-11-22,50300\r
2017-11-25,50300\r
2017-11-27,49300\r
2018-02-25,2725700\r
2018-03-02,2725700\r
2018-04-06,2792900\r
2018-04-19,2741700\r
2018-04-21,2749800\r
2018-04-24,2749800\r
2018-04-26,2749000\r
2018-05-04,2633700\r
2018-05-06,2643700\r
2018-05-11,2724700\r
2018-06-20,2806400\r
2018-06-23,2795800\r
2018-06-25,2816800\r
2018-06-28,2775100\r
2018-07-03,2823500\r
2018-07-08,2840800\r
2018-07-10,2839500\r
2018-07-13,2830800\r
2018-07-18,2743800\r
2018-07-20,2774100\r
2018-08-02,2838700\r
2018-08-04,2846600\r
2018-08-07,2873700\r
2018-08-12,2856300\r
2018-08-14,2926400\r
2018-08-19,2942600\r
2018-08-22,2878300\r
2018-09-08,2789500\r
2018-09-11,2774600\r
2018-09-16,2830900\r
2018-09-26,2893100\r
2018-09-28,2917000\r
2018-10-01,2917000\r
2018-10-06,2771800\r
2018-10-13,2766900\r
2018-10-16,2764500\r
2018-10-18,2818200\r
2018-10-21,2717400\r
2018-10-23,2768100\r
2019-02-13,2809500\r
2019-02-15,2834300\r
2019-02-18,2783100\r
2019-02-20,2760100\r
2019-02-23,2727900\r
2019-02-25,2727600\r
2019-03-07,2682200\r
2019-03-20,2570900\r
2019-03-22,2727800\r
2019-03-27,2742200\r
2019-03-30,2836300\r
2019-04-01,2840700\r
2019-04-11,2902200\r
2019-04-14,2969400\r
2019-04-19,3058400\r
2019-05-01,3033800\r
2019-05-06,2836000\r
2019-05-14,2888000\r
2019-05-16,2888000\r
2019-05-31,2830400\r
2019-06-25,2950500\r
2019-06-28,2965000\r
2019-06-30,2965000\r
2019-07-03,2976100\r
2019-07-05,2958900\r
2019-07-08,2978300\r
2019-07-10,2967100\r
2019-07-13,2978700\r
2019-07-15,2941800\r
2019-07-23,2952200\r
2019-07-25,2943200\r
2019-07-28,2932500\r
2019-08-02,2956500\r
2019-08-04,2921900\r
2019-08-12,2921500\r
2019-08-14,2895300\r
2019-08-19,2911600\r
2019-08-22,2999900\r
2019-08-24,2999900\r
2019-08-29,2988900\r
2019-09-03,2983500\r
2019-09-06,2978300\r
2019-09-08,2952100\r
2019-09-11,2952100\r
2019-09-13,2947500\r
2019-09-16,2937700\r
2019-09-18,2882800\r
2019-09-21,2882100\r
2019-10-11,1957800\r
2019-10-13,1983400\r
2019-10-16,1932500\r
2019-12-05,1883000\r
2020-02-23,1981400\r
2020-03-19,2343700\r
2020-03-24,2461900\r
2020-03-26,2461900\r
2020-03-31,2398600\r
2020-04-03,2488200\r
2020-04-05,2599100\r
2020-04-08,2599100\r
2020-04-10,2657700\r
2020-04-13,2608200\r
2020-04-15,2618900\r
2020-04-23,2574200\r
2020-05-18,2901300\r
2020-05-20,2877600\r
2020-05-25,2792200\r
2020-05-28,2869600\r
2020-05-30,2785000\r
2020-06-02,2814100\r
2020-06-24,2799400\r
2020-07-04,2831600\r
2020-07-07,2848400\r
2020-07-09,2844800\r
2020-07-14,2904400\r
2020-07-19,2882500\r
2020-07-22,2903500\r
2020-07-24,2870100\r
2020-07-27,2935300\r
2020-07-29,2896600\r
2020-08-08,2797500\r
2020-08-18,2789500\r
2020-09-12,2868600\r
2020-09-15,2856300\r
2020-09-17,2830200\r
2020-11-06,2385700\r
2020-11-09,2385700\r
2020-11-11,2385700\r
2020-11-14,2366500\r
2020-11-19,2353800\r
2020-11-21,2261800\r
2020-11-26,2279100\r
2020-11-29,2219300\r
2021-02-14,2661100\r
2021-02-17,2713600\r
2021-02-24,2701900\r
2021-02-27,2683600\r
2021-03-01,2678600\r
2021-03-04,2678600\r
2021-03-06,2707600\r
2021-03-09,2714100\r
2021-03-14,2728300\r
2021-03-24,2714500\r
2021-03-29,2780700\r
2021-03-31,2698200\r
2021-04-03,2721100\r
2021-04-05,2698100\r
2021-04-08,2720300\r
2021-04-13,2721300\r
2021-04-15,2714900\r
2021-04-18,2714900\r
2021-04-23,2670200\r
2021-04-25,2670200\r
2021-05-03,2780300\r
2021-05-08,2798700\r
2021-06-14,2779900\r
2021-06-19,2784700\r
2021-07-19,2874200\r
2021-07-22,2912100\r
2021-07-29,2900200\r
2021-08-11,2783500\r
2021-08-13,2783500\r
2021-08-26,2790000\r
2021-08-28,2799200\r
2021-09-02,2799200\r
2021-09-05,2799200\r
2021-09-22,2822800\r
2021-09-30,2836600\r
2021-10-07,2797100\r
2021-10-10,2861500\r
2021-10-12,2852700\r
2021-10-15,2870300\r
2021-10-17,2838300\r
2021-10-22,2857200\r
2021-10-27,2756300\r
2021-11-09,2808600\r
2021-11-19,2807300\r
2021-11-29,2663400\r
2022-02-09,2657100\r
2022-02-12,2657100\r
2022-02-27,2648200\r
2022-03-06,2730600\r
2022-03-09,2730600\r
2022-03-24,2750600\r
2022-03-26,2750600\r
2022-05-28,2862800\r
2022-05-30,2870800\r
2022-06-02,2840600\r
2022-06-04,2824800\r
2022-06-14,2932900\r
2022-06-17,3023600\r
2022-06-19,3023600\r
2022-06-24,3023600\r
2022-06-27,2963700\r
2022-06-29,2623600\r
2022-07-02,2881000\r
2022-07-04,2881000\r
2022-07-12,2928500\r
2022-07-14,2951600\r
2022-07-17,2951600\r
2022-07-19,2857200\r
2022-07-24,2873700\r
2022-08-01,2939000\r
2022-08-03,2908500\r
2022-08-06,2902800\r
2022-08-08,2909900\r
2022-08-11,2909900\r
2022-08-13,2916500\r
2022-08-18,2925100\r
2022-09-05,2811600\r
2022-09-12,2860700\r
2022-09-20,2892000\r
2022-09-22,2827400\r
2022-09-30,2870100\r
2022-10-05,2749200\r
2022-11-11,2632600\r
2022-11-19,2632600\r
2023-02-09,2757300\r
2023-02-12,2830500\r
2023-02-14,2745300\r
2023-03-04,2744300\r
2023-03-14,2733200\r
2023-04-05,2746000\r
2023-04-08,2797900\r
2023-06-14,2790700\r
2023-06-24,2831500\r
2023-06-27,2849500\r
2023-07-02,2847500\r
2023-07-09,2812600\r
`;export{r as default};
