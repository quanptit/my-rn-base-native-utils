import {NativeModules, Platform} from 'react-native'

const RNCommonUtils = Platform.OS === "ios" ? NativeModules.RNCommonUtilsIOS : NativeModules.RNCommonUtilsAndroid;
export default {
    //return number seconds
    lastModified(filePath: string): Promise<number> {
        return RNCommonUtils.lastModified(filePath);
    },
    /**
     * IOS: đọc file trong bundle
     * Android: Đọc file trong Asset Folder
     * */
    readFileFromAssetFolder(fileSubPath: string, isDecrypt: boolean): Promise<string> {
        return new Promise(function (resolve, reject) {
            RNCommonUtils.readFileFromAssetFolder(fileSubPath, isDecrypt, (value) => {
                resolve(value)
            }, (error) => {
                reject(error)
            })
        })
    },
    saveIntPreference(key: String, value: Number): Promise<void> {
        return RNCommonUtils.saveIntPreference(key, value)
    },
    getStringSetting(): Promise<string> {
        return RNCommonUtils.getStringSetting()
    },
    async getCurrentLanguageCode(): Promise<string> {
        return await RNCommonUtils.getCurrentLanguageCode();
    },
    setVIPUser(): Promise<void> {
        return RNCommonUtils.setVIPUser()
    },
    async isVIPUser(): Promise<boolean> {
        return await RNCommonUtils.isVIPUser();
    },
    getAppName(): Promise<string> {
        return RNCommonUtils.getAppName()
    },
    getBoolPref(pKey: string): Promise<boolean> {
        return RNCommonUtils.getBoolPref(pKey);
    },
    /**
     * fileAssetPath: sub path, với android là thư mục asset
     * */
    playSoundAssetFile(fileAssetPath: string, volume: number = 0) {
        console.log("playSoundAssetFile: ", fileAssetPath);
        return RNCommonUtils.playSoundAssetFile(fileAssetPath, volume)
    }
}
