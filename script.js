// TODO: Write Your JavaScript Code Here

function checkEquality(value1, value2) {
    if (value1 === value2) {
      // Data type ကို ပါ စစ် တယ်.
      console.log("They are equal in type and value");
    } else if (value1 == value2) {
      // data type ကို မကြည့်ဘူး
      console.log("They are equal in value");
    } else {
      // အပေါ်က တစ်ခုမှ မဟုတ်ရင် နောက်ဆုံး ဒါကို ပြမယ်။
      console.log("The values are not equal");
    }
  }
 checkEquality(0, "0"); // number data type = 0 , string data type = "0"