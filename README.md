# RPM_Pilot(WIP)
This project is under development now.


## Install

### Environment setup

To run this project, you need to have environment for react native project. To setup your environment, Please follow the [ios guide](https://facebook.github.io/react-native/docs/getting-started#installing-dependencies) for iOS and [android guide](https://facebook.github.io/react-native/docs/getting-started#installing-dependencies-3) for android.


### Next step

After you finish the environment setup, please run following commands in your terminal.
> git clone https://github.com/WebMobi59/RPM_Pilot.git  

> cd RPM_Pilot/   

> npm install


### Link necessary packages

> react-native link react-native-splash-screen  

> react-native link react-native-gesture-handler

> react-native link react-native-vector-icons


### Google Maps API

Please get Google Maps API Key and put it at line 6 in **./add/index.js**. Please look at [here](https://developers.google.com/maps/documentation/geocoding/start) for more about google geocoding.


## Run

### For iOS

For iOS, please run following command.
> react-native run-ios  

To run Qa scheme, Try this command on terminal.
> react-native run-ios --scheme RPM_Pilot_Qa

Or you can run project with any scheme on Xcode.

For more details, please reference [official document for iOS](https://facebook.github.io/react-native/docs/getting-started#running-your-react-native-application-1)


### For Android

For Android, Please run 
> react-native run-android

For more details, please reference [official document for android](https://facebook.github.io/react-native/docs/getting-started#running-your-react-native-application-2)
