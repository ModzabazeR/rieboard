import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">

    {/* Icon and title */}
        <Link href="/">
            <a className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 449.266 449.266" enableBackground="new 0 0 449.266 449.266" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="m0,162.677c1.471-7.672 2.659-15.411 4.468-23.001 4.669-19.586 14.721-36.449 27.524-51.675 16.709-19.87 38.465-32.482 62.675-40.637 8.353-2.814 17.695-3.199 26.638-3.652 18.842-0.955 37.613-0.287 55.572,6.583 14.91,5.704 30.113,10.913 41.032,23.648 16.92-19.999 36.441-36.317 60.027-46.447 12.027-5.166 25.635-6.879 38.676-9.388 13.591-2.615 27.112-1.139 40.261,3.191 16.364,5.389 31.001,12.737 43.184,26.065 15.368,16.811 28.572,34.731 37.842,55.362 9.344,20.794 12.648,42.712 10.93,65.634-3.164,42.205-20.91,78.961-41.387,114.809-13.325,23.326-30.344,43.968-47.652,64.329-19.597,23.054-39.643,45.727-59.548,68.518-3.76,4.305-7.264,9.076-11.785,12.416-7.268,5.37-15.815,4.838-23.723,1.5-21.905-9.246-43.803-18.547-65.371-28.544-34.706-16.086-67.663-35.396-98.008-58.645-28.136-21.556-55.436-44.294-74.035-75.377-11.468-19.168-20.81-39.222-24.84-61.381-1.131-6.219-1.67-12.545-2.48-18.822 0-8.162 0-16.324 0-24.486zm138.093,118.407c0.798,0.049 1.597,0.098 2.395,0.147 0,2.093 0.282,4.23-0.044,6.271-2.958,18.517-6.069,37.011-8.975,55.536-0.25,1.596 0.076,4.171 1.122,4.933 5.693,4.145 11.696,7.864 17.813,11.875 3.782-20.45 7.414-40.086 11.046-59.722 0.816,0.104 1.632,0.209 2.448,0.313 3.69,21.588-6.297,41.888-7.588,63.512 6.1,3.017 12.435,6.151 19.356,9.575 0.534-17.943 2.253-34.93 6.903-51.596 1.294,4.038 1.505,8.007 1.254,11.947-0.718,11.255-1.11,22.569-2.639,33.721-0.999,7.29 1.874,10.644 8.054,13.312 27.057,11.685 54.067,23.485 80.912,35.646 5.566,2.522 8.832,1.563 12.667-2.846 12.496-14.368 25.695-28.134 37.992-42.665 17.168-20.287 34.472-40.524 50.457-61.733 29.574-39.238 52.764-81.684 60.977-131.008 3.612-21.694 2.07-42.988-5.508-63.548-7.515-20.391-19.57-37.989-33.886-54.446-10.653-12.247-22.702-20.907-38.049-26.045-14.674-4.912-29.379-4.857-44.163-2.506-12.976,2.064-25.656,5.14-37.222,12.332-16.857,10.482-32.584,22.14-45.908,36.935-5.756,6.392-7.795,6.488-14.974,1.486-5.733-3.995-11.054-8.809-17.244-11.874-15.132-7.492-30.697-14.43-47.942-14.91-13.772-0.383-28.119-1.981-41.261,1.062-36.026,8.343-62.722,29.891-80.286,62.742-9.521,17.807-12.187,36.847-11.692,56.546 0.251,9.977 1.408,19.931 2.156,29.895 6.996-18.871 11.089-38.264 19.718-56.249 0.663,3.048 0.665,5.967-0.062,8.692-4.731,17.734-9.652,35.416-14.424,53.139-0.711,2.642-1.995,5.746-1.239,8.055 2.75,8.395 6.254,16.542 9.474,24.783-0.004-19.996 13.682-63.895 21.754-66.771 0.071,0.547 0.304,1.107 0.181,1.574-5.599,21.333-11.2,42.665-16.917,63.966-0.388,1.447-1.675,2.652-2.952,4.589 2.849,4.983 6.17,10.79 9.708,16.977 5.582-23.415 11.955-45.637 20.018-67.32 0.947,0.235 1.894,0.471 2.841,0.706-0.908,4.953-1.48,9.996-2.785,14.842-4.633,17.202-9.585,34.318-14.228,51.517-0.679,2.517-1.435,6.01-0.264,7.844 3.593,5.626 8.106,10.665 12.416,16.127 1.821-8.665 3.142-16.663 5.225-24.458 3.073-11.499 6.578-22.888 10.152-34.244 0.836-2.658 2.686-4.997 4.069-7.483 0.668,0.273 1.337,0.545 2.005,0.818-0.185,1.672-0.174,3.394-0.585,5.009-4.02,15.816-8.143,31.607-12.173,47.42-4.55,17.851-4.278,18.864 7.809,29.365 2.162,1.878 4.535,3.512 6.942,5.359 3.763-31.091 12.602-64.735 18.446-68.037-0.305,3.505-0.256,6.623-0.887,9.597-4.164,19.626-8.484,39.22-12.713,58.832-0.25,1.157-0.691,2.969-0.128,3.496 4.727,4.412 9.668,8.595 14.581,12.88 3.488-21.351 7.569-41.653 13.545-61.555 3.454,8.652 0.594,16.914-0.768,25.161-1.918,11.608-4.526,23.1-6.551,34.693-0.403,2.306-0.416,5.915 0.954,7.074 4.826,4.081 10.332,7.356 16.043,11.253 3.929-21.481 5.576-42.61 12.624-62.538z"/>
                        <path d="m323.215,180.532c-11.437,0.54-21.869-7.32-24.496-19.698-2.074-9.769 0.643-20.268 14.992-27.034 16.595-7.825 38.338,2.266 41.542,19.456 1.241,6.661-1.597,12.154-5.984,16.317-6.883,6.532-14.978,11.249-26.054,10.959z"/>
                        <path d="m138.898,167.131c10.239,0.462 18.598,4.189 24.964,12.702 8.553,11.437 4.653,30.666-13.57,34.835-11.712,2.68-22.732-0.233-30.92-9.83-6.064-7.108-7.682-15.335-4.207-24.161 3.714-9.432 12.03-12.042 20.963-13.526 0.9-0.15 1.846-0.02 2.77-0.02z"/>
                        <path d="m233.191,201.992c-18.463-0.352-33.732-13.583-33.995-29.657-0.069-4.211 0.406-8.07 5.452-8.782 4.457-0.629 6.549,2.393 7.9,6.115 2.375,6.541 5.583,12.351 12.453,15.308 7.538,3.245 14.041,1.509 20.36-3.255 6.251-4.712 6.39-11.098 4.713-17.471-1.391-5.288 0.388-8.403 4.769-10.206 4.253-1.75 9.037,1.207 10.836,6.156 7.199,19.813-5.703,34.627-22.764,40.173-3.09,1.006-6.475,1.103-9.724,1.619z"/>
                        <path d="m201.168,384.698c-0.87-2.062-2.637-4.202-2.466-6.174 1.224-14.102 2.828-28.172 4.369-42.246 0.096-0.879 0.683-1.705 1.041-2.555 0.868,0.363 1.736,0.726 2.604,1.088-1.047,16.37-2.093,32.739-3.14,49.109-0.803,0.26-1.605,0.519-2.408,0.778z"/>
                        <path d="m222.055,387.444c-4.873-5.745-5.046-15.022-1.052-37.842 3.141,2.956 4.044,30.448 1.052,37.842z"/>
                        <path d="m240.862,361.741c-0.458,6.595-0.916,13.19-1.402,20.177-4.79-3.306-4.603-11.907-0.192-20.378 0.531,0.067 1.062,0.134 1.594,0.201z"/>
                        <path d="m257.434,380.447c-4.179-5.294-3.756-9.74 1.05-14.765-0.375,5.277-0.661,9.306-1.05,14.765z"/>
                    </g>
                </svg>
                <span className="font-semibold text-xl tracking-tight">RieBoard</span>
            </a>
        </Link>

      {/* Mobile Button */}
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Menus */}
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Home</a>
          </Link>
          <Link href="/blog">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Blog</a>
          </Link>
          <Link href="/about">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">About</a>
          </Link>
        </div>
        <div>
        <Link href="/upload">
            <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white 
            border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">Upload</a>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
