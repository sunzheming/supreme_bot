import requests, requests.utils, pickle
import ConfigParser
import time, datetime
from lxml import html
import json
import sys
import os
import re

HOST = 'http://www.supremenewyork.com'
LIST_URL = 'http://www.supremenewyork.com/shop/all/shirts'
COLOR_KEYWORD = 'navy'
COOKIES_FILE_01 = 'cookies/order_cookie_1'
CREDIT_CARD_FILE = 'credit_card/cc001'
TARGET_TIME = '06/11/2015 11:00am'
#TARGET_TIME = '06/11/2015 2:20am'
KEY_WORD1 = 'supreme'
KEY_WORD2 = 'champion'
KEY_WORD3 = 'jersey'

class SupremeBot(object):
    """supreme bot class consists of a html loader, parser, and order summit robot
    Attributes:
    url_list, tuple : list of targeting items urls,
    """

    def __init__(self):
        """initiate bot object"""
        self.url_list = []
        self.cookies_dict = {}
        self.session = requests.session()


    def scheduleTimer(self, offset):
        #response = requests.get('http://www.supremenewyork.com/')
        #html_txt = response.text
        #tree = html.fromstring(html_txt)
        #web_time = tree.xpath('//time/b/text()')
        #time_zone = tree.xpath('//*[@id="time-zone-name"]/text()')
        #stmp = time.mktime(datetime.datetime.strptime(web_time[0], "%m/%d/%Y %I:%M%p").timetuple())
        now_stmp = time.time()
        target_stmp = time.mktime(datetime.datetime.strptime(TARGET_TIME, "%m/%d/%Y %I:%M%p").timetuple())
        sleep_sec=float(target_stmp - now_stmp + offset)
        print now_stmp
        print target_stmp
        print 'start in :'+str(sleep_sec)
        time.sleep(sleep_sec)
        print datetime.datetime.now()

    def addUrl(self, url, type):
        """add new url into list container, url address and type of item"""
        #print url + "==>" + type
        self.url_list.append((url, type))


    def start_process(self):
        for item in self.url_list:
            self.addToCart(item)


    def addToCart(self, item):
        response = self.session.get(item[0], cookies=self.session.cookies)
        html_txt = response.text
        tokens = item[0].split('/')
        name = tokens[len(tokens)-1]
        tree = html.fromstring(html_txt)
        style_list = tree.xpath('//*[@data-sold-out="false"]/@href')
        #print style_list
        if len(style_list) != 0:
            sub_href = ''
            for style in style_list:
                if COLOR_KEYWORD in style :
                    sub_href = style
                    break
            if sub_href == '' : return
            response = self.session.get(HOST + sub_href)
            #print HOST + sub_href
            reload_html = response.text
            tree = html.fromstring(reload_html)
            authenticity_token = tree.xpath('//*[@name="authenticity_token"]/@value')
            size_list = tree.xpath('//*[@name="size"]/option/@value')
            #print name
            #print authenticity_token
            #print size_list[0]
            #FIXME
            data = {"authenticity_token":authenticity_token[0], "size":size_list[0], "utf8":'&#x2713;'}
            #data = {"authenticity_token":authenticity_token[0], "utf8":'&#x2713;', "qty":1, "size":27091}
            #print data
            url = tree.xpath('//*[@class="add"]/@action')
            url = HOST + url[0]
            #print url
            results = self.session.post(url,params=data, cookies=self.session.cookies)
            with open(COOKIES_FILE_01, 'w') as f:
                cookies_dict = requests.utils.dict_from_cookiejar(self.session.cookies)
                #print cookies_dict
                pickle.dump(cookies_dict, f)


    def scanItemsList(self):
        response = self.session.get(LIST_URL)
        html_txt = response.text
        tree = html.fromstring(html_txt)
        items_list = tree.xpath('//*[@class="inner-article"]/a/@href')
        for item in items_list:
            tokens = item.split('/')
            if len(tokens) > 4 and KEY_WORD1 in tokens[3] and KEY_WORD2 in tokens[3] and KEY_WORD3 in tokens[3] and tokens[4] == COLOR_KEYWORD:
                self.addUrl(HOST+'shop/'+tokens[2]+'/'+ tokens[3]+'/'+ COLOR_KEYWORD, tokens[2])
        print self.url_list

    def viewShoppingCart(self):
        with open(COOKIES_FILE_01) as f:
            cookies = requests.utils.cookiejar_from_dict(pickle.load(f))
            response = self.session.get('http://www.supremenewyork.com/shop/cart', cookies= cookies)
            html_txt = response.text
            tree = html.fromstring(html_txt)
            items = tree.xpath('//*[@class="cart-description"]/text()')
            #items-countnew
            items_count = tree.xpath('//*[@id="items-count"]/text()')
            subtotal = tree.xpath('//*[@class="subtotal-span"]/text()')
            print "items count: " + items_count[0] + "subtotal: " + subtotal[0]
            print items


    def checkoutItems(self, creditCard):
        with open(COOKIES_FILE_01) as f:
            cookies = requests.utils.cookiejar_from_dict(pickle.load(f))
            response = self.session.get('https://www.supremenewyork.com/checkout', cookies= cookies, verify=True)
            cookies_dict = requests.utils.dict_from_cookiejar(self.session.cookies)
            #print cookies_dict
            html_txt = response.text
            tree = html.fromstring(html_txt)
            authenticity_token = tree.xpath('//*[@name="authenticity_token"]/@value')
            #"order[order[billing_address_2]]":creditCard.getFields('order[billing_address_2]'),
            form_data = {
                    "utf8":'&#x2713;',
                    "authenticity_token":authenticity_token[0],
                    "order[billing_name]":creditCard.getFields('name'),
                    "order[email]":creditCard.getFields('email'),
                    "order[tel]": creditCard.getFields('tel'),
                    "order[billing_address]":creditCard.getFields('billing_address'),
                    "order[billing_address_2]":creditCard.getFields('billing_address_2'),
                    "order[billing_zip]":creditCard.getFields('billing_zip'),
                    "order[billing_city]":creditCard.getFields('billing_city'),
                    "order[billing_state]":creditCard.getFields('billing_state'),
                    "order[billing_country]":creditCard.getFields('billing_country'),
                    "same_as_billing_address":1,
                    "store_address":1,
                    "store_credit_id":'',
                    "credit_card[number]":creditCard.getFields('card_number'),
                    "credit_card[type]":creditCard.getFields('card_type'),
                    "credit_card[month]":creditCard.getFields('card_exp_date_month'),
                    "credit_card[year]":creditCard.getFields('card_exp_date_year'),
                    "credit_card[verification_value]":creditCard.getFields('card_verification_value'),
                    "order[terms]":1,
                    "hpcvv":""
                    }
            self.session.headers.update({
                'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
                'Referer':'https://www.supremenewyork.com/checkout',
                'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36',
                })
            submit_response = self.session.post('https://www.supremenewyork.com/checkout', cookies=self.session.cookies, data=form_data)
            tree = html.fromstring(submit_response.text)
            error = tree.xpath('//*[@class="errors"]/text()')
            order_no = tree.xpath('//*[@id="order-no"]/text()')
            confirmation = tree.xpath('//*[@id="confirmation"]/text()')
            subtotal = tree.xpath('//*[@id="subtotal"]/text()')
            shipping_fee = tree.xpath('//*[@id="shipping"]/text()')
            print error
            print order_no
            print confirmation
            print subtotal
            print shipping_fee


class CreditCardInfo(object):
    def __init__(self, file):
        self.config = ConfigParser.ConfigParser()
        self.config.read(file)
        self.section = self.config.sections()[0]

    def getFields(self, key):
        return self.config.get(self.section, key)


def main():
    creditCard = CreditCardInfo('credit_card/cc001')
    bot = SupremeBot()
    #bot.scanItemsList()
    #bot.scheduleTimer(0)
    bot.addUrl('https://www.supremenewyork.com/shop/shirts/zip-front-guayabera-shirt', 'shirt')
    bot.start_process()
    #bot.viewShoppingCart()
    bot.checkoutItems(creditCard)


if __name__ == '__main__':
    main()
