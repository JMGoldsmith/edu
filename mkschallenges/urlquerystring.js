function parseQueryString (url) {
  // Write your code here, and
  // return your final answer.
  results = []
  var decode = decodeURIComponent(url)
  if (decode.indexOf("?") != -1) {
    query = decode.split("?")[1]
    queries = query.split("&")
      for (i=0; i<queries.length; i++){
      r = queries[i].split("=")
        results.push(r)
      }
      
  }
  return results
}