"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQueryString = exports.tryParseJson = void 0;
const tryParseJson = (jsonString) => {
    try {
        const json = JSON.parse(jsonString);
        // handle non-exception-throwing cases
        if (json && typeof json === 'object' && json !== null) {
            return json;
        }
    }
    catch (e) {
        console.error(`error parsing json string '${jsonString}'`, e);
    }
    return null;
};
exports.tryParseJson = tryParseJson;
const buildQueryString = (params) => Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
exports.buildQueryString = buildQueryString;
