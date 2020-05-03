import Vue from 'vue'

export default function enableFeatureFlags() {
  // enable feature flags?
  const cookies = Vue.$cookies.keys()

  const testRegex = new RegExp(/sweep/)

  cookies.forEach((cook) => {
    const cookieMatches = cook.match(testRegex)

    if (cookieMatches) {
      Vue.prototype[`$${cook}`] = true
    }
  })
}
