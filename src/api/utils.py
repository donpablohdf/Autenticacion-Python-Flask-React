import os
from flask import jsonify, url_for


class APIException(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv


def has_no_empty_params(rule):
    defaults = rule.defaults if rule.defaults is not None else ()
    arguments = rule.arguments if rule.arguments is not None else ()
    return len(defaults) >= len(arguments)


css_file = os.getenv("CSS_PYTHON")
# print(css_file)
head_html = """<!DOCTYPE html>
<html class="h-100">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <title>API STARWARS</title>
        <style>
            #datos{
                background-image: url(https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png);
                background-repeat: no-repeat;
                background-size: 40%;
                
                background-position: center;
            }
        </style>
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
        
    <body class="h-100">
    <div class="h-100">
        

    """

footer_html = """
    </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
            crossorigin="anonymous"></script>
    </body>
</html>"""


def generate_sitemap(app):
    links = []
    for rule in app.url_map.iter_rules():
        if "GET" in rule.methods and has_no_empty_params(rule):
            url = url_for(rule.endpoint, **(rule.defaults or {}))
            if "/admin/" not in url and "/private" not in url and "/login" not in url and "/favorites" not in url and "/users" not in url:
                # print(url)
                links.append(url)
    # fin for
    links.pop()
    links_html = "".join(["<div class='list-group-item list-group-item-action text-warning'><i class='fab fa-galactic-republic fa-2x me-3 p-0'></i><a target='datos' class='text-dark text-decoration-none p-0 m-0 fs-4' href='" +
                          y + "' target='datos' >"
                          + y.replace("/api/", "").capitalize() + "</a></div>" for y in links])

    return head_html+"""
    
    <div class="d-flex bg-light">
        
        <div class="m-3 col-3" >
        
            <div class="d-flex justify-content-center flex-nowrap bg-dark text-warning p-4 border border-warning rounded"><i class="fab fa-old-republic fa-4x "></i><h1 class="ms-2 pt-2">STAR WARS API</h1></div>
            <h6 class="text-light bg-dark p-3 mt-3 border border-warning rounded">API HOSTS:</h6>
            <div class="list-group">"""\
                + links_html+"""
            </div>
        </div> 
        <div class="m-3 border col d-flex"><object id="datos" name="datos" type="text/json" width="100%" height="100%" data="http://localhost:3001/api/sections"></object></div>  
    </div>
    
    """\
        + footer_html
