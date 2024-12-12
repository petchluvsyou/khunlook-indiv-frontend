export const keyToLabel: { [key: string]: string } = {
	P99: 'สูงกว่าเกณฑ์',
	P97: 'ค่อนข้างสูง',
	P85: 'ตามเกณฑ์',
	P15: 'ค่อนข้างเตี้ย',
	P3: 'เตี้ย',
};

export const colors: { [key: string]: string } = {
	P3: '#C36277',
	P15: '#D49D44',
	P85: '#718930',
	P97: '#486708',
	P99: '#AAAAAA',
};

export const heightForAgeBoy = [
	{ XValue: 0, P3: 46.3, P15: 47.9, P85: 51.8, P97: 53.4, P99: 54.3 },
	{ XValue: 1, P3: 51.1, P15: 52.7, P85: 56.7, P97: 58.4, P99: 59.3 },
	{ XValue: 2, P3: 54.7, P15: 56.4, P85: 60.5, P97: 62.2, P99: 63.1 },
	{ XValue: 3, P3: 57.6, P15: 59.3, P85: 63.5, P97: 65.3, P99: 66.2 },
	{ XValue: 4, P3: 60.0, P15: 61.7, P85: 66.0, P97: 67.8, P99: 68.7 },
	{ XValue: 5, P3: 61.9, P15: 63.7, P85: 68.1, P97: 69.9, P99: 70.8 },
	{ XValue: 6, P3: 63.6, P15: 65.4, P85: 69.8, P97: 71.6, P99: 72.6 },
	{ XValue: 7, P3: 65.1, P15: 66.9, P85: 71.4, P97: 73.2, P99: 74.2 },
	{ XValue: 8, P3: 66.5, P15: 68.3, P85: 72.9, P97: 74.7, P99: 75.7 },
	{ XValue: 9, P3: 67.7, P15: 69.6, P85: 74.3, P97: 76.2, P99: 77.2 },
	{ XValue: 10, P3: 69.0, P15: 70.9, P85: 75.6, P97: 77.6, P99: 78.6 },
	{ XValue: 11, P3: 70.2, P15: 72.1, P85: 77.0, P97: 78.9, P99: 80.0 },
	{ XValue: 12, P3: 71.3, P15: 73.3, P85: 78.2, P97: 80.2, P99: 81.3 },
	{ XValue: 13, P3: 72.4, P15: 74.4, P85: 79.4, P97: 81.5, P99: 82.6 },
	{ XValue: 14, P3: 73.4, P15: 75.5, P85: 80.6, P97: 82.7, P99: 83.8 },
	{ XValue: 15, P3: 74.4, P15: 76.5, P85: 81.8, P97: 83.9, P99: 85.0 },
	{ XValue: 16, P3: 75.4, P15: 77.5, P85: 82.9, P97: 85.1, P99: 86.2 },
	{ XValue: 17, P3: 76.3, P15: 78.5, P85: 84.0, P97: 86.2, P99: 87.4 },
	{ XValue: 18, P3: 77.2, P15: 79.5, P85: 85.1, P97: 87.3, P99: 88.5 },
	{ XValue: 19, P3: 78.1, P15: 80.4, P85: 86.1, P97: 88.4, P99: 89.7 },
	{ XValue: 20, P3: 78.9, P15: 81.3, P85: 87.1, P97: 89.5, P99: 90.7 },
	{ XValue: 21, P3: 79.7, P15: 82.2, P85: 88.1, P97: 90.5, P99: 91.8 },
	{ XValue: 22, P3: 80.5, P15: 83.0, P85: 89.1, P97: 91.6, P99: 92.9 },
	{ XValue: 23, P3: 81.3, P15: 83.8, P85: 90.0, P97: 92.6, P99: 93.9 },
	{ XValue: 24, P3: 82.1, P15: 84.6, P85: 91.0, P97: 93.6, P99: 94.9 },
	{ XValue: 24, P3: 81.4, P15: 83.9, P85: 90.3, P97: 92.9, P99: 94.2 },
	{ XValue: 25, P3: 82.1, P15: 84.7, P85: 91.2, P97: 93.8, P99: 95.2 },
	{ XValue: 26, P3: 82.8, P15: 85.5, P85: 92.1, P97: 94.8, P99: 96.2 },
	{ XValue: 27, P3: 83.5, P15: 86.3, P85: 93.0, P97: 95.7, P99: 97.1 },
	{ XValue: 28, P3: 84.2, P15: 87.0, P85: 93.8, P97: 96.6, P99: 98.1 },
	{ XValue: 29, P3: 84.9, P15: 87.7, P85: 94.7, P97: 97.5, P99: 99.0 },
	{ XValue: 30, P3: 85.5, P15: 88.4, P85: 95.5, P97: 98.3, P99: 99.9 },
	{ XValue: 31, P3: 86.2, P15: 89.1, P85: 96.2, P97: 99.2, P99: 100.7 },
	{ XValue: 32, P3: 86.8, P15: 89.7, P85: 97.0, P97: 100.0, P99: 101.5 },
	{ XValue: 33, P3: 87.4, P15: 90.4, P85: 97.8, P97: 100.8, P99: 102.4 },
	{ XValue: 34, P3: 88.0, P15: 91.0, P85: 98.5, P97: 101.5, P99: 103.2 },
	{ XValue: 35, P3: 88.5, P15: 91.6, P85: 99.2, P97: 102.3, P99: 103.9 },
	{ XValue: 36, P3: 89.1, P15: 92.2, P85: 99.9, P97: 103.1, P99: 104.7 },
	{ XValue: 37, P3: 89.7, P15: 92.8, P85: 100.6, P97: 103.8, P99: 105.5 },
	{ XValue: 38, P3: 90.2, P15: 93.4, P85: 101.3, P97: 104.5, P99: 106.2 },
	{ XValue: 39, P3: 90.8, P15: 94.0, P85: 102.0, P97: 105.2, P99: 106.9 },
	{ XValue: 40, P3: 91.3, P15: 94.6, P85: 102.7, P97: 105.9, P99: 107.7 },
	{ XValue: 41, P3: 91.9, P15: 95.2, P85: 103.3, P97: 106.6, P99: 108.4 },
	{ XValue: 42, P3: 92.4, P15: 95.7, P85: 104.0, P97: 107.3, P99: 109.1 },
	{ XValue: 43, P3: 92.9, P15: 96.3, P85: 104.6, P97: 108.0, P99: 109.8 },
	{ XValue: 44, P3: 93.4, P15: 96.8, P85: 105.2, P97: 108.6, P99: 110.4 },
	{ XValue: 45, P3: 93.9, P15: 97.4, P85: 105.8, P97: 109.3, P99: 111.1 },
	{ XValue: 46, P3: 94.4, P15: 97.9, P85: 106.5, P97: 109.9, P99: 111.8 },
	{ XValue: 47, P3: 94.9, P15: 98.5, P85: 107.1, P97: 110.6, P99: 112.4 },
	{ XValue: 48, P3: 95.4, P15: 99.0, P85: 107.7, P97: 111.2, P99: 113.1 },
	{ XValue: 49, P3: 95.9, P15: 99.5, P85: 108.3, P97: 111.8, P99: 113.7 },
	{ XValue: 50, P3: 96.4, P15: 100.0, P85: 108.9, P97: 112.5, P99: 114.4 },
	{ XValue: 51, P3: 96.9, P15: 100.5, P85: 109.5, P97: 113.1, P99: 115.0 },
	{ XValue: 52, P3: 97.4, P15: 101.1, P85: 110.1, P97: 113.7, P99: 115.7 },
	{ XValue: 53, P3: 97.9, P15: 101.6, P85: 110.7, P97: 114.3, P99: 116.3 },
	{ XValue: 54, P3: 98.4, P15: 102.1, P85: 111.2, P97: 115.0, P99: 116.9 },
	{ XValue: 55, P3: 98.8, P15: 102.6, P85: 111.8, P97: 115.6, P99: 117.6 },
	{ XValue: 56, P3: 99.3, P15: 103.1, P85: 112.4, P97: 116.2, P99: 118.2 },
	{ XValue: 57, P3: 99.8, P15: 103.6, P85: 113.0, P97: 116.8, P99: 118.8 },
	{ XValue: 58, P3: 100.3, P15: 104.1, P85: 113.6, P97: 117.4, P99: 119.5 },
	{ XValue: 59, P3: 100.8, P15: 104.7, P85: 114.2, P97: 118.1, P99: 120.1 },
	{ XValue: 60, P3: 101.2, P15: 105.2, P85: 114.8, P97: 118.7, P99: 120.7 },
	{
		XValue: 61,
		P3: 101.629,
		P15: 105.506,
		P85: 115.023,
		P97: 118.9,
		P99: 120.946,
	},
	{
		XValue: 62,
		P3: 102.106,
		P15: 106.01,
		P85: 115.592,
		P97: 119.495,
		P99: 121.554,
	},
	{
		XValue: 63,
		P3: 102.581,
		P15: 106.51,
		P85: 116.157,
		P97: 120.087,
		P99: 122.16,
	},
	{
		XValue: 64,
		P3: 103.054,
		P15: 107.009,
		P85: 116.718,
		P97: 120.673,
		P99: 122.76,
	},
	{
		XValue: 65,
		P3: 103.522,
		P15: 107.503,
		P85: 117.276,
		P97: 121.257,
		P99: 123.358,
	},
	{
		XValue: 66,
		P3: 103.985,
		P15: 107.992,
		P85: 117.83,
		P97: 121.837,
		P99: 123.951,
	},
	{
		XValue: 67,
		P3: 104.444,
		P15: 108.478,
		P85: 118.378,
		P97: 122.412,
		P99: 124.54,
	},
	{
		XValue: 68,
		P3: 104.902,
		P15: 108.96,
		P85: 118.922,
		P97: 122.98,
		P99: 125.122,
	},
	{
		XValue: 69,
		P3: 105.353,
		P15: 109.437,
		P85: 119.463,
		P97: 123.547,
		P99: 125.702,
	},
	{
		XValue: 70,
		P3: 105.801,
		P15: 109.91,
		P85: 119.999,
		P97: 124.109,
		P99: 126.277,
	},
	{
		XValue: 71,
		P3: 106.246,
		P15: 110.38,
		P85: 120.53,
		P97: 124.664,
		P99: 126.846,
	},
	{
		XValue: 72,
		P3: 106.685,
		P15: 110.845,
		P85: 121.057,
		P97: 125.217,
		P99: 127.412,
	},
	{
		XValue: 73,
		P3: 107.12,
		P15: 111.306,
		P85: 121.581,
		P97: 125.766,
		P99: 127.975,
	},
	{
		XValue: 74,
		P3: 107.555,
		P15: 111.765,
		P85: 122.1,
		P97: 126.31,
		P99: 128.532,
	},
	{
		XValue: 75,
		P3: 107.985,
		P15: 112.221,
		P85: 122.619,
		P97: 126.854,
		P99: 129.089,
	},
	{
		XValue: 76,
		P3: 108.414,
		P15: 112.674,
		P85: 123.135,
		P97: 127.396,
		P99: 129.644,
	},
	{
		XValue: 77,
		P3: 108.842,
		P15: 113.128,
		P85: 123.648,
		P97: 127.934,
		P99: 130.195,
	},
	{
		XValue: 78,
		P3: 109.268,
		P15: 113.579,
		P85: 124.161,
		P97: 128.472,
		P99: 130.747,
	},
	{
		XValue: 79,
		P3: 109.692,
		P15: 114.028,
		P85: 124.674,
		P97: 129.01,
		P99: 131.298,
	},
	{
		XValue: 80,
		P3: 110.114,
		P15: 114.476,
		P85: 125.184,
		P97: 129.546,
		P99: 131.848,
	},
	{
		XValue: 81,
		P3: 110.538,
		P15: 114.924,
		P85: 125.693,
		P97: 130.079,
		P99: 132.394,
	},
	{
		XValue: 82,
		P3: 110.958,
		P15: 115.37,
		P85: 126.201,
		P97: 130.613,
		P99: 132.941,
	},
	{
		XValue: 83,
		P3: 111.376,
		P15: 115.814,
		P85: 126.707,
		P97: 131.145,
		P99: 133.486,
	},
	{
		XValue: 84,
		P3: 111.793,
		P15: 116.256,
		P85: 127.212,
		P97: 131.675,
		P99: 134.03,
	},
	{
		XValue: 85,
		P3: 112.207,
		P15: 116.696,
		P85: 127.715,
		P97: 132.203,
		P99: 134.572,
	},
	{
		XValue: 86,
		P3: 112.62,
		P15: 117.134,
		P85: 128.216,
		P97: 132.73,
		P99: 135.112,
	},
	{
		XValue: 87,
		P3: 113.031,
		P15: 117.571,
		P85: 128.715,
		P97: 133.255,
		P99: 135.65,
	},
	{
		XValue: 88,
		P3: 113.44,
		P15: 118.006,
		P85: 129.213,
		P97: 133.778,
		P99: 136.187,
	},
	{
		XValue: 89,
		P3: 113.848,
		P15: 118.439,
		P85: 129.709,
		P97: 134.299,
		P99: 136.722,
	},
	{
		XValue: 90,
		P3: 114.254,
		P15: 118.87,
		P85: 130.202,
		P97: 134.819,
		P99: 137.255,
	},
	{
		XValue: 91,
		P3: 114.657,
		P15: 119.299,
		P85: 130.694,
		P97: 135.336,
		P99: 137.785,
	},
	{
		XValue: 92,
		P3: 115.058,
		P15: 119.726,
		P85: 131.183,
		P97: 135.851,
		P99: 138.313,
	},
	{
		XValue: 93,
		P3: 115.458,
		P15: 120.15,
		P85: 131.671,
		P97: 136.363,
		P99: 138.84,
	},
	{
		XValue: 94,
		P3: 115.854,
		P15: 120.573,
		P85: 132.155,
		P97: 136.874,
		P99: 139.363,
	},
	{
		XValue: 95,
		P3: 116.249,
		P15: 120.993,
		P85: 132.638,
		P97: 137.382,
		P99: 139.885,
	},
	{
		XValue: 96,
		P3: 116.642,
		P15: 121.411,
		P85: 133.119,
		P97: 137.888,
		P99: 140.404,
	},
	{
		XValue: 97,
		P3: 117.034,
		P15: 121.828,
		P85: 133.598,
		P97: 138.392,
		P99: 140.922,
	},
	{
		XValue: 98,
		P3: 117.423,
		P15: 122.243,
		P85: 134.075,
		P97: 138.895,
		P99: 141.438,
	},
	{
		XValue: 99,
		P3: 117.811,
		P15: 122.656,
		P85: 134.551,
		P97: 139.396,
		P99: 141.953,
	},
	{
		XValue: 100,
		P3: 118.197,
		P15: 123.068,
		P85: 135.025,
		P97: 139.896,
		P99: 142.466,
	},
	{
		XValue: 101,
		P3: 118.583,
		P15: 123.479,
		P85: 135.498,
		P97: 140.394,
		P99: 142.978,
	},
	{
		XValue: 102,
		P3: 118.965,
		P15: 123.888,
		P85: 135.972,
		P97: 140.895,
		P99: 143.493,
	},
	{
		XValue: 103,
		P3: 119.349,
		P15: 124.297,
		P85: 136.444,
		P97: 141.392,
		P99: 144.003,
	},
	{
		XValue: 104,
		P3: 119.732,
		P15: 124.705,
		P85: 136.915,
		P97: 141.889,
		P99: 144.513,
	},
	{
		XValue: 105,
		P3: 120.114,
		P15: 125.113,
		P85: 137.386,
		P97: 142.385,
		P99: 145.023,
	},
	{
		XValue: 106,
		P3: 120.496,
		P15: 125.521,
		P85: 137.856,
		P97: 142.881,
		P99: 145.532,
	},
	{
		XValue: 107,
		P3: 120.877,
		P15: 125.928,
		P85: 138.326,
		P97: 143.377,
		P99: 146.042,
	},
	{
		XValue: 108,
		P3: 121.258,
		P15: 126.334,
		P85: 138.796,
		P97: 143.872,
		P99: 146.551,
	},
	{
		XValue: 109,
		P3: 121.639,
		P15: 126.741,
		P85: 139.266,
		P97: 144.367,
		P99: 147.06,
	},
	{
		XValue: 110,
		P3: 122.019,
		P15: 127.146,
		P85: 139.735,
		P97: 144.862,
		P99: 147.568,
	},
	{
		XValue: 111,
		P3: 122.398,
		P15: 127.551,
		P85: 140.203,
		P97: 145.356,
		P99: 148.076,
	},
	{
		XValue: 112,
		P3: 122.779,
		P15: 127.957,
		P85: 140.669,
		P97: 145.847,
		P99: 148.58,
	},
	{
		XValue: 113,
		P3: 123.156,
		P15: 128.36,
		P85: 141.136,
		P97: 146.34,
		P99: 149.086,
	},
	{
		XValue: 114,
		P3: 123.533,
		P15: 128.763,
		P85: 141.603,
		P97: 146.833,
		P99: 149.592,
	},
	{
		XValue: 115,
		P3: 123.912,
		P15: 129.167,
		P85: 142.067,
		P97: 147.322,
		P99: 150.095,
	},
	{
		XValue: 116,
		P3: 124.287,
		P15: 129.568,
		P85: 142.532,
		P97: 147.813,
		P99: 150.6,
	},
	{
		XValue: 117,
		P3: 124.665,
		P15: 129.97,
		P85: 142.996,
		P97: 148.301,
		P99: 151.101,
	},
	{
		XValue: 118,
		P3: 125.039,
		P15: 130.371,
		P85: 143.46,
		P97: 148.792,
		P99: 151.605,
	},
	{
		XValue: 119,
		P3: 125.416,
		P15: 130.772,
		P85: 143.923,
		P97: 149.279,
		P99: 152.106,
	},
	{
		XValue: 120,
		P3: 125.792,
		P15: 131.174,
		P85: 144.385,
		P97: 149.767,
		P99: 152.607,
	},
	{
		XValue: 121,
		P3: 126.169,
		P15: 131.575,
		P85: 144.849,
		P97: 150.255,
		P99: 153.108,
	},
	{
		XValue: 122,
		P3: 126.546,
		P15: 131.978,
		P85: 145.313,
		P97: 150.745,
		P99: 153.611,
	},
	{
		XValue: 123,
		P3: 126.924,
		P15: 132.381,
		P85: 145.778,
		P97: 151.235,
		P99: 154.115,
	},
	{
		XValue: 124,
		P3: 127.304,
		P15: 132.786,
		P85: 146.245,
		P97: 151.728,
		P99: 154.621,
	},
	{
		XValue: 125,
		P3: 127.685,
		P15: 133.193,
		P85: 146.715,
		P97: 152.223,
		P99: 155.129,
	},
	{
		XValue: 126,
		P3: 128.071,
		P15: 133.604,
		P85: 147.186,
		P97: 152.718,
		P99: 155.638,
	},
	{
		XValue: 127,
		P3: 128.458,
		P15: 134.016,
		P85: 147.661,
		P97: 153.22,
		P99: 156.153,
	},
	{
		XValue: 128,
		P3: 128.85,
		P15: 134.433,
		P85: 148.139,
		P97: 153.722,
		P99: 156.668,
	},
	{
		XValue: 129,
		P3: 129.245,
		P15: 134.853,
		P85: 148.621,
		P97: 154.229,
		P99: 157.188,
	},
	{
		XValue: 130,
		P3: 129.644,
		P15: 135.277,
		P85: 149.106,
		P97: 154.74,
		P99: 157.712,
	},
	{
		XValue: 131,
		P3: 130.046,
		P15: 135.704,
		P85: 149.596,
		P97: 155.255,
		P99: 158.241,
	},
	{
		XValue: 132,
		P3: 130.454,
		P15: 136.137,
		P85: 150.088,
		P97: 155.771,
		P99: 158.77,
	},
	{
		XValue: 133,
		P3: 130.863,
		P15: 136.572,
		P85: 150.587,
		P97: 156.296,
		P99: 159.308,
	},
	{
		XValue: 134,
		P3: 131.279,
		P15: 137.013,
		P85: 151.089,
		P97: 156.823,
		P99: 159.848,
	},
	{
		XValue: 135,
		P3: 131.7,
		P15: 137.459,
		P85: 151.596,
		P97: 157.355,
		P99: 160.394,
	},
	{
		XValue: 136,
		P3: 132.128,
		P15: 137.911,
		P85: 152.108,
		P97: 157.89,
		P99: 160.942,
	},
	{
		XValue: 137,
		P3: 132.558,
		P15: 138.367,
		P85: 152.626,
		P97: 158.435,
		P99: 161.5,
	},
	{
		XValue: 138,
		P3: 132.996,
		P15: 138.829,
		P85: 153.149,
		P97: 158.982,
		P99: 162.06,
	},
	{
		XValue: 139,
		P3: 133.439,
		P15: 139.297,
		P85: 153.678,
		P97: 159.536,
		P99: 162.627,
	},
	{
		XValue: 140,
		P3: 133.888,
		P15: 139.771,
		P85: 154.214,
		P97: 160.097,
		P99: 163.201,
	},
	{
		XValue: 141,
		P3: 134.343,
		P15: 140.252,
		P85: 154.757,
		P97: 160.665,
		P99: 163.783,
	},
	{
		XValue: 142,
		P3: 134.807,
		P15: 140.74,
		P85: 155.305,
		P97: 161.238,
		P99: 164.369,
	},
	{
		XValue: 143,
		P3: 135.277,
		P15: 141.235,
		P85: 155.861,
		P97: 161.819,
		P99: 164.963,
	},
	{
		XValue: 144,
		P3: 135.754,
		P15: 141.737,
		P85: 156.425,
		P97: 162.408,
		P99: 165.565,
	},
	{
		XValue: 145,
		P3: 136.24,
		P15: 142.248,
		P85: 156.995,
		P97: 163.002,
		P99: 166.172,
	},
	{
		XValue: 146,
		P3: 136.731,
		P15: 142.764,
		P85: 157.575,
		P97: 163.608,
		P99: 166.791,
	},
	{
		XValue: 147,
		P3: 137.235,
		P15: 143.291,
		P85: 158.16,
		P97: 164.217,
		P99: 167.413,
	},
	{
		XValue: 148,
		P3: 137.743,
		P15: 143.825,
		P85: 158.755,
		P97: 164.837,
		P99: 168.046,
	},
	{
		XValue: 149,
		P3: 138.261,
		P15: 144.367,
		P85: 159.357,
		P97: 165.464,
		P99: 168.686,
	},
	{
		XValue: 150,
		P3: 138.786,
		P15: 144.917,
		P85: 159.968,
		P97: 166.099,
		P99: 169.334,
	},
	{
		XValue: 151,
		P3: 139.321,
		P15: 145.475,
		P85: 160.584,
		P97: 166.739,
		P99: 169.986,
	},
	{
		XValue: 152,
		P3: 139.859,
		P15: 146.038,
		P85: 161.209,
		P97: 167.388,
		P99: 170.649,
	},
	{
		XValue: 153,
		P3: 140.407,
		P15: 146.609,
		P85: 161.836,
		P97: 168.038,
		P99: 171.311,
	},
	{
		XValue: 154,
		P3: 140.956,
		P15: 147.183,
		P85: 162.469,
		P97: 168.695,
		P99: 171.981,
	},
	{
		XValue: 155,
		P3: 141.512,
		P15: 147.762,
		P85: 163.104,
		P97: 169.354,
		P99: 172.652,
	},
	{
		XValue: 156,
		P3: 142.073,
		P15: 148.344,
		P85: 163.741,
		P97: 170.012,
		P99: 173.322,
	},
	{
		XValue: 157,
		P3: 142.635,
		P15: 148.929,
		P85: 164.379,
		P97: 170.673,
		P99: 173.994,
	},
	{
		XValue: 158,
		P3: 143.198,
		P15: 149.514,
		P85: 165.018,
		P97: 171.334,
		P99: 174.666,
	},
	{
		XValue: 159,
		P3: 143.761,
		P15: 150.099,
		P85: 165.656,
		P97: 171.994,
		P99: 175.338,
	},
	{
		XValue: 160,
		P3: 144.325,
		P15: 150.683,
		P85: 166.291,
		P97: 172.649,
		P99: 176.004,
	},
	{
		XValue: 161,
		P3: 144.89,
		P15: 151.266,
		P85: 166.921,
		P97: 173.298,
		P99: 176.663,
	},
	{
		XValue: 162,
		P3: 145.447,
		P15: 151.844,
		P85: 167.548,
		P97: 173.945,
		P99: 177.321,
	},
	{
		XValue: 163,
		P3: 146.004,
		P15: 152.419,
		P85: 168.169,
		P97: 174.584,
		P99: 177.969,
	},
	{
		XValue: 164,
		P3: 146.558,
		P15: 152.991,
		P85: 168.782,
		P97: 175.214,
		P99: 178.608,
	},
	{
		XValue: 165,
		P3: 147.107,
		P15: 153.556,
		P85: 169.388,
		P97: 175.837,
		P99: 179.24,
	},
	{
		XValue: 166,
		P3: 147.649,
		P15: 154.115,
		P85: 169.986,
		P97: 176.452,
		P99: 179.863,
	},
	{
		XValue: 167,
		P3: 148.184,
		P15: 154.665,
		P85: 170.576,
		P97: 177.057,
		P99: 180.477,
	},
	{
		XValue: 168,
		P3: 148.714,
		P15: 155.209,
		P85: 171.154,
		P97: 177.649,
		P99: 181.077,
	},
	{
		XValue: 169,
		P3: 149.237,
		P15: 155.744,
		P85: 171.72,
		P97: 178.227,
		P99: 181.661,
	},
	{
		XValue: 170,
		P3: 149.747,
		P15: 156.268,
		P85: 172.275,
		P97: 178.796,
		P99: 182.237,
	},
	{
		XValue: 171,
		P3: 150.25,
		P15: 156.782,
		P85: 172.817,
		P97: 179.349,
		P99: 182.795,
	},
	{
		XValue: 172,
		P3: 150.742,
		P15: 157.284,
		P85: 173.345,
		P97: 179.887,
		P99: 183.34,
	},
	{
		XValue: 173,
		P3: 151.224,
		P15: 157.775,
		P85: 173.858,
		P97: 180.409,
		P99: 183.866,
	},
	{
		XValue: 174,
		P3: 151.695,
		P15: 158.254,
		P85: 174.356,
		P97: 180.915,
		P99: 184.376,
	},
	{
		XValue: 175,
		P3: 152.153,
		P15: 158.72,
		P85: 174.84,
		P97: 181.407,
		P99: 184.872,
	},
	{
		XValue: 176,
		P3: 152.599,
		P15: 159.173,
		P85: 175.31,
		P97: 181.884,
		P99: 185.352,
	},
	{
		XValue: 177,
		P3: 153.037,
		P15: 159.615,
		P85: 175.765,
		P97: 182.343,
		P99: 185.814,
	},
	{
		XValue: 178,
		P3: 153.463,
		P15: 160.045,
		P85: 176.206,
		P97: 182.788,
		P99: 186.262,
	},
	{
		XValue: 179,
		P3: 153.877,
		P15: 160.464,
		P85: 176.633,
		P97: 183.219,
		P99: 186.695,
	},
	{
		XValue: 180,
		P3: 154.28,
		P15: 160.869,
		P85: 177.047,
		P97: 183.636,
		P99: 187.113,
	},
	{
		XValue: 181,
		P3: 154.674,
		P15: 161.265,
		P85: 177.445,
		P97: 184.036,
		P99: 187.513,
	},
	{
		XValue: 182,
		P3: 155.057,
		P15: 161.648,
		P85: 177.83,
		P97: 184.421,
		P99: 187.899,
	},
	{
		XValue: 183,
		P3: 155.428,
		P15: 162.019,
		P85: 178.201,
		P97: 184.792,
		P99: 188.27,
	},
	{
		XValue: 184,
		P3: 155.787,
		P15: 162.378,
		P85: 178.558,
		P97: 185.149,
		P99: 188.627,
	},
	{
		XValue: 185,
		P3: 156.135,
		P15: 162.725,
		P85: 178.902,
		P97: 185.492,
		P99: 188.97,
	},
	{
		XValue: 186,
		P3: 156.472,
		P15: 163.06,
		P85: 179.234,
		P97: 185.822,
		P99: 189.298,
	},
	{
		XValue: 187,
		P3: 156.801,
		P15: 163.386,
		P85: 179.55,
		P97: 186.135,
		P99: 189.61,
	},
	{
		XValue: 188,
		P3: 157.116,
		P15: 163.698,
		P85: 179.857,
		P97: 186.439,
		P99: 189.912,
	},
	{
		XValue: 189,
		P3: 157.424,
		P15: 164.001,
		P85: 180.148,
		P97: 186.726,
		P99: 190.197,
	},
	{
		XValue: 190,
		P3: 157.721,
		P15: 164.293,
		P85: 180.428,
		P97: 187.0,
		P99: 190.468,
	},
	{
		XValue: 191,
		P3: 158.004,
		P15: 164.572,
		P85: 180.697,
		P97: 187.265,
		P99: 190.731,
	},
	{
		XValue: 192,
		P3: 158.28,
		P15: 164.842,
		P85: 180.952,
		P97: 187.514,
		P99: 190.976,
	},
	{
		XValue: 193,
		P3: 158.545,
		P15: 165.1,
		P85: 181.194,
		P97: 187.749,
		P99: 191.209,
	},
	{
		XValue: 194,
		P3: 158.799,
		P15: 165.348,
		P85: 181.424,
		P97: 187.972,
		P99: 191.428,
	},
	{
		XValue: 195,
		P3: 159.043,
		P15: 165.584,
		P85: 181.641,
		P97: 188.182,
		P99: 191.634,
	},
	{
		XValue: 196,
		P3: 159.276,
		P15: 165.809,
		P85: 181.847,
		P97: 188.38,
		P99: 191.827,
	},
	{
		XValue: 197,
		P3: 159.499,
		P15: 166.024,
		P85: 182.041,
		P97: 188.565,
		P99: 192.008,
	},
	{
		XValue: 198,
		P3: 159.712,
		P15: 166.228,
		P85: 182.223,
		P97: 188.738,
		P99: 192.176,
	},
	{
		XValue: 199,
		P3: 159.915,
		P15: 166.421,
		P85: 182.393,
		P97: 188.899,
		P99: 192.332,
	},
	{
		XValue: 200,
		P3: 160.108,
		P15: 166.604,
		P85: 182.552,
		P97: 189.049,
		P99: 192.477,
	},
	{
		XValue: 201,
		P3: 160.292,
		P15: 166.778,
		P85: 182.701,
		P97: 189.187,
		P99: 192.609,
	},
	{
		XValue: 202,
		P3: 160.466,
		P15: 166.941,
		P85: 182.838,
		P97: 189.313,
		P99: 192.73,
	},
	{
		XValue: 203,
		P3: 160.628,
		P15: 167.094,
		P85: 182.967,
		P97: 189.432,
		P99: 192.844,
	},
	{
		XValue: 204,
		P3: 160.784,
		P15: 167.238,
		P85: 183.083,
		P97: 189.538,
		P99: 192.944,
	},
	{
		XValue: 205,
		P3: 160.932,
		P15: 167.374,
		P85: 183.19,
		P97: 189.633,
		P99: 193.033,
	},
	{
		XValue: 206,
		P3: 161.068,
		P15: 167.5,
		P85: 183.29,
		P97: 189.722,
		P99: 193.116,
	},
	{
		XValue: 207,
		P3: 161.201,
		P15: 167.62,
		P85: 183.379,
		P97: 189.798,
		P99: 193.186,
	},
	{
		XValue: 208,
		P3: 161.322,
		P15: 167.73,
		P85: 183.462,
		P97: 189.87,
		P99: 193.251,
	},
	{
		XValue: 209,
		P3: 161.44,
		P15: 167.835,
		P85: 183.535,
		P97: 189.93,
		P99: 193.304,
	},
	{
		XValue: 210,
		P3: 161.549,
		P15: 167.932,
		P85: 183.602,
		P97: 189.986,
		P99: 193.354,
	},
	{
		XValue: 211,
		P3: 161.652,
		P15: 168.023,
		P85: 183.664,
		P97: 190.035,
		P99: 193.396,
	},
	{
		XValue: 212,
		P3: 161.749,
		P15: 168.108,
		P85: 183.719,
		P97: 190.077,
		P99: 193.433,
	},
	{
		XValue: 213,
		P3: 161.842,
		P15: 168.188,
		P85: 183.768,
		P97: 190.114,
		P99: 193.463,
	},
	{
		XValue: 214,
		P3: 161.93,
		P15: 168.264,
		P85: 183.812,
		P97: 190.146,
		P99: 193.488,
	},
	{
		XValue: 215,
		P3: 162.014,
		P15: 168.335,
		P85: 183.852,
		P97: 190.173,
		P99: 193.508,
	},
	{
		XValue: 216,
		P3: 162.095,
		P15: 168.402,
		P85: 183.887,
		P97: 190.195,
		P99: 193.523,
	},
	{
		XValue: 217,
		P3: 162.168,
		P15: 168.464,
		P85: 183.921,
		P97: 190.217,
		P99: 193.539,
	},
	{
		XValue: 218,
		P3: 162.242,
		P15: 168.525,
		P85: 183.949,
		P97: 190.231,
		P99: 193.546,
	},
	{
		XValue: 219,
		P3: 162.31,
		P15: 168.581,
		P85: 183.975,
		P97: 190.246,
		P99: 193.555,
	},
	{
		XValue: 220,
		P3: 162.375,
		P15: 168.634,
		P85: 183.999,
		P97: 190.257,
		P99: 193.56,
	},
	{
		XValue: 221,
		P3: 162.438,
		P15: 168.684,
		P85: 184.019,
		P97: 190.266,
		P99: 193.562,
	},
	{
		XValue: 222,
		P3: 162.502,
		P15: 168.734,
		P85: 184.036,
		P97: 190.269,
		P99: 193.558,
	},
	{
		XValue: 223,
		P3: 162.557,
		P15: 168.779,
		P85: 184.054,
		P97: 190.276,
		P99: 193.559,
	},
	{
		XValue: 224,
		P3: 162.613,
		P15: 168.823,
		P85: 184.067,
		P97: 190.277,
		P99: 193.554,
	},
	{
		XValue: 225,
		P3: 162.668,
		P15: 168.866,
		P85: 184.079,
		P97: 190.276,
		P99: 193.547,
	},
	{
		XValue: 226,
		P3: 162.721,
		P15: 168.906,
		P85: 184.089,
		P97: 190.274,
		P99: 193.537,
	},
	{
		XValue: 227,
		P3: 162.77,
		P15: 168.943,
		P85: 184.099,
		P97: 190.273,
		P99: 193.53,
	},
	{
		XValue: 228,
		P3: 162.817,
		P15: 168.979,
		P85: 184.107,
		P97: 190.27,
		P99: 193.522,
	},
];
