Router.configure({
 layoutTemplate: 'layout'
});

Router.route('/', {name: 'welcome'});

Router.route('/about', {name: 'about'});

Router.route('/work', {name: 'work'});

Router.route('/blog', {name: 'comingSoon'});

Router.route('/contact', {name: 'contact'});