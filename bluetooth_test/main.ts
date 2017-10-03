basic.forever(() => {
    bluetooth.advertiseUrl(
    "https://pxt.makecode.com",
    7,
    true
    )
    bluetooth.startTemperatureService()
})
