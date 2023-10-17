//feature-1/unique key generation
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// feature-2/generate short url function
function generateShortUrl (longURL) {
    // shortening algorithm
    const shortURL = encode(longURL);
    urlMap[shortURL] = longURL;
    return shortURL;
}

// feature-3/encode long url
function ecodeURL(longURL) {

}

// feature-4/ Store the shortened URLs
const urlMap = {}

// feature-5/ Decode the short URL
function decodeURL(shortURL) {
    //Retreive the long URL from the data store based on the short URL
}

// feature-6/Redirect users
function redirectToLongURL(shortURL) {
    const longURL = decodeURL(shortURL);
    if (longURL) {
        window.location.href = longURL;
    } else {
        alert('Short URL not found')
    }
}


