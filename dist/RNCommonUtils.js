import { NativeModules, Platform } from 'react-native';
const RNCommonUtils = Platform.OS === "ios" ? NativeModules.RNCommonUtilsIOS : NativeModules.RNCommonUtilsAndroid;
export default {
    //return number seconds
    lastModified(filePath) {
        return RNCommonUtils.lastModified(filePath);
    },
    /**
     * IOS: đọc file trong bundle
     * Android: Đọc file trong Asset Folder
     * */
    readFileFromAssetFolder(fileSubPath, isDecrypt) {
        return new Promise(function (resolve, reject) {
            RNCommonUtils.readFileFromAssetFolder(fileSubPath, isDecrypt, (value) => {
                resolve(value);
            }, (error) => {
                reject(error);
            });
        });
    },
    saveIntPreference(key, value) {
        return RNCommonUtils.saveIntPreference(key, value);
    },
    getStringSetting() {
        return RNCommonUtils.getStringSetting();
    },
    async getCurrentLanguageCode() {
        return await RNCommonUtils.getCurrentLanguageCode();
    },
    setVIPUser() {
        return RNCommonUtils.setVIPUser();
    },
    async isVIPUser() {
        return await RNCommonUtils.isVIPUser();
    },
    getAppName() {
        return RNCommonUtils.getAppName();
    },
    getBoolPref(pKey) {
        return RNCommonUtils.getBoolPref(pKey);
    },
    /**
     * fileAssetPath: sub path, với android là thư mục asset
     * */
    playSoundAssetFile(fileAssetPath, volume = 0) {
        console.log("playSoundAssetFile: ", fileAssetPath);
        return RNCommonUtils.playSoundAssetFile(fileAssetPath, volume);
    }
};
