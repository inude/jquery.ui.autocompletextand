///
//  daomin
/// 

(function($){

$.widget('ui.autocompletextand',$.ui.autocomplete,{
	version: "1.11.4",
	defaultElement: "<input>",
	_create:function()
	{
		 this._super();
		 this.element.wrap('<div>');		 
		 this.container = this.element.closest('div');			 
		 this.button = $('<button>').html('&bull;&bull;&bull;').insertAfter(this.element);	
		 
		 this.options.position.at = 'left-1 bottom+2'
		 if(this.options.showAdd){		 
		 	this.addbutton = $('<button>').html('+').insertBefore(this.element);
		 	this.options.position.at = 'left-21 bottom+2'
		 }
		 
		 this._initSize();
		 this._initStyle();
		 this._initAction();
	},
	_initSize:function(){
		this.container.outerWidth( this.element.outerWidth() - 4);
		this.element.outerWidth( this.container.outerWidth() - 16);
		this.button.outerHeight(this.element.outerHeight())
		
		if(this.addbutton){		 
		 	this.addbutton.outerHeight(this.element.outerHeight());
		 	this.element.outerWidth( this.container.outerWidth() - 38);
		}
	},
	_initStyle:function()
	{
		this.container.addClass('ui-autocompletexpand-container ui-autocompletexpand-input-border')
		this.element.css({'border':'0','border-radius':'0'})
		this.button.css({'padding':'0 2px','border': '0','cursor':'pointer','width':'20px'})
		this.button.addClass('ui-autocompletexpand-button')		
		if(this.addbutton){		 
		 	this.addbutton.css({'padding':'0 2px','border': '0','cursor':'pointer','width':'20px'})
			this.addbutton.addClass('ui-autocompletexpand-button')		
		}
	},
	_initAction:function(){
		var _this = this;
		
		this.element.on({
			'focus':function(){_this.container.removeClass('ui-autocompletexpand-input-border').addClass('ui-autocompletexpand-focus-border');
				_this.button.removeClass('ui-autocompletexpand-button-focus').addClass('ui-autocompletexpand-button-focus')
			},
			'blur':function(){_this.container.addClass('ui-autocompletexpand-input-border').removeClass('ui-autocompletexpand-focus-border');_this.button.removeClass('ui-autocompletexpand-button-focus')}
		});
		
		this.button.on({'click':function(){	_this._trigger('lookup',null,_this.element.val())}})
		if(this.addbutton){		 
		 	this.addbutton.on({'click':function(){	_this._trigger('add',null,_this.element.val())}})
		}
	},	
	_resizeMenu: function() {
		var ul = this.menu.element;
		ul.outerWidth( Math.max(
			// Firefox wraps long text (possibly a rounding bug)
			// so we add 1px to avoid the wrapping (#7513)
			ul.width( "" ).outerWidth() + 1,
			this.container.outerWidth()
		) );
	},

	_destroy: function() {
		this.element.unwrap('<div>');
		this.element.removeAttr('style');
		this.button.remove();
		if(this.addbutton){		 
		 	this.addbutton.remove();
		}
		this.container.remove();
		this._super();		
	}		
})

})(jQuery)
