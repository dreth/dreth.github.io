from urllib import parse

links = []

with open('./cool_links/scripts/links_to_process.txt') as f:

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
        print(f"'{page_name}':\"{lang}_{url_dir}\",")
