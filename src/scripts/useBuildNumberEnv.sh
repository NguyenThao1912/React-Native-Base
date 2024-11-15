#!/bin/bash
outputIos=$(eas build:version:get -p ios)
outputAndroid=$(eas build:version:get -p android)
APP_IOS_BUILD_NUMBER=${outputIos#*buildNumber - }
APP_ANDROID_VERSION_CODE=${outputAndroid#*versionCode - }

bash -c "APP_IOS_BUILD_NUMBER=$APP_IOS_BUILD_NUMBER APP_ANDROID_VERSION_CODE=$APP_ANDROID_VERSION_CODE $*"