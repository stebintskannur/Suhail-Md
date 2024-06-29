const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918848063606";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_20_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNSxcbiAgICAgICAgNzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NixcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgMjQzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDk2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMixcbiAgICAgICAgOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAzMixcbiAgICAgICAgODgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAwLFxuICAgICAgICA3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMixcbiAgICAgICAgMTU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTE0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ3I2RS9EaEJtSUt5UFdOODdoSjZZOUVROXpEbkFuR2lTMEZDQlk2QmNKRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRGtpOUZySUxUY3liY3VxMm4yQ2xyZ1wiLFxuICBcInBob25lSWRcIjogXCI5Mjc2ZThiOC1mZTk3LTQzNzMtODExMC05NzAzNjcyMDFlNzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgMTYzLFxuICAgICAgMjU1LFxuICAgICAgMjM1LFxuICAgICAgNTQsXG4gICAgICAyMTksXG4gICAgICA2LFxuICAgICAgOTYsXG4gICAgICAxMjYsXG4gICAgICAyMTgsXG4gICAgICA0NyxcbiAgICAgIDc3LFxuICAgICAgMjM0LFxuICAgICAgNDQsXG4gICAgICAyMjgsXG4gICAgICAxNzIsXG4gICAgICAxNjIsXG4gICAgICA3NixcbiAgICAgIDgxLFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICA3NSxcbiAgICAgIDE1MixcbiAgICAgIDE2LFxuICAgICAgMTYyLFxuICAgICAgOCxcbiAgICAgIDYxLFxuICAgICAgMTY4LFxuICAgICAgMTEzLFxuICAgICAgMTMwLFxuICAgICAgODMsXG4gICAgICAyMjQsXG4gICAgICAyMzgsXG4gICAgICAxMDgsXG4gICAgICA4MSxcbiAgICAgIDExNSxcbiAgICAgIDksXG4gICAgICAyMTQsXG4gICAgICAxOTcsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlFONkVMNzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODg0ODA2MzYwNjo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk1NzY5MDIxNzYzNzQ2OjgwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wzVHZNa0hFSkd3Z0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNmE1NEJMVmtlK24yOFZYUDg2THpRUFhNdzZobXdMY0RhYWRTR21GL0tVMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6WGN5T0tvbjNxcEpjWVd4SCtENVZLWjNJK1pPbHlmVm1lTklzaXhQVzR0aWptVkprQnczRWVyc25Jd1Q4Wk1UNS9ycE1QMWZxZjBXWWhJdzFCMDVDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4TlB2SzRpdElORlQ5Y2dvSU0rNUh0NFdLU00vTjlEK3ZmVmtxd2NPM3A4Z1pZVEdLbVE0WGRyeUczK0c1eGxZQVhYMkxJZFNhbGxEWFV6U2d2eW9DUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTg4NDgwNjM2MDY6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjcwODA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDM5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIMzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLczJyRUhzWWhldzAzZFRyTFVSRitKUk5xWTVCWmg3bVFXWGF4RzNud1VFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMzMxMzQwMDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
