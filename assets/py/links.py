from urllib import parse
import json
from bs4 import BeautifulSoup
import requests


# 1 = wikipedia
# 2 = anything
# 3 = wiktionary

def get_links(type):
    input('did you check everything?')

    with open('./data/links.json', 'r') as f:
        links = json.load(f)

    if type == 1:
        with open('./assets/py/links_to_process.txt') as f:

            for i,line in enumerate(f.read().splitlines()):
                # clean mobile stuff
                if '?wprov=sfla1' in line:
                    line = line.replace('?wprov=sfla1','')
                
                # get language
                try:
                    lang = line.split('https://')[1][0:2].upper()
                except:
                    continue

                # get page name
                try:
                    page_name = parse.unquote(line).split('/wiki/')[1].replace('_',' ')
                except:
                    continue
                
                # get url elements after /wiki/
                try:
                    url_dir = line.split('/wiki/')[1]
                except:
                    continue

                # assemble and print elements
                links['wikipedia'][page_name] = f"{lang}_{url_dir}"

        with open('./data/links.json', 'w') as f:
            json.dump(links, f, indent=4, ensure_ascii=False)
    
    elif type == 2:
        with open('./assets/py/links_to_process.txt') as f:

            for i,line in enumerate(f.read().splitlines()):

                # get site
                soup = BeautifulSoup(requests.get(line).text, 'html.parser')

                # get URL
                for title in soup.find_all('title'):
                    links['other_sites'][title.get_text()] = line 

    elif type == 3:
        with open('./assets/py/links_to_process.txt') as f:
            
            for i,line in enumerate(f.read().splitlines()):
                
                # get language
                try:
                    lang = line.split('https://')[1][0:2].upper()
                except:
                    continue

                # get page name
                try:
                    page_name = parse.unquote(line).split('/wiki/')[1].replace('_',' ')
                except:
                    continue
                
                # get url elements after /wiki/
                try:
                    url_dir = line.split('/wiki/')[1]
                except:
                    continue

                # assemble and print elements
                links['wiktionary'][page_name] = f"{lang}_{url_dir}"
    
    else:
        exit()

    with open('./data/links.json', 'w') as f:
            json.dump(links, f, indent=4, ensure_ascii=False)


# run function
get_links(1)
