Rickshaw.namespace('Rickshaw.Graph.Renderer.DashedLine');

Rickshaw.Graph.Renderer.DashedLine = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

	name: 'dashedline',

	defaults: function($super) {

		return Rickshaw.extend( $super(), {
			unstack: true,
			fill: false,
			stroke: true,
			strokeWidth: 2,
			strokeDashArray: '10,10'

		} );
	},

	seriesPathFactory: function() {

		var graph = this.graph;

		var factory = d3.svg.line()
			.x( function(d) { return graph.x(d.x) } )
			.y( function(d) { return graph.y(d.y) } )
			.interpolate(this.graph.interpolation).tension(this.tension);

		factory.defined && factory.defined( function(d) { return d.y !== null } );
		return factory;
	}
} );

