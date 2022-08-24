function checkForBangs(bangQuery) {
    const bangsMap = [
      ["+g%21", "https://www.google.com/search?q="],
      ["+g!", "https://www.google.com/search?q="],
      ["+%21g", "https://www.google.com/search?q="],
      ["+!g", "https://www.google.com/search?q="],
      ["+b%21", "https://www.bing.com/search?q="],
      ["+b!", "https://www.bing.com/search?q="],
      ["+%21b", "https://www.bing.com/search?q="],
      ["+!b", "https://www.bing.com/search?q="],
      ["+d%21", "https://duckduckgo.com/?q="],
      ["+d!", "https://duckduckgo.com/?q="],
      ["+%21d", "https://duckduckgo.com/?q="],
      ["+!d", "https://duckduckgo.com/?q="],
      ["+w%21", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+w!", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+%21w", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+!w", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+e%21", "https://www.ecosia.org/search?method=index&q="],
      ["+e!", "https://www.ecosia.org/search?method=index&q="],
      ["+%21e", "https://www.ecosia.org/search?method=index&q="],
      ["+!e", "https://www.ecosia.org/search?method=index&q="],
      ["g%21+", "https://www.google.com/search?q="],
      ["g!+", "https://www.google.com/search?q="],
      ["%21g+", "https://www.google.com/search?q="],
      ["!g+", "https://www.google.com/search?q="],
      ["b%21+", "https://www.bing.com/search?q="],
      ["b!+", "https://www.bing.com/search?q="],
      ["%21b+", "https://www.bing.com/search?q="],
      ["!b+", "https://www.bing.com/search?q="],
      ["d%21+", "https://duckduckgo.com/?q="],
      ["d!+", "https://duckduckgo.com/?q="],
      ["%21d+", "https://duckduckgo.com/?q="],
      ["!d+", "https://duckduckgo.com/?q="],
      ["w%21+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["w!+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["%21w+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["!w+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["e%21+", "https://www.ecosia.org/search?method=index&q="],
      ["e!+", "https://www.ecosia.org/search?method=index&q="],
      ["%21e+", "https://www.ecosia.org/search?method=index&q="],
      ["!e+", "https://www.ecosia.org/search?method=index&q="],
      ["+g%21", "https://www.google.com/search?q="],
      ["+g!", "https://www.google.com/search?q="],
      ["+%21g", "https://www.google.com/search?q="],
      ["+!g", "https://www.google.com/search?q="],
      ["+b%21", "https://www.bing.com/search?q="],
      ["+b!", "https://www.bing.com/search?q="],
      ["+%21b", "https://www.bing.com/search?q="],
      ["+!b", "https://www.bing.com/search?q="],
      ["+d%21", "https://duckduckgo.com/?q="],
      ["+d!", "https://duckduckgo.com/?q="],
      ["+%21d", "https://duckduckgo.com/?q="],
      ["+!d", "https://duckduckgo.com/?q="],
      ["+w%21", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+w!", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+%21w", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+!w", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+e%21", "https://www.ecosia.org/search?method=index&q="],
      ["+e!", "https://www.ecosia.org/search?method=index&q="],
      ["+%21e", "https://www.ecosia.org/search?method=index&q="],
      ["+!e", "https://www.ecosia.org/search?method=index&q="],
      ["google%21+", "https://www.google.com/search?q="],
      ["google!+", "https://www.google.com/search?q="],
      ["%21google+", "https://www.google.com/search?q="],
      ["!google+", "https://www.google.com/search?q="],
      ["bing%21+", "https://www.bing.com/search?q="],
      ["bing!+", "https://www.bing.com/search?q="],
      ["%21bing+", "https://www.bing.com/search?q="],
      ["!bing+", "https://www.bing.com/search?q="],
      ["duckduckgo%21+", "https://duckduckgo.com/?q="],
      ["duckduckgo!+", "https://duckduckgo.com/?q="],
      ["%21duckduckgo+", "https://duckduckgo.com/?q="],
      ["!duckduckgo+", "https://duckduckgo.com/?q="],
      ["wikipedia%21+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["wikipedia!+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["%21wikipedia+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["!wikipedia+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["ecosia%21+", "https://www.ecosia.org/search?method=index&q="],
      ["ecosia!+", "https://www.ecosia.org/search?method=index&q="],
      ["%21ecosia+", "https://www.ecosia.org/search?method=index&q="],
      ["!ecosia+", "https://www.ecosia.org/search?method=index&q="],
    ];
  
    // Loop over all of the bangsMap
    for (let ix = 0; ix < bangsMap.length; ix++) {
      // Unpack pairs into ['bang', 'searchUrl']
      const bang = bangsMap[ix][0];
      const searchUrl = bangsMap[ix][1];
  
      // TEST-ME `q` is not defined!!
      if (bangQuery.includes(bang)) {
        let queryStr = bangQuery.replace(bang, "");
        document.location.replace(searchUrl + queryStr);
  
        // Bang replaced successfully, exiting loop & function
        return true; 
      }
    }
    // No bang replaced
    return false;
  }