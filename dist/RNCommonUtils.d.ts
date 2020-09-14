declare const _default: {
    lastModified(filePath: string): Promise<number>;
    /**
     * IOS: đọc file trong bundle
     * Android: Đọc file trong Asset Folder
     * */
    readFileFromAssetFolder(fileSubPath: string, isDecrypt: boolean): Promise<string>;
    saveIntPreference(key: String, value: Number): Promise<void>;
    getStringSetting(): Promise<string>;
    getCurrentLanguageCode(): Promise<string>;
    setVIPUser(): Promise<void>;
    isVIPUser(): Promise<boolean>;
    getAppName(): Promise<string>;
    getBoolPref(pKey: string): Promise<boolean>;
    /**
     * fileAssetPath: sub path, với android là thư mục asset
     * */
    playSoundAssetFile(fileAssetPath: string, volume?: number): any;
};
export default _default;
