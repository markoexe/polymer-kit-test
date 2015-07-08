/*
 Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

(function(document) {
    'use strict';

    // Grab a reference to our auto-binding template
    // and give it some initial binding values
    // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
    var app = document.querySelector('#app');

    app.displayInstalledToast = function() {
        document.querySelector('#caching-complete').show();
    };

    // Listen for template bound event to know when bindings
    // have resolved and content has been stamped to the page
    app.addEventListener('dom-change', function() {
        console.log('Our app is ready to rock!');
    });

    // See https://github.com/Polymer/polymer/issues/1381
    window.addEventListener('WebComponentsReady', function() {
        // imports are loaded and elements have been registered
    });

    // Close drawer after menu item is selected if drawerPanel is narrow
    app.onMenuSelect = function() {
        var drawerPanel = document.querySelector('#paperDrawerPanel');
        if (drawerPanel.narrow) {
            drawerPanel.closeDrawer();
        }
    };
    app.getUrlForRoute = function(route){
        switch (route)
        {
            case "users":
                return "elements/my-element/my-element.html";
            default:
                return "elements/my-element/my-element.html";
        }
    };
    app.handleResponse = function(e, detail, sender) {
        // e.target.import is the import document.
        //var link = document.createElement('link');
        //link.setAttribute('rel', 'import');
        //link.setAttribute('href', 'elements/app-module.html');
        //document.body.appendChild(link)

        //var app=document.createElement(this.name + "-app");
        //this.$.app.appendChild(app);

        var link = this.importHref(app.navigateToURL,
            function () {
                //<link rel="import" href="my-greeting/my-greeting.html">
                Polymer.dom(document.head.appendChild(link));

                var child = Polymer.dom(this.$.testDynamicContent).firstChild;

                if (child)
                    Polymer.dom(this.$.testDynamicContent).removeChild(child);

                var splitted = app.navigateToURL.split('/');

                var elementName = splitted[splitted.length - 1].split('.')[0];

                var element = document.createElement(elementName);

                this.$.testDynamicContent.appendChild(element);
            },
            function () {
                console.log("error");
            }
        )
    };
})(document);
