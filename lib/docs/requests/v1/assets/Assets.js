/**
 * Commands for working with external assets
 * @namespace CommandRequester.assets
 */

    /**
     * Command to retrieve external asset and store in local cache by name.
     * @method CommandRequester.assets#load
     * @param  {string}   uri Uri where the asset to fetch is.
     * @param  {string}   name Name that the asset will be call by.
     * @returns {FetchAssetToken}
     */

    /**
     * Command to unload asset by name.
     * @method CommandRequester.assets#unload
     * @param  {string}   name Name of asset to unload.
     * @return {UnloadAssetToken}
     */