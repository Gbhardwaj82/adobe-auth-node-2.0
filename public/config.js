const adobeApiKey = "";
const adobeApiSecret = "";
const webhookUrl = "https://hook.app.workfrontfusion.com/g2rpm8m59fsylx69ktjqt2cwleypxmga"; //Gaurav
//const webhookUrl = "https://hook.app.workfrontfusion.com/r5meqb0dibqg561rsjyvvk1msnrcf8k4"; //chetna
const webhookCreateTemplate = "https://hook.app.workfrontfusion.com/n1mvv7top809vhgqynmcexx4rvc7fgwm";
const webhookCreateVariation = "https://hook.app.workfrontfusion.com/apaiwnk6je6w6bsk2lcfft3umwundves";


try {
  if (module) {
    module.exports = {
      adobeApiKey: adobeApiKey,
      adobeApiSecret: adobeApiSecret,
      webhookUrl: webhookUrl,
      webhookCreateTemplate: webhookCreateTemplate,
      webhookCreateVariation: webhookCreateVariation
    }
  }
}
catch (err) {}
