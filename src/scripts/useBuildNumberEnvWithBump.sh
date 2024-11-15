#!/bin/bash
outputIos=$(eas build:version:get -p ios)
outputAndroid=$(eas build:version:get -p android)
currentIosVersion=${outputIos#*buildNumber - }
currentAndroidVersion=${outputAndroid#*versionCode - }

APP_IOS_BUILD_NUMBER=$((currentIosVersion+1))
APP_ANDROID_VERSION_CODE=$((currentAndroidVersion+1))

bash -c "APP_IOS_BUILD_NUMBER=$APP_IOS_BUILD_NUMBER APP_ANDROID_VERSION_CODE=$APP_ANDROID_VERSION_CODE $*"