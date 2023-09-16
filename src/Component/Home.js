import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import homeImg from "../img/one.jpg";
function Home() {
  useEffect(() => {
    function setTextAnimation(
      delay,
      duration,
      strokeWidth,
      timingFunction,
      strokeColor,
      repeat
    ) {
      let paths = document.querySelectorAll("path");
      let mode = repeat ? "infinite" : "forwards";
      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style[
          "animation"
        ] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
      }
    }
    setTextAnimation(0.1, 2.8, 2, "ease-in", "#2f2c3a", true);
  });
  return (
    <>
      <a
        style={{ zIndex: "1000" }}
        href="tel:201278859768"
        className="fixedBtn"
      >
        <i class="fa-brands fa-whatsapp"></i>
      </a>
      <section className="HomeSec">
        <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <svg
          width="660.029"
          height="116.189"
          viewBox="0 0 660.029 116.189"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="svgGroup"
            strokeLinecap="round"
            fillRule="evenodd"
            fontSize="9pt"
            stroke="#000"
            strokeWidth="0.25mm"
            fill="none"
            style={{ stroke: "#000", strokeWidth: "0.25mm", fill: "none" }}
          >
            <path
              d="M 89.784 114.369 L 72.178 114.369 A 4.949 4.949 0 0 1 70.775 114.188 Q 68.725 113.581 68.613 110.95 A 88.228 88.228 0 0 0 68.108 104.347 Q 67.449 98.436 65.993 91.161 L 26.27 91.161 Q 24.233 102.51 23.942 110.95 A 4.751 4.751 0 0 1 23.686 112.365 Q 22.961 114.369 20.231 114.369 L 2.989 114.369 A 3.696 3.696 0 0 1 1.926 114.223 A 2.975 2.975 0 0 1 0.806 113.605 A 2.085 2.085 0 0 1 0.242 112.771 Q -0.032 112.064 0.004 110.986 A 7.901 7.901 0 0 1 0.006 110.95 A 102.126 102.126 0 0 1 0.637 103.459 Q 1.093 99.642 1.84 95.431 A 176.703 176.703 0 0 1 2.37 92.579 A 236.62 236.62 0 0 1 6.047 76.708 A 272.15 272.15 0 0 1 7.572 71.226 A 309.59 309.59 0 0 1 14.702 49.582 A 251.764 251.764 0 0 1 19.47 37.64 A 202.24 202.24 0 0 1 22.85 30.193 A 134.578 134.578 0 0 1 25.984 24.041 Q 28.571 19.289 31.072 15.788 A 19.588 19.588 0 0 1 32.759 13.701 Q 33.726 12.669 34.743 11.943 A 10.531 10.531 0 0 1 35.546 11.422 A 9.653 9.653 0 0 1 38.376 10.344 Q 39.592 10.078 40.997 10.045 A 17.152 17.152 0 0 1 41.403 10.04 L 51.879 10.04 A 15.251 15.251 0 0 1 54.487 10.251 Q 55.967 10.508 57.184 11.078 A 8.858 8.858 0 0 1 57.845 11.422 A 11.767 11.767 0 0 1 60.032 13.07 Q 61.235 14.203 62.356 15.788 Q 66.357 21.39 70.541 30.229 A 227.448 227.448 0 0 1 75.607 41.792 A 280.645 280.645 0 0 1 78.653 49.618 A 295.295 295.295 0 0 1 85.746 71.19 A 277.412 277.412 0 0 1 89.713 86.602 A 239.034 239.034 0 0 1 90.948 92.397 A 144.051 144.051 0 0 1 92.396 100.878 Q 92.933 104.759 93.16 108.238 A 80.554 80.554 0 0 1 93.276 110.513 A 8.094 8.094 0 0 1 93.278 110.666 Q 93.278 114.369 89.784 114.369 Z M 46.35 33.03 L 45.913 33.03 Q 41.416 40.185 37.621 49.955 A 140.133 140.133 0 0 0 37.11 51.292 A 215.652 215.652 0 0 0 30.199 73.118 L 61.774 73.118 A 243.959 243.959 0 0 0 54.717 51.292 Q 51.137 41.79 47.267 34.675 A 90.017 90.017 0 0 0 46.35 33.03 Z"
              id={0}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 103.025 105.566 L 110.446 94.58 Q 111.844 92.546 113.576 93.844 A 4.766 4.766 0 0 1 114.084 94.289 A 19.006 19.006 0 0 0 116.044 95.926 Q 117.657 97.109 119.795 98.254 A 15.266 15.266 0 0 0 123.702 99.67 Q 126.004 100.182 128.78 100.182 Q 132.525 100.182 135.231 99.186 A 11.775 11.775 0 0 0 136.674 98.545 A 6.866 6.866 0 0 0 138.302 97.378 A 4.855 4.855 0 0 0 139.766 93.78 A 5.622 5.622 0 0 0 139.524 92.095 A 4.538 4.538 0 0 0 138.384 90.215 Q 137.001 88.833 133.509 87.377 Q 130.017 85.922 123.76 83.667 A 55.72 55.72 0 0 1 117.941 81.203 Q 112.895 78.695 109.791 75.591 A 15.07 15.07 0 0 1 106.101 69.335 Q 105.062 66.031 105.062 61.768 A 24.705 24.705 0 0 1 105.765 55.716 A 17.815 17.815 0 0 1 109.682 48.163 A 26.244 26.244 0 0 1 119.343 41.318 A 31.9 31.9 0 0 1 121.541 40.488 A 46.992 46.992 0 0 1 136.637 38.05 A 84.901 84.901 0 0 1 141.251 38.166 Q 147.614 38.514 150.643 39.906 A 71.51 71.51 0 0 1 152.272 40.677 Q 154.656 41.847 155.635 42.607 A 4.668 4.668 0 0 1 155.845 42.779 A 5.504 5.504 0 0 1 156.887 43.97 A 4.797 4.797 0 0 1 157.372 44.962 Q 158.318 47.799 158.827 52.456 A 7.538 7.538 0 0 1 158.864 52.927 Q 158.937 54.549 158.201 55.422 A 2.469 2.469 0 0 1 157.445 56.021 A 6.515 6.515 0 0 1 156.873 56.313 Q 156.04 56.693 154.68 57.112 A 54.641 54.641 0 0 1 150.897 58.13 Q 149.398 58.476 148.493 58.548 A 5.517 5.517 0 0 1 148.06 58.567 A 1.067 1.067 0 0 1 147.75 58.519 Q 147.6 58.473 147.441 58.385 Q 147.139 58.217 146.431 57.581 A 25.335 25.335 0 0 1 146.314 57.476 A 6.804 6.804 0 0 0 145.675 56.921 Q 144.946 56.355 143.81 55.701 A 31.044 31.044 0 0 0 143.076 55.293 A 8.879 8.879 0 0 0 141.117 54.539 Q 140.115 54.275 138.912 54.155 A 21.533 21.533 0 0 0 136.783 54.056 A 20.221 20.221 0 0 0 134.016 54.235 Q 132.533 54.44 131.285 54.881 A 10.888 10.888 0 0 0 130.199 55.329 A 4.654 4.654 0 0 0 128.483 56.678 Q 127.8 57.566 127.613 58.814 A 6.694 6.694 0 0 0 127.543 59.804 Q 127.543 62.774 129.991 64.481 A 8.235 8.235 0 0 0 130.926 65.042 Q 134.309 66.788 142.094 69.553 A 80.649 80.649 0 0 1 147.647 71.691 Q 150.322 72.841 152.606 74.092 A 49.033 49.033 0 0 1 152.752 74.173 A 19.745 19.745 0 0 1 157.415 77.685 A 17.356 17.356 0 0 1 159.773 80.72 Q 161.718 83.895 162.134 88.8 A 33.141 33.141 0 0 1 162.247 91.597 A 26.48 26.48 0 0 1 161.567 97.768 A 18.412 18.412 0 0 1 157.409 105.893 Q 152.571 111.313 145.041 113.751 A 50.829 50.829 0 0 1 129.289 116.188 A 76.617 76.617 0 0 1 124.037 116.019 Q 119.661 115.717 116.376 114.878 A 44.797 44.797 0 0 1 112.952 113.867 Q 111.368 113.324 110.048 112.711 A 20.349 20.349 0 0 1 108.154 111.714 A 51.933 51.933 0 0 1 106.188 110.477 Q 105.325 109.905 104.607 109.368 A 21.629 21.629 0 0 1 103.316 108.331 A 2.871 2.871 0 0 1 102.912 107.864 Q 102.195 106.812 103.025 105.566 Z"
              id={1}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 199.424 83.958 L 199.424 110.513 A 8.207 8.207 0 0 1 199.364 111.549 Q 199.221 112.668 198.74 113.287 A 2.001 2.001 0 0 1 198.515 113.532 A 2.589 2.589 0 0 1 197.697 114.026 Q 196.941 114.322 195.795 114.363 A 10.541 10.541 0 0 1 195.423 114.369 L 180.435 114.369 A 8.975 8.975 0 0 1 179.366 114.31 Q 178.253 114.176 177.603 113.737 A 2.213 2.213 0 0 1 177.343 113.532 A 2.319 2.319 0 0 1 176.789 112.716 Q 176.434 111.877 176.434 110.513 L 176.434 12.077 A 6.757 6.757 0 0 1 176.505 11.064 Q 176.586 10.534 176.758 10.104 A 2.998 2.998 0 0 1 177.161 9.385 Q 179.382 6.478 183.1 3.225 A 78.216 78.216 0 0 1 186.11 0.728 Q 186.752 0.269 187.308 0.099 A 2.128 2.128 0 0 1 187.929 0 A 2.557 2.557 0 0 1 189.167 0.328 A 3.605 3.605 0 0 1 189.748 0.728 A 71.947 71.947 0 0 1 192.297 2.773 Q 193.815 4.051 195.022 5.238 Q 197.169 7.348 198.697 9.385 A 3.146 3.146 0 0 1 199.194 10.366 Q 199.424 11.095 199.424 12.077 L 199.424 69.189 L 200.297 69.189 Q 211.356 69.189 215.321 65.224 Q 219.193 61.352 219.284 54.531 A 24.739 24.739 0 0 0 219.286 54.202 L 219.286 50.273 A 6.757 6.757 0 0 1 219.357 49.26 Q 219.438 48.729 219.61 48.3 A 2.998 2.998 0 0 1 220.013 47.581 Q 222.234 44.674 225.952 41.421 A 78.216 78.216 0 0 1 228.962 38.923 Q 229.605 38.465 230.16 38.295 A 2.128 2.128 0 0 1 230.781 38.196 A 2.557 2.557 0 0 1 232.019 38.524 A 3.605 3.605 0 0 1 232.6 38.923 A 71.947 71.947 0 0 1 235.149 40.968 Q 236.667 42.247 237.875 43.434 Q 240.021 45.544 241.549 47.581 A 3.146 3.146 0 0 1 242.046 48.562 Q 242.276 49.291 242.276 50.273 L 242.276 54.202 A 24.789 24.789 0 0 1 241.88 58.495 Q 241.47 60.819 240.639 63.369 A 19.818 19.818 0 0 1 235.986 71.011 A 24.065 24.065 0 0 1 234.71 72.245 Q 230.417 76.101 222.487 76.755 L 222.487 77.119 A 34.768 34.768 0 0 1 231.609 82.905 A 32.572 32.572 0 0 1 233.036 84.249 A 48.375 48.375 0 0 1 239.59 92.334 A 44.33 44.33 0 0 1 240.457 93.743 A 64.181 64.181 0 0 1 243.104 98.691 A 48.906 48.906 0 0 1 245.077 103.42 A 67.708 67.708 0 0 1 246.069 106.428 Q 246.479 107.784 246.768 108.987 A 29.754 29.754 0 0 1 247.223 111.241 A 6.878 6.878 0 0 1 247.28 111.67 Q 247.546 114.369 245.114 114.369 L 225.979 114.369 Q 223.506 114.369 223.142 111.386 A 29.398 29.398 0 0 0 222.591 108.653 Q 222.221 107.16 221.672 105.489 A 61.041 61.041 0 0 0 220.923 103.347 A 45.47 45.47 0 0 0 217.04 95.401 A 51.097 51.097 0 0 0 216.339 94.289 A 27.789 27.789 0 0 0 210.175 87.47 A 26.396 26.396 0 0 0 209.428 86.905 A 15.104 15.104 0 0 0 200.297 83.958 L 199.424 83.958 Z"
              id={2}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 325.07 69.844 L 325.07 111.022 A 4.169 4.169 0 0 1 324.891 112.268 A 3.506 3.506 0 0 1 324.306 113.387 Q 323.684 114.187 322.362 114.335 A 5.731 5.731 0 0 1 321.723 114.369 L 310.81 114.369 A 7.074 7.074 0 0 1 309.726 114.29 A 5.325 5.325 0 0 1 308.737 114.042 A 3.443 3.443 0 0 1 307.808 113.524 Q 307.462 113.259 307.134 112.892 A 6.158 6.158 0 0 1 307.027 112.769 L 302.516 106.948 L 302.007 106.948 Q 298.66 111.823 293.022 114.005 Q 287.384 116.188 280.035 116.188 A 30.876 30.876 0 0 1 272.917 115.413 A 21.005 21.005 0 0 1 263.047 110.186 A 19.773 19.773 0 0 1 257.338 99.641 A 29.31 29.31 0 0 1 256.754 93.634 Q 256.754 88.178 258.755 83.485 Q 260.756 78.792 265.739 75.191 A 27.192 27.192 0 0 1 270.04 72.69 Q 272.319 71.611 275.093 70.707 A 62.701 62.701 0 0 1 279.708 69.407 A 74.972 74.972 0 0 1 286.978 68.05 Q 290.828 67.51 295.309 67.202 A 172.501 172.501 0 0 1 302.662 66.861 A 20.885 20.885 0 0 0 302.4 63.43 Q 302.097 61.616 301.444 60.194 A 8.449 8.449 0 0 0 299.352 57.33 A 10.397 10.397 0 0 0 295.821 55.341 Q 294.274 54.808 292.376 54.584 A 25.189 25.189 0 0 0 289.421 54.42 A 28.683 28.683 0 0 0 285.415 54.683 Q 282.095 55.152 279.672 56.457 A 155.323 155.323 0 0 0 278.353 57.175 Q 275.711 58.631 274.943 59.222 A 2.842 2.842 0 0 1 273.034 59.92 Q 272.76 59.92 272.469 59.876 A 22.898 22.898 0 0 1 270.179 59.411 A 29.225 29.225 0 0 1 268.286 58.858 A 116.573 116.573 0 0 1 265.985 58.076 A 146.219 146.219 0 0 1 263.52 57.185 Q 263.157 57.039 262.72 56.712 Q 262.283 56.384 262.211 55.729 Q 262.211 55.482 262.244 55.151 A 10.625 10.625 0 0 1 262.283 54.82 A 10.769 10.769 0 0 1 262.33 54.514 Q 262.402 54.07 262.55 53.312 A 103.597 103.597 0 0 1 262.647 52.819 A 37.915 37.915 0 0 1 262.894 51.684 Q 263.021 51.139 263.177 50.522 A 83.82 83.82 0 0 1 263.52 49.218 A 44.734 44.734 0 0 1 263.807 48.206 Q 264.23 46.781 264.612 45.908 A 5.514 5.514 0 0 1 265.417 44.78 Q 265.84 44.316 266.401 43.874 A 10.536 10.536 0 0 1 266.794 43.58 A 5.153 5.153 0 0 1 267.539 43.095 Q 269.351 42.085 274.288 40.306 Q 279.94 38.268 290.163 38.071 A 116.363 116.363 0 0 1 292.404 38.05 Q 318.191 38.05 323.622 57.864 A 45.386 45.386 0 0 1 325.07 69.844 Z M 302.516 88.833 L 302.516 80.757 Q 292.404 80.757 287.347 82.321 A 23.283 23.283 0 0 0 284.835 83.247 Q 282.285 84.372 281.024 85.858 A 5.814 5.814 0 0 0 280.617 86.395 A 9.585 9.585 0 0 0 278.944 91.815 Q 278.944 96.035 281.563 97.672 A 10.375 10.375 0 0 0 284.901 98.996 Q 286.261 99.289 287.828 99.308 A 17.928 17.928 0 0 0 288.038 99.309 A 20.891 20.891 0 0 0 291.902 98.975 Q 295.8 98.241 298.151 95.89 A 20.346 20.346 0 0 0 300.445 93.185 Q 301.636 91.483 302.244 89.73 A 11.806 11.806 0 0 0 302.516 88.833 Z"
              id={3}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 416.74 68.025 L 416.74 110.513 A 8.207 8.207 0 0 1 416.68 111.549 Q 416.537 112.668 416.056 113.287 A 2.001 2.001 0 0 1 415.831 113.532 A 2.589 2.589 0 0 1 415.013 114.026 Q 414.257 114.322 413.111 114.363 A 10.541 10.541 0 0 1 412.739 114.369 L 397.751 114.369 A 8.975 8.975 0 0 1 396.682 114.31 Q 395.568 114.176 394.919 113.737 A 2.213 2.213 0 0 1 394.659 113.532 A 2.319 2.319 0 0 1 394.105 112.716 Q 393.75 111.877 393.75 110.513 L 393.75 71.808 A 29.811 29.811 0 0 0 393.485 67.687 Q 392.815 62.898 390.446 60.287 A 9.122 9.122 0 0 0 390.403 60.24 Q 387.056 56.603 381.309 56.603 A 21.505 21.505 0 0 0 377.976 56.844 Q 376.206 57.122 374.78 57.721 A 9.659 9.659 0 0 0 372.469 59.076 Q 369.377 61.55 367.704 65.333 L 367.704 110.513 A 8.207 8.207 0 0 1 367.643 111.549 Q 367.5 112.668 367.019 113.287 A 2.001 2.001 0 0 1 366.794 113.532 A 2.589 2.589 0 0 1 365.976 114.026 Q 365.22 114.322 364.075 114.363 A 10.541 10.541 0 0 1 363.702 114.369 L 348.715 114.369 A 8.975 8.975 0 0 1 347.645 114.31 Q 346.532 114.176 345.883 113.737 A 2.213 2.213 0 0 1 345.623 113.532 A 2.319 2.319 0 0 1 345.069 112.716 Q 344.714 111.877 344.714 110.513 L 344.714 49.545 A 6.757 6.757 0 0 1 344.785 48.532 Q 344.865 48.002 345.037 47.572 A 2.998 2.998 0 0 1 345.441 46.854 A 33.146 33.146 0 0 1 347.356 44.539 A 42.603 42.603 0 0 1 349.115 42.707 Q 350.96 40.893 353.529 38.865 A 80.463 80.463 0 0 1 354.39 38.196 Q 355.336 37.468 356.209 37.468 Q 356.78 37.468 357.464 37.84 A 5.469 5.469 0 0 1 358.028 38.196 A 70.536 70.536 0 0 1 360.7 40.399 Q 361.931 41.467 362.972 42.488 A 42.194 42.194 0 0 1 363.266 42.779 A 37.368 37.368 0 0 1 366.476 46.422 A 33.58 33.58 0 0 1 367.122 47.29 L 367.486 47.29 A 16.538 16.538 0 0 1 368.379 46.236 Q 369.424 45.097 370.979 43.732 A 52.438 52.438 0 0 1 371.196 43.543 A 16.035 16.035 0 0 1 373.434 41.939 Q 375.418 40.743 378.144 39.724 Q 381.511 38.465 386.299 38.153 A 50.925 50.925 0 0 1 389.603 38.05 A 31.555 31.555 0 0 1 402.626 40.815 A 21.613 21.613 0 0 1 410.864 47.355 A 27.814 27.814 0 0 1 412.775 50.127 Q 415.71 54.974 416.472 62.452 A 55.023 55.023 0 0 1 416.74 68.025 Z"
              id={4}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 485.42 39.214 L 485.42 12.077 A 6.757 6.757 0 0 1 485.491 11.064 Q 485.571 10.534 485.743 10.104 A 2.998 2.998 0 0 1 486.147 9.385 Q 488.367 6.478 492.085 3.225 A 78.216 78.216 0 0 1 495.096 0.728 Q 495.738 0.269 496.294 0.099 A 2.128 2.128 0 0 1 496.915 0 A 2.557 2.557 0 0 1 498.153 0.328 A 3.605 3.605 0 0 1 498.734 0.728 A 71.947 71.947 0 0 1 501.283 2.773 Q 502.801 4.051 504.008 5.238 Q 506.155 7.348 507.682 9.385 A 3.146 3.146 0 0 1 508.18 10.366 Q 508.41 11.095 508.41 12.077 L 508.41 111.022 Q 508.41 112.405 507.464 113.387 A 3.163 3.163 0 0 1 505.199 114.367 A 4.208 4.208 0 0 1 505.063 114.369 L 494.223 114.369 A 7.074 7.074 0 0 1 493.139 114.29 A 5.325 5.325 0 0 1 492.149 114.042 A 3.443 3.443 0 0 1 491.221 113.524 Q 490.875 113.259 490.547 112.892 A 6.158 6.158 0 0 1 490.44 112.769 L 485.929 106.948 L 485.42 106.948 Q 484.597 108.213 482.647 110.056 A 44.864 44.864 0 0 1 482.037 110.622 A 14.471 14.471 0 0 1 479.902 112.21 Q 478.757 112.918 477.343 113.559 A 32.808 32.808 0 0 1 474.98 114.515 A 23.845 23.845 0 0 1 471.269 115.501 Q 469.327 115.866 467.036 116.037 A 58.125 58.125 0 0 1 462.72 116.188 A 32.722 32.722 0 0 1 454.607 115.226 A 25.387 25.387 0 0 1 446.242 111.423 A 28.887 28.887 0 0 1 437.093 100.791 A 35.639 35.639 0 0 1 435.911 98.254 A 44.205 44.205 0 0 1 433.01 87.675 A 59.224 59.224 0 0 1 432.382 78.865 A 67.2 67.2 0 0 1 432.988 69.561 Q 433.675 64.655 435.141 60.583 A 32.914 32.914 0 0 1 437.511 55.402 Q 442.64 46.417 451.989 42.197 Q 461.338 37.978 474.07 37.978 A 72.163 72.163 0 0 1 477.015 38.034 Q 479.468 38.134 481.309 38.414 Q 483.476 38.743 484.712 39.031 A 12.922 12.922 0 0 1 485.42 39.214 Z M 485.42 88.833 L 485.42 58.349 A 9.711 9.711 0 0 0 484.742 57.967 Q 483.583 57.366 481.564 56.603 Q 478.872 55.584 473.997 55.584 Q 464.976 55.584 460.465 61.477 A 20.524 20.524 0 0 0 457.03 68.575 Q 456.223 71.497 456.022 74.965 A 40.885 40.885 0 0 0 455.954 77.337 A 45.089 45.089 0 0 0 456.254 82.723 Q 457.018 89.06 459.738 92.616 A 12.57 12.57 0 0 0 463.905 96.208 Q 466.381 97.499 469.472 97.56 A 15.599 15.599 0 0 0 469.778 97.563 Q 474.263 97.563 477.434 96.402 A 12.675 12.675 0 0 0 480.072 95.089 A 15.011 15.011 0 0 0 483.569 91.942 A 13.197 13.197 0 0 0 485.42 88.833 Z"
              id={5}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 578.035 84.104 L 546.824 84.104 Q 547.406 91.597 552.317 95.526 A 16.8 16.8 0 0 0 558.319 98.533 Q 560.764 99.224 563.675 99.397 A 33.618 33.618 0 0 0 565.667 99.455 A 36.56 36.56 0 0 0 569.865 99.229 Q 571.971 98.985 573.728 98.477 A 16.043 16.043 0 0 0 576.398 97.454 A 97.873 97.873 0 0 0 578.265 96.506 Q 579.993 95.603 581.102 94.913 A 15.844 15.844 0 0 0 582.037 94.289 A 4.765 4.765 0 0 1 584.934 93.338 A 5.553 5.553 0 0 1 585.165 93.343 Q 586.315 93.343 588.294 93.721 A 42.996 42.996 0 0 1 589.13 93.889 A 17.005 17.005 0 0 1 592.982 95.218 A 20.217 20.217 0 0 1 594.26 95.89 A 4.389 4.389 0 0 1 595.139 96.479 A 2.601 2.601 0 0 1 596.078 98.509 Q 596.078 99.455 595.715 101.201 A 31.84 31.84 0 0 1 595.587 101.767 Q 595.369 102.701 594.987 104.147 A 20.821 20.821 0 0 1 593.967 107.112 A 18.782 18.782 0 0 1 593.678 107.749 A 4.043 4.043 0 0 1 593.156 108.483 Q 592.876 108.801 592.508 109.106 A 7.339 7.339 0 0 1 592.295 109.276 Q 591.185 110.053 589.039 111.211 A 92.71 92.71 0 0 1 587.603 111.968 Q 584.365 113.642 578.763 114.915 Q 574.698 115.839 569.061 116.092 A 100.019 100.019 0 0 1 564.576 116.188 A 64.544 64.544 0 0 1 554.43 115.429 Q 548.685 114.514 543.83 112.497 A 40.352 40.352 0 0 1 543.186 112.223 A 30.045 30.045 0 0 1 529.072 99.891 A 32.613 32.613 0 0 1 525.469 90.976 Q 524.451 86.909 524.164 82.131 A 64.33 64.33 0 0 1 524.052 78.283 A 61.824 61.824 0 0 1 525.047 66.815 Q 526.273 60.326 529.013 55.274 A 30.334 30.334 0 0 1 534.238 48.236 A 34.151 34.151 0 0 1 553.222 38.697 A 48.49 48.49 0 0 1 561.302 38.05 A 51.112 51.112 0 0 1 569.67 38.699 Q 575.377 39.646 579.891 41.979 A 28.887 28.887 0 0 1 587.89 47.965 A 26.453 26.453 0 0 1 591.459 52.819 A 29.972 29.972 0 0 1 595.234 64.818 A 37.081 37.081 0 0 1 595.424 68.607 Q 595.424 73.539 593.983 76.771 A 9.927 9.927 0 0 1 590.986 80.684 Q 586.548 84.104 578.035 84.104 Z M 546.679 69.189 L 570.396 69.189 Q 573.55 69.189 574.023 66.718 A 5.051 5.051 0 0 0 574.107 65.77 A 13.609 13.609 0 0 0 573.359 61.184 A 11.94 11.94 0 0 0 570.869 57.075 A 10.213 10.213 0 0 0 566.281 54.247 Q 564.618 53.727 562.601 53.593 A 21.812 21.812 0 0 0 561.157 53.547 A 17.392 17.392 0 0 0 557.135 53.982 Q 553.071 54.948 550.789 58.058 Q 547.479 62.568 546.679 69.189 Z"
              id={6}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 634.42 48.309 L 634.42 53.692 L 634.711 53.692 A 29.428 29.428 0 0 1 638.346 46.551 Q 643.867 38.809 653.714 38.567 A 26.053 26.053 0 0 1 654.354 38.56 A 30.019 30.019 0 0 1 655.527 38.581 Q 656.573 38.622 657.337 38.741 A 28.777 28.777 0 0 1 657.858 38.827 Q 658.573 38.953 658.907 39.059 A 2.341 2.341 0 0 1 658.938 39.069 Q 659.78 39.35 659.972 40.194 A 2.472 2.472 0 0 1 660.029 40.742 L 660.029 58.276 A 2.788 2.788 0 0 1 659.97 58.879 Q 659.648 60.327 657.562 59.57 A 7.095 7.095 0 0 1 657.41 59.513 Q 656.537 59.149 654.9 58.749 Q 653.263 58.349 650.353 58.349 A 16.35 16.35 0 0 0 645.047 59.17 A 13.424 13.424 0 0 0 638.639 63.842 A 18.952 18.952 0 0 0 635.491 70.267 Q 634.755 72.852 634.524 75.912 A 38.416 38.416 0 0 0 634.42 78.792 L 634.42 110.513 A 8.207 8.207 0 0 1 634.359 111.549 Q 634.216 112.668 633.735 113.287 A 2.001 2.001 0 0 1 633.51 113.532 A 2.589 2.589 0 0 1 632.692 114.026 Q 631.936 114.322 630.791 114.363 A 10.541 10.541 0 0 1 630.418 114.369 L 615.431 114.369 A 8.975 8.975 0 0 1 614.361 114.31 Q 613.248 114.176 612.599 113.737 A 2.213 2.213 0 0 1 612.339 113.532 A 2.319 2.319 0 0 1 611.785 112.716 Q 611.429 111.877 611.429 110.513 L 611.429 49.545 A 6.757 6.757 0 0 1 611.501 48.532 Q 611.581 48.002 611.753 47.572 A 2.998 2.998 0 0 1 612.157 46.854 A 33.146 33.146 0 0 1 614.071 44.539 A 42.603 42.603 0 0 1 615.831 42.707 Q 617.676 40.893 620.245 38.865 A 80.463 80.463 0 0 1 621.106 38.196 A 3.862 3.862 0 0 1 621.651 37.851 A 2.866 2.866 0 0 1 622.27 37.614 A 5.743 5.743 0 0 1 622.686 37.525 Q 622.902 37.488 623.094 37.475 A 2.916 2.916 0 0 1 623.288 37.468 A 3.088 3.088 0 0 1 624.53 37.738 A 4.384 4.384 0 0 1 625.325 38.196 A 82.429 82.429 0 0 1 628.434 40.747 Q 632.039 43.866 633.765 46.271 A 3.275 3.275 0 0 1 634.418 48.182 A 4.056 4.056 0 0 1 634.42 48.309 Z"
              id={7}
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
        <Link to={"/storesgames"} className="homeBtn">
          {" "}
          Go To Games
        </Link>
        <div className="popParent">
          <Link to={"/android"} id="android" className="pop android ">
            <i class="fa-brands fa-android"></i>
          </Link>
          <Link to={"/playstation"} id="ps" className="pop ps ">
            <i class="fa-brands fa-playstation"></i>
          </Link>
          <Link to={"/xbox"} id="xbox" className="pop xbox ">
            <i class="fa-brands fa-xbox"></i>
          </Link>
          <Link to={"/iphone"} id="iphone" className="pop iphone ">
            <i class="fa-brands fa-app-store-ios"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
