import undetected_chromedriver as chr
import sys

#входит на вебдрайвере в аккаунт фикбука
def login(user,passw,driver):
  logn = """
    fetch("https://ficbook.net/login_check", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://ficbook.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "login=@log&password=@pass&remember=on",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
  """.replace("@log",user).replace("@pass",passw)
  print("Logged!")
  driver.execute_script(logn)
  
#загружает в память джаваскрипт, который потом будет вставлен в вебдрайввер
def loadjs():
  file = open('script',mode='r',encoding="utf8")
  r = file.readlines()
  file.close()
  return r

js = loadjs()

d = chr.Chrome(version_main = 109)
d.get("https://ficbook.net")
login(sys.argv[1],sys.argv[2],d)
d.refresh()
d.execute_script(js)
print("Runner enable!")

while(True):
    pass
