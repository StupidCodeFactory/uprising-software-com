(function($K){

    $K.add('module', 'uprising-menu', {
        init: function(app, context)
        {
            ['#robust-software-delivery', '#modular-and-decoupled-architecture']
            this.app = app;
            this.nodes = (this.nodes ||[])
            this.nodes.push(context.$target.nodes)
            console.log(app)
        },
        // catch event
        ontoggle: {

            open: function(module) {
                console.log(module)
                console.log('Toggle #mytoggle is open.');
            },
            opened: function(module) {
                console.log(module)
                console.log('Toggle #mytoggle is opened.');

            },
            closed: function(module) {
                console.log(module)
                console.log('Toggle #mytoggle is classoe.');

            }
        }
    });
})(Kube);
