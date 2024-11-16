/* eslint-disable no-unused-vars */
import pkg from './package.json'

export default config => {
  /**
   * App version number. Should be incremented as part of a release cycle. in package.json
   */
  const VERSION = pkg.version

  /**
   * Uses built-in Expo env vars
   *
   * @see https://docs.expo.dev/build-reference/variables/#built-in-environment-variables
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const PLATFORM = process.env.EAS_BUILD_PLATFORM

  const IS_DEV = process.env.EXPO_PUBLIC_ENV === 'development'
  const IS_TESTFLIGHT = process.env.EXPO_PUBLIC_ENV === 'testflight'
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const IS_PRODUCTION = process.env.EXPO_PUBLIC_ENV === 'production'

  const ASSOCIATED_DOMAINS = [
    // When testing local services, enter an ngrok (et al) domain here. It must use a standard HTTP/HTTPS port.
    ...(IS_DEV || IS_TESTFLIGHT ? [] : [])
  ]

  return {
    ...config,
    ios: {
      supportsTablet: false,
      bundleIdentifier: process.env.EXPO_PUBLIC_IOS_IDENTIFIER,
      config: {
        usesNonExemptEncryption: false
      },
      infoPlist: {
        UIBackgroundModes: ['remote-notification'],
        NSCameraUsageDescription:
          'Used for profile pictures, posts, and other kinds of content.',
        NSMicrophoneUsageDescription:
          'Used for posts and other kinds of content.',
        NSPhotoLibraryAddUsageDescription:
          'Used to save images to your library.',
        NSPhotoLibraryUsageDescription:
          'Used for profile pictures, posts, and other kinds of content'
      },
      associatedDomains: ASSOCIATED_DOMAINS,
      privacyManifests: {
        NSPrivacyAccessedAPITypes: [
          {
            NSPrivacyAccessedAPIType:
              'NSPrivacyAccessedAPICategoryFileTimestamp',
            NSPrivacyAccessedAPITypeReasons: ['C617.1', '3B52.1', '0A2A.1']
          },
          {
            NSPrivacyAccessedAPIType: 'NSPrivacyAccessedAPICategoryDiskSpace',
            NSPrivacyAccessedAPITypeReasons: ['E174.1', '85F4.1']
          },
          {
            NSPrivacyAccessedAPIType:
              'NSPrivacyAccessedAPICategorySystemBootTime',
            NSPrivacyAccessedAPITypeReasons: ['35F9.1']
          },
          {
            NSPrivacyAccessedAPIType:
              'NSPrivacyAccessedAPICategoryUserDefaults',
            NSPrivacyAccessedAPITypeReasons: ['CA92.1', '1C8F.1']
          }
        ]
      }
    },
    extra: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL || 'https://default-api.com'
    }
  }
}
