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

export const heightForAgeGirl = [
    {Month: 0, P3: 45.6, P15: 47.2, P85: 51.1, P97: 52.7, P99: 53.5},
    {Month: 1, P3: 50.0, P15: 51.7, P85: 55.7, P97: 57.4, P99: 58.2},
    {Month: 2, P3: 53.2, P15: 55.0, P85: 59.2, P97: 60.9, P99: 61.8},
    {Month: 3, P3: 55.8, P15: 57.6, P85: 62.0, P97: 63.8, P99: 64.7},
    {Month: 4, P3: 58.0, P15: 59.8, P85: 64.3, P97: 66.2, P99: 67.1},
    {Month: 5, P3: 59.9, P15: 61.7, P85: 66.3, P97: 68.2, P99: 69.2},
    {Month: 6, P3: 61.5, P15: 63.4, P85: 68.1, P97: 70.0, P99: 71.0},
    {Month: 7, P3: 62.9, P15: 64.9, P85: 69.7, P97: 71.6, P99: 72.7},
    {Month: 8, P3: 64.3, P15: 66.3, P85: 71.2, P97: 73.2, P99: 74.3},
    {Month: 9, P3: 65.6, P15: 67.6, P85: 72.6, P97: 74.7, P99: 75.8},
    {Month: 10, P3: 66.8, P15: 68.9, P85: 74.0, P97: 76.1, P99: 77.2},
    {Month: 11, P3: 68.0, P15: 70.2, P85: 75.4, P97: 77.5, P99: 78.6},
    {Month: 12, P3: 69.2, P15: 71.3, P85: 76.7, P97: 78.9, P99: 80.0},
    {Month: 13, P3: 70.3, P15: 72.5, P85: 77.9, P97: 80.2, P99: 81.3},
    {Month: 14, P3: 71.3, P15: 73.6, P85: 79.2, P97: 81.4, P99: 82.6},
    {Month: 15, P3: 72.4, P15: 74.7, P85: 80.3, P97: 82.7, P99: 83.9},
    {Month: 16, P3: 73.3, P15: 75.7, P85: 81.5, P97: 83.9, P99: 85.1},
    {Month: 17, P3: 74.3, P15: 76.7, P85: 82.6, P97: 85.0, P99: 86.3},
    {Month: 18, P3: 75.2, P15: 77.7, P85: 83.7, P97: 86.2, P99: 87.5},
    {Month: 19, P3: 76.2, P15: 78.7, P85: 84.8, P97: 87.3, P99: 88.6},
    {Month: 20, P3: 77.0, P15: 79.6, P85: 85.8, P97: 88.4, P99: 89.7},
    {Month: 21, P3: 77.9, P15: 80.5, P85: 86.8, P97: 89.4, P99: 90.8},
    {Month: 22, P3: 78.7, P15: 81.4, P85: 87.8, P97: 90.5, P99: 91.9},
    {Month: 23, P3: 79.6, P15: 82.2, P85: 88.8, P97: 91.5, P99: 92.9},
    {Month: 24, P3: 80.3, P15: 83.1, P85: 89.8, P97: 92.5, P99: 93.9},
    {Month: 24, P3: 79.6, P15: 82.4, P85: 89.1, P97: 91.8, P99: 93.2},
    {Month: 25, P3: 80.4, P15: 83.2, P85: 90.0, P97: 92.8, P99: 94.2},
    {Month: 26, P3: 81.2, P15: 84.0, P85: 90.9, P97: 93.7, P99: 95.2},
    {Month: 27, P3: 81.9, P15: 84.8, P85: 91.8, P97: 94.6, P99: 96.1},
    {Month: 28, P3: 82.6, P15: 85.5, P85: 92.7, P97: 95.6, P99: 97.1},
    {Month: 29, P3: 83.4, P15: 86.3, P85: 93.5, P97: 96.4, P99: 98.0},
    {Month: 30, P3: 84.0, P15: 87.0, P85: 94.3, P97: 97.3, P99: 98.9},
    {Month: 31, P3: 84.7, P15: 87.7, P85: 95.2, P97: 98.2, P99: 99.8},
    {Month: 32, P3: 85.4, P15: 88.4, P85: 95.9, P97: 99.0, P99: 100.6},
    {Month: 33, P3: 86.0, P15: 89.1, P85: 96.7, P97: 99.8, P99: 101.5},
    {Month: 34, P3: 86.7, P15: 89.8, P85: 97.5, P97: 100.6, P99: 102.3},
    {Month: 35, P3: 87.3, P15: 90.5, P85: 98.3, P97: 101.4, P99: 103.1},
    {Month: 36, P3: 87.9, P15: 91.1, P85: 99.0, P97: 102.2, P99: 103.9},
    {Month: 37, P3: 88.5, P15: 91.7, P85: 99.7, P97: 103.0, P99: 104.7},
    {Month: 38, P3: 89.1, P15: 92.4, P85: 100.5, P97: 103.7, P99: 105.5},
    {Month: 39, P3: 89.7, P15: 93.0, P85: 101.2, P97: 104.5, P99: 106.3},
    {Month: 40, P3: 90.3, P15: 93.6, P85: 101.9, P97: 105.2, P99: 107.0},
    {Month: 41, P3: 90.8, P15: 94.2, P85: 102.6, P97: 106.0, P99: 107.8},
    {Month: 42, P3: 91.4, P15: 94.8, P85: 103.3, P97: 106.7, P99: 108.5},
    {Month: 43, P3: 92.0, P15: 95.4, P85: 103.9, P97: 107.4, P99: 109.2},
    {Month: 44, P3: 92.5, P15: 96.0, P85: 104.6, P97: 108.1, P99: 110.0},
    {Month: 45, P3: 93.0, P15: 96.6, P85: 105.3, P97: 108.8, P99: 110.7},
    {Month: 46, P3: 93.6, P15: 97.2, P85: 105.9, P97: 109.5, P99: 111.4},
    {Month: 47, P3: 94.1, P15: 97.7, P85: 106.6, P97: 110.2, P99: 112.1},
    {Month: 48, P3: 94.6, P15: 98.3, P85: 107.2, P97: 110.8, P99: 112.8},
    {Month: 49, P3: 95.1, P15: 98.8, P85: 107.8, P97: 111.5, P99: 113.4},
    {Month: 50, P3: 95.7, P15: 99.4, P85: 108.4, P97: 112.1, P99: 114.1},
    {Month: 51, P3: 96.2, P15: 99.9, P85: 109.1, P97: 112.8, P99: 114.8},
    {Month: 52, P3: 96.7, P15: 100.4, P85: 109.7, P97: 113.4, P99: 115.4},
    {Month: 53, P3: 97.2, P15: 101.0, P85: 110.3, P97: 114.1, P99: 116.1},
    {Month: 54, P3: 97.6, P15: 101.5, P85: 110.9, P97: 114.7, P99: 116.7},
    {Month: 55, P3: 98.1, P15: 102.0, P85: 111.5, P97: 115.3, P99: 117.4},
    {Month: 56, P3: 98.6, P15: 102.5, P85: 112.1, P97: 116.0, P99: 118.0},
    {Month: 57, P3: 99.1, P15: 103.0, P85: 112.6, P97: 116.6, P99: 118.6},
    {Month: 58, P3: 99.6, P15: 103.5, P85: 113.2, P97: 117.2, P99: 119.3},
    {Month: 59, P3: 100.0, P15: 104.0, P85: 113.8, P97: 117.8, P99: 119.9},
    {Month: 60, P3: 100.5, P15: 104.5, P85: 114.4, P97: 118.4, P99: 120.5},
    {Month: 61, P3: 100.624, P15: 104.655, P85: 114.549, P97: 118.579, P99: 120.706},
    {Month: 62, P3: 101.087, P15: 105.145, P85: 115.107, P97: 119.165, P99: 121.306},
    {Month: 63, P3: 101.545, P15: 105.63, P85: 115.66, P97: 119.745, P99: 121.901},
    {Month: 64, P3: 101.998, P15: 106.111, P85: 116.208, P97: 120.321, P99: 122.491},
    {Month: 65, P3: 102.449, P15: 106.589, P85: 116.751, P97: 120.89, P99: 123.074},
    {Month: 66, P3: 102.894, P15: 107.061, P85: 117.29, P97: 121.456, P99: 123.655},
    {Month: 67, P3: 103.337, P15: 107.53, P85: 117.823, P97: 122.016, P99: 124.229},
    {Month: 68, P3: 103.776, P15: 107.995, P85: 118.353, P97: 122.572, P99: 124.798},
    {Month: 69, P3: 104.212, P15: 108.457, P85: 118.878, P97: 123.123, P99: 125.363},
    {Month: 70, P3: 104.643, P15: 108.914, P85: 119.399, P97: 123.67, P99: 125.924},
    {Month: 71, P3: 105.071, P15: 109.368, P85: 119.916, P97: 124.213, P99: 126.481},
    {Month: 72, P3: 105.496, P15: 109.818, P85: 120.431, P97: 124.753, P99: 127.034},
    {Month: 73, P3: 105.92, P15: 110.267, P85: 120.94, P97: 125.288, P99: 127.582},
    {Month: 74, P3: 106.342, P15: 110.714, P85: 121.448, P97: 125.821, P99: 128.128},
    {Month: 75, P3: 106.76, P15: 111.158, P85: 121.956, P97: 126.354, P99: 128.675},
    {Month: 76, P3: 107.181, P15: 111.603, P85: 122.459, P97: 126.881, P99: 129.215},
    {Month: 77, P3: 107.599, P15: 112.046, P85: 122.963, P97: 127.41, P99: 129.756},
    {Month: 78, P3: 108.016, P15: 112.488, P85: 123.466, P97: 127.938, P99: 130.297},
    {Month: 79, P3: 108.435, P15: 112.931, P85: 123.967, P97: 128.463, P99: 130.835},
    {Month: 80, P3: 108.851, P15: 113.372, P85: 124.47, P97: 128.99, P99: 131.376},
    {Month: 81, P3: 109.27, P15: 113.814, P85: 124.971, P97: 129.515, P99: 131.914},
    {Month: 82, P3: 109.688, P15: 114.257, P85: 125.473, P97: 130.041, P99: 132.452},
    {Month: 83, P3: 110.107, P15: 114.7, P85: 125.975, P97: 130.568, P99: 132.991},
    {Month: 84, P3: 110.529, P15: 115.145, P85: 126.476, P97: 131.092, P99: 133.528},
    {Month: 85, P3: 110.949, P15: 115.589, P85: 126.98, P97: 131.62, P99: 134.068},
    {Month: 86, P3: 111.371, P15: 116.035, P85: 127.483, P97: 132.146, P99: 134.607},
    {Month: 87, P3: 111.792, P15: 116.48, P85: 127.988, P97: 132.676, P99: 135.149},
    {Month: 88, P3: 112.216, P15: 116.927, P85: 128.493, P97: 133.204, P99: 135.69},
    {Month: 89, P3: 112.643, P15: 117.376, P85: 128.997, P97: 133.731, P99: 136.229},
    {Month: 90, P3: 113.068, P15: 117.825, P85: 129.504, P97: 134.261, P99: 136.772},
    {Month: 91, P3: 113.494, P15: 118.275, P85: 130.012, P97: 134.793, P99: 137.316},
    {Month: 92, P3: 113.923, P15: 118.727, P85: 130.52, P97: 135.323, P99: 137.858},
    {Month: 93, P3: 114.354, P15: 119.18, P85: 131.029, P97: 135.855, P99: 138.402},
    {Month: 94, P3: 114.785, P15: 119.635, P85: 131.539, P97: 136.388, P99: 138.947},
    {Month: 95, P3: 115.218, P15: 120.09, P85: 132.051, P97: 136.923, P99: 139.494},
    {Month: 96, P3: 115.652, P15: 120.547, P85: 132.565, P97: 137.46, P99: 140.043},
    {Month: 97, P3: 116.087, P15: 121.005, P85: 133.08, P97: 137.998, P99: 140.593},
    {Month: 98, P3: 116.526, P15: 121.466, P85: 133.595, P97: 138.535, P99: 141.142},
    {Month: 99, P3: 116.966, P15: 121.928, P85: 134.111, P97: 139.074, P99: 141.693},
    {Month: 100, P3: 117.407, P15: 122.392, P85: 134.63, P97: 139.615, P99: 142.245},
    {Month: 101, P3: 117.85, P15: 122.857, P85: 135.15, P97: 140.157, P99: 142.799},
    {Month: 102, P3: 118.294, P15: 123.324, P85: 135.671, P97: 140.701, P99: 143.355},
    {Month: 103, P3: 118.742, P15: 123.793, P85: 136.193, P97: 141.245, P99: 143.91},
    {Month: 104, P3: 119.191, P15: 124.264, P85: 136.717, P97: 141.79, P99: 144.467},
    {Month: 105, P3: 119.639, P15: 124.735, P85: 137.244, P97: 142.339, P99: 145.028},
    {Month: 106, P3: 120.094, P15: 125.21, P85: 137.769, P97: 142.885, P99: 145.585},
    {Month: 107, P3: 120.547, P15: 125.685, P85: 138.298, P97: 143.435, P99: 146.147},
    {Month: 108, P3: 121.002, P15: 126.161, P85: 138.828, P97: 143.987, P99: 146.71},
    {Month: 109, P3: 121.46, P15: 126.64, P85: 139.358, P97: 144.538, P99: 147.272},
    {Month: 110, P3: 121.919, P15: 127.12, P85: 139.889, P97: 145.09, P99: 147.835},
    {Month: 111, P3: 122.38, P15: 127.602, P85: 140.422, P97: 145.644, P99: 148.399},
    {Month: 112, P3: 122.842, P15: 128.085, P85: 140.956, P97: 146.199, P99: 148.966},
    {Month: 113, P3: 123.307, P15: 128.57, P85: 141.49, P97: 146.753, P99: 149.53},
    {Month: 114, P3: 123.771, P15: 129.055, P85: 142.027, P97: 147.311, P99: 150.099},
    {Month: 115, P3: 124.239, P15: 129.543, P85: 142.564, P97: 147.868, P99: 150.666},
    {Month: 116, P3: 124.711, P15: 130.033, P85: 143.101, P97: 148.423, P99: 151.232},
    {Month: 117, P3: 125.181, P15: 130.524, P85: 143.64, P97: 148.983, P99: 151.803},
    {Month: 118, P3: 125.653, P15: 131.016, P85: 144.182, P97: 149.545, P99: 152.375},
    {Month: 119, P3: 126.128, P15: 131.51, P85: 144.723, P97: 150.105, P99: 152.945},
    {Month: 120, P3: 126.605, P15: 132.007, P85: 145.266, P97: 150.667, P99: 153.517},
    {Month: 121, P3: 127.087, P15: 132.506, P85: 145.809, P97: 151.228, P99: 154.088},
    {Month: 122, P3: 127.567, P15: 133.005, P85: 146.356, P97: 151.794, P99: 154.664},
    {Month: 123, P3: 128.051, P15: 133.507, P85: 146.902, P97: 152.359, P99: 155.238},
    {Month: 124, P3: 128.537, P15: 134.012, P85: 147.451, P97: 152.925, P99: 155.814},
    {Month: 125, P3: 129.025, P15: 134.517, P85: 148.001, P97: 153.494, P99: 156.392},
    {Month: 126, P3: 129.514, P15: 135.025, P85: 148.554, P97: 154.064, P99: 156.972},
    {Month: 127, P3: 130.008, P15: 135.535, P85: 149.106, P97: 154.634, P99: 157.551},
    {Month: 128, P3: 130.502, P15: 136.047, P85: 149.66, P97: 155.205, P99: 158.13},
    {Month: 129, P3: 130.998, P15: 136.56, P85: 150.215, P97: 155.777, P99: 158.712},
    {Month: 130, P3: 131.495, P15: 137.074, P85: 150.77, P97: 156.349, P99: 159.293},
    {Month: 131, P3: 131.992, P15: 137.588, P85: 151.327, P97: 156.923, P99: 159.876},
    {Month: 132, P3: 132.492, P15: 138.104, P85: 151.882, P97: 157.494, P99: 160.455},
    {Month: 133, P3: 132.992, P15: 138.62, P85: 152.436, P97: 158.064, P99: 161.034},
    {Month: 134, P3: 133.491, P15: 139.135, P85: 152.99, P97: 158.633, P99: 161.611},
    {Month: 135, P3: 133.992, P15: 139.65, P85: 153.54, P97: 159.198, P99: 162.184},
    {Month: 136, P3: 134.489, P15: 140.162, P85: 154.09, P97: 159.764, P99: 162.758},
    {Month: 137, P3: 134.986, P15: 140.673, P85: 154.636, P97: 160.324, P99: 163.325},
    {Month: 138, P3: 135.48, P15: 141.182, P85: 155.179, P97: 160.881, P99: 163.889},
    {Month: 139, P3: 135.971, P15: 141.687, P85: 155.718, P97: 161.433, P99: 164.449},
    {Month: 140, P3: 136.461, P15: 142.189, P85: 156.25, P97: 161.978, P99: 165.001},
    {Month: 141, P3: 136.944, P15: 142.685, P85: 156.779, P97: 162.52, P99: 165.55},
    {Month: 142, P3: 137.425, P15: 143.177, P85: 157.301, P97: 163.053, P99: 166.089},
    {Month: 143, P3: 137.899, P15: 143.664, P85: 157.815, P97: 163.58, P99: 166.621},
    {Month: 144, P3: 138.368, P15: 144.143, P85: 158.322, P97: 164.098, P99: 167.146},
    {Month: 145, P3: 138.832, P15: 144.617, P85: 158.819, P97: 164.605, P99: 167.657},
    {Month: 146, P3: 139.285, P15: 145.081, P85: 159.309, P97: 165.105, P99: 168.163},
    {Month: 147, P3: 139.733, P15: 145.538, P85: 159.788, P97: 165.592, P99: 168.655},
    {Month: 148, P3: 140.17, P15: 145.984, P85: 160.257, P97: 166.071, P99: 169.139},
    {Month: 149, P3: 140.599, P15: 146.421, P85: 160.714, P97: 166.536, P99: 169.608},
    {Month: 150, P3: 141.019, P15: 146.849, P85: 161.16, P97: 166.989, P99: 170.065},
    {Month: 151, P3: 141.428, P15: 147.265, P85: 161.593, P97: 167.43, P99: 170.509},
    {Month: 152, P3: 141.83, P15: 147.672, P85: 162.013, P97: 167.854, P99: 170.937},
    {Month: 153, P3: 142.218, P15: 148.066, P85: 162.421, P97: 168.269, P99: 171.355},
    {Month: 154, P3: 142.596, P15: 148.449, P85: 162.817, P97: 168.67, P99: 171.759},
    {Month: 155, P3: 142.965, P15: 148.821, P85: 163.199, P97: 169.056, P99: 172.146},
    {Month: 156, P3: 143.319, P15: 149.18, P85: 163.569, P97: 169.43, P99: 172.523},
    {Month: 157, P3: 143.666, P15: 149.529, P85: 163.924, P97: 169.788, P99: 172.882},
    {Month: 158, P3: 144.001, P15: 149.866, P85: 164.267, P97: 170.133, P99: 173.228},
    {Month: 159, P3: 144.324, P15: 150.191, P85: 164.596, P97: 170.463, P99: 173.559},
    {Month: 160, P3: 144.633, P15: 150.503, P85: 164.913, P97: 170.783, P99: 173.88},
    {Month: 161, P3: 144.934, P15: 150.804, P85: 165.216, P97: 171.086, P99: 174.184},
    {Month: 162, P3: 145.223, P15: 151.094, P85: 165.506, P97: 171.376, P99: 174.474},
    {Month: 163, P3: 145.502, P15: 151.372, P85: 165.782, P97: 171.652, P99: 174.75},
    {Month: 164, P3: 145.769, P15: 151.638, P85: 166.047, P97: 171.916, P99: 175.013},
    {Month: 165, P3: 146.023, P15: 151.892, P85: 166.3, P97: 172.169, P99: 175.266},
    {Month: 166, P3: 146.269, P15: 152.136, P85: 166.54, P97: 172.407, P99: 175.503},
    {Month: 167, P3: 146.505, P15: 152.37, P85: 166.768, P97: 172.633, P99: 175.728},
    {Month: 168, P3: 146.731, P15: 152.593, P85: 166.985, P97: 172.847, P99: 175.94},
    {Month: 169, P3: 146.947, P15: 152.806, P85: 167.19, P97: 173.049, P99: 176.141},
    {Month: 170, P3: 147.151, P15: 153.008, P85: 167.386, P97: 173.243, P99: 176.334},
    {Month: 171, P3: 147.348, P15: 153.201, P85: 167.57, P97: 173.423, P99: 176.512},
    {Month: 172, P3: 147.537, P15: 153.385, P85: 167.743, P97: 173.592, P99: 176.678},
    {Month: 173, P3: 147.713, P15: 153.558, P85: 167.908, P97: 173.754, P99: 176.838},
    {Month: 174, P3: 147.884, P15: 153.724, P85: 168.061, P97: 173.902, P99: 176.984},
    {Month: 175, P3: 148.043, P15: 153.879, P85: 168.207, P97: 174.043, P99: 177.123},
    {Month: 176, P3: 148.197, P15: 154.028, P85: 168.341, P97: 174.172, P99: 177.248},
    {Month: 177, P3: 148.341, P15: 154.167, P85: 168.469, P97: 174.294, P99: 177.368},
    {Month: 178, P3: 148.477, P15: 154.298, P85: 168.587, P97: 174.408, P99: 177.479},
    {Month: 179, P3: 148.606, P15: 154.421, P85: 168.698, P97: 174.513, P99: 177.582},
    {Month: 180, P3: 148.731, P15: 154.54, P85: 168.799, P97: 174.607, P99: 177.672},
    {Month: 181, P3: 148.847, P15: 154.649, P85: 168.894, P97: 174.697, P99: 177.759},
    {Month: 182, P3: 148.956, P15: 154.752, P85: 168.982, P97: 174.779, P99: 177.837},
    {Month: 183, P3: 149.056, P15: 154.848, P85: 169.065, P97: 174.856, P99: 177.912},
    {Month: 184, P3: 149.154, P15: 154.939, P85: 169.14, P97: 174.925, P99: 177.977},
    {Month: 185, P3: 149.246, P15: 155.024, P85: 169.209, P97: 174.987, P99: 178.035},
    {Month: 186, P3: 149.334, P15: 155.104, P85: 169.272, P97: 175.042, P99: 178.088},
    {Month: 187, P3: 149.413, P15: 155.178, P85: 169.331, P97: 175.096, P99: 178.138},
    {Month: 188, P3: 149.491, P15: 155.248, P85: 169.383, P97: 175.14, P99: 178.178},
    {Month: 189, P3: 149.561, P15: 155.312, P85: 169.432, P97: 175.183, P99: 178.218},
    {Month: 190, P3: 149.627, P15: 155.372, P85: 169.476, P97: 175.221, P99: 178.252},
    {Month: 191, P3: 149.693, P15: 155.43, P85: 169.514, P97: 175.251, P99: 178.278},
    {Month: 192, P3: 149.751, P15: 155.482, P85: 169.55, P97: 175.28, P99: 178.304},
    {Month: 193, P3: 149.807, P15: 155.53, P85: 169.582, P97: 175.305, P99: 178.325},
    {Month: 194, P3: 149.86, P15: 155.576, P85: 169.61, P97: 175.327, P99: 178.344},
    {Month: 195, P3: 149.91, P15: 155.619, P85: 169.636, P97: 175.346, P99: 178.358},
    {Month: 196, P3: 149.957, P15: 155.66, P85: 169.659, P97: 175.362, P99: 178.371},
    {Month: 197, P3: 150.0, P15: 155.696, P85: 169.682, P97: 175.378, P99: 178.384},
    {Month: 198, P3: 150.044, P15: 155.733, P85: 169.7, P97: 175.389, P99: 178.392},
    {Month: 199, P3: 150.083, P15: 155.766, P85: 169.719, P97: 175.402, P99: 178.401},
    {Month: 200, P3: 150.124, P15: 155.8, P85: 169.734, P97: 175.41, P99: 178.405},
    {Month: 201, P3: 150.161, P15: 155.831, P85: 169.75, P97: 175.42, P99: 178.412},
    {Month: 202, P3: 150.2, P15: 155.862, P85: 169.763, P97: 175.426, P99: 178.414},
    {Month: 203, P3: 150.235, P15: 155.891, P85: 169.777, P97: 175.433, P99: 178.418},
    {Month: 204, P3: 150.269, P15: 155.919, P85: 169.79, P97: 175.44, P99: 178.422},
    {Month: 205, P3: 150.302, P15: 155.946, P85: 169.802, P97: 175.446, P99: 178.424},
    {Month: 206, P3: 150.335, P15: 155.973, P85: 169.814, P97: 175.452, P99: 178.427},
    {Month: 207, P3: 150.368, P15: 155.999, P85: 169.825, P97: 175.456, P99: 178.428},
    {Month: 208, P3: 150.4, P15: 156.025, P85: 169.835, P97: 175.46, P99: 178.429},
    {Month: 209, P3: 150.431, P15: 156.05, P85: 169.845, P97: 175.464, P99: 178.429},
    {Month: 210, P3: 150.46, P15: 156.074, P85: 169.856, P97: 175.47, P99: 178.433},
    {Month: 211, P3: 150.49, P15: 156.098, P85: 169.865, P97: 175.473, P99: 178.432},
    {Month: 212, P3: 150.518, P15: 156.121, P85: 169.876, P97: 175.479, P99: 178.435},
    {Month: 213, P3: 150.548, P15: 156.145, P85: 169.884, P97: 175.481, P99: 178.434},
    {Month: 214, P3: 150.575, P15: 156.166, P85: 169.894, P97: 175.485, P99: 178.436},
    {Month: 215, P3: 150.601, P15: 156.188, P85: 169.903, P97: 175.489, P99: 178.437},
    {Month: 216, P3: 150.63, P15: 156.21, P85: 169.909, P97: 175.489, P99: 178.434},
    {Month: 217, P3: 150.655, P15: 156.23, P85: 169.917, P97: 175.492, P99: 178.434},
    {Month: 218, P3: 150.679, P15: 156.249, P85: 169.923, P97: 175.493, P99: 178.433},
    {Month: 219, P3: 150.702, P15: 156.267, P85: 169.929, P97: 175.494, P99: 178.431},
    {Month: 220, P3: 150.725, P15: 156.285, P85: 169.934, P97: 175.494, P99: 178.428},
    {Month: 221, P3: 150.743, P15: 156.299, P85: 169.939, P97: 175.495, P99: 178.427},
    {Month: 222, P3: 150.763, P15: 156.314, P85: 169.941, P97: 175.492, P99: 178.421},
    {Month: 223, P3: 150.783, P15: 156.328, P85: 169.943, P97: 175.488, P99: 178.415},
    {Month: 224, P3: 150.798, P15: 156.339, P85: 169.944, P97: 175.486, P99: 178.41},
    {Month: 225, P3: 150.815, P15: 156.351, P85: 169.943, P97: 175.479, P99: 178.4},
    {Month: 226, P3: 150.828, P15: 156.36, P85: 169.942, P97: 175.474, P99: 178.393},
    {Month: 227, P3: 150.842, P15: 156.369, P85: 169.938, P97: 175.465, P99: 178.381},
    {Month: 228, P3: 150.853, P15: 156.376, P85: 169.934, P97: 175.457, P99: 178.371},
];
