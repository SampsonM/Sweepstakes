import moment from "moment";

export default {
  timestampValid: (req) => {
    const userTime = req.body.sync;

    if (userTime) {
      const oneMinute = { minutes: 1 };
      const inputTime = moment(userTime).format();
      const currentTime = moment().format();
      const laterTime = moment(currentTime).add(oneMinute).format();
      const earlierTime = moment(currentTime).subtract(oneMinute).format();
  
      if (moment(inputTime).isBefore(laterTime) && moment(inputTime).isAfter(earlierTime)) {
        return true;
      }
    }
  },

  isGetRequest: (req) => {
    return req.method === "GET"
  },

  isEmail: (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
  },

  isInt: (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  },

  isPhoneNumber: (value) => {
    return /^(((\+44\s?|0044\s?)?|(\(?0))((2[03489]\)?\s?\d{4}\s?\d{4})|(1[23456789]1\)?\s?\d{3}\s?\d{4})|(1[23456789][234578][0234679]\)?\s?\d{6})|(1[2579][0245][0467]\)?\s?\d{5})|(11[345678]\)?\s?\d{3}\s?\d{4})|(1[35679][234689]\s?[46789][234567]\)?\s?\d{4,5})|([389]\d{2}\s?\d{3}\s?\d{4})|([57][0-9]\s?\d{4}\s?\d{4})|(500\s?\d{6})|(7[456789]\d{2}\s?\d{6})))$/.test(value)
  }
}