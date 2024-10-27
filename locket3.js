#!url=https://raw.githubusercontent.com/vuong2023/shad/main/modules/Locket_ohb.sgmodule
#!name=emhoa68
#!desc=Crack By emhoa68

[Script]
# ~ By emhoa68
# ～ Egern transfer to Shadowrocket & Surge & LanceX
revenuecat = type=http-response, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$), script-path=https://raw.githubusercontent.com/emhoa68/emhoa68/master/locket1.js, requires-body=true, max-size=-1, timeout=60

deleteHeader = type=http-request, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers), script-path=https://raw.githubusercontent.com/vuong2023/shad/main/js/deleteHeader.js, timeout=60

[MITM]
hostname = %APPEND% api.revenuecat.com